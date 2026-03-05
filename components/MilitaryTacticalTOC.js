// MilitaryTacticalTOC.js - Military Tactical Operations Center (TOC) Command Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const MilitaryTacticalTOC = () => {
  const [tacticalUnits, setTacticalUnits] = useState([
    {
      id: 'unit_001',
      callSign: 'ALPHA-6',
      designation: '1st Platoon, Alpha Company',
      unitType: 'INFANTRY',
      status: 'IN_POSITION',
      readiness: 'READY',
      commander: 'LT Anderson',
      strength: { current: 28, authorized: 30 },
      location: { lat: 41.2033, lon: -8.6761, grid: 'NM 456 789' },
      lastContact: Date.now() - 3 * 60 * 1000,
      mission: 'Sector Security',
      equipment: ['M4A1', 'M249', 'Radio', 'NVG'],
      vehicles: [
        { type: 'HMMWV', count: 2, status: 'OPERATIONAL' },
        { type: 'M-ATV', count: 1, status: 'MAINTENANCE' }
      ],
      comms: { status: 'GREEN', encrypted: true, frequency: '142.550' },
      supply: { ammo: 85, fuel: 92, water: 78, medical: 90 },
      morale: 87,
      alert: null
    },
    {
      id: 'unit_002',
      callSign: 'BRAVO-6',
      designation: '2nd Platoon, Alpha Company',
      unitType: 'MECHANIZED',
      status: 'EN_ROUTE',
      readiness: 'READY',
      commander: 'SSG Martinez',
      strength: { current: 32, authorized: 32 },
      location: { lat: 41.2145, lon: -8.6542, grid: 'NM 478 801' },
      lastContact: Date.now() - 1 * 60 * 1000,
      mission: 'Route Security',
      equipment: ['M4A1', 'AT-4', 'Radio', 'Thermal'],
      vehicles: [
        { type: 'Bradley IFV', count: 3, status: 'OPERATIONAL' },
        { type: 'M113', count: 1, status: 'OPERATIONAL' }
      ],
      comms: { status: 'GREEN', encrypted: true, frequency: '142.575' },
      supply: { ammo: 78, fuel: 68, water: 88, medical: 95 },
      morale: 91,
      alert: null
    },
    {
      id: 'unit_003',
      callSign: 'CHARLIE-6',
      designation: '3rd Platoon, Alpha Company',
      unitType: 'ARMOR',
      status: 'CONTACT',
      readiness: 'ENGAGED',
      commander: 'LT Thompson',
      strength: { current: 16, authorized: 18 },
      location: { lat: 41.1878, lon: -8.7012, grid: 'NM 423 765' },
      lastContact: Date.now() - 30 * 1000,
      mission: 'Advance to Contact',
      equipment: ['M1A2 Abrams', 'M240', 'Radio', 'Thermal'],
      vehicles: [
        { type: 'M1A2 Abrams', count: 4, status: 'OPERATIONAL' },
        { type: 'M113', count: 1, status: 'OPERATIONAL' }
      ],
      comms: { status: 'AMBER', encrypted: true, frequency: '142.600' },
      supply: { ammo: 65, fuel: 45, water: 82, medical: 75 },
      morale: 94,
      alert: 'ENEMY_CONTACT'
    },
    {
      id: 'unit_004',
      callSign: 'DELTA-6',
      designation: 'Support Platoon',
      unitType: 'LOGISTICS',
      status: 'RESUPPLY',
      readiness: 'READY',
      commander: 'SFC Johnson',
      strength: { current: 24, authorized: 26 },
      location: { lat: 41.1995, lon: -8.6892, grid: 'NM 445 785' },
      lastContact: Date.now() - 5 * 60 * 1000,
      mission: 'Logistics Support',
      equipment: ['M4A1', 'M249', 'Radio', 'Repair Tools'],
      vehicles: [
        { type: 'HEMTT', count: 3, status: 'OPERATIONAL' },
        { type: 'M977 HEMTT', count: 2, status: 'OPERATIONAL' },
        { type: 'M1074', count: 1, status: 'MAINTENANCE' }
      ],
      comms: { status: 'GREEN', encrypted: true, frequency: '142.525' },
      supply: { ammo: 95, fuel: 88, water: 92, medical: 98 },
      morale: 79,
      alert: null
    }
  ]);

  const [tacticalSituation, setTacticalSituation] = useState({
    threatLevel: 'AMBER',
    defcon: 'DEFCON 3',
    operationStatus: 'ACTIVE',
    missionProgress: 67.3,
    weatherCondition: 'FAIR',
    visibility: 'GOOD',
    temperature: 18, // Celsius
    windSpeed: 12, // km/h
    precipitation: 0,
    terrain: 'MIXED_URBAN_RURAL',
    civilianStatus: 'RELOCATED',
    enemyActivity: 'MODERATE',
    friendlyActivity: 'HIGH'
  });

  const [c4isrData, setC4isrData] = useState({
    command: {
      commandPost: 'TOC-ALPHA',
      commanderStatus: 'ON_STATION',
      deputyStatus: 'AVAILABLE',
      staffSections: {
        s1: { status: 'READY', officer: 'CPT Williams' },
        s2: { status: 'ACTIVE', officer: 'MAJ Davis' },
        s3: { status: 'ACTIVE', officer: 'MAJ Rodriguez' },
        s4: { status: 'READY', officer: 'CPT Lee' },
        s5: { status: 'READY', officer: 'CPT Brown' },
        s6: { status: 'ACTIVE', officer: 'CPT Singh' }
      }
    },
    control: {
      tacticalInternet: 'OPERATIONAL',
      battleCommand: 'ONLINE',
      fireControl: 'READY',
      airControl: 'COORDINATED',
      logisticsControl: 'ACTIVE'
    },
    communications: {
      voiceComms: { status: 'GREEN', channels: 12, encrypted: 10 },
      dataComms: { status: 'GREEN', throughput: '2.4 Mbps', latency: '45ms' },
      satelliteComms: { status: 'GREEN', uplink: 'STRONG', downlink: 'STRONG' },
      radioFrequencies: {
        command: '142.500',
        tactical: '142.550-142.625',
        logistics: '142.450',
        medical: '142.675',
        aviation: '142.700'
      }
    },
    computers: {
      systems: [
        { name: 'FBCB2', status: 'OPERATIONAL', users: 28 },
        { name: 'CPOF', status: 'OPERATIONAL', users: 12 },
        { name: 'MCS', status: 'OPERATIONAL', users: 8 },
        { name: 'GCCS-A', status: 'DEGRADED', users: 4 }
      ],
      networkHealth: 94.7,
      dataFlow: 'NORMAL',
      cybersecurityStatus: 'GREEN'
    },
    intelligence: {
      threatAssessment: 'MODERATE',
      enemyStrength: 'PLATOON_SIZE',
      enemyLocation: 'NM 401 723',
      enemyActivity: 'DEFENSIVE',
      intelligenceSources: [
        { type: 'HUMINT', reliability: 'B', credibility: '2' },
        { type: 'SIGINT', reliability: 'A', credibility: '1' },
        { type: 'UAV', reliability: 'A', credibility: '1' },
        { type: 'IMAGERY', reliability: 'B', credibility: '2' }
      ],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    surveillance: {
      assets: [
        { type: 'MQ-9 Reaper', callSign: 'PREDATOR-1', status: 'ON_STATION', fuel: 78 },
        { type: 'RQ-11 Raven', callSign: 'RAVEN-2', status: 'MISSION', fuel: 45 },
        { type: 'Ground Radar', callSign: 'SENTINEL-1', status: 'SCANNING', range: 25 }
      ],
      coverage: 87.4,
      activeTargets: 7,
      trackedVehicles: 23
    },
    reconnaissance: {
      missions: [
        { id: 'RECON-001', status: 'COMPLETE', objective: 'Route Clearance', result: 'CLEAR' },
        { id: 'RECON-002', status: 'IN_PROGRESS', objective: 'Area Reconnaissance', progress: 60 },
        { id: 'RECON-003', status: 'PLANNED', objective: 'Target Acquisition', eta: '2100Z' }
      ],
      patrolsOut: 3,
      checkpoints: 12,
      observationPosts: 8
    }
  });

  const [missionMetrics, setMissionMetrics] = useState([]);
  const [battlefieldMap, setBattlefieldMap] = useState([]);
  const [logisticsData, setLogisticsData] = useState([]);

  const generateMissionMetrics = () => {
    const data = [];
    for (let i = 11; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i * 2);
      data.push({
        time: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        mission_progress: Math.min(100, (12 - i) * 8 + Math.random() * 5),
        unit_readiness: Math.random() * 15 + 80,
        enemy_activity: Math.random() * 30 + 10,
        friendly_losses: Math.random() * 3,
        supplies_consumed: Math.random() * 20 + 5,
        communications_uptime: Math.random() * 5 + 95
      });
    }
    return data;
  };

  const generateBattlefieldMap = () => {
    const entities = [];
    
    // Friendly units
    tacticalUnits.forEach((unit, index) => {
      entities.push({
        id: unit.id,
        type: 'FRIENDLY',
        x: unit.location.lat + Math.random() * 0.01 - 0.005,
        y: unit.location.lon + Math.random() * 0.01 - 0.005,
        callSign: unit.callSign,
        unitType: unit.unitType,
        size: unit.strength.current
      });
    });

    // Enemy units (simulated)
    for (let i = 0; i < 5; i++) {
      entities.push({
        id: `enemy_${i}`,
        type: 'HOSTILE',
        x: 41.18 + Math.random() * 0.03,
        y: -8.72 + Math.random() * 0.04,
        callSign: `UNK-${i + 1}`,
        unitType: 'UNKNOWN',
        size: Math.floor(Math.random() * 20) + 5
      });
    }

    // Neutral/civilian areas
    for (let i = 0; i < 3; i++) {
      entities.push({
        id: `neutral_${i}`,
        type: 'NEUTRAL',
        x: 41.20 + Math.random() * 0.02,
        y: -8.67 + Math.random() * 0.03,
        callSign: `CIV-${i + 1}`,
        unitType: 'CIVILIAN',
        size: Math.floor(Math.random() * 100) + 50
      });
    }

    return entities;
  };

  const generateLogisticsData = () => {
    return [
      { category: 'Ammunition', current: 78, target: 90, critical: 30 },
      { category: 'Fuel', current: 65, target: 85, critical: 25 },
      { category: 'Water', current: 82, target: 95, critical: 40 },
      { category: 'Medical', current: 88, target: 90, critical: 50 },
      { category: 'Food', current: 91, target: 95, critical: 60 },
      { category: 'Spare Parts', current: 45, target: 70, critical: 20 }
    ];
  };

  useEffect(() => {
    setMissionMetrics(generateMissionMetrics());
    setBattlefieldMap(generateBattlefieldMap());
    setLogisticsData(generateLogisticsData());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update tactical units
      setTacticalUnits(prev => prev.map(unit => {
        let newStatus = unit.status;
        let newAlert = unit.alert;
        
        // Random status changes
        if (unit.status === 'CONTACT' && Math.random() > 0.7) {
          newStatus = 'IN_POSITION';
          newAlert = null;
        }
        if (unit.status === 'EN_ROUTE' && Math.random() > 0.8) {
          newStatus = 'IN_POSITION';
        }
        if (unit.status === 'IN_POSITION' && Math.random() > 0.95) {
          newStatus = 'EN_ROUTE';
        }

        // Update supply levels
        const newSupply = { ...unit.supply };
        if (unit.status === 'CONTACT') {
          newSupply.ammo = Math.max(20, newSupply.ammo - Math.random() * 3);
          newSupply.fuel = Math.max(10, newSupply.fuel - Math.random() * 2);
        }

        // Update morale based on situation
        let newMorale = unit.morale;
        if (unit.status === 'CONTACT') {
          newMorale = Math.min(100, Math.max(60, newMorale + (Math.random() - 0.3) * 2));
        } else {
          newMorale = Math.min(100, Math.max(70, newMorale + (Math.random() - 0.5) * 1));
        }

        return {
          ...unit,
          status: newStatus,
          alert: newAlert,
          supply: newSupply,
          morale: newMorale,
          lastContact: Math.random() > 0.8 ? Date.now() : unit.lastContact
        };
      }));

      // Update tactical situation
      setTacticalSituation(prev => ({
        ...prev,
        missionProgress: Math.min(100, Math.max(0, prev.missionProgress + (Math.random() - 0.3) * 0.5)),
        enemyActivity: ['LOW', 'MODERATE', 'HIGH'][Math.floor(Math.random() * 3)],
        temperature: Math.max(10, Math.min(25, prev.temperature + (Math.random() - 0.5) * 2)),
        windSpeed: Math.max(0, Math.min(30, prev.windSpeed + (Math.random() - 0.5) * 3))
      }));

      // Update C4ISR systems
      setC4isrData(prev => ({
        ...prev,
        computers: {
          ...prev.computers,
          networkHealth: Math.max(75, Math.min(100, prev.computers.networkHealth + (Math.random() - 0.5) * 2))
        },
        surveillance: {
          ...prev.surveillance,
          coverage: Math.max(70, Math.min(95, prev.surveillance.coverage + (Math.random() - 0.5) * 1.5)),
          activeTargets: Math.max(0, Math.min(15, prev.surveillance.activeTargets + Math.floor((Math.random() - 0.5) * 3)))
        }
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'READY': case 'OPERATIONAL': case 'ONLINE': case 'GREEN': case 'ACTIVE':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'EN_ROUTE': case 'MISSION': case 'AMBER': case 'DEGRADED':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CONTACT': case 'ENGAGED': case 'RED': case 'MAINTENANCE':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'IN_POSITION': case 'AVAILABLE': case 'COORDINATED':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'RESUPPLY': case 'SCANNING': case 'ON_STATION':
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'GREEN': return 'text-green-400';
      case 'AMBER': case 'YELLOW': return 'text-yellow-400';
      case 'RED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSupplyLevelColor = (current, critical) => {
    if (current <= critical) return 'text-red-400';
    if (current <= critical * 1.5) return 'text-yellow-400';
    return 'text-green-400';
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const getBattlefieldColor = (type) => {
    switch (type) {
      case 'FRIENDLY': return '#10B981';
      case 'HOSTILE': return '#EF4444';
      case 'NEUTRAL': return '#6B7280';
      default: return '#9CA3AF';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ⚔️ TACTICAL OPERATIONS CENTER (TOC)
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(tacticalSituation.threatLevel)}`}>
            THREAT: {tacticalSituation.threatLevel}
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {tacticalSituation.defcon}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Military C4ISR command dashboard
          </div>
        </div>
      </div>

      {/* Tactical Situation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">MISSION PROGRESS</div>
              <div className="text-2xl font-bold text-green-100">
                {tacticalSituation.missionProgress.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                Status: {tacticalSituation.operationStatus}
              </div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">UNITS READY</div>
              <div className="text-2xl font-bold text-blue-100">
                {tacticalUnits.filter(unit => unit.readiness === 'READY').length}/{tacticalUnits.length}
              </div>
              <div className="text-xs text-blue-300">
                {tacticalUnits.reduce((sum, unit) => sum + unit.strength.current, 0)} personnel
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">ENEMY ACTIVITY</div>
              <div className="text-2xl font-bold text-orange-100">
                {tacticalSituation.enemyActivity}
              </div>
              <div className="text-xs text-orange-300">
                {c4isrData.surveillance.activeTargets} targets tracked
              </div>
            </div>
            <div className="text-3xl opacity-60">👁️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">COMMS STATUS</div>
              <div className="text-2xl font-bold text-purple-100">
                {c4isrData.communications.voiceComms.status}
              </div>
              <div className="text-xs text-purple-300">
                {c4isrData.communications.voiceComms.encrypted}/{c4isrData.communications.voiceComms.channels} encrypted
              </div>
            </div>
            <div className="text-3xl opacity-60">📡</div>
          </div>
        </div>
      </div>

      {/* Tactical Units and Battlefield Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tactical Units */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🪖 TACTICAL UNITS STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {tacticalUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{unit.callSign}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.readiness)}`}>
                      {unit.readiness}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {unit.unitType}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(unit.lastContact)}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{unit.designation}</div>
                <div className="text-xs text-purple-400 mb-3">CMD: {unit.commander}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Strength</div>
                    <div className="text-cyan-400">{unit.strength.current}/{unit.strength.authorized}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Grid</div>
                    <div className="text-yellow-400">{unit.location.grid}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Mission</div>
                    <div className="text-blue-400">{unit.mission}</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Ammo</div>
                    <div className={`font-bold ${getSupplyLevelColor(unit.supply.ammo, 30)}`}>
                      {unit.supply.ammo}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Fuel</div>
                    <div className={`font-bold ${getSupplyLevelColor(unit.supply.fuel, 25)}`}>
                      {unit.supply.fuel}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Water</div>
                    <div className={`font-bold ${getSupplyLevelColor(unit.supply.water, 40)}`}>
                      {unit.supply.water}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Morale</div>
                    <div className={`font-bold ${unit.morale >= 80 ? 'text-green-400' : unit.morale >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {unit.morale.toFixed(0)}%
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Vehicles:</div>
                  <div className="flex flex-wrap gap-1">
                    {unit.vehicles.map((vehicle, index) => (
                      <span key={index} className={`px-2 py-1 rounded text-xs ${getStatusColor(vehicle.status)}`}>
                        {vehicle.count}x {vehicle.type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Comms: </span>
                    <span className={`${getStatusColor(unit.comms.status).split(' ')[0]}`}>
                      {unit.comms.frequency}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Encrypted: </span>
                    <span className="text-green-400">{unit.comms.encrypted ? 'YES' : 'NO'}</span>
                  </div>
                </div>

                {unit.alert && (
                  <div className="mt-2 text-xs">
                    <span className="text-red-400 animate-pulse">
                      🚨 {unit.alert.replace('_', ' ')}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Battlefield Situational Awareness */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🗺️ BATTLEFIELD SITUATIONAL AWARENESS
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={battlefieldMap} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis 
                dataKey="x" 
                type="number"
                scale="linear"
                domain={[41.18, 41.22]}
                stroke="#9CA3AF" 
                fontSize={10}
              />
              <YAxis 
                dataKey="y" 
                type="number"
                scale="linear"
                domain={[-8.72, -8.65]}
                stroke="#9CA3AF" 
                fontSize={10}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value, name, props) => [
                  `${props.payload.callSign} (${props.payload.unitType})`,
                  'Unit'
                ]}
              />
              <Scatter 
                name="Friendly" 
                data={battlefieldMap.filter(item => item.type === 'FRIENDLY')} 
                fill="#10B981"
                r={8}
              />
              <Scatter 
                name="Hostile" 
                data={battlefieldMap.filter(item => item.type === 'HOSTILE')} 
                fill="#EF4444"
                r={6}
              />
              <Scatter 
                name="Neutral" 
                data={battlefieldMap.filter(item => item.type === 'NEUTRAL')} 
                fill="#6B7280"
                r={4}
              />
            </ScatterChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Weather</div>
              <div className="text-blue-400">{tacticalSituation.weatherCondition}</div>
              <div className="text-xs text-gray-500">{tacticalSituation.temperature}°C, {tacticalSituation.windSpeed}km/h</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Visibility</div>
              <div className="text-green-400">{tacticalSituation.visibility}</div>
              <div className="text-xs text-gray-500">Terrain: {tacticalSituation.terrain}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Civilians</div>
              <div className="text-yellow-400">{tacticalSituation.civilianStatus}</div>
              <div className="text-xs text-gray-500">Safety secured</div>
            </div>
          </div>
        </div>
      </div>

      {/* C4ISR Systems and Mission Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* C4ISR Systems Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 C4ISR SYSTEMS STATUS
          </h3>
          
          <div className="space-y-4">
            {/* Command */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Command & Control</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">TOC Status:</span>
                  <span className={getStatusColor(c4isrData.command.commandPost).split(' ')[0]}>
                    {c4isrData.command.commandPost}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Commander:</span>
                  <span className={getStatusColor(c4isrData.command.commanderStatus).split(' ')[0]}>
                    {c4isrData.command.commanderStatus}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-xs">
                <div className="text-gray-400 mb-1">Staff Sections:</div>
                <div className="grid grid-cols-3 gap-1">
                  {Object.entries(c4isrData.command.staffSections).map(([section, data]) => (
                    <div key={section} className="flex items-center space-x-1">
                      <span className="text-purple-400">{section.toUpperCase()}:</span>
                      <span className={getStatusColor(data.status).split(' ')[0]}>
                        {data.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Communications */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Communications</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Voice Comms:</span>
                  <span className={getStatusColor(c4isrData.communications.voiceComms.status).split(' ')[0]}>
                    {c4isrData.communications.voiceComms.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Rate:</span>
                  <span className="text-cyan-400">{c4isrData.communications.dataComms.throughput}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Satellite:</span>
                  <span className={getStatusColor(c4isrData.communications.satelliteComms.status).split(' ')[0]}>
                    {c4isrData.communications.satelliteComms.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Latency:</span>
                  <span className="text-yellow-400">{c4isrData.communications.dataComms.latency}</span>
                </div>
              </div>
            </div>

            {/* Computers & Intelligence */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Computer Systems</h4>
              <div className="space-y-1">
                {c4isrData.computers.systems.map((system, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <span className="text-gray-400">{system.name}:</span>
                    <div className="flex items-center space-x-2">
                      <span className={getStatusColor(system.status).split(' ')[0]}>
                        {system.status}
                      </span>
                      <span className="text-blue-400">({system.users} users)</span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between text-xs mt-2">
                  <span className="text-gray-400">Network Health:</span>
                  <span className="text-green-400">{c4isrData.computers.networkHealth.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Surveillance & Reconnaissance */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">ISR Assets</h4>
              <div className="space-y-1">
                {c4isrData.surveillance.assets.map((asset, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <span className="text-gray-400">{asset.callSign} ({asset.type}):</span>
                    <div className="flex items-center space-x-2">
                      <span className={getStatusColor(asset.status).split(' ')[0]}>
                        {asset.status}
                      </span>
                      <span className="text-orange-400">({asset.fuel}% fuel)</span>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-green-400">{c4isrData.surveillance.coverage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Targets:</span>
                    <span className="text-red-400">{c4isrData.surveillance.activeTargets}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Metrics & Logistics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 MISSION METRICS & LOGISTICS
          </h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-3">Mission Progress (24H)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={missionMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12}/>
                <YAxis stroke="#9CA3AF" fontSize={12}/>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="mission_progress" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Mission %"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="unit_readiness" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Unit Readiness %"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="enemy_activity" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Enemy Activity"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3">Logistics Status</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={logisticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey="category" stroke="#9CA3AF" fontSize={10} angle={-45} textAnchor="end" height={60}/>
                <YAxis stroke="#9CA3AF" fontSize={12}/>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="current" fill="#10B981" name="Current %"/>
                <Bar dataKey="target" fill="#3B82F6" name="Target %"/>
                <Bar dataKey="critical" fill="#EF4444" name="Critical Level"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilitaryTacticalTOC;