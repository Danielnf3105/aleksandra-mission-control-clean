// 🎥 Assembly AI Enhanced Monitoring System v1.0
// Real-time transcription processing with quality scoring & advanced analytics
import { useState, useEffect } from 'react';
import { Mic, Activity, TrendingUp, AlertCircle, CheckCircle, Clock, FileText, Zap, DollarSign, BarChart3, Settings, PlayCircle, PauseCircle } from 'lucide-react';

export default function AssemblyAIEnhancedMonitor() {
  const [assemblyMetrics, setAssemblyMetrics] = useState({
    realTimeProcessing: {
      activeTranscriptions: 3,
      queuedVideos: 7,
      avgProcessingTime: 127,
      currentThroughput: 2.3,
      peakThroughput: 4.1,
      totalProcessedToday: 23
    },
    qualityMetrics: {
      avgConfidenceScore: 94.7,
      highQualityPercent: 87.3,
      transcriptionAccuracy: 96.2,
      errorRate: 2.1,
      retryRate: 1.4,
      qualityTrendDirection: 'up'
    },
    resourceUtilization: {
      apiQuotaUsed: 34.8,
      dailyQuotaRemaining: 1247,
      avgTokensPerMinute: 156,
      peakTokensPerMinute: 298,
      costPerTranscription: 0.12,
      dailyCost: 2.76
    },
    performanceInsights: {
      fasterThanExpected: 73.2,
      optimalVideoLength: '2-4 minutes',
      bestProcessingHours: '09:00-11:00',
      qualityImprovements: 12.4,
      predictionAccuracy: 91.8,
      bottleneckDetection: 'none'
    }
  });

  const [transcriptionQueue, setTranscriptionQueue] = useState([
    { 
      id: 'trans_001', 
      filename: 'instagram_reel_content_strategy.mp4',
      duration: '03:47',
      status: 'processing',
      progress: 67,
      confidenceScore: null,
      estimatedCompletion: '2m 15s',
      priority: 'high'
    },
    { 
      id: 'trans_002', 
      filename: 'social_media_trends_analysis.mp4',
      duration: '02:23',
      status: 'processing',
      progress: 34,
      confidenceScore: null,
      estimatedCompletion: '3m 45s',
      priority: 'medium'
    },
    { 
      id: 'trans_003', 
      filename: 'marketing_automation_tips.mp4',
      duration: '05:12',
      status: 'queued',
      progress: 0,
      confidenceScore: null,
      estimatedCompletion: '8m 30s',
      priority: 'medium'
    },
    { 
      id: 'trans_004', 
      filename: 'competitor_ad_breakdown.mp4',
      duration: '01:56',
      status: 'completed',
      progress: 100,
      confidenceScore: 97.2,
      estimatedCompletion: 'Complete',
      priority: 'high'
    },
    { 
      id: 'trans_005', 
      filename: 'brand_storytelling_examples.mp4',
      duration: '04:33',
      status: 'completed',
      progress: 100,
      confidenceScore: 92.8,
      estimatedCompletion: 'Complete',
      priority: 'low'
    }
  ]);

  const [recentInsights, setRecentInsights] = useState([
    { 
      type: 'performance',
      message: 'Processing speed improved by 23% in the last hour',
      time: '17:05',
      impact: 'positive'
    },
    {
      type: 'quality',
      message: 'Confidence scores consistently above 95% for last 5 transcriptions',
      time: '17:02',
      impact: 'positive'
    },
    {
      type: 'cost',
      message: 'Daily cost tracking 8% below budget target',
      time: '16:58',
      impact: 'positive'
    },
    {
      type: 'prediction',
      message: 'Optimal processing window identified: morning sessions',
      time: '16:45',
      impact: 'insight'
    },
    {
      type: 'alert',
      message: 'Queue length increasing - consider processing prioritization',
      time: '16:40',
      impact: 'warning'
    }
  ]);

  const qualityDistribution = [
    { range: '95-100%', count: 14, percentage: 60.9, color: 'bg-green-500' },
    { range: '90-95%', count: 6, percentage: 26.1, color: 'bg-blue-500' },
    { range: '85-90%', count: 2, percentage: 8.7, color: 'bg-yellow-500' },
    { range: '80-85%', count: 1, percentage: 4.3, color: 'bg-orange-500' },
    { range: '<80%', count: 0, percentage: 0, color: 'bg-red-500' }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update processing progress
      setTranscriptionQueue(prev => prev.map(item => {
        if (item.status === 'processing' && item.progress < 100) {
          const newProgress = Math.min(100, item.progress + Math.random() * 8);
          const isComplete = newProgress >= 100;
          
          return {
            ...item,
            progress: Math.round(newProgress),
            status: isComplete ? 'completed' : 'processing',
            confidenceScore: isComplete ? (90 + Math.random() * 8) : null,
            estimatedCompletion: isComplete ? 'Complete' : item.estimatedCompletion
          };
        }
        return item;
      }));

      // Update metrics
      setAssemblyMetrics(prev => ({
        ...prev,
        realTimeProcessing: {
          ...prev.realTimeProcessing,
          avgProcessingTime: Math.max(80, Math.min(200, prev.realTimeProcessing.avgProcessingTime + (Math.random() - 0.5) * 10)),
          currentThroughput: Math.max(1, Math.min(5, prev.realTimeProcessing.currentThroughput + (Math.random() - 0.5) * 0.3))
        },
        qualityMetrics: {
          ...prev.qualityMetrics,
          avgConfidenceScore: Math.max(85, Math.min(98, prev.qualityMetrics.avgConfidenceScore + (Math.random() - 0.5) * 1))
        },
        resourceUtilization: {
          ...prev.resourceUtilization,
          apiQuotaUsed: Math.max(20, Math.min(80, prev.resourceUtilization.apiQuotaUsed + (Math.random() - 0.5) * 2))
        }
      }));

      // Occasionally add new insights
      if (Math.random() < 0.2) {
        const insights = [
          'New high-quality transcription completed',
          'Processing efficiency optimization detected',
          'Quality threshold maintained above target',
          'Cost optimization opportunity identified',
          'Peak processing period analysis updated'
        ];
        
        setRecentInsights(prev => [
          {
            type: ['performance', 'quality', 'cost', 'prediction', 'alert'][Math.floor(Math.random() * 5)],
            message: insights[Math.floor(Math.random() * insights.length)],
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            impact: Math.random() > 0.7 ? 'warning' : 'positive'
          },
          ...prev.slice(0, 4)
        ]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'text-blue-400 bg-blue-500/20';
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'queued': return 'text-yellow-400 bg-yellow-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing': return <PlayCircle className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'queued': return <Clock className="w-4 h-4" />;
      case 'error': return <AlertCircle className="w-4 h-4" />;
      default: return <PauseCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Assembly AI Enhanced Monitor
              </h1>
              <p className="text-gray-400">Real-time transcription processing with quality analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">System Status</div>
            <div className="text-lg font-semibold text-green-400">OPTIMAL</div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Processing Performance */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              <span className="font-medium">Processing</span>
            </div>
            <div className="text-indigo-400 text-sm">{assemblyMetrics.realTimeProcessing.currentThroughput.toFixed(1)}/min</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Active</span>
              <span>{assemblyMetrics.realTimeProcessing.activeTranscriptions}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Queued</span>
              <span>{assemblyMetrics.realTimeProcessing.queuedVideos}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Avg Time</span>
              <span>{Math.round(assemblyMetrics.realTimeProcessing.avgProcessingTime)}s</span>
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-medium">Quality</span>
            </div>
            <div className="text-green-400 text-sm">{assemblyMetrics.qualityMetrics.avgConfidenceScore.toFixed(1)}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">High Quality</span>
              <span>{assemblyMetrics.qualityMetrics.highQualityPercent}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Accuracy</span>
              <span>{assemblyMetrics.qualityMetrics.transcriptionAccuracy}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Error Rate</span>
              <span className="text-green-400">{assemblyMetrics.qualityMetrics.errorRate}%</span>
            </div>
          </div>
        </div>

        {/* Resource Usage */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Resources</span>
            </div>
            <div className="text-yellow-400 text-sm">${assemblyMetrics.resourceUtilization.dailyCost.toFixed(2)}</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Quota Used</span>
              <span>{assemblyMetrics.resourceUtilization.apiQuotaUsed.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Remaining</span>
              <span>{assemblyMetrics.resourceUtilization.dailyQuotaRemaining}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Per Transcription</span>
              <span>${assemblyMetrics.resourceUtilization.costPerTranscription.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Insights</span>
            </div>
            <div className="text-purple-400 text-sm">{assemblyMetrics.performanceInsights.predictionAccuracy}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Faster Than Expected</span>
              <span>{assemblyMetrics.performanceInsights.fasterThanExpected}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Optimal Length</span>
              <span className="text-xs">{assemblyMetrics.performanceInsights.optimalVideoLength}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Best Hours</span>
              <span className="text-xs">{assemblyMetrics.performanceInsights.bestProcessingHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Live Transcription Queue */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span>Live Transcription Queue</span>
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {transcriptionQueue.map((item, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`${getStatusColor(item.status)} p-1 rounded`}>
                      {getStatusIcon(item.status)}
                    </div>
                    <span className="font-medium text-sm">{item.filename}</span>
                  </div>
                  <div className="text-xs text-gray-400">{item.duration}</div>
                </div>
                
                {item.status === 'processing' && (
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-1.5">
                      <div 
                        className="bg-blue-400 h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">{item.estimatedCompletion}</span>
                  {item.confidenceScore && (
                    <span className={`px-2 py-1 rounded ${
                      item.confidenceScore > 95 ? 'bg-green-900/50 text-green-300' :
                      item.confidenceScore > 90 ? 'bg-blue-900/50 text-blue-300' :
                      'bg-yellow-900/50 text-yellow-300'
                    }`}>
                      {item.confidenceScore.toFixed(1)}% confidence
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.priority === 'high' ? 'bg-red-900/50 text-red-300' :
                    item.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                    'bg-gray-900/50 text-gray-300'
                  }`}>
                    {item.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Distribution */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-green-400" />
            <span>Quality Distribution</span>
          </h3>
          <div className="space-y-4">
            {qualityDistribution.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 text-sm text-gray-400">{item.range}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{item.count} transcriptions</span>
                    <span className="text-sm text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
            <div className="text-sm font-medium mb-2">Quality Insights</div>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>• 87% of transcriptions exceed 90% confidence</li>
              <li>• Best performance with 2-4 minute videos</li>
              <li>• Quality improved 12.4% this week</li>
              <li>• Zero transcriptions below 80% confidence</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Insights Feed */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span>Recent Insights & Alerts</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentInsights.map((insight, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              insight.impact === 'positive' ? 'bg-green-900/20 border-green-400' :
              insight.impact === 'warning' ? 'bg-yellow-900/20 border-yellow-400' :
              insight.impact === 'insight' ? 'bg-blue-900/20 border-blue-400' :
              'bg-gray-900/20 border-gray-400'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  insight.type === 'performance' ? 'bg-indigo-900/50 text-indigo-300' :
                  insight.type === 'quality' ? 'bg-green-900/50 text-green-300' :
                  insight.type === 'cost' ? 'bg-yellow-900/50 text-yellow-300' :
                  insight.type === 'prediction' ? 'bg-purple-900/50 text-purple-300' :
                  'bg-red-900/50 text-red-300'
                }`}>
                  {insight.type}
                </span>
                <span className="text-xs text-gray-400">{insight.time}</span>
              </div>
              <p className="text-sm">{insight.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}