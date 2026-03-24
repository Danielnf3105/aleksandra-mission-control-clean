import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const AerospaceAviationIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aviationPhase, setAviationPhase] = useState('eVTOL_COMMERCIALIZATION');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate aerospace phase changes
      const phases = ['eVTOL_COMMERCIALIZATION', 'AUTONOMOUS_AIRCRAFT_SCALING', 'URBAN_AIR_MOBILITY_DEPLOYMENT', 'ELECTRIC_PROPULSION_ADVANCEMENT', 'ADVANCED_AIR_MOBILITY_EXPANSION'];
      setAviationPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Aerospace & Aviation Data
  const aviationSegments = [
    { segment: 'eVTOL Aircraft & Urban Air Mobility', market_b: 1.4, growth_rate: 28.5, adoption_rate: 12, aircraft_in_development: 234 },
    { segment: 'Autonomous Aircraft Systems', market_b: 10.7, growth_rate: 21.2, adoption_rate: 23, autonomous_flights: 12400 },
    { segment: 'Electric Propulsion Aircraft', market_b: 8.9, growth_rate: 35.3, adoption_rate: 34, electric_aircraft: 890 },
    { segment: 'Advanced Air Mobility (AAM)', market_b: 6.2, growth_rate: 45.7, adoption_rate: 15, aam_operations: 2340 },
    { segment: 'Commercial Aerospace & Defense', market_b: 156.8, growth_rate: 8.9, adoption_rate: 89, aircraft_orders: 4560 },
    { segment: 'Space Launch & Satellites', market_b: 23.4, growth_rate: 18.7, adoption_rate: 67, satellite_launches: 345 },
    { segment: 'Drone Technology & Services', market_b: 45.6, growth_rate: 34.2, adoption_rate: 78, drones_deployed_k: 567 },
    { segment: 'Aviation Digital Technologies', market_b: 12.8, growth_rate: 42.3, adoption_rate: 56, digitized_airports: 1890 }
  ];

  const aviationMarketEvolution = [
    { year: '2024', total_aviation_b: 234.6, evtol_b: 0.76, autonomous_b: 6.8, aam_b: 3.2 },
    { year: '2025', total_aviation_b: 267.9, evtol_b: 1.1, autonomous_b: 8.9, aam_b: 4.7 },
    { year: '2026', total_aviation_b: 298.4, evtol_b: 1.4, autonomous_b: 10.7, aam_b: 6.2 },
    { year: '2027E', total_aviation_b: 345.7, evtol_b: 2.1, autonomous_b: 13.8, aam_b: 9.4 },
    { year: '2028E', total_aviation_b: 398.2, evtol_b: 3.4, autonomous_b: 17.9, aam_b: 14.2 },
    { year: '2030E', total_aviation_b: 567.8, evtol_b: 6.8, autonomous_b: 29.7, aam_b: 29.7 }
  ];

  const evtolManufacturers = [
    { company: 'Joby Aviation', market_cap_b: 2.8, aircraft_orders: 450, certification_status: 'Phase 3', range_km: 241 },
    { company: 'Archer Aviation', market_cap_b: 1.9, aircraft_orders: 320, certification_status: 'Phase 2', range_km: 193 },
    { company: 'Vertical Aerospace', market_cap_b: 1.2, aircraft_orders: 280, certification_status: 'Phase 2', range_km: 160 },
    { company: 'EHang Holdings', market_cap_b: 0.8, aircraft_orders: 890, certification_status: 'Certified', range_km: 35 },
    { company: 'Lilium', market_cap_b: 0.6, aircraft_orders: 156, certification_status: 'Phase 1', range_km: 175 },
    { company: 'Eve Air Mobility', market_cap_b: 1.4, aircraft_orders: 567, certification_status: 'Phase 2', range_km: 100 },
    { company: 'Wisk Aero', market_cap_b: 0.9, aircraft_orders: 123, certification_status: 'Phase 1', range_km: 145 }
  ];

  const autonomousAircraftApplications = [
    { application: 'Cargo & Logistics Delivery', efficiency_gain: 67.8, cost_reduction: 45.2, deployment_rate: 78, safety_improvement: 89 },
    { application: 'Passenger Transportation', efficiency_gain: 45.3, cost_reduction: 23.8, deployment_rate: 12, safety_improvement: 94 },
    { application: 'Search & Rescue Operations', efficiency_gain: 89.4, cost_reduction: 34.7, deployment_rate: 67, safety_improvement: 87 },
    { application: 'Agricultural Monitoring', efficiency_gain: 78.9, cost_reduction: 56.4, deployment_rate: 89, safety_improvement: 76 },
    { application: 'Border & Security Patrol', efficiency_gain: 56.7, cost_reduction: 38.9, deployment_rate: 54, safety_improvement: 92 },
    { application: 'Emergency Medical Services', efficiency_gain: 72.3, cost_reduction: 28.6, deployment_rate: 34, safety_improvement: 96 }
  ];

  const urbanAirMobilityMetrics = [
    { city: 'Los Angeles', vertiports: 12, air_taxi_routes: 45, daily_flights: 234, certification_progress: 78 },
    { city: 'New York City', vertiports: 8, air_taxi_routes: 34, daily_flights: 189, certification_progress: 67 },
    { city: 'Miami', vertiports: 15, air_taxi_routes: 56, daily_flights: 312, certification_progress: 89 },
    { city: 'San Francisco', vertiports: 6, air_taxi_routes: 23, daily_flights: 145, certification_progress: 72 },
    { city: 'Dubai', vertiports: 18, air_taxi_routes: 67, daily_flights: 456, certification_progress: 94 },
    { city: 'Singapore', vertiports: 10, air_taxi_routes: 38, daily_flights: 278, certification_progress: 85 },
    { city: 'Tokyo', vertiports: 14, air_taxi_routes: 42, daily_flights: 298, certification_progress: 73 }
  ];

  const electricAircraftDevelopment = [
    { aircraft_type: 'Regional Electric Aircraft', development_stage: 'Flight Testing', range_km: 400, passenger_capacity: 19, market_readiness: 68 },
    { aircraft_type: 'Electric Air Taxis (eVTOL)', development_stage: 'Certification', range_km: 180, passenger_capacity: 4, market_readiness: 78 },
    { aircraft_type: 'Electric Cargo Drones', development_stage: 'Commercial Operations', range_km: 80, passenger_capacity: 0, market_readiness: 89 },
    { aircraft_type: 'Hybrid-Electric Commuter', development_stage: 'Prototype Testing', range_km: 800, passenger_capacity: 9, market_readiness: 45 },
    { aircraft_type: 'Electric Training Aircraft', development_stage: 'In Service', range_km: 120, passenger_capacity: 2, market_readiness: 94 },
    { aircraft_type: 'Electric Light Sport Aircraft', development_stage: 'Commercial Sales', range_km: 200, passenger_capacity: 2, market_readiness: 87 }
  ];

  const aerospaceInvestmentTrends = [
    { investment_area: 'eVTOL Development', funding_2026_b: 3.4, investor_interest: 94, risk_level: 'High', expected_roi: 345 },
    { investment_area: 'Autonomous Flight Systems', funding_2026_b: 2.8, investor_interest: 87, risk_level: 'Medium', expected_roi: 267 },
    { investment_area: 'Electric Propulsion', funding_2026_b: 1.9, investor_interest: 78, risk_level: 'Medium', expected_roi: 189 },
    { investment_area: 'Urban Air Mobility Infrastructure', funding_2026_b: 4.2, investor_interest: 89, risk_level: 'Low', expected_roi: 156 },
    { investment_area: 'Advanced Air Traffic Management', funding_2026_b: 1.6, investor_interest: 72, risk_level: 'Low', expected_roi: 234 },
    { investment_area: 'Sustainable Aviation Fuels', funding_2026_b: 2.3, investor_interest: 85, risk_level: 'Medium', expected_roi: 178 }
  ];

  const aviationMetrics = {
    global_aviation_market_b: 298.4,
    evtol_aircraft_market_b: 1.4,
    autonomous_aircraft_market_b: 10.7,
    advanced_air_mobility_b: 6.2,
    electric_propulsion_b: 8.9,
    aircraft_in_development: 2340,
    autonomous_flights_monthly: 12400,
    vertiports_operational: 89,
    electric_aircraft_certified: 34,
    urban_air_routes_active: 267,
    aviation_safety_improvement: 89.4,
    fuel_efficiency_gain: 45.7,
    emission_reduction_target: 67.8,
    commercial_evtol_orders: 3456
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'eVTOL_COMMERCIALIZATION': return 'text-cyan-400';
      case 'AUTONOMOUS_AIRCRAFT_SCALING': return 'text-purple-400';
      case 'URBAN_AIR_MOBILITY_DEPLOYMENT': return 'text-green-400';
      case 'ELECTRIC_PROPULSION_ADVANCEMENT': return 'text-orange-400';
      case 'ADVANCED_AIR_MOBILITY_EXPANSION': return 'text-blue-400';
      default: return 'text-white';
    }
  };

  const getCompanyColor = (company) => {
    const colors = {
      'Joby Aviation': 'text-blue-400',
      'Archer Aviation': 'text-green-400',
      'Vertical Aerospace': 'text-purple-400',
      'EHang Holdings': 'text-orange-400',
      'Lilium': 'text-cyan-400',
      'Eve Air Mobility': 'text-yellow-400',
      'Wisk Aero': 'text-red-400'
    };
    return colors[company] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-cyan-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">✈️🚁 AEROSPACE & AVIATION INTELLIGENCE CENTER</h1>
            <p className="text-cyan-300">2026 Aviation Revolution | eVTOL Aircraft | Autonomous Flight | Urban Air Mobility | Electric Propulsion | Advanced Air Mobility</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(aviationPhase)}`}>{aviationPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Aerospace Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">💰 AVIATION MARKET</h3>
          <div className="text-2xl text-orange-400">${aviationMetrics.global_aviation_market_b}B</div>
          <div className="text-sm text-gray-400">Global Aviation Market 2026</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🚁 eVTOL MARKET</h3>
          <div className="text-2xl text-blue-400">${aviationMetrics.evtol_aircraft_market_b}B</div>
          <div className="text-sm text-gray-400">eVTOL Aircraft Market</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🤖 AUTONOMOUS</h3>
          <div className="text-2xl text-green-400">${aviationMetrics.autonomous_aircraft_market_b}B</div>
          <div className="text-sm text-gray-400">Autonomous Aircraft</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">⚡ ELECTRIC</h3>
          <div className="text-2xl text-cyan-400">${aviationMetrics.electric_propulsion_b}B</div>
          <div className="text-sm text-gray-400">Electric Propulsion</div>
        </div>
      </div>

      {/* Main Aerospace Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Aviation Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">✈️ AEROSPACE & AVIATION SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aviationSegments}>
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

        {/* Aviation Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 AVIATION TECHNOLOGY EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={aviationMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_aviation_b" fill="#22c55e" name="Total Aviation ($B)" />
              <Line type="monotone" dataKey="evtol_b" stroke="#0ea5e9" strokeWidth={3} name="eVTOL ($B)" />
              <Line type="monotone" dataKey="autonomous_b" stroke="#8b5cf6" strokeWidth={2} name="Autonomous ($B)" />
              <Line type="monotone" dataKey="aam_b" stroke="#f59e0b" strokeWidth={2} name="AAM ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* eVTOL Manufacturers & Autonomous Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🚁 eVTOL AIRCRAFT MANUFACTURERS</h2>
          <div className="space-y-3">
            {evtolManufacturers.map((company, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{company.company}</span>
                  <span className={getCompanyColor(company.company)}>${company.market_cap_b}B</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Orders</div>
                    <div className="text-cyan-400">{company.aircraft_orders}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Certification</div>
                    <div className="text-green-400">{company.certification_status}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Range</div>
                    <div className="text-purple-400">{company.range_km}km</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autonomous Aircraft Applications */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🤖 AUTONOMOUS AIRCRAFT APPLICATIONS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={autonomousAircraftApplications}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="efficiency_gain" tick={{ fill: '#fff' }} name="Efficiency Gain %" />
              <YAxis dataKey="safety_improvement" tick={{ fill: '#fff' }} name="Safety Improvement %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}%`, name]}
                labelFormatter={(label) => `Application: ${autonomousAircraftApplications.find(item => item.efficiency_gain === label)?.application || ''}`}
              />
              <Scatter dataKey="deployment_rate" fill="#8b5cf6" name="Deployment Rate %" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Urban Air Mobility & Electric Aircraft Development */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🏙️ URBAN AIR MOBILITY DEPLOYMENTS</h2>
          <div className="space-y-3">
            {urbanAirMobilityMetrics.map((city, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{city.city}</span>
                  <span className={getStatusColor(city.certification_progress)}>{city.certification_progress}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Vertiports</div>
                    <div className="text-cyan-400">{city.vertiports}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Routes</div>
                    <div className="text-green-400">{city.air_taxi_routes}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Daily Flights</div>
                    <div className="text-purple-400">{city.daily_flights}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">⚡ ELECTRIC AIRCRAFT DEVELOPMENT</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={electricAircraftDevelopment}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="aircraft_type" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="market_readiness" stackId="1" stroke="#ef4444" fill="#ef444433" name="Market Readiness %" />
              <Line type="monotone" dataKey="range_km" stroke="#22c55e" strokeWidth={3} name="Range (km)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Aviation Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🚁 AIR MOBILITY</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Aircraft in Development</span>
              <span className="text-green-400">{aviationMetrics.aircraft_in_development.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Flights (Monthly)</span>
              <span className="text-cyan-400">{aviationMetrics.autonomous_flights_monthly.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Operational Vertiports</span>
              <span className="text-yellow-400">{aviationMetrics.vertiports_operational}</span>
            </div>
            <div className="flex justify-between">
              <span>Active Urban Air Routes</span>
              <span className="text-purple-400">{aviationMetrics.urban_air_routes_active}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">⚡ ELECTRIC AVIATION</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Electric Aircraft Certified</span>
              <span className="text-green-400">{aviationMetrics.electric_aircraft_certified}</span>
            </div>
            <div className="flex justify-between">
              <span>Commercial eVTOL Orders</span>
              <span className="text-cyan-400">{aviationMetrics.commercial_evtol_orders.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Fuel Efficiency Gain</span>
              <span className="text-yellow-400">{aviationMetrics.fuel_efficiency_gain}%</span>
            </div>
            <div className="flex justify-between">
              <span>Emission Reduction Target</span>
              <span className="text-purple-400">{aviationMetrics.emission_reduction_target}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">📈 PERFORMANCE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Safety Improvement</span>
              <span className="text-green-400">{aviationMetrics.aviation_safety_improvement}%</span>
            </div>
            <div className="flex justify-between">
              <span>Advanced Air Mobility</span>
              <span className="text-cyan-400">${aviationMetrics.advanced_air_mobility_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>eVTOL Market</span>
              <span className="text-yellow-400">${aviationMetrics.evtol_aircraft_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Aircraft</span>
              <span className="text-purple-400">${aviationMetrics.autonomous_aircraft_market_b}B</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 AEROSPACE & AVIATION INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">${aviationMetrics.global_aviation_market_b}B</div>
            <div className="text-gray-400">Global Aviation Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">${aviationMetrics.evtol_aircraft_market_b}B</div>
            <div className="text-gray-400">eVTOL Aircraft Market</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">${aviationMetrics.autonomous_aircraft_market_b}B</div>
            <div className="text-gray-400">Autonomous Aircraft</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{aviationMetrics.aviation_safety_improvement}%</div>
            <div className="text-gray-400">Safety Improvement</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-cyan-500 text-center text-gray-400">
        <p>✈️ 2026 Aerospace Command Center | eVTOL Aircraft | Autonomous Flight | Urban Air Mobility | Electric Propulsion | Advanced Air Mobility | Future of Aviation</p>
        <p className="text-cyan-400">Research Sources: Fortune Business Insights, Mordor Intelligence, Grand View Research, StartUs Insights, Eve Air Mobility, FAA Aerospace Forecasts</p>
      </div>
    </div>
  );
};

export default AerospaceAviationIntelligenceCenter;