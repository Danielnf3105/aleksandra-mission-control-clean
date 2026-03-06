// MediaOperations.js - Media & Broadcast Operations Control Center & Content Delivery Network Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const MediaOperations = () => {
  const [broadcastChannels, setBroadcastChannels] = useState([
    {
      id: 'channel_001',
      callSign: 'WXYZ-TV',
      name: 'Channel 7 News',
      type: 'TELEVISION',
      format: 'HD_4K',
      operator: 'Metro Broadcasting Corp',
      status: 'LIVE_ON_AIR',
      market: 'New York DMA',
      viewership: {
        current: 1247000,
        peak: 2890000,
        average: 1890000,
        share: 12.4, // percentage of market
        rating: 8.9 // household rating
      },
      content: {
        currentProgram: 'Evening News at 6',
        nextProgram: 'Prime Time Special Report',
        duration: 60, // minutes
        timeRemaining: 23,
        genre: 'News',
        liveIndicator: true
      },
      technical: {
        signalStrength: 98.7, // percentage
        videoQuality: '4K UHD',
        audioQuality: 'Dolby Digital 5.1',
        bitrate: 45.8, // Mbps
        latency: 2.3, // seconds
        uptime: 99.97, // percentage
        lastOutage: Date.now() - 12 * 24 * 60 * 60 * 1000
      },
      streaming: {
        concurrent: 456000,
        peakConcurrent: 789000,
        platforms: {
          website: 234000,
          youtube: 156000,
          facebook: 45000,
          mobile: 21000
        },
        cdn: 'CloudFlare Media',
        edge: 67, // edge servers
        bandwidth: 23.4 // Gbps
      },
      advertising: {
        currentSpot: 'Toyota Spring Sales Event',
        spotsRemaining: 8,
        revenue: 2890000, // $ monthly
        cpm: 12.45, // cost per mille
        fillRate: 96.8 // percentage
      },
      lastUpdate: Date.now() - 2 * 60 * 1000,
      alerts: ['High viewer surge detected', 'CDN edge server EU-West-3 degraded']
    },
    {
      id: 'channel_002',
      callSign: 'KQED-FM',
      name: 'Classical 88.5',
      type: 'RADIO',
      format: 'HD_RADIO',
      operator: 'Public Radio Foundation',
      status: 'LIVE_ON_AIR',
      market: 'San Francisco Bay Area',
      viewership: {
        current: 89000,
        peak: 156000,
        average: 112000,
        share: 6.7,
        rating: 4.2
      },
      content: {
        currentProgram: 'Classical Evening Drive',
        nextProgram: 'Late Night Jazz',
        duration: 120,
        timeRemaining: 67,
        genre: 'Classical Music',
        liveIndicator: true
      },
      technical: {
        signalStrength: 95.4,
        videoQuality: 'N/A',
        audioQuality: 'HD Radio Digital',
        bitrate: 0.384, // Mbps
        latency: 1.1,
        uptime: 99.94,
        lastOutage: Date.now() - 8 * 24 * 60 * 60 * 1000
      },
      streaming: {
        concurrent: 23400,
        peakConcurrent: 45600,
        platforms: {
          website: 12300,
          spotify: 6700,
          applePods: 3200,
          mobile: 1200
        },
        cdn: 'Akamai Audio',
        edge: 23,
        bandwidth: 2.8
      },
      advertising: {
        currentSpot: 'Public Radio Pledge Drive',
        spotsRemaining: 0,
        revenue: 0, // Non-commercial
        cpm: 0,
        fillRate: 0
      },
      lastUpdate: Date.now() - 4 * 60 * 1000,
      alerts: []
    },
    {
      id: 'channel_003',
      callSign: 'STREAM-1',
      name: 'GameZone Live',
      type: 'STREAMING',
      format: '4K_HDR',
      operator: 'Digital Entertainment Network',
      status: 'LIVE_STREAMING',
      market: 'Global',
      viewership: {
        current: 2340000,
        peak: 4567000,
        average: 1890000,
        share: 34.7, // of streaming market
        rating: 0 // not applicable for streaming
      },
      content: {
        currentProgram: 'Esports Championship Finals',
        nextProgram: 'Gaming Talk Show',
        duration: 180,
        timeRemaining: 89,
        genre: 'Gaming/Esports',
        liveIndicator: true
      },
      technical: {
        signalStrength: 99.2,
        videoQuality: '4K HDR 60fps',
        audioQuality: 'Dolby Atmos',
        bitrate: 89.4,
        latency: 0.8,
        uptime: 99.99,
        lastOutage: Date.now() - 45 * 24 * 60 * 60 * 1000
      },
      streaming: {
        concurrent: 2340000,
        peakConcurrent: 4567000,
        platforms: {
          website: 1234000,
          twitch: 890000,
          youtube: 156000,
          mobile: 60000
        },
        cdn: 'AWS CloudFront',
        edge: 234,
        bandwidth: 156.7
      },
      advertising: {
        currentSpot: 'Gaming Peripheral Brand X',
        spotsRemaining: 12,
        revenue: 8900000,
        cpm: 24.50,
        fillRate: 98.9
      },
      lastUpdate: Date.now() - 1 * 60 * 1000,
      alerts: ['Record viewership surge - scaling CDN']
    },
    {
      id: 'channel_004',
      callSign: 'NEWS-24',
      name: 'Breaking News Network',
      type: 'CABLE_NEWS',
      format: 'HD',
      operator: 'Global News Corporation',
      status: 'LIVE_ON_AIR',
      market: 'National',
      viewership: {
        current: 3450000,
        peak: 8900000,
        average: 2890000,
        share: 18.9,
        rating: 2.4
      },
      content: {
        currentProgram: 'Breaking News Coverage',
        nextProgram: 'Prime Time Politics',
        duration: 0, // Breaking news - continuous
        timeRemaining: 0,
        genre: 'Breaking News',
        liveIndicator: true
      },
      technical: {
        signalStrength: 97.8,
        videoQuality: 'HD 1080p',
        audioQuality: 'Dolby Digital',
        bitrate: 25.6,
        latency: 3.2,
        uptime: 99.89,
        lastOutage: Date.now() - 23 * 24 * 60 * 60 * 1000
      },
      streaming: {
        concurrent: 1890000,
        peakConcurrent: 3400000,
        platforms: {
          website: 890000,
          youtube: 567000,
          facebook: 234000,
          mobile: 199000
        },
        cdn: 'Fastly Media',
        edge: 89,
        bandwidth: 78.9
      },
      advertising: {
        currentSpot: 'Pharmaceutical Brand Y',
        spotsRemaining: 6,
        revenue: 12400000,
        cpm: 45.80,
        fillRate: 94.2
      },
      lastUpdate: Date.now() - 3 * 60 * 1000,
      alerts: ['Breaking news event - traffic spike']
    }
  ]);

  const [productionStudios, setProductionStudios] = useState([
    {
      id: 'studio_001',
      name: 'Studio A - Main Broadcast',
      type: 'NEWS_STUDIO',
      operator: 'Metro Broadcasting',
      status: 'LIVE_PRODUCTION',
      location: 'Floor 12 - East Wing',
      equipment: {
        cameras: { total: 8, active: 6, backup: 2, ptz: 4 },
        microphones: { total: 24, active: 12, wireless: 8, boom: 4 },
        lighting: { zones: 16, led: 12, tungsten: 4, active: 14 },
        teleprompters: { total: 4, active: 2 }
      },
      crew: {
        director: 'Sarah Johnson',
        producer: 'Mike Chen',
        engineerVideo: 'Lisa Park',
        engineerAudio: 'David Kim',
        cameramen: 3,
        floorManager: 'Jennifer Lopez'
      },
      currentShow: {
        name: 'Evening News at 6',
        timeLeft: 23, // minutes
        segment: 'Weather Forecast',
        guests: ['Weather Anchor Tom Wilson'],
        nextSegment: 'Sports Update'
      },
      technical: {
        videoSwitcher: 'Blackmagic ATEM Constellation 8K',
        audioMixer: 'SSL System T',
        recordingStatus: 'RECORDING',
        backupRecording: 'ACTIVE',
        signalFlow: 'NOMINAL',
        colorTemp: 3200, // Kelvin
        audioLevels: -12.4 // dBFS
      },
      graphics: {
        system: 'Vizrt Viz Engine',
        templates: 45,
        activeGraphics: 'Lower Third - Weather',
        animations: 'READY',
        chromaKey: 'ACTIVE'
      },
      lastUpdate: Date.now() - 1 * 60 * 1000,
      alerts: ['Camera 3 needs focus adjustment', 'Teleprompter 2 text sync delay']
    },
    {
      id: 'studio_002',
      name: 'Studio B - Sports Production',
      type: 'SPORTS_STUDIO',
      operator: 'Sports Network Inc',
      status: 'STANDBY',
      location: 'Floor 8 - West Wing',
      equipment: {
        cameras: { total: 12, active: 0, backup: 12, ptz: 8 },
        microphones: { total: 32, active: 0, wireless: 16, boom: 8 },
        lighting: { zones: 20, led: 18, tungsten: 2, active: 8 },
        teleprompters: { total: 6, active: 0 }
      },
      crew: {
        director: 'Not Assigned',
        producer: 'Not Assigned',
        engineerVideo: 'Tom Wilson',
        engineerAudio: 'Maria Garcia',
        cameramen: 0,
        floorManager: 'Not Assigned'
      },
      currentShow: {
        name: 'Sports Center at 8',
        timeLeft: 87,
        segment: 'Pre-Production Setup',
        guests: [],
        nextSegment: 'Opening Segment'
      },
      technical: {
        videoSwitcher: 'Ross Video Acuity',
        audioMixer: 'Lawo mc²96',
        recordingStatus: 'STANDBY',
        backupRecording: 'STANDBY',
        signalFlow: 'TESTING',
        colorTemp: 5600,
        audioLevels: -60
      },
      graphics: {
        system: 'ChyronHego PRIME Graphics',
        templates: 67,
        activeGraphics: 'None',
        animations: 'STANDBY',
        chromaKey: 'CALIBRATED'
      },
      lastUpdate: Date.now() - 8 * 60 * 1000,
      alerts: ['Pre-production checks in progress']
    },
    {
      id: 'studio_003',
      name: 'Studio C - Virtual Production',
      type: 'VIRTUAL_STUDIO',
      operator: 'Future Media Labs',
      status: 'VIRTUAL_PRODUCTION',
      location: 'Floor 15 - Innovation Center',
      equipment: {
        cameras: { total: 6, active: 4, backup: 2, ptz: 0 },
        microphones: { total: 16, active: 8, wireless: 12, boom: 2 },
        lighting: { zones: 24, led: 24, tungsten: 0, active: 20 },
        teleprompters: { total: 2, active: 1 }
      },
      crew: {
        director: 'Alex Zhang',
        producer: 'Emma Thompson',
        engineerVideo: 'Chris Rodriguez',
        engineerAudio: 'Samantha Lee',
        cameramen: 2,
        floorManager: 'Jordan Smith'
      },
      currentShow: {
        name: 'Tech Talk Live',
        timeLeft: 34,
        segment: 'AI Innovation Panel',
        guests: ['Dr. Rebecca Chen - AI Researcher', 'John Davis - Tech CEO'],
        nextSegment: 'Viewer Q&A'
      },
      technical: {
        videoSwitcher: 'Grass Valley Kayenne K-Frame',
        audioMixer: 'Yamaha RIVAGE PM10',
        recordingStatus: 'RECORDING',
        backupRecording: 'ACTIVE',
        signalFlow: 'OPTIMAL',
        colorTemp: 4000,
        audioLevels: -18.2
      },
      graphics: {
        system: 'Unreal Engine + Mo-Sys',
        templates: 120,
        activeGraphics: 'Virtual Set Environment - Tech Lab',
        animations: 'REAL-TIME',
        chromaKey: 'LED WALL'
      },
      virtualSets: {
        current: 'Futuristic Laboratory',
        available: ['News Desk', 'Talk Show', 'Weather Studio', 'Sports Arena'],
        tracking: 'ACTIVE',
        ledWall: { panels: 144, resolution: '8K', calibrated: true },
        motionCapture: 'OptiTrack'
      },
      lastUpdate: Date.now() - 2 * 60 * 1000,
      alerts: ['LED wall panel 45 temperature warning']
    }
  ]);

  const [contentDelivery, setContentDelivery] = useState([
    {
      id: 'cdn_001',
      provider: 'CloudFlare Media',
      type: 'GLOBAL_CDN',
      status: 'OPERATIONAL',
      coverage: {
        regions: ['North America', 'Europe', 'Asia-Pacific', 'South America'],
        edgeServers: 234,
        popLocations: 89,
        cachedContent: 45.6 // TB
      },
      performance: {
        globalLatency: 12.4, // ms
        hitRatio: 94.7, // percentage
        bandwidth: 456.7, // Gbps
        requests: 234000000, // per day
        dataThroughput: 1.8 // PB/day
      },
      traffic: {
        liveStreaming: 67.2, // percentage of traffic
        vodStreaming: 23.4,
        webContent: 6.8,
        apiCalls: 2.6
      },
      regionalStats: {
        northAmerica: { servers: 89, load: 78.9, latency: 8.2 },
        europe: { servers: 67, load: 82.4, latency: 11.7 },
        asiaPacific: { servers: 54, load: 71.3, latency: 15.6 },
        southAmerica: { servers: 24, load: 69.8, latency: 18.9 }
      },
      customers: [
        { name: 'WXYZ-TV', bandwidth: 23.4, revenue: 45000 },
        { name: 'GameZone Live', bandwidth: 156.7, revenue: 234000 },
        { name: 'News Network', bandwidth: 78.9, revenue: 123000 }
      ],
      lastUpdate: Date.now() - 3 * 60 * 1000,
      alerts: ['EU-West-3 edge server degraded performance']
    },
    {
      id: 'cdn_002',
      provider: 'AWS CloudFront',
      type: 'CLOUD_CDN',
      status: 'OPERATIONAL',
      coverage: {
        regions: ['Global'],
        edgeServers: 456,
        popLocations: 234,
        cachedContent: 89.2
      },
      performance: {
        globalLatency: 18.7,
        hitRatio: 96.2,
        bandwidth: 789.4,
        requests: 567000000,
        dataThroughput: 3.4
      },
      traffic: {
        liveStreaming: 45.8,
        vodStreaming: 34.6,
        webContent: 12.9,
        apiCalls: 6.7
      },
      regionalStats: {
        northAmerica: { servers: 156, load: 85.3, latency: 12.4 },
        europe: { servers: 134, load: 79.6, latency: 16.8 },
        asiaPacific: { servers: 123, load: 88.1, latency: 22.3 },
        southAmerica: { servers: 43, load: 67.9, latency: 28.4 }
      },
      customers: [
        { name: 'GameZone Live', bandwidth: 156.7, revenue: 289000 },
        { name: 'Streaming Platform X', bandwidth: 245.8, revenue: 456000 },
        { name: 'Educational Media', bandwidth: 34.2, revenue: 67000 }
      ],
      lastUpdate: Date.now() - 5 * 60 * 1000,
      alerts: ['High traffic surge in Asia-Pacific region']
    },
    {
      id: 'cdn_003',
      provider: 'Akamai Media Services',
      type: 'ENTERPRISE_CDN',
      status: 'OPERATIONAL',
      coverage: {
        regions: ['Global'],
        edgeServers: 345,
        popLocations: 167,
        cachedContent: 67.8
      },
      performance: {
        globalLatency: 14.2,
        hitRatio: 98.1,
        bandwidth: 345.6,
        requests: 189000000,
        dataThroughput: 2.1
      },
      traffic: {
        liveStreaming: 34.7,
        vodStreaming: 45.2,
        webContent: 15.6,
        apiCalls: 4.5
      },
      regionalStats: {
        northAmerica: { servers: 123, load: 76.4, latency: 9.8 },
        europe: { servers: 98, load: 81.2, latency: 13.6 },
        asiaPacific: { servers: 89, load: 74.8, latency: 19.4 },
        southAmerica: { servers: 35, load: 72.1, latency: 24.7 }
      },
      customers: [
        { name: 'Classical Radio', bandwidth: 2.8, revenue: 8900 },
        { name: 'Enterprise Streaming', bandwidth: 67.4, revenue: 134000 },
        { name: 'Educational Platform', bandwidth: 23.1, revenue: 45000 }
      ],
      lastUpdate: Date.now() - 7 * 60 * 1000,
      alerts: []
    }
  ]);

  const [masterControl, setMasterControl] = useState({
    playoutSystems: [
      {
        name: 'Primary Playout Server',
        status: 'ACTIVE',
        channel: 'WXYZ-TV',
        content: 'Evening News at 6',
        timeRemaining: '00:23:45',
        nextContent: 'Prime Time Special Report',
        redundancy: 'HOT_STANDBY',
        videoFormat: '4K UHD',
        audioFormat: 'Dolby 5.1'
      },
      {
        name: 'Sports Playout Server',
        status: 'STANDBY',
        channel: 'Sports Center',
        content: 'Pre-Production Loop',
        timeRemaining: '01:27:12',
        nextContent: 'Sports Center Live',
        redundancy: 'COLD_STANDBY',
        videoFormat: 'HD 1080p',
        audioFormat: 'Stereo'
      }
    ],
    automation: {
      scheduledEvents: 234,
      executedToday: 189,
      failedEvents: 2,
      manualOverrides: 8,
      automationLevel: 94.7, // percentage
      nextEvent: 'Commercial Break #4',
      nextEventTime: Date.now() + 8 * 60 * 1000
    },
    signalRouting: {
      inputs: 48,
      outputs: 32,
      crosspoints: 1536,
      activeRoutes: 234,
      redundantPaths: 89,
      signalIntegrity: 98.9 // percentage
    },
    qualityControl: {
      videoLevels: 'NOMINAL',
      audioLevels: -12.4, // dBFS
      colorimetry: 'Rec. 2020',
      loudnessCompliance: 'ATSC A/85',
      closedCaptions: 'ACTIVE',
      subtitles: 'SYNCHRONIZED'
    },
    transmissionSites: [
      {
        name: 'Empire State Building',
        power: 1000000, // watts
        coverage: 'New York Metro',
        status: 'TRANSMITTING',
        antenna: 'Omnidirectional',
        backup: 'READY'
      },
      {
        name: 'Mount Wilson',
        power: 500000,
        coverage: 'Los Angeles Basin',
        status: 'TRANSMITTING',
        antenna: 'Directional',
        backup: 'READY'
      }
    ]
  });

  const [audienceMetrics, setAudienceMetrics] = useState({
    totalViewers: {
      broadcast: 8956000,
      streaming: 4567000,
      radio: 1234000,
      digital: 2890000
    },
    demographics: {
      age18_34: 28.4, // percentage
      age35_54: 34.7,
      age55_plus: 36.9,
      maleViewers: 52.1,
      femaleViewers: 47.9
    },
    engagement: {
      averageViewTime: 23.4, // minutes
      socialMentions: 45600,
      appDownloads: 12300,
      websiteVisits: 567000,
      subscriptions: 234000,
      churnRate: 2.8 // percentage
    },
    revenue: {
      advertising: 45600000, // monthly
      subscription: 12300000,
      payPerView: 3400000,
      sponsorship: 8900000,
      merchandise: 1200000
    },
    contentPerformance: {
      topShow: 'Breaking News Coverage',
      topRating: 18.9,
      mostStreamed: 'Esports Championship Finals',
      streamViews: 4567000,
      trendingTopic: '#GameZoneLive'
    },
    lastUpdate: Date.now() - 6 * 60 * 1000
  });

  const [performanceTrends, setPerformanceTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        totalViewers: Math.floor(Math.random() * 2000000) + 15000000, // 15-17M viewers
        streaming: Math.floor(Math.random() * 1000000) + 3000000, // 3-4M streaming
        revenue: Math.floor(Math.random() * 5000000) + 65000000, // $65-70M monthly
        engagement: Math.floor(Math.random() * 5) + 20, // 20-25 min average view time
        uptime: Math.floor(Math.random() * 200) + 9980, // 99.8-99.99% uptime
        cdnLatency: Math.floor(Math.random() * 10) + 10, // 10-20ms
        adRevenue: Math.floor(Math.random() * 3000000) + 42000000 // $42-45M ad revenue
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update broadcast channels
      setBroadcastChannels(prev => prev.map(channel => ({
        ...channel,
        viewership: {
          ...channel.viewership,
          current: Math.max(10000, channel.viewership.current + (Math.random() - 0.5) * 50000)
        },
        streaming: {
          ...channel.streaming,
          concurrent: Math.max(10000, channel.streaming.concurrent + (Math.random() - 0.5) * 20000)
        },
        technical: {
          ...channel.technical,
          latency: Math.max(0.5, Math.min(5.0, channel.technical.latency + (Math.random() - 0.5) * 0.3)),
          bitrate: Math.max(20, Math.min(100, channel.technical.bitrate + (Math.random() - 0.5) * 2))
        },
        content: {
          ...channel.content,
          timeRemaining: Math.max(0, channel.content.timeRemaining - 1)
        },
        lastUpdate: Date.now()
      })));

      // Update CDN performance
      setContentDelivery(prev => prev.map(cdn => ({
        ...cdn,
        performance: {
          ...cdn.performance,
          globalLatency: Math.max(8, Math.min(30, cdn.performance.globalLatency + (Math.random() - 0.5) * 2)),
          hitRatio: Math.max(90, Math.min(99, cdn.performance.hitRatio + (Math.random() - 0.5) * 1)),
          bandwidth: Math.max(100, cdn.performance.bandwidth + (Math.random() - 0.5) * 50)
        },
        lastUpdate: Date.now()
      })));

      // Update audience metrics
      setAudienceMetrics(prev => ({
        ...prev,
        totalViewers: {
          ...prev.totalViewers,
          broadcast: Math.max(5000000, prev.totalViewers.broadcast + (Math.random() - 0.5) * 200000),
          streaming: Math.max(2000000, prev.totalViewers.streaming + (Math.random() - 0.5) * 100000)
        },
        engagement: {
          ...prev.engagement,
          averageViewTime: Math.max(15, Math.min(45, prev.engagement.averageViewTime + (Math.random() - 0.5) * 2)),
          socialMentions: Math.max(30000, prev.engagement.socialMentions + Math.floor((Math.random() - 0.5) * 5000))
        },
        lastUpdate: Date.now()
      }));

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'LIVE_ON_AIR':
      case 'LIVE_STREAMING':
      case 'LIVE_PRODUCTION':
      case 'OPERATIONAL':
      case 'TRANSMITTING':
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY':
      case 'READY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'VIRTUAL_PRODUCTION':
      case 'RECORDING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE':
      case 'OFFLINE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFF_AIR':
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getLatencyColor = (latency) => {
    if (latency <= 1.0) return 'text-green-400';
    if (latency <= 2.0) return 'text-yellow-400';
    if (latency <= 4.0) return 'text-orange-400';
    return 'text-red-400';
  };

  const getUptimeColor = (uptime) => {
    if (uptime >= 99.95) return 'text-green-400';
    if (uptime >= 99.9) return 'text-yellow-400';
    if (uptime >= 99.5) return 'text-orange-400';
    return 'text-red-400';
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (minutes) => {
    if (minutes <= 0) return 'LIVE';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          📺 MEDIA & BROADCAST OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {broadcastChannels.filter(c => c.status.includes('LIVE')).length}/{broadcastChannels.length} Live
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(audienceMetrics.totalViewers.broadcast + audienceMetrics.totalViewers.streaming, 1)} Viewers
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Dynamic Media Facilities Command Center
          </div>
        </div>
      </div>

      {/* Media Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">TOTAL VIEWERSHIP</div>
              <div className="text-2xl font-bold text-red-100">
                {formatNumber(audienceMetrics.totalViewers.broadcast + audienceMetrics.totalViewers.streaming, 1)}
              </div>
              <div className="text-xs text-red-300">
                Broadcast: {formatNumber(audienceMetrics.totalViewers.broadcast, 1)} | Stream: {formatNumber(audienceMetrics.totalViewers.streaming, 1)}
              </div>
            </div>
            <div className="text-3xl opacity-60">👁️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">CDN PERFORMANCE</div>
              <div className="text-2xl font-bold text-blue-100">
                {(contentDelivery.reduce((sum, cdn) => sum + cdn.performance.globalLatency, 0) / contentDelivery.length).toFixed(1)}ms
              </div>
              <div className="text-xs text-blue-300">
                Global Latency | {(contentDelivery.reduce((sum, cdn) => sum + cdn.performance.hitRatio, 0) / contentDelivery.length).toFixed(1)}% Hit Rate
              </div>
            </div>
            <div className="text-3xl opacity-60">🌐</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">MONTHLY REVENUE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatCurrency(audienceMetrics.revenue.advertising + audienceMetrics.revenue.subscription + audienceMetrics.revenue.payPerView)}
              </div>
              <div className="text-xs text-green-300">
                Ads: {formatCurrency(audienceMetrics.revenue.advertising)} | Subs: {formatCurrency(audienceMetrics.revenue.subscription)}
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ENGAGEMENT</div>
              <div className="text-2xl font-bold text-purple-100">
                {audienceMetrics.engagement.averageViewTime.toFixed(1)}m
              </div>
              <div className="text-xs text-purple-300">
                Avg View Time | {formatNumber(audienceMetrics.engagement.socialMentions)} Social Mentions
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>
      </div>

      {/* Broadcast Channels and Production Studios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Broadcast Channels */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 LIVE BROADCAST CHANNELS & STREAMING PLATFORMS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {broadcastChannels.map((channel) => (
              <div key={channel.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(channel.status)}`}>
                      {channel.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {channel.type}
                    </span>
                    {channel.content.liveIndicator && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white animate-pulse">
                        ● LIVE
                      </span>
                    )}
                    {channel.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {channel.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(channel.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{channel.name} ({channel.callSign})</div>
                <div className="text-xs text-cyan-400 mb-2">{channel.market} | {channel.operator}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {channel.content.currentProgram} | {formatDuration(channel.content.timeRemaining)} remaining
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Current Viewers</div>
                    <div className="text-green-400">{formatNumber(channel.viewership.current)}</div>
                    <div className="text-gray-500">Rating: {channel.viewership.rating.toFixed(1)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Market Share</div>
                    <div className="text-blue-400">{channel.viewership.share.toFixed(1)}%</div>
                    <div className="text-gray-500">Peak: {formatNumber(channel.viewership.peak)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Streaming</div>
                    <div className="text-purple-400">{formatNumber(channel.streaming.concurrent)}</div>
                    <div className="text-gray-500">Peak: {formatNumber(channel.streaming.peakConcurrent)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Quality</div>
                    <div className="text-orange-400">{channel.technical.videoQuality}</div>
                    <div className="text-gray-500">{channel.technical.audioQuality}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Latency</div>
                    <div className={getLatencyColor(channel.technical.latency)}>
                      {channel.technical.latency.toFixed(1)}s
                    </div>
                    <div className="text-gray-500">Bitrate: {channel.technical.bitrate.toFixed(1)} Mbps</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className={getUptimeColor(channel.technical.uptime)}>
                      {channel.technical.uptime.toFixed(2)}%
                    </div>
                    <div className="text-gray-500">Signal: {channel.technical.signalStrength.toFixed(1)}%</div>
                  </div>
                </div>

                {/* Streaming Platforms */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Streaming Platforms:</div>
                  <div className="grid grid-cols-4 gap-1">
                    {Object.entries(channel.streaming.platforms).map(([platform, viewers]) => (
                      <div key={platform} className="text-center">
                        <div className="text-cyan-400">{platform}</div>
                        <div className="text-white">{formatNumber(viewers)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">CDN: </span>
                  <span className="text-indigo-400">{channel.streaming.cdn}</span>
                  <span className="text-gray-400"> | Edge Servers: </span>
                  <span className="text-green-400">{channel.streaming.edge}</span>
                  <span className="text-gray-400"> | Bandwidth: </span>
                  <span className="text-yellow-400">{channel.streaming.bandwidth.toFixed(1)} Gbps</span>
                </div>

                {channel.advertising.revenue > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Advertising: </span>
                    <span className="text-green-400">Revenue: {formatCurrency(channel.advertising.revenue)}/mo</span>
                    <span className="text-gray-400"> | CPM: </span>
                    <span className="text-blue-400">${channel.advertising.cpm.toFixed(2)}</span>
                    <span className="text-gray-400"> | Fill: </span>
                    <span className="text-purple-400">{channel.advertising.fillRate.toFixed(1)}%</span>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Next Program: </span>
                  <span className="text-cyan-400">{channel.content.nextProgram}</span>
                  <span className="text-gray-400"> | Genre: </span>
                  <span className="text-pink-400">{channel.content.genre}</span>
                </div>

                {channel.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {channel.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">📺 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Production Studios */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎬 PRODUCTION STUDIOS & BROADCAST FACILITIES
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {productionStudios.map((studio) => (
              <div key={studio.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(studio.status)}`}>
                      {studio.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {studio.type.replace(/_/g, ' ')}
                    </span>
                    {studio.technical.recordingStatus === 'RECORDING' && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white animate-pulse">
                        ● REC
                      </span>
                    )}
                    {studio.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {studio.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(studio.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{studio.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{studio.location} | {studio.operator}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {studio.currentShow.name} | {formatDuration(studio.currentShow.timeLeft)} remaining
                </div>

                {/* Equipment Status */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Equipment Status:</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <div className="text-blue-400">Cameras</div>
                      <div className="text-white">{studio.equipment.cameras.active}/{studio.equipment.cameras.total}</div>
                      <div className="text-gray-500">PTZ: {studio.equipment.cameras.ptz}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Microphones</div>
                      <div className="text-white">{studio.equipment.microphones.active}/{studio.equipment.microphones.total}</div>
                      <div className="text-gray-500">Wireless: {studio.equipment.microphones.wireless}</div>
                    </div>
                    <div>
                      <div className="text-yellow-400">Lighting</div>
                      <div className="text-white">{studio.equipment.lighting.active}/{studio.equipment.lighting.zones}</div>
                      <div className="text-gray-500">LED: {studio.equipment.lighting.led}</div>
                    </div>
                    <div>
                      <div className="text-purple-400">Prompters</div>
                      <div className="text-white">{studio.equipment.teleprompters.active}/{studio.equipment.teleprompters.total}</div>
                      <div className="text-gray-500">Ready</div>
                    </div>
                  </div>
                </div>

                {/* Crew Information */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Production Crew:</div>
                  <div className="grid grid-cols-2 gap-1">
                    <div><span className="text-orange-400">Director:</span> {studio.crew.director}</div>
                    <div><span className="text-blue-400">Producer:</span> {studio.crew.producer}</div>
                    <div><span className="text-green-400">Video Eng:</span> {studio.crew.engineerVideo}</div>
                    <div><span className="text-cyan-400">Audio Eng:</span> {studio.crew.engineerAudio}</div>
                    <div><span className="text-purple-400">Floor Mgr:</span> {studio.crew.floorManager}</div>
                    <div><span className="text-pink-400">Cameramen:</span> {studio.crew.cameramen}</div>
                  </div>
                </div>

                {/* Technical Systems */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Video Switcher: </span>
                  <span className="text-blue-400">{studio.technical.videoSwitcher}</span>
                  <span className="text-gray-400"> | Audio: </span>
                  <span className="text-green-400">{studio.technical.audioMixer}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Graphics: </span>
                  <span className="text-purple-400">{studio.graphics.system}</span>
                  <span className="text-gray-400"> | Templates: </span>
                  <span className="text-cyan-400">{studio.graphics.templates}</span>
                  <span className="text-gray-400"> | Chroma: </span>
                  <span className="text-yellow-400">{studio.graphics.chromaKey}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Recording: </span>
                  <span className={getStatusColor(studio.technical.recordingStatus).split(' ')[0]}>
                    {studio.technical.recordingStatus}
                  </span>
                  <span className="text-gray-400"> | Backup: </span>
                  <span className="text-green-400">{studio.technical.backupRecording}</span>
                  <span className="text-gray-400"> | Audio: </span>
                  <span className="text-orange-400">{studio.technical.audioLevels.toFixed(1)} dBFS</span>
                </div>

                {/* Virtual Studio Specific */}
                {studio.virtualSets && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Virtual Set: </span>
                    <span className="text-indigo-400">{studio.virtualSets.current}</span>
                    <span className="text-gray-400"> | LED Panels: </span>
                    <span className="text-cyan-400">{studio.virtualSets.ledWall.panels}</span>
                    <span className="text-gray-400"> | Tracking: </span>
                    <span className="text-green-400">{studio.virtualSets.tracking}</span>
                  </div>
                )}

                {/* Current Show Details */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Current Segment: </span>
                  <span className="text-yellow-400">{studio.currentShow.segment}</span>
                  {studio.currentShow.guests.length > 0 && (
                    <>
                      <span className="text-gray-400"> | Guests: </span>
                      <span className="text-pink-400">{studio.currentShow.guests.join(', ')}</span>
                    </>
                  )}
                </div>

                {studio.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {studio.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🎬 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Delivery and Master Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Delivery Networks */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 CONTENT DELIVERY NETWORKS & GLOBAL DISTRIBUTION
          </h3>
          <div className="space-y-3">
            {contentDelivery.map((cdn) => (
              <div key={cdn.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(cdn.status)}`}>
                      {cdn.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {cdn.type.replace(/_/g, ' ')}
                    </span>
                    {cdn.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {cdn.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(cdn.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{cdn.provider}</div>
                <div className="text-xs text-cyan-400 mb-3">
                  {cdn.coverage.edgeServers} Edge Servers | {cdn.coverage.popLocations} PoP Locations
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Global Latency</div>
                    <div className={getLatencyColor(cdn.performance.globalLatency)}>
                      {cdn.performance.globalLatency.toFixed(1)} ms
                    </div>
                    <div className="text-gray-500">Hit Ratio: {cdn.performance.hitRatio.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Bandwidth</div>
                    <div className="text-green-400">{cdn.performance.bandwidth.toFixed(1)} Gbps</div>
                    <div className="text-gray-500">Throughput: {cdn.performance.dataThroughput.toFixed(1)} PB/day</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Requests</div>
                    <div className="text-blue-400">{formatNumber(cdn.performance.requests)}/day</div>
                    <div className="text-gray-500">Cache: {cdn.coverage.cachedContent.toFixed(1)} TB</div>
                  </div>
                </div>

                {/* Traffic Distribution */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Traffic Distribution:</div>
                  <div className="grid grid-cols-4 gap-1">
                    <div>
                      <div className="text-red-400">Live Stream</div>
                      <div className="text-white">{cdn.traffic.liveStreaming.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-blue-400">VoD</div>
                      <div className="text-white">{cdn.traffic.vodStreaming.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-green-400">Web</div>
                      <div className="text-white">{cdn.traffic.webContent.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-purple-400">API</div>
                      <div className="text-white">{cdn.traffic.apiCalls.toFixed(1)}%</div>
                    </div>
                  </div>
                </div>

                {/* Regional Performance */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Regional Performance:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(cdn.regionalStats).map(([region, stats]) => (
                      <div key={region} className="text-center">
                        <div className="text-cyan-400">{region.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-white">{stats.servers} servers</div>
                        <div className="text-yellow-400">{stats.load.toFixed(1)}% load</div>
                        <div className={getLatencyColor(stats.latency)}>{stats.latency.toFixed(1)} ms</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Customers */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Top Customers:</div>
                  {cdn.customers.slice(0, 2).map((customer, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2">
                      <div className="text-white">{customer.name}</div>
                      <div className="text-cyan-400">{customer.bandwidth.toFixed(1)} Gbps</div>
                      <div className="text-green-400">{formatCurrency(customer.revenue)}/mo</div>
                    </div>
                  ))}
                </div>

                {cdn.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {cdn.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🌐 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Master Control & Playout */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎛️ MASTER CONTROL & BROADCAST AUTOMATION
          </h3>
          
          {/* Playout Systems */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Playout Systems</h4>
            <div className="space-y-2">
              {masterControl.playoutSystems.map((system, index) => (
                <div key={index} className="bg-gray-600 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold text-white">{system.name}</div>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(system.status)}`}>
                      {system.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-gray-400">Channel:</div>
                      <div className="text-cyan-400">{system.channel}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Redundancy:</div>
                      <div className="text-green-400">{system.redundancy.replace('_', ' ')}</div>
                    </div>
                  </div>
                  
                  <div className="text-xs mt-2">
                    <div className="text-gray-400">Current Content:</div>
                    <div className="text-white">{system.content}</div>
                    <div className="text-yellow-400">Time Remaining: {system.timeRemaining}</div>
                    <div className="text-purple-400">Next: {system.nextContent}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs mt-2">
                    <div>
                      <span className="text-gray-400">Video:</span> <span className="text-blue-400">{system.videoFormat}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Audio:</span> <span className="text-green-400">{system.audioFormat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation System */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Broadcast Automation</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Scheduled Events</div>
                <div className="text-blue-400">{masterControl.automation.scheduledEvents}</div>
                <div className="text-gray-500">Today</div>
              </div>
              <div>
                <div className="text-gray-400">Executed</div>
                <div className="text-green-400">{masterControl.automation.executedToday}</div>
                <div className="text-gray-500">Success</div>
              </div>
              <div>
                <div className="text-gray-400">Automation Level</div>
                <div className="text-purple-400">{masterControl.automation.automationLevel.toFixed(1)}%</div>
                <div className="text-gray-500">Overrides: {masterControl.automation.manualOverrides}</div>
              </div>
            </div>
            
            <div className="text-xs mt-2">
              <div className="text-gray-400">Next Event:</div>
              <div className="text-white">{masterControl.automation.nextEvent}</div>
              <div className="text-yellow-400">
                In {Math.ceil((masterControl.automation.nextEventTime - Date.now()) / 60000)} minutes
              </div>
            </div>
          </div>

          {/* Signal Routing */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Signal Routing Matrix</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Inputs</div>
                <div className="text-blue-400">{masterControl.signalRouting.inputs}</div>
              </div>
              <div>
                <div className="text-gray-400">Outputs</div>
                <div className="text-green-400">{masterControl.signalRouting.outputs}</div>
              </div>
              <div>
                <div className="text-gray-400">Crosspoints</div>
                <div className="text-purple-400">{masterControl.signalRouting.crosspoints}</div>
              </div>
            </div>
            
            <div className="text-xs mt-2">
              <span className="text-gray-400">Active Routes: </span>
              <span className="text-cyan-400">{masterControl.signalRouting.activeRoutes}</span>
              <span className="text-gray-400"> | Redundant Paths: </span>
              <span className="text-yellow-400">{masterControl.signalRouting.redundantPaths}</span>
              <span className="text-gray-400"> | Integrity: </span>
              <span className="text-green-400">{masterControl.signalRouting.signalIntegrity.toFixed(1)}%</span>
            </div>
          </div>

          {/* Quality Control */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Quality Control</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Video Levels</div>
                <div className="text-green-400">{masterControl.qualityControl.videoLevels}</div>
              </div>
              <div>
                <div className="text-gray-400">Audio Levels</div>
                <div className="text-blue-400">{masterControl.qualityControl.audioLevels.toFixed(1)} dBFS</div>
              </div>
              <div>
                <div className="text-gray-400">Colorimetry</div>
                <div className="text-purple-400">{masterControl.qualityControl.colorimetry}</div>
              </div>
              <div>
                <div className="text-gray-400">Loudness</div>
                <div className="text-orange-400">{masterControl.qualityControl.loudnessCompliance}</div>
              </div>
              <div>
                <div className="text-gray-400">Closed Captions</div>
                <div className="text-cyan-400">{masterControl.qualityControl.closedCaptions}</div>
              </div>
              <div>
                <div className="text-gray-400">Subtitles</div>
                <div className="text-yellow-400">{masterControl.qualityControl.subtitles}</div>
              </div>
            </div>
          </div>

          {/* Transmission Sites */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Transmission Sites</h4>
            <div className="space-y-2">
              {masterControl.transmissionSites.map((site, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm text-white">{site.name}</div>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(site.status)}`}>
                      {site.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Power:</span> <span className="text-red-400">{formatNumber(site.power)}W</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Coverage:</span> <span className="text-blue-400">{site.coverage}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Backup:</span> <span className="text-green-400">{site.backup}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audience Analytics and Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audience Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 AUDIENCE ANALYTICS & VIEWER ENGAGEMENT
          </h3>
          
          {/* Total Viewership */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Total Viewership</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-gray-400 text-xs">Broadcast TV</div>
                <div className="text-red-400 font-bold text-lg">{formatNumber(audienceMetrics.totalViewers.broadcast, 1)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs">Streaming</div>
                <div className="text-blue-400 font-bold text-lg">{formatNumber(audienceMetrics.totalViewers.streaming, 1)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs">Radio</div>
                <div className="text-green-400 font-bold text-lg">{formatNumber(audienceMetrics.totalViewers.radio, 1)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400 text-xs">Digital</div>
                <div className="text-purple-400 font-bold text-lg">{formatNumber(audienceMetrics.totalViewers.digital, 1)}</div>
              </div>
            </div>
          </div>

          {/* Demographics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Demographics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Age Groups</div>
                <div className="mt-1 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-blue-400">18-34:</span>
                    <span className="text-white">{audienceMetrics.demographics.age18_34.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400">35-54:</span>
                    <span className="text-white">{audienceMetrics.demographics.age35_54.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400">55+:</span>
                    <span className="text-white">{audienceMetrics.demographics.age55_plus.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-gray-400">Gender Split</div>
                <div className="mt-1 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-cyan-400">Male:</span>
                    <span className="text-white">{audienceMetrics.demographics.maleViewers.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-400">Female:</span>
                    <span className="text-white">{audienceMetrics.demographics.femaleViewers.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Engagement Metrics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Avg View Time</div>
                <div className="text-yellow-400 font-bold">{audienceMetrics.engagement.averageViewTime.toFixed(1)} min</div>
              </div>
              <div>
                <div className="text-gray-400">Social Mentions</div>
                <div className="text-blue-400 font-bold">{formatNumber(audienceMetrics.engagement.socialMentions)}</div>
              </div>
              <div>
                <div className="text-gray-400">App Downloads</div>
                <div className="text-green-400 font-bold">{formatNumber(audienceMetrics.engagement.appDownloads)}</div>
              </div>
              <div>
                <div className="text-gray-400">Website Visits</div>
                <div className="text-purple-400 font-bold">{formatNumber(audienceMetrics.engagement.websiteVisits)}</div>
              </div>
              <div>
                <div className="text-gray-400">Subscriptions</div>
                <div className="text-cyan-400 font-bold">{formatNumber(audienceMetrics.engagement.subscriptions)}</div>
              </div>
              <div>
                <div className="text-gray-400">Churn Rate</div>
                <div className="text-orange-400 font-bold">{audienceMetrics.engagement.churnRate.toFixed(1)}%</div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Revenue Streams (Monthly)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-red-400">Advertising:</span>
                <span className="text-white">{formatCurrency(audienceMetrics.revenue.advertising)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-400">Subscriptions:</span>
                <span className="text-white">{formatCurrency(audienceMetrics.revenue.subscription)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400">Pay-Per-View:</span>
                <span className="text-white">{formatCurrency(audienceMetrics.revenue.payPerView)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400">Sponsorship:</span>
                <span className="text-white">{formatCurrency(audienceMetrics.revenue.sponsorship)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-400">Merchandise:</span>
                <span className="text-white">{formatCurrency(audienceMetrics.revenue.merchandise)}</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-600 pt-2">
                <span className="text-yellow-400">Total:</span>
                <span className="text-white">
                  {formatCurrency(
                    audienceMetrics.revenue.advertising + 
                    audienceMetrics.revenue.subscription + 
                    audienceMetrics.revenue.payPerView + 
                    audienceMetrics.revenue.sponsorship + 
                    audienceMetrics.revenue.merchandise
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Content Performance */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Content Performance</h4>
            <div className="text-xs space-y-1">
              <div>
                <span className="text-gray-400">Top Rated Show:</span>
                <span className="text-green-400 ml-2">{audienceMetrics.contentPerformance.topShow}</span>
                <span className="text-yellow-400 ml-1">({audienceMetrics.contentPerformance.topRating.toFixed(1)}% share)</span>
              </div>
              <div>
                <span className="text-gray-400">Most Streamed:</span>
                <span className="text-blue-400 ml-2">{audienceMetrics.contentPerformance.mostStreamed}</span>
                <span className="text-cyan-400 ml-1">({formatNumber(audienceMetrics.contentPerformance.streamViews)} views)</span>
              </div>
              <div>
                <span className="text-gray-400">Trending Topic:</span>
                <span className="text-purple-400 ml-2">{audienceMetrics.contentPerformance.trendingTopic}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 MEDIA PERFORMANCE TRENDS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="totalViewers" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Total Viewers"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="streaming" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Streaming Viewers"
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.1}
                strokeWidth={2}
                name="Revenue ($)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="engagement" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Engagement (min)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Media Operations KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 MEDIA OPERATIONS KPIs & BROADCAST PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Average Uptime</div>
            <div className="text-white font-bold text-lg">
              {(broadcastChannels.reduce((sum, c) => sum + c.technical.uptime, 0) / broadcastChannels.length).toFixed(2)}%
            </div>
            <div className="text-green-400 text-xs">five nines target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">CDN Global Latency</div>
            <div className="text-white font-bold text-lg">
              {(contentDelivery.reduce((sum, c) => sum + c.performance.globalLatency, 0) / contentDelivery.length).toFixed(1)}ms
            </div>
            <div className="text-blue-400 text-xs">average worldwide</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Live Channels</div>
            <div className="text-white font-bold text-lg">
              {broadcastChannels.filter(c => c.status.includes('LIVE')).length}
            </div>
            <div className="text-purple-400 text-xs">currently broadcasting</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Total Bandwidth</div>
            <div className="text-white font-bold text-lg">
              {(contentDelivery.reduce((sum, c) => sum + c.performance.bandwidth, 0) / 1000).toFixed(1)}T
            </div>
            <div className="text-cyan-400 text-xs">bits per second</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Automation Level</div>
            <div className="text-white font-bold text-lg">
              {masterControl.automation.automationLevel.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">broadcast automated</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Revenue per Viewer</div>
            <div className="text-white font-bold text-lg">
              ${((audienceMetrics.revenue.advertising + audienceMetrics.revenue.subscription) / (audienceMetrics.totalViewers.broadcast + audienceMetrics.totalViewers.streaming)).toFixed(2)}
            </div>
            <div className="text-yellow-400 text-xs">monthly average</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaOperations;