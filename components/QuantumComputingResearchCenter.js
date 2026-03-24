import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const QuantumComputingResearchCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quantumPhase, setQuantumPhase] = useState('QUANTUM_ADVANTAGE_TARGET');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate quantum research phase changes
      const phases = ['QUANTUM_ADVANTAGE_TARGET', 'ERROR_CORRECTION_ACTIVE', 'FAULT_TOLERANT_DEVELOPMENT', 'COMMERCIAL_SCALING', 'NEUTRAL_ATOM_BREAKTHROUGH'];
      setQuantumPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Quantum Computing Data
  const quantumLeaders = [
    { name: 'IBM Quantum', qubits: 4158, funding_m: 500, tech: 'Superconducting', fidelity: 96.8, roadmap_2026: 'Advantage' },
    { name: 'Google Quantum AI', qubits: 105, funding_m: 450, tech: 'Willow Chip', fidelity: 99.1, roadmap_2026: 'Error Correction' },
    { name: 'Atom Computing', qubits: 10000, funding_m: 189, tech: 'Neutral Atoms', fidelity: 94.7, roadmap_2026: 'Scaling' },
    { name: 'Microsoft Azure Quantum', qubits: 120, funding_m: 340, tech: 'Majorana', fidelity: 97.4, roadmap_2026: 'Topological' },
    { name: 'Quantinuum', qubits: 56, funding_m: 300, tech: 'Trapped Ion', fidelity: 98.2, roadmap_2026: 'Commercial' },
    { name: 'PsiQuantum', qubits: 40, funding_m: 625, tech: 'Photonic', fidelity: 92.3, roadmap_2026: 'Million Qubit' }
  ];

  const quantumMarketEvolution = [
    { year: '2024', market_b: 1.2, qubits_max: 1000, companies: 67, commercial_apps: 12, error_correction: 23 },
    { year: '2025', market_b: 1.6, qubits_max: 4158, companies: 89, commercial_apps: 34, error_correction: 47 },
    { year: '2026', market_b: 2.0, qubits_max: 10000, companies: 134, commercial_apps: 67, error_correction: 89 },
    { year: '2027E', market_b: 2.8, qubits_max: 15000, companies: 178, commercial_apps: 124, error_correction: 156 },
    { year: '2028E', market_b: 4.1, qubits_max: 25000, companies: 234, commercial_apps: 198, error_correction: 267 },
    { year: '2030E', market_b: 8.7, qubits_max: 100000, companies: 423, commercial_apps: 567, error_correction: 678 }
  ];

  const quantumTechnologies = [
    { tech: 'Superconducting', market_share: 34.7, error_rate: 0.1, scalability: 89.4, companies: 23 },
    { tech: 'Neutral Atoms', market_share: 18.9, error_rate: 0.05, scalability: 97.2, companies: 12 },
    { tech: 'Trapped Ions', market_share: 23.4, error_rate: 0.02, scalability: 78.6, companies: 18 },
    { tech: 'Photonic', market_share: 12.8, error_rate: 0.001, scalability: 94.8, companies: 8 },
    { tech: 'Topological', market_share: 6.7, error_rate: 0.0001, scalability: 92.7, companies: 4 },
    { tech: 'Silicon Quantum', market_share: 3.5, error_rate: 0.2, scalability: 85.3, companies: 7 }
  ];

  const quantumApplications = [
    { sector: 'Drug Discovery', investment_m: 234, quantum_advantage: 89.4, timeline: '2026', companies: 23 },
    { sector: 'Financial Modeling', investment_m: 189, quantum_advantage: 76.8, timeline: '2027', companies: 18 },
    { sector: 'Cryptography', investment_m: 167, quantum_advantage: 94.7, timeline: '2026', companies: 15 },
    { sector: 'Materials Science', investment_m: 145, quantum_advantage: 82.6, timeline: '2027', companies: 12 },
    { sector: 'Optimization', investment_m: 123, quantum_advantage: 91.3, timeline: '2026', companies: 28 },
    { sector: 'Machine Learning', investment_m: 198, quantum_advantage: 87.9, timeline: '2028', companies: 34 }
  ];

  const errorCorrectionProgress = [
    { quarter: 'Q1 2026', logical_qubits: 12, physical_qubits: 1200, error_rate: 0.01, success_rate: 94.7 },
    { quarter: 'Q2 2026', logical_qubits: 18, physical_qubits: 1800, error_rate: 0.008, success_rate: 96.2 },
    { quarter: 'Q3 2026', logical_qubits: 24, physical_qubits: 2400, error_rate: 0.006, success_rate: 97.8 },
    { quarter: 'Q4 2026', logical_qubits: 32, physical_qubits: 3200, error_rate: 0.004, success_rate: 98.3 },
    { quarter: 'Q1 2027', logical_qubits: 48, physical_qubits: 4800, error_rate: 0.003, success_rate: 98.9 },
    { quarter: 'Q2 2027', logical_qubits: 64, physical_qubits: 6400, error_rate: 0.002, success_rate: 99.2 }
  ];

  const quantumFundingRounds = [
    { company: 'PsiQuantum', funding_m: 625, stage: 'Series D', tech: 'Photonic', valuation_b: 3.15 },
    { company: 'IBM Ventures Portfolio', funding_m: 500, stage: 'Investment Fund', tech: 'Multi-Platform', valuation_b: 2.78 },
    { company: 'Microsoft Partnership', funding_m: 450, stage: 'Strategic Investment', tech: 'Cloud Integration', valuation_b: 2.34 },
    { company: 'Quantinuum', funding_m: 300, stage: 'Series C', tech: 'Trapped Ion', valuation_b: 1.89 },
    { company: 'Atom Computing', funding_m: 189, stage: 'Series B', tech: 'Neutral Atoms', valuation_b: 0.95 },
    { company: 'IonQ', funding_m: 167, stage: 'Public Trading', tech: 'Trapped Ion', valuation_b: 1.23 }
  ];

  const quantumMetrics = {
    global_market_size_b: 2.0,
    total_quantum_companies: 134,
    max_qubits_achieved: 10000,
    quantum_advantage_target: 2026,
    fault_tolerance_target: 2029,
    average_funding_round_m: 28.6,
    commercial_applications: 67,
    error_correction_systems: 89,
    logical_qubits_2026: 32,
    quantum_gates_ibm_2026: 7500,
    neutral_atom_scaling: 1000000, // million qubits roadmap
    photonic_qubits_target: 1000000,
    topological_qubits_demo: 12,
    market_growth_rate: 31.6
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'QUANTUM_ADVANTAGE_TARGET': return 'text-blue-400';
      case 'ERROR_CORRECTION_ACTIVE': return 'text-purple-400';
      case 'FAULT_TOLERANT_DEVELOPMENT': return 'text-green-400';
      case 'COMMERCIAL_SCALING': return 'text-orange-400';
      case 'NEUTRAL_ATOM_BREAKTHROUGH': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getRoadmapColor = (roadmap) => {
    switch (roadmap) {
      case 'Advantage': return 'text-green-400';
      case 'Error Correction': return 'text-blue-400';
      case 'Scaling': return 'text-purple-400';
      case 'Topological': return 'text-cyan-400';
      case 'Commercial': return 'text-orange-400';
      case 'Million Qubit': return 'text-yellow-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-purple-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-purple-400 mb-2">⚛️🖥️ QUANTUM COMPUTING RESEARCH & DEVELOPMENT CENTER</h1>
            <p className="text-purple-300">2026 Quantum Advantage | Error Correction | IBM/Google/Microsoft | Neutral Atoms | Fault-Tolerant Systems</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(quantumPhase)}`}>{quantumPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Quantum Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">💰 MARKET SIZE</h3>
          <div className="text-2xl text-cyan-400">${quantumMetrics.global_market_size_b}B</div>
          <div className="text-sm text-gray-400">2026 Quantum Economy</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">⚛️ MAX QUBITS</h3>
          <div className="text-2xl text-green-400">{(quantumMetrics.max_qubits_achieved / 1000).toFixed(0)}K</div>
          <div className="text-sm text-gray-400">Atom Computing Record</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🎯 ADVANTAGE YEAR</h3>
          <div className="text-2xl text-yellow-400">{quantumMetrics.quantum_advantage_target}</div>
          <div className="text-sm text-gray-400">IBM Target Milestone</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🏢 COMPANIES</h3>
          <div className="text-2xl text-cyan-400">{quantumMetrics.total_quantum_companies}</div>
          <div className="text-sm text-gray-400">Global Quantum Firms</div>
        </div>
      </div>

      {/* Main Quantum Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Quantum Technology Leaders */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏆 QUANTUM COMPUTING LEADERS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={quantumLeaders}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'funding_m' ? 'M' : name === 'fidelity' ? '%' : ''}`, name]}
              />
              <Bar dataKey="qubits" fill="#06b6d4" name="Qubits" />
              <Bar dataKey="fidelity" fill="#22c55e" name="Fidelity %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quantum Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 QUANTUM MARKET EVOLUTION & SCALING</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={quantumMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="market_b" fill="#22c55e" name="Market Size ($B)" />
              <Line type="monotone" dataKey="qubits_max" stroke="#0ea5e9" strokeWidth={3} name="Max Qubits" />
              <Line type="monotone" dataKey="commercial_apps" stroke="#8b5cf6" strokeWidth={2} name="Commercial Apps" />
              <Line type="monotone" dataKey="error_correction" stroke="#f59e0b" strokeWidth={2} name="Error Correction Systems" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quantum Technologies & Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚡ QUANTUM TECHNOLOGY PLATFORMS</h2>
          <div className="space-y-3">
            {quantumTechnologies.map((tech, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{tech.tech}</span>
                  <span className="text-cyan-400">{tech.market_share}% SHARE</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Error Rate</div>
                    <div className="text-white">{tech.error_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Scalability</div>
                    <div className={getStatusColor(tech.scalability)}>{tech.scalability}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Companies</div>
                    <div className="text-green-400">{tech.companies}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Applications by Sector */}
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🎯 QUANTUM COMMERCIAL APPLICATIONS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={quantumApplications}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="investment_m" tick={{ fill: '#fff' }} name="Investment ($M)" />
              <YAxis dataKey="quantum_advantage" tick={{ fill: '#fff' }} name="Quantum Advantage %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #f59e0b', color: '#f59e0b' }}
                formatter={(value, name) => [`${value}${name === 'investment_m' ? 'M' : '%'}`, name]}
              />
              <Scatter dataKey="companies" fill="#f59e0b" name="Companies Count" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Error Correction Progress & Funding Rounds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🛡️ QUANTUM ERROR CORRECTION PROGRESS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={errorCorrectionProgress}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="quarter" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #0ea5e9', color: '#0ea5e9' }} />
              <Area type="monotone" dataKey="logical_qubits" stackId="1" stroke="#0ea5e9" fill="#0ea5e933" name="Logical Qubits" />
              <Area type="monotone" dataKey="physical_qubits" stackId="2" stroke="#22c55e" fill="#22c55e33" name="Physical Qubits (÷100)" transform="(value) => value / 100" />
              <Line type="monotone" dataKey="success_rate" stroke="#8b5cf6" strokeWidth={3} name="Success Rate %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">💸 MAJOR QUANTUM FUNDING ROUNDS 2026</h2>
          <div className="space-y-3">
            {quantumFundingRounds.slice(0, 4).map((round, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-400 font-bold text-sm">{round.company}</span>
                  <span className="text-green-400">${round.funding_m}M</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Stage</div>
                    <div className="text-white">{round.stage}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Technology</div>
                    <div className="text-cyan-400">{round.tech}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Valuation</div>
                    <div className="text-yellow-400">${round.valuation_b}B</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Quantum Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🎯 IBM ROADMAP 2026</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Quantum Gates</span>
              <span className="text-cyan-400">{(quantumMetrics.quantum_gates_ibm_2026 / 1000).toFixed(1)}K</span>
            </div>
            <div className="flex justify-between">
              <span>Advantage Target</span>
              <span className="text-green-400">END 2026</span>
            </div>
            <div className="flex justify-between">
              <span>Fault Tolerance</span>
              <span className="text-yellow-400">2029 TARGET</span>
            </div>
            <div className="flex justify-between">
              <span>Kookaburra System</span>
              <span className="text-purple-400">4,158 QUBITS</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-3">⚛️ NEUTRAL ATOM BREAKTHROUGH</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Atom Computing Scale</span>
              <span className="text-green-400">10K QUBITS</span>
            </div>
            <div className="flex justify-between">
              <span>Million-Qubit Roadmap</span>
              <span className="text-purple-400">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>Microsoft Partnership</span>
              <span className="text-cyan-400">ERROR CORRECTED</span>
            </div>
            <div className="flex justify-between">
              <span>DARPA Program</span>
              <span className="text-orange-400">UTILITY SCALE</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">🚀 MARKET DYNAMICS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Growth Rate (CAGR)</span>
              <span className="text-green-400">{quantumMetrics.market_growth_rate}%</span>
            </div>
            <div className="flex justify-between">
              <span>Avg. Funding Round</span>
              <span className="text-cyan-400">${quantumMetrics.average_funding_round_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>Commercial Apps</span>
              <span className="text-yellow-400">{quantumMetrics.commercial_applications}</span>
            </div>
            <div className="flex justify-between">
              <span>Logical Qubits (2026)</span>
              <span className="text-purple-400">{quantumMetrics.logical_qubits_2026}</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 QUANTUM COMPUTING INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{quantumMetrics.error_correction_systems}</div>
            <div className="text-gray-400">Error Correction Systems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{quantumMetrics.photonic_qubits_target / 1000000}M</div>
            <div className="text-gray-400">Photonic Qubit Target</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{quantumMetrics.topological_qubits_demo}</div>
            <div className="text-gray-400">Topological Qubits Demo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{quantumMetrics.fault_tolerance_target}</div>
            <div className="text-gray-400">Fault Tolerance Target</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-purple-500 text-center text-gray-400">
        <p>⚛️ 2026 Quantum Computing Command Center | IBM Quantum Advantage | Google Willow | Microsoft Azure | Neutral Atoms | Error Correction</p>
        <p className="text-purple-400">Research Sources: IBM Quantum, Google Quantum AI, The Quantum Insider, IEEE Spectrum, Forbes Quantum Computing, SpinQ Technologies</p>
      </div>
    </div>
  );
};

export default QuantumComputingResearchCenter;