import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const SpaceOperationsLunarCommandCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [missionPhase, setMissionPhase] = useState('LUNAR_OPERATIONS_ACTIVE');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate mission phase changes
      const phases = ['LUNAR_OPERATIONS_ACTIVE', 'MARS_PREP_SEQUENCE', 'ASTEROID_DEFENSE_READY', 'ORBITAL_MANUFACTURING', 'CONSTELLATION_COORDINATION'];
      setMissionPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Space Operations Data
  const spaceVehicleData = [
    { name: 'Artemis II Crew', status: 99.8, missions: 1, type: 'Lunar Transit', ai_autonomy: 94.7 },
    { name: 'Starship Fleet', status: 98.5, missions: 24, type: 'Mars Cargo', ai_autonomy: 97.2 },
    { name: 'Blue Ghost Lander', status: 96.8, missions: 2, type: 'Lunar Surface', ai_autonomy: 95.9 },
    { name: 'RSGS Servicer', status: 97.4, missions: 4, type: 'Satellite Repair', ai_autonomy: 98.1 },
    { name: 'Neutron Rocket', status: 94.6, missions: 8, type: 'Satellite Deploy', ai_autonomy: 89.7 },
    { name: 'LOXSAT Demo', status: 98.9, missions: 1, type: 'Fuel Management', ai_autonomy: 92.3 }
  ];

  const lunarOperationsData = [
    { time: '00:00', rover_activity: 87, base_construction: 92, communication: 98, power_generation: 89 },
    { time: '04:00', rover_activity: 93, base_construction: 88, communication: 97, power_generation: 94 },
    { time: '08:00', rover_activity: 78, base_construction: 95, communication: 96, power_generation: 87 },
    { time: '12:00', rover_activity: 89, base_construction: 93, communication: 99, power_generation: 91 },
    { time: '16:00', rover_activity: 94, base_construction: 91, communication: 98, power_generation: 88 },
    { time: '20:00', rover_activity: 91, base_construction: 89, communication: 97, power_generation: 93 }
  ];

  const constellationData = [
    { name: 'Starlink Gen3', satellites: 7400, operational: 98.7, ai_managed: 97.8, data_throughput: 850 },
    { name: 'OneWeb Phase 2', satellites: 4200, operational: 96.4, ai_managed: 94.5, data_throughput: 420 },
    { name: 'Amazon Kuiper', satellites: 3200, operational: 95.8, ai_managed: 96.1, data_throughput: 680 },
    { name: 'Planet SuperDoves', satellites: 1800, operational: 97.2, ai_managed: 98.9, data_throughput: 340 },
    { name: 'BlackSky Gen3', satellites: 840, operational: 98.1, ai_managed: 97.5, data_throughput: 290 },
    { name: 'Capella X-SAR', satellites: 360, operational: 96.9, ai_managed: 95.7, data_throughput: 180 }
  ];

  const autonomousOperationsData = [
    { category: 'Lunar Construction', autonomy: 94.7, missions: 12, success_rate: 97.3 },
    { category: 'Satellite Servicing', autonomy: 96.8, missions: 24, success_rate: 98.1 },
    { category: 'Mars Preparation', autonomy: 89.5, missions: 8, success_rate: 94.6 },
    { category: 'Asteroid Defense', autonomy: 97.2, missions: 3, success_rate: 99.1 },
    { category: 'Orbital Manufacturing', autonomy: 91.4, missions: 15, success_rate: 95.8 },
    { category: 'Deep Space Probes', autonomy: 98.6, missions: 6, success_rate: 97.9 }
  ];

  const spaceTrafficData = [
    { hour: 0, active_objects: 34200, collision_risks: 23, ai_managed: 31800 },
    { hour: 4, active_objects: 34450, collision_risks: 18, ai_managed: 32100 },
    { hour: 8, active_objects: 34680, collision_risks: 31, ai_managed: 32350 },
    { hour: 12, active_objects: 34920, collision_risks: 15, ai_managed: 32580 },
    { hour: 16, active_objects: 35100, collision_risks: 27, ai_managed: 32750 },
    { hour: 20, active_objects: 35380, collision_risks: 12, ai_managed: 32920 }
  ];

  const missionMetrics = {
    artemis_ii_status: 'Pre-Launch Final Checks',
    lunar_base_progress: 67.8,
    mars_mission_prep: 43.2,
    asteroid_defense_readiness: 89.4,
    orbital_manufacturing_output: 156.7,
    satellite_servicing_missions: 24,
    autonomous_systems_online: 47,
    space_traffic_managed: 35380,
    ai_decision_accuracy: 97.8,
    mission_success_rate: 96.4,
    deep_space_communications: 'OPTIMAL',
    quantum_entanglement_links: 8,
    space_elevator_progress: 12.3
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'LUNAR_OPERATIONS_ACTIVE': return 'text-blue-400';
      case 'MARS_PREP_SEQUENCE': return 'text-red-400';
      case 'ASTEROID_DEFENSE_READY': return 'text-orange-400';
      case 'ORBITAL_MANUFACTURING': return 'text-purple-400';
      case 'CONSTELLATION_COORDINATION': return 'text-green-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#00f5ff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-cyan-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">🚀🌙 SPACE OPERATIONS & LUNAR COMMAND CENTER</h1>
            <p className="text-cyan-300">2026 Autonomous Spacecraft Operations | AI-Driven Mission Control | Lunar Base Management</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(missionPhase)}`}>{missionPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Mission Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🚀 ARTEMIS II STATUS</h3>
          <div className="text-2xl text-green-400">{missionMetrics.artemis_ii_status}</div>
          <div className="text-sm text-gray-400">Launch Window: Q1 2026</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">🏗️ LUNAR BASE PROGRESS</h3>
          <div className="text-2xl text-cyan-400">{missionMetrics.lunar_base_progress}%</div>
          <div className="text-sm text-gray-400">Autonomous Construction Active</div>
        </div>
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-2">🔴 MARS MISSION PREP</h3>
          <div className="text-2xl text-yellow-400">{missionMetrics.mars_mission_prep}%</div>
          <div className="text-sm text-gray-400">Starship Fleet Ready: 2027</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🛡️ ASTEROID DEFENSE</h3>
          <div className="text-2xl text-green-400">{missionMetrics.asteroid_defense_readiness}%</div>
          <div className="text-sm text-gray-400">AI Defense Grid Online</div>
        </div>
      </div>

      {/* Main Mission Control Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Space Vehicle Status */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🚀 2026 SPACE VEHICLE STATUS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spaceVehicleData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #0ff', color: '#0ff' }}
                formatter={(value, name) => [`${value}${name === 'missions' ? '' : '%'}`, name]}
              />
              <Bar dataKey="status" fill="#00f5ff" name="System Status" />
              <Bar dataKey="ai_autonomy" fill="#ff6b6b" name="AI Autonomy Level" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Lunar Operations Monitoring */}
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🌙 LUNAR OPERATIONS MONITORING</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lunarOperationsData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="time" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #ff6b00', color: '#ff6b00' }} />
              <Line type="monotone" dataKey="rover_activity" stroke="#00f5ff" strokeWidth={2} name="Rover Activity" />
              <Line type="monotone" dataKey="base_construction" stroke="#ff6b6b" strokeWidth={2} name="Base Construction" />
              <Line type="monotone" dataKey="communication" stroke="#4ecdc4" strokeWidth={2} name="Communication Link" />
              <Line type="monotone" dataKey="power_generation" stroke="#f9ca24" strokeWidth={2} name="Solar Power" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Satellite Constellation Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🛰️ CONSTELLATION MANAGEMENT</h2>
          <div className="space-y-3">
            {constellationData.map((constellation, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-400 font-bold">{constellation.name}</span>
                  <span className={getStatusColor(constellation.operational)}>{constellation.operational}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Satellites</div>
                    <div className="text-white">{constellation.satellites.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">AI Managed</div>
                    <div className="text-green-400">{constellation.ai_managed}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className="text-yellow-400">{constellation.data_throughput} Gbps</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autonomous Operations Analytics */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">🤖 AUTONOMOUS OPERATIONS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={autonomousOperationsData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="category" tick={{ fill: '#fff', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #4ade80', color: '#4ade80' }} />
              <Bar dataKey="autonomy" fill="#4ade80" name="Autonomy Level %" />
              <Line type="monotone" dataKey="success_rate" stroke="#ff6b6b" strokeWidth={3} name="Success Rate %" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Space Traffic & Manufacturing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🚦 AI SPACE TRAFFIC CONTROL</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={spaceTrafficData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', color: '#eab308' }} />
              <Area type="monotone" dataKey="active_objects" stackId="1" stroke="#00f5ff" fill="#00f5ff33" name="Active Objects" />
              <Area type="monotone" dataKey="ai_managed" stackId="2" stroke="#4ade80" fill="#4ade8033" name="AI Managed" />
              <Line type="monotone" dataKey="collision_risks" stroke="#ef4444" strokeWidth={3} name="Collision Risks" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏭 ORBITAL MANUFACTURING</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800 rounded p-4 text-center">
              <div className="text-3xl text-green-400 mb-2">{missionMetrics.orbital_manufacturing_output}</div>
              <div className="text-sm text-gray-400">Tons Manufactured</div>
            </div>
            <div className="bg-gray-800 rounded p-4 text-center">
              <div className="text-3xl text-blue-400 mb-2">{missionMetrics.satellite_servicing_missions}</div>
              <div className="text-sm text-gray-400">Servicing Missions</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Zero-G Electronics</span>
              <span className="text-green-400">94.7%</span>
            </div>
            <div className="flex justify-between">
              <span>Fiber Optic Cables</span>
              <span className="text-green-400">89.2%</span>
            </div>
            <div className="flex justify-between">
              <span>Pharmaceutical Crystals</span>
              <span className="text-yellow-400">76.8%</span>
            </div>
            <div className="flex justify-between">
              <span>Metal Alloys</span>
              <span className="text-green-400">91.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Mission Control Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-3">🛡️ PLANETARY DEFENSE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Near-Earth Objects</span>
              <span className="text-cyan-400">34,720</span>
            </div>
            <div className="flex justify-between">
              <span>Threat Assessment</span>
              <span className="text-green-400">CLEAR</span>
            </div>
            <div className="flex justify-between">
              <span>Defense Platforms</span>
              <span className="text-yellow-400">12 READY</span>
            </div>
            <div className="flex justify-between">
              <span>AI Monitoring</span>
              <span className="text-green-400">24/7 ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🌌 DEEP SPACE NETWORK</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Quantum Entanglement Links</span>
              <span className="text-purple-400">{missionMetrics.quantum_entanglement_links}</span>
            </div>
            <div className="flex justify-between">
              <span>Deep Space Probes</span>
              <span className="text-cyan-400">47 ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>Communication Delay</span>
              <span className="text-green-400">1.3s (MOON)</span>
            </div>
            <div className="flex justify-between">
              <span>Data Integrity</span>
              <span className="text-green-400">99.97%</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🏗️ SPACE INFRASTRUCTURE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Space Elevator Progress</span>
              <span className="text-yellow-400">{missionMetrics.space_elevator_progress}%</span>
            </div>
            <div className="flex justify-between">
              <span>Orbital Stations</span>
              <span className="text-cyan-400">8 OPERATIONAL</span>
            </div>
            <div className="flex justify-between">
              <span>Mining Operations</span>
              <span className="text-orange-400">3 ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>Space Tugs</span>
              <span className="text-green-400">24 DEPLOYED</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 SPACE OPERATIONS INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">{missionMetrics.autonomous_systems_online}</div>
            <div className="text-gray-400">Autonomous Systems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{missionMetrics.ai_decision_accuracy}%</div>
            <div className="text-gray-400">AI Decision Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{missionMetrics.mission_success_rate}%</div>
            <div className="text-gray-400">Mission Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{(missionMetrics.space_traffic_managed / 1000).toFixed(1)}K</div>
            <div className="text-gray-400">Objects Tracked</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-cyan-500 text-center text-gray-400">
        <p>🚀 2026 Space Operations Command Center | Autonomous Mission Control | AI-Driven Space Exploration | Real-time Lunar Base Monitoring</p>
        <p className="text-cyan-400">Research Sources: NASA, ESA, SpaceX, StartUs Insights, Forbes, Johns Hopkins SAIS, Orbital Today, ArXiv Space AI</p>
      </div>
    </div>
  );
};

export default SpaceOperationsLunarCommandCenter;