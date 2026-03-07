import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Video, Radio, Tv, TrendingUp, AlertTriangle, Activity, Eye, Zap, Clock, Settings, Play, Mic } from 'lucide-react';

const MediaOperationsCenter = () => {
  const [mediaMetrics, setMediaMetrics] = useState({
    liveStreams: 47,
    totalViewers: 2847392,
    bandwidthUsage: 847.3, // Gbps
    contentLibrarySize: 47892, // hours
    activeProductions: 12,
    scheduledPrograms: 156,
    systemUptime: 99.97, // %
    audienceRating: 4.7 // /5.0
  });

  const [broadcastOperations, setBroadcastOperations] = useState([
    {
      id: 'CAST-001',
      name: 'Morning News Live',
      type: 'News Broadcast',
      status: 'on_air',
      startTime: new Date('2026-03-07T06:00:00'),
      duration: 180, // minutes
      viewers: 347892,
      quality: '4K HDR',
      bandwidth: 47.3, // Mbps
      director: 'Sarah Johnson',
      alerts: 0
    },
    {
      id: 'CAST-002',
      name: 'Sports Commentary',
      type: 'Sports Broadcast',
      status: 'standby',
      startTime: new Date('2026-03-07T14:00:00'),
      duration: 240,
      viewers: 0,
      quality: '1080p60',
      bandwidth: 0,
      director: 'Mike Rodriguez',
      alerts: 0
    },
    {
      id: 'CAST-003',
      name: 'Documentary Premiere',
      type: 'Documentary',
      status: 'recording',
      startTime: new Date('2026-03-07T20:00:00'),
      duration: 90,
      viewers: 156789,
      quality: '4K',
      bandwidth: 32.7,
      director: 'Emma Davis',
      alerts: 1
    },
    {
      id: 'CAST-004',
      name: 'Late Night Talk Show',
      type: 'Entertainment',
      status: 'in_production',
      startTime: new Date('2026-03-07T23:00:00'),
      duration: 60,
      viewers: 89456,
      quality: '1080p',
      bandwidth: 18.9,
      director: 'David Wilson',
      alerts: 0
    }
  ]);

  const [controlRoomOperations, setControlRoomOperations] = useState([
    {
      room: 'Control Room Alpha',
      status: 'active',
      production: 'Morning News Live',
      operatorCount: 8,
      cameraFeeds: 12,
      audioChannels: 24,
      temperature: 68.4, // F
      equipmentStatus: 'operational',
      emergencyStatus: 'normal'
    },
    {
      room: 'Control Room Beta',
      status: 'standby',
      production: 'Sports Commentary',
      operatorCount: 6,
      cameraFeeds: 16,
      audioChannels: 32,
      temperature: 69.2,
      equipmentStatus: 'operational',
      emergencyStatus: 'normal'
    },
    {
      room: 'Control Room Gamma',
      status: 'recording',
      production: 'Documentary Edit',
      operatorCount: 4,
      cameraFeeds: 8,
      audioChannels: 16,
      temperature: 67.8,
      equipmentStatus: 'operational',
      emergencyStatus: 'normal'
    },
    {
      room: 'Master Control',
      status: 'monitoring',
      production: 'System Overview',
      operatorCount: 3,
      cameraFeeds: 64,
      audioChannels: 128,
      temperature: 66.9,
      equipmentStatus: 'operational',
      emergencyStatus: 'normal'
    }
  ]);

  const [streamingPlatforms, setStreamingPlatforms] = useState([
    {
      platform: 'YouTube Live',
      status: 'streaming',
      viewers: 1247893,
      quality: '4K',
      bandwidth: 234.7, // Mbps
      latency: 2.3, // seconds
      uptime: 99.94,
      revenue: 23478.92
    },
    {
      platform: 'Twitch',
      status: 'streaming',
      viewers: 456789,
      quality: '1080p60',
      bandwidth: 89.4,
      latency: 1.8,
      uptime: 99.89,
      revenue: 8934.56
    },
    {
      platform: 'Facebook Live',
      status: 'streaming',
      viewers: 789123,
      quality: '1080p',
      bandwidth: 67.8,
      latency: 3.1,
      uptime: 99.76,
      revenue: 15678.23
    },
    {
      platform: 'Internal CDN',
      status: 'operational',
      viewers: 234567,
      quality: '4K HDR',
      bandwidth: 456.2,
      latency: 0.8,
      uptime: 99.98,
      revenue: 34567.89
    },
    {
      platform: 'Mobile App',
      status: 'streaming',
      viewers: 118234,
      quality: '720p',
      bandwidth: 23.4,
      latency: 2.7,
      uptime: 99.82,
      revenue: 4567.12
    }
  ]);

  const [contentManagement, setContentManagement] = useState([
    {
      category: 'Live News',
      totalAssets: 12847,
      storageUsed: 234.7, // TB
      accessCount: 89456,
      bandwidth: 167.3,
      avgFileSize: 1.8, // GB
      retention: 90 // days
    },
    {
      category: 'Sports Content',
      totalAssets: 8934,
      storageUsed: 456.2,
      accessCount: 234567,
      bandwidth: 289.7,
      avgFileSize: 5.2,
      retention: 365
    },
    {
      category: 'Entertainment',
      totalAssets: 15678,
      storageUsed: 789.4,
      accessCount: 156789,
      bandwidth: 234.8,
      avgFileSize: 3.4,
      retention: 180
    },
    {
      category: 'Documentaries',
      totalAssets: 4567,
      storageUsed: 1234.6,
      accessCount: 67890,
      bandwidth: 189.5,
      avgFileSize: 12.8,
      retention: 999
    },
    {
      category: 'Commercials',
      totalAssets: 23456,
      storageUsed: 123.4,
      accessCount: 456789,
      bandwidth: 89.7,
      avgFileSize: 0.3,
      retention: 30
    }
  ]);

  const [mediaAnalytics, setMediaAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      viewers: 2734567,
      bandwidth: 823.4,
      streams: 45,
      revenue: 234567
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      viewers: 2789123,
      bandwidth: 834.7,
      streams: 46,
      revenue: 245678
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      viewers: 2823456,
      bandwidth: 841.2,
      streams: 46,
      revenue: 256789
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      viewers: 2834567,
      bandwidth: 845.8,
      streams: 47,
      revenue: 267890
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      viewers: 2841234,
      bandwidth: 846.1,
      streams: 47,
      revenue: 278901
    },
    {
      time: new Date().toLocaleTimeString(),
      viewers: 2847392,
      bandwidth: 847.3,
      streams: 47,
      revenue: 289012
    }
  ]);

  const [mediaAlerts, setMediaAlerts] = useState([
    {
      id: 'MED-001',
      severity: 'warning',
      type: 'Audio Sync Issue',
      message: 'Audio delay detected on Documentary Premiere stream - adjusting sync parameters',
      timestamp: new Date(),
      status: 'active',
      production: 'Documentary Premiere',
      impact: 'medium'
    },
    {
      id: 'MED-002',
      severity: 'info',
      type: 'Bandwidth Optimization',
      message: 'Peak traffic detected - automatically scaling CDN capacity for optimal delivery',
      timestamp: new Date(Date.now() - 120000),
      status: 'resolved',
      production: 'System-wide',
      impact: 'positive'
    },
    {
      id: 'MED-003',
      severity: 'critical',
      type: 'Equipment Failure',
      message: 'Backup camera activated in Control Room Alpha - primary camera 3 offline for maintenance',
      timestamp: new Date(Date.now() - 180000),
      status: 'investigating',
      production: 'Morning News Live',
      impact: 'high'
    }
  ]);

  const [technicalStaff, setTechnicalStaff] = useState([
    {
      department: 'Video Engineers',
      totalStaff: 24,
      onDuty: 18,
      efficiency: 94.7,
      avgExperience: 8.3, // years
      certifications: 156
    },
    {
      department: 'Audio Engineers',
      totalStaff: 16,
      onDuty: 12,
      efficiency: 96.2,
      avgExperience: 7.8,
      certifications: 89
    },
    {
      department: 'Broadcast Directors',
      totalStaff: 12,
      onDuty: 8,
      efficiency: 92.4,
      avgExperience: 12.5,
      certifications: 67
    },
    {
      department: 'IT Support',
      totalStaff: 20,
      onDuty: 15,
      efficiency: 89.6,
      avgExperience: 6.2,
      certifications: 234
    },
    {
      department: 'Content Managers',
      totalStaff: 8,
      onDuty: 6,
      efficiency: 91.8,
      avgExperience: 5.7,
      certifications: 45
    }
  ]);

  const [productionSchedule, setProductionSchedule] = useState([
    {
      time: '06:00',
      program: 'Morning News Live',
      type: 'News',
      status: 'on_air',
      duration: '3h',
      crew: 12
    },
    {
      time: '14:00',
      program: 'Sports Commentary',
      type: 'Sports',
      status: 'scheduled',
      duration: '4h',
      crew: 8
    },
    {
      time: '20:00',
      program: 'Documentary Premiere',
      type: 'Documentary',
      status: 'in_production',
      duration: '1.5h',
      crew: 6
    },
    {
      time: '23:00',
      program: 'Late Night Talk Show',
      type: 'Entertainment',
      status: 'scheduled',
      duration: '1h',
      crew: 10
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    encodingFarm: 99.94, // uptime %
    streamingCDN: 99.97,
    storageSystem: 99.89,
    networkInfrastructure: 99.92,
    broadcastEquipment: 98.7,
    avgLatency: 1.847, // seconds
    totalStorage: 2847.3, // TB
    redundancyLevel: 99.2 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update media metrics
      setMediaMetrics(prev => ({
        ...prev,
        totalViewers: Math.max(2000000, Math.min(3500000, prev.totalViewers + Math.floor((Math.random() - 0.5) * 10000))),
        bandwidthUsage: Math.max(600, Math.min(1200, prev.bandwidthUsage + (Math.random() - 0.5) * 20)),
        liveStreams: Math.max(40, Math.min(60, prev.liveStreams + Math.floor((Math.random() - 0.5) * 3))),
        activeProductions: Math.max(8, Math.min(20, prev.activeProductions + Math.floor((Math.random() - 0.5) * 2))),
        systemUptime: Math.max(99.5, Math.min(100, prev.systemUptime + (Math.random() - 0.3) * 0.01)),
        audienceRating: Math.max(4.0, Math.min(5.0, prev.audienceRating + (Math.random() - 0.5) * 0.02))
      }));

      // Update broadcast operations
      setBroadcastOperations(prev => prev.map(broadcast => {
        let newViewers = broadcast.viewers;
        let newBandwidth = broadcast.bandwidth;
        
        if (broadcast.status === 'on_air' || broadcast.status === 'recording') {
          newViewers = Math.max(broadcast.viewers * 0.9, Math.min(broadcast.viewers * 1.1, broadcast.viewers + Math.floor((Math.random() - 0.3) * 5000)));
          newBandwidth = Math.max(10, Math.min(100, broadcast.bandwidth + (Math.random() - 0.5) * 3));
        }
        
        return {
          ...broadcast,
          viewers: newViewers,
          bandwidth: newBandwidth,
          alerts: Math.max(0, broadcast.alerts + Math.floor((Math.random() - 0.9) * 2))
        };
      }));

      // Update control room operations
      setControlRoomOperations(prev => prev.map(room => ({
        ...room,
        temperature: Math.max(65, Math.min(75, room.temperature + (Math.random() - 0.5) * 0.5)),
        cameraFeeds: Math.max(room.cameraFeeds * 0.9, Math.min(room.cameraFeeds * 1.1, room.cameraFeeds + Math.floor((Math.random() - 0.5) * 2))),
        audioChannels: Math.max(room.audioChannels * 0.9, Math.min(room.audioChannels * 1.1, room.audioChannels + Math.floor((Math.random() - 0.5) * 2)))
      })));

      // Update streaming platforms
      setStreamingPlatforms(prev => prev.map(platform => ({
        ...platform,
        viewers: Math.max(platform.viewers * 0.9, Math.min(platform.viewers * 1.1, platform.viewers + Math.floor((Math.random() - 0.5) * 1000))),
        bandwidth: Math.max(platform.bandwidth * 0.9, Math.min(platform.bandwidth * 1.1, platform.bandwidth + (Math.random() - 0.5) * 5)),
        latency: Math.max(0.5, Math.min(5, platform.latency + (Math.random() - 0.5) * 0.2)),
        revenue: platform.revenue + Math.random() * 100,
        uptime: Math.max(99.0, Math.min(100, platform.uptime + (Math.random() - 0.5) * 0.05))
      })));

      // Update content management
      setContentManagement(prev => prev.map(category => ({
        ...category,
        accessCount: category.accessCount + Math.floor(Math.random() * 100),
        bandwidth: Math.max(category.bandwidth * 0.9, Math.min(category.bandwidth * 1.1, category.bandwidth + (Math.random() - 0.5) * 10)),
        totalAssets: category.totalAssets + Math.floor(Math.random() * 5)
      })));

      // Update media analytics
      const newMediaData = {
        time: new Date().toLocaleTimeString(),
        viewers: mediaMetrics.totalViewers / 1000, // Convert to thousands for chart
        bandwidth: mediaMetrics.bandwidthUsage,
        streams: mediaMetrics.liveStreams,
        revenue: Math.floor(Math.random() * 50000) + 280000
      };
      
      setMediaAnalytics(prev => [...prev.slice(1), newMediaData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        encodingFarm: Math.max(99.5, Math.min(100, prev.encodingFarm + (Math.random() - 0.3) * 0.01)),
        streamingCDN: Math.max(99.5, Math.min(100, prev.streamingCDN + (Math.random() - 0.3) * 0.01)),
        avgLatency: Math.max(1.0, Math.min(3.0, prev.avgLatency + (Math.random() - 0.5) * 0.1)),
        totalStorage: prev.totalStorage + (Math.random() - 0.5) * 0.5,
        redundancyLevel: Math.max(95, Math.min(100, prev.redundancyLevel + (Math.random() - 0.5) * 0.2))
      }));

      // Occasionally add new media alerts
      if (Math.random() > 0.93) {
        const alertTypes = ['Audio Sync Issue', 'Video Quality Drop', 'Bandwidth Optimization', 'Equipment Failure', 'CDN Alert'];
        const severities = ['info', 'warning', 'critical'];
        const productions = broadcastOperations.map(b => b.name);
        
        const newAlert = {
          id: `MED-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time media operations alert generated',
          timestamp: new Date(),
          status: 'active',
          production: productions[Math.floor(Math.random() * productions.length)],
          impact: ['low', 'medium', 'high', 'positive'][Math.floor(Math.random() * 4)]
        };
        
        setMediaAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mediaMetrics.totalViewers, mediaMetrics.bandwidthUsage, mediaMetrics.liveStreams]);

  const getBroadcastStatusColor = (status) => {
    switch (status) {
      case 'on_air': return '#EF4444';
      case 'recording': return '#F59E0B';
      case 'in_production': return '#8B5CF6';
      case 'standby': return '#3B82F6';
      case 'scheduled': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getControlRoomStatusColor = (status) => {
    switch (status) {
      case 'active': return '#EF4444';
      case 'recording': return '#F59E0B';
      case 'standby': return '#3B82F6';
      case 'monitoring': return '#10B981';
      case 'maintenance': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getStreamingStatusColor = (status) => {
    switch (status) {
      case 'streaming': return '#10B981';
      case 'operational': return '#3B82F6';
      case 'buffering': return '#F59E0B';
      case 'offline': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const contentDistribution = [
    { name: 'Live News', value: 32.7, color: '#EF4444' },
    { name: 'Sports', value: 28.4, color: '#3B82F6' },
    { name: 'Entertainment', value: 23.1, color: '#8B5CF6' },
    { name: 'Documentary', value: 11.2, color: '#10B981' },
    { name: 'Commercials', value: 4.6, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Video className="w-8 h-8 text-red-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">MEDIA OPERATIONS CENTER</h1>
            <p className="text-gray-400">Broadcasting control rooms, live streaming production workflows, content management systems & media asset distribution</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {mediaMetrics.totalViewers.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">VIEWERS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {mediaMetrics.liveStreams}
            </div>
            <div className="text-xs text-gray-400">LIVE STREAMS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{mediaMetrics.audienceRating.toFixed(1)}/5.0</div>
            <div className="text-xs text-gray-400">RATING</div>
          </div>
        </div>
      </div>

      {/* Media KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Video className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">BANDWIDTH</span>
          </div>
          <div className="text-xl font-bold text-white">{mediaMetrics.bandwidthUsage.toFixed(1)} Gbps</div>
          <div className="text-xs text-gray-400">Usage</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Play className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">PRODUCTIONS</span>
          </div>
          <div className="text-xl font-bold text-white">{mediaMetrics.activeProductions}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Tv className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">CONTENT</span>
          </div>
          <div className="text-xl font-bold text-white">{(mediaMetrics.contentLibrarySize / 1000).toFixed(1)}K</div>
          <div className="text-xs text-gray-400">Hours</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Radio className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">SCHEDULED</span>
          </div>
          <div className="text-xl font-bold text-white">{mediaMetrics.scheduledPrograms}</div>
          <div className="text-xs text-gray-400">Programs</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{mediaMetrics.systemUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">CDN</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.streamingCDN.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Broadcast Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Video className="w-5 h-5 mr-2 text-red-400" />
            BROADCAST OPERATIONS
          </h3>
          <div className="space-y-3">
            {broadcastOperations.map(broadcast => (
              <div key={broadcast.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getBroadcastStatusColor(broadcast.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{broadcast.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getBroadcastStatusColor(broadcast.status)}20`, 
                      color: getBroadcastStatusColor(broadcast.status) 
                    }}>
                      {broadcast.status.toUpperCase().replace('_', ' ')}
                    </span>
                    {broadcast.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {broadcast.alerts} Alert{broadcast.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Type: <span className="text-purple-400">{broadcast.type}</span> • 
                  Director: <span className="text-blue-400">{broadcast.director.split(' ')[0]}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Viewers</span>
                    <span className="text-green-400">{(broadcast.viewers / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quality</span>
                    <span className="text-blue-400">{broadcast.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-purple-400">{broadcast.duration}min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth</span>
                    <span className="text-white">{broadcast.bandwidth.toFixed(1)} Mbps</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Start: {broadcast.startTime.toLocaleTimeString()}
                  </span>
                  <span className="text-gray-500">
                    {broadcast.status === 'on_air' ? 'LIVE' : 
                     broadcast.status === 'recording' ? 'REC' : 
                     broadcast.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Room Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-green-400" />
            CONTROL ROOM OPERATIONS
          </h3>
          <div className="space-y-3">
            {controlRoomOperations.map((room, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getControlRoomStatusColor(room.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{room.room}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getControlRoomStatusColor(room.status)}20`, 
                    color: getControlRoomStatusColor(room.status) 
                  }}>
                    {room.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">{room.production}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Operators</span>
                    <span className="text-blue-400">{room.operatorCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cameras</span>
                    <span className="text-purple-400">{room.cameraFeeds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Audio</span>
                    <span className="text-green-400">{room.audioChannels}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp</span>
                    <span className="text-white">{room.temperature.toFixed(1)}°F</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Equipment: {room.equipmentStatus.toUpperCase()}
                  </span>
                  <span className="text-gray-500">
                    Emergency: {room.emergencyStatus.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming Platforms & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Tv className="w-5 h-5 mr-2 text-blue-400" />
            STREAMING PLATFORMS & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {streamingPlatforms.slice(0, 4).map((platform, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{platform.platform}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getStreamingStatusColor(platform.status) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Viewers</span>
                    <span className="text-green-400">{(platform.viewers / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quality</span>
                    <span className="text-blue-400">{platform.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-purple-400">{platform.latency.toFixed(1)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenue</span>
                    <span className="text-white">${(platform.revenue / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    BW: {platform.bandwidth.toFixed(1)} Mbps
                  </span>
                  <span className="text-gray-500">
                    Uptime: {platform.uptime.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Media Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Production Alerts</div>
            <div className="space-y-2">
              {mediaAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.production}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Media Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Media Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME MEDIA ANALYTICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mediaAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="viewers" 
                stroke="#EF4444" 
                strokeWidth={3}
                name="Viewers (K)"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="bandwidth" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Bandwidth (Gbps)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="streams" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Live Streams"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="revenue" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Revenue ($K)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Content Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">CONTENT DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={contentDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {contentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Content Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {contentDistribution.map((content, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: content.color }}
                    />
                    <span className="text-gray-400 text-sm">{content.name}</span>
                  </div>
                  <span className="text-white font-semibold">{content.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Encoding Farm</span>
                    <span className="text-green-400">{systemMetrics.encodingFarm.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage System</span>
                    <span className="text-blue-400">{systemMetrics.storageSystem.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Latency</span>
                    <span className="text-purple-400">{systemMetrics.avgLatency.toFixed(2)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Redundancy</span>
                    <span className="text-green-400">{systemMetrics.redundancyLevel.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Production Schedule Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Today's Schedule</span>
              <span className="text-xs text-blue-400">{systemMetrics.totalStorage.toFixed(1)}TB Storage</span>
            </div>
            <div className="space-y-2">
              {productionSchedule.slice(0, 3).map((program, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{program.time} - {program.program}</span>
                    <span className="text-xs text-green-400">{program.duration}</span>
                  </div>
                  <div className="text-xs text-gray-300">{program.type} • {program.crew} crew</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Media Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Media Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                  <Video className="w-3 h-3 inline mr-1" />
                  Live Control
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Tv className="w-3 h-3 inline mr-1" />
                  Streaming
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Settings className="w-3 h-3 inline mr-1" />
                  Assets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaOperationsCenter;