import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const SmartCitiesUrbanAIIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cityPhase, setCityPhase] = useState('AI_NATIVE_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate smart cities phase changes
      const phases = ['AI_NATIVE_DEPLOYMENT', 'IOT_SENSOR_INTEGRATION', 'AUTONOMOUS_TRANSPORT', 'DIGITAL_TWIN_OPTIMIZATION', 'SOVEREIGN_AI_GOVERNANCE'];
      setCityPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Smart Cities Market Data
  const smartCitySegments = [
    { segment: 'Smart Transportation', market_b: 389.7, growth_rate: 18.4, ai_integration: 87, deployment_cities: 456 },
    { segment: 'Smart Buildings & Utilities', market_b: 234.8, growth_rate: 22.7, ai_integration: 78, deployment_cities: 789 },
    { segment: 'Smart Governance & Citizen Services', market_b: 156.9, growth_rate: 28.9, ai_integration: 92, deployment_cities: 345 },
    { segment: 'Smart Energy & Grid', market_b: 298.4, growth_rate: 16.8, ai_integration: 94, deployment_cities: 567 },
    { segment: 'Smart Public Safety', market_b: 123.7, growth_rate: 34.6, ai_integration: 89, deployment_cities: 678 },
    { segment: 'Smart Environmental Monitoring', market_b: 89.3, growth_rate: 45.2, ai_integration: 76, deployment_cities: 234 },
    { segment: 'Smart Healthcare Infrastructure', market_b: 178.9, growth_rate: 26.8, ai_integration: 84, deployment_cities: 432 }
  ];

  const smartCityMarketEvolution = [
    { year: '2024', total_b: 877.6, iot_devices_b: 34.2, ai_investment_b: 12.8, urban_pop_b: 4.4 },
    { year: '2025', total_b: 1245.8, iot_devices_b: 45.7, ai_investment_b: 18.9, urban_pop_b: 4.5 },
    { year: '2026', total_b: 1960.0, iot_devices_b: 67.8, ai_investment_b: 28.4, urban_pop_b: 4.6 },
    { year: '2027E', total_b: 2678.9, iot_devices_b: 89.3, ai_investment_b: 42.7, urban_pop_b: 4.7 },
    { year: '2028E', total_b: 3456.7, iot_devices_b: 123.4, ai_investment_b: 67.8, urban_pop_b: 4.9 },
    { year: '2030E', total_b: 6061.0, iot_devices_b: 234.6, ai_investment_b: 156.9, urban_pop_b: 5.2 }
  ];

  const aiNativeInfrastructure = [
    { infrastructure: 'IoT Sensor Networks', deployment_rate: 89, cost_reduction: 85, latency_ms: 2.4, cities_deployed: 1234 },
    { infrastructure: 'Digital Twin Systems', deployment_rate: 67, cost_reduction: 45, latency_ms: 12.8, cities_deployed: 456 },
    { infrastructure: 'Edge Computing Grid', deployment_rate: 78, cost_reduction: 56, latency_ms: 1.2, cities_deployed: 789 },
    { infrastructure: '5G Smart Grid Network', deployment_rate: 84, cost_reduction: 34, latency_ms: 0.8, cities_deployed: 567 },
    { infrastructure: 'Autonomous Vehicle Infrastructure', deployment_rate: 45, cost_reduction: 67, latency_ms: 5.6, cities_deployed: 234 },
    { infrastructure: 'AI Traffic Optimization', deployment_rate: 92, cost_reduction: 78, latency_ms: 3.2, cities_deployed: 891 }
  ];

  const leadingSmartCities = [
    { city: 'Singapore', smart_score: 97.8, population_m: 5.9, investment_b: 12.4, ai_readiness: 96.7 },
    { city: 'Barcelona', smart_score: 89.4, population_m: 5.6, investment_b: 8.9, ai_readiness: 87.9 },
    { city: 'Amsterdam', smart_score: 91.7, population_m: 0.9, investment_b: 4.2, ai_readiness: 92.3 },
    { city: 'Dubai', smart_score: 88.6, population_m: 3.4, investment_b: 15.7, ai_readiness: 89.4 },
    { city: 'Seoul', smart_score: 94.2, population_m: 9.7, investment_b: 18.6, ai_readiness: 94.8 },
    { city: 'London', smart_score: 86.9, population_m: 9.0, investment_b: 23.4, ai_readiness: 85.7 },
    { city: 'Copenhagen', smart_score: 93.5, population_m: 0.7, investment_b: 3.8, ai_readiness: 91.6 }
  ];

  const autonomousTransportation = [
    { transport: 'Autonomous Shuttles', adoption_rate: 34.7, efficiency_gain: 40, safety_improvement: 78, cities: 156 },
    { transport: 'Smart Traffic Signals', adoption_rate: 89.4, efficiency_gain: 28, safety_improvement: 45, cities: 1234 },
    { transport: 'Connected Vehicle Networks', adoption_rate: 67.8, efficiency_gain: 35, safety_improvement: 67, cities: 567 },
    { transport: 'AI Route Optimization', adoption_rate: 92.6, efficiency_gain: 52, safety_improvement: 34, cities: 891 },
    { transport: 'Electric Vehicle Charging Grid', adoption_rate: 78.9, efficiency_gain: 45, safety_improvement: 23, cities: 678 },
    { transport: 'Predictive Maintenance Systems', adoption_rate: 84.3, efficiency_gain: 38, safety_improvement: 56, cities: 445 }
  ];

  const digitalTwinDeployments = [
    { application: 'Traffic & Mobility Management', accuracy: 94.7, real_time_sync: 1.2, cost_savings_m: 45.8, cities: 345 },
    { application: 'Energy Grid Optimization', accuracy: 97.8, real_time_sync: 0.8, cost_savings_m: 89.4, cities: 267 },
    { application: 'Emergency Response Planning', accuracy: 91.3, real_time_sync: 2.8, cost_savings_m: 23.6, cities: 189 },
    { application: 'Urban Planning & Development', accuracy: 89.6, real_time_sync: 15.4, cost_savings_m: 156.7, cities: 123 },
    { application: 'Environmental Monitoring', accuracy: 96.2, real_time_sync: 5.6, cost_savings_m: 34.9, cities: 234 },
    { application: 'Public Safety & Crime Prevention', accuracy: 92.8, real_time_sync: 3.2, cost_savings_m: 67.8, cities: 178 }
  ];

  const smartCityMetrics = {
    global_smart_city_market_b: 1960.0,
    urban_population_b: 4.6,
    iot_devices_deployed_b: 67.8,
    ai_infrastructure_investment_b: 28.4,
    sensor_cost_reduction: 85,
    traffic_congestion_reduction: 40,
    energy_efficiency_improvement: 34,
    public_safety_enhancement: 67,
    citizen_satisfaction_score: 78.9,
    digital_governance_adoption: 84.7,
    smart_cities_worldwide: 2340,
    autonomous_vehicle_deployment: 234000,
    digital_twin_systems: 567,
    edge_computing_nodes_m: 12.4
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AI_NATIVE_DEPLOYMENT': return 'text-purple-400';
      case 'IOT_SENSOR_INTEGRATION': return 'text-blue-400';
      case 'AUTONOMOUS_TRANSPORT': return 'text-cyan-400';
      case 'DIGITAL_TWIN_OPTIMIZATION': return 'text-green-400';
      case 'SOVEREIGN_AI_GOVERNANCE': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  const getCityColor = (city) => {
    const colors = {
      'Singapore': 'text-green-400',
      'Barcelona': 'text-orange-400',
      'Amsterdam': 'text-blue-400',
      'Dubai': 'text-yellow-400',
      'Seoul': 'text-purple-400',
      'London': 'text-red-400',
      'Copenhagen': 'text-cyan-400'
    };
    return colors[city] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-cyan-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">🏙️🤖 SMART CITIES & URBAN AI INTELLIGENCE CENTER</h1>
            <p className="text-cyan-300">2026 AI-Native Infrastructure | IoT Sensor Networks | Digital Twins | Autonomous Transportation | Smart Governance | Urban Innovation</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(cityPhase)}`}>{cityPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Smart Cities Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">💰 MARKET SIZE</h3>
          <div className="text-2xl text-green-400">${(smartCityMetrics.global_smart_city_market_b / 1000).toFixed(1)}T</div>
          <div className="text-sm text-gray-400">Smart Cities Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🌍 URBAN POPULATION</h3>
          <div className="text-2xl text-yellow-400">{smartCityMetrics.urban_population_b}B</div>
          <div className="text-sm text-gray-400">People in Cities (57%)</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">📡 IOT DEVICES</h3>
          <div className="text-2xl text-cyan-400">{smartCityMetrics.iot_devices_deployed_b}B</div>
          <div className="text-sm text-gray-400">Connected Urban Devices</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🏙️ SMART CITIES</h3>
          <div className="text-2xl text-orange-400">{(smartCityMetrics.smart_cities_worldwide / 1000).toFixed(1)}K</div>
          <div className="text-sm text-gray-400">Cities Worldwide</div>
        </div>
      </div>

      {/* Main Smart Cities Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Smart City Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏙️ SMART CITY MARKET SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={smartCitySegments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="segment" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'market_b' ? 'B' : name === 'ai_integration' ? '%' : ''}`, name]}
              />
              <Bar dataKey="market_b" fill="#06b6d4" name="Market Size ($B)" />
              <Bar dataKey="growth_rate" fill="#22c55e" name="Growth Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Smart City Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 SMART CITIES MARKET EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={smartCityMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_b" fill="#22c55e" name="Total Market ($B)" />
              <Line type="monotone" dataKey="iot_devices_b" stroke="#0ea5e9" strokeWidth={3} name="IoT Devices ($B)" />
              <Line type="monotone" dataKey="ai_investment_b" stroke="#8b5cf6" strokeWidth={2} name="AI Investment ($B)" />
              <Line type="monotone" dataKey="urban_pop_b" stroke="#f59e0b" strokeWidth={2} name="Urban Population (B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI-Native Infrastructure & Leading Smart Cities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🧠 AI-NATIVE URBAN INFRASTRUCTURE</h2>
          <div className="space-y-3">
            {aiNativeInfrastructure.map((infra, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{infra.infrastructure}</span>
                  <span className="text-green-400">{infra.cities_deployed} Cities</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Deployment</div>
                    <div className="text-cyan-400">{infra.deployment_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-green-400">{infra.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Latency</div>
                    <div className="text-purple-400">{infra.latency_ms}ms</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leading Smart Cities */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🌟 TOP SMART CITIES 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={leadingSmartCities}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="smart_score" tick={{ fill: '#fff' }} name="Smart Score" />
              <YAxis dataKey="ai_readiness" tick={{ fill: '#fff' }} name="AI Readiness" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'smart_score' || name === 'ai_readiness' ? '%' : name === 'investment_b' ? 'B' : 'M'}`, name]}
                labelFormatter={(label) => `City: ${leadingSmartCities.find(item => item.smart_score === label)?.city || ''}`}
              />
              <Scatter dataKey="investment_b" fill="#8b5cf6" name="Investment ($B)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Autonomous Transportation & Digital Twin Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🚗 AUTONOMOUS TRANSPORTATION SYSTEMS</h2>
          <div className="space-y-3">
            {autonomousTransportation.map((transport, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{transport.transport}</span>
                  <span className="text-green-400">{transport.cities} Cities</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Adoption</div>
                    <div className="text-cyan-400">{transport.adoption_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-green-400">+{transport.efficiency_gain}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Safety</div>
                    <div className="text-yellow-400">+{transport.safety_improvement}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🔮 DIGITAL TWIN CITY SYSTEMS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={digitalTwinDeployments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="application" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="accuracy" stackId="1" stroke="#ef4444" fill="#ef444433" name="Accuracy %" />
              <Line type="monotone" dataKey="cost_savings_m" stroke="#22c55e" strokeWidth={3} name="Cost Savings ($M)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Smart City Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🌐 IoT INFRASTRUCTURE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Sensor Cost Reduction</span>
              <span className="text-green-400">{smartCityMetrics.sensor_cost_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>Edge Computing Nodes</span>
              <span className="text-cyan-400">{smartCityMetrics.edge_computing_nodes_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>IoT Devices Deployed</span>
              <span className="text-yellow-400">{smartCityMetrics.iot_devices_deployed_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>AI Infrastructure Investment</span>
              <span className="text-purple-400">${smartCityMetrics.ai_infrastructure_investment_b}B</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">⚡ EFFICIENCY GAINS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Traffic Congestion Reduction</span>
              <span className="text-green-400">{smartCityMetrics.traffic_congestion_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>Energy Efficiency</span>
              <span className="text-cyan-400">+{smartCityMetrics.energy_efficiency_improvement}%</span>
            </div>
            <div className="flex justify-between">
              <span>Public Safety Enhancement</span>
              <span className="text-yellow-400">+{smartCityMetrics.public_safety_enhancement}%</span>
            </div>
            <div className="flex justify-between">
              <span>Digital Twin Systems</span>
              <span className="text-purple-400">{smartCityMetrics.digital_twin_systems}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">👥 CITIZEN IMPACT</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Citizen Satisfaction</span>
              <span className="text-green-400">{smartCityMetrics.citizen_satisfaction_score}%</span>
            </div>
            <div className="flex justify-between">
              <span>Digital Governance Adoption</span>
              <span className="text-cyan-400">{smartCityMetrics.digital_governance_adoption}%</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Vehicles</span>
              <span className="text-yellow-400">{(smartCityMetrics.autonomous_vehicle_deployment / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between">
              <span>Urban Population</span>
              <span className="text-purple-400">{smartCityMetrics.urban_population_b}B</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 SMART CITIES & URBAN AI INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">${(smartCityMetrics.global_smart_city_market_b / 1000).toFixed(1)}T</div>
            <div className="text-gray-400">Smart Cities Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{smartCityMetrics.urban_population_b}B</div>
            <div className="text-gray-400">Urban Population</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{smartCityMetrics.traffic_congestion_reduction}%</div>
            <div className="text-gray-400">Traffic Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{smartCityMetrics.sensor_cost_reduction}%</div>
            <div className="text-gray-400">Sensor Cost Reduction</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-cyan-500 text-center text-gray-400">
        <p>🏙️ 2026 Smart Cities Command Center | AI-Native Infrastructure | IoT Networks | Digital Twins | Autonomous Transport | Urban Innovation</p>
        <p className="text-cyan-400">Research Sources: Grand View Research, McKinsey, ASUS, Mordor Intelligence, Smart Cities World, Nature, ScienceDirect</p>
      </div>
    </div>
  );
};

export default SmartCitiesUrbanAIIntelligenceCenter;