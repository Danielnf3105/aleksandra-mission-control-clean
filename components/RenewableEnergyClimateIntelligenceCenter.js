import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const RenewableEnergyClimateIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [energyPhase, setEnergyPhase] = useState('CLEAN_ENERGY_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate energy transition phase changes
      const phases = ['CLEAN_ENERGY_DEPLOYMENT', 'GRID_MODERNIZATION', 'CARBON_CAPTURE_SCALING', 'FUSION_BREAKTHROUGH', 'AI_LOAD_OPTIMIZATION'];
      setEnergyPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Renewable Energy Data
  const renewableEnergyCapacity = [
    { name: 'Solar PV', capacity_gw: 1847, growth_rate: 24.8, cost_reduction: 85, investment_b: 456, grid_penetration: 51 },
    { name: 'Wind (Onshore)', capacity_gw: 1024, growth_rate: 12.4, cost_reduction: 69, investment_b: 289, grid_penetration: 14 },
    { name: 'Wind (Offshore)', capacity_gw: 89, growth_rate: 34.7, cost_reduction: 48, investment_b: 156, grid_penetration: 3 },
    { name: 'Hydroelectric', capacity_gw: 1356, growth_rate: 2.1, cost_reduction: 12, investment_b: 78, grid_penetration: 18 },
    { name: 'Nuclear', capacity_gw: 423, growth_rate: 6.8, cost_reduction: 15, investment_b: 234, grid_penetration: 8 },
    { name: 'Geothermal', capacity_gw: 67, growth_rate: 18.9, cost_reduction: 34, investment_b: 45, grid_penetration: 2 }
  ];

  const energyTransitionInvestment = [
    { year: '2024', total_b: 2100, clean_energy_b: 1890, fossil_b: 210, storage_b: 18, grid_b: 134 },
    { year: '2025', total_b: 2300, clean_energy_b: 2070, fossil_b: 230, storage_b: 20, grid_b: 156 },
    { year: '2026', total_b: 2540, clean_energy_b: 2310, fossil_b: 230, storage_b: 23, grid_b: 187 },
    { year: '2027E', total_b: 2890, clean_energy_b: 2678, fossil_b: 212, storage_b: 28, grid_b: 234 },
    { year: '2028E', total_b: 3290, clean_energy_b: 3089, fossil_b: 201, storage_b: 34, grid_b: 289 },
    { year: '2030E', total_b: 4200, clean_energy_b: 4020, fossil_b: 180, storage_b: 45, grid_b: 367 }
  ];

  const batteryStorageSystems = [
    { system: 'Utility-Scale BESS', capacity_gwh: 89.4, cost_kwh: 145, efficiency: 94.7, deployment_rate: 156, paired_solar: 67 },
    { system: 'Grid-Scale Lithium', capacity_gwh: 67.8, cost_kwh: 167, efficiency: 92.3, deployment_rate: 134, paired_solar: 45 },
    { system: 'Residential Storage', capacity_gwh: 23.4, cost_kwh: 289, efficiency: 89.6, deployment_rate: 89, paired_solar: 87 },
    { system: 'Commercial C&I', capacity_gwh: 45.7, cost_kwh: 234, efficiency: 91.8, deployment_rate: 112, paired_solar: 76 },
    { system: 'Flow Batteries', capacity_gwh: 12.3, cost_kwh: 356, efficiency: 87.4, deployment_rate: 34, paired_solar: 23 },
    { system: 'Compressed Air', capacity_gwh: 8.9, cost_kwh: 198, efficiency: 78.9, deployment_rate: 28, paired_solar: 12 }
  ];

  const carbonCapturePrograms = [
    { project: 'Climeworks Mammoth', capacity_mt: 0.036, cost_per_ton: 600, tech: 'DAC', location: 'Iceland', status: 'Operational' },
    { project: 'Occidental Stratos', capacity_mt: 1.0, cost_per_ton: 400, tech: 'DAC', location: 'Texas', status: 'Construction' },
    { project: 'Microsoft Azure CCUS', capacity_mt: 4.2, cost_per_ton: 350, tech: 'Industrial', location: 'Global', status: 'Scaling' },
    { project: 'Shell Quest CCS', capacity_mt: 1.2, cost_per_ton: 120, tech: 'Industrial', location: 'Alberta', status: 'Operational' },
    { project: 'Equinor Northern Lights', capacity_mt: 5.0, cost_per_ton: 85, tech: 'Offshore Storage', location: 'Norway', status: 'Operational' },
    { project: 'Saudi Aramco Blue Ammonia', capacity_mt: 11.0, cost_per_ton: 200, tech: 'Blue Hydrogen', location: 'Saudi Arabia', status: 'Operational' }
  ];

  const fusionEnergyBreakthroughs = [
    { facility: 'ITER Tokamak', power_mw: 500, timeline: '2035', investment_b: 25, breakthrough: 'Q > 10 Target', status: 'Construction' },
    { facility: 'Commonwealth Fusion ARC', power_mw: 270, timeline: '2032', investment_b: 2.1, breakthrough: 'SPARC Ignition', status: 'Development' },
    { facility: 'TAE Technologies', power_mw: 400, timeline: '2030', investment_b: 1.2, breakthrough: 'Field-Reversed Config', status: 'Testing' },
    { facility: 'Helion Polaris', power_mw: 50, timeline: '2028', investment_b: 0.6, breakthrough: 'Commercial Demo', status: 'Pre-Production' },
    { facility: 'Zap Energy Z-Pinch', power_mw: 100, timeline: '2029', investment_b: 0.3, breakthrough: 'Sheared-Flow Z-Pinch', status: 'R&D' },
    { facility: 'General Fusion MTF', power_mw: 150, timeline: '2031', investment_b: 0.4, breakthrough: 'Magnetized Target', status: 'Development' }
  ];

  const climateInvestmentSectors = [
    { sector: 'Solar & Wind', investment_b: 745, growth_rate: 18.4, co2_avoided_gt: 4.2, jobs_created_k: 2340 },
    { sector: 'Battery Storage', investment_b: 234, growth_rate: 45.7, co2_avoided_gt: 0.8, jobs_created_k: 567 },
    { sector: 'Electric Vehicles', investment_b: 489, growth_rate: 28.9, co2_avoided_gt: 2.1, jobs_created_k: 1890 },
    { sector: 'Grid Infrastructure', investment_b: 187, growth_rate: 12.6, co2_avoided_gt: 0.6, jobs_created_k: 445 },
    { sector: 'Carbon Capture', investment_b: 67, growth_rate: 67.8, co2_avoided_gt: 1.4, jobs_created_k: 178 },
    { sector: 'Nuclear Fusion', investment_b: 89, growth_rate: 89.4, co2_avoided_gt: 3.8, jobs_created_k: 234 }
  ];

  const renewableMetrics = {
    global_renewable_capacity_gw: 3806,
    clean_energy_investment_b: 2310,
    renewable_share_electricity: 42.3,
    co2_emissions_avoided_gt: 12.9,
    battery_storage_capacity_gwh: 247,
    ev_sales_millions: 18.7,
    carbon_capture_capacity_mt: 22.4,
    fusion_investment_b: 29.6,
    jobs_created_millions: 15.8,
    cost_reduction_solar: 85,
    cost_reduction_wind: 69,
    grid_renewable_penetration: 51.3,
    energy_storage_deployments: 156000,
    climate_tech_startups: 4567
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'CLEAN_ENERGY_DEPLOYMENT': return 'text-green-400';
      case 'GRID_MODERNIZATION': return 'text-blue-400';
      case 'CARBON_CAPTURE_SCALING': return 'text-purple-400';
      case 'FUSION_BREAKTHROUGH': return 'text-cyan-400';
      case 'AI_LOAD_OPTIMIZATION': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  const getTechColor = (tech) => {
    switch (tech) {
      case 'DAC': return 'text-purple-400';
      case 'Industrial': return 'text-blue-400';
      case 'Offshore Storage': return 'text-cyan-400';
      case 'Blue Hydrogen': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-green-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-400 mb-2">🌱⚡ RENEWABLE ENERGY & CLIMATE TECHNOLOGY CENTER</h1>
            <p className="text-green-300">2026 Clean Energy Transition | Solar & Wind Dominance | Battery Storage | Nuclear Fusion | Carbon Capture | Climate Investment</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(energyPhase)}`}>{energyPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Clean Energy Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">💰 INVESTMENT</h3>
          <div className="text-2xl text-cyan-400">${(renewableMetrics.clean_energy_investment_b / 1000).toFixed(1)}T</div>
          <div className="text-sm text-gray-400">2026 Clean Energy Investment</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">⚡ CAPACITY</h3>
          <div className="text-2xl text-green-400">{(renewableMetrics.global_renewable_capacity_gw / 1000).toFixed(1)}TW</div>
          <div className="text-sm text-gray-400">Global Renewable Capacity</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🔋 STORAGE</h3>
          <div className="text-2xl text-yellow-400">{renewableMetrics.battery_storage_capacity_gwh}GWh</div>
          <div className="text-sm text-gray-400">Battery Storage Deployed</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🌍 CO2 AVOIDED</h3>
          <div className="text-2xl text-green-400">{renewableMetrics.co2_emissions_avoided_gt}Gt</div>
          <div className="text-sm text-gray-400">Annual Emissions Avoided</div>
        </div>
      </div>

      {/* Main Clean Energy Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Renewable Energy Capacity by Source */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">⚡ RENEWABLE ENERGY CAPACITY 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={renewableEnergyCapacity}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'capacity_gw' ? 'GW' : name === 'investment_b' ? 'B' : '%'}`, name]}
              />
              <Bar dataKey="capacity_gw" fill="#06b6d4" name="Capacity (GW)" />
              <Bar dataKey="growth_rate" fill="#22c55e" name="Growth Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Transition Investment Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">💸 GLOBAL ENERGY TRANSITION INVESTMENT</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={energyTransitionInvestment}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="clean_energy_b" fill="#22c55e" name="Clean Energy ($B)" />
              <Line type="monotone" dataKey="total_b" stroke="#0ea5e9" strokeWidth={3} name="Total Investment ($B)" />
              <Line type="monotone" dataKey="storage_b" stroke="#8b5cf6" strokeWidth={2} name="Storage ($B)" />
              <Line type="monotone" dataKey="grid_b" stroke="#f59e0b" strokeWidth={2} name="Grid Infrastructure ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Battery Storage & Carbon Capture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🔋 BATTERY STORAGE SYSTEMS DEPLOYMENT</h2>
          <div className="space-y-3">
            {batteryStorageSystems.map((system, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{system.system}</span>
                  <span className="text-green-400">${system.cost_kwh}/kWh</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-white">{system.capacity_gwh}GWh</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className={getStatusColor(system.efficiency)}>{system.efficiency}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Deploy Rate</div>
                    <div className="text-cyan-400">{system.deployment_rate}/yr</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Solar Paired</div>
                    <div className="text-purple-400">{system.paired_solar}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carbon Capture Programs */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🌫️ CARBON CAPTURE & STORAGE PROGRAMS</h2>
          <div className="space-y-3">
            {carbonCapturePrograms.slice(0, 4).map((program, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-400 font-bold text-sm">{program.project}</span>
                  <span className={getTechColor(program.tech)}>{program.tech}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-white">{program.capacity_mt}Mt/yr</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost</div>
                    <div className="text-cyan-400">${program.cost_per_ton}/t</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div className="text-green-400">{program.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nuclear Fusion & Climate Investment Sectors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">⚛️ NUCLEAR FUSION ENERGY BREAKTHROUGHS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={fusionEnergyBreakthroughs}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="investment_b" tick={{ fill: '#fff' }} name="Investment ($B)" />
              <YAxis dataKey="power_mw" tick={{ fill: '#fff' }} name="Power (MW)" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'investment_b' ? 'B' : 'MW'}`, name]}
                labelFormatter={(label) => `Facility: ${fusionEnergyBreakthroughs.find(item => item.investment_b === label)?.facility || ''}`}
              />
              <Scatter dataKey="power_mw" fill="#06b6d4" name="Power vs Investment" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🌍 CLIMATE INVESTMENT SECTOR BREAKDOWN</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={climateInvestmentSectors}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="sector" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="investment_b" stackId="1" stroke="#ef4444" fill="#ef444433" name="Investment ($B)" />
              <Line type="monotone" dataKey="growth_rate" stroke="#22c55e" strokeWidth={3} name="Growth Rate %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Clean Energy Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">☀️ SOLAR DOMINANCE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>2026 New Capacity</span>
              <span className="text-cyan-400">{renewableMetrics.grid_renewable_penetration}%</span>
            </div>
            <div className="flex justify-between">
              <span>Cost Reduction (10yr)</span>
              <span className="text-green-400">{renewableMetrics.cost_reduction_solar}%</span>
            </div>
            <div className="flex justify-between">
              <span>Grid Penetration</span>
              <span className="text-yellow-400">RECORD HIGH</span>
            </div>
            <div className="flex justify-between">
              <span>Storage Pairing</span>
              <span className="text-purple-400">67% PAIRED</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🔋 ENERGY STORAGE BOOM</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Market Value</span>
              <span className="text-green-400">$20B (2026)</span>
            </div>
            <div className="flex justify-between">
              <span>Deployments</span>
              <span className="text-cyan-400">{(renewableMetrics.energy_storage_deployments / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between">
              <span>Cost Decline</span>
              <span className="text-yellow-400">ACCELERATING</span>
            </div>
            <div className="flex justify-between">
              <span>Grid Integration</span>
              <span className="text-purple-400">28% OF NEW</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">👥 GREEN JOBS IMPACT</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Jobs Created</span>
              <span className="text-green-400">{renewableMetrics.jobs_created_millions}M</span>
            </div>
            <div className="flex justify-between">
              <span>EV Sales (2026)</span>
              <span className="text-cyan-400">{renewableMetrics.ev_sales_millions}M</span>
            </div>
            <div className="flex justify-between">
              <span>Climate Tech Startups</span>
              <span className="text-purple-400">{renewableMetrics.climate_tech_startups}</span>
            </div>
            <div className="flex justify-between">
              <span>Renewable Share</span>
              <span className="text-yellow-400">{renewableMetrics.renewable_share_electricity}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 RENEWABLE ENERGY & CLIMATE INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{renewableMetrics.carbon_capture_capacity_mt}Mt</div>
            <div className="text-gray-400">Carbon Capture Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">${renewableMetrics.fusion_investment_b}B</div>
            <div className="text-gray-400">Fusion Investment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{renewableMetrics.cost_reduction_wind}%</div>
            <div className="text-gray-400">Wind Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{(renewableMetrics.global_renewable_capacity_gw / 1000).toFixed(1)}TW</div>
            <div className="text-gray-400">Total Renewable Capacity</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-green-500 text-center text-gray-400">
        <p>🌱 2026 Clean Energy Command Center | Solar Dominance | Battery Storage | Nuclear Fusion | Carbon Capture | Climate Investment Intelligence</p>
        <p className="text-green-400">Research Sources: IEA, BloombergNEF, Deloitte, Wood Mackenzie, World Economic Forum, S&P Global Energy, EIA</p>
      </div>
    </div>
  );
};

export default RenewableEnergyClimateIntelligenceCenter;