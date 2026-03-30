import React, { useState, useEffect } from 'react';
import { Zap, AlertTriangle, Activity, Thermometer, Gauge, Atom, Shield, Database, Settings, Eye, Clock, TrendingUp } from 'lucide-react';

const NuclearPowerControlCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [reactorStatus, setReactorStatus] = useState({
    unit1: {
      status: 'OPERATING',
      power: 98.7, // % rated thermal power
      temperature: 315.5, // °C
      pressure: 157.2, // bar
      coolantFlow: 24500, // m3/h
      controlRods: 185, // steps withdrawn
      neutronFlux: 102.4 // % nominal
    },
    unit2: {
      status: 'OPERATING', 
      power: 95.2,
      temperature: 312.8,
      pressure: 156.8,
      coolantFlow: 24200,
      controlRods: 178,
      neutronFlux: 98.6
    },
    unit3: {
      status: 'SHUTDOWN',
      power: 0,
      temperature: 45.2,
      pressure: 1.0,
      coolantFlow: 1200,
      controlRods: 0,
      neutronFlux: 0
    }
  });

  const [safetySystemStatus, setSafetySystemStatus] = useState({
    emergencyCore: { status: 'STANDBY', test: 'PASSED', lastTest: '12:00' },
    containment: { status: 'INTACT', pressure: -0.02, leakage: 0.001 },
    radiation: { status: 'NORMAL', level: 0.12, limit: 2.5 },
    fireProtection: { status: 'ARMED', zones: 247, active: 0 },
    backup: { status: 'AVAILABLE', diesel: 'READY', battery: 98.5 }
  });

  const [systemAlarms, setSystemAlarms] = useState([
    { 
      id: 1, 
      level: 'ADVISORY', 
      system: 'TURBINE-1A', 
      message: 'Vibration reading elevated - monitoring', 
      time: '14:23:15', 
      acknowledged: true 
    },
    { 
      id: 2, 
      level: 'CAUTION', 
      system: 'COOLANT-2B', 
      message: 'Secondary loop flow rate 2% below nominal', 
      time: '14:18:42', 
      acknowledged: false 
    },
    { 
      id: 3, 
      level: 'WARNING', 
      system: 'UNIT-3', 
      message: 'Planned maintenance shutdown - Day 3 of 45', 
      time: '06:00:00', 
      acknowledged: true 
    }
  ]);

  const [electricalGrid, setElectricalGrid] = useState({
    totalOutput: 2847, // MW
    gridFrequency: 50.02, // Hz
    voltage: 400.5, // kV
    loadDemand: 2890, // MW
    transmission: 'STABLE',
    switchyard: 'NORMAL'
  });

  const [environmentalData, setEnvironmentalData] = useState({
    radiation: {
      boundary: 0.08, // μSv/h
      stack: 0.003, // Bq/m³
      liquid: 0.001 // Bq/L
    },
    meteorology: {
      windSpeed: 12, // m/s
      windDirection: 245, // degrees
      temperature: 18, // °C
      precipitation: 'NONE'
    }
  });

  const [operatorActions, setOperatorActions] = useState([
    { time: '14:25:33', operator: 'SRO-1', action: 'Acknowledged TURBINE-1A vibration alarm' },
    { time: '14:22:15', operator: 'RO-2', action: 'Adjusted Unit-1 control rod group D +2 steps' },
    { time: '14:18:42', operator: 'SRO-1', action: 'Reviewed Unit-2 coolant flow parameters' },
    { time: '14:15:20', operator: 'RO-1', action: 'Completed hourly reactor coolant system tour' }
  ]);

  const [criticalParameters, setCriticalParameters] = useState({
    reactivity: 0.002, // delta-k/k
    xenonPoisoning: 1.8, // % reactivity
    burnup: 12500, // MWd/tU
    boronConcentration: 1250, // ppm
    steamPressure: 68.5, // bar
    feedwaterTemp: 229.8 // °C
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update reactor parameters with realistic fluctuations
      setReactorStatus(prev => ({
        ...prev,
        unit1: {
          ...prev.unit1,
          power: Math.max(95, Math.min(100, prev.unit1.power + (Math.random() - 0.5) * 0.3)),
          temperature: Math.max(310, Math.min(320, prev.unit1.temperature + (Math.random() - 0.5) * 0.8)),
          pressure: Math.max(155, Math.min(160, prev.unit1.pressure + (Math.random() - 0.5) * 0.2)),
          neutronFlux: Math.max(98, Math.min(105, prev.unit1.neutronFlux + (Math.random() - 0.5) * 0.5))
        },
        unit2: {
          ...prev.unit2,
          power: Math.max(90, Math.min(100, prev.unit2.power + (Math.random() - 0.5) * 0.4)),
          temperature: Math.max(310, Math.min(320, prev.unit2.temperature + (Math.random() - 0.5) * 0.8)),
          pressure: Math.max(155, Math.min(160, prev.unit2.pressure + (Math.random() - 0.5) * 0.2))
        }
      }));

      // Update electrical output based on reactor power
      setElectricalGrid(prev => ({
        ...prev,
        totalOutput: (reactorStatus.unit1.power * 9.86 + reactorStatus.unit2.power * 9.52),
        gridFrequency: Math.max(49.9, Math.min(50.1, prev.gridFrequency + (Math.random() - 0.5) * 0.02))
      }));

      // Update environmental readings
      setEnvironmentalData(prev => ({
        ...prev,
        radiation: {
          ...prev.radiation,
          boundary: Math.max(0.05, Math.min(0.15, prev.radiation.boundary + (Math.random() - 0.5) * 0.01))
        },
        meteorology: {
          ...prev.meteorology,
          windDirection: (prev.meteorology.windDirection + (Math.random() - 0.5) * 5 + 360) % 360
        }
      }));

      // Occasionally add new alarms
      if (Math.random() > 0.9) {
        const alarmTypes = [
          { level: 'ADVISORY', system: 'PUMP-3C', message: 'Seal leakage detected - within limits' },
          { level: 'CAUTION', system: 'HVAC-A', message: 'Control room temperature 1°C above setpoint' },
          { level: 'ADVISORY', system: 'INSTRUMENT-4D', message: 'Calibration due next week' }
        ];
        const newAlarm = alarmTypes[Math.floor(Math.random() * alarmTypes.length)];
        
        setSystemAlarms(prev => [
          {
            id: Date.now(),
            ...newAlarm,
            time: new Date().toLocaleTimeString(),
            acknowledged: false
          },
          ...prev.slice(0, 14) // Keep last 15 alarms
        ]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATING': return 'text-green-400';
      case 'SHUTDOWN': return 'text-blue-400';
      case 'STARTUP': return 'text-yellow-400';
      case 'SCRAM': return 'text-red-400';
      case 'MAINTENANCE': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getAlarmColor = (level) => {
    switch (level) {
      case 'WARNING': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'CAUTION': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'ADVISORY': return 'text-blue-400 bg-blue-900/30 border-blue-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const getSafetyStatusColor = (status) => {
    switch (status) {
      case 'NORMAL':
      case 'STANDBY':
      case 'INTACT':
      case 'ARMED':
      case 'AVAILABLE':
      case 'READY': return 'text-green-400';
      case 'TESTING': return 'text-yellow-400';
      case 'DEGRADED': return 'text-orange-400';
      case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-red-400">NUCLEAR POWER CONTROL CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">PLANT: POWERSCALE-1</span>
            <span className="mr-4">SHIFT: DAY</span>
            <span>{new Date(timestamp).toLocaleTimeString()} LOCAL</span>
          </div>
        </div>

        {/* Critical Safety Status Strip */}
        <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-red-400 mr-3" />
              <div>
                <span className="text-red-400 font-bold text-lg">SAFETY SYSTEMS STATUS</span>
                <div className="text-sm text-green-400">ALL SAFETY SYSTEMS OPERATIONAL</div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">ECCS</div>
                <div className={`font-bold ${getSafetyStatusColor(safetySystemStatus.emergencyCore.status)}`}>
                  {safetySystemStatus.emergencyCore.status}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">CONTAINMENT</div>
                <div className={`font-bold ${getSafetyStatusColor(safetySystemStatus.containment.status)}`}>
                  {safetySystemStatus.containment.status}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">RADIATION</div>
                <div className={`font-bold ${getSafetyStatusColor(safetySystemStatus.radiation.status)}`}>
                  {safetySystemStatus.radiation.status}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">BACKUP POWER</div>
                <div className={`font-bold ${getSafetyStatusColor(safetySystemStatus.backup.status)}`}>
                  {safetySystemStatus.backup.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reactor Units Overview */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {Object.entries(reactorStatus).map(([unit, status]) => (
            <div key={unit} className="bg-gray-900 rounded border border-gray-700">
              <div className="p-4 border-b border-gray-700">
                <h3 className="font-bold text-white flex items-center">
                  <Atom className="w-5 h-5 mr-2 text-orange-400" />
                  {unit.toUpperCase()} - {status.power.toFixed(1)}% POWER
                </h3>
                <span className={`text-sm uppercase font-bold ${getStatusColor(status.status)}`}>
                  {status.status}
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">Temp:</div>
                    <div className="text-cyan-400 font-bold">{status.temperature.toFixed(1)}°C</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">Pressure:</div>
                    <div className="text-green-400 font-bold">{status.pressure.toFixed(1)} bar</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">Coolant:</div>
                    <div className="text-blue-400 font-bold">{status.coolantFlow.toLocaleString()}</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="text-gray-400">Rods:</div>
                    <div className="text-purple-400 font-bold">{status.controlRods}</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded col-span-2">
                    <div className="text-gray-400">Neutron Flux:</div>
                    <div className="text-yellow-400 font-bold">{status.neutronFlux.toFixed(1)}%</div>
                  </div>
                </div>
                {status.status === 'OPERATING' && (
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-yellow-400 h-3 rounded-full transition-all duration-2000"
                      style={{ width: `${status.power}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main Control Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Alarm System */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                PLANT ALARMS
              </h3>
              <div className="text-xs text-gray-400">{systemAlarms.filter(a => !a.acknowledged).length} unacknowledged</div>
            </div>
            <div className="p-4 max-h-80 overflow-y-auto">
              {systemAlarms.map((alarm) => (
                <div 
                  key={alarm.id} 
                  className={`p-2 rounded border mb-2 text-xs ${getAlarmColor(alarm.level)} ${
                    !alarm.acknowledged ? 'animate-pulse' : 'opacity-70'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold">{alarm.level}</span>
                    <span className="text-gray-400">{alarm.time}</span>
                  </div>
                  <div className="text-cyan-400 font-bold mb-1">{alarm.system}</div>
                  <div>{alarm.message}</div>
                  {!alarm.acknowledged && (
                    <div className="mt-1 text-right">
                      <span className="bg-red-900 text-red-300 px-1 rounded text-xs">ACK</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Critical Parameters */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Gauge className="w-5 h-5 mr-2 text-purple-400" />
                CRITICAL PARAMETERS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-2 text-xs">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Reactivity:</div>
                  <div className="text-green-400 font-bold">{criticalParameters.reactivity.toFixed(4)} Δk/k</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Xenon:</div>
                  <div className="text-blue-400 font-bold">{criticalParameters.xenonPoisoning.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Burnup:</div>
                  <div className="text-orange-400 font-bold">{criticalParameters.burnup.toLocaleString()} MWd/tU</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Boron:</div>
                  <div className="text-cyan-400 font-bold">{criticalParameters.boronConcentration} ppm</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Steam Press:</div>
                  <div className="text-yellow-400 font-bold">{criticalParameters.steamPressure.toFixed(1)} bar</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Feed H₂O:</div>
                  <div className="text-purple-400 font-bold">{criticalParameters.feedwaterTemp.toFixed(1)}°C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Electrical Grid Status */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                ELECTRICAL GRID
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-yellow-400">
                  {electricalGrid.totalOutput.toFixed(0)} MW
                </div>
                <div className="text-sm text-gray-400">Total Generation</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Frequency:</span>
                  <span className="text-green-400">{electricalGrid.gridFrequency.toFixed(2)} Hz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Voltage:</span>
                  <span className="text-cyan-400">{electricalGrid.voltage.toFixed(1)} kV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Load Demand:</span>
                  <span className="text-white">{electricalGrid.loadDemand.toLocaleString()} MW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transmission:</span>
                  <span className="text-green-400">{electricalGrid.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Switchyard:</span>
                  <span className="text-green-400">{electricalGrid.switchyard}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Monitoring */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-green-400" />
                ENVIRONMENTAL
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="text-xs space-y-2">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Boundary Radiation:</div>
                  <div className="text-green-400 font-bold">{environmentalData.radiation.boundary.toFixed(2)} μSv/h</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Stack Release:</div>
                  <div className="text-blue-400 font-bold">{environmentalData.radiation.stack.toFixed(3)} Bq/m³</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Liquid Release:</div>
                  <div className="text-cyan-400 font-bold">{environmentalData.radiation.liquid.toFixed(3)} Bq/L</div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Wind:</div>
                  <div className="text-yellow-400 font-bold">
                    {environmentalData.meteorology.windDirection.toFixed(0)}° / {environmentalData.meteorology.windSpeed} m/s
                  </div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="text-gray-400">Temperature:</div>
                  <div className="text-purple-400 font-bold">{environmentalData.meteorology.temperature}°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operator Log */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-400" />
              OPERATOR ACTIONS LOG
            </h3>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {operatorActions.map((action, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800 p-3 rounded text-sm">
                  <div className="flex items-center">
                    <span className="text-blue-400 font-mono mr-3">[{action.time}]</span>
                    <span className="text-cyan-400 mr-3">{action.operator}:</span>
                    <span className="text-gray-300">{action.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuclearPowerControlCenter;