import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const UndergroundInfrastructureSubterraneanCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tunnelPhase, setTunnelPhase] = useState('DUBAI_LOOP_CONSTRUCTION');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate tunnel construction phase changes
      const phases = ['DUBAI_LOOP_CONSTRUCTION', 'AI_GEOLOGICAL_DETECTION', 'SUBTERRANEAN_DATA_MONITORING', 'GEOTHERMAL_OPERATIONS', 'UNDERGROUND_CITY_EXPANSION'];
      setTunnelPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Underground Infrastructure Data
  const majorTunnelingProjects = [
    { name: 'Dubai Loop (Boring Co)', progress: 23.4, length_km: 17, type: 'High-Speed Transit', ai_guidance: 96.8, depth: 40 },
    { name: 'London Crossrail 2', progress: 67.8, length_km: 65, type: 'Railway', ai_guidance: 89.4, depth: 45 },
    { name: 'NYC Second Ave Subway', progress: 78.2, length_km: 13, type: 'Metro Extension', ai_guidance: 92.7, depth: 35 },
    { name: 'Beijing Underground Ring', progress: 54.6, length_km: 85, type: 'Defense Network', ai_guidance: 94.2, depth: 60 },
    { name: 'Tokyo Deep Tunnel', progress: 89.3, length_km: 42, type: 'Flood Control', ai_guidance: 97.1, depth: 50 },
    { name: 'Singapore Deep Metro', progress: 41.7, length_km: 28, type: 'Underground City', ai_guidance: 95.8, depth: 55 }
  ];

  const undergroundSystemsData = [
    { time: '00:00', tunnel_integrity: 94, geothermal: 87, data_centers: 92, ai_monitoring: 96, construction: 89 },
    { time: '04:00', tunnel_integrity: 96, geothermal: 91, data_centers: 88, ai_monitoring: 98, construction: 93 },
    { time: '08:00', tunnel_integrity: 91, geothermal: 94, data_centers: 95, ai_monitoring: 94, construction: 87 },
    { time: '12:00', tunnel_integrity: 98, geothermal: 89, data_centers: 93, ai_monitoring: 97, construction: 91 },
    { time: '16:00', tunnel_integrity: 93, geothermal: 96, data_centers: 91, ai_monitoring: 95, construction: 94 },
    { time: '20:00', tunnel_integrity: 97, geothermal: 92, data_centers: 97, ai_monitoring: 99, construction: 88 }
  ];

  const globalUndergroundCities = [
    { city: 'Montreal RESO', area_km2: 12, population: 500000, smart_systems: 89.4, energy_efficiency: 94.7 },
    { city: 'Beijing Underground City', area_km2: 85, population: 2000000, smart_systems: 76.8, energy_efficiency: 82.6 },
    { city: 'Helsinki Underground', area_km2: 7.5, population: 250000, smart_systems: 97.2, energy_efficiency: 98.1 },
    { city: 'Tokyo Subterranean Network', area_km2: 34, population: 850000, smart_systems: 91.7, energy_efficiency: 89.3 },
    { city: 'Paris Les Halles Complex', area_km2: 4.2, population: 180000, smart_systems: 87.9, energy_efficiency: 91.5 },
    { city: 'Singapore Underground City', area_km2: 15, population: 420000, smart_systems: 95.6, energy_efficiency: 96.8 }
  ];

  const boringCompanyOperations = [
    { project: 'Dubai Loop Phase 1', investment_m: 600, tunnels_km: 17, stations: 4, completion: 23.4 },
    { project: 'Vegas Loop Extension', investment_m: 150, tunnels_km: 6.4, stations: 8, completion: 78.9 },
    { project: 'Austin Transport', investment_m: 200, tunnels_km: 12, stations: 6, completion: 12.7 },
    { project: 'Chicago Express Loop', investment_m: 350, tunnels_km: 28, stations: 12, completion: 8.3 },
    { project: 'Miami Underground', investment_m: 180, tunnels_km: 9.5, stations: 5, completion: 34.8 },
    { project: 'Berlin Future Tunnel', investment_m: 280, tunnels_km: 22, stations: 9, completion: 6.9 }
  ];

  const aiGeologicalDetection = [
    { hour: 0, rock_analysis: 96.8, soil_density: 94.2, water_detection: 97.4, ai_predictions: 98.1 },
    { hour: 4, rock_analysis: 95.1, soil_density: 96.7, water_detection: 93.8, ai_predictions: 97.6 },
    { hour: 8, rock_analysis: 98.3, soil_density: 92.4, water_detection: 95.9, ai_predictions: 96.2 },
    { hour: 12, rock_analysis: 94.7, soil_density: 97.1, water_detection: 98.2, ai_predictions: 98.9 },
    { hour: 16, rock_analysis: 97.6, soil_density: 93.8, water_detection: 96.4, ai_predictions: 97.3 },
    { hour: 20, rock_analysis: 96.2, soil_density: 95.6, water_detection: 94.7, ai_predictions: 98.7 }
  ];

  const subterraneanDataCenters = [
    { facility: 'Iron Mountain Underground', capacity_mw: 240, cooling_efficiency: 97.8, security_level: 'TIER_IV', geothermal: true },
    { facility: 'Swiss Alps Data Fortress', capacity_mw: 156, cooling_efficiency: 98.6, security_level: 'MILITARY', geothermal: true },
    { facility: 'Norway Arctic Data Cave', capacity_mw: 189, cooling_efficiency: 96.4, security_level: 'TIER_III', geothermal: false },
    { facility: 'Singapore Deep Storage', capacity_mw: 134, cooling_efficiency: 95.7, security_level: 'TIER_IV', geothermal: true },
    { facility: 'Iceland Volcanic Center', capacity_mw: 298, cooling_efficiency: 99.1, security_level: 'TIER_IV', geothermal: true },
    { facility: 'Kansas Salt Mine DC', capacity_mw: 167, cooling_efficiency: 94.2, security_level: 'TIER_III', geothermal: false }
  ];

  const undergroundMetrics = {
    global_tunnel_length_km: 147000,
    boring_company_valuation_b: 7.0,
    dubai_loop_investment_m: 600,
    nat_2026_attendees: 2400,
    ai_construction_robots: 347,
    underground_data_centers: 89,
    geothermal_energy_gw: 16.8,
    subterranean_cities_population: 4.2, // million
    tunnel_construction_accuracy: 96.8,
    digital_monitoring_systems: 1247,
    predictive_geology_accuracy: 97.4,
    underground_fiber_cables_km: 892000,
    defense_tunnel_networks: 23,
    energy_storage_caverns: 156
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'DUBAI_LOOP_CONSTRUCTION': return 'text-orange-400';
      case 'AI_GEOLOGICAL_DETECTION': return 'text-purple-400';
      case 'SUBTERRANEAN_DATA_MONITORING': return 'text-blue-400';
      case 'GEOTHERMAL_OPERATIONS': return 'text-red-400';
      case 'UNDERGROUND_CITY_EXPANSION': return 'text-green-400';
      default: return 'text-white';
    }
  };

  const getSecurityColor = (level) => {
    switch (level) {
      case 'TIER_IV': return 'text-green-400';
      case 'MILITARY': return 'text-red-400';
      case 'TIER_III': return 'text-yellow-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-orange-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-orange-400 mb-2">🕳️🤖 UNDERGROUND INFRASTRUCTURE & SUBTERRANEAN TECHNOLOGY CENTER</h1>
            <p className="text-orange-300">2026 Dubai Loop Construction | AI Tunneling | Underground Cities | Geothermal Energy | Subterranean Data Centers</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(tunnelPhase)}`}>{tunnelPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Underground Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🚇 DUBAI LOOP</h3>
          <div className="text-2xl text-cyan-400">{undergroundMetrics.dubai_loop_investment_m}M</div>
          <div className="text-sm text-gray-400">USD Investment (Boring Co.)</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🤖 AI ROBOTS</h3>
          <div className="text-2xl text-green-400">{undergroundMetrics.ai_construction_robots}</div>
          <div className="text-sm text-gray-400">Construction Robots Active</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🏙️ UNDERGROUND CITIES</h3>
          <div className="text-2xl text-yellow-400">{undergroundMetrics.subterranean_cities_population}M</div>
          <div className="text-sm text-gray-400">Population Living Below</div>
        </div>
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-2">🔥 GEOTHERMAL</h3>
          <div className="text-2xl text-orange-400">{undergroundMetrics.geothermal_energy_gw}GW</div>
          <div className="text-sm text-gray-400">Underground Energy Output</div>
        </div>
      </div>

      {/* Main Underground Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Major Tunneling Projects Status */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🚇 MAJOR TUNNELING PROJECTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={majorTunnelingProjects}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'length_km' || name === 'depth' ? '' : '%'}`, name]}
              />
              <Bar dataKey="progress" fill="#06b6d4" name="Progress %" />
              <Bar dataKey="ai_guidance" fill="#22c55e" name="AI Guidance %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Real-time Underground Systems Monitoring */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📊 SUBTERRANEAN SYSTEMS MONITORING</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={undergroundSystemsData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="time" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Line type="monotone" dataKey="tunnel_integrity" stroke="#0ea5e9" strokeWidth={2} name="Tunnel Integrity" />
              <Line type="monotone" dataKey="geothermal" stroke="#ef4444" strokeWidth={2} name="Geothermal Systems" />
              <Line type="monotone" dataKey="data_centers" stroke="#8b5cf6" strokeWidth={2} name="Data Centers" />
              <Line type="monotone" dataKey="ai_monitoring" stroke="#22c55e" strokeWidth={3} name="AI Monitoring" />
              <Line type="monotone" dataKey="construction" stroke="#f59e0b" strokeWidth={2} name="Construction Progress" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Global Underground Cities & Boring Company Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🏙️ GLOBAL UNDERGROUND CITIES NETWORK</h2>
          <div className="space-y-3">
            {globalUndergroundCities.map((city, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{city.city}</span>
                  <span className={getStatusColor(city.energy_efficiency)}>{city.energy_efficiency}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Area</div>
                    <div className="text-white">{city.area_km2}km²</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Population</div>
                    <div className="text-cyan-400">{(city.population / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Smart Systems</div>
                    <div className="text-green-400">{city.smart_systems}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boring Company Project Portfolio */}
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🚀 BORING COMPANY OPERATIONS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={boringCompanyOperations}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="project" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #f59e0b', color: '#f59e0b' }} />
              <Bar dataKey="investment_m" fill="#f59e0b" name="Investment ($M)" />
              <Line type="monotone" dataKey="completion" stroke="#22c55e" strokeWidth={3} name="Completion %" />
              <Line type="monotone" dataKey="tunnels_km" stroke="#0ea5e9" strokeWidth={2} name="Tunnel Length (km)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Geological Detection & Subterranean Data Centers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🧠 AI GEOLOGICAL DETECTION SYSTEMS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={aiGeologicalDetection}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }} />
              <Area type="monotone" dataKey="rock_analysis" stackId="1" stroke="#0ea5e9" fill="#0ea5e933" name="Rock Analysis" />
              <Area type="monotone" dataKey="soil_density" stackId="2" stroke="#22c55e" fill="#22c55e33" name="Soil Density" />
              <Area type="monotone" dataKey="water_detection" stackId="3" stroke="#06b6d4" fill="#06b6d433" name="Water Detection" />
              <Line type="monotone" dataKey="ai_predictions" stroke="#8b5cf6" strokeWidth={3} name="AI Prediction Accuracy" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">💾 SUBTERRANEAN DATA CENTER OPERATIONS</h2>
          <div className="space-y-3">
            {subterraneanDataCenters.slice(0, 4).map((facility, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-400 font-bold text-sm">{facility.facility}</span>
                  <span className={getSecurityColor(facility.security_level)}>{facility.security_level}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-white">{facility.capacity_mw}MW</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cooling</div>
                    <div className="text-cyan-400">{facility.cooling_efficiency}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Geothermal</div>
                    <div className={facility.geothermal ? 'text-green-400' : 'text-gray-500'}>
                      {facility.geothermal ? 'YES' : 'NO'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Underground Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🏗️ NAT 2026 CONFERENCE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Attendees (Anaheim)</span>
              <span className="text-cyan-400">{undergroundMetrics.nat_2026_attendees}</span>
            </div>
            <div className="flex justify-between">
              <span>Construction Accuracy</span>
              <span className="text-green-400">{undergroundMetrics.tunnel_construction_accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span>Robotic Systems</span>
              <span className="text-purple-400">BREAKTHROUGH</span>
            </div>
            <div className="flex justify-between">
              <span>Laser Guidance</span>
              <span className="text-yellow-400">ADVANCED</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-3">💰 BORING COMPANY VALUATION</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Company Value (2026)</span>
              <span className="text-green-400">${undergroundMetrics.boring_company_valuation_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Dubai Loop Construction</span>
              <span className="text-orange-400">23.4% COMPLETE</span>
            </div>
            <div className="flex justify-between">
              <span>Q2 2026 Target</span>
              <span className="text-cyan-400">ON TRACK</span>
            </div>
            <div className="flex justify-between">
              <span>Tunnel Boring Machines</span>
              <span className="text-purple-400">12 ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-3">🌐 DIGITAL INFRASTRUCTURE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Fiber Cables Underground</span>
              <span className="text-blue-400">{(undergroundMetrics.underground_fiber_cables_km / 1000).toFixed(0)}K km</span>
            </div>
            <div className="flex justify-between">
              <span>Monitoring Systems</span>
              <span className="text-green-400">{undergroundMetrics.digital_monitoring_systems}</span>
            </div>
            <div className="flex justify-between">
              <span>Geological Prediction</span>
              <span className="text-purple-400">{undergroundMetrics.predictive_geology_accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span>Energy Storage Caverns</span>
              <span className="text-yellow-400">{undergroundMetrics.energy_storage_caverns}</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 UNDERGROUND INFRASTRUCTURE INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{(undergroundMetrics.global_tunnel_length_km / 1000).toFixed(0)}K</div>
            <div className="text-gray-400">Global Tunnel Network (km)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{undergroundMetrics.underground_data_centers}</div>
            <div className="text-gray-400">Subterranean Data Centers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{undergroundMetrics.defense_tunnel_networks}</div>
            <div className="text-gray-400">Defense Tunnel Networks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{(undergroundMetrics.geothermal_energy_gw).toFixed(1)}GW</div>
            <div className="text-gray-400">Geothermal Energy Output</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-orange-500 text-center text-gray-400">
        <p>🕳️ 2026 Underground Infrastructure Command Center | Dubai Loop Construction | AI Tunneling Technology | Subterranean Cities | Geothermal Operations</p>
        <p className="text-orange-400">Research Sources: The Boring Company, NAT 2026 Conference, ScienceDirect Underground Engineering, Underground Infrastructure Magazine, Reuters Dubai Loop</p>
      </div>
    </div>
  );
};

export default UndergroundInfrastructureSubterraneanCenter;