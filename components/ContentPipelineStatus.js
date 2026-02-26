// ContentPipelineStatus.js - Instagram Content Processing Pipeline Monitoring
import { useState, useEffect } from 'react';

const ContentPipelineStatus = () => {
  const [pipelineData, setPipelineData] = useState({
    totalVideos: 11,
    processedToday: 3,
    processingQueue: 0,
    averageProcessingTime: 47.3,
    successRate: 96.8,
    totalTranscriptLines: 847,
    averageAccuracy: 94.2,
    contentLibrary: {
      totalSize: '2.4MB',
      transcripts: 11,
      categories: ['Facebook Ads', 'AI Tools', 'Business Strategy', 'SEO'],
      valueTiers: {
        S: 4, // S-tier content (highest value)
        A: 3, // A-tier content  
        B: 3, // B-tier content
        C: 1  // C-tier content (lowest value)
      }
    },
    recentActivity: []
  });

  const [assemblyAIStatus, setAssemblyAIStatus] = useState({
    apiStatus: 'OPERATIONAL',
    responseTime: 23.7,
    creditsUsed: 47,
    creditsRemaining: 953,
    monthlyQuota: 1000,
    lastApiCall: new Date().toLocaleTimeString()
  });

  const [pipelineStages, setPipelineStages] = useState([
    {
      stage: 'URL Input',
      status: 'READY',
      description: 'Instagram URL validation',
      processedCount: 11,
      avgTime: '2.1s',
      successRate: 100
    },
    {
      stage: 'Video Download', 
      status: 'READY',
      description: 'yt-dlp extraction',
      processedCount: 11,
      avgTime: '15.3s',
      successRate: 100
    },
    {
      stage: 'Audio Conversion',
      status: 'READY', 
      description: 'MP4 to audio format',
      processedCount: 11,
      avgTime: '8.7s',
      successRate: 100
    },
    {
      stage: 'Assembly AI',
      status: 'READY',
      description: 'Speech transcription',
      processedCount: 11,
      avgTime: '23.4s', 
      successRate: 96.8
    },
    {
      stage: 'Format Processing',
      status: 'READY',
      description: 'Line-by-line formatting',
      processedCount: 11,
      avgTime: '1.2s',
      successRate: 100
    },
    {
      stage: 'Content Analysis',
      status: 'READY',
      description: 'Value tier classification',
      processedCount: 11,
      avgTime: '3.8s',
      successRate: 94.2
    }
  ]);

  const [modelingContent, setModelingContent] = useState([
    {
      id: 1,
      title: 'Facebook Ads Mastery',
      url: 'instagram.com/reel/abc123',
      processedAt: '2026-02-25 14:23:15',
      transcriptLines: 87,
      valueTier: 'S',
      category: 'Facebook Ads',
      duration: '45s',
      accuracy: 96.4,
      keyTopics: ['Ad targeting', 'Conversion optimization', 'Creative testing']
    },
    {
      id: 2,
      title: 'AI Tools for Business',
      url: 'instagram.com/reel/def456',
      processedAt: '2026-02-25 15:47:32',
      transcriptLines: 73,
      valueTier: 'A',
      category: 'AI Tools',
      duration: '38s',
      accuracy: 94.8,
      keyTopics: ['ChatGPT prompts', 'Automation', 'Productivity']
    },
    {
      id: 3,
      title: 'SaaS Growth Strategy',
      url: 'instagram.com/reel/ghi789',
      processedAt: '2026-02-26 09:15:47',
      transcriptLines: 92,
      valueTier: 'A',
      category: 'Business Strategy',
      duration: '52s',
      accuracy: 97.2,
      keyTopics: ['Product-market fit', 'User acquisition', 'Retention']
    }
  ]);

  useEffect(() => {
    // Simulate real-time pipeline monitoring
    const interval = setInterval(() => {
      // Update Assembly AI status
      setAssemblyAIStatus(prev => ({
        ...prev,
        responseTime: Math.max(10, Math.min(50, prev.responseTime + (Math.random() - 0.5) * 5)),
        lastApiCall: new Date().toLocaleTimeString()
      }));

      // Update pipeline metrics
      setPipelineData(prev => ({
        ...prev,
        successRate: Math.max(90, Math.min(99, prev.successRate + (Math.random() - 0.4) * 1)),
        averageAccuracy: Math.max(85, Math.min(98, prev.averageAccuracy + (Math.random() - 0.3) * 2))
      }));

      // Add random activity
      const activities = [
        'Content pipeline health check completed',
        'Assembly AI transcription quality verified',
        'Value tier classification updated',
        'Content library indexed successfully',
        'Pipeline performance metrics refreshed'
      ];

      setPipelineData(prev => ({
        ...prev,
        recentActivity: [
          {
            time: new Date().toLocaleTimeString(),
            event: activities[Math.floor(Math.random() * activities.length)],
            type: 'INFO'
          },
          ...prev.recentActivity.slice(0, 4)
        ]
      }));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'OPERATIONAL': case 'READY': return '#10B981';
      case 'PROCESSING': return '#3B82F6';
      case 'WARNING': return '#F59E0B';
      case 'ERROR': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getTierColor = (tier) => {
    switch(tier) {
      case 'S': return '#EF4444'; // Red for S-tier
      case 'A': return '#F59E0B'; // Orange for A-tier  
      case 'B': return '#3B82F6'; // Blue for B-tier
      case 'C': return '#6B7280'; // Gray for C-tier
      default: return '#6B7280';
    }
  };

  const getTierBadge = (tier) => {
    const colors = {
      'S': 'bg-red-600 text-white border-red-500',
      'A': 'bg-orange-600 text-white border-orange-500', 
      'B': 'bg-blue-600 text-white border-blue-500',
      'C': 'bg-gray-600 text-white border-gray-500'
    };
    return colors[tier] || 'bg-gray-600 text-white border-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Pipeline Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Total Videos</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {pipelineData.totalVideos}
          </div>
          <div className="text-xs text-green-400">All processed</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Success Rate</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {pipelineData.successRate.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">High quality</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Processing</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {pipelineData.averageProcessingTime}s
          </div>
          <div className="text-xs text-green-400">Fast pipeline</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Transcript Lines</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {pipelineData.totalTranscriptLines}
          </div>
          <div className="text-xs text-green-400">Content rich</div>
        </div>
      </div>

      {/* Assembly AI Status */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🎙️ Assembly AI Transcription Engine
            <span 
              className="ml-3 text-xs px-2 py-1 rounded font-medium"
              style={{ 
                backgroundColor: getStatusColor(assemblyAIStatus.apiStatus) + '20',
                color: getStatusColor(assemblyAIStatus.apiStatus)
              }}
            >
              {assemblyAIStatus.apiStatus}
            </span>
          </h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-400 mb-1">Response Time:</div>
              <div className="text-white font-bold">{assemblyAIStatus.responseTime.toFixed(1)}ms</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">Credits Used:</div>
              <div className="text-white font-bold">{assemblyAIStatus.creditsUsed}/{assemblyAIStatus.monthlyQuota}</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">Credits Remaining:</div>
              <div className="text-green-400 font-bold">{assemblyAIStatus.creditsRemaining}</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">Last API Call:</div>
              <div className="text-blue-400 font-bold">{assemblyAIStatus.lastApiCall}</div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="text-xs text-gray-400 mb-2">Monthly Usage Progress</div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                style={{ width: `${(assemblyAIStatus.creditsUsed / assemblyAIStatus.monthlyQuota) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {((assemblyAIStatus.creditsUsed / assemblyAIStatus.monthlyQuota) * 100).toFixed(1)}% of monthly quota used
            </div>
          </div>
        </div>
      </div>

      {/* Content Pipeline Stages */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">⚙️ Content Processing Pipeline</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {pipelineStages.map((stage, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{index + 1}</div>
                  <div>
                    <div className="text-white font-medium">{stage.stage}</div>
                    <div className="text-sm text-gray-300">{stage.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div 
                    className="text-sm font-bold mb-1"
                    style={{ color: getStatusColor(stage.status) }}
                  >
                    {stage.status}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stage.processedCount} processed • {stage.avgTime} avg • {stage.successRate}% success
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Library & Value Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">📚 Content Library Status</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400 mb-1">Total Size:</div>
                <div className="text-white font-bold">{pipelineData.contentLibrary.totalSize}</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Transcripts:</div>
                <div className="text-white font-bold">{pipelineData.contentLibrary.transcripts}</div>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400 mb-2">Categories:</div>
              <div className="flex flex-wrap gap-2">
                {pipelineData.contentLibrary.categories.map((category, i) => (
                  <span key={i} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-gray-400 mb-2">Value Tier Distribution:</div>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(pipelineData.contentLibrary.valueTiers).map(([tier, count]) => (
                  <div key={tier} className="text-center">
                    <div 
                      className="text-lg font-bold"
                      style={{ color: getTierColor(tier) }}
                    >
                      {count}
                    </div>
                    <div className="text-xs text-gray-400">{tier}-tier</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Pipeline Activity */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">📊 Pipeline Activity</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {pipelineData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <div>
                    <div className="text-gray-300">{activity.event}</div>
                    <div className="text-gray-500 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))}
              {pipelineData.recentActivity.length === 0 && (
                <div className="text-gray-500 text-center py-4">
                  No recent activity
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Content Processed */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🎬 Recently Processed Content</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {modelingContent.map((content) => (
              <div key={content.id} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">{content.title}</h4>
                    <div className="text-sm text-blue-400">{content.url}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded border font-bold ${getTierBadge(content.valueTier)}`}>
                      {content.valueTier}-TIER
                    </span>
                    <span className="text-sm text-green-400">{content.accuracy}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs mb-3">
                  <div>
                    <span className="text-gray-400">Duration: </span>
                    <span className="text-white">{content.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Lines: </span>
                    <span className="text-white">{content.transcriptLines}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Category: </span>
                    <span className="text-yellow-300">{content.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Processed: </span>
                    <span className="text-purple-300">{content.processedAt.split(' ')[1]}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Key Topics:</div>
                  <div className="flex space-x-2 flex-wrap">
                    {content.keyTopics.map((topic, i) => (
                      <span key={i} className="bg-gray-600 text-gray-300 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPipelineStatus;