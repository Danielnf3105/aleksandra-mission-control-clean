// Instagram Content Intelligence Center - Real-Time Processing Pipeline
import { useState, useEffect } from 'react';
import { Instagram, Play, FileText, Brain, TrendingUp, Clock, Zap, Target, CheckCircle, AlertCircle, Activity } from 'lucide-react';

export default function InstagramContentIntelligence() {
  const [contentData, setContentData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    pipelineStatus: 'ACTIVE',
    totalVideosProcessed: 247,
    todayProcessed: 15,
    processingQueue: 3,
    recentTranscriptions: [
      {
        id: 'vid_001',
        title: 'AI Marketing Strategy 2026',
        duration: '02:34',
        status: 'COMPLETED',
        transcribedAt: '10:45',
        confidenceScore: 98.7,
        keyTopics: ['AI Strategy', 'Marketing', 'Growth']
      },
      {
        id: 'vid_002', 
        title: 'Personal Brand Building Tips',
        duration: '01:47',
        status: 'PROCESSING',
        transcribedAt: '10:58',
        confidenceScore: null,
        keyTopics: ['Personal Brand', 'Social Media']
      },
      {
        id: 'vid_003',
        title: 'Content Creation Automation',
        duration: '03:12',
        status: 'QUEUED',
        transcribedAt: null,
        confidenceScore: null,
        keyTopics: []
      }
    ],
    assemblyAIMetrics: {
      status: 'OPERATIONAL',
      apiLatency: 142,
      accuracyScore: 94.3,
      processingSpeed: '2.1x realtime',
      dailyApiCalls: 89,
      apiQuotaRemaining: 911
    },
    contentAnalytics: {
      averageDuration: 168, // seconds
      topTopics: [
        { topic: 'AI & Technology', count: 45, trend: '+12%' },
        { topic: 'Marketing Strategy', count: 38, trend: '+8%' },
        { topic: 'Personal Brand', count: 32, trend: '+15%' },
        { topic: 'Business Growth', count: 28, trend: '+5%' }
      ],
      languageDistribution: {
        english: 78,
        portuguese: 15,
        spanish: 5,
        other: 2
      }
    },
    performanceMetrics: {
      processingSuccessRate: 97.8,
      averageProcessingTime: 89, // seconds
      errorRate: 2.2,
      retrySuccessRate: 94.5,
      storageUsed: '2.4 GB',
      costPerTranscription: '$0.014'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setContentData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        assemblyAIMetrics: {
          ...prev.assemblyAIMetrics,
          apiLatency: Math.max(80, Math.min(200, prev.assemblyAIMetrics.apiLatency + (Math.random() - 0.5) * 20)),
          accuracyScore: Math.max(90, Math.min(98, prev.assemblyAIMetrics.accuracyScore + (Math.random() - 0.5) * 2))
        },
        performanceMetrics: {
          ...prev.performanceMetrics,
          processingSuccessRate: Math.max(95, Math.min(99, prev.performanceMetrics.processingSuccessRate + (Math.random() - 0.5) * 1))
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED': return 'text-green-400 bg-green-400/20';
      case 'PROCESSING': return 'text-blue-400 bg-blue-400/20';
      case 'QUEUED': return 'text-yellow-400 bg-yellow-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'COMPLETED': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'PROCESSING': return <Activity className="w-4 h-4 text-blue-400 animate-pulse" />;
      case 'QUEUED': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'FAILED': return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Instagram Content Intelligence</h1>
              <p className="text-purple-300">Real-time video transcription & content analysis pipeline</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{contentData.currentTime}</div>
            <div className="text-purple-300">Live Processing Status</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Pipeline Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Total Processed
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{contentData.totalVideosProcessed}</div>
            <div className="text-purple-300 text-sm">All-time videos</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Play className="w-5 h-5 text-green-400 mr-2" />
                Today
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{contentData.todayProcessed}</div>
            <div className="text-green-300 text-sm">Videos processed</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Queue
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{contentData.processingQueue}</div>
            <div className="text-yellow-300 text-sm">Videos waiting</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                Success Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{contentData.performanceMetrics.processingSuccessRate}%</div>
            <div className="text-cyan-300 text-sm">Processing accuracy</div>
          </div>
        </div>

        {/* Recent Transcriptions */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <FileText className="w-5 h-5 text-purple-400 mr-2" />
            Recent Transcriptions
          </h3>
          <div className="space-y-4">
            {contentData.recentTranscriptions.map((transcription, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(transcription.status)}
                    <div>
                      <h4 className="font-medium text-white">{transcription.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span>Duration: {transcription.duration}</span>
                        {transcription.transcribedAt && (
                          <span>Processed: {transcription.transcribedAt}</span>
                        )}
                        {transcription.confidenceScore && (
                          <span>Confidence: {transcription.confidenceScore}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transcription.status)}`}>
                    {transcription.status}
                  </span>
                </div>
                {transcription.keyTopics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {transcription.keyTopics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded-md text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AssemblyAI Metrics & Content Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              AssemblyAI Performance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">API Status</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contentData.assemblyAIMetrics.status)}`}>
                  {contentData.assemblyAIMetrics.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">API Latency</span>
                <span className="text-white font-medium">{contentData.assemblyAIMetrics.apiLatency}ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Accuracy Score</span>
                <span className="text-white font-medium">{contentData.assemblyAIMetrics.accuracyScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Processing Speed</span>
                <span className="text-white font-medium">{contentData.assemblyAIMetrics.processingSpeed}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">API Quota Remaining</span>
                <span className="text-white font-medium">{contentData.assemblyAIMetrics.apiQuotaRemaining}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Content Analytics
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Top Topics</h4>
                <div className="space-y-2">
                  {contentData.contentAnalytics.topTopics.slice(0, 3).map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{topic.topic}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-sm">{topic.count}</span>
                        <span className="text-green-400 text-xs">{topic.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Performance</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Avg. Processing Time</span>
                    <span className="text-white text-sm">{contentData.performanceMetrics.averageProcessingTime}s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Cost Per Transcription</span>
                    <span className="text-white text-sm">{contentData.performanceMetrics.costPerTranscription}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Processing Pipeline Visualization */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 text-purple-400 mr-2" />
            Processing Pipeline
          </h3>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1 bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-purple-400 font-medium mb-2">Video Ingestion</div>
              <div className="text-2xl font-bold text-white">{contentData.processingQueue}</div>
              <div className="text-slate-400 text-sm">In Queue</div>
            </div>
            <div className="text-purple-400">→</div>
            <div className="flex-1 bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-blue-400 font-medium mb-2">AssemblyAI Processing</div>
              <div className="text-2xl font-bold text-white">{contentData.assemblyAIMetrics.apiLatency}ms</div>
              <div className="text-slate-400 text-sm">Avg. Latency</div>
            </div>
            <div className="text-purple-400">→</div>
            <div className="flex-1 bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-green-400 font-medium mb-2">Content Analysis</div>
              <div className="text-2xl font-bold text-white">{contentData.contentAnalytics.topTopics.length}</div>
              <div className="text-slate-400 text-sm">Topics Extracted</div>
            </div>
            <div className="text-purple-400">→</div>
            <div className="flex-1 bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-cyan-400 font-medium mb-2">Storage & Indexing</div>
              <div className="text-2xl font-bold text-white">{contentData.performanceMetrics.storageUsed}</div>
              <div className="text-slate-400 text-sm">Storage Used</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}