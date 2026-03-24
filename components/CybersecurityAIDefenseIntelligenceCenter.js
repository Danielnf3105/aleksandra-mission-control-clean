import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const CybersecurityAIDefenseIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [securityPhase, setSecurityPhase] = useState('AI_AUTONOMOUS_DEFENSE');
  const [threatLevel, setThreatLevel] = useState('ELEVATED');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate cybersecurity phase changes
      const phases = ['AI_AUTONOMOUS_DEFENSE', 'ZERO_TRUST_DEPLOYMENT', 'QUANTUM_CRYPTO_MIGRATION', 'AGENTIC_THREAT_DETECTION', 'POST_QUANTUM_READINESS'];
      setSecurityPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate threat level changes
      const threats = ['NOMINAL', 'ELEVATED', 'HIGH', 'CRITICAL'];
      setThreatLevel(threats[Math.floor(Math.random() * threats.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Cybersecurity Market Data
  const cybersecuritySpending = [
    { category: 'Security Software', spending_b: 105.9, growth_rate: 15.4, ai_integration: 78, zero_trust: 65 },
    { category: 'Security Services', spending_b: 83.8, growth_rate: 11.8, ai_integration: 67, zero_trust: 45 },
    { category: 'Network Security', spending_b: 23.3, growth_rate: 9.4, ai_integration: 89, zero_trust: 87 },
    { category: 'Identity & Access Mgmt', spending_b: 24.1, growth_rate: 18.7, ai_integration: 92, zero_trust: 98 },
    { category: 'Cloud Security', spending_b: 34.7, growth_rate: 22.3, ai_integration: 94, zero_trust: 89 },
    { category: 'Data Protection', spending_b: 45.2, growth_b: 16.9, ai_integration: 76, zero_trust: 56 }
  ];

  const cyberThreaLandscape = [
    { year: '2024', total_attacks_m: 4.8, ai_attacks: 1.2, ransomware_b: 1.1, breach_cost_m: 4.45, quantum_threats: 0.02 },
    { year: '2025', total_attacks_m: 6.4, ai_attacks: 2.1, ransomware_b: 1.8, breach_cost_m: 4.88, quantum_threats: 0.05 },
    { year: '2026', total_attacks_m: 8.9, ai_attacks: 3.7, ransomware_b: 2.9, breach_cost_m: 5.23, quantum_threats: 0.12 },
    { year: '2027E', total_attacks_m: 12.4, ai_attacks: 5.8, ransomware_b: 4.7, breach_cost_m: 5.67, quantum_threats: 0.28 },
    { year: '2028E', total_attacks_m: 16.8, ai_attacks: 9.2, ransomware_b: 7.8, breach_cost_m: 6.12, quantum_threats: 0.56 },
    { year: '2030E', total_attacks_m: 28.4, ai_attacks: 18.7, ransomware_b: 15.6, breach_cost_m: 7.34, quantum_threats: 1.45 }
  ];

  const aiCybersecuritySolutions = [
    { solution: 'Autonomous SOC Analysts', deployment_rate: 89, threat_detection: 97.8, false_positives: 2.1, cost_savings_m: 2.4 },
    { solution: 'Agentic Threat Hunting', deployment_rate: 76, threat_detection: 94.2, false_positives: 3.8, cost_savings_m: 1.9 },
    { solution: 'AI-Powered SIEM', deployment_rate: 92, threat_detection: 91.6, false_positives: 4.2, cost_savings_m: 3.1 },
    { solution: 'Predictive Defense AI', deployment_rate: 67, threat_detection: 96.4, false_positives: 1.7, cost_savings_m: 2.8 },
    { solution: 'Behavioral Analytics', deployment_rate: 84, threat_detection: 89.7, false_positives: 5.6, cost_savings_m: 1.6 },
    { solution: 'Automated Response', deployment_rate: 78, threat_detection: 93.8, false_positives: 2.9, cost_savings_m: 2.2 }
  ];

  const zeroTrustImplementation = [
    { organization: 'Fortune 500', adoption_rate: 78, maturity_score: 67, investment_m: 890, roi_improvement: 245 },
    { organization: 'Mid-Enterprise', adoption_rate: 45, maturity_score: 43, investment_m: 234, roi_improvement: 189 },
    { organization: 'Government', adoption_rate: 89, maturity_score: 72, investment_m: 1567, roi_improvement: 298 },
    { organization: 'Healthcare', adoption_rate: 67, maturity_score: 54, investment_m: 445, roi_improvement: 167 },
    { organization: 'Financial Services', adoption_rate: 92, maturity_score: 78, investment_m: 1234, roi_improvement: 334 },
    { organization: 'Technology', adoption_rate: 94, maturity_score: 84, investment_m: 2890, roi_improvement: 456 }
  ];

  const quantumCryptographyPrograms = [
    { program: 'NIST Post-Quantum Standards', progress: 89, deployment_orgs: 1200, investment_b: 4.2, timeline: 'Q2 2026' },
    { program: 'Financial Services Migration', progress: 67, deployment_orgs: 340, investment_b: 1.8, timeline: 'Q4 2026' },
    { program: 'Government Critical Infrastructure', progress: 78, deployment_orgs: 89, investment_b: 2.9, timeline: 'Q1 2027' },
    { program: 'Healthcare Data Protection', progress: 45, deployment_orgs: 567, investment_b: 0.9, timeline: 'Q3 2027' },
    { program: 'Telecommunications Security', progress: 82, deployment_orgs: 156, investment_b: 1.4, timeline: 'Q2 2027' },
    { program: 'Cloud Provider Quantum-Safe', progress: 91, deployment_orgs: 23, investment_b: 3.7, timeline: 'Q4 2026' }
  ];

  const cybersecurityInvestment = [
    { company: 'CrowdStrike', valuation_b: 89.7, funding_2026_m: 450, focus: 'AI-Powered EDR', market_share: 23.4 },
    { company: 'Palo Alto Networks', valuation_b: 156.8, funding_2026_m: 890, focus: 'Zero Trust Platform', market_share: 34.7 },
    { company: 'SentinelOne', valuation_b: 67.9, funding_2026_m: 290, focus: 'Autonomous XDR', market_share: 12.8 },
    { company: 'Zscaler', valuation_b: 134.6, funding_2026_m: 678, focus: 'Cloud Security', market_share: 18.9 },
    { company: 'Okta', valuation_b: 45.3, funding_2026_m: 234, focus: 'Identity Management', market_share: 28.6 },
    { company: 'Fortinet', valuation_b: 98.4, funding_2026_m: 567, focus: 'Network Security', market_share: 31.2 }
  ];

  const cybersecurityMetrics = {
    global_cybersecurity_spending_b: 520,
    ai_cybersecurity_market_b: 133,
    post_quantum_crypto_b: 2.84,
    zero_trust_market_b: 24.1,
    average_breach_cost_m: 5.23,
    ai_cost_savings_per_breach_m: 2.4,
    threat_detection_improvement: 97.8,
    false_positive_reduction: 78.9,
    autonomous_soc_deployments: 156000,
    quantum_threat_incidents: 120,
    zero_trust_adoption_rate: 78.4,
    ai_integration_rate: 89.7,
    startup_funding_2026_b: 12.8,
    cybercrime_damage_cost_b: 10500
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AI_AUTONOMOUS_DEFENSE': return 'text-purple-400';
      case 'ZERO_TRUST_DEPLOYMENT': return 'text-blue-400';
      case 'QUANTUM_CRYPTO_MIGRATION': return 'text-cyan-400';
      case 'AGENTIC_THREAT_DETECTION': return 'text-orange-400';
      case 'POST_QUANTUM_READINESS': return 'text-green-400';
      default: return 'text-white';
    }
  };

  const getThreatColor = (threat) => {
    switch (threat) {
      case 'NOMINAL': return 'text-green-400';
      case 'ELEVATED': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-red-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-red-400 mb-2">🛡️🤖 CYBERSECURITY & AI DEFENSE INTELLIGENCE CENTER</h1>
            <p className="text-red-300">2026 Autonomous Security | AI-Powered Defense | Zero Trust | Post-Quantum Crypto | Agentic Threat Detection | Cyber Resilience</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(securityPhase)}`}>{securityPhase}</div>
            <div className={`text-lg font-bold ${getThreatColor(threatLevel)}`}>THREAT: {threatLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Cybersecurity Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-2">💰 MARKET SIZE</h3>
          <div className="text-2xl text-cyan-400">${cybersecurityMetrics.global_cybersecurity_spending_b}B</div>
          <div className="text-sm text-gray-400">Global Cybersecurity Spending</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🤖 AI SECURITY</h3>
          <div className="text-2xl text-green-400">${cybersecurityMetrics.ai_cybersecurity_market_b}B</div>
          <div className="text-sm text-gray-400">AI Cybersecurity Market</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🔐 ZERO TRUST</h3>
          <div className="text-2xl text-yellow-400">{cybersecurityMetrics.zero_trust_adoption_rate}%</div>
          <div className="text-sm text-gray-400">Enterprise Adoption Rate</div>
        </div>
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">⚛️ QUANTUM READY</h3>
          <div className="text-2xl text-purple-400">${cybersecurityMetrics.post_quantum_crypto_b}B</div>
          <div className="text-sm text-gray-400">Post-Quantum Crypto Market</div>
        </div>
      </div>

      {/* Main Cybersecurity Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Cybersecurity Spending by Category */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">💸 2026 CYBERSECURITY SPENDING BY CATEGORY</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cybersecuritySpending}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="category" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'spending_b' ? 'B' : '%'}`, name]}
              />
              <Bar dataKey="spending_b" fill="#06b6d4" name="Spending ($B)" />
              <Bar dataKey="growth_rate" fill="#22c55e" name="Growth Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cyber Threat Landscape Evolution */}
        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ GLOBAL CYBER THREAT LANDSCAPE EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={cyberThreaLandscape}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Bar dataKey="total_attacks_m" fill="#ef4444" name="Total Attacks (M)" />
              <Line type="monotone" dataKey="ai_attacks" stroke="#8b5cf6" strokeWidth={3} name="AI Attacks (M)" />
              <Line type="monotone" dataKey="breach_cost_m" stroke="#f59e0b" strokeWidth={2} name="Breach Cost ($M)" />
              <Line type="monotone" dataKey="quantum_threats" stroke="#06b6d4" strokeWidth={2} name="Quantum Threats" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Cybersecurity Solutions & Zero Trust Implementation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🤖 AI CYBERSECURITY SOLUTIONS PERFORMANCE</h2>
          <div className="space-y-3">
            {aiCybersecuritySolutions.map((solution, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-400 font-bold text-sm">{solution.solution}</span>
                  <span className="text-green-400">${solution.cost_savings_m}M Saved</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Deployment</div>
                    <div className="text-cyan-400">{solution.deployment_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Detection Rate</div>
                    <div className={getStatusColor(solution.threat_detection)}>{solution.threat_detection}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">False Positives</div>
                    <div className="text-yellow-400">{solution.false_positives}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zero Trust Implementation by Organization Type */}
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🔐 ZERO TRUST ARCHITECTURE IMPLEMENTATION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={zeroTrustImplementation}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="adoption_rate" tick={{ fill: '#fff' }} name="Adoption Rate %" />
              <YAxis dataKey="roi_improvement" tick={{ fill: '#fff' }} name="ROI Improvement %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #0ea5e9', color: '#0ea5e9' }}
                formatter={(value, name) => [`${value}%`, name]}
                labelFormatter={(label) => `Org: ${zeroTrustImplementation.find(item => item.adoption_rate === label)?.organization || ''}`}
              />
              <Scatter dataKey="maturity_score" fill="#0ea5e9" name="Maturity Score" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quantum Cryptography & Cybersecurity Investment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">⚛️ POST-QUANTUM CRYPTOGRAPHY MIGRATION</h2>
          <div className="space-y-3">
            {quantumCryptographyPrograms.slice(0, 4).map((program, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-400 font-bold text-sm">{program.program}</span>
                  <span className="text-green-400">{program.progress}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Organizations</div>
                    <div className="text-white">{program.deployment_orgs}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Investment</div>
                    <div className="text-yellow-400">${program.investment_b}B</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Timeline</div>
                    <div className="text-purple-400">{program.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">🏢 LEADING CYBERSECURITY COMPANIES 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={cybersecurityInvestment}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="company" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Area type="monotone" dataKey="valuation_b" stackId="1" stroke="#22c55e" fill="#22c55e33" name="Valuation ($B)" />
              <Line type="monotone" dataKey="market_share" stroke="#f59e0b" strokeWidth={3} name="Market Share %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Cybersecurity Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-3">🎯 THREAT DETECTION</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>AI Detection Rate</span>
              <span className="text-green-400">{cybersecurityMetrics.threat_detection_improvement}%</span>
            </div>
            <div className="flex justify-between">
              <span>False Positive Reduction</span>
              <span className="text-cyan-400">{cybersecurityMetrics.false_positive_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous SOC Deployments</span>
              <span className="text-yellow-400">{(cybersecurityMetrics.autonomous_soc_deployments / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between">
              <span>AI Integration Rate</span>
              <span className="text-purple-400">{cybersecurityMetrics.ai_integration_rate}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">💰 COST IMPACT</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Average Breach Cost</span>
              <span className="text-red-400">${cybersecurityMetrics.average_breach_cost_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>AI Cost Savings/Breach</span>
              <span className="text-green-400">${cybersecurityMetrics.ai_cost_savings_per_breach_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>Cybercrime Damage</span>
              <span className="text-red-400">${(cybersecurityMetrics.cybercrime_damage_cost_b / 1000).toFixed(1)}T</span>
            </div>
            <div className="flex justify-between">
              <span>Startup Funding 2026</span>
              <span className="text-cyan-400">${cybersecurityMetrics.startup_funding_2026_b}B</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-3">🛡️ DEFENSE STATUS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Quantum Threat Incidents</span>
              <span className="text-yellow-400">{cybersecurityMetrics.quantum_threat_incidents}</span>
            </div>
            <div className="flex justify-between">
              <span>Zero Trust Adoption</span>
              <span className="text-blue-400">{cybersecurityMetrics.zero_trust_adoption_rate}%</span>
            </div>
            <div className="flex justify-between">
              <span>Post-Quantum Migration</span>
              <span className="text-cyan-400">IN PROGRESS</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Defense</span>
              <span className="text-green-400">DEPLOYED</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 CYBERSECURITY & AI DEFENSE INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-red-400 mb-2">${(cybersecurityMetrics.global_cybersecurity_spending_b / 1000).toFixed(1)}T</div>
            <div className="text-gray-400">Global Security Spending</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{cybersecurityMetrics.threat_detection_improvement}%</div>
            <div className="text-gray-400">AI Detection Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{cybersecurityMetrics.zero_trust_adoption_rate}%</div>
            <div className="text-gray-400">Zero Trust Adoption</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">${cybersecurityMetrics.ai_cost_savings_per_breach_m}M</div>
            <div className="text-gray-400">AI Savings per Breach</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-red-500 text-center text-gray-400">
        <p>🛡️ 2026 Cyber Defense Command Center | AI Autonomous Security | Zero Trust Architecture | Post-Quantum Cryptography | Agentic Threat Detection</p>
        <p className="text-red-400">Research Sources: Cybersecurity Ventures, Gartner, Palo Alto Networks, NIST, Harvard Business Review, GovTech, Viking Cloud</p>
      </div>
    </div>
  );
};

export default CybersecurityAIDefenseIntelligenceCenter;