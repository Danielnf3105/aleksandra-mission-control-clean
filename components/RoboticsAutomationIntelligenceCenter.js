import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const RoboticsAutomationIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [roboticsPhase, setRoboticsPhase] = useState('HUMANOID_PRODUCTION_SCALING');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate robotics development phase changes
      const phases = ['HUMANOID_PRODUCTION_SCALING', 'EMBODIED_AI_INTEGRATION', 'INDUSTRIAL_DEPLOYMENT', 'HOME_ROBOTICS_LAUNCH', 'AGI_ROBOT_DEVELOPMENT'];
      setRoboticsPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Robotics & Automation Data
  const humanoidRobotCompanies = [
    { name: 'Tesla Optimus', funding_m: 2000, valuation_b: 850, robots_produced: 1200, stage: 'Gen 3 Development', embodied_ai: true },
    { name: 'Figure AI', funding_m: 854, valuation_b: 39, robots_produced: 450, stage: 'Series B', embodied_ai: true },
    { name: 'Apptronik Apollo', funding_m: 935, valuation_b: 5, robots_produced: 780, stage: 'Series A-X', embodied_ai: true },
    { name: 'Agility Robotics', funding_m: 400, valuation_b: 2.8, robots_produced: 890, stage: 'Series C', embodied_ai: false },
    { name: '1X Technologies', funding_m: 137, valuation_b: 1.2, robots_produced: 234, stage: 'Series B', embodied_ai: true },
    { name: 'Boston Dynamics', funding_m: 150, valuation_b: 11.5, robots_produced: 340, stage: 'Production Ready', embodied_ai: false }
  ];

  const roboticsMarketEvolution = [
    { year: '2024', market_b: 2.03, humanoids: 1200, funding_b: 1.8, automation_rate: 34 },
    { year: '2025', market_b: 4.7, humanoids: 3400, funding_b: 4.2, automation_rate: 47 },
    { year: '2026', market_b: 7.8, humanoids: 8900, funding_b: 6.8, automation_rate: 62 },
    { year: '2027E', market_b: 10.5, humanoids: 18000, funding_b: 9.4, automation_rate: 74 },
    { year: '2028E', market_b: 13.2, humanoids: 34000, funding_b: 12.7, automation_rate: 83 },
    { year: '2030E', market_b: 18.9, humanoids: 67000, funding_b: 18.3, automation_rate: 91 }
  ];

  const robotCapabilities = [
    { capability: 'Locomotion', tesla: 89.4, figure: 94.7, apptronik: 87.2, agility: 96.8, onex: 78.4, boston: 98.9 },
    { capability: 'Manipulation', tesla: 92.6, figure: 89.3, apptronik: 94.8, agility: 91.7, onex: 84.2, boston: 95.4 },
    { capability: 'Computer Vision', tesla: 97.8, figure: 94.2, apptronik: 91.6, agility: 87.9, onex: 93.7, boston: 92.3 },
    { capability: 'Natural Language', tesla: 94.7, figure: 96.8, apptronik: 89.4, agility: 82.6, onex: 97.2, boston: 76.8 },
    { capability: 'Task Planning', tesla: 91.3, figure: 93.8, apptronik: 88.7, agility: 94.2, onex: 89.6, boston: 87.4 },
    { capability: 'Safety Systems', tesla: 87.9, figure: 91.2, apptronik: 96.4, agility: 93.7, onex: 85.8, boston: 98.1 }
  ];

  const roboticsApplicationSectors = [
    { sector: 'Manufacturing', adoption: 78.4, investment_b: 2.8, robots: 3400, roi_improvement: 45.2 },
    { sector: 'Logistics/Warehousing', adoption: 67.3, investment_b: 1.9, robots: 2100, roi_improvement: 38.7 },
    { sector: 'Healthcare', adoption: 34.8, investment_b: 0.8, robots: 450, roi_improvement: 62.4 },
    { sector: 'Construction', adoption: 23.7, investment_b: 0.6, robots: 290, roi_improvement: 28.9 },
    { sector: 'Home/Personal', adoption: 12.4, investment_b: 0.4, robots: 180, roi_improvement: 89.3 },
    { sector: 'Agriculture', adoption: 45.6, investment_b: 0.7, robots: 670, roi_improvement: 52.8 }
  ];

  const embodiedAIBenchmarks = [
    { benchmark: 'RT-X Task Success', tesla: 87.4, figure: 92.6, apptronik: 84.8, onex: 89.7, average: 88.6 },
    { benchmark: 'CLIP Object Recognition', tesla: 96.2, figure: 94.8, apptronik: 91.3, onex: 95.7, average: 94.5 },
    { benchmark: 'VLA Navigation', tesla: 89.7, figure: 88.2, apptronik: 86.4, onex: 92.1, average: 89.1 },
    { benchmark: 'Dexterity Score', tesla: 78.9, figure: 82.4, apptronik: 89.7, onex: 76.3, average: 81.8 },
    { benchmark: 'Human Interaction', tesla: 84.6, figure: 91.8, apptronik: 87.2, onex: 94.3, average: 89.5 },
    { benchmark: 'Learning Efficiency', tesla: 93.8, figure: 89.4, apptronik: 92.6, onex: 88.7, average: 91.1 }
  ];

  const roboticsInvestmentData = [
    { company: 'Tesla (Internal)', investment_m: 2000, stage: 'R&D', focus: 'Mass Production', timeline: 'Q4 2026' },
    { company: 'Apptronik', investment_m: 935, stage: 'Series A-X', focus: 'Apollo Scaling', timeline: 'Q2 2026' },
    { company: 'Figure AI', investment_m: 854, stage: 'Series B', focus: 'Commercial Deploy', timeline: 'Q3 2026' },
    { company: 'Agility Robotics', investment_m: 400, stage: 'Series C', focus: 'Digit Manufacturing', timeline: 'Q1 2026' },
    { company: 'Boston Dynamics', investment_m: 150, stage: 'Production', focus: 'Atlas Commercial', timeline: 'Q2 2026' },
    { company: '1X Technologies', investment_m: 137, stage: 'Series B', focus: 'NEO Home Robot', timeline: 'Q4 2026' }
  ];

  const roboticsMetrics = {
    global_robotics_market_b: 7.8,
    total_humanoid_robots: 8900,
    embodied_ai_models: 45,
    total_funding_2026_b: 6.8,
    industrial_automation_rate: 62.3,
    home_robot_deployments: 2400,
    avg_robot_cost_k: 89,
    labor_cost_savings_pct: 34.7,
    robot_accuracy_improvement: 156,
    safety_incident_reduction: 78.9,
    production_efficiency_gain: 45.2,
    robot_learning_speed_improvement: 234,
    human_robot_collaboration_score: 89.4,
    ai_foundation_models: 23
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'HUMANOID_PRODUCTION_SCALING': return 'text-blue-400';
      case 'EMBODIED_AI_INTEGRATION': return 'text-purple-400';
      case 'INDUSTRIAL_DEPLOYMENT': return 'text-orange-400';
      case 'HOME_ROBOTICS_LAUNCH': return 'text-green-400';
      case 'AGI_ROBOT_DEVELOPMENT': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getEmbodiedAIColor = (hasEmbodiedAI) => {
    return hasEmbodiedAI ? 'text-green-400' : 'text-orange-400';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-orange-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-orange-400 mb-2">🤖⚙️ ROBOTICS & AUTOMATION INTELLIGENCE CENTER</h1>
            <p className="text-orange-300">2026 Humanoid Robots | Tesla Optimus | Boston Dynamics | Embodied AI | Industrial Automation | AGI Integration</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(roboticsPhase)}`}>{roboticsPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Robotics Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">💰 MARKET SIZE</h3>
          <div className="text-2xl text-cyan-400">${roboticsMetrics.global_robotics_market_b}B</div>
          <div className="text-sm text-gray-400">2026 Robotics Market</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🤖 HUMANOIDS</h3>
          <div className="text-2xl text-green-400">{(roboticsMetrics.total_humanoid_robots / 1000).toFixed(1)}K</div>
          <div className="text-sm text-gray-400">Active Humanoid Robots</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🧠 EMBODIED AI</h3>
          <div className="text-2xl text-yellow-400">{roboticsMetrics.embodied_ai_models}</div>
          <div className="text-sm text-gray-400">AI Foundation Models</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">⚙️ AUTOMATION</h3>
          <div className="text-2xl text-cyan-400">{roboticsMetrics.industrial_automation_rate}%</div>
          <div className="text-sm text-gray-400">Industrial Automation Rate</div>
        </div>
      </div>

      {/* Main Robotics Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Leading Humanoid Robot Companies */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏆 LEADING HUMANOID ROBOT COMPANIES</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={humanoidRobotCompanies}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'funding_m' ? 'M' : name === 'valuation_b' ? 'B' : ''}`, name]}
              />
              <Bar dataKey="robots_produced" fill="#06b6d4" name="Robots Produced" />
              <Bar dataKey="valuation_b" fill="#22c55e" name="Valuation ($B)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Robotics Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 ROBOTICS MARKET EVOLUTION & GROWTH</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={roboticsMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="market_b" fill="#22c55e" name="Market Size ($B)" />
              <Line type="monotone" dataKey="humanoids" stroke="#0ea5e9" strokeWidth={3} name="Humanoid Count" />
              <Line type="monotone" dataKey="funding_b" stroke="#8b5cf6" strokeWidth={2} name="Funding ($B)" />
              <Line type="monotone" dataKey="automation_rate" stroke="#f59e0b" strokeWidth={2} name="Automation Rate %" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Robot Capabilities & Application Sectors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚡ HUMANOID ROBOT CAPABILITIES COMPARISON</h2>
          <div className="space-y-3">
            {robotCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{cap.capability}</span>
                  <span className="text-green-400">2026 SCORES</span>
                </div>
                <div className="grid grid-cols-6 gap-1 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">Tesla</div>
                    <div className={getStatusColor(cap.tesla)}>{cap.tesla}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Figure</div>
                    <div className={getStatusColor(cap.figure)}>{cap.figure}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Apptrnk</div>
                    <div className={getStatusColor(cap.apptronik)}>{cap.apptronik}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Agility</div>
                    <div className={getStatusColor(cap.agility)}>{cap.agility}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">1X</div>
                    <div className={getStatusColor(cap.onex)}>{cap.onex}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Boston</div>
                    <div className={getStatusColor(cap.boston)}>{cap.boston}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Sector Adoption */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🏭 ROBOTICS APPLICATION SECTOR ADOPTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={roboticsApplicationSectors}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="adoption" tick={{ fill: '#fff' }} name="Adoption %" />
              <YAxis dataKey="roi_improvement" tick={{ fill: '#fff' }} name="ROI Improvement %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}%`, name]}
                labelFormatter={(label) => `Sector: ${roboticsApplicationSectors.find(item => item.adoption === label)?.sector || ''}`}
              />
              <Scatter dataKey="investment_b" fill="#8b5cf6" name="Investment ($B)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Embodied AI Benchmarks & Investment Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🧠 EMBODIED AI BENCHMARK PERFORMANCE</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={embodiedAIBenchmarks}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="benchmark" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #0ea5e9', color: '#0ea5e9' }} />
              <Area type="monotone" dataKey="tesla" stackId="1" stroke="#ef4444" fill="#ef444433" name="Tesla Optimus" />
              <Area type="monotone" dataKey="figure" stackId="2" stroke="#22c55e" fill="#22c55e33" name="Figure AI" />
              <Area type="monotone" dataKey="apptronik" stackId="3" stroke="#8b5cf6" fill="#8b5cf633" name="Apptronik" />
              <Line type="monotone" dataKey="average" stroke="#f59e0b" strokeWidth={3} name="Industry Average" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">💸 MAJOR ROBOTICS INVESTMENT TIMELINE</h2>
          <div className="space-y-3">
            {roboticsInvestmentData.slice(0, 4).map((investment, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-400 font-bold text-sm">{investment.company}</span>
                  <span className="text-green-400">${investment.investment_m}M</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Stage</div>
                    <div className="text-white">{investment.stage}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Focus</div>
                    <div className="text-cyan-400">{investment.focus}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Timeline</div>
                    <div className="text-yellow-400">{investment.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Robotics Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🚀 TESLA OPTIMUS GEN 3</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Embodied AGI Goal</span>
              <span className="text-cyan-400">2026 TARGET</span>
            </div>
            <div className="flex justify-between">
              <span>Fremont Factory Scale</span>
              <span className="text-green-400">LARGE PRODUCTION</span>
            </div>
            <div className="flex justify-between">
              <span>Gen 3 Reveal</span>
              <span className="text-yellow-400">Q4 2026</span>
            </div>
            <div className="flex justify-between">
              <span>AI Integration</span>
              <span className="text-purple-400">FULL STACK</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-3">🏠 1X NEO HOME ROBOTS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Home Delivery</span>
              <span className="text-green-400">Q4 2026</span>
            </div>
            <div className="flex justify-between">
              <span>OpenAI-Style Intelligence</span>
              <span className="text-purple-400">INTEGRATED</span>
            </div>
            <div className="flex justify-between">
              <span>Units Delivered</span>
              <span className="text-cyan-400">{roboticsMetrics.home_robot_deployments}</span>
            </div>
            <div className="flex justify-between">
              <span>Consumer Market</span>
              <span className="text-orange-400">EMERGING</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">📊 INDUSTRY METRICS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Labor Cost Savings</span>
              <span className="text-green-400">{roboticsMetrics.labor_cost_savings_pct}%</span>
            </div>
            <div className="flex justify-between">
              <span>Accuracy Improvement</span>
              <span className="text-cyan-400">{roboticsMetrics.robot_accuracy_improvement}%</span>
            </div>
            <div className="flex justify-between">
              <span>Safety Incidents Down</span>
              <span className="text-green-400">{roboticsMetrics.safety_incident_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>Learning Speed Up</span>
              <span className="text-purple-400">{roboticsMetrics.robot_learning_speed_improvement}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 ROBOTICS & AUTOMATION INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">${roboticsMetrics.total_funding_2026_b}B</div>
            <div className="text-gray-400">Total 2026 Funding</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{roboticsMetrics.ai_foundation_models}</div>
            <div className="text-gray-400">AI Foundation Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{roboticsMetrics.production_efficiency_gain}%</div>
            <div className="text-gray-400">Production Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{roboticsMetrics.human_robot_collaboration_score}%</div>
            <div className="text-gray-400">Human-Robot Collaboration</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-orange-500 text-center text-gray-400">
        <p>🤖 2026 Robotics Command Center | Tesla Optimus | Boston Dynamics Atlas | Embodied AI | Industrial Automation | AGI Integration</p>
        <p className="text-orange-400">Research Sources: Tesla, Apptronik, Figure AI, Agility Robotics, 1X Technologies, Boston Dynamics, Humanoid Robotics Technology</p>
      </div>
    </div>
  );
};

export default RoboticsAutomationIntelligenceCenter;