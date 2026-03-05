// SpaceMissionCenter.js - NASA/SpaceX-Inspired Space Mission Control Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SpaceMissionCenter = () => {
  const [missions, setMissions] = useState([
    {
      id: 'mission_001',
      name: 'Aleksandra-1 Platform Deploy',
      type: 'DEPLOYMENT',
      status: 'ACTIVE',
      phase: 'ORBITAL_OPERATIONS',
      commander: 'Aleksandra AI',
      launchTime: Date.now() - 3 * 60 * 60 * 1000,
      missionTime: 10800, // seconds since launch
      expectedDuration: 86400, // 24 hours
      altitude: 89.4, // km (metaphorical)
      velocity: 7.8, // km/s (metaphorical)
      telemetryLock: true,
      communicationStrength: 98.7,
      systemsNominal: true,
      crew: ['AI Agent Alpha', 'Bot Beta', 'System Gamma'],
      objectives: [
        { name: 'Platform Deployment', status: 'COMPLETED', progress: 100 },
        { name: 'System Verification', status: 'IN_PROGRESS', progress: 87 },
        { name: 'Data Collection', status: 'SCHEDULED', progress: 0 },
        { name: 'Mission Deorbit', status: 'SCHEDULED', progress: 0 }
      ]
    },
    {
      id: 'mission_002',
      name: 'API Constellation Launch',
      type: 'CONSTELLATION',
      status: 'COUNTDOWN',
      phase: 'T_MINUS_HOLD',
      commander: 'Mission Control AI',
      launchTime: Date.now() + 45 * 60 * 1000,
      missionTime: -2700, // T minus countdown
      expectedDuration: 172800, // 48 hours
      altitude: 0,
      velocity: 0,
      telemetryLock: false,
      communicationStrength: 95.2,
      systemsNominal: true,
      crew: ['API Gateway', 'Load Balancer', 'Database Cluster'],
      objectives: [
        { name: 'Pre-flight Check', status: 'COMPLETED', progress: 100 },
        { name: 'Launch Sequence', status: 'READY', progress: 95 },
        { name: 'Orbital Insertion', status: 'SCHEDULED', progress: 0 },
        { name: 'Constellation Deploy', status: 'SCHEDULED', progress: 0 }
      ]
    },
    {
      id: 'mission_003',
      name: 'Data Mining Expedition',
      type: 'EXPLORATION',
      status: 'COMPLETED',
      phase: 'RECOVERY',
      commander: 'Analytics AI',
      launchTime: Date.now() - 24 * 60 * 60 * 1000,
      missionTime: 86400,
      expectedDuration: 86400,
      altitude: 156.7,
      velocity: 2.3,
      telemetryLock: true,
      communicationStrength: 89.3,
      systemsNominal: true,
      crew: ['Data Probe Alpha', 'ML Processor', 'Report Generator'],
      objectives: [
        { name: 'Data Collection', status: 'COMPLETED', progress: 100 },
        { name: 'Analysis Processing', status: 'COMPLETED', progress: 100 },
        { name: 'Report Generation', status: 'COMPLETED', progress: 100 },
        { name: 'Mission Summary', status: 'COMPLETED', progress: 100 }
      ]
    },
    {
      id: 'mission_004',
      name: 'Security Patrol Route',
      type: 'SURVEILLANCE',
      status: 'PLANNING',
      phase: 'MISSION_DESIGN',
      commander: 'Security AI',
      launchTime: Date.now() + 6 * 60 * 60 * 1000,
      missionTime: 0,
      expectedDuration: 43200, // 12 hours
      altitude: 0,
      velocity: 0,
      telemetryLock: false,
      communicationStrength: 0,
      systemsNominal: false,
      crew: ['Threat Detector', 'Anomaly Scanner', 'Alert System'],
      objectives: [
        { name: 'Route Planning', status: 'IN_PROGRESS', progress: 67 },
        { name: 'System Prep', status: 'SCHEDULED', progress: 0 },
        { name: 'Launch Window', status: 'SCHEDULED', progress: 0 },
        { name: 'Patrol Execute', status: 'SCHEDULED', progress: 0 }
      ]
    }
  ]);

  const [flightControllers, setFlightControllers] = useState([
    {
      id: 'fc_001',
      callSign: 'FLIGHT',
      position: 'Flight Director',
      agent: 'Aleksandra Prime',
      status: 'ON_CONSOLE',
      console: 'FLIGHT-1',
      currentMission: 'mission_001',
      certifications: ['Mission Command', 'Emergency Response', 'Go/No-Go Authority'],
      experience: '2847 mission hours',
      alertLevel: 'GREEN'
    },
    {
      id: 'fc_002',
      callSign: 'CAPCOM',
      position: 'Capsule Communicator',
      agent: 'Communications AI',
      status: 'ON_CONSOLE',
      console: 'CAPCOM-2',
      currentMission: 'mission_002',
      certifications: ['Crew Communications', 'Protocol Management'],
      experience: '1567 mission hours',
      alertLevel: 'YELLOW'
    },
    {
      id: 'fc_003',
      callSign: 'EECOM',
      position: 'Electrical & Environmental',
      agent: 'Systems Monitor',
      status: 'ON_CONSOLE',
      console: 'EECOM-1',
      currentMission: 'mission_001',
      certifications: ['Power Systems', 'Life Support', 'Environmental Control'],
      experience: '1234 mission hours',
      alertLevel: 'GREEN'
    },
    {
      id: 'fc_004',
      callSign: 'GNC',
      position: 'Guidance Navigation Control',
      agent: 'Navigation AI',
      status: 'OFF_CONSOLE',
      console: 'GNC-2',
      currentMission: null,
      certifications: ['Trajectory Analysis', 'Orbital Mechanics', 'Attitude Control'],
      experience: '987 mission hours',
      alertLevel: 'GREEN'
    },
    {
      id: 'fc_005',
      callSign: 'SURGEON',
      position: 'Flight Surgeon',
      agent: 'Health Monitor',
      status: 'STANDBY',
      console: 'MEDICAL-1',
      currentMission: 'mission_003',
      certifications: ['System Health', 'Performance Monitoring', 'Emergency Response'],
      experience: '2156 mission hours',
      alertLevel: 'GREEN'
    },
    {
      id: 'fc_006',
      callSign: 'INCO',
      position: 'Instrumentation & Communications',
      agent: 'Telemetry AI',
      status: 'ON_CONSOLE',
      console: 'INCO-1',
      currentMission: 'mission_001',
      certifications: ['Data Systems', 'Communication Links', 'Telemetry Analysis'],
      experience: '1789 mission hours',
      alertLevel: 'GREEN'
    }
  ]);

  const [missionControl, setMissionControl] = useState({
    flightDirector: 'Aleksandra Prime',
    currentShift: 'GOLD TEAM',
    nextShift: 'BLUE TEAM',
    shiftChange: Date.now() + 4 * 60 * 60 * 1000,
    activeMissions: 2,
    totalMissions: 47,
    successRate: 96.8,
    currentAlert: 'FLIGHT_NOMINAL',
    communicationLoop: 'FLIGHT_LOOP_1',
    weatherStatus: 'GO',
    rangeStatus: 'GREEN',
    facilityStatus: 'NOMINAL',
    backupSystems: 'READY'
  });

  const [telemetryData, setTelemetryData] = useState([]);
  const [missionTimeline, setMissionTimeline] = useState([]);
  const [systemAlerts, setSystemAlerts] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 15 * 60 * 1000,
      severity: 'CAUTION',
      system: 'COMMUNICATION',
      message: 'Intermittent signal degradation on COMM-2',
      mission: 'mission_001',
      controller: 'INCO',
      status: 'MONITORING',
      resolution: 'Switching to backup comm system'
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'ADVISORY',
      system: 'NAVIGATION',
      message: 'GPS constellation optimization available',
      mission: 'mission_002',
      controller: 'GNC',
      status: 'ACKNOWLEDGED',
      resolution: 'Optimization scheduled for next orbit'
    }
  ]);

  const generateTelemetryData = () => {
    const data = [];
    for (let i = 59; i >= 0; i--) {
      const time = new Date();
      time.setMinutes(time.getMinutes() - i);
      data.push({
        time: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        altitude: Math.random() * 50 + 70, // 70-120 km
        velocity: Math.random() * 2 + 6, // 6-8 km/s
        communication: Math.random() * 10 + 85, // 85-95%
        power: Math.random() * 15 + 80, // 80-95%
        thermal: Math.random() * 20 + 15, // 15-35°C
        attitude_error: Math.random() * 0.5 // 0-0.5 degrees
      });
    }
    return data;
  };

  const generateMissionTimeline = () => {
    return [
      { time: 'T-00:45:00', event: 'Go/No-Go Poll', status: 'UPCOMING', responsible: 'FLIGHT' },
      { time: 'T-00:30:00', event: 'Weather Check', status: 'UPCOMING', responsible: 'WEATHER' },
      { time: 'T-00:15:00', event: 'Final Systems Check', status: 'UPCOMING', responsible: 'EECOM' },
      { time: 'T-00:09:00', event: 'Launch Commit', status: 'UPCOMING', responsible: 'FLIGHT' },
      { time: 'T-00:05:00', event: 'Auto Sequence Start', status: 'UPCOMING', responsible: 'GNC' },
      { time: 'T+00:00:00', event: 'Liftoff', status: 'UPCOMING', responsible: 'FLIGHT' },
      { time: 'T+00:02:30', event: 'Main Engine Cutoff', status: 'SCHEDULED', responsible: 'PROPULSION' },
      { time: 'T+00:10:00', event: 'Orbit Insertion', status: 'SCHEDULED', responsible: 'GNC' }
    ];
  };

  useEffect(() => {
    setTelemetryData(generateTelemetryData());
    setMissionTimeline(generateMissionTimeline());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update mission statuses and telemetry
      setMissions(prev => prev.map(mission => {
        let newMissionTime = mission.missionTime;
        let newAltitude = mission.altitude;
        let newVelocity = mission.velocity;
        let newCommStrength = mission.communicationStrength;
        
        if (mission.status === 'ACTIVE') {
          newMissionTime += 5; // 5 seconds per update
          newAltitude = Math.max(50, Math.min(200, mission.altitude + (Math.random() - 0.5) * 2));
          newVelocity = Math.max(2, Math.min(10, mission.velocity + (Math.random() - 0.5) * 0.1));
          newCommStrength = Math.max(70, Math.min(100, mission.communicationStrength + (Math.random() - 0.5) * 3));
        }
        
        if (mission.status === 'COUNTDOWN' && mission.missionTime < 0) {
          newMissionTime += 5;
          if (newMissionTime >= 0) {
            return { ...mission, status: 'ACTIVE', phase: 'ASCENT', missionTime: 0 };
          }
        }

        // Update objectives progress
        const updatedObjectives = mission.objectives.map(obj => {
          if (obj.status === 'IN_PROGRESS') {
            const newProgress = Math.min(100, obj.progress + Math.random() * 2);
            if (newProgress >= 100) {
              return { ...obj, status: 'COMPLETED', progress: 100 };
            }
            return { ...obj, progress: newProgress };
          }
          return obj;
        });

        return {
          ...mission,
          missionTime: newMissionTime,
          altitude: newAltitude,
          velocity: newVelocity,
          communicationStrength: newCommStrength,
          objectives: updatedObjectives
        };
      }));

      // Update flight controllers
      setFlightControllers(prev => prev.map(fc => ({
        ...fc,
        alertLevel: Math.random() > 0.95 ? 'YELLOW' : fc.alertLevel === 'YELLOW' && Math.random() > 0.5 ? 'GREEN' : fc.alertLevel
      })));

      // Update mission control metrics
      setMissionControl(prev => ({
        ...prev,
        successRate: Math.max(90, Math.min(99, prev.successRate + (Math.random() - 0.5) * 0.1))
      }));

      // Occasionally add new system alerts
      if (Math.random() > 0.98) {
        const severities = ['ADVISORY', 'CAUTION', 'WARNING'];
        const systems = ['COMMUNICATION', 'NAVIGATION', 'POWER', 'THERMAL', 'PROPULSION'];
        const controllers = ['FLIGHT', 'CAPCOM', 'EECOM', 'GNC', 'INCO'];
        
        const newAlert = {
          id: `alert_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          system: systems[Math.floor(Math.random() * systems.length)],
          message: 'Automated system monitoring alert',
          mission: missions[Math.floor(Math.random() * missions.length)].id,
          controller: controllers[Math.floor(Math.random() * controllers.length)],
          status: 'NEW',
          resolution: 'Investigating'
        };
        
        setSystemAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [missions]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'COUNTDOWN': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'COMPLETED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'PLANNING': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'ABORTED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'ON_CONSOLE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFF_CONSOLE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAlertLevelColor = (level) => {
    switch (level) {
      case 'GREEN': return 'text-green-400 bg-green-400/20';
      case 'YELLOW': return 'text-yellow-400 bg-yellow-400/20';
      case 'RED': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'WARNING': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'CAUTION': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ADVISORY': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getObjectiveStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED': return 'text-green-400';
      case 'IN_PROGRESS': return 'text-blue-400';
      case 'SCHEDULED': return 'text-gray-400';
      case 'READY': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const formatMissionTime = (seconds) => {
    const isNegative = seconds < 0;
    const absSeconds = Math.abs(seconds);
    const hours = Math.floor(absSeconds / 3600);
    const minutes = Math.floor((absSeconds % 3600) / 60);
    const secs = absSeconds % 60;
    
    const timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return isNegative ? `T-${timeStr}` : `T+${timeStr}`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚀 SPACE MISSION CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {missionControl.currentShift}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            NASA/SpaceX-inspired operations control
          </div>
        </div>
      </div>

      {/* Mission Control Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ACTIVE MISSIONS</div>
              <div className="text-2xl font-bold text-blue-100">
                {missionControl.activeMissions}
              </div>
              <div className="text-xs text-blue-300">
                {missionControl.totalMissions} total
              </div>
            </div>
            <div className="text-3xl opacity-60">🛰️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SUCCESS RATE</div>
              <div className="text-2xl font-bold text-green-100">
                {missionControl.successRate.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">mission success</div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">FLIGHT DIRECTOR</div>
              <div className="text-lg font-bold text-purple-100">
                {missionControl.flightDirector}
              </div>
              <div className="text-xs text-purple-300">commanding</div>
            </div>
            <div className="text-3xl opacity-60">👨‍🚀</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">FACILITY STATUS</div>
              <div className="text-lg font-bold text-orange-100">
                {missionControl.facilityStatus}
              </div>
              <div className="text-xs text-orange-300">{missionControl.currentAlert}</div>
            </div>
            <div className="text-3xl opacity-60">🏢</div>
          </div>
        </div>
      </div>

      {/* Active Missions and Flight Controllers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Missions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛸 ACTIVE MISSIONS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {missions.map((mission) => (
              <div key={mission.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{mission.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(mission.status)}`}>
                      {mission.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {mission.type}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Mission Time</div>
                    <div className="text-cyan-400 font-bold font-mono">
                      {formatMissionTime(mission.missionTime)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Altitude</div>
                    <div className="text-green-400 font-bold">{mission.altitude.toFixed(1)} km</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Velocity</div>
                    <div className="text-blue-400 font-bold">{mission.velocity.toFixed(2)} km/s</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Commander</div>
                    <div className="text-purple-400">{mission.commander}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Phase</div>
                    <div className="text-yellow-400">{mission.phase}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Comm Signal</div>
                    <div className="text-orange-400">{mission.communicationStrength.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-2">Mission Objectives:</div>
                  {mission.objectives.map((objective, index) => (
                    <div key={index} className="flex justify-between items-center text-xs mb-1">
                      <span className="text-gray-300">{objective.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className={getObjectiveStatusColor(objective.status)}>
                          {objective.status}
                        </span>
                        <span className="text-white">{objective.progress.toFixed(0)}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Crew:</div>
                  <div className="flex flex-wrap gap-1">
                    {mission.crew.map((crewMember, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300">
                        {crewMember}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flight Controllers */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎮 FLIGHT CONTROLLERS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {flightControllers.map((fc) => (
              <div key={fc.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{fc.callSign}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(fc.status)}`}>
                      {fc.status}
                    </span>
                    <div className={`w-3 h-3 rounded-full ${getAlertLevelColor(fc.alertLevel)}`}></div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{fc.position}</div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Agent</div>
                    <div className="text-cyan-400">{fc.agent}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Console</div>
                    <div className="text-green-400">{fc.console}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Mission</div>
                    <div className="text-purple-400">{fc.currentMission || 'None'}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Experience</div>
                    <div className="text-yellow-400">{fc.experience}</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-1">Certifications:</div>
                  <div className="flex flex-wrap gap-1">
                    {fc.certifications.map((cert, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300 text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Telemetry Data and Mission Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time Telemetry */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 REAL-TIME TELEMETRY
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={telemetryData}>
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
                dataKey="altitude" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Altitude (km)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="velocity" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Velocity (km/s)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="communication" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Comm Signal (%)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="power" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Power Level (%)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mission Timeline */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⏰ MISSION TIMELINE
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {missionTimeline.map((event, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-cyan-400 font-mono text-sm font-bold">
                      {event.time}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                      event.status === 'UPCOMING' ? 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30' :
                      event.status === 'SCHEDULED' ? 'text-blue-400 bg-blue-400/20 border-blue-400/30' :
                      'text-green-400 bg-green-400/20 border-green-400/30'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <span className="text-purple-400 text-xs">{event.responsible}</span>
                </div>
                <div className="text-sm text-white">{event.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Alerts and Console Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 MISSION CONTROL ALERTS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Alerts */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Active System Alerts</h4>
            {systemAlerts.length === 0 ? (
              <div className="text-green-400 text-center py-4">
                ALL SYSTEMS NOMINAL ✅
              </div>
            ) : (
              <div className="space-y-2">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <span className="text-cyan-400 text-xs">{alert.system}</span>
                        <span className="text-purple-400 text-xs">{alert.controller}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {formatTime(alert.timestamp)}
                      </div>
                    </div>
                    
                    <div className="text-sm text-white mb-1">{alert.message}</div>
                    <div className="text-xs text-green-400">
                      Resolution: {alert.resolution}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Console Status Overview */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Console Status Overview</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Weather</div>
                <div className="text-lg font-bold text-green-400">{missionControl.weatherStatus}</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Range</div>
                <div className="text-lg font-bold text-green-400">{missionControl.rangeStatus}</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Backup Systems</div>
                <div className="text-lg font-bold text-blue-400">{missionControl.backupSystems}</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Comm Loop</div>
                <div className="text-lg font-bold text-purple-400">{missionControl.communicationLoop}</div>
              </div>
            </div>

            <div className="mt-4 bg-gray-700 rounded p-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Next Shift Change</span>
                <span className="text-yellow-400">{formatTime(Date.now() + (missionControl.shiftChange - Date.now()))}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Incoming Team</span>
                <span className="text-cyan-400">{missionControl.nextShift}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceMissionCenter;