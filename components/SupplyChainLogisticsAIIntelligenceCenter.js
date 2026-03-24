import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const SupplyChainLogisticsAIIntelligenceCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [logisticsPhase, setLogisticsPhase] = useState('AI_AUTOMATION_DEPLOYMENT');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate logistics phase changes
      const phases = ['AI_AUTOMATION_DEPLOYMENT', 'AUTONOMOUS_ROBOT_SCALING', 'SMART_WAREHOUSE_EXPANSION', 'PREDICTIVE_ANALYTICS_INTEGRATION', 'END_TO_END_OPTIMIZATION'];
      setLogisticsPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Supply Chain & Logistics Data
  const logisticsSegments = [
    { segment: 'Logistics Automation Systems', market_b: 90.8, growth_rate: 9.8, adoption_rate: 67, facilities_automated: 45600 },
    { segment: 'AI in Supply Chain Management', market_b: 15.4, growth_rate: 42.7, adoption_rate: 78, companies_using: 12400 },
    { segment: 'Autonomous Mobile Robots (AMR)', market_b: 3.4, growth_rate: 17.0, adoption_rate: 34, robots_deployed_k: 890 },
    { segment: 'Warehouse Robotics & Automation', market_b: 7.4, growth_rate: 16.8, adoption_rate: 56, warehouses_automated: 23400 },
    { segment: 'Smart Transportation & Delivery', market_b: 45.7, growth_rate: 18.9, adoption_rate: 72, vehicles_connected_m: 12.4 },
    { segment: 'Predictive Analytics & IoT', market_b: 23.6, growth_rate: 34.5, adoption_rate: 89, sensors_deployed_m: 234 },
    { segment: 'Blockchain & Supply Chain', market_b: 8.9, growth_rate: 28.3, adoption_rate: 23, transactions_tracked_b: 567 },
    { segment: 'Digital Twin Logistics', market_b: 6.7, growth_rate: 45.8, adoption_rate: 34, digital_twins: 8900 }
  ];

  const logisticsMarketEvolution = [
    { year: '2024', total_logistics_b: 123.4, ai_supply_chain_b: 7.3, amr_b: 2.1, warehouse_robotics_b: 5.8 },
    { year: '2025', total_logistics_b: 145.7, ai_supply_chain_b: 11.2, amr_b: 2.8, warehouse_robotics_b: 6.9 },
    { year: '2026', total_logistics_b: 201.9, ai_supply_chain_b: 15.4, amr_b: 3.4, warehouse_robotics_b: 7.4 },
    { year: '2027E', total_logistics_b: 245.6, ai_supply_chain_b: 22.8, amr_b: 4.2, warehouse_robotics_b: 9.1 },
    { year: '2028E', total_logistics_b: 298.4, ai_supply_chain_b: 34.7, amr_b: 5.6, warehouse_robotics_b: 11.8 },
    { year: '2030E', total_logistics_b: 456.8, ai_supply_chain_b: 63.8, amr_b: 8.9, warehouse_robotics_b: 18.4 }
  ];

  const aiLogisticsApplications = [
    { application: 'Demand Forecasting & Planning', effectiveness: 94.2, deployment_rate: 89, cost_reduction: 23.8, accuracy_improvement: 34 },
    { application: 'Inventory Optimization', effectiveness: 91.7, deployment_rate: 78, cost_reduction: 45.6, accuracy_improvement: 28 },
    { application: 'Route Optimization & Delivery', effectiveness: 87.4, deployment_rate: 67, cost_reduction: 34.7, accuracy_improvement: 42 },
    { application: 'Predictive Maintenance', effectiveness: 93.8, deployment_rate: 72, cost_reduction: 56.3, accuracy_improvement: 67 },
    { application: 'Quality Control & Inspection', effectiveness: 96.2, deployment_rate: 54, cost_reduction: 38.9, accuracy_improvement: 78 },
    { application: 'Autonomous Sorting & Picking', effectiveness: 89.6, deployment_rate: 45, cost_reduction: 67.4, accuracy_improvement: 45 }
  ];

  const autonomousRobotDeployments = [
    { robot_type: 'Autonomous Mobile Robots (AMR)', units_deployed_k: 890, efficiency_gain: 45.7, cost_per_unit_k: 89, roi_months: 8 },
    { robot_type: 'Automated Guided Vehicles (AGV)', units_deployed_k: 1240, efficiency_gain: 34.8, cost_per_unit_k: 67, roi_months: 12 },
    { robot_type: 'Picking & Sorting Robots', units_deployed_k: 567, efficiency_gain: 67.9, cost_per_unit_k: 134, roi_months: 6 },
    { robot_type: 'Autonomous Delivery Drones', units_deployed_k: 234, efficiency_gain: 78.4, cost_per_unit_k: 45, roi_months: 4 },
    { robot_type: 'Warehouse Inspection Robots', units_deployed_k: 123, efficiency_gain: 89.2, cost_per_unit_k: 156, roi_months: 10 },
    { robot_type: 'Loading & Unloading Robots', units_deployed_k: 345, efficiency_gain: 52.6, cost_per_unit_k: 234, roi_months: 9 }
  ];

  const smartWarehouseMetrics = [
    { facility: 'Amazon Fulfillment Centers', automation_level: 87, robots_deployed: 12400, throughput_increase: 67, cost_reduction: 34 },
    { facility: 'Alibaba Smart Warehouses', automation_level: 94, robots_deployed: 8900, throughput_increase: 78, cost_reduction: 45 },
    { facility: 'FedEx Automated Hubs', automation_level: 72, robots_deployed: 5600, throughput_increase: 45, cost_reduction: 28 },
    { facility: 'DHL Smart Logistics', automation_level: 68, robots_deployed: 4500, throughput_increase: 52, cost_reduction: 31 },
    { facility: 'UPS Automated Facilities', automation_level: 74, robots_deployed: 6700, throughput_increase: 56, cost_reduction: 29 },
    { facility: 'Walmart Distribution Centers', automation_level: 69, robots_deployed: 7800, throughput_increase: 48, cost_reduction: 33 }
  ];

  const supplyChainOptimization = [
    { metric: 'End-to-End Visibility', improvement: 78.4, ai_powered: true, companies_adopted: 12400 },
    { metric: 'Inventory Turnover Rate', improvement: 45.7, ai_powered: true, companies_adopted: 8900 },
    { metric: 'Order Fulfillment Speed', improvement: 67.9, ai_powered: true, companies_adopted: 15600 },
    { metric: 'Demand Forecast Accuracy', improvement: 34.8, ai_powered: true, companies_adopted: 18900 },
    { metric: 'Supply Chain Resilience', improvement: 52.6, ai_powered: true, companies_adopted: 6700 },
    { metric: 'Carbon Footprint Reduction', improvement: 28.3, ai_powered: true, companies_adopted: 9800 }
  ];

  const deliveryTechnologyAdoption = [
    { technology: 'Autonomous Delivery Vehicles', adoption_rate: 23, efficiency_gain: 56, cost_per_delivery: 2.34, coverage_cities: 45 },
    { technology: 'Drone Delivery Networks', adoption_rate: 12, efficiency_gain: 78, cost_per_delivery: 1.89, coverage_cities: 23 },
    { technology: 'Smart Lockers & Collection', adoption_rate: 78, efficiency_gain: 34, cost_per_delivery: 0.89, coverage_cities: 234 },
    { technology: 'Real-time Route Optimization', adoption_rate: 89, efficiency_gain: 28, cost_per_delivery: 3.45, coverage_cities: 567 },
    { technology: 'Predictive Demand Placement', adoption_rate: 67, efficiency_gain: 45, cost_per_delivery: 2.78, coverage_cities: 156 },
    { technology: 'Micro-Fulfillment Centers', adoption_rate: 34, efficiency_gain: 67, cost_per_delivery: 1.56, coverage_cities: 89 }
  ];

  const logisticsMetrics = {
    global_logistics_automation_b: 90.8,
    ai_supply_chain_market_b: 15.4,
    amr_market_b: 3.4,
    warehouse_robotics_b: 7.4,
    smart_transportation_b: 45.7,
    robots_deployed_globally_k: 2700,
    warehouses_automated: 23400,
    supply_chain_cost_reduction: 34.7,
    delivery_efficiency_improvement: 56.8,
    inventory_accuracy_ai: 94.2,
    predictive_maintenance_uptime: 96.7,
    autonomous_delivery_coverage: 234,
    digital_twin_implementations: 8900,
    blockchain_transactions_tracked_b: 567
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'AI_AUTOMATION_DEPLOYMENT': return 'text-blue-400';
      case 'AUTONOMOUS_ROBOT_SCALING': return 'text-purple-400';
      case 'SMART_WAREHOUSE_EXPANSION': return 'text-green-400';
      case 'PREDICTIVE_ANALYTICS_INTEGRATION': return 'text-orange-400';
      case 'END_TO_END_OPTIMIZATION': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const getRobotColor = (robotType) => {
    const colors = {
      'Autonomous Mobile Robots (AMR)': 'text-blue-400',
      'Automated Guided Vehicles (AGV)': 'text-green-400',
      'Picking & Sorting Robots': 'text-purple-400',
      'Autonomous Delivery Drones': 'text-orange-400',
      'Warehouse Inspection Robots': 'text-cyan-400',
      'Loading & Unloading Robots': 'text-yellow-400'
    };
    return colors[robotType] || 'text-white';
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-blue-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-400 mb-2">🚚🤖 SUPPLY CHAIN & LOGISTICS AI INTELLIGENCE CENTER</h1>
            <p className="text-blue-300">2026 Logistics Revolution | AI Automation | Autonomous Robots | Smart Warehouses | Predictive Analytics | Digital Supply Chains</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(logisticsPhase)}`}>{logisticsPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Supply Chain Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">💰 AUTOMATION MARKET</h3>
          <div className="text-2xl text-cyan-400">${logisticsMetrics.global_logistics_automation_b}B</div>
          <div className="text-sm text-gray-400">Logistics Automation 2026</div>
        </div>
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-purple-400 mb-2">🤖 AI SUPPLY CHAIN</h3>
          <div className="text-2xl text-orange-400">${logisticsMetrics.ai_supply_chain_market_b}B</div>
          <div className="text-sm text-gray-400">AI Supply Chain Market</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🏭 ROBOTS DEPLOYED</h3>
          <div className="text-2xl text-yellow-400">{logisticsMetrics.robots_deployed_globally_k}K</div>
          <div className="text-sm text-gray-400">Global Robot Fleet</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">📈 EFFICIENCY GAIN</h3>
          <div className="text-2xl text-green-400">{logisticsMetrics.delivery_efficiency_improvement}%</div>
          <div className="text-sm text-gray-400">Delivery Improvement</div>
        </div>
      </div>

      {/* Main Supply Chain & Logistics Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Logistics Market Segments */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">📦 SUPPLY CHAIN & LOGISTICS SEGMENTS 2026</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={logisticsSegments}>
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

        {/* Logistics Market Evolution */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 LOGISTICS TECHNOLOGY EVOLUTION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={logisticsMarketEvolution}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="year" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="total_logistics_b" fill="#22c55e" name="Total Logistics ($B)" />
              <Line type="monotone" dataKey="ai_supply_chain_b" stroke="#0ea5e9" strokeWidth={3} name="AI Supply Chain ($B)" />
              <Line type="monotone" dataKey="amr_b" stroke="#8b5cf6" strokeWidth={2} name="AMR Market ($B)" />
              <Line type="monotone" dataKey="warehouse_robotics_b" stroke="#f59e0b" strokeWidth={2} name="Warehouse Robotics ($B)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Logistics Applications & Autonomous Robots */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🤖 AI LOGISTICS APPLICATIONS</h2>
          <div className="space-y-3">
            {aiLogisticsApplications.map((app, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-sm">{app.application}</span>
                  <span className={getStatusColor(app.effectiveness)}>{app.effectiveness}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Deployment</div>
                    <div className="text-cyan-400">{app.deployment_rate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-green-400">{app.cost_reduction}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Accuracy Gain</div>
                    <div className="text-purple-400">+{app.accuracy_improvement}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autonomous Robot Deployments */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🤖 AUTONOMOUS ROBOT DEPLOYMENTS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={autonomousRobotDeployments}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="units_deployed_k" tick={{ fill: '#fff' }} name="Units Deployed (K)" />
              <YAxis dataKey="efficiency_gain" tick={{ fill: '#fff' }} name="Efficiency Gain %" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'units_deployed_k' ? 'K' : '%'}`, name]}
                labelFormatter={(label) => `Robot: ${autonomousRobotDeployments.find(item => item.units_deployed_k === label)?.robot_type || ''}`}
              />
              <Scatter dataKey="roi_months" fill="#8b5cf6" name="ROI Months" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Smart Warehouses & Supply Chain Optimization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🏭 SMART WAREHOUSE FACILITIES</h2>
          <div className="space-y-3">
            {smartWarehouseMetrics.map((facility, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-400 font-bold text-sm">{facility.facility}</span>
                  <span className={getStatusColor(facility.automation_level)}>{facility.automation_level}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Robots</div>
                    <div className="text-cyan-400">{facility.robots_deployed.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput+</div>
                    <div className="text-green-400">{facility.throughput_increase}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cost Reduction</div>
                    <div className="text-purple-400">{facility.cost_reduction}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">⚙️ SUPPLY CHAIN OPTIMIZATION METRICS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={supplyChainOptimization}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="metric" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ef4444', color: '#ef4444' }} />
              <Area type="monotone" dataKey="improvement" stackId="1" stroke="#ef4444" fill="#ef444433" name="Improvement %" />
              <Line type="monotone" dataKey="companies_adopted" stroke="#22c55e" strokeWidth={3} name="Companies Adopted" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advanced Logistics Technology Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">📊 SMART ANALYTICS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Inventory Accuracy (AI)</span>
              <span className="text-green-400">{logisticsMetrics.inventory_accuracy_ai}%</span>
            </div>
            <div className="flex justify-between">
              <span>Predictive Maintenance Uptime</span>
              <span className="text-cyan-400">{logisticsMetrics.predictive_maintenance_uptime}%</span>
            </div>
            <div className="flex justify-between">
              <span>Cost Reduction Average</span>
              <span className="text-yellow-400">{logisticsMetrics.supply_chain_cost_reduction}%</span>
            </div>
            <div className="flex justify-between">
              <span>Digital Twins Deployed</span>
              <span className="text-purple-400">{logisticsMetrics.digital_twin_implementations.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🚛 DELIVERY TECH</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Automated Warehouses</span>
              <span className="text-green-400">{logisticsMetrics.warehouses_automated.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Delivery Coverage</span>
              <span className="text-cyan-400">{logisticsMetrics.autonomous_delivery_coverage} Cities</span>
            </div>
            <div className="flex justify-between">
              <span>Smart Transportation</span>
              <span className="text-yellow-400">${logisticsMetrics.smart_transportation_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Robots Deployed Globally</span>
              <span className="text-purple-400">{logisticsMetrics.robots_deployed_globally_k}K</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">🔗 BLOCKCHAIN & TRACEABILITY</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Transactions Tracked</span>
              <span className="text-green-400">{logisticsMetrics.blockchain_transactions_tracked_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>AMR Market Size</span>
              <span className="text-cyan-400">${logisticsMetrics.amr_market_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Warehouse Robotics</span>
              <span className="text-yellow-400">${logisticsMetrics.warehouse_robotics_b}B</span>
            </div>
            <div className="flex justify-between">
              <span>Logistics Automation</span>
              <span className="text-purple-400">${logisticsMetrics.global_logistics_automation_b}B</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 SUPPLY CHAIN & LOGISTICS AI INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">${logisticsMetrics.global_logistics_automation_b}B</div>
            <div className="text-gray-400">Logistics Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">${logisticsMetrics.ai_supply_chain_market_b}B</div>
            <div className="text-gray-400">AI Supply Chain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{logisticsMetrics.robots_deployed_globally_k}K</div>
            <div className="text-gray-400">Robots Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{logisticsMetrics.inventory_accuracy_ai}%</div>
            <div className="text-gray-400">AI Accuracy</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-blue-500 text-center text-gray-400">
        <p>🚚 2026 Supply Chain Command Center | AI Automation | Autonomous Robots | Smart Warehouses | Predictive Analytics | End-to-End Optimization</p>
        <p className="text-blue-400">Research Sources: MarketsandMarkets, Fortune Business Insights, Grand View Research, Logistics Viewpoints, Research and Markets</p>
      </div>
    </div>
  );
};

export default SupplyChainLogisticsAIIntelligenceCenter;