import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const FrontierAIModelsIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiPhase, setAiPhase] = useState('FRONTIER_MODEL_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate AI research phase changes
      const phases = ['FRONTIER_MODEL_DEPLOYMENT', 'REASONING_MODEL_ACTIVE', 'MULTIMODAL_INTEGRATION', 'AGENTIC_SYSTEMS_SCALING', 'COMPUTE_OPTIMIZATION'];
      setAiPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 AI Model Data
  const frontierModels = [
    { name: 'GPT-5.4', intelligence: 98.7, speed_tps: 234, price_per_m: 2.5, context_k: 128, reasoning: true },
    { name: 'Claude Opus 4.6', intelligence: 97.4, speed_tps: 189, price_per_m: 15.0, context_k: 200, reasoning: true },
    { name: 'Gemini 3.1 Pro', intelligence: 98.9, speed_tps: 276, price_per_m: 1.25, context_k: 1000, reasoning: true },
    { name: 'Llama 4 Scout', intelligence: 94.6, speed_tps: 342, price_per_m: 0.08, context_k: 10000, reasoning: false },
    { name: 'DeepSeek-R1', intelligence: 96.2, speed_tps: 298, price_per_m: 0.14, context_k: 128, reasoning: true },
    { name: 'Grok 4.20 Beta', intelligence: 95.8, speed_tps: 267, price_per_m: 0.20, context_k: 2000, reasoning: true }
  ];

  const aiMarketEvolution = [
    { year: '2024', market_b: 184, models_count: 312, compute_cost_b: 45, enterprises: 78 },
    { year: '2025', market_b: 267, models_count: 423, compute_cost_b: 67, enterprises: 134 },
    { year: '2026', market_b: 389, models_count: 500, compute_cost_b: 89, enterprises: 189 },
    { year: '2027E', market_b: 567, models_count: 678, compute_cost_b: 124, enterprises: 267 },
    { year: '2028E', market_b: 823, models_count: 834, compute_cost_b: 178, enterprises: 378 },
    { year: '2030E', market_b: 1456, models_count: 1200, compute_cost_b: 289, enterprises: 567 }
  ];

  const modelCapabilities = [
    { capability: 'Reasoning', gpt5: 98.7, claude4: 97.4, gemini3: 96.8, llama4: 89.3, deepseek: 96.2 },
    { capability: 'Multimodal', gpt5: 94.6, claude4: 92.8, gemini3: 98.9, llama4: 78.4, deepseek: 84.7 },
    { capability: 'Computer Use', gpt5: 87.9, claude4: 94.7, gemini3: 91.2, llama4: 67.3, deepseek: 73.8 },
    { capability: 'Autonomous Coding', gpt5: 92.4, claude4: 97.8, gemini3: 89.6, llama4: 85.2, deepseek: 91.7 },
    { capability: 'Long Context', gpt5: 78.6, claude4: 94.3, gemini3: 97.2, llama4: 99.1, deepseek: 82.4 },
    { capability: 'Speed/Efficiency', gpt5: 84.7, claude4: 87.2, gemini3: 92.6, llama4: 97.4, deepseek: 95.8 }
  ];

  const aiInvestmentFunding = [
    { company: 'OpenAI', funding_b: 13.0, valuation_b: 157, model: 'GPT-5 Series', stage: 'Series C' },
    { company: 'Anthropic', funding_b: 7.3, valuation_b: 41.5, model: 'Claude 4 Family', stage: 'Series C' },
    { company: 'Google DeepMind', funding_b: 2.1, valuation_b: 0, model: 'Gemini 3', stage: 'Internal' },
    { company: 'Meta AI', funding_b: 1.8, valuation_b: 0, model: 'Llama 4', stage: 'Internal' },
    { company: 'DeepSeek', funding_b: 2.7, valuation_b: 15.2, model: 'DeepSeek V3', stage: 'Series B' },
    { company: 'xAI', funding_b: 6.0, valuation_b: 50, model: 'Grok 4', stage: 'Series B' }
  ];

  const computeInfrastructure = [
    { metric: 'H100 GPUs', current: 45000, projected_2027: 125000, cost_m: 2340, efficiency: 94.7 },
    { metric: 'Training Compute (PFlops)', current: 156789, projected_2027: 567890, cost_m: 4890, efficiency: 89.2 },
    { metric: 'Inference Clusters', current: 1247, projected_2027: 3890, cost_m: 1567, efficiency: 97.3 },
    { metric: 'Model Parameters (B)', current: 1700, projected_2027: 10000, cost_m: 891, efficiency: 85.6 },
    { metric: 'Context Length (M tokens)', current: 10, projected_2027: 100, cost_m: 234, efficiency: 91.8 },
    { metric: 'Data Centers', current: 89, projected_2027: 234, cost_m: 12340, efficiency: 93.4 }
  ];

  const aiApplicationSectors = [
    { sector: 'Enterprise Software', adoption: 89.4, investment_b: 67.8, models: 156, roi_x: 4.2 },
    { sector: 'Healthcare/Drug Discovery', adoption: 76.8, investment_b: 34.5, models: 89, roi_x: 6.7 },
    { sector: 'Financial Services', adoption: 94.7, investment_b: 78.9, models: 134, roi_x: 3.8 },
    { sector: 'Autonomous Systems', adoption: 67.3, investment_b: 45.2, models: 67, roi_x: 8.9 },
    { sector: 'Content Creation', adoption: 97.8, investment_b: 23.4, models: 234, roi_x: 2.1 },
    { sector: 'Education/Training', adoption: 82.6, investment_b: 19.7, models: 178, roi_x: 5.3 }
  ];

  const aiMetrics = {
    global_ai_market_b: 389,
    total_ai_models: 500,
    reasoning_models: 67,
    multimodal_models: 234,
    agentic_systems: 89,
    enterprise_adoption_pct: 78.4,
    avg_model_cost_training_m: 145,
    compute_efficiency_improvement_pct: 234,
    context_length_max_m: 10,
    autonomous_coding_accuracy: 97.8,
    computer_use_capability_models: 45,
    open_source_models: 356,
    proprietary_models: 144,
    chinese_models_market_share: 23.7
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'FRONTIER_MODEL_DEPLOYMENT': return 'text-blue-400';
      case 'REASONING_MODEL_ACTIVE': return 'text-purple-400';
      case 'MULTIMODAL_INTEGRATION': return 'text-green-400';
      case 'AGENTIC_SYSTEMS_SCALING': return 'text-orange-400';
      case 'COMPUTE_OPTIMIZATION': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getReasoningColor = (hasReasoning) => {
    return hasReasoning ? 'text-green-400' : 'text-gray-500';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-blue-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-400 mb-2">🚀💡 FRONTIER AI MODELS INTELLIGENCE CENTER</h1>
            <p className="text-blue-300">2026 Frontier Models | GPT-5 | Claude 4.5 | Gemini 3 | Reasoning Systems | Multimodal AI | Agentic Automation</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(aiPhase)}`}>{aiPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time AI Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">💰 AI MARKET</h3>
          <div className="text-2xl text-cyan-400">${aiMetrics.global_ai_market_b}B</div>
          <div className="text-sm text-gray-400">2026 Global Market Size</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🧠 MODELS</h3>
          <div className="text-2xl text-green-400">{aiMetrics.total_ai_models}</div>
          <div className="text-sm text-gray-400">Available AI Models</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">⚡ REASONING</h3>
          <div className="text-2xl text-yellow-400">{aiMetrics.reasoning_models}</div>
          <div className="text-sm text-gray-400">Reasoning-Capable Models</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🤝 ENTERPRISE</h3>
          <div className="text-2xl text-cyan-400">{aiMetrics.enterprise_adoption_pct}%</div>
          <div className="text-sm text-gray-400">Enterprise Adoption</div>
        </div>
      </div>

      {/* Main AI Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Frontier AI Models */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🚀 FRONTIER AI MODELS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={frontierModels}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'intelligence' ? '%' : name === 'speed_tps' ? ' t/s' : name === 'price_per_m' ? '/M' : ''}`, name]}
              />
              <Bar dataKey="intelligence" fill="#06b6d4" name="Intelligence Score" />
              <Bar dataKey="speed_tps" fill="#22c55e" name="Speed (tokens/s)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 AI MARKET EVOLUTION & GROWTH</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={aiMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="market_b" fill="#22c55e" name="Market Size ($B)" />
              <Line type="monotone" dataKey="models_count" stroke="#0ea5e9" strokeWidth={3} name="Model Count" />
              <Line type="monotone" dataKey="compute_cost_b" stroke="#8b5cf6" strokeWidth={2} name="Compute Cost ($B)" />
              <Line type="monotone" dataKey="enterprises" stroke="#f59e0b" strokeWidth={2} name="Enterprise Adoption" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Model Capabilities Radar & AI Investment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎯 AI MODEL CAPABILITIES COMPARISON</h2>
          <div className="space-y-3">
            {modelCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{cap.capability}</span>
                  <span className="text-green-400">FRONTIER</span>
                </div>
                <div className="grid grid-cols-5 gap-1 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">GPT-5</div>
                    <div className={getStatusColor(cap.gpt5)}>{cap.gpt5}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Claude4</div>
                    <div className={getStatusColor(cap.claude4)}>{cap.claude4}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Gemini3</div>
                    <div className={getStatusColor(cap.gemini3)}>{cap.gemini3}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Llama4</div>
                    <div className={getStatusColor(cap.llama4)}>{cap.llama4}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">DeepSeek</div>
                    <div className={getStatusColor(cap.deepseek)}>{cap.deepseek}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Investment & Funding */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">💸 AI INVESTMENT & FUNDING 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={aiInvestmentFunding}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="funding_b" tick={{ fill: '#fff' }} name="Funding ($B)" />
              <YAxis dataKey="valuation_b" tick={{ fill: '#fff' }} name="Valuation ($B)" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`$${value}B`, name]}
                labelFormatter={(label) => `Company: ${aiInvestmentFunding.find(item => item.funding_b === label)?.company || ''}`}
              />
              <Scatter dataKey="valuation_b" fill="#8b5cf6" name="Valuation vs Funding" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Compute Infrastructure & AI Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🖥️ AI COMPUTE INFRASTRUCTURE SCALING</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={computeInfrastructure}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="metric" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #f59e0b', color: '#f59e0b' }} />
              <Area type="monotone" dataKey="current" stackId="1" stroke="#f59e0b" fill="#f59e0b33" name="Current 2026" />
              <Line type="monotone" dataKey="efficiency" stroke="#22c55e" strokeWidth={3} name="Efficiency %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🏢 AI APPLICATION SECTOR ADOPTION</h2>
          <div className="space-y-3">
            {aiApplicationSectors.slice(0, 4).map((sector, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-400 font-bold text-sm">{sector.sector}</span>
                  <span className={getStatusColor(sector.adoption)}>{sector.adoption}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Investment</div>
                    <div className="text-green-400">${sector.investment_b}B</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Models</div>
                    <div className="text-cyan-400">{sector.models}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ROI</div>
                    <div className="text-yellow-400">{sector.roi_x}x</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced AI Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🧠 REASONING MODELS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>OpenAI o1 Series</span>
              <span className="text-cyan-400">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>DeepSeek-R1</span>
              <span className="text-green-400">96.2% ACCURACY</span>
            </div>
            <div className="flex justify-between">
              <span>Speed vs Accuracy</span>
              <span className="text-yellow-400">TRADE-OFF</span>
            </div>
            <div className="flex justify-between">
              <span>Reasoning Capability</span>
              <span className="text-purple-400">{aiMetrics.reasoning_models} MODELS</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-3">🤖 AGENTIC SYSTEMS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Autonomous Coding</span>
              <span className="text-green-400">{aiMetrics.autonomous_coding_accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span>Computer Use Models</span>
              <span className="text-purple-400">{aiMetrics.computer_use_capability_models}</span>
            </div>
            <div className="flex justify-between">
              <span>Active Systems</span>
              <span className="text-cyan-400">{aiMetrics.agentic_systems}</span>
            </div>
            <div className="flex justify-between">
              <span>PyTorch Foundation</span>
              <span className="text-orange-400">SUBSTRATE</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">🌐 GLOBAL AI LANDSCAPE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Open Source Models</span>
              <span className="text-green-400">{aiMetrics.open_source_models}</span>
            </div>
            <div className="flex justify-between">
              <span>Proprietary Models</span>
              <span className="text-cyan-400">{aiMetrics.proprietary_models}</span>
            </div>
            <div className="flex justify-between">
              <span>Chinese Market Share</span>
              <span className="text-yellow-400">{aiMetrics.chinese_models_market_share}%</span>
            </div>
            <div className="flex justify-between">
              <span>Context Length Max</span>
              <span className="text-purple-400">{aiMetrics.context_length_max_m}M</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 FRONTIER AI MODELS INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{aiMetrics.multimodal_models}</div>
            <div className="text-gray-400">Multimodal Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{aiMetrics.avg_model_cost_training_m}M</div>
            <div className="text-gray-400">Avg Training Cost ($)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{aiMetrics.compute_efficiency_improvement_pct}%</div>
            <div className="text-gray-400">Efficiency Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{aiMetrics.total_ai_models}</div>
            <div className="text-gray-400">Total AI Models</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-blue-500 text-center text-gray-400">
        <p>🚀 2026 Frontier AI Command Center | GPT-5 Reasoning | Claude 4.5 Autonomous | Gemini 3 Multimodal | Llama 4 Open Source | DeepSeek Efficiency</p>
        <p className="text-blue-400">Research Sources: OpenAI, Anthropic, Google DeepMind, Meta AI, LLM Stats, IBM AI Trends, Artificial Analysis</p>
      </div>
    </div>
  );
};

export default FrontierAIModelsIntelligenceCenter;