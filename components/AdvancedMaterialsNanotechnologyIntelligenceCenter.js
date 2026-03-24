import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const AdvancedMaterialsNanotechnologyIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [materialsPhase, setMaterialsPhase] = useState('GRAPHENE_COMMERCIALIZATION');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate materials phase changes
      const phases = ['GRAPHENE_COMMERCIALIZATION', 'CARBON_NANOTUBE_SCALING', 'SMART_MATERIALS_DEPLOYMENT', 'METAMATERIALS_INTEGRATION', 'SELF_HEALING_EXPANSION'];
      setMaterialsPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Advanced Materials & Nanotechnology Data
  const materialsSegments = [
    { segment: 'Advanced Carbon Materials', market_b: 19.4, growth_rate: 8.5, applications: 567, commercial_products: 234 },
    { segment: 'Carbon Nanomaterials', market_b: 10.1, growth_rate: 17.0, cnt_production_kt: 89, graphene_production_kt: 12 },
    { segment: 'Graphene & 2D Materials', market_b: 2.9, growth_rate: 46.6, patents_filed: 890, startups: 123 },
    { segment: 'Smart Nanomaterials', market_b: 0.44, growth_rate: 35.1, self_healing_materials: 45, responsive_materials: 78 },
    { segment: 'Smart Nano-Construction', market_b: 14.5, growth_rate: 6.4, buildings_integrated: 2340, cost_reduction: 23 },
    { segment: 'Metamaterials & Photonics', market_b: 3.8, growth_rate: 28.9, optical_applications: 156, stealth_applications: 34 },
    { segment: 'Quantum Dots & Nanoparticles', market_b: 8.7, growth_rate: 22.3, display_applications: 345, medical_applications: 89 },
    { segment: 'Biomimetic Materials', market_b: 5.6, growth_rate: 34.7, bio_inspired_designs: 178, nature_solutions: 234 }
  ];

  const materialsMarketEvolution = [
    { year: '2024', total_advanced_b: 78.9, carbon_nanomaterials_b: 7.2, graphene_b: 1.8, smart_nano_b: 0.31 },
    { year: '2025', total_advanced_b: 86.3, carbon_nanomaterials_b: 8.7, graphene_b: 2.1, smart_nano_b: 0.37 },
    { year: '2026', total_advanced_b: 93.6, carbon_nanomaterials_b: 10.1, graphene_b: 2.9, smart_nano_b: 0.44 },
    { year: '2027E', total_advanced_b: 102.4, carbon_nanomaterials_b: 11.8, graphene_b: 4.3, smart_nano_b: 0.59 },
    { year: '2028E', total_advanced_b: 113.7, carbon_nanomaterials_b: 13.8, graphene_b: 6.3, smart_nano_b: 0.80 },
    { year: '2030E', total_advanced_b: 145.2, carbon_nanomaterials_b: 18.9, graphene_b: 12.4, smart_nano_b: 1.45 }
  ];

  const grapheneApplications = [
    { application: 'Electronics & Semiconductors', market_share: 34.8, performance_improvement: 78.9, cost_reduction: 23.4, adoption_rate: 67 },
    { application: 'Energy Storage & Batteries', market_share: 28.7, performance_improvement: 156.7, cost_reduction: 45.8, adoption_rate: 78 },
    { application: 'Automotive Composites', market_share: 18.9, performance_improvement: 89.4, cost_reduction: 34.7, adoption_rate: 56 },
    { application: 'Biomedical Applications', market_share: 8.6, performance_improvement: 234.5, cost_reduction: 67.9, adoption_rate: 34 },
    { application: 'Thermal Management', market_share: 5.7, performance_improvement: 178.3, cost_reduction: 56.8, adoption_rate: 45 },
    { application: 'Protective Coatings', market_share: 3.3, performance_improvement: 134.7, cost_reduction: 78.4, adoption_rate: 89 }
  ];

  const carbonNanotubeDeployments = [
    { application: 'Aerospace Composites', strength_improvement: 234.7, weight_reduction: 45.8, cost_per_kg: 890, market_penetration: 67 },
    { application: 'Conductive Plastics', conductivity_increase: 10000, processing_ease: 78.9, cost_per_kg: 234, market_penetration: 89 },
    { application: 'Energy Storage Electrodes', capacity_increase: 178.4, cycle_life_improvement: 156.7, cost_per_kg: 456, market_penetration: 72 },
    { application: 'Transparent Conductors', sheet_resistance: 89.3, transparency: 94.7, cost_per_kg: 678, market_penetration: 45 },
    { application: 'Thermal Interface Materials', thermal_conductivity: 567.8, interface_resistance: 23.4, cost_per_kg: 123, market_penetration: 78 },
    { application: 'Field Emission Displays', emission_efficiency: 234.6, lifetime_hours: 50000, cost_per_kg: 345, market_penetration: 34 }
  ];

  const smartMaterialsApplications = [
    { material: 'Self-Healing Polymers', healing_efficiency: 89.7, healing_time_min: 15, applications: 234, commercialization: 67 },
    { material: 'Shape Memory Alloys', recovery_rate: 98.4, cycle_durability: 10000, applications: 345, commercialization: 78 },
    { material: 'Piezoelectric Materials', energy_harvesting_efficiency: 78.9, power_density_mW: 23, applications: 189, commercialization: 89 },
    { material: 'Thermochromic Materials', response_time_sec: 5, temperature_range_c: 80, applications: 156, commercialization: 56 },
    { material: 'Electrochromic Materials', switching_speed_ms: 100, optical_contrast: 94.7, applications: 123, commercialization: 72 },
    { material: 'Magnetorheological Fluids', response_time_ms: 10, viscosity_change_ratio: 1000, applications: 89, commercialization: 45 }
  ];

  const nanotechIndustrialAdoption = [
    { industry: 'Semiconductors & Electronics', adoption_rate: 89.4, investment_b: 12.4, nanomaterials_used: 45, performance_gain: 78 },
    { industry: 'Automotive & Transportation', adoption_rate: 67.8, investment_b: 8.9, nanomaterials_used: 34, performance_gain: 56 },
    { industry: 'Aerospace & Defense', adoption_rate: 72.3, investment_b: 6.7, nanomaterials_used: 28, performance_gain: 89 },
    { industry: 'Energy & Power', adoption_rate: 78.9, investment_b: 15.6, nanomaterials_used: 56, performance_gain: 134 },
    { industry: 'Healthcare & Medicine', adoption_rate: 56.7, investment_b: 9.8, nanomaterials_used: 67, performance_gain: 178 },
    { industry: 'Construction & Infrastructure', adoption_rate: 45.2, investment_b: 4.3, nanomaterials_used: 23, performance_gain: 34 },
    { industry: 'Textiles & Apparel', adoption_rate: 34.8, investment_b: 2.1, nanomaterials_used: 18, performance_gain: 67 }
  ];

  const materialInnovationMetrics = [
    { metric: 'Novel Material Discovery Rate', value: 234, trend: 'increasing', ai_acceleration: 78 },
    { metric: 'Time to Market (Years)', value: 3.4, trend: 'decreasing', ai_acceleration: 45 },
    { metric: 'Patent Applications Filed', value: 23400, trend: 'increasing', ai_acceleration: 89 },
    { metric: 'Commercial Viability Rate', value: 67.8, trend: 'increasing', ai_acceleration: 56 },
    { metric: 'Production Scale-Up Success', value: 45.7, trend: 'increasing', ai_acceleration: 72 },
    { metric: 'Cost Reduction vs Traditional', value: 34.9, trend: 'increasing', ai_acceleration: 83 }
  ];

  const materialsMetrics = {
    global_advanced_materials_market_b: 93.6,
    carbon_nanomaterials_market_b: 10.1,
    graphene_market_b: 2.9,
    smart_nanomaterials_market_b: 0.44,
    smart_nano_construction_b: 14.5,
    metamaterials_market_b: 3.8,
    quantum_dots_market_b: 8.7,
    materials_patents_filed: 23400,
    nanomaterial_companies: 1890,
    cnt_production_capacity_kt: 89.4,
    graphene_production_capacity_kt: 12.8,
    self_healing_materials_deployed: 234,
    smart_materials_adoption: 67.8,
    nanotechnology_investment_b: 56.7
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'GRAPHENE_COMMERCIALIZATION': return 'text-blue-400';
      case 'CARBON_NANOTUBE_SCALING': return 'text-purple-400';
      case 'SMART_MATERIALS_DEPLOYMENT': return 'text-green-400';
      case 'METAMATERIALS_INTEGRATION': return 'text-orange-400';
      case 'SELF_HEALING_EXPANSION': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getMaterialColor = (material) => {
    const colors = {
      'Self-Healing Polymers': 'text-green-400',
      'Shape Memory Alloys': 'text-blue-400',
      'Piezoelectric Materials': 'text-purple-400',
      'Thermochromic Materials': 'text-orange-400',
      'Electrochromic Materials': 'text-cyan-400',
      'Magnetorheological Fluids': 'text-yellow-400'
    };
    return colors[material] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-purple-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-purple-400 mb-2">⚛️🔬 ADVANCED MATERIALS & NANOTECHNOLOGY INTELLIGENCE CENTER</h1>
            <p className="text-purple-300">2026 Materials Revolution | Graphene & 2D Materials | Carbon Nanotubes | Smart Materials | Metamaterials | Self-Healing Materials | Nanotechnology</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(materialsPhase)}`}>{materialsPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Advanced Materials Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">💰 MATERIALS MARKET</h3>
          <div className="text-2xl text-cyan-400">${materialsMetrics.global_advanced_materials_market_b}B</div>
          <div className="text-sm text-gray-400">Advanced Materials 2026</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">⚫ CARBON NANO</h3>
          <div className="text-2xl text-orange-400">${materialsMetrics.carbon_nanomaterials_market_b}B</div>
          <div className="text-sm text-gray-400">Carbon Nanomaterials</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">📊 GRAPHENE</h3>
          <div className="text-2xl text-yellow-400">${materialsMetrics.graphene_market_b}B</div>
          <div className="text-sm text-gray-400">Graphene & 2D Materials</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🧠 SMART</h3>
          <div className="text-2xl text-green-400">${materialsMetrics.smart_nanomaterials_market_b}B</div>
          <div className="text-sm text-gray-400">Smart Nanomaterials</div>
        </div>
      </div>

      {/* Main Advanced Materials Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Advanced Materials Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">⚛️ ADVANCED MATERIALS & NANOTECHNOLOGY SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={materialsSegments}>
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

        {/* Materials Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 ADVANCED MATERIALS MARKET EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={materialsMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_advanced_b" fill="#22c55e" name="Total Advanced Materials ($B)" />
              <Line type="monotone" dataKey="carbon_nanomaterials_b" stroke="#0ea5e9" strokeWidth={3} name="Carbon Nanomaterials ($B)" />
              <Line type="monotone" dataKey="graphene_b" stroke="#8b5cf6" strokeWidth={2} name="Graphene ($B)" />
              <Line type="monotone" dataKey="smart_nano_b" stroke="#f59e0b" strokeWidth={2} name="Smart Nano ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Graphene Applications & Carbon Nanotube Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">📊 GRAPHENE & 2D MATERIALS APPLICATIONS</h2>
          <div className="space-y-3">
            {grapheneApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{app.application}</span>
                  <span className="text-green-400">{app.market_share}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Performance+</div>
                    <div className="text-cyan-400">{app.performance_improvement}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost↓</div>
                    <div className="text-green-400">{app.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Adoption</div>
                    <div className="text-purple-400">{app.adoption_rate}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carbon Nanotube Deployments */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">⚫ CARBON NANOTUBE DEPLOYMENTS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={carbonNanotubeDeployments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="strength_improvement" tick={{ fill: '#fff' }} name="Strength Improvement %" />
              <YAxis dataKey="market_penetration" tick={{ fill: '#fff' }} name="Market Penetration %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}%`, name]}
                labelFormatter={(label) => `Application: ${carbonNanotubeDeployments.find(item => item.strength_improvement === label)?.application || ''}`}
              />
              <Scatter dataKey="weight_reduction" fill="#8b5cf6" name="Weight Reduction %" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Smart Materials & Nanotechnology Adoption */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🧠 SMART MATERIALS APPLICATIONS</h2>
          <div className="space-y-3">
            {smartMaterialsApplications.map((material, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{material.material}</span>
                  <span className={getMaterialColor(material.material)}>{material.commercialization}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-cyan-400">{material.healing_efficiency || material.recovery_rate || material.energy_harvesting_efficiency}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Applications</div>
                    <div className="text-green-400">{material.applications}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Commercial</div>
                    <div className="text-purple-400">{material.commercialization}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🏭 NANOTECHNOLOGY INDUSTRIAL ADOPTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={nanotechIndustrialAdoption}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="industry" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="adoption_rate" stackId="1" stroke="#ef4444" fill="#ef444433" name="Adoption Rate %" />
              <Line type="monotone" dataKey="investment_b" stroke="#22c55e" strokeWidth={3} name="Investment ($B)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Materials Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">⚗️ PRODUCTION CAPACITY</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>CNT Production Capacity</span>
              <span className="text-green-400">{materialsMetrics.cnt_production_capacity_kt}kt</span>
            </div>
            <div className="flex justify-between">
              <span>Graphene Production Capacity</span>
              <span className="text-cyan-400">{materialsMetrics.graphene_production_capacity_kt}kt</span>
            </div>
            <div className="flex justify-between">
              <span>Nanomaterial Companies</span>
              <span className="text-yellow-400">{materialsMetrics.nanomaterial_companies.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Materials Patents Filed</span>
              <span className="text-purple-400">{materialsMetrics.materials_patents_filed.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🧠 SMART MATERIALS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Self-Healing Materials Deployed</span>
              <span className="text-green-400">{materialsMetrics.self_healing_materials_deployed}</span>
            </div>
            <div className="flex justify-between">
              <span>Smart Materials Adoption</span>
              <span className="text-cyan-400">{materialsMetrics.smart_materials_adoption}%</span>
            </div>
            <div className="flex justify-between">
              <span>Smart Nano Construction</span>
              <span className="text-yellow-400">${materialsMetrics.smart_nano_construction_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Metamaterials Market</span>
              <span className="text-purple-400">${materialsMetrics.metamaterials_market_b}B</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">💡 INNOVATION METRICS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Nanotechnology Investment</span>
              <span className="text-green-400">${materialsMetrics.nanotechnology_investment_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Quantum Dots Market</span>
              <span className="text-cyan-400">${materialsMetrics.quantum_dots_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Advanced Materials Total</span>
              <span className="text-yellow-400">${materialsMetrics.global_advanced_materials_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Smart Nanomaterials</span>
              <span className="text-purple-400">${materialsMetrics.smart_nanomaterials_market_b}B</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 ADVANCED MATERIALS & NANOTECHNOLOGY INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">${materialsMetrics.global_advanced_materials_market_b}B</div>
            <div className="text-gray-400">Advanced Materials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">${materialsMetrics.carbon_nanomaterials_market_b}B</div>
            <div className="text-gray-400">Carbon Nanomaterials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">${materialsMetrics.graphene_market_b}B</div>
            <div className="text-gray-400">Graphene Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{materialsMetrics.materials_patents_filed.toLocaleString()}</div>
            <div className="text-gray-400">Patents Filed</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-purple-500 text-center text-gray-400">
        <p>⚛️ 2026 Materials Command Center | Graphene & 2D Materials | Carbon Nanotubes | Smart Materials | Metamaterials | Self-Healing Materials | Quantum Dots | Future Materials</p>
        <p className="text-purple-400">Research Sources: Research and Markets, Mordor Intelligence, IDTechEx, Grand View Research, Future Market Insights, USD Analytics</p>
      </div>
    </div>
  );
};

export default AdvancedMaterialsNanotechnologyIntelligenceCenter;