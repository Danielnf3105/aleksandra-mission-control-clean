// SpaceX-Inspired Operations Center - Based on Falcon Heavy & Starship Mission Control
// Integrating modern NOC design principles with 24 console engineering station layout
import { useState, useEffect } from 'react';
import { 
  Rocket, Zap, Target, Gauge, Satellite, Radio, AlertTriangle, CheckCircle,
  Users, Headphones, Activity, TrendingUp, Shield, Wifi, Server, Database,
  Monitor, Clock, Globe, BarChart3, LineChart, PieChart, Settings, Play,
  Pause, RotateCcw, ArrowUp, ArrowDown, Minus, Plus, Circle, Triangle
} from 'lucide-react';

export default function SpaceXInspiredOperationsCenter() {
  const [operationsData, setOperationsData] = useState({
    missionStatus: 'ACTIVE',
    vehicleStatus: 'NOMINAL',
    launchT: Date.now() + (8 * 60 * 60 * 1000), // T-8 hours
    currentPhase: 'PRE_LAUNCH_OPERATIONS',
    consoleStations: [
      { id: 'FLIGHT', name: 'Flight Director', status: 'GO', engineer: 'Sarah Chen', alert: false },
      { id: 'PROP', name: 'Propulsion', status: 'GO', engineer: 'Mike Torres', alert: false },
      { id: 'GNC', name: 'Guidance & Nav', status: 'GO', engineer: 'Alex Kim', alert: false },
      { id: 'THERMAL', name: 'Thermal', status: 'GO', engineer: 'Lisa Wang', alert: false },
      { id: 'POWER', name: 'Electrical Power', status: 'GO', engineer: 'Chris Davis', alert: false },
      { id: 'COMM', name: 'Communications', status: 'GO', engineer: 'Jordan Blake', alert: true },
      { id: 'RECOVERY', name: 'Recovery', status: 'GO', engineer: 'Sam Rivera', alert: false },
      { id: 'RANGE', name: 'Range Safety', status: 'GO', engineer: 'Taylor Fox', alert: false },
      { id: 'TELEMETRY', name: 'Telemetry', status: 'GO', engineer: 'Morgan Lee', alert: false },
      { id: 'PAYLOAD', name: 'Payload', status: 'GO', engineer: 'Casey Park', alert: false },
      { id: 'AVIONICS', name: 'Avionics', status: 'GO', engineer: 'Riley Chen', alert: false },
      { id: 'LANDING', name: 'Landing', status: 'GO', engineer: 'Drew Kim', alert: false }
    ],
    vehicleSystems: {
      booster: {
        engines: { status: 'NOMINAL', engines: 9, throttle: 0 },
        propellant: { status: 'LOADED', level: 98.7, pressure: 1247 },
        guidance: { status: 'ALIGNED', accuracy: 99.97 },
        recovery: { status: 'READY', legs: 'RETRACTED', fins: 'DEPLOYED' }
      },
      upperStage: {
        engine: { status: 'NOMINAL', throttle: 0 },
        propellant: { status: 'LOADED', level: 97.3, pressure: 856 },
        payload: { status: 'SECURED', mass: 22800, separation: 'ARMED' }
      },
      groundSystems: {
        strongback: { status: 'RETRACTED', position: 85 },
        umbilicals: { status: 'DISCONNECTED', fuel: false, power: false },
        tower: { status: 'CLEAR', distance: 150 },
        weather: { status: 'GO', wind: 8, temperature: 23, humidity: 67 }
      }
    },
    networkOperations: {
      infrastructure: [
        { name: 'Primary Telemetry', status: 'ONLINE', latency: 12, throughput: 98.7 },
        { name: 'Backup Communications', status: 'STANDBY', latency: 18, throughput: 94.2 },
        { name: 'Ground Station Network', status: 'ONLINE', coverage: 97.8, satellites: 12 },
        { name: 'Mission Control LAN', status: 'OPTIMAL', bandwidth: 10000, utilization: 34.7 }
      ],
      alerts: [
        { time: '04:42', severity: 'WARNING', system: 'COMM', message: 'Intermittent S-band signal degradation' },
        { time: '04:39', severity: 'INFO', system: 'TELEMETRY', message: 'Telemetry stream nominal' },
        { time: '04:35', severity: 'RESOLVED', system: 'POWER', message: 'Battery charging complete' }
      ],
      correlations: {
        activeAlerts: 1,
        suppressedAlerts: 23,
        correlationReduction: 94.7,
        noiseReduction: 'ENABLED'
      }
    },
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Mission Readiness', value: 97.8, unit: '%', trend: 'stable' },
        { metric: 'System Health', value: 99.2, unit: '%', trend: 'increasing' },
        { metric: 'Comm Reliability', value: 98.4, unit: '%', trend: 'decreasing' },
        { metric: 'Weather Compliance', value: 89.7, unit: '%', trend: 'stable' }
      ]
    },
    dashboardViews: [
      { name: 'Launch Overview', active: true, consoles: ['FLIGHT', 'PROP', 'GNC'] },
      { name: 'Vehicle Systems', active: false, consoles: ['THERMAL', 'POWER', 'AVIONICS'] },
      { name: 'Communications', active: false, consoles: ['COMM', 'TELEMETRY', 'RANGE'] },
      { name: 'Recovery Operations', active: false, consoles: ['RECOVERY', 'LANDING', 'PAYLOAD'] }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOperationsData(prev => ({
        ...prev,
        launchT: prev.launchT - 1000,
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'Comm Reliability' 
              ? Math.max(95, Math.min(99, metric.value + (Math.random() - 0.7) * 1.5))
              : Math.max(90, Math.min(100, metric.value + (Math.random() - 0.5) * 0.8))
          }))
        },
        vehicleSystems: {
          ...prev.vehicleSystems,
          booster: {
            ...prev.booster,
            propellant: {
              ...prev.booster.propellant,
              pressure: Math.max(1200, Math.min(1300, prev.vehicleSystems.booster.propellant.pressure + (Math.random() - 0.5) * 10))
            }
          }
        }
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatCountdown = (timestamp) => {
    const now = Date.now();
    const diff = Math.abs(timestamp - now);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const sign = timestamp > now ? '-' : '+';
    return `T${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'GO': case 'NOMINAL': case 'ONLINE': case 'OPTIMAL': return 'text-green-400';
      case 'STANDBY': case 'READY': case 'LOADED': return 'text-blue-400';
      case 'WARNING': case 'CAUTION': return 'text-yellow-400';
      case 'NO_GO': case 'ABORT': case 'OFFLINE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'INFO': return 'text-blue-400 bg-blue-400/20';
      case 'RESOLVED': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Mission Header - SpaceX Style */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Rocket className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">SpaceX Mission Control Center</h2>
              <div className="text-sm text-gray-400">Content Processing Mission • Phase: {operationsData.currentPhase}</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${
              operationsData.missionStatus === 'ACTIVE' ? 'bg-green-400/20 text-green-400' :
              operationsData.missionStatus === 'STANDBY' ? 'bg-blue-400/20 text-blue-400' : 
              'bg-red-400/20 text-red-400'
            }`}>
              {operationsData.missionStatus}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Launch T-Time</div>
            <div className="text-2xl font-mono text-blue-400 font-bold">
              {formatCountdown(operationsData.launchT)}
            </div>
          </div>
        </div>
        
        {/* Real-Time Performance Bar */}
        <div className="grid grid-cols-4 gap-4">
          {operationsData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                <div 
                  className="bg-blue-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Console Stations - 24 Engineer Layout */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Engineering Consoles</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {operationsData.consoleStations.filter(station => station.status === 'GO').length}/12 GO
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {operationsData.consoleStations.map((station, index) => (
              <div key={index} className={`border rounded p-3 transition-all duration-300 ${
                station.alert ? 'border-yellow-400/50 bg-yellow-400/10' : 'border-slate-600/30 bg-slate-800/30'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${
                    station.status === 'GO' ? 'bg-green-400' :
                    station.status === 'STANDBY' ? 'bg-blue-400' : 'bg-red-400'
                  }`}></div>
                  <span className="text-xs font-mono text-white font-semibold">{station.id}</span>
                  <Headphones className="w-3 h-3 text-gray-400 ml-auto" />
                </div>
                <div className="text-sm text-gray-300 mb-1">{station.name}</div>
                <div className="text-xs text-gray-400">{station.engineer}</div>
                <div className={`text-xs font-semibold mt-1 ${getStatusColor(station.status)}`}>
                  {station.status}
                </div>
                {station.alert && (
                  <div className="flex items-center space-x-1 mt-1">
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400">ALERT</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Network Operations - Modern NOC Integration */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Wifi className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Network Operations</h3>
          </div>
          
          {/* Alert Correlation */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Intelligent Alert Management</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Active Alerts</span>
                <span className="text-red-400 font-mono">{operationsData.networkOperations.correlations.activeAlerts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Suppressed (Correlated)</span>
                <span className="text-gray-500 font-mono">{operationsData.networkOperations.correlations.suppressedAlerts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Noise Reduction</span>
                <span className="text-green-400 font-mono">{operationsData.networkOperations.correlations.correlationReduction}%</span>
              </div>
            </div>
          </div>

          {/* Infrastructure Status */}
          <div className="space-y-2 mb-4">
            <div className="text-sm text-gray-400">Infrastructure Status</div>
            {operationsData.networkOperations.infrastructure.map((infra, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(infra.status).includes('green') ? 'bg-green-400' : 
                    getStatusColor(infra.status).includes('blue') ? 'bg-blue-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm text-gray-300">{infra.name}</span>
                </div>
                <div className="text-xs text-gray-400">
                  {infra.latency && `${infra.latency}ms`}
                  {infra.throughput && ` • ${infra.throughput.toFixed(1)}%`}
                  {infra.bandwidth && ` • ${infra.bandwidth}Mbps`}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Alerts */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Recent Events</div>
            <div className="space-y-1">
              {operationsData.networkOperations.alerts.map((alert, index) => (
                <div key={index} className="p-2 bg-slate-800/30 rounded text-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-gray-400 font-mono">{alert.time}</span>
                    <span className={`px-1 py-0.5 rounded text-xs font-semibold ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                    <span className="text-blue-400">{alert.system}</span>
                  </div>
                  <div className="text-gray-300">{alert.message}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vehicle Systems Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Satellite className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">System Status</h3>
          </div>
          
          <div className="space-y-4">
            {/* Booster Systems */}
            <div className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
              <div className="text-white font-medium mb-3">Processing Engine</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-400">Status:</span>
                  <span className={`ml-2 ${getStatusColor(operationsData.vehicleSystems.booster.engines.status)}`}>
                    {operationsData.vehicleSystems.booster.engines.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Engines:</span>
                  <span className="ml-2 text-white font-mono">{operationsData.vehicleSystems.booster.engines.engines}/9</span>
                </div>
                <div>
                  <span className="text-gray-400">Fuel Level:</span>
                  <span className="ml-2 text-green-400 font-mono">{operationsData.vehicleSystems.booster.propellant.level}%</span>
                </div>
                <div>
                  <span className="text-gray-400">Pressure:</span>
                  <span className="ml-2 text-blue-400 font-mono">{operationsData.vehicleSystems.booster.propellant.pressure} psi</span>
                </div>
              </div>
            </div>

            {/* Upper Stage */}
            <div className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
              <div className="text-white font-medium mb-3">Content Pipeline</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-400">Engine:</span>
                  <span className={`ml-2 ${getStatusColor(operationsData.vehicleSystems.upperStage.engine.status)}`}>
                    {operationsData.vehicleSystems.upperStage.engine.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Fuel Level:</span>
                  <span className="ml-2 text-green-400 font-mono">{operationsData.vehicleSystems.upperStage.propellant.level}%</span>
                </div>
                <div>
                  <span className="text-gray-400">Payload:</span>
                  <span className={`ml-2 ${getStatusColor(operationsData.vehicleSystems.upperStage.payload.status)}`}>
                    {operationsData.vehicleSystems.upperStage.payload.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Mass:</span>
                  <span className="ml-2 text-blue-400 font-mono">{operationsData.vehicleSystems.upperStage.payload.mass} kg</span>
                </div>
              </div>
            </div>

            {/* Ground Systems */}
            <div className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
              <div className="text-white font-medium mb-3">Infrastructure</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-400">Strongback:</span>
                  <span className={`ml-2 ${getStatusColor(operationsData.vehicleSystems.groundSystems.strongback.status)}`}>
                    {operationsData.vehicleSystems.groundSystems.strongback.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Weather:</span>
                  <span className={`ml-2 ${getStatusColor(operationsData.vehicleSystems.groundSystems.weather.status)}`}>
                    {operationsData.vehicleSystems.groundSystems.weather.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Wind:</span>
                  <span className="ml-2 text-white font-mono">{operationsData.vehicleSystems.groundSystems.weather.wind} kts</span>
                </div>
                <div>
                  <span className="text-gray-400">Temp:</span>
                  <span className="ml-2 text-white font-mono">{operationsData.vehicleSystems.groundSystems.weather.temperature}°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Timeline & Dashboard Views */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Mission Displays</h3>
          </div>
          
          {/* Dashboard View Selector */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Active Views</div>
            <div className="space-y-1">
              {operationsData.dashboardViews.map((view, index) => (
                <div key={index} className={`p-2 rounded border transition-all ${
                  view.active ? 'border-blue-400/50 bg-blue-400/10' : 'border-slate-600/30 bg-slate-800/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${view.active ? 'text-blue-400' : 'text-gray-300'}`}>
                      {view.name}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${view.active ? 'bg-blue-400' : 'bg-gray-500'}`}></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Consoles: {view.consoles.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Data Visualization */}
          <div className="bg-slate-800/50 p-4 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Real-Time Performance</div>
            <div className="flex items-end space-x-1 h-24 mb-2">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-t from-blue-500/60 to-cyan-400/40 flex-1 rounded-t transition-all duration-300"
                  style={{
                    height: `${20 + Math.sin((Date.now() / 1000 + i) * 0.8) * 20 + Math.random() * 15}%`
                  }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="text-gray-400">Throughput</div>
                <div className="text-green-400 font-mono">247 ops/min</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Latency</div>
                <div className="text-blue-400 font-mono">142ms</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Uptime</div>
                <div className="text-emerald-400 font-mono">99.97%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}