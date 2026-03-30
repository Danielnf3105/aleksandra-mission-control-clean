import React, { useState, useEffect } from 'react';
import { Rocket, Gauge, Satellite, Target, Zap, AlertTriangle, CheckCircle, Radio, Fuel, Thermometer } from 'lucide-react';

const SpaceXStyleOperationsCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [missionData, setMissionData] = useState({
    missionPhase: 'OPERATIONAL',
    flightTime: 'T+ 03:42:15',
    velocity: 27580,
    altitude: 408,
    downrange: 1247,
    apogee: 418,
    perigee: 398,
    inclination: 51.6,
    systems: {
      propulsion: { status: 'NOMINAL', performance: 97.3 },
      guidance: { status: 'NOMINAL', performance: 98.7 },
      telemetry: { status: 'NOMINAL', performance: 99.1 },
      thermal: { status: 'NOMINAL', performance: 94.8 },
      power: { status: 'NOMINAL', performance: 96.2 },
      communications: { status: 'NOMINAL', performance: 98.9 }
    }
  });

  const [vehicleStatus, setVehicleStatus] = useState({
    engines: [
      { id: 'M1D-001', thrust: 845, temperature: 3400, status: 'NOMINAL' },
      { id: 'M1D-002', thrust: 847, temperature: 3395, status: 'NOMINAL' },
      { id: 'M1D-003', thrust: 843, temperature: 3410, status: 'NOMINAL' },
      { id: 'M1D-004', thrust: 846, temperature: 3398, status: 'NOMINAL' },
      { id: 'M1D-005', thrust: 848, temperature: 3405, status: 'NOMINAL' },
      { id: 'M1D-006', thrust: 849, temperature: 3392, status: 'NOMINAL' },
      { id: 'M1D-007', thrust: 844, temperature: 3408, status: 'NOMINAL' },
      { id: 'M1D-008', thrust: 847, temperature: 3397, status: 'NOMINAL' },
      { id: 'M1D-009', thrust: 845, temperature: 3403, status: 'NOMINAL' }
    ],
    fuel: {
      rp1: 94.7,
      lox: 96.2,
      helium: 98.1,
      nitrogen: 97.4
    }
  });

  const [trajectoryData, setTrajectoryData] = useState([
    { time: '00:00', altitude: 0, velocity: 0, downrange: 0 },
    { time: '01:00', altitude: 45, velocity: 1247, downrange: 15 },
    { time: '02:00', altitude: 156, velocity: 3890, downrange: 78 },
    { time: '02:30', altitude: 245, velocity: 6124, downrange: 189 },
    { time: '03:00', altitude: 324, velocity: 8934, downrange: 367 },
    { time: '03:30', altitude: 385, velocity: 15678, downrange: 678 },
    { time: '03:42', altitude: 408, velocity: 27580, downrange: 1247 }
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, time: 'T+ 03:41:23', type: 'INFO', message: 'Nominal orbital insertion burn complete' },
    { id: 2, time: 'T+ 03:38:45', type: 'SUCCESS', message: 'Second stage ignition successful' },
    { id: 3, time: 'T+ 02:28:12', type: 'SUCCESS', message: 'First stage landing burn initiated' },
    { id: 4, time: 'T+ 02:26:34', type: 'SUCCESS', message: 'Stage separation confirmed' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      
      // Update mission data
      setMissionData(prev => {
        const [hours, minutes, seconds] = prev.flightTime.split('T+ ')[1].split(':').map(Number);
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;
        
        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
          if (newMinutes >= 60) {
            newMinutes = 0;
            newHours += 1;
          }
        }
        
        return {
          ...prev,
          flightTime: `T+ ${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`,
          velocity: prev.velocity + (Math.random() - 0.5) * 50,
          altitude: Math.max(380, Math.min(450, prev.altitude + (Math.random() - 0.5) * 5)),
          downrange: prev.downrange + Math.random() * 2
        };
      });

      // Update engine data
      setVehicleStatus(prev => ({
        ...prev,
        engines: prev.engines.map(engine => ({
          ...engine,
          thrust: Math.max(840, Math.min(850, engine.thrust + (Math.random() - 0.5) * 4)),
          temperature: Math.max(3390, Math.min(3415, engine.temperature + (Math.random() - 0.5) * 10))
        }))
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'NOMINAL': return 'text-green-400';
      case 'CAUTION': return 'text-yellow-400';
      case 'WARNING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'SUCCESS': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'WARNING': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'ERROR': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Radio className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Rocket className="w-8 h-8 text-white mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-white">DRAGON OPERATIONS</h1>
            <div className="text-sm text-gray-400">Mission Phase: {missionData.missionPhase}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">{missionData.flightTime}</div>
          <div className="text-sm text-gray-400">Mission Elapsed Time</div>
        </div>
      </div>

      {/* Primary Flight Data */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-blue-400">
          <div className="text-sm text-gray-400 mb-2">VELOCITY</div>
          <div className="text-3xl font-bold text-white">{missionData.velocity.toFixed(0)}</div>
          <div className="text-sm text-blue-400">km/h</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-green-400">
          <div className="text-sm text-gray-400 mb-2">ALTITUDE</div>
          <div className="text-3xl font-bold text-white">{missionData.altitude.toFixed(1)}</div>
          <div className="text-sm text-green-400">km</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-purple-400">
          <div className="text-sm text-gray-400 mb-2">DOWNRANGE</div>
          <div className="text-3xl font-bold text-white">{missionData.downrange.toFixed(0)}</div>
          <div className="text-sm text-purple-400">km</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-400">
          <div className="text-sm text-gray-400 mb-2">INCLINATION</div>
          <div className="text-3xl font-bold text-white">{missionData.inclination}</div>
          <div className="text-sm text-yellow-400">degrees</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Vehicle Systems */}
        <div className="bg-gray-900 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-bold flex items-center">
              <Satellite className="w-5 h-5 mr-2 text-blue-400" />
              VEHICLE SYSTEMS STATUS
            </h3>
          </div>
          <div className="p-4 space-y-4">
            {Object.entries(missionData.systems).map(([system, data]) => (
              <div key={system} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    data.status === 'NOMINAL' ? 'bg-green-400' : 
                    data.status === 'CAUTION' ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                  <span className="text-white uppercase font-semibold">{system}</span>
                </div>
                <div className="flex items-center">
                  <span className={`mr-4 ${getStatusColor(data.status)}`}>{data.status}</span>
                  <div className="w-16 bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full"
                      style={{ width: `${data.performance}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-400">{data.performance.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engine Data */}
        <div className="bg-gray-900 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-bold flex items-center">
              <Zap className="w-5 h-5 mr-2 text-orange-400" />
              MERLIN 1D ENGINE STATUS
            </h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {vehicleStatus.engines.slice(0, 9).map((engine, index) => (
                <div key={engine.id} className="bg-gray-800 p-3 rounded text-center">
                  <div className="text-xs text-gray-400 mb-1">{engine.id}</div>
                  <div className="text-sm font-bold text-white">{engine.thrust.toFixed(0)} kN</div>
                  <div className="text-xs text-orange-400">{engine.temperature.toFixed(0)}°K</div>
                  <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                    engine.status === 'NOMINAL' ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-700">
              <div className="text-sm text-gray-400 mb-2">PROPELLANT LEVELS</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>RP-1</span>
                    <span>{vehicleStatus.fuel.rp1}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full"
                      style={{ width: `${vehicleStatus.fuel.rp1}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>LOX</span>
                    <span>{vehicleStatus.fuel.lox}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-cyan-400 h-2 rounded-full"
                      style={{ width: `${vehicleStatus.fuel.lox}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Events */}
      <div className="bg-gray-900 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold flex items-center">
            <Radio className="w-5 h-5 mr-2 text-green-400" />
            MISSION EVENTS LOG
          </h3>
        </div>
        <div className="p-4 max-h-48 overflow-y-auto">
          <div className="space-y-2">
            {alerts.map(alert => (
              <div key={alert.id} className="flex items-center text-sm">
                {getAlertIcon(alert.type)}
                <span className="ml-3 text-gray-400 font-mono">{alert.time}</span>
                <span className="ml-4 text-white">{alert.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-8 bg-gray-800 p-4 rounded-lg flex justify-between items-center text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>TELEMETRY LINK</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>GROUND STATIONS</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>RANGE SAFETY</span>
          </div>
        </div>
        <div className="text-gray-400">
          DRAGON AUTONOMY ENABLED | ALL SYSTEMS NOMINAL | MISSION CONTINUES
        </div>
      </div>
    </div>
  );
};

export default SpaceXStyleOperationsCenter;