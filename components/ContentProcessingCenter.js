// ContentProcessingCenter.js - Instagram Content Processing and Transcription Mission Control
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ContentProcessingCenter = () => {
  const [processingQueue, setProcessingQueue] = useState([
    {
      id: 'vid_001',
      filename: 'instagram_reel_marketing_tips.mp4',
      status: 'TRANSCRIBING',
      progress: 67,
      duration: 156000, // milliseconds
      uploadedAt: Date.now() - 8 * 60 * 1000,
      estimatedCompletion: Date.now() + 5 * 60 * 1000,
      fileSize: 24.7, // MB
      quality: 'HD',
      assemblyAIJobId: 'aai_job_12847'
    },
    {
      id: 'vid_002',
      filename: 'brand_story_showcase.mp4',
      status: 'QUEUED',
      progress: 0,
      duration: 203000,
      uploadedAt: Date.now() - 3 * 60 * 1000,
      estimatedCompletion: Date.now() + 12 * 60 * 1000,
      fileSize: 31.2,
      quality: '4K',
      assemblyAIJobId: null
    },
    {
      id: 'vid_003',
      filename: 'product_demo_tutorial.mp4',
      status: 'COMPLETED',
      progress: 100,
      duration: 289000,
      uploadedAt: Date.now() - 25 * 60 * 1000,
      completedAt: Date.now() - 2 * 60 * 1000,
      fileSize: 45.8,
      quality: 'HD',
      assemblyAIJobId: 'aai_job_12834',
      transcriptLength: 1847
    },
    {
      id: 'vid_004',
      filename: 'behind_scenes_content.mp4',
      status: 'PROCESSING',
      progress: 23,
      duration: 178000,
      uploadedAt: Date.now() - 15 * 60 * 1000,
      estimatedCompletion: Date.now() + 8 * 60 * 1000,
      fileSize: 28.9,
      quality: 'HD',
      assemblyAIJobId: 'aai_job_12841'
    }
  ]);

  const [transcriptionMetrics, setTranscriptionMetrics] = useState({
    totalVideos: 247,
    completedToday: 15,
    inProgress: 2,
    queuedVideos: 1,
    averageProcessingTime: 8.4, // minutes
    accuracyRate: 96.7,
    totalDuration: 14567, // minutes
    costPerMinute: 0.015,
    totalCost: 218.51,
    assemblyAIQuota: {
      used: 847,
      limit: 1000,
      resetDate: Date.now() + 15 * 24 * 60 * 60 * 1000
    }
  });

  const [contentAnalytics, setContentAnalytics] = useState({
    topTopics: [
      { topic: 'Marketing Tips', count: 34, sentiment: 0.8 },
      { topic: 'Product Demos', count: 28, sentiment: 0.9 },
      { topic: 'Brand Stories', count: 23, sentiment: 0.7 },
      { topic: 'Tutorials', count: 19, sentiment: 0.85 },
      { topic: 'Behind the Scenes', count: 16, sentiment: 0.75 }
    ],
    languageDistribution: [
      { language: 'English', count: 156, percentage: 63.2 },
      { language: 'Spanish', count: 43, percentage: 17.4 },
      { language: 'French', count: 28, percentage: 11.3 },
      { language: 'Portuguese', count: 20, percentage: 8.1 }
    ],
    qualityMetrics: {
      averageClarity: 87.3,
      averageVolume: 72.1,
      backgroundNoiseLevel: 15.2,
      speechRecognitionConfidence: 94.8
    }
  });

  const [processingTrends, setProcessingTrends] = useState([]);
  const [errorLogs, setErrorLogs] = useState([
    {
      id: 'err_001',
      videoId: 'vid_005',
      error: 'Audio quality too low for accurate transcription',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'WARNING',
      resolution: 'Enhanced audio preprocessing applied'
    },
    {
      id: 'err_002',
      videoId: 'vid_008',
      error: 'Assembly AI API rate limit exceeded',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'ERROR',
      resolution: 'Queued for retry with backoff'
    }
  ]);

  const [realtimeStats, setRealtimeStats] = useState({
    currentThroughput: '3.2 videos/hour',
    averageFileSize: 32.4,
    peakProcessingHour: '14:00-15:00',
    systemLoad: 67.3,
    assemblyAILatency: 234,
    storageUsed: 847.2,
    bandwidthUsage: 124.7
  });

  const generateProcessingTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        completed: Math.floor(Math.random() * 8) + 2,
        failed: Math.floor(Math.random() * 2),
        processing: Math.floor(Math.random() * 4) + 1,
        averageTime: Math.random() * 5 + 6, // 6-11 minutes
        accuracy: Math.random() * 10 + 90 // 90-100%
      });
    }
    return data;
  };

  useEffect(() => {
    setProcessingTrends(generateProcessingTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update processing queue progress
      setProcessingQueue(prev => prev.map(video => {
        if (video.status === 'TRANSCRIBING' || video.status === 'PROCESSING') {
          const newProgress = Math.min(100, video.progress + Math.random() * 8);
          if (newProgress >= 100) {
            return {
              ...video,
              status: 'COMPLETED',
              progress: 100,
              completedAt: Date.now(),
              transcriptLength: Math.floor(Math.random() * 1000) + 500
            };
          }
          return { ...video, progress: newProgress };
        }
        if (video.status === 'QUEUED' && Math.random() > 0.8) {
          return {
            ...video,
            status: 'PROCESSING',
            progress: 5,
            assemblyAIJobId: `aai_job_${Math.floor(Math.random() * 10000) + 10000}`
          };
        }
        return video;
      }));

      // Update metrics
      setTranscriptionMetrics(prev => ({
        ...prev,
        completedToday: prev.completedToday + (Math.random() > 0.9 ? 1 : 0),
        averageProcessingTime: Math.max(5, Math.min(15, prev.averageProcessingTime + (Math.random() - 0.5) * 0.5)),
        accuracyRate: Math.max(90, Math.min(99, prev.accuracyRate + (Math.random() - 0.5) * 0.3)),
        assemblyAIQuota: {
          ...prev.assemblyAIQuota,
          used: prev.assemblyAIQuota.used + (Math.random() > 0.7 ? 1 : 0)
        }
      }));

      // Update real-time stats
      setRealtimeStats(prev => ({
        ...prev,
        systemLoad: Math.max(30, Math.min(90, prev.systemLoad + (Math.random() - 0.5) * 5)),
        assemblyAILatency: Math.max(150, Math.min(500, prev.assemblyAILatency + (Math.random() - 0.5) * 20)),
        bandwidthUsage: Math.max(50, Math.min(200, prev.bandwidthUsage + (Math.random() - 0.5) * 10))
      }));

      // Occasionally add new videos to queue
      if (Math.random() > 0.95) {
        const newVideo = {
          id: `vid_${Date.now()}`,
          filename: `content_${Math.floor(Math.random() * 1000)}.mp4`,
          status: 'QUEUED',
          progress: 0,
          duration: Math.floor(Math.random() * 200000) + 60000,
          uploadedAt: Date.now(),
          estimatedCompletion: Date.now() + Math.floor(Math.random() * 600000) + 300000,
          fileSize: Math.random() * 40 + 10,
          quality: Math.random() > 0.3 ? 'HD' : '4K',
          assemblyAIJobId: null
        };
        setProcessingQueue(prev => [newVideo, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'TRANSCRIBING':
      case 'PROCESSING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'QUEUED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'INFO': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatFileSize = (mb) => {
    return `${mb.toFixed(1)} MB`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatTimeRemaining = (timestamp) => {
    const diff = timestamp - Date.now();
    if (diff < 60000) return 'Soon';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    return `${Math.floor(diff / 3600000)}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🎬 CONTENT PROCESSING CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {transcriptionMetrics.inProgress} PROCESSING
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Instagram Video Transcription Pipeline
          </div>
        </div>
      </div>

      {/* Processing Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">COMPLETED TODAY</div>
              <div className="text-2xl font-bold text-green-100">
                {transcriptionMetrics.completedToday}
              </div>
              <div className="text-xs text-green-300">{transcriptionMetrics.totalVideos} total</div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ACCURACY RATE</div>
              <div className="text-2xl font-bold text-blue-100">
                {transcriptionMetrics.accuracyRate.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">Assembly AI confidence</div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG PROCESSING</div>
              <div className="text-2xl font-bold text-purple-100">
                {transcriptionMetrics.averageProcessingTime.toFixed(1)}m
              </div>
              <div className="text-xs text-purple-300">per video</div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">API QUOTA</div>
              <div className="text-2xl font-bold text-orange-100">
                {transcriptionMetrics.assemblyAIQuota.used}/{transcriptionMetrics.assemblyAIQuota.limit}
              </div>
              <div className="text-xs text-orange-300">
                {((transcriptionMetrics.assemblyAIQuota.used / transcriptionMetrics.assemblyAIQuota.limit) * 100).toFixed(1)}% used
              </div>
            </div>
            <div className="text-3xl opacity-60">🔊</div>
          </div>
        </div>
      </div>

      {/* Processing Queue and Real-time Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Processing Queue */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 PROCESSING QUEUE
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {processingQueue.map((video) => (
              <div key={video.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm truncate max-w-48">
                      {video.filename}
                    </h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(video.status)}`}>
                      {video.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {video.quality}
                  </div>
                </div>
                
                {video.progress > 0 && (
                  <div className="mb-3">
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          video.status === 'COMPLETED' ? 'bg-green-400' : 'bg-blue-400'
                        }`}
                        style={{ width: `${video.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1 text-right">
                      {video.progress.toFixed(0)}%
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Duration</div>
                    <div className="text-white">{formatDuration(video.duration)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Size</div>
                    <div className="text-cyan-400">{formatFileSize(video.fileSize)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">
                      {video.status === 'COMPLETED' ? 'Completed' : 'ETA'}
                    </div>
                    <div className="text-green-400">
                      {video.status === 'COMPLETED' 
                        ? formatTime(video.completedAt)
                        : formatTimeRemaining(video.estimatedCompletion)
                      }
                    </div>
                  </div>
                </div>

                {video.assemblyAIJobId && (
                  <div className="text-xs text-purple-400 mt-2 font-mono">
                    Job ID: {video.assemblyAIJobId}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Processing Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PROCESSING TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={processingTrends}>
              <defs>
                <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="processingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="completed" 
                stackId="1"
                stroke="#10B981" 
                fill="url(#completedGradient)" 
                name="Completed"
              />
              <Area 
                type="monotone" 
                dataKey="processing" 
                stackId="1"
                stroke="#3B82F6" 
                fill="url(#processingGradient)" 
                name="Processing"
              />
              <Line 
                type="monotone" 
                dataKey="failed" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Failed"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Content Analytics and Quality Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Topics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏷️ CONTENT TOPICS ANALYSIS
          </h3>
          <div className="space-y-3">
            {contentAnalytics.topTopics.map((topic, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm">{topic.topic}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 text-sm">{topic.count}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      topic.sentiment > 0.8 ? 'bg-green-500/20 text-green-400' :
                      topic.sentiment > 0.6 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {(topic.sentiment * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-cyan-400 h-2 rounded-full" 
                    style={{ width: `${(topic.count / 34) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎵 AUDIO QUALITY METRICS
          </h3>
          <div className="space-y-4">
            {[
              { 
                name: 'Clarity Score', 
                value: contentAnalytics.qualityMetrics.averageClarity, 
                color: 'green',
                unit: '%'
              },
              { 
                name: 'Volume Level', 
                value: contentAnalytics.qualityMetrics.averageVolume, 
                color: 'blue',
                unit: '%'
              },
              { 
                name: 'Background Noise', 
                value: contentAnalytics.qualityMetrics.backgroundNoiseLevel, 
                color: 'yellow',
                unit: '%',
                inverse: true
              },
              { 
                name: 'Speech Confidence', 
                value: contentAnalytics.qualityMetrics.speechRecognitionConfidence, 
                color: 'purple',
                unit: '%'
              }
            ].map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">{metric.name}</span>
                  <span className={`text-sm font-bold text-${metric.color}-400`}>
                    {metric.value.toFixed(1)}{metric.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-${metric.color}-400 h-2 rounded-full transition-all duration-500`}
                    style={{ 
                      width: `${metric.inverse ? 100 - metric.value : metric.value}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-bold text-white mb-3">Language Distribution</h4>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={contentAnalytics.languageDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {contentAnalytics.languageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[
                      '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'
                    ][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* System Status and Error Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time System Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚡ SYSTEM STATUS
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded p-3">
              <div className="text-xs text-gray-400">Throughput</div>
              <div className="text-lg font-bold text-cyan-400">
                {realtimeStats.currentThroughput}
              </div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-xs text-gray-400">System Load</div>
              <div className="text-lg font-bold text-blue-400">
                {realtimeStats.systemLoad.toFixed(1)}%
              </div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-xs text-gray-400">API Latency</div>
              <div className="text-lg font-bold text-green-400">
                {realtimeStats.assemblyAILatency}ms
              </div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-xs text-gray-400">Storage Used</div>
              <div className="text-lg font-bold text-purple-400">
                {realtimeStats.storageUsed.toFixed(1)}GB
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Peak Processing Hour</span>
              <span className="text-white">{realtimeStats.peakProcessingHour}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Average File Size</span>
              <span className="text-cyan-400">{realtimeStats.averageFileSize.toFixed(1)}MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Bandwidth Usage</span>
              <span className="text-yellow-400">{realtimeStats.bandwidthUsage.toFixed(1)}MB/h</span>
            </div>
          </div>
        </div>

        {/* Error Logs */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 ERROR LOGS
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {errorLogs.length === 0 ? (
              <div className="text-green-400 text-center py-8">
                No errors in the last 24 hours ✅
              </div>
            ) : (
              errorLogs.map((error) => (
                <div key={error.id} className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(error.severity)}`}>
                      {error.severity}
                    </span>
                    <span className="text-xs text-gray-400">{formatTime(error.timestamp)}</span>
                  </div>
                  <div className="text-sm text-white mb-1">{error.error}</div>
                  <div className="text-xs text-purple-400">Video: {error.videoId}</div>
                  {error.resolution && (
                    <div className="text-xs text-green-400 mt-1">
                      Resolution: {error.resolution}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentProcessingCenter;