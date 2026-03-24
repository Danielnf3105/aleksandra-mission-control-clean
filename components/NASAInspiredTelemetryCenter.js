// NASA-Inspired Telemetry Center - Based on Open MCT Framework Research
// Incorporating real-time data visualization, timeline views, and procedural displays
import { useState, useEffect } from 'react';
import { 
  Satellite, Activity, Clock, TrendingUp, Zap, Target, Brain, 
  Monitor, Database, Wifi, AlertTriangle, CheckCircle, Info,
  BarChart3, LineChart, Gauge, Calendar, PlayCircle, PauseCircle
} from 'lucide-react';

export default function NASAInspiredTelemetryCenter() {
  const [telemetryData, setTelemetryData] = useState({
    missionTime: Date.now(),
    systems: [
      {
        name: 'Content Processing Engine',
        status: 'NOMINAL',
        telemetry: {
          throughput: 247.3,
          latency: 142,
          errorRate: 0.02,
          cpuUsage: 68.4
        },
        timeline: [
          { time: '10:45', event: 'Processing initiated', status: 'SUCCESS' },
          { time: '10:50', event: 'Transcription completed', status: 'SUCCESS' },
          { time: '10:55', event: 'Quality check passed', status: 'SUCCESS' },
          { time: '11:00', event: 'Data archived', status: 'SUCCESS' }
        ]
      },
      {
        name: 'AI Agent Fleet',
        status: 'OPERATIONAL',
        telemetry: {
          activeAgents: 5,
          efficiency: 96.7,
          tasksQueued: 3,
          responseTime: 89
        },
        timeline: [
          { time: '10:42', event: 'Agent spawn initiated', status: 'SUCCESS' },
          { time: '10:47', event: 'Task allocation complete', status: 'SUCCESS' },
          { time: '10:52', event: 'Performance optimization', status: 'WARNING' },
          { time: '10:58', event: 'Fleet coordination sync', status: 'SUCCESS' }
        ]
      },
      {
        name: 'Mission Control Infrastructure',
        status: 'GREEN',
        telemetry: {
          uptime: 99.97,
          bandwidth: 1247.8,
          connections: 12,
          temperature: 42.3
        },
        timeline: [
          { time: '10:30', event: 'System health check', status: 'SUCCESS' },
          { time: '10:40', event: 'Backup verification', status: 'SUCCESS' },
          { time: '10:58', event: 'Performance baseline', status: 'SUCCESS' },
          { time: '11:02', event: 'Real-time sync active', status: 'SUCCESS' }
        ]
      }
    ],
    procedures: [
      {
        id: 'PROC_001',
        name: 'Instagram Content Pipeline Startup',
        status: 'ACTIVE',
        progress: 87.5,
        steps: [
          { step: 'Initialize AssemblyAI connection', status: 'COMPLETE' },
          { step: 'Validate video queue', status: 'COMPLETE' },
          { step: 'Start transcription engine', status: 'IN_PROGRESS' },
          { step: 'Enable real-time monitoring', status: 'PENDING' }
        ]
      },
      {
        id: 'PROC_002', 
        name: 'Agent Fleet Coordination Protocol',
        status: 'NOMINAL',
        progress: 94.2,
        steps: [
          { step: 'Agent health verification', status: 'COMPLETE' },
          { step: 'Task distribution optimization', status: 'COMPLETE' },
          { step: 'Communication channel test', status: 'COMPLETE' },
          { step: 'Performance metric baseline', status: 'IN_PROGRESS' }
        ]
      }
    ],
    realTimeData: {
      timestamp: new Date().toISOString(),
      metrics: [
        { name: 'System Load', value: 68.4, unit: '%', trend: 'stable' },
        { name: 'Processing Rate', value: 247.3, unit: 'ops/min', trend: 'increasing' },
        { name: 'Error Rate', value: 0.02, unit: '%', trend: 'decreasing' },
        { name: 'Agent Efficiency', value: 96.7, unit: '%', trend: 'stable' }
      ]
    },
    imagery: [
      {
        source: 'Mission Control Dashboard',
        timestamp: '11:02:15',
        description: 'Real-time workspace analytics view'
      },
      {
        source: 'Content Processing Pipeline', 
        timestamp: '11:01:45',
        description: 'Instagram transcription engine status'
      },
      {
        source: 'AI Agent Fleet Monitor',
        timestamp: '11:01:20',
        description: 'Agent orchestration performance metrics'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryData(prev => ({
        ...prev,
        missionTime: Date.now(),
        realTimeData: {
          timestamp: new Date().toISOString(),
          metrics: prev.realTimeData.metrics.map(metric => ({
            ...metric,
            value: metric.name === 'System Load' 
              ? Math.max(30, Math.min(85, metric.value + (Math.random() - 0.5) * 3))
              : metric.name === 'Processing Rate'
              ? Math.max(200, Math.min(300, metric.value + (Math.random() - 0.5) * 10))
              : metric.name === 'Error Rate'
              ? Math.max(0, Math.min(0.1, metric.value + (Math.random() - 0.5) * 0.01))
              : Math.max(90, Math.min(99, metric.value + (Math.random() - 0.5) * 2))
          }))
        },
        systems: prev.systems.map(system => ({
          ...system,
          telemetry: {
            ...system.telemetry,
            throughput: system.name === 'Content Processing Engine' 
              ? Math.max(200, Math.min(300, system.telemetry.throughput + (Math.random() - 0.5) * 10))
              : system.telemetry.throughput,
            latency: system.name === 'Content Processing Engine'
              ? Math.max(80, Math.min(200, system.telemetry.latency + (Math.random() - 0.5) * 15))
              : system.telemetry.latency
          }
        }))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatMissionTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = Math.floor((timestamp - Date.now()) / (1000 * 60 * 60)) + 24;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `T+${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getSystemStatusColor = (status) => {
    switch (status) {
      case 'NOMINAL': return 'text-green-400';
      case 'OPERATIONAL': return 'text-blue-400';
      case 'GREEN': return 'text-emerald-400';
      case 'WARNING': return 'text-yellow-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTimelineStatusColor = (status) => {
    switch (status) {
      case 'SUCCESS': return 'text-green-400';
      case 'WARNING': return 'text-yellow-400';
      case 'ERROR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'decreasing': return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Mission Header - NASA Style */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Satellite className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Mission Control Telemetry Center</h2>
            <div className="px-2 py-1 bg-green-400/20 text-green-400 text-xs font-semibold rounded uppercase">
              OPERATIONAL
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Mission Elapsed Time</div>
            <div className="text-lg font-mono text-blue-400">{formatMissionTime(telemetryData.missionTime)}</div>
          </div>
        </div>
        
        {/* Real-Time Metrics Bar */}
        <div className="grid grid-cols-4 gap-4">
          {telemetryData.realTimeData.metrics.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">{metric.name}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(metric.name === 'Error Rate' ? 3 : 1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Telemetry */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Monitor className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">System Telemetry</h3>
          </div>
          
          <div className="space-y-4">
            {telemetryData.systems.map((system, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{system.name}</h4>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getSystemStatusColor(system.status)} bg-current bg-opacity-20`}>
                    {system.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(system.telemetry).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-white font-mono">
                        {typeof value === 'number' ? 
                          (key.includes('Rate') || key.includes('Usage') || key.includes('efficiency') ? `${value.toFixed(1)}%` :
                           key.includes('Time') || key.includes('latency') ? `${value}ms` :
                           key.includes('throughput') ? `${value.toFixed(1)} ops/min` :
                           value.toString()) : 
                          value
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline View */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Mission Timeline</h3>
          </div>
          
          <div className="space-y-4">
            {telemetryData.systems.map((system, systemIndex) => (
              <div key={systemIndex} className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300 border-b border-slate-600/30 pb-1">
                  {system.name}
                </h4>
                <div className="space-y-1">
                  {system.timeline.slice(-3).map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-center space-x-3 text-sm">
                      <div className="text-blue-400 font-mono w-12 text-xs">{event.time}</div>
                      <div className={`w-2 h-2 rounded-full ${
                        event.status === 'SUCCESS' ? 'bg-green-400' :
                        event.status === 'WARNING' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></div>
                      <div className="text-gray-300 flex-1">{event.event}</div>
                      <div className={`text-xs ${getTimelineStatusColor(event.status)}`}>
                        {event.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Procedures Panel */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Database className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Active Procedures</h3>
          </div>
          
          <div className="space-y-4">
            {telemetryData.procedures.map((procedure, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-white font-medium">{procedure.name}</div>
                    <div className="text-xs text-gray-400">{procedure.id}</div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${
                      procedure.status === 'ACTIVE' ? 'text-green-400 bg-green-400/20' :
                      procedure.status === 'NOMINAL' ? 'text-blue-400 bg-blue-400/20' : 'text-gray-400 bg-gray-400/20'
                    }`}>
                      {procedure.status}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{procedure.progress.toFixed(1)}%</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {procedure.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-3 text-sm">
                      <div className="w-4 h-4 flex items-center justify-center">
                        {step.status === 'COMPLETE' ? (
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        ) : step.status === 'IN_PROGRESS' ? (
                          <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <div className="w-3 h-3 border border-gray-500 rounded-full" />
                        )}
                      </div>
                      <div className={`flex-1 ${
                        step.status === 'COMPLETE' ? 'text-green-400' :
                        step.status === 'IN_PROGRESS' ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {step.step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Visualization Panel */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Data Visualization</h3>
          </div>
          
          {/* Live Metrics Graph Simulation */}
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded border border-slate-600/30">
              <div className="text-sm text-gray-400 mb-2">System Performance (Real-Time)</div>
              <div className="flex items-end space-x-1 h-20">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-blue-400/60 flex-1 rounded-t transition-all duration-300"
                    style={{
                      height: `${30 + Math.sin((Date.now() / 1000 + i) * 0.5) * 15 + Math.random() * 10}%`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
                <div className="text-xs text-gray-400 mb-1">CPU Load</div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${telemetryData.realTimeData.metrics[0].value}%` }}
                    />
                  </div>
                  <span className="text-xs text-white font-mono">
                    {telemetryData.realTimeData.metrics[0].value.toFixed(1)}%
                  </span>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
                <div className="text-xs text-gray-400 mb-1">Efficiency</div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${telemetryData.realTimeData.metrics[3].value}%` }}
                    />
                  </div>
                  <span className="text-xs text-white font-mono">
                    {telemetryData.realTimeData.metrics[3].value.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Imagery */}
          <div className="mt-4">
            <div className="text-sm text-gray-400 mb-2">Mission Imagery & Logs</div>
            <div className="space-y-2">
              {telemetryData.imagery.slice(0, 3).map((image, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-slate-800/30 rounded text-sm">
                  <div className="w-8 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                  <div className="flex-1">
                    <div className="text-white">{image.source}</div>
                    <div className="text-xs text-gray-400">{image.description}</div>
                  </div>
                  <div className="text-xs text-blue-400 font-mono">{image.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}