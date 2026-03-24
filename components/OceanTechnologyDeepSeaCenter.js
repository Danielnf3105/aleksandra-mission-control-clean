import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const OceanTechnologyDeepSeaCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [operationalPhase, setOperationalPhase] = useState('DEEP_SEA_EXPLORATION_ACTIVE');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate operational phase changes
      const phases = ['DEEP_SEA_EXPLORATION_ACTIVE', 'MINING_OPERATIONS_PHASE', 'MARINE_CONSERVATION_MODE', 'DEFENSE_PATROL_ACTIVE', 'SENSOR_ARRAY_DEPLOYED'];
      setOperationalPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Ocean Technology Data
  const autonomousVehicleFleet = [
    { name: 'AUV Sentry', status: 98.7, missions: 47, type: 'Deep Exploration', ai_autonomy: 96.4, depth: 6000 },
    { name: 'Hydrone-R', status: 97.2, missions: 24, type: 'Resident Survey', ai_autonomy: 94.8, depth: 4500 },
    { name: 'REMUS Swarm', status: 95.8, missions: 156, type: 'Mine Detection', ai_autonomy: 98.1, depth: 3000 },
    { name: 'Reach X Platform', status: 96.9, missions: 18, type: 'Intervention', ai_autonomy: 92.7, depth: 5500 },
    { name: 'Hydrus AUV', status: 98.4, missions: 89, type: 'Commercial Survey', ai_autonomy: 95.3, depth: 4000 },
    { name: 'Eelume WP960', status: 97.6, missions: 34, type: 'Mine Countermeasures', ai_autonomy: 97.9, depth: 2800 }
  ];

  const deepSeaOperationsData = [
    { time: '00:00', exploration: 87, mining: 92, conservation: 94, defense: 89, sensor_array: 96 },
    { time: '04:00', exploration: 93, mining: 88, conservation: 91, defense: 94, sensor_array: 98 },
    { time: '08:00', exploration: 78, mining: 95, conservation: 89, defense: 87, sensor_array: 94 },
    { time: '12:00', exploration: 89, mining: 93, conservation: 96, defense: 91, sensor_array: 97 },
    { time: '16:00', exploration: 94, mining: 91, conservation: 93, defense: 88, sensor_array: 95 },
    { time: '20:00', exploration: 91, mining: 89, conservation: 97, defense: 93, sensor_array: 99 }
  ];

  const marineExplorationZones = [
    { zone: 'Mariana Trench', depth: 11000, vehicles: 8, discoveries: 47, ai_mapped: 89.4, threat_level: 'LOW' },
    { zone: 'Mid-Atlantic Ridge', depth: 3500, vehicles: 14, discoveries: 92, ai_mapped: 94.7, threat_level: 'NOMINAL' },
    { zone: 'Pacific Ring', depth: 6200, vehicles: 12, discoveries: 73, ai_mapped: 87.2, threat_level: 'WATCH' },
    { zone: 'Arctic Ocean Floor', depth: 4800, vehicles: 6, discoveries: 34, ai_mapped: 76.8, threat_level: 'ADVISORY' },
    { zone: 'Coral Triangle', depth: 2100, vehicles: 18, discoveries: 156, ai_mapped: 97.3, threat_level: 'LOW' },
    { zone: 'Bermuda Triangle', depth: 3800, vehicles: 4, discoveries: 23, ai_mapped: 82.6, threat_level: 'HIGH' }
  ];

  const deepSeaMiningOperations = [
    { site: 'Clarion-Clipperton Zone', output: 247.8, autonomy: 94.7, vehicles: 16, efficiency: 89.4 },
    { site: 'Mid-Atlantic Polymetallic', output: 186.4, autonomy: 91.2, vehicles: 12, efficiency: 87.9 },
    { site: 'Indian Ocean Nodules', output: 134.7, autonomy: 96.8, vehicles: 8, efficiency: 92.6 },
    { site: 'Pacific Manganese Fields', output: 203.5, autonomy: 88.9, vehicles: 14, efficiency: 85.7 },
    { site: 'Atlantic Ridge Sulfides', output: 167.3, autonomy: 93.4, vehicles: 10, efficiency: 90.8 },
    { site: 'Arctic Rare Earth Deposits', output: 89.6, autonomy: 95.1, vehicles: 6, efficiency: 94.3 }
  ];

  const sensorArrayData = [
    { hour: 0, sonar_active: 247, lidar_arrays: 156, optical_sensors: 340, ai_processing: 98.7 },
    { hour: 4, sonar_active: 251, lidar_arrays: 162, optical_sensors: 347, ai_processing: 97.4 },
    { hour: 8, sonar_active: 239, lidar_arrays: 148, optical_sensors: 332, ai_processing: 99.1 },
    { hour: 12, sonar_active: 258, lidar_arrays: 171, optical_sensors: 356, ai_processing: 98.3 },
    { hour: 16, sonar_active: 244, lidar_arrays: 159, optical_sensors: 341, ai_processing: 97.8 },
    { hour: 20, sonar_active: 252, lidar_arrays: 164, optical_sensors: 349, ai_processing: 98.9 }
  ];

  const oceanDefenseOperations = [
    { region: 'North Atlantic', patrols: 34, mines_detected: 89, threats_neutralized: 23, ai_accuracy: 97.8 },
    { region: 'Pacific Theater', patrols: 47, mines_detected: 156, threats_neutralized: 41, ai_accuracy: 94.6 },
    { region: 'Mediterranean Sea', patrols: 28, mines_detected: 67, threats_neutralized: 18, ai_accuracy: 96.2 },
    { region: 'Arctic Waters', patrols: 16, mines_detected: 34, threats_neutralized: 12, ai_accuracy: 98.4 },
    { region: 'Indian Ocean', patrols: 23, mines_detected: 78, threats_neutralized: 27, ai_accuracy: 95.7 },
    { region: 'South China Sea', patrols: 41, mines_detected: 134, threats_neutralized: 47, ai_accuracy: 93.9 }
  ];

  const missionMetrics = {
    total_auv_fleet: 247,
    deep_sea_mapping_progress: 78.4,
    mining_operations_active: 23,
    conservation_missions: 156,
    defense_patrols: 89,
    sensor_arrays_deployed: 847,
    ai_decision_accuracy: 96.8,
    operational_depth_record: 11000,
    autonomous_mission_time: '247 days',
    oceanology_expo_technologies: 340,
    nato_investment_gbp: 60000000,
    species_discoveries_2026: 1247,
    critical_minerals_extracted: '89.7K tons',
    underwater_communication_links: 156
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'DEEP_SEA_EXPLORATION_ACTIVE': return 'text-blue-400';
      case 'MINING_OPERATIONS_PHASE': return 'text-orange-400';
      case 'MARINE_CONSERVATION_MODE': return 'text-green-400';
      case 'DEFENSE_PATROL_ACTIVE': return 'text-red-400';
      case 'SENSOR_ARRAY_DEPLOYED': return 'text-purple-400';
      default: return 'text-white';
    }
  };

  const getThreatColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'NOMINAL': return 'text-blue-400';
      case 'WATCH': return 'text-yellow-400';
      case 'ADVISORY': return 'text-orange-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-blue-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-400 mb-2">🌊🤖 OCEAN TECHNOLOGY & DEEP SEA OPERATIONS CENTER</h1>
            <p className="text-blue-300">2026 Autonomous Underwater Vehicles | AI Deep Sea Exploration | Marine Conservation | Defense Operations</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(operationalPhase)}`}>{operationalPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🤖 AUV FLEET STATUS</h3>
          <div className="text-2xl text-green-400">{missionMetrics.total_auv_fleet}</div>
          <div className="text-sm text-gray-400">Active Autonomous Vehicles</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">⛏️ DEEP SEA MINING</h3>
          <div className="text-2xl text-cyan-400">{missionMetrics.critical_minerals_extracted}</div>
          <div className="text-sm text-gray-400">Critical Minerals Extracted</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🐠 SPECIES DISCOVERIES</h3>
          <div className="text-2xl text-green-400">{missionMetrics.species_discoveries_2026}</div>
          <div className="text-sm text-gray-400">New Species Found (2026)</div>
        </div>
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-2">🛡️ DEFENSE OPERATIONS</h3>
          <div className="text-2xl text-yellow-400">{missionMetrics.defense_patrols}</div>
          <div className="text-sm text-gray-400">Active Defense Patrols</div>
        </div>
      </div>

      {/* Main Operations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Autonomous Vehicle Fleet Status */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🤖 AUTONOMOUS UNDERWATER VEHICLE FLEET</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={autonomousVehicleFleet}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 10 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #0ea5e9', color: '#0ea5e9' }}
                formatter={(value, name) => [`${value}${name === 'missions' || name === 'depth' ? '' : '%'}`, name]}
              />
              <Bar dataKey="status" fill="#0ea5e9" name="System Status" />
              <Bar dataKey="ai_autonomy" fill="#22c55e" name="AI Autonomy Level" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Deep Sea Operations Real-time Monitoring */}
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🌊 DEEP SEA OPERATIONS MONITORING</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={deepSeaOperationsData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="time" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #f59e0b', color: '#f59e0b' }} />
              <Line type="monotone" dataKey="exploration" stroke="#0ea5e9" strokeWidth={2} name="Exploration" />
              <Line type="monotone" dataKey="mining" stroke="#f59e0b" strokeWidth={2} name="Mining Operations" />
              <Line type="monotone" dataKey="conservation" stroke="#22c55e" strokeWidth={2} name="Conservation" />
              <Line type="monotone" dataKey="defense" stroke="#ef4444" strokeWidth={2} name="Defense Patrols" />
              <Line type="monotone" dataKey="sensor_array" stroke="#8b5cf6" strokeWidth={2} name="Sensor Arrays" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Marine Exploration Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🗺️ MARINE EXPLORATION ZONES</h2>
          <div className="space-y-3">
            {marineExplorationZones.map((zone, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-400 font-bold">{zone.zone}</span>
                  <span className={getThreatColor(zone.threat_level)}>{zone.threat_level}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Depth</div>
                    <div className="text-white">{zone.depth}m</div>
                  </div>
                  <div>
                    <div className="text-gray-400">AUVs</div>
                    <div className="text-blue-400">{zone.vehicles}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Discoveries</div>
                    <div className="text-green-400">{zone.discoveries}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">AI Mapped</div>
                    <div className="text-purple-400">{zone.ai_mapped}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Sea Mining Operations */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">⛏️ DEEP SEA MINING ANALYTICS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={deepSeaMiningOperations}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="site" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Bar dataKey="output" fill="#22c55e" name="Output (tons)" />
              <Line type="monotone" dataKey="autonomy" stroke="#f59e0b" strokeWidth={3} name="Autonomy %" />
              <Line type="monotone" dataKey="efficiency" stroke="#ef4444" strokeWidth={2} name="Efficiency %" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sensor Arrays & Defense Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">📡 ADVANCED SENSOR ARRAY NETWORKS</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sensorArrayData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #eab308', color: '#eab308' }} />
              <Area type="monotone" dataKey="sonar_active" stackId="1" stroke="#0ea5e9" fill="#0ea5e933" name="Sonar Arrays" />
              <Area type="monotone" dataKey="lidar_arrays" stackId="2" stroke="#22c55e" fill="#22c55e33" name="LIDAR Arrays" />
              <Area type="monotone" dataKey="optical_sensors" stackId="3" stroke="#8b5cf6" fill="#8b5cf633" name="Optical Sensors" />
              <Line type="monotone" dataKey="ai_processing" stroke="#f59e0b" strokeWidth={3} name="AI Processing %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🛡️ OCEAN DEFENSE OPERATIONS</h2>
          <div className="grid grid-cols-1 gap-3">
            {oceanDefenseOperations.slice(0, 4).map((operation, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-400 font-bold">{operation.region}</span>
                  <span className={getStatusColor(operation.ai_accuracy)}>{operation.ai_accuracy}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Patrols</div>
                    <div className="text-white">{operation.patrols}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Mines Found</div>
                    <div className="text-orange-400">{operation.mines_detected}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Neutralized</div>
                    <div className="text-green-400">{operation.threats_neutralized}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Mission Control Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-3">🌊 OCEANOLOGY INTERNATIONAL</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>New Technologies (2026)</span>
              <span className="text-cyan-400">{missionMetrics.oceanology_expo_technologies}</span>
            </div>
            <div className="flex justify-between">
              <span>Live Demo Vehicles</span>
              <span className="text-green-400">67 ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>AI Processing Power</span>
              <span className="text-yellow-400">{missionMetrics.ai_decision_accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span>Sensor Fusion Systems</span>
              <span className="text-blue-400">BREAKTHROUGH</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🏛️ NATO UNDERWATER DEFENSE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Investment (2026)</span>
              <span className="text-green-400">£{(missionMetrics.nato_investment_gbp / 1000000).toFixed(0)}M</span>
            </div>
            <div className="flex justify-between">
              <span>Mine Detection Systems</span>
              <span className="text-cyan-400">98.7% ACCURATE</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Mission Time</span>
              <span className="text-orange-400">{missionMetrics.autonomous_mission_time}</span>
            </div>
            <div className="flex justify-between">
              <span>Threat Neutralization</span>
              <span className="text-green-400">168 CLEARED</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">🔬 SCIENTIFIC BREAKTHROUGHS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Ocean Floor Mapping</span>
              <span className="text-blue-400">{missionMetrics.deep_sea_mapping_progress}%</span>
            </div>
            <div className="flex justify-between">
              <span>Max Operating Depth</span>
              <span className="text-purple-400">{missionMetrics.operational_depth_record}m</span>
            </div>
            <div className="flex justify-between">
              <span>Communication Links</span>
              <span className="text-cyan-400">{missionMetrics.underwater_communication_links}</span>
            </div>
            <div className="flex justify-between">
              <span>Data Accuracy</span>
              <span className="text-green-400">99.4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 OCEAN TECHNOLOGY INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{missionMetrics.sensor_arrays_deployed}</div>
            <div className="text-gray-400">Active Sensor Arrays</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{missionMetrics.conservation_missions}</div>
            <div className="text-gray-400">Conservation Missions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{missionMetrics.mining_operations_active}</div>
            <div className="text-gray-400">Mining Operations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-purple-400 mb-2">{(missionMetrics.deep_sea_mapping_progress).toFixed(1)}%</div>
            <div className="text-gray-400">Ocean Floor Mapped</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-blue-500 text-center text-gray-400">
        <p>🌊 2026 Ocean Technology Command Center | Autonomous Underwater Operations | AI Marine Exploration | Deep Sea Mining Intelligence</p>
        <p className="text-blue-400">Research Sources: Oceanology International, NATO Defense, NSF Marine Robotics, Nature World News, ScienceDirect, IEEE Spectrum</p>
      </div>
    </div>
  );
};

export default OceanTechnologyDeepSeaCenter;