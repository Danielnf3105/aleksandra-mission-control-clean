// RealTimeMonitoring.js - Advanced Real-Time System Monitoring inspired by NASA/SpaceX Mission Control
import { useState, useEffect } from 'react';

const RealTimeMonitoring = () => {
  const [telemetryData, setTelemetryData] = useState({
    systemVitals: {
      cpuUsage: 23.7,
      memoryUsage: 67.2,
      diskUsage: 45.8,
      networkLatency: 12.4,
      temperature: 42.1
    },
    missionCritical: [
      { id: 'INST_001', name: 'Instagram Transcription Engine', status: 'NOMINAL', value: '11/11 processed' },
      { id: 'ORCH_002', name: 'System Orchestration', status: 'NOMINAL', value: '96.8% efficiency' },
      { id: 'PRED_003', name: 'Performance Forecasting', status: 'NOMINAL', value: '94.7% accuracy' },
      { id: 'COLL_004', name: 'Collaborative Intelligence', status: 'NOMINAL', value: '12 systems active' },
      { id: 'SCAL_005', name: 'Auto-Scaling System', status: 'NOMINAL', value: '2.4K operations' }
    ],
    alertSystem: {
      red: 0,
      yellow: 1,
      green: 7
    },
    timelineEvents: []
  });

  const [missionTime, setMissionTime] = useState({
    elapsed: 0,
    phase: 'OPERATIONAL',
    nextMilestone: 'Content Pipeline Optimization'
  });

  const [communicationStatus, setCommunicationStatus] = useState([
    { station: 'Vercel Primary', status: 'COMM GOOD', signal: 98.7, latency: 23 },
    { station: 'GitHub Repository', status: 'COMM GOOD', signal: 99.1, latency: 15 },
    { station: 'AgentMail Relay', status: 'COMM GOOD', signal: 94.3, latency: 45 },
    { station: 'Assembly AI Link', status: 'COMM GOOD', signal: 96.8, latency: 78 },
    { station: 'Local Development', status: 'COMM EXCELLENT', signal: 99.9, latency: 1 }
  ]);

  const [flightDirectorConsole, setFlightDirectorConsole] = useState({
    go_noGo: 'GO',
    currentPhase: 'OPERATIONAL PHASE',
    missionObjective: 'AI Agent Mission Control Deployment',
    weatherStatus: 'GREEN',
    powerSystems: 'NOMINAL',
    lifeSupportSystems: 'NOMINAL'
  });

  useEffect(() => {
    // Mission elapsed time counter
    const timeInterval = setInterval(() => {
      setMissionTime(prev => ({
        ...prev,
        elapsed: prev.elapsed + 1
      }));
    }, 1000);

    // Real-time telemetry updates (every 2 seconds)
    const telemetryInterval = setInterval(() => {
      setTelemetryData(prev => ({
        ...prev,
        systemVitals: {
          cpuUsage: Math.max(10, Math.min(90, prev.systemVitals.cpuUsage + (Math.random() - 0.5) * 5)),
          memoryUsage: Math.max(30, Math.min(95, prev.systemVitals.memoryUsage + (Math.random() - 0.5) * 3)),
          diskUsage: Math.max(20, Math.min(80, prev.systemVitals.diskUsage + (Math.random() - 0.5) * 2)),
          networkLatency: Math.max(5, Math.min(100, prev.networkLatency + (Math.random() - 0.5) * 10)),
          temperature: Math.max(35, Math.min(65, prev.systemVitals.temperature + (Math.random() - 0.5) * 2))
        }
      }));

      // Update communication status
      setCommunicationStatus(prev => prev.map(station => ({
        ...station,
        signal: Math.max(85, Math.min(100, station.signal + (Math.random() - 0.3) * 2)),
        latency: Math.max(1, station.latency + (Math.random() - 0.5) * 5)
      })));
    }, 2000);

    // Mission timeline events
    const eventInterval = setInterval(() => {
      const events = [
        'System health check completed - all green',
        'Agent communication protocols verified',
        'Performance metrics within nominal range',
        'Auto-scaling triggered successfully',
        'Data pipeline processing at optimal rate',
        'Intelligence systems operating normally',
        'Mission objectives on track'
      ];

      setTelemetryData(prev => ({
        ...prev,
        timelineEvents: [
          {
            time: new Date().toLocaleTimeString(),
            event: events[Math.floor(Math.random() * events.length)],
            type: 'INFO'
          },
          ...prev.timelineEvents.slice(0, 9)
        ]
      }));
    }, 15000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(telemetryInterval);
      clearInterval(eventInterval);
    };
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'NOMINAL': return '#10B981';
      case 'COMM GOOD': return '#10B981';
      case 'COMM EXCELLENT': return '#059669';
      case 'CAUTION': return '#F59E0B';
      case 'WARNING': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getSignalBars = (signal) => {
    const bars = Math.ceil(signal / 20);
    return '█'.repeat(bars) + '░'.repeat(5 - bars);
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Flight Director Console */}
      <div className="bg-gray-900 rounded-lg border-2 border-green-500 p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-green-400 mb-2">MISSION CONTROL CENTER</h2>
          <div className="text-lg text-white">ALEKSANDRA AI AGENT MISSION</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-900 rounded p-4 border border-green-500">
            <div className="text-green-400 text-sm mb-2">MISSION STATUS</div>
            <div className="text-2xl font-bold text-white">{flightDirectorConsole.go_noGo}</div>
            <div className="text-sm text-green-300">All Systems Nominal</div>
          </div>
          
          <div className="bg-blue-900 rounded p-4 border border-blue-500">
            <div className="text-blue-400 text-sm mb-2">MISSION ELAPSED TIME</div>
            <div className="text-2xl font-bold text-white">{formatTime(missionTime.elapsed)}</div>
            <div className="text-sm text-blue-300">{missionTime.phase}</div>
          </div>
          
          <div className="bg-purple-900 rounded p-4 border border-purple-500">
            <div className="text-purple-400 text-sm mb-2">NEXT OBJECTIVE</div>
            <div className="text-lg font-bold text-white break-words">{missionTime.nextMilestone}</div>
            <div className="text-sm text-purple-300">Primary Mission</div>
          </div>
        </div>
      </div>

      {/* System Vitals Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">🔥 SYSTEM VITALS</h3>
          
          <div className="space-y-4">
            {Object.entries(telemetryData.systemVitals).map(([key, value]) => {
              const isPercentage = key.includes('Usage');
              const displayValue = isPercentage ? `${value.toFixed(1)}%` : `${value.toFixed(1)}${key === 'temperature' ? '°C' : key === 'networkLatency' ? 'ms' : ''}`;
              const color = isPercentage 
                ? value > 80 ? '#EF4444' : value > 60 ? '#F59E0B' : '#10B981'
                : key === 'networkLatency' ? value > 50 ? '#EF4444' : value > 25 ? '#F59E0B' : '#10B981'
                : value > 60 ? '#EF4444' : value > 45 ? '#F59E0B' : '#10B981';
              
              return (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-300 uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-bold min-w-[60px] text-right">{displayValue}</span>
                    <div 
                      className="w-3 h-3 rounded-full border-2"
                      style={{ 
                        backgroundColor: color,
                        borderColor: color,
                        boxShadow: `0 0 10px ${color}`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Critical Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">⚡ MISSION CRITICAL SYSTEMS</h3>
          
          <div className="space-y-3">
            {telemetryData.missionCritical.map((system) => (
              <div key={system.id} className="flex items-center justify-between p-2 bg-gray-700 rounded">
                <div>
                  <div className="text-white font-medium">{system.id}</div>
                  <div className="text-xs text-gray-400">{system.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold" style={{ color: getStatusColor(system.status) }}>
                    {system.status}
                  </div>
                  <div className="text-xs text-gray-300">{system.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communication Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">📡 COMMUNICATION STATUS</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {communicationStatus.map((station, index) => (
            <div key={index} className="bg-gray-700 rounded p-4 border border-gray-600">
              <div className="text-center">
                <div className="text-sm font-bold text-white mb-2">{station.station}</div>
                <div 
                  className="text-xs font-bold mb-2"
                  style={{ color: getStatusColor(station.status) }}
                >
                  {station.status}
                </div>
                <div className="text-xs text-gray-300 mb-2">
                  Signal: {station.signal.toFixed(1)}%
                </div>
                <div className="text-xs font-mono text-green-400">
                  {getSignalBars(station.signal)}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {station.latency.toFixed(0)}ms
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Timeline */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">📋 MISSION TIMELINE</h3>
        
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {telemetryData.timelineEvents.map((event, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="text-gray-400 min-w-[80px]">{event.time}</span>
              <span className="text-green-400 mx-2">●</span>
              <span className="text-gray-300">{event.event}</span>
            </div>
          ))}
          {telemetryData.timelineEvents.length === 0 && (
            <div className="text-gray-500 text-center py-4">
              Mission timeline events will appear here...
            </div>
          )}
        </div>
      </div>

      {/* Alert Status Board */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">🚨 ALERT STATUS BOARD</h3>
        
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-red-900 rounded-lg p-4 border border-red-500">
            <div className="text-3xl font-bold text-red-400">{telemetryData.alertSystem.red}</div>
            <div className="text-red-300">RED ALERTS</div>
            <div className="text-xs text-red-200">Critical Issues</div>
          </div>
          
          <div className="bg-yellow-900 rounded-lg p-4 border border-yellow-500">
            <div className="text-3xl font-bold text-yellow-400">{telemetryData.alertSystem.yellow}</div>
            <div className="text-yellow-300">YELLOW ALERTS</div>
            <div className="text-xs text-yellow-200">Caution Items</div>
          </div>
          
          <div className="bg-green-900 rounded-lg p-4 border border-green-500">
            <div className="text-3xl font-bold text-green-400">{telemetryData.alertSystem.green}</div>
            <div className="text-green-300">GREEN STATUS</div>
            <div className="text-xs text-green-200">All Nominal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;