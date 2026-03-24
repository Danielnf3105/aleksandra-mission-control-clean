// Advanced Instagram Content Intelligence Center - March 2026
// Real-time Instagram video processing, transcript analysis, and content optimization
import { useState, useEffect } from 'react';
import { BarChart, LineChart, PieChart, AreaChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line, Pie, Cell, Area, Scatter, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Treemap, Sankey, ComposedChart } from 'recharts';

export default function AdvancedInstagramContentIntelligence() {
  const [contentMetrics, setContentMetrics] = useState({
    totalVideosProcessed: 2847,
    transcriptsCompleted: 2698,
    currentProcessingRate: 15.7,
    assemblyAILatency: '1.2s',
    contentQualityScore: 94.3,
    engagementPrediction: 87.6,
    viralPotentialDetected: 12,
    trendAnalysisAccuracy: 96.8,
    realTimeProcessingQueue: 23,
    contentCategorizationAccuracy: 98.1,
    sentimentAnalysisScore: 92.4,
    hashtagOptimizationActive: true,
    audienceInsightGeneration: 'ACTIVE',
    competitorAnalysisRunning: true,
    contentPipelineHealth: 99.2
  });

  const [processingData, setProcessingData] = useState([
    { hour: '00:00', videos: 45, transcripts: 42, quality: 94.2, engagement: 87.3 },
    { hour: '01:00', videos: 38, transcripts: 35, quality: 93.8, engagement: 85.9 },
    { hour: '02:00', videos: 31, transcripts: 29, quality: 95.1, engagement: 88.4 },
    { hour: '03:00', videos: 29, transcripts: 27, quality: 94.7, engagement: 86.2 },
    { hour: '04:00', videos: 42, transcripts: 39, quality: 96.3, engagement: 91.7 },
    { hour: '05:00', videos: 56, transcripts: 53, quality: 95.8, engagement: 89.5 },
    { hour: '06:00', videos: 73, transcripts: 69, quality: 94.9, engagement: 88.1 },
    { hour: '07:00', videos: 89, transcripts: 84, quality: 93.6, engagement: 87.8 }
  ]);

  const [contentCategories, setContentCategories] = useState([
    { name: 'Reels', value: 45.2, color: '#E91E63', trend: '+12.3%' },
    { name: 'Stories', value: 28.7, color: '#9C27B0', trend: '+8.7%' },
    { name: 'IGTV', value: 15.6, color: '#3F51B5', trend: '+5.2%' },
    { name: 'Carousel', value: 7.8, color: '#2196F3', trend: '+3.1%' },
    { name: 'Live', value: 2.7, color: '#00BCD4', trend: '+15.6%' }
  ]);

  const [viralContent, setViralContent] = useState([
    { contentType: 'Dance Challenge', views: 1.2, engagement: 94.7, shares: 45.6, viralScore: 97.2 },
    { contentType: 'Product Review', views: 0.8, engagement: 87.3, shares: 32.1, viralScore: 89.4 },
    { contentType: 'Tutorial', views: 1.5, engagement: 91.8, shares: 38.9, viralScore: 92.6 },
    { contentType: 'Behind Scenes', views: 0.9, engagement: 89.2, shares: 29.7, viralScore: 85.3 },
    { contentType: 'Trending Audio', views: 2.1, engagement: 96.4, shares: 52.3, viralScore: 98.7 }
  ]);

  const [realTimeAlerts, setRealTimeAlerts] = useState([
    { id: 1, type: 'VIRAL_DETECTED', content: 'Dance tutorial gaining 15K views/hour', priority: 'HIGH', timestamp: '2 min ago' },
    { id: 2, type: 'QUALITY_ISSUE', content: 'Audio quality below threshold - Video #2847', priority: 'MEDIUM', timestamp: '5 min ago' },
    { id: 3, type: 'TREND_OPPORTUNITY', content: 'New hashtag #AI2026 trending - relevance 94%', priority: 'HIGH', timestamp: '8 min ago' },
    { id: 4, type: 'PROCESSING_COMPLETE', content: 'Batch #847 transcribed - 45 videos processed', priority: 'INFO', timestamp: '12 min ago' }
  ]);

  const [trendingHashtags, setTrendingHashtags] = useState([
    { tag: '#AIRevolution2026', usage: 156789, growth: '+234%', relevance: 96.8 },
    { tag: '#TechTutorial', usage: 89234, growth: '+87%', relevance: 92.3 },
    { tag: '#ContentCreator', usage: 234567, growth: '+45%', relevance: 88.9 },
    { tag: '#ViralChallenge', usage: 345678, growth: '+189%', relevance: 95.4 },
    { tag: '#InnovationLab', usage: 67891, growth: '+156%', relevance: 91.7 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time content processing updates
      setContentMetrics(prev => ({
        ...prev,
        totalVideosProcessed: prev.totalVideosProcessed + Math.floor(Math.random() * 3) + 1,
        transcriptsCompleted: prev.transcriptsCompleted + Math.floor(Math.random() * 3),
        currentProcessingRate: Math.max(10, Math.min(25, prev.currentProcessingRate + (Math.random() - 0.5) * 2)),
        contentQualityScore: Math.max(90, Math.min(98, prev.contentQualityScore + (Math.random() - 0.5) * 1)),
        engagementPrediction: Math.max(80, Math.min(95, prev.engagementPrediction + (Math.random() - 0.5) * 2)),
        realTimeProcessingQueue: Math.max(5, Math.min(50, prev.realTimeProcessingQueue + Math.floor((Math.random() - 0.5) * 5)))
      }));

      // Update processing data with new real-time values
      const currentHour = new Date().getHours().toString().padStart(2, '0') + ':00';
      setProcessingData(prev => {
        const newData = [...prev];
        const newEntry = {
          hour: currentHour,
          videos: Math.floor(Math.random() * 60) + 30,
          transcripts: Math.floor(Math.random() * 55) + 25,
          quality: Math.random() * 5 + 93,
          engagement: Math.random() * 8 + 85
        };
        
        if (newData.length >= 24) {
          newData.shift(); // Remove oldest entry
        }
        newData.push(newEntry);
        return newData;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const alertPriorityColors = {
    'HIGH': 'border-red-500 bg-red-900/20 text-red-300',
    'MEDIUM': 'border-yellow-500 bg-yellow-900/20 text-yellow-300',
    'LOW': 'border-blue-500 bg-blue-900/20 text-blue-300',
    'INFO': 'border-green-500 bg-green-900/20 text-green-300'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            📱🧠 Advanced Instagram Content Intelligence Center
          </h1>
          <p className="text-gray-300 text-lg">
            Real-time Video Processing | AssemblyAI Transcription | Viral Prediction | Content Optimization | Trend Analysis
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Processing Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400">AssemblyAI Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-400">AI Analysis Running</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">{contentMetrics.totalVideosProcessed.toLocaleString()}</div>
            <div className="text-gray-300 text-sm">Videos Processed</div>
            <div className="text-xs text-green-300 mt-1">+{Math.floor(Math.random() * 20) + 10}/hour</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">{contentMetrics.transcriptsCompleted.toLocaleString()}</div>
            <div className="text-gray-300 text-sm">Transcripts Ready</div>
            <div className="text-xs text-blue-300 mt-1">{((contentMetrics.transcriptsCompleted / contentMetrics.totalVideosProcessed) * 100).toFixed(1)}% completion</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">{contentMetrics.currentProcessingRate.toFixed(1)}/min</div>
            <div className="text-gray-300 text-sm">Processing Rate</div>
            <div className="text-xs text-purple-300 mt-1">Latency: {contentMetrics.assemblyAILatency}</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-yellow-400">{contentMetrics.contentQualityScore.toFixed(1)}%</div>
            <div className="text-gray-300 text-sm">Quality Score</div>
            <div className="text-xs text-yellow-300 mt-1">Above 95% target</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-red-400">{contentMetrics.viralPotentialDetected}</div>
            <div className="text-gray-300 text-sm">Viral Detected</div>
            <div className="text-xs text-red-300 mt-1">High potential content</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-cyan-400">{contentMetrics.realTimeProcessingQueue}</div>
            <div className="text-gray-300 text-sm">Queue Size</div>
            <div className="text-xs text-cyan-300 mt-1">Est. {(contentMetrics.realTimeProcessingQueue / contentMetrics.currentProcessingRate).toFixed(1)}min wait</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Real-time Processing Chart */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              📊 Real-time Processing Analytics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={processingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis yAxisId="left" stroke="#9CA3AF" />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="videos" fill="#3B82F6" name="Videos/Hour" />
                <Bar yAxisId="left" dataKey="transcripts" fill="#10B981" name="Transcripts/Hour" />
                <Line yAxisId="right" type="monotone" dataKey="quality" stroke="#F59E0B" strokeWidth={3} name="Quality %" />
                <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#EF4444" strokeWidth={3} name="Engagement %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Content Categories */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              🎯 Content Category Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contentCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {contentCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {contentCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded">
                  <span className="text-gray-300">{category.name}</span>
                  <span className="text-green-400 font-semibold">{category.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Viral Content Analysis */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              🔥 Viral Content Analysis
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart data={viralContent}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="views" stroke="#9CA3AF" name="Views (M)" />
                <YAxis dataKey="engagement" stroke="#9CA3AF" name="Engagement %" />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  formatter={(value, name) => [value + (name === 'views' ? 'M' : '%'), name]}
                />
                <Scatter dataKey="viralScore" fill="#EF4444" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Real-time Alerts */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              🚨 Real-time Alerts
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {realTimeAlerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${alertPriorityColors[alert.priority]}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-sm">{alert.type}</span>
                    <span className="text-xs opacity-75">{alert.timestamp}</span>
                  </div>
                  <p className="text-sm opacity-90">{alert.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Hashtags */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              #️⃣ Trending Hashtags
            </h3>
            <div className="space-y-3">
              {trendingHashtags.map((hashtag, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-400 font-semibold">{hashtag.tag}</span>
                    <span className="text-green-400 text-sm font-bold">{hashtag.growth}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>{hashtag.usage.toLocaleString()} uses</span>
                    <span>Relevance: {hashtag.relevance}%</span>
                  </div>
                  <div className="mt-2 bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                      style={{ width: `${hashtag.relevance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            ⚡ System Performance Indicators
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{contentMetrics.contentPipelineHealth.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Pipeline Health</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{contentMetrics.trendAnalysisAccuracy.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Trend Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{contentMetrics.contentCategorizationAccuracy.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Categorization</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{contentMetrics.sentimentAnalysisScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Sentiment Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{contentMetrics.engagementPrediction.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Engagement Pred.</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">ACTIVE</div>
              <div className="text-sm text-gray-300">AI Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}