import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const BiotechnologyBioengineeringIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [bioPhase, setBioPhase] = useState('CRISPR_COMMERCIALIZATION');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate biotechnology phase changes
      const phases = ['CRISPR_COMMERCIALIZATION', 'GENE_THERAPY_SCALING', 'SYNTHETIC_BIOLOGY_EXPANSION', 'CELL_THERAPY_DEPLOYMENT', 'PERSONALIZED_MEDICINE_INTEGRATION'];
      setBioPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Biotechnology & Bioengineering Data
  const biotechSegments = [
    { segment: 'Cell & Gene Therapy', market_b: 33.5, growth_rate: 24.0, clinical_trials: 567, fda_approvals: 23 },
    { segment: 'Synthetic Biology', market_b: 32.0, growth_rate: 25.0, companies_active: 890, applications: 234 },
    { segment: 'CRISPR Gene Editing', market_b: 4.8, growth_rate: 14.7, clinical_trials: 156, success_rate: 78 },
    { segment: 'Personalized Medicine', market_b: 89.4, growth_rate: 18.9, patients_treated_m: 12.4, precision_drugs: 345 },
    { segment: 'Biological Therapies', market_b: 548.9, growth_rate: 9.4, approved_biologics: 456, pipeline_drugs: 2340 },
    { segment: 'Regenerative Medicine', market_b: 23.7, growth_rate: 22.3, stem_cell_therapies: 178, tissue_engineering: 89 },
    { segment: 'Bioengineered Materials', market_b: 12.8, growth_rate: 34.5, materials_developed: 456, commercial_products: 123 },
    { segment: 'Agricultural Biotechnology', market_b: 67.8, growth_rate: 15.6, gmo_crops_approved: 234, sustainability_gain: 45 }
  ];

  const biotechMarketEvolution = [
    { year: '2024', total_biotech_b: 1567.8, cell_gene_b: 19.8, synthetic_bio_b: 18.9, crispr_b: 4.0 },
    { year: '2025', total_biotech_b: 1789.4, cell_gene_b: 25.2, synthetic_bio_b: 24.1, crispr_b: 4.3 },
    { year: '2026', total_biotech_b: 1962.9, cell_gene_b: 33.5, synthetic_bio_b: 32.0, crispr_b: 4.8 },
    { year: '2027E', total_biotech_b: 2234.6, cell_gene_b: 41.5, synthetic_bio_b: 40.0, crispr_b: 5.5 },
    { year: '2028E', total_biotech_b: 2567.8, cell_gene_b: 51.4, synthetic_bio_b: 50.0, crispr_b: 6.3 },
    { year: '2030E', total_biotech_b: 3456.9, cell_gene_b: 78.9, synthetic_bio_b: 78.4, crispr_b: 8.2 }
  ];

  const crisprApplications = [
    { application: 'Genetic Disease Treatment', effectiveness: 94.2, clinical_trials: 89, success_rate: 78.4, market_readiness: 67 },
    { application: 'Cancer Immunotherapy', effectiveness: 87.6, clinical_trials: 123, success_rate: 82.7, market_readiness: 72 },
    { application: 'Inherited Disorders', effectiveness: 91.3, clinical_trials: 67, success_rate: 86.9, market_readiness: 78 },
    { application: 'Agricultural Enhancement', effectiveness: 89.7, clinical_trials: 234, success_rate: 92.3, market_readiness: 89 },
    { application: 'Drug Discovery & Development', effectiveness: 85.4, clinical_trials: 345, success_rate: 76.8, market_readiness: 84 },
    { application: 'Organ Transplant Compatibility', effectiveness: 78.9, clinical_trials: 45, success_rate: 73.2, market_readiness: 45 }
  ];

  const geneTherapyDeployments = [
    { therapy: 'CAR-T Cell Therapy', patients_treated_k: 234, success_rate: 87.4, cost_per_treatment_k: 450, approval_status: 'FDA Approved' },
    { therapy: 'In Vivo Gene Therapy', patients_treated_k: 156, success_rate: 82.7, cost_per_treatment_k: 280, approval_status: 'Phase 3' },
    { therapy: 'Ex Vivo Gene Therapy', patients_treated_k: 89, success_rate: 91.2, cost_per_treatment_k: 520, approval_status: 'FDA Approved' },
    { therapy: 'RNA Interference (RNAi)', patients_treated_k: 345, success_rate: 78.9, cost_per_treatment_k: 180, approval_status: 'Commercial' },
    { therapy: 'Base Editing Therapies', patients_treated_k: 67, success_rate: 94.6, cost_per_treatment_k: 680, approval_status: 'Phase 2' },
    { therapy: 'Prime Editing Systems', patients_treated_k: 23, success_rate: 96.8, cost_per_treatment_k: 890, approval_status: 'Phase 1' }
  ];

  const syntheticBiologyApplications = [
    { application: 'Biomanufacturing & Production', market_share: 34.8, efficiency_gain: 67.9, cost_reduction: 45.2, sustainability_score: 89 },
    { application: 'Pharmaceutical Synthesis', market_share: 28.7, efficiency_gain: 78.4, cost_reduction: 56.3, sustainability_score: 72 },
    { application: 'Biofuels & Energy', market_share: 18.9, efficiency_gain: 89.2, cost_reduction: 67.8, sustainability_score: 94 },
    { application: 'Food & Nutrition', market_share: 12.4, efficiency_gain: 56.7, cost_reduction: 34.9, sustainability_score: 87 },
    { application: 'Environmental Remediation', market_share: 3.8, efficiency_gain: 94.3, cost_reduction: 78.9, sustainability_score: 96 },
    { application: 'Materials & Chemicals', market_share: 1.4, efficiency_gain: 72.6, cost_reduction: 89.4, sustainability_score: 83 }
  ];

  const personalizedMedicineMetrics = [
    { biomarker: 'Genomic Profiling', patients_analyzed_m: 8.9, accuracy_rate: 94.7, treatment_improvement: 56.8, cost_effectiveness: 78 },
    { biomarker: 'Proteomics Analysis', patients_analyzed_m: 6.7, accuracy_rate: 87.3, treatment_improvement: 45.2, cost_effectiveness: 67 },
    { biomarker: 'Pharmacogenomics', patients_analyzed_m: 12.4, accuracy_rate: 91.8, treatment_improvement: 67.9, cost_effectiveness: 89 },
    { biomarker: 'Liquid Biopsies', patients_analyzed_m: 4.5, accuracy_rate: 89.6, treatment_improvement: 72.3, cost_effectiveness: 72 },
    { biomarker: 'Epigenetic Profiling', patients_analyzed_m: 3.2, accuracy_rate: 85.7, treatment_improvement: 38.9, cost_effectiveness: 56 },
    { biomarker: 'Microbiome Analysis', patients_analyzed_m: 2.8, accuracy_rate: 78.4, treatment_improvement: 34.7, cost_effectiveness: 45 }
  ];

  const biotechInvestmentTrends = [
    { investment_area: 'Gene & Cell Therapy', funding_2026_b: 12.4, vc_deals: 234, avg_deal_size_m: 89, risk_level: 'High' },
    { investment_area: 'Synthetic Biology', funding_2026_b: 8.9, vc_deals: 189, avg_deal_size_m: 67, risk_level: 'Medium' },
    { investment_area: 'CRISPR Technology', funding_2026_b: 6.7, vc_deals: 156, avg_deal_size_m: 78, risk_level: 'Medium' },
    { investment_area: 'Personalized Medicine', funding_2026_b: 15.6, vc_deals: 345, avg_deal_size_m: 45, risk_level: 'Low' },
    { investment_area: 'Regenerative Medicine', funding_2026_b: 9.8, vc_deals: 178, avg_deal_size_m: 112, risk_level: 'High' },
    { investment_area: 'Agricultural Biotech', funding_2026_b: 4.3, vc_deals: 123, avg_deal_size_m: 34, risk_level: 'Low' }
  ];

  const biotechMetrics = {
    global_biotechnology_market_b: 1962.9,
    cell_gene_therapy_market_b: 33.5,
    synthetic_biology_market_b: 32.0,
    crispr_gene_editing_market_b: 4.8,
    personalized_medicine_market_b: 89.4,
    biological_therapies_market_b: 548.9,
    clinical_trials_active: 3456,
    fda_drug_approvals_2026: 89,
    patients_in_gene_therapy_k: 567,
    crispr_clinical_trials: 156,
    synthetic_biology_companies: 890,
    personalized_medicine_patients_m: 12.4,
    biotech_patents_filed: 23400,
    gene_editing_success_rate: 84.7
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'CRISPR_COMMERCIALIZATION': return 'text-green-400';
      case 'GENE_THERAPY_SCALING': return 'text-purple-400';
      case 'SYNTHETIC_BIOLOGY_EXPANSION': return 'text-orange-400';
      case 'CELL_THERAPY_DEPLOYMENT': return 'text-blue-400';
      case 'PERSONALIZED_MEDICINE_INTEGRATION': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getTherapyColor = (therapy) => {
    const colors = {
      'CAR-T Cell Therapy': 'text-green-400',
      'In Vivo Gene Therapy': 'text-blue-400',
      'Ex Vivo Gene Therapy': 'text-purple-400',
      'RNA Interference (RNAi)': 'text-orange-400',
      'Base Editing Therapies': 'text-cyan-400',
      'Prime Editing Systems': 'text-yellow-400'
    };
    return colors[therapy] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-green-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-2">🧬🔬 BIOTECHNOLOGY & BIOENGINEERING INTELLIGENCE CENTER</h1>
            <p className="text-green-300">2026 Biotech Revolution | CRISPR Gene Editing | Cell & Gene Therapy | Synthetic Biology | Personalized Medicine | Regenerative Medicine</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(bioPhase)}`}>{bioPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Biotechnology Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">💰 BIOTECH MARKET</h3>
          <div className="text-2xl text-cyan-400">${biotechMetrics.global_biotechnology_market_b}B</div>
          <div className="text-sm text-gray-400">Global Biotech Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🧬 CELL & GENE</h3>
          <div className="text-2xl text-orange-400">${biotechMetrics.cell_gene_therapy_market_b}B</div>
          <div className="text-sm text-gray-400">Cell & Gene Therapy</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">⚗️ SYNTHETIC BIO</h3>
          <div className="text-2xl text-green-400">${biotechMetrics.synthetic_biology_market_b}B</div>
          <div className="text-sm text-gray-400">Synthetic Biology</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">✂️ CRISPR</h3>
          <div className="text-2xl text-yellow-400">${biotechMetrics.crispr_gene_editing_market_b}B</div>
          <div className="text-sm text-gray-400">CRISPR Gene Editing</div>
        </div>
      </div>

      {/* Main Biotechnology Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Biotechnology Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🧬 BIOTECHNOLOGY & BIOENGINEERING SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={biotechSegments}>
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

        {/* Biotech Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 BIOTECHNOLOGY MARKET EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={biotechMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_biotech_b" fill="#22c55e" name="Total Biotech ($B)" />
              <Line type="monotone" dataKey="cell_gene_b" stroke="#0ea5e9" strokeWidth={3} name="Cell & Gene ($B)" />
              <Line type="monotone" dataKey="synthetic_bio_b" stroke="#8b5cf6" strokeWidth={2} name="Synthetic Bio ($B)" />
              <Line type="monotone" dataKey="crispr_b" stroke="#f59e0b" strokeWidth={2} name="CRISPR ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CRISPR Applications & Gene Therapy Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">✂️ CRISPR GENE EDITING APPLICATIONS</h2>
          <div className="space-y-3">
            {crisprApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{app.application}</span>
                  <span className={getStatusColor(app.effectiveness)}>{app.effectiveness}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Trials</div>
                    <div className="text-cyan-400">{app.clinical_trials}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Success Rate</div>
                    <div className="text-green-400">{app.success_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Market Ready</div>
                    <div className="text-purple-400">{app.market_readiness}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gene Therapy Deployments */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🧬 GENE THERAPY DEPLOYMENTS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={geneTherapyDeployments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="patients_treated_k" tick={{ fill: '#fff' }} name="Patients Treated (K)" />
              <YAxis dataKey="success_rate" tick={{ fill: '#fff' }} name="Success Rate %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'patients_treated_k' ? 'K' : '%'}`, name]}
                labelFormatter={(label) => `Therapy: ${geneTherapyDeployments.find(item => item.patients_treated_k === label)?.therapy || ''}`}
              />
              <Scatter dataKey="cost_per_treatment_k" fill="#8b5cf6" name="Cost per Treatment ($K)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Synthetic Biology & Personalized Medicine */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">⚗️ SYNTHETIC BIOLOGY APPLICATIONS</h2>
          <div className="space-y-3">
            {syntheticBiologyApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{app.application}</span>
                  <span className="text-green-400">{app.market_share}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Efficiency+</div>
                    <div className="text-cyan-400">{app.efficiency_gain}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost↓</div>
                    <div className="text-yellow-400">{app.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Sustainability</div>
                    <div className="text-purple-400">{app.sustainability_score}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🎯 PERSONALIZED MEDICINE BIOMARKERS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={personalizedMedicineMetrics}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="biomarker" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="patients_analyzed_m" stackId="1" stroke="#ef4444" fill="#ef444433" name="Patients Analyzed (M)" />
              <Line type="monotone" dataKey="accuracy_rate" stroke="#22c55e" strokeWidth={3} name="Accuracy Rate %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Biotechnology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🔬 CLINICAL RESEARCH</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Active Clinical Trials</span>
              <span className="text-green-400">{biotechMetrics.clinical_trials_active.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>FDA Drug Approvals 2026</span>
              <span className="text-cyan-400">{biotechMetrics.fda_drug_approvals_2026}</span>
            </div>
            <div className="flex justify-between">
              <span>CRISPR Clinical Trials</span>
              <span className="text-yellow-400">{biotechMetrics.crispr_clinical_trials}</span>
            </div>
            <div className="flex justify-between">
              <span>Gene Editing Success Rate</span>
              <span className="text-purple-400">{biotechMetrics.gene_editing_success_rate}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🧬 THERAPY PATIENTS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Gene Therapy Patients</span>
              <span className="text-green-400">{biotechMetrics.patients_in_gene_therapy_k}K</span>
            </div>
            <div className="flex justify-between">
              <span>Personalized Medicine Patients</span>
              <span className="text-cyan-400">{biotechMetrics.personalized_medicine_patients_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>Synthetic Biology Companies</span>
              <span className="text-yellow-400">{biotechMetrics.synthetic_biology_companies}</span>
            </div>
            <div className="flex justify-between">
              <span>Biotech Patents Filed</span>
              <span className="text-purple-400">{biotechMetrics.biotech_patents_filed.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">💰 MARKET SCALE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Biological Therapies</span>
              <span className="text-green-400">${biotechMetrics.biological_therapies_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Personalized Medicine</span>
              <span className="text-cyan-400">${biotechMetrics.personalized_medicine_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Cell & Gene Therapy</span>
              <span className="text-yellow-400">${biotechMetrics.cell_gene_therapy_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Synthetic Biology</span>
              <span className="text-purple-400">${biotechMetrics.synthetic_biology_market_b}B</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 BIOTECHNOLOGY & BIOENGINEERING INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">${biotechMetrics.global_biotechnology_market_b}B</div>
            <div className="text-gray-400">Global Biotech Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">${biotechMetrics.cell_gene_therapy_market_b}B</div>
            <div className="text-gray-400">Cell & Gene Therapy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{biotechMetrics.clinical_trials_active.toLocaleString()}</div>
            <div className="text-gray-400">Active Clinical Trials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{biotechMetrics.gene_editing_success_rate}%</div>
            <div className="text-gray-400">Gene Editing Success</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-green-500 text-center text-gray-400">
        <p>🧬 2026 Biotechnology Command Center | CRISPR Gene Editing | Cell & Gene Therapy | Synthetic Biology | Personalized Medicine | Regenerative Medicine | Future of Healthcare</p>
        <p className="text-green-400">Research Sources: Fortune Business Insights, Precedence Research, Towards Healthcare, Grand View Research, StartUs Insights, Plunkett Research</p>
      </div>
    </div>
  );
};

export default BiotechnologyBioengineeringIntelligenceCenter;