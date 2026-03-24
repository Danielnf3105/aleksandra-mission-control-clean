import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const MediaEntertainmentAIIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mediaPhase, setMediaPhase] = useState('AI_CONTENT_CREATION');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate media & entertainment phase changes
      const phases = ['AI_CONTENT_CREATION', 'IMMERSIVE_XR_EXPANSION', 'METAVERSE_ACTIVATION', 'STREAMING_EVOLUTION', 'VIRTUAL_PRODUCTION_SCALING'];
      setMediaPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Media & Entertainment Data
  const mediaSegments = [
    { segment: 'AI Content Creation & Automation', market_b: 23.4, growth_rate: 45.8, adoption_rate: 78, companies_using: 12400 },
    { segment: 'Immersive VR/AR Entertainment', market_b: 26.9, growth_rate: 31.7, adoption_rate: 34, headsets_deployed_m: 89 },
    { segment: 'Streaming & OTT Platforms', market_b: 234.7, growth_rate: 12.8, adoption_rate: 89, subscribers_b: 2.1 },
    { segment: 'Gaming & Interactive Media', market_b: 345.6, growth_rate: 18.4, adoption_rate: 92, players_b: 3.2 },
    { segment: 'Virtual Production & Film Tech', market_b: 12.8, growth_rate: 56.9, adoption_rate: 67, studios_using: 890 },
    { segment: 'Creator Economy Platforms', market_b: 67.8, growth_rate: 28.9, adoption_rate: 84, creators_m: 234 },
    { segment: 'Metaverse Entertainment', market_b: 45.7, growth_rate: 89.4, adoption_rate: 23, users_m: 156 },
    { segment: 'Live Events & Experiences', market_b: 89.4, growth_rate: 22.6, adoption_rate: 76, venues_digitized: 3400 }
  ];

  const mediaMarketEvolution = [
    { year: '2024', total_media_t: 2.8, immersive_b: 156.7, ai_content_b: 12.4, metaverse_b: 134.5 },
    { year: '2025', total_media_t: 3.2, immersive_b: 189.7, ai_content_b: 18.9, metaverse_b: 189.7 },
    { year: '2026', total_media_t: 3.8, immersive_b: 185.7, ai_content_b: 23.4, metaverse_b: 267.8 },
    { year: '2027E', total_media_t: 4.3, immersive_b: 234.6, ai_content_b: 34.2, metaverse_b: 378.9 },
    { year: '2028E', total_media_t: 4.9, immersive_b: 298.7, ai_content_b: 49.8, metaverse_b: 534.7 },
    { year: '2030E', total_media_t: 6.8, immersive_b: 498.4, ai_content_b: 89.7, metaverse_b: 1234.5 }
  ];

  const aiContentApplications = [
    { application: 'Script Writing & Storytelling AI', effectiveness: 84.7, deployment_rate: 67, cost_reduction: 45.8, quality_score: 78 },
    { application: 'AI Video Generation & Editing', effectiveness: 91.3, deployment_rate: 89, cost_reduction: 67.9, quality_score: 82 },
    { application: 'Voice Synthesis & Dubbing', effectiveness: 96.8, deployment_rate: 78, cost_reduction: 78.4, quality_score: 94 },
    { application: 'Music Composition AI', effectiveness: 87.9, deployment_rate: 72, cost_reduction: 34.7, quality_score: 86 },
    { application: 'Virtual Actors & Characters', effectiveness: 79.4, deployment_rate: 45, cost_reduction: 89.3, quality_score: 71 },
    { application: 'Personalized Content Recommendation', effectiveness: 94.2, deployment_rate: 98, cost_reduction: 23.6, quality_score: 91 }
  ];

  const streamingPlatforms = [
    { platform: 'Netflix', subscribers_m: 278.4, ai_features: 94, content_hours_k: 45600, revenue_b: 34.7 },
    { platform: 'Disney+', subscribers_m: 167.8, ai_features: 87, content_hours_k: 23400, revenue_b: 18.9 },
    { platform: 'Amazon Prime Video', subscribers_m: 234.6, ai_features: 91, content_hours_k: 34500, revenue_b: 28.4 },
    { platform: 'HBO Max/Discovery+', subscribers_m: 123.7, ai_features: 85, content_hours_k: 19800, revenue_b: 15.6 },
    { platform: 'YouTube Premium', subscribers_m: 89.2, ai_features: 96, content_hours_k: 78900, revenue_b: 12.3 },
    { platform: 'Apple TV+', subscribers_m: 67.4, ai_features: 89, content_hours_k: 8900, revenue_b: 8.7 },
    { platform: 'Paramount+', subscribers_m: 45.8, ai_features: 76, content_hours_k: 12300, revenue_b: 6.8 }
  ];

  const immersiveExperiences = [
    { experience: 'VR Gaming & Entertainment', users_m: 67.8, engagement_hours_avg: 4.2, revenue_per_user: 89, satisfaction: 87 },
    { experience: 'AR Social Experiences', users_m: 234.6, engagement_hours_avg: 2.8, revenue_per_user: 34, satisfaction: 82 },
    { experience: 'Virtual Concerts & Events', users_m: 45.7, engagement_hours_avg: 1.8, revenue_per_user: 67, satisfaction: 91 },
    { experience: 'Metaverse Social Spaces', users_m: 156.9, engagement_hours_avg: 3.4, revenue_per_user: 45, satisfaction: 74 },
    { experience: 'Interactive VR Films', users_m: 23.4, engagement_hours_avg: 2.1, revenue_per_user: 78, satisfaction: 89 },
    { experience: 'Mixed Reality Experiences', users_m: 89.3, engagement_hours_avg: 2.6, revenue_per_user: 56, satisfaction: 85 }
  ];

  const creatorEconomyMetrics = [
    { platform: 'YouTube', creators_m: 78.9, revenue_share: 55, ai_tools_adoption: 89, avg_income_k: 34 },
    { platform: 'TikTok', creators_m: 156.7, revenue_share: 50, ai_tools_adoption: 94, avg_income_k: 12 },
    { platform: 'Instagram', creators_m: 234.6, revenue_share: 45, ai_tools_adoption: 87, avg_income_k: 18 },
    { platform: 'Twitch', creators_m: 23.4, revenue_share: 50, ai_tools_adoption: 76, avg_income_k: 45 },
    { platform: 'OnlyFans', creators_m: 4.5, revenue_share: 80, ai_tools_adoption: 67, avg_income_k: 89 },
    { platform: 'Patreon', creators_m: 12.8, revenue_share: 90, ai_tools_adoption: 78, avg_income_k: 67 }
  ];

  const virtualProductionStudios = [
    { studio: 'Industrial Light & Magic (ILM)', led_volumes: 12, ai_integration: 94, cost_reduction: 45, projects_2026: 34 },
    { studio: 'WETA Digital', led_volumes: 8, ai_integration: 91, cost_reduction: 38, projects_2026: 28 },
    { studio: 'Pixomondo', led_volumes: 15, ai_integration: 87, cost_reduction: 52, projects_2026: 45 },
    { studio: 'Luma Pictures', led_volumes: 6, ai_integration: 89, cost_reduction: 41, projects_2026: 23 },
    { studio: 'DNEG', led_volumes: 11, ai_integration: 92, cost_reduction: 47, projects_2026: 38 },
    { studio: 'MPC', led_volumes: 9, ai_integration: 88, cost_reduction: 43, projects_2026: 31 }
  ];

  const mediaMetrics = {
    global_media_entertainment_t: 3.8,
    immersive_entertainment_b: 185.7,
    ai_content_creation_b: 23.4,
    metaverse_entertainment_b: 267.8,
    vr_ar_market_b: 26.9,
    global_streaming_subscribers_b: 2.1,
    creator_economy_revenue_b: 67.8,
    ai_content_cost_reduction: 56.7,
    virtual_production_adoption: 67.4,
    immersive_user_satisfaction: 85.3,
    metaverse_daily_users_m: 156.7,
    ai_personalization_accuracy: 94.2,
    content_creation_speed_improvement: 78.9,
    digital_experience_venues: 3400
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AI_CONTENT_CREATION': return 'text-purple-400';
      case 'IMMERSIVE_XR_EXPANSION': return 'text-orange-400';
      case 'METAVERSE_ACTIVATION': return 'text-cyan-400';
      case 'STREAMING_EVOLUTION': return 'text-blue-400';
      case 'VIRTUAL_PRODUCTION_SCALING': return 'text-green-400';
      default: return 'text-white';
    }
  };

  const getPlatformColor = (platform) => {
    const colors = {
      'Netflix': 'text-red-400',
      'Disney+': 'text-blue-400',
      'Amazon Prime Video': 'text-orange-400',
      'HBO Max/Discovery+': 'text-purple-400',
      'YouTube Premium': 'text-green-400',
      'Apple TV+': 'text-gray-400',
      'Paramount+': 'text-cyan-400'
    };
    return colors[platform] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-red-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-red-400 mb-2">🎬🤖 MEDIA & ENTERTAINMENT AI INTELLIGENCE CENTER</h1>
            <p className="text-red-300">2026 Digital Entertainment Revolution | AI Content Creation | Immersive XR | Metaverse | Streaming | Virtual Production</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(mediaPhase)}`}>{mediaPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Media & Entertainment Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-2">💰 MEDIA MARKET</h3>
          <div className="text-2xl text-cyan-400">${mediaMetrics.global_media_entertainment_t}T</div>
          <div className="text-sm text-gray-400">Global M&E Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🎮 IMMERSIVE</h3>
          <div className="text-2xl text-orange-400">${mediaMetrics.immersive_entertainment_b}B</div>
          <div className="text-sm text-gray-400">Immersive Entertainment</div>
        </div>
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">🌐 METAVERSE</h3>
          <div className="text-2xl text-green-400">${mediaMetrics.metaverse_entertainment_b}B</div>
          <div className="text-sm text-gray-400">Metaverse Entertainment</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">📺 STREAMING</h3>
          <div className="text-2xl text-yellow-400">{mediaMetrics.global_streaming_subscribers_b}B</div>
          <div className="text-sm text-gray-400">Global Subscribers</div>
        </div>
      </div>

      {/* Main Media & Entertainment Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Media & Entertainment Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🎬 MEDIA & ENTERTAINMENT SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mediaSegments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="segment" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'market_b' ? 'B' : '%'}`, name]}
              />
              <Bar dataKey="market_b" fill="#06b6d4" name="Market Size ($B)" />
              <Bar dataKey="growth_rate" fill="#22c55e" name="Growth Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Media Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 MEDIA TECHNOLOGY EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={mediaMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_media_t" fill="#22c55e" name="Total Media ($T)" />
              <Line type="monotone" dataKey="immersive_b" stroke="#0ea5e9" strokeWidth={3} name="Immersive ($B)" />
              <Line type="monotone" dataKey="ai_content_b" stroke="#8b5cf6" strokeWidth={2} name="AI Content ($B)" />
              <Line type="monotone" dataKey="metaverse_b" stroke="#f59e0b" strokeWidth={2} name="Metaverse ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Content Applications & Streaming Platforms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🤖 AI CONTENT CREATION APPLICATIONS</h2>
          <div className="space-y-3">
            {aiContentApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{app.application}</span>
                  <span className={getStatusColor(app.effectiveness)}>{app.effectiveness}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Deployment</div>
                    <div className="text-cyan-400">{app.deployment_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-green-400">{app.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Quality Score</div>
                    <div className="text-purple-400">{app.quality_score}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">📺 LEADING STREAMING PLATFORMS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={streamingPlatforms}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="subscribers_m" tick={{ fill: '#fff' }} name="Subscribers (M)" />
              <YAxis dataKey="revenue_b" tick={{ fill: '#fff' }} name="Revenue ($B)" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'subscribers_m' ? 'M' : 'B'}`, name]}
                labelFormatter={(label) => `Platform: ${streamingPlatforms.find(item => item.subscribers_m === label)?.platform || ''}`}
              />
              <Scatter dataKey="ai_features" fill="#8b5cf6" name="AI Features Score" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Immersive Experiences & Creator Economy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🥽 IMMERSIVE ENTERTAINMENT EXPERIENCES</h2>
          <div className="space-y-3">
            {immersiveExperiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{exp.experience}</span>
                  <span className="text-green-400">{exp.satisfaction}% Satisfaction</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Users</div>
                    <div className="text-cyan-400">{exp.users_m}M</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Avg Hours</div>
                    <div className="text-yellow-400">{exp.engagement_hours_avg}h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Revenue/User</div>
                    <div className="text-purple-400">${exp.revenue_per_user}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">💰 CREATOR ECONOMY PLATFORMS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={creatorEconomyMetrics}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="platform" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="creators_m" stackId="1" stroke="#ef4444" fill="#ef444433" name="Creators (M)" />
              <Line type="monotone" dataKey="ai_tools_adoption" stroke="#22c55e" strokeWidth={3} name="AI Tools Adoption %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Media Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🎥 VIRTUAL PRODUCTION</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Studio Adoption</span>
              <span className="text-green-400">{mediaMetrics.virtual_production_adoption}%</span>
            </div>
            <div className="flex justify-between">
              <span>Cost Reduction</span>
              <span className="text-cyan-400">{mediaMetrics.ai_content_cost_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>Content Speed Improvement</span>
              <span className="text-yellow-400">{mediaMetrics.content_creation_speed_improvement}%</span>
            </div>
            <div className="flex justify-between">
              <span>Digital Experience Venues</span>
              <span className="text-purple-400">{mediaMetrics.digital_experience_venues}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🌐 METAVERSE & XR</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>VR/AR Market</span>
              <span className="text-green-400">${mediaMetrics.vr_ar_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Daily Metaverse Users</span>
              <span className="text-cyan-400">{mediaMetrics.metaverse_daily_users_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>User Satisfaction</span>
              <span className="text-yellow-400">{mediaMetrics.immersive_user_satisfaction}%</span>
            </div>
            <div className="flex justify-between">
              <span>XR Growth Rate</span>
              <span className="text-purple-400">31.7%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">🎯 AI PERSONALIZATION</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Recommendation Accuracy</span>
              <span className="text-green-400">{mediaMetrics.ai_personalization_accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span>Creator Economy Revenue</span>
              <span className="text-cyan-400">${mediaMetrics.creator_economy_revenue_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>AI Content Creation</span>
              <span className="text-yellow-400">${mediaMetrics.ai_content_creation_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Streaming Subscribers</span>
              <span className="text-purple-400">{mediaMetrics.global_streaming_subscribers_b}B</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 MEDIA & ENTERTAINMENT AI INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-red-400 mb-2">${mediaMetrics.global_media_entertainment_t}T</div>
            <div className="text-gray-400">Global Media Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">${mediaMetrics.immersive_entertainment_b}B</div>
            <div className="text-gray-400">Immersive Entertainment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">${mediaMetrics.metaverse_entertainment_b}B</div>
            <div className="text-gray-400">Metaverse Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{mediaMetrics.ai_personalization_accuracy}%</div>
            <div className="text-gray-400">AI Accuracy</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-red-500 text-center text-gray-400">
        <p>🎬 2026 Media & Entertainment Command Center | AI Content Creation | Immersive XR | Metaverse | Streaming | Virtual Production | Creator Economy</p>
        <p className="text-red-400">Research Sources: Forbes, EY Insights, Deloitte Media, Fortune Business Insights, Mordor Intelligence, Allied Market Research</p>
      </div>
    </div>
  );
};

export default MediaEntertainmentAIIntelligenceCenter;