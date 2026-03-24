// NASA-Inspired Real-Time Telemetry Center - March 2026
// Based on NASA Mission Control and OpenMCT standards for telemetry visualization
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, ScatterChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Scatter, Bar, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function NASAInspiredRealTimeTelemetry() {
  const [telemetryData, setTelemetryData] = useState({
    missionTime: '04:13:27',
    missionElapsed: '08:15:42',
    systemStatus: 'NOMINAL',
    vehicleStability: 'GO',
    flightDirectorStatus: 'GO',
    powerSystems: 98.7,
    thermalSystems: 96.4,
    communicationsLink: 99.2,
    navigationAccuracy: 99.8,
    propulsionEfficiency: 97.3,
    structuralIntegrity: 99.1
  });

  const [realTimeStreams, setRealTimeStreams] = useState([
    { timestamp: '04:13:27', power: 98.7, thermal: 96.4, comms: 99.2, nav: 99.8, prop: 97.3, struct: 99.1 },
    { timestamp: '04:13:26', power: 98.9, thermal: 96.2, comms: 99.1, nav: 99.7, prop: 97.5, struct: 99.0 },
    { timestamp: '04:13:25', power: 98.6, thermal: 96.5, comms: 99.3, nav: 99.9, prop: 97.2, struct: 99.2 },
    { timestamp: '04:13:24', power: 98.8, thermal: 96.3, comms: 99.0, nav: 99.6, prop: 97.4, struct: 99.1 },
    { timestamp: '04:13:23', power: 98.5, thermal: 96.6, comms: 99.2, nav: 99.8, prop: 97.1, struct: 99.0 }
  ]);

  const [alerts, setAlerts] = useState([
    { id: 'FD-001', priority: 'INFO', system: 'FLIGHT DIRECTOR', message: 'Mission timeline nominal', time: '04:13:15', status: 'ACTIVE' },
    { id: 'PWR-047', priority: 'CAUTION', system: 'POWER', message: 'Bus voltage fluctuation within limits', time: '04:12:58', status: 'MONITOR' },
    { id: 'COM-023', priority: 'INFO', system: 'COMMUNICATIONS', message: 'Signal strength excellent', time: '04:12:45', status: 'CLEAR' },
    { id: 'NAV-089', priority: 'INFO', system: 'NAVIGATION', message: 'GPS lock acquired - precision mode', time: '04:12:12', status: 'NOMINAL' }
  ]);

  const [flightDirectorLoop, setFlightDirectorLoop] = useState([
    { position: 'FLIGHT', name: 'ALEKSANDRA', status: 'GO', console: 'MISSION CONTROL' },
    { position: 'CAPCOM', name: 'AI-COMM', status: 'GO', console: 'COMMUNICATIONS' },
    { position: 'FIDO', name: 'TRAJECTORY', status: 'GO', console: 'FLIGHT DYNAMICS' },
    { position: 'EECOM', name: 'POWER-SYS', status: 'GO', console: 'ELECTRICAL & ENVIRONMENTAL' },
    { position: 'INCO', name: 'DATA-LINK', status: 'GO', console: 'INSTRUMENTATION & COMMUNICATIONS' },
    { position: 'PROCEDURES', name: 'WORKFLOW', status: 'GO', console: 'MISSION PROCEDURES' }
  ]);

  const [missionPhases, setMissionPhases] = useState([
    { phase: 'PRE-FLIGHT', status: 'COMPLETE', duration: '02:15:30', completion: 100 },
    { phase: 'LAUNCH', status: 'COMPLETE', duration: '00:08:42', completion: 100 },
    { phase: 'ORBIT INSERTION', status: 'COMPLETE', duration: '00:12:15', completion: 100 },
    { phase: 'MISSION OPS', status: 'ACTIVE', duration: '08:15:42', completion: 67 },
    { phase: 'RE-ENTRY PREP', status: 'STANDBY', duration: '00:00:00', completion: 0 },
    { phase: 'LANDING', status: 'STANDBY', duration: '00:00:00', completion: 0 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update mission time
      const now = new Date();
      const missionTime = now.toLocaleTimeString('en-US', { hour12: false });
      
      // Simulate real-time telemetry updates
      const newData = {
        timestamp: missionTime,
        power: Math.max(95, Math.min(100, telemetryData.powerSystems + (Math.random() - 0.5) * 1.2)),
        thermal: Math.max(90, Math.min(100, telemetryData.thermalSystems + (Math.random() - 0.5) * 1.5)),
        comms: Math.max(95, Math.min(100, telemetryData.communicationsLink + (Math.random() - 0.5) * 0.8)),
        nav: Math.max(95, Math.min(100, telemetryData.navigationAccuracy + (Math.random() - 0.5) * 0.5)),
        prop: Math.max(90, Math.min(100, telemetryData.propulsionEfficiency + (Math.random() - 0.5) * 1.8)),
        struct: Math.max(95, Math.min(100, telemetryData.structuralIntegrity + (Math.random() - 0.5) * 0.7))
      };

      setTelemetryData(prev => ({
        ...prev,
        missionTime: missionTime,
        powerSystems: newData.power,
        thermalSystems: newData.thermal,
        communicationsLink: newData.comms,
        navigationAccuracy: newData.nav,
        propulsionEfficiency: newData.prop,
        structuralIntegrity: newData.struct
      }));

      setRealTimeStreams(prev => {
        const updated = [newData, ...prev.slice(0, 29)]; // Keep last 30 data points
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [telemetryData]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'GO': return 'text-green-400';
      case 'NOMINAL': return 'text-green-400';
      case 'CAUTION': return 'text-yellow-400';
      case 'WARNING': return 'text-red-400';
      case 'ABORT': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'INFO': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      case 'CAUTION': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'WARNING': return 'border-orange-500 bg-orange-900/20 text-orange-300';
      case 'CRITICAL': return 'border-red-500 bg-red-900/20 text-red-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* NASA Mission Control Header */}
        <div className="border-2 border-green-400 p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-green-400">NASA MISSION CONTROL - ALEKSANDRA</h1>
              <p className="text-green-300">REAL-TIME TELEMETRY & FLIGHT OPERATIONS</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{telemetryData.missionTime}</div>
              <div className="text-sm">MISSION ELAPSED: {telemetryData.missionElapsed}</div>
              <div className="text-sm">STATUS: <span className={getStatusColor(telemetryData.systemStatus)}>{telemetryData.systemStatus}</span></div>
            </div>
          </div>
        </div>

        {/* Flight Director Console */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <div className="border border-green-400 p-4">
            <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-green-400 pb-2">
              🎯 FLIGHT DIRECTOR LOOP
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {flightDirectorLoop.map((console, index) => (
                <div key={index} className="border border-gray-600 p-3 bg-gray-900/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-green-300">{console.position}</div>
                      <div className="text-sm text-gray-400">{console.name}</div>
                      <div className="text-xs text-gray-500">{console.console}</div>
                    </div>
                    <div className={`font-bold ${getStatusColor(console.status)}`}>
                      {console.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Phase Status */}
          <div className="border border-green-400 p-4">
            <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-green-400 pb-2">
              🚀 MISSION PHASE STATUS
            </h3>
            <div className="space-y-3">
              {missionPhases.map((phase, index) => (
                <div key={index} className="border border-gray-600 p-3 bg-gray-900/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-green-300">{phase.phase}</span>
                    <span className={`font-bold ${getStatusColor(phase.status)}`}>{phase.status}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Duration: {phase.duration}</span>
                    <span>{phase.completion}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${phase.completion}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-Time Telemetry Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <div className="border border-green-400 p-4">
            <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-green-400 pb-2">
              📊 SYSTEM PERFORMANCE TELEMETRY
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={realTimeStreams.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#065f46" />
                <XAxis dataKey="timestamp" stroke="#10b981" tick={{ fontSize: 10 }} />
                <YAxis stroke="#10b981" domain={[90, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #10b981' }}
                  labelStyle={{ color: '#10b981' }}
                />
                <Legend />
                <Line type="monotone" dataKey="power" stroke="#3b82f6" strokeWidth={2} name="Power %" dot={false} />
                <Line type="monotone" dataKey="thermal" stroke="#f59e0b" strokeWidth={2} name="Thermal %" dot={false} />
                <Line type="monotone" dataKey="comms" stroke="#8b5cf6" strokeWidth={2} name="Comms %" dot={false} />
                <Line type="monotone" dataKey="nav" stroke="#10b981" strokeWidth={2} name="Navigation %" dot={false} />
                <ReferenceLine y={95} stroke="#dc2626" strokeDasharray="5 5" label="MINIMUM" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="border border-green-400 p-4">
            <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-green-400 pb-2">
              🎛️ SUBSYSTEM STATUS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-600 p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{telemetryData.powerSystems.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">POWER SYSTEMS</div>
                <div className="text-xs text-green-300">NOMINAL</div>
              </div>
              <div className="border border-gray-600 p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{telemetryData.thermalSystems.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">THERMAL</div>
                <div className="text-xs text-green-300">NOMINAL</div>
              </div>
              <div className="border border-gray-600 p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{telemetryData.communicationsLink.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">COMMUNICATIONS</div>
                <div className="text-xs text-green-300">STRONG</div>
              </div>
              <div className="border border-gray-600 p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{telemetryData.navigationAccuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">NAVIGATION</div>
                <div className="text-xs text-green-300">PRECISION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Control Alerts */}
        <div className="border border-green-400 p-4">
          <h3 className="text-xl font-bold text-green-400 mb-4 border-b border-green-400 pb-2">
            🚨 MISSION CONTROL ALERTS & COMMUNICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-3 border-l-4 ${getPriorityColor(alert.priority)}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-sm">{alert.id} - {alert.system}</span>
                  <span className="text-xs">{alert.time}</span>
                </div>
                <p className="text-sm mb-1">{alert.message}</p>
                <div className="text-xs font-bold">{alert.priority} - {alert.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Control Footer */}
        <div className="border-t-2 border-green-400 mt-6 pt-4 text-center">
          <div className="text-green-300">
            NASA MISSION CONTROL CENTER | ALEKSANDRA AI FLIGHT OPERATIONS | REAL-TIME TELEMETRY SYSTEM V2.0
          </div>
          <div className="text-sm text-gray-500 mt-2">
            All systems nominal | Mission timeline on schedule | Flight Director: GO for continued operations
          </div>
        </div>
      </div>
    </div>
  );
}