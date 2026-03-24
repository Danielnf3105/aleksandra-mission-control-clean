import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const BiotechnologyMedicalIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [biotechPhase, setBiotechPhase] = useState('CRISPR_CLINICAL_TRIALS');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate biotech research phase changes
      const phases = ['CRISPR_CLINICAL_TRIALS', 'AI_DRUG_DISCOVERY', 'PRECISION_MEDICINE_ACTIVE', 'SYNTHETIC_BIOLOGY_LAB', 'GENE_THERAPY_DEPLOYMENT'];
      setBiotechPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Biotechnology Data
  const leadingBiotechCompanies = [
    { name: 'Beam Therapeutics', funding_m: 222, pipeline: 8, tech: 'Base Editing', precision: 97.4, trials: 5 },
    { name: 'Editas Medicine', funding_m: 210, pipeline: 12, tech: 'CRISPR-Cas9', precision: 94.6, trials: 7 },
    { name: 'Prime Medicine', funding_m: 189, pipeline: 6, tech: 'Prime Editing', precision: 98.7, trials: 3 },
    { name: 'Intellia Therapeutics', funding_m: 167, pipeline: 9, tech: 'In Vivo CRISPR', precision: 96.2, trials: 6 },
    { name: 'CRISPR Therapeutics', funding_m: 234, pipeline: 14, tech: 'Multi-Platform', precision: 95.8, trials: 9 },
    { name: 'Sana Biotechnology', funding_m: 178, pipeline: 7, tech: 'Cell Engineering', precision: 93.9, trials: 4 }
  ];

  const crisprMarketData = [
    { time: '2024', market_size: 4.04, trials: 89, precision: 89.4, companies: 247, ai_integration: 72 },
    { time: '2025', market_size: 4.46, trials: 134, precision: 92.7, companies: 289, ai_integration: 78 },
    { time: '2026', market_size: 5.47, trials: 187, precision: 95.8, companies: 334, ai_integration: 84 },
    { time: '2027E', market_size: 6.73, trials: 256, precision: 97.2, companies: 378, ai_integration: 89 },
    { time: '2028E', market_size: 8.21, trials: 342, precision: 98.4, companies: 423, ai_integration: 93 },
    { time: '2030E', market_size: 12.45, trials: 567, precision: 99.1, companies: 567, ai_integration: 97 }
  ];

  const precisionMedicineTargets = [
    { disease: 'Sickle Cell Disease', patients: 100000, trials: 23, success_rate: 94.7, crispr_ready: true },
    { disease: 'Beta Thalassemia', patients: 280000, trials: 18, success_rate: 91.3, crispr_ready: true },
    { disease: 'Duchenne MD', patients: 300000, trials: 12, success_rate: 78.6, crispr_ready: false },
    { disease: 'Huntington Disease', patients: 41000, trials: 8, success_rate: 67.4, crispr_ready: false },
    { disease: 'Leber Amaurosis', patients: 20000, trials: 6, success_rate: 89.2, crispr_ready: true },
    { disease: 'AATD-1 (Lung)', patients: 174000, trials: 4, success_rate: 82.7, crispr_ready: false }
  ];

  const aiDrugDiscoveryPipeline = [
    { company: 'DeepMind AlphaFold', discoveries: 247, success_rate: 96.8, time_reduction: 87.4, cost_savings: 340 },
    { company: 'Atomwise AI', discoveries: 189, success_rate: 94.2, time_reduction: 82.6, cost_savings: 267 },
    { company: 'Recursion Pharma', discoveries: 134, success_rate: 91.7, time_reduction: 78.9, cost_savings: 198 },
    { company: 'Exscientia AI', discoveries: 167, success_rate: 93.4, time_reduction: 84.2, cost_savings: 234 },
    { company: 'BenevolentAI', discoveries: 98, success_rate: 89.6, time_reduction: 76.3, cost_savings: 145 },
    { company: 'Insilico Medicine', discoveries: 156, success_rate: 92.8, time_reduction: 81.7, cost_savings: 189 }
  ];

  const geneEditingTechnologies = [
    { hour: 0, crispr_cas9: 94.6, prime_editing: 98.7, base_editing: 97.4, epigenome_editing: 89.2 },
    { hour: 4, crispr_cas9: 95.2, prime_editing: 98.9, base_editing: 97.8, epigenome_editing: 91.4 },
    { hour: 8, crispr_cas9: 93.8, prime_editing: 98.3, base_editing: 96.9, epigenome_editing: 88.7 },
    { hour: 12, crispr_cas9: 96.1, prime_editing: 99.1, base_editing: 98.2, epigenome_editing: 92.6 },
    { hour: 16, crispr_cas9: 94.9, prime_editing: 98.6, base_editing: 97.6, epigenome_editing: 90.3 },
    { hour: 20, crispr_cas9: 95.7, prime_editing: 98.8, base_editing: 98.1, epigenome_editing: 91.9 }
  ];

  const syntheticBiologyApplications = [
    { sector: 'Therapeutics', market_b: 4.7, growth_rate: 18.4, companies: 156, breakthroughs: 89 },
    { sector: 'Agriculture', market_b: 3.2, growth_rate: 15.7, companies: 134, breakthroughs: 67 },
    { sector: 'Materials', market_b: 2.1, growth_rate: 22.6, companies: 78, breakthroughs: 45 },
    { sector: 'Energy', market_b: 1.8, growth_rate: 19.3, companies: 89, breakthroughs: 52 },
    { sector: 'Chemicals', market_b: 5.3, growth_rate: 16.8, companies: 198, breakthroughs: 134 },
    { sector: 'Environment', market_b: 1.4, growth_rate: 24.7, companies: 67, breakthroughs: 38 }
  ];

  const biotechMetrics = {
    crispr_market_size_b: 5.47,
    total_clinical_trials: 187,
    ai_drug_discoveries: 991,
    prime_editing_precision: 98.7,
    gene_therapy_approvals: 23,
    synthetic_biology_market_b: 18.5,
    precision_medicine_patients: 915000,
    biotech_funding_b: 47.8,
    crispr_companies_global: 334,
    off_target_rate: 0.1,
    ai_success_acceleration: 87.4,
    regenerative_medicine_trials: 89,
    cell_therapy_manufacturing: 67,
    bioengineering_breakthroughs: 425
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'CRISPR_CLINICAL_TRIALS': return 'text-blue-400';
      case 'AI_DRUG_DISCOVERY': return 'text-purple-400';
      case 'PRECISION_MEDICINE_ACTIVE': return 'text-green-400';
      case 'SYNTHETIC_BIOLOGY_LAB': return 'text-orange-400';
      case 'GENE_THERAPY_DEPLOYMENT': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getCrisprReadyColor = (ready) => {
    return ready ? 'text-green-400' : 'text-orange-400';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-green-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-2">🧬💊 BIOTECHNOLOGY & MEDICAL INTELLIGENCE CENTER</h1>
            <p className="text-green-300">2026 CRISPR Gene Editing | AI Drug Discovery | Precision Medicine | Synthetic Biology | Cell & Gene Therapy</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(biotechPhase)}`}>{biotechPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Biotech Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🧬 CRISPR MARKET</h3>
          <div className="text-2xl text-cyan-400">${biotechMetrics.crispr_market_size_b}B</div>
          <div className="text-sm text-gray-400">2026 Market Size</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🤖 AI DISCOVERIES</h3>
          <div className="text-2xl text-green-400">{biotechMetrics.ai_drug_discoveries}</div>
          <div className="text-sm text-gray-400">AI-Driven Drug Candidates</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🎯 PRIME EDITING</h3>
          <div className="text-2xl text-yellow-400">{biotechMetrics.prime_editing_precision}%</div>
          <div className="text-sm text-gray-400">Precision Accuracy</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🧪 CLINICAL TRIALS</h3>
          <div className="text-2xl text-cyan-400">{biotechMetrics.total_clinical_trials}</div>
          <div className="text-sm text-gray-400">Active CRISPR Trials</div>
        </div>
      </div>

      {/* Main Biotech Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Leading Biotech Companies */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏢 LEADING BIOTECH COMPANIES 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leadingBiotechCompanies}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'funding_m' || name === 'pipeline' || name === 'trials' ? '' : '%'}`, name]}
              />
              <Bar dataKey="funding_m" fill="#06b6d4" name="Funding ($M)" />
              <Bar dataKey="precision" fill="#22c55e" name="Precision %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* CRISPR Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 CRISPR MARKET EVOLUTION & AI INTEGRATION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={crisprMarketData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="time" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="market_size" fill="#22c55e" name="Market Size ($B)" />
              <Line type="monotone" dataKey="precision" stroke="#0ea5e9" strokeWidth={3} name="Precision %" />
              <Line type="monotone" dataKey="ai_integration" stroke="#8b5cf6" strokeWidth={2} name="AI Integration %" />
              <Line type="monotone" dataKey="trials" stroke="#f59e0b" strokeWidth={2} name="Clinical Trials" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Precision Medicine Targets & AI Drug Discovery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎯 PRECISION MEDICINE TARGET DISEASES</h2>
          <div className="space-y-3">
            {precisionMedicineTargets.map((disease, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{disease.disease}</span>
                  <span className={getCrisprReadyColor(disease.crispr_ready)}>
                    {disease.crispr_ready ? 'CRISPR READY' : 'IN DEVELOPMENT'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Patients</div>
                    <div className="text-white">{(disease.patients / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Trials</div>
                    <div className="text-cyan-400">{disease.trials}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Success Rate</div>
                    <div className={getStatusColor(disease.success_rate)}>{disease.success_rate}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Drug Discovery Pipeline */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🤖 AI-POWERED DRUG DISCOVERY PIPELINE</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={aiDrugDiscoveryPipeline}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="discoveries" tick={{ fill: '#fff' }} name="Discoveries" />
              <YAxis dataKey="success_rate" tick={{ fill: '#fff' }} name="Success Rate %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name.includes('rate') || name.includes('reduction') ? '%' : ''}`, name]}
              />
              <Scatter dataKey="time_reduction" fill="#8b5cf6" name="Time Reduction %" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gene Editing Technologies & Synthetic Biology */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">⚡ GENE EDITING TECHNOLOGY PERFORMANCE</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={geneEditingTechnologies}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #0ea5e9', color: '#0ea5e9' }} />
              <Area type="monotone" dataKey="crispr_cas9" stackId="1" stroke="#0ea5e9" fill="#0ea5e933" name="CRISPR-Cas9" />
              <Area type="monotone" dataKey="base_editing" stackId="2" stroke="#22c55e" fill="#22c55e33" name="Base Editing" />
              <Area type="monotone" dataKey="epigenome_editing" stackId="3" stroke="#f59e0b" fill="#f59e0b33" name="Epigenome Editing" />
              <Line type="monotone" dataKey="prime_editing" stroke="#ef4444" strokeWidth={3} name="Prime Editing (Highest)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🧪 SYNTHETIC BIOLOGY APPLICATIONS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={syntheticBiologyApplications}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="sector" tick={{ fill: '#fff', fontSize: 10 }} angle={-45} textAnchor="end" height={60} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #f59e0b', color: '#f59e0b' }}
                formatter={(value, name) => [`${value}${name === 'market_b' ? 'B' : name === 'growth_rate' ? '%' : ''}`, name]}
              />
              <Bar dataKey="market_b" fill="#f59e0b" name="Market Size ($B)" />
              <Bar dataKey="breakthroughs" fill="#22c55e" name="Breakthroughs" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Biotechnology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">💰 BIOTECH FUNDING 2026</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Investment</span>
              <span className="text-green-400">${biotechMetrics.biotech_funding_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>CRISPR Companies</span>
              <span className="text-cyan-400">{biotechMetrics.crispr_companies_global}</span>
            </div>
            <div className="flex justify-between">
              <span>Gene Therapy Approvals</span>
              <span className="text-yellow-400">{biotechMetrics.gene_therapy_approvals}</span>
            </div>
            <div className="flex justify-between">
              <span>Off-Target Rate</span>
              <span className="text-green-400">{biotechMetrics.off_target_rate}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-3">🎯 PRIME MEDICINE 2026</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>AATD-1 Trial Launch</span>
              <span className="text-cyan-400">Q2 2026</span>
            </div>
            <div className="flex justify-between">
              <span>Precision vs CRISPR</span>
              <span className="text-green-400">10x HIGHER</span>
            </div>
            <div className="flex justify-between">
              <span>Off-Target Rate</span>
              <span className="text-green-400">&lt;0.1%</span>
            </div>
            <div className="flex justify-between">
              <span>Organoid Success</span>
              <span className="text-purple-400">98.7%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-3">🌍 GLOBAL EXPANSION</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Asia-Pacific CAGR</span>
              <span className="text-green-400">15.4%</span>
            </div>
            <div className="flex justify-between">
              <span>Patient Population</span>
              <span className="text-yellow-400">{(biotechMetrics.precision_medicine_patients / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between">
              <span>AI Acceleration</span>
              <span className="text-purple-400">{biotechMetrics.ai_success_acceleration}%</span>
            </div>
            <div className="flex justify-between">
              <span>Regenerative Trials</span>
              <span className="text-orange-400">{biotechMetrics.regenerative_medicine_trials}</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 BIOTECHNOLOGY & MEDICAL INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">${biotechMetrics.synthetic_biology_market_b}B</div>
            <div className="text-gray-400">Synthetic Biology Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{biotechMetrics.bioengineering_breakthroughs}</div>
            <div className="text-gray-400">Bioengineering Breakthroughs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{biotechMetrics.cell_therapy_manufacturing}</div>
            <div className="text-gray-400">Cell Therapy Manufacturing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{biotechMetrics.crispr_companies_global}</div>
            <div className="text-gray-400">Global CRISPR Companies</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-green-500 text-center text-gray-400">
        <p>🧬 2026 Biotechnology Command Center | CRISPR Gene Editing | AI Drug Discovery | Precision Medicine | Synthetic Biology | Cell & Gene Therapy</p>
        <p className="text-green-400">Research Sources: Prime Medicine, Beam Therapeutics, Innovative Genomics Institute, StartUs Insights, ADVI Life Sciences, Towards Healthcare</p>
      </div>
    </div>
  );
};

export default BiotechnologyMedicalIntelligenceCenter;