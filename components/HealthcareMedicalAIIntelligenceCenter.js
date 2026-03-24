import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const HealthcareMedicalAIIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [healthPhase, setHealthPhase] = useState('AI_DIAGNOSTICS_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate healthcare AI phase changes
      const phases = ['AI_DIAGNOSTICS_DEPLOYMENT', 'PRECISION_MEDICINE_SCALING', 'TELEMEDICINE_EXPANSION', 'BIOTECH_BREAKTHROUGH', 'DIGITAL_HEALTH_INTEGRATION'];
      setHealthPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Healthcare AI Market Data
  const healthcareAISegments = [
    { segment: 'Medical Imaging & Diagnostics', market_b: 14.8, growth_rate: 42.7, accuracy: 97.4, adoption_rate: 89 },
    { segment: 'Drug Discovery & Development', market_b: 9.6, growth_rate: 38.9, accuracy: 94.8, adoption_rate: 67 },
    { segment: 'Precision Medicine', market_b: 8.2, growth_rate: 45.3, accuracy: 96.2, adoption_rate: 78 },
    { segment: 'Clinical Decision Support', market_b: 6.7, growth_rate: 34.8, accuracy: 92.6, adoption_rate: 84 },
    { segment: 'Administrative Workflow', market_b: 4.9, growth_rate: 28.4, accuracy: 89.7, adoption_rate: 92 },
    { segment: 'Virtual Health Assistants', market_b: 3.8, growth_rate: 52.1, accuracy: 91.3, adoption_rate: 76 },
    { segment: 'Remote Patient Monitoring', market_b: 3.0, growth_rate: 47.6, accuracy: 93.8, adoption_rate: 68 }
  ];

  const healthcareMarketEvolution = [
    { year: '2024', ai_market_b: 28.4, telemedicine_b: 87.2, digital_health_b: 234.5, biotech_funding_b: 67.8 },
    { year: '2025', ai_market_b: 36.9, telemedicine_b: 116.8, digital_health_b: 298.7, biotech_funding_b: 89.4 },
    { year: '2026', ai_market_b: 51.2, telemedicine_b: 156.3, digital_health_b: 387.9, biotech_funding_b: 124.6 },
    { year: '2027E', ai_market_b: 71.8, telemedicine_b: 208.9, digital_health_b: 498.2, biotech_funding_b: 167.3 },
    { year: '2028E', ai_market_b: 101.6, telemedicine_b: 278.4, digital_health_b: 634.7, biotech_funding_b: 223.8 },
    { year: '2030E', ai_market_b: 198.4, telemedicine_b: 486.7, digital_health_b: 1047.3, biotech_funding_b: 389.2 }
  ];

  const medicalAIApplications = [
    { application: 'Radiology AI (X-ray, MRI, CT)', diagnostic_accuracy: 98.7, deployment_hospitals: 4567, cost_reduction: 34.8 },
    { application: 'Pathology AI (Cancer Detection)', diagnostic_accuracy: 96.4, deployment_hospitals: 2890, cost_reduction: 42.7 },
    { application: 'Ophthalmology AI (Retinal Screening)', diagnostic_accuracy: 97.8, deployment_hospitals: 3456, cost_reduction: 38.9 },
    { application: 'Cardiology AI (ECG Analysis)', diagnostic_accuracy: 95.2, deployment_hospitals: 5678, cost_reduction: 28.4 },
    { application: 'Dermatology AI (Skin Cancer)', diagnostic_accuracy: 94.6, deployment_hospitals: 2345, cost_reduction: 45.3 },
    { application: 'Emergency Medicine AI (Triage)', diagnostic_accuracy: 92.8, deployment_hospitals: 4123, cost_reduction: 31.7 }
  ];

  const precisionMedicinePrograms = [
    { program: 'Cancer Genomics Therapy', patients_treated: 567000, success_rate: 78.4, cost_per_treatment_k: 89, market_b: 28.7 },
    { program: 'Rare Disease Gene Therapy', patients_treated: 89000, success_rate: 84.7, cost_per_treatment_k: 245, market_b: 12.4 },
    { program: 'Pharmacogenomics Testing', patients_treated: 2340000, success_rate: 71.8, cost_per_treatment_k: 3.2, market_b: 8.9 },
    { program: 'Personalized Immunotherapy', patients_treated: 234000, success_rate: 82.6, cost_per_treatment_k: 156, market_b: 34.6 },
    { program: 'Digital Therapeutics', patients_treated: 4567000, success_rate: 67.9, cost_per_treatment_k: 1.8, market_b: 15.7 },
    { program: 'AI-Driven Drug Matching', patients_treated: 1890000, success_rate: 89.3, cost_per_treatment_k: 12.4, market_b: 23.8 }
  ];

  const telemedicineAdoption = [
    { specialty: 'Mental Health', adoption_rate: 89.7, patient_satisfaction: 92.4, cost_savings: 45.8, sessions_m: 234.6 },
    { specialty: 'Primary Care', adoption_rate: 78.4, patient_satisfaction: 87.9, cost_savings: 32.7, sessions_m: 567.8 },
    { specialty: 'Cardiology', adoption_rate: 67.9, patient_satisfaction: 91.2, cost_savings: 38.4, sessions_m: 123.4 },
    { specialty: 'Endocrinology', adoption_rate: 72.6, patient_satisfaction: 89.8, cost_savings: 41.2, sessions_m: 89.7 },
    { specialty: 'Dermatology', adoption_rate: 84.3, patient_satisfaction: 94.6, cost_savings: 52.3, sessions_m: 156.9 },
    { specialty: 'Neurology', adoption_rate: 61.8, patient_satisfaction: 88.7, cost_savings: 36.9, sessions_m: 67.8 }
  ];

  const biotechInnovations = [
    { innovation: 'CRISPR Gene Editing', funding_2026_b: 12.8, clinical_trials: 489, success_rate: 73.6, timeline: 'Q2 2027' },
    { innovation: 'CAR-T Cell Therapy', funding_2026_b: 8.9, clinical_trials: 234, success_rate: 81.4, timeline: 'Q4 2026' },
    { innovation: 'mRNA Therapeutics', funding_2026_b: 15.7, clinical_trials: 567, success_rate: 68.7, timeline: 'Q1 2027' },
    { innovation: 'AI Drug Discovery', funding_2026_b: 23.4, clinical_trials: 789, success_rate: 45.8, timeline: 'Q3 2027' },
    { innovation: 'Regenerative Medicine', funding_2026_b: 18.6, clinical_trials: 345, success_rate: 62.9, timeline: 'Q2 2028' },
    { innovation: 'Digital Biomarkers', funding_2026_b: 6.7, clinical_trials: 678, success_rate: 78.9, timeline: 'Q1 2027' }
  ];

  const healthcareMetrics = {
    global_ai_healthcare_market_b: 51.2,
    digital_health_market_b: 387.9,
    telemedicine_market_b: 156.3,
    precision_medicine_market_b: 156.8,
    ai_diagnostic_accuracy: 97.4,
    healthcare_cost_reduction: 34.8,
    ai_adoption_rate_hospitals: 78.4,
    patients_using_digital_health_m: 234.6,
    biotech_funding_2026_b: 124.6,
    clinical_trials_ai_powered: 2890,
    telehealth_sessions_annual_m: 1547,
    ai_powered_drug_discoveries: 456,
    medical_ai_startups_funded: 1234,
    physician_ai_adoption_rate: 84.7
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AI_DIAGNOSTICS_DEPLOYMENT': return 'text-blue-400';
      case 'PRECISION_MEDICINE_SCALING': return 'text-purple-400';
      case 'TELEMEDICINE_EXPANSION': return 'text-cyan-400';
      case 'BIOTECH_BREAKTHROUGH': return 'text-green-400';
      case 'DIGITAL_HEALTH_INTEGRATION': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  const getSpecialtyColor = (specialty) => {
    const colors = {
      'Mental Health': 'text-purple-400',
      'Primary Care': 'text-blue-400',
      'Cardiology': 'text-red-400',
      'Endocrinology': 'text-green-400',
      'Dermatology': 'text-orange-400',
      'Neurology': 'text-cyan-400'
    };
    return colors[specialty] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-blue-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-400 mb-2">🏥🤖 HEALTHCARE & MEDICAL AI INTELLIGENCE CENTER</h1>
            <p className="text-blue-300">2026 AI Diagnostics | Precision Medicine | Telemedicine | Digital Health | Biotech Innovation | Medical Technology Revolution</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(healthPhase)}`}>{healthPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Healthcare AI Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">💰 AI MARKET</h3>
          <div className="text-2xl text-cyan-400">${healthcareMetrics.global_ai_healthcare_market_b}B</div>
          <div className="text-sm text-gray-400">Healthcare AI Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🎯 ACCURACY</h3>
          <div className="text-2xl text-green-400">{healthcareMetrics.ai_diagnostic_accuracy}%</div>
          <div className="text-sm text-gray-400">AI Diagnostic Accuracy</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">📱 DIGITAL HEALTH</h3>
          <div className="text-2xl text-yellow-400">${healthcareMetrics.digital_health_market_b}B</div>
          <div className="text-sm text-gray-400">Digital Health Market</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">👥 PATIENTS</h3>
          <div className="text-2xl text-cyan-400">{healthcareMetrics.patients_using_digital_health_m}M</div>
          <div className="text-sm text-gray-400">Digital Health Users</div>
        </div>
      </div>

      {/* Main Healthcare AI Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Healthcare AI Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🤖 HEALTHCARE AI MARKET SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={healthcareAISegments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="segment" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'market_b' ? 'B' : '%'}`, name]}
              />
              <Bar dataKey="market_b" fill="#06b6d4" name="Market Size ($B)" />
              <Bar dataKey="adoption_rate" fill="#22c55e" name="Adoption Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Healthcare Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 HEALTHCARE TECHNOLOGY MARKET EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={healthcareMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="ai_market_b" fill="#22c55e" name="AI Healthcare ($B)" />
              <Line type="monotone" dataKey="digital_health_b" stroke="#0ea5e9" strokeWidth={3} name="Digital Health ($B)" />
              <Line type="monotone" dataKey="telemedicine_b" stroke="#8b5cf6" strokeWidth={2} name="Telemedicine ($B)" />
              <Line type="monotone" dataKey="biotech_funding_b" stroke="#f59e0b" strokeWidth={2} name="Biotech Funding ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Medical AI Applications & Precision Medicine */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🔬 MEDICAL AI APPLICATIONS PERFORMANCE</h2>
          <div className="space-y-3">
            {medicalAIApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{app.application}</span>
                  <span className={getStatusColor(app.diagnostic_accuracy)}>{app.diagnostic_accuracy}%</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Hospitals Deployed</div>
                    <div className="text-cyan-400">{app.deployment_hospitals}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-green-400">{app.cost_reduction}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Precision Medicine Programs */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🧬 PRECISION MEDICINE PROGRAMS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={precisionMedicinePrograms}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="success_rate" tick={{ fill: '#fff' }} name="Success Rate %" />
              <YAxis dataKey="patients_treated" tick={{ fill: '#fff' }} name="Patients Treated" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'success_rate' ? '%' : ''}`, name]}
                labelFormatter={(label) => `Program: ${precisionMedicinePrograms.find(item => item.success_rate === label)?.program || ''}`}
              />
              <Scatter dataKey="market_b" fill="#8b5cf6" name="Market Size ($B)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Telemedicine & Biotech Innovations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">📞 TELEMEDICINE ADOPTION BY SPECIALTY</h2>
          <div className="space-y-3">
            {telemedicineAdoption.map((specialty, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-bold text-sm ${getSpecialtyColor(specialty.specialty)}`}>{specialty.specialty}</span>
                  <span className="text-green-400">{specialty.sessions_m}M Sessions</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Adoption</div>
                    <div className="text-cyan-400">{specialty.adoption_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Satisfaction</div>
                    <div className={getStatusColor(specialty.patient_satisfaction)}>{specialty.patient_satisfaction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Savings</div>
                    <div className="text-yellow-400">{specialty.cost_savings}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🧪 BIOTECH INNOVATION BREAKTHROUGHS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={biotechInnovations}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="innovation" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="funding_2026_b" stackId="1" stroke="#ef4444" fill="#ef444433" name="Funding 2026 ($B)" />
              <Line type="monotone" dataKey="success_rate" stroke="#22c55e" strokeWidth={3} name="Success Rate %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Healthcare Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🏥 HOSPITAL AI</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>AI Adoption Rate</span>
              <span className="text-green-400">{healthcareMetrics.ai_adoption_rate_hospitals}%</span>
            </div>
            <div className="flex justify-between">
              <span>Cost Reduction</span>
              <span className="text-cyan-400">{healthcareMetrics.healthcare_cost_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>AI Clinical Trials</span>
              <span className="text-yellow-400">{healthcareMetrics.clinical_trials_ai_powered}</span>
            </div>
            <div className="flex justify-between">
              <span>Physician Adoption</span>
              <span className="text-purple-400">{healthcareMetrics.physician_ai_adoption_rate}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">💊 DRUG DISCOVERY</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>AI Drug Discoveries</span>
              <span className="text-cyan-400">{healthcareMetrics.ai_powered_drug_discoveries}</span>
            </div>
            <div className="flex justify-between">
              <span>Biotech Funding</span>
              <span className="text-green-400">${healthcareMetrics.biotech_funding_2026_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Precision Medicine</span>
              <span className="text-yellow-400">${healthcareMetrics.precision_medicine_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Medical AI Startups</span>
              <span className="text-purple-400">{healthcareMetrics.medical_ai_startups_funded}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">📱 TELEHEALTH</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Market Size</span>
              <span className="text-green-400">${healthcareMetrics.telemedicine_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Annual Sessions</span>
              <span className="text-cyan-400">{(healthcareMetrics.telehealth_sessions_annual_m / 1000).toFixed(1)}B</span>
            </div>
            <div className="flex justify-between">
              <span>Digital Health Users</span>
              <span className="text-yellow-400">{healthcareMetrics.patients_using_digital_health_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>Growth Trajectory</span>
              <span className="text-purple-400">ACCELERATING</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 HEALTHCARE & MEDICAL AI INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">${healthcareMetrics.global_ai_healthcare_market_b}B</div>
            <div className="text-gray-400">AI Healthcare Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{healthcareMetrics.ai_diagnostic_accuracy}%</div>
            <div className="text-gray-400">AI Diagnostic Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{healthcareMetrics.healthcare_cost_reduction}%</div>
            <div className="text-gray-400">Healthcare Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">{healthcareMetrics.ai_adoption_rate_hospitals}%</div>
            <div className="text-gray-400">Hospital AI Adoption</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-blue-500 text-center text-gray-400">
        <p>🏥 2026 Healthcare AI Command Center | Medical Diagnostics | Precision Medicine | Telemedicine | Digital Health | Biotech Innovation</p>
        <p className="text-blue-400">Research Sources: Fortune Business Insights, NVIDIA Healthcare, Bessemer Venture Partners, Grand View Research, Precedence Research</p>
      </div>
    </div>
  );
};

export default HealthcareMedicalAIIntelligenceCenter;