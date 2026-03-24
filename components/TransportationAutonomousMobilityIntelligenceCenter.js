import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const TransportationAutonomousMobilityIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobilityPhase, setMobilityPhase] = useState('AUTONOMOUS_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate mobility phase changes
      const phases = ['AUTONOMOUS_DEPLOYMENT', 'FLYING_TAXI_LAUNCH', 'EV_MASS_ADOPTION', 'AI_LOGISTICS_SCALING', 'MULTIMODAL_INTEGRATION'];
      setMobilityPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Transportation & Mobility Data
  const transportationSegments = [
    { segment: 'Autonomous Vehicles & Robotaxis', market_b: 220.6, growth_rate: 24.4, deployment_rate: 78, miles_logged_m: 150 },
    { segment: 'Electric Vehicles & Charging', market_b: 623.8, growth_rate: 18.7, deployment_rate: 67, charging_stations_k: 890 },
    { segment: 'Flying Taxis & Air Mobility', market_b: 2.1, growth_rate: 89.4, deployment_rate: 23, cities_deployed: 12 },
    { segment: 'AI-Powered Logistics', market_b: 89.7, growth_rate: 32.8, deployment_rate: 84, fleet_vehicles_k: 456 },
    { segment: 'Connected Vehicle Infrastructure', market_b: 67.9, growth_rate: 28.4, deployment_rate: 92, cities_connected: 234 },
    { segment: 'Mobility-as-a-Service (MaaS)', market_b: 34.8, growth_rate: 45.7, deployment_rate: 56, active_users_m: 89 },
    { segment: 'Freight & Cargo Autonomy', market_b: 45.6, growth_rate: 67.8, deployment_rate: 34, autonomous_miles_m: 23 }
  ];

  const mobilityMarketEvolution = [
    { year: '2024', total_autonomous_b: 156.7, ev_sales_m: 14.8, flying_taxis_b: 0.3, ai_logistics_b: 56.8 },
    { year: '2025', total_autonomous_b: 189.4, ev_sales_m: 18.9, flying_taxis_b: 0.8, ai_logistics_b: 68.7 },
    { year: '2026', total_autonomous_b: 220.6, ev_sales_m: 23.4, flying_taxis_b: 2.1, ai_logistics_b: 89.7 },
    { year: '2027E', total_autonomous_b: 278.9, ev_sales_m: 29.8, flying_taxis_b: 3.8, ai_logistics_b: 118.4 },
    { year: '2028E', total_autonomous_b: 356.7, ev_sales_m: 38.7, flying_taxis_b: 4.9, ai_logistics_b: 156.9 },
    { year: '2030E', total_autonomous_b: 567.4, ev_sales_m: 64.2, flying_taxis_b: 6.2, ai_logistics_b: 245.8 }
  ];

  const autonomousVehicleLeaders = [
    { company: 'Waymo (Alphabet)', valuation_b: 175.0, miles_logged_m: 55, cities_active: 8, safety_score: 98.7 },
    { company: 'Pony.ai', valuation_b: 8.5, miles_logged_m: 55, cities_active: 12, safety_score: 94.2 },
    { company: 'Cruise (GM)', valuation_b: 30.0, miles_logged_m: 34, cities_active: 3, safety_score: 92.6 },
    { company: 'Tesla FSD', valuation_b: 850.0, miles_logged_m: 45, cities_active: 50, safety_score: 89.7 },
    { company: 'Aurora Innovation', valuation_b: 12.4, miles_logged_m: 28, cities_active: 7, safety_score: 95.8 },
    { company: 'Motional', valuation_b: 4.0, miles_logged_m: 19, cities_active: 4, safety_score: 91.3 },
    { company: 'Argo AI', valuation_b: 7.2, miles_logged_m: 23, cities_active: 6, safety_score: 93.4 }
  ];

  const flyingTaxiDeployments = [
    { company: 'Joby Aviation', market_cap_b: 2.8, aircraft_certified: 12, cities_planned: 4, commercial_launch: 'Q2 2026' },
    { company: 'Lilium', market_cap_b: 0.9, aircraft_certified: 8, cities_planned: 6, commercial_launch: 'Q4 2026' },
    { company: 'Archer Aviation', market_cap_b: 1.4, aircraft_certified: 5, cities_planned: 3, commercial_launch: 'Q3 2026' },
    { company: 'EHang', market_cap_b: 0.6, aircraft_certified: 15, cities_planned: 8, commercial_launch: 'Q1 2026' },
    { company: 'Volocopter', market_cap_b: 1.8, aircraft_certified: 9, cities_planned: 5, commercial_launch: 'Q4 2026' },
    { company: 'Vertical Aerospace', market_cap_b: 0.4, aircraft_certified: 3, cities_planned: 2, commercial_launch: 'Q2 2027' }
  ];

  const electricVehicleAdoption = [
    { region: 'China', ev_sales_m: 8.9, market_share: 36.7, charging_stations_k: 567, government_incentives_b: 23.4 },
    { region: 'Europe', ev_sales_m: 3.4, market_share: 24.8, charging_stations_k: 234, government_incentives_b: 18.9 },
    { region: 'North America', ev_sales_m: 2.1, market_share: 18.9, charging_stations_k: 156, government_incentives_b: 12.7 },
    { region: 'South Korea', ev_sales_m: 0.8, market_share: 28.4, charging_stations_k: 89, government_incentives_b: 4.2 },
    { region: 'Japan', ev_sales_m: 0.6, market_share: 15.7, charging_stations_k: 67, government_incentives_b: 6.8 },
    { region: 'India', ev_sales_m: 1.2, market_share: 8.9, charging_stations_k: 45, government_incentives_b: 3.4 }
  ];

  const aiLogisticsSolutions = [
    { solution: 'Route Optimization AI', efficiency_gain: 34.8, cost_reduction: 28.9, deployment_rate: 89, companies_using: 2340 },
    { solution: 'Predictive Maintenance', efficiency_gain: 45.7, cost_reduction: 52.3, deployment_rate: 76, companies_using: 1890 },
    { solution: 'Autonomous Last-Mile Delivery', efficiency_gain: 67.8, cost_reduction: 34.7, deployment_rate: 23, companies_using: 456 },
    { solution: 'Dynamic Fleet Management', efficiency_gain: 52.4, cost_reduction: 38.6, deployment_rate: 84, companies_using: 3210 },
    { solution: 'Demand Forecasting AI', efficiency_gain: 29.7, cost_reduction: 45.8, deployment_rate: 92, companies_using: 4567 },
    { solution: 'Smart Warehouse Automation', efficiency_gain: 78.9, cost_reduction: 67.4, deployment_rate: 67, companies_using: 1234 }
  ];

  const connectedVehicleData = [
    { connectivity: '5G Vehicle Networks', penetration_rate: 34.7, latency_ms: 1.2, data_speed_gbps: 2.8, vehicles_connected_m: 45.6 },
    { connectivity: 'V2X Communication', penetration_rate: 23.8, latency_ms: 8.9, data_speed_gbps: 1.4, vehicles_connected_m: 23.4 },
    { connectivity: 'Edge Computing Integration', penetration_rate: 67.9, latency_ms: 3.4, data_speed_gbps: 4.2, vehicles_connected_m: 78.9 },
    { connectivity: 'Satellite Connectivity', penetration_rate: 12.6, latency_ms: 45.7, data_speed_gbps: 0.8, vehicles_connected_m: 12.3 },
    { connectivity: 'AI Traffic Management', penetration_rate: 89.4, latency_ms: 2.1, data_speed_gbps: 3.6, vehicles_connected_m: 156.7 },
    { connectivity: 'Smart Infrastructure Integration', penetration_rate: 56.8, latency_ms: 5.6, data_speed_gbps: 2.1, vehicles_connected_m: 67.8 }
  ];

  const mobilityMetrics = {
    global_autonomous_vehicle_market_b: 220.6,
    robotaxi_market_b: 18.3,
    flying_taxi_market_b: 2.1,
    ev_sales_global_m: 23.4,
    autonomous_miles_logged_m: 150,
    ai_logistics_efficiency_gain: 45.7,
    connected_vehicles_global_m: 156.7,
    charging_stations_global_k: 890,
    flying_taxi_cities_deployed: 12,
    autonomous_safety_improvement: 78.9,
    mobility_as_service_users_m: 89,
    freight_autonomous_deployment: 34.7,
    traffic_optimization_cities: 234,
    multimodal_integration_score: 67.8
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AUTONOMOUS_DEPLOYMENT': return 'text-blue-400';
      case 'FLYING_TAXI_LAUNCH': return 'text-purple-400';
      case 'EV_MASS_ADOPTION': return 'text-green-400';
      case 'AI_LOGISTICS_SCALING': return 'text-orange-400';
      case 'MULTIMODAL_INTEGRATION': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getCompanyColor = (company) => {
    const colors = {
      'Waymo (Alphabet)': 'text-blue-400',
      'Pony.ai': 'text-orange-400',
      'Cruise (GM)': 'text-green-400',
      'Tesla FSD': 'text-red-400',
      'Aurora Innovation': 'text-purple-400',
      'Motional': 'text-cyan-400',
      'Argo AI': 'text-yellow-400'
    };
    return colors[company] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-blue-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-400 mb-2">🚗🚁 TRANSPORTATION & AUTONOMOUS MOBILITY CENTER</h1>
            <p className="text-blue-300">2026 Autonomous Revolution | Flying Taxis | Electric Vehicles | AI Logistics | Connected Infrastructure | Mobility Innovation</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(mobilityPhase)}`}>{mobilityPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Transportation Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🤖 AUTONOMOUS</h3>
          <div className="text-2xl text-cyan-400">${mobilityMetrics.global_autonomous_vehicle_market_b}B</div>
          <div className="text-sm text-gray-400">Autonomous Vehicle Market</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🚁 FLYING TAXIS</h3>
          <div className="text-2xl text-orange-400">${mobilityMetrics.flying_taxi_market_b}B</div>
          <div className="text-sm text-gray-400">Flying Taxi Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">⚡ ELECTRIC</h3>
          <div className="text-2xl text-yellow-400">{mobilityMetrics.ev_sales_global_m}M</div>
          <div className="text-sm text-gray-400">Global EV Sales 2026</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">📊 MILES LOGGED</h3>
          <div className="text-2xl text-green-400">{mobilityMetrics.autonomous_miles_logged_m}M</div>
          <div className="text-sm text-gray-400">Autonomous Miles (US)</div>
        </div>
      </div>

      {/* Main Transportation Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Transportation Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🚗 TRANSPORTATION MARKET SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={transportationSegments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="segment" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }}
                formatter={(value, name) => [`${value}${name === 'market_b' ? 'B' : name === 'growth_rate' || name === 'deployment_rate' ? '%' : name === 'miles_logged_m' ? 'M' : 'K'}`, name]}
              />
              <Bar dataKey="market_b" fill="#06b6d4" name="Market Size ($B)" />
              <Bar dataKey="growth_rate" fill="#22c55e" name="Growth Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Mobility Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 MOBILITY TECHNOLOGY EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={mobilityMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_autonomous_b" fill="#22c55e" name="Autonomous Vehicles ($B)" />
              <Line type="monotone" dataKey="ev_sales_m" stroke="#0ea5e9" strokeWidth={3} name="EV Sales (M)" />
              <Line type="monotone" dataKey="flying_taxis_b" stroke="#8b5cf6" strokeWidth={2} name="Flying Taxis ($B)" />
              <Line type="monotone" dataKey="ai_logistics_b" stroke="#f59e0b" strokeWidth={2} name="AI Logistics ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Autonomous Vehicle Leaders & Flying Taxi Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🏆 AUTONOMOUS VEHICLE LEADERS</h2>
          <div className="space-y-3">
            {autonomousVehicleLeaders.slice(0, 5).map((leader, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-bold text-sm ${getCompanyColor(leader.company)}`}>{leader.company}</span>
                  <span className={getStatusColor(leader.safety_score)}>{leader.safety_score}% Safety</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Miles Logged</div>
                    <div className="text-cyan-400">{leader.miles_logged_m}M</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cities Active</div>
                    <div className="text-green-400">{leader.cities_active}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Valuation</div>
                    <div className="text-purple-400">${leader.valuation_b}B</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flying Taxi Deployments */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🚁 FLYING TAXI COMMERCIAL LAUNCHES</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={flyingTaxiDeployments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="aircraft_certified" tick={{ fill: '#fff' }} name="Aircraft Certified" />
              <YAxis dataKey="cities_planned" tick={{ fill: '#fff' }} name="Cities Planned" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}`, name]}
                labelFormatter={(label) => `Company: ${flyingTaxiDeployments.find(item => item.aircraft_certified === label)?.company || ''}`}
              />
              <Scatter dataKey="market_cap_b" fill="#8b5cf6" name="Market Cap ($B)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Electric Vehicle Adoption & AI Logistics Solutions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">⚡ ELECTRIC VEHICLE GLOBAL ADOPTION</h2>
          <div className="space-y-3">
            {electricVehicleAdoption.map((region, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{region.region}</span>
                  <span className="text-green-400">{region.market_share}% Share</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">EV Sales</div>
                    <div className="text-cyan-400">{region.ev_sales_m}M</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Charging Stations</div>
                    <div className="text-yellow-400">{region.charging_stations_k}K</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Incentives</div>
                    <div className="text-purple-400">${region.government_incentives_b}B</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🤖 AI-POWERED LOGISTICS SOLUTIONS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={aiLogisticsSolutions}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="solution" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="efficiency_gain" stackId="1" stroke="#ef4444" fill="#ef444433" name="Efficiency Gain %" />
              <Line type="monotone" dataKey="deployment_rate" stroke="#22c55e" strokeWidth={3} name="Deployment Rate %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Mobility Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🌐 CONNECTED VEHICLES</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Connected Vehicles</span>
              <span className="text-green-400">{mobilityMetrics.connected_vehicles_global_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>5G Integration</span>
              <span className="text-cyan-400">34.7%</span>
            </div>
            <div className="flex justify-between">
              <span>V2X Communication</span>
              <span className="text-yellow-400">23.8%</span>
            </div>
            <div className="flex justify-between">
              <span>AI Traffic Management</span>
              <span className="text-purple-400">89.4%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🚀 PERFORMANCE GAINS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>AI Logistics Efficiency</span>
              <span className="text-green-400">+{mobilityMetrics.ai_logistics_efficiency_gain}%</span>
            </div>
            <div className="flex justify-between">
              <span>Safety Improvement</span>
              <span className="text-cyan-400">+{mobilityMetrics.autonomous_safety_improvement}%</span>
            </div>
            <div className="flex justify-between">
              <span>Traffic Optimization Cities</span>
              <span className="text-yellow-400">{mobilityMetrics.traffic_optimization_cities}</span>
            </div>
            <div className="flex justify-between">
              <span>Multimodal Integration</span>
              <span className="text-purple-400">{mobilityMetrics.multimodal_integration_score}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">📊 INFRASTRUCTURE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Charging Stations</span>
              <span className="text-green-400">{mobilityMetrics.charging_stations_global_k}K</span>
            </div>
            <div className="flex justify-between">
              <span>Flying Taxi Cities</span>
              <span className="text-cyan-400">{mobilityMetrics.flying_taxi_cities_deployed}</span>
            </div>
            <div className="flex justify-between">
              <span>MaaS Users</span>
              <span className="text-yellow-400">{mobilityMetrics.mobility_as_service_users_m}M</span>
            </div>
            <div className="flex justify-between">
              <span>Freight Autonomous</span>
              <span className="text-purple-400">{mobilityMetrics.freight_autonomous_deployment}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 TRANSPORTATION & AUTONOMOUS MOBILITY SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">${mobilityMetrics.global_autonomous_vehicle_market_b}B</div>
            <div className="text-gray-400">Autonomous Vehicle Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{mobilityMetrics.ev_sales_global_m}M</div>
            <div className="text-gray-400">Global EV Sales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">${mobilityMetrics.flying_taxi_market_b}B</div>
            <div className="text-gray-400">Flying Taxi Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{mobilityMetrics.autonomous_miles_logged_m}M</div>
            <div className="text-gray-400">Autonomous Miles</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-blue-500 text-center text-gray-400">
        <p>🚗 2026 Transportation Command Center | Autonomous Vehicles | Flying Taxis | Electric Mobility | AI Logistics | Connected Infrastructure</p>
        <p className="text-blue-400">Research Sources: Forbes, StartUs Insights, Mordor Intelligence, Fortune Business Insights, Avenga, Deloitte Transportation</p>
      </div>
    </div>
  );
};

export default TransportationAutonomousMobilityIntelligenceCenter;