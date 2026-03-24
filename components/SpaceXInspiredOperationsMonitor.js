// SpaceX-Inspired Operations Monitor - March 2026
// Real-time mission operations monitoring inspired by SpaceX Dragon mission control
import { useState, useEffect } from 'react';
import { AreaChart, LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Line, Bar, ResponsiveContainer, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

export default function SpaceXInspiredOperationsMonitor() {
  const [missionData, setMissionData] = useState({
    missionName: 'ALEKSANDRA-1 CONTENT PROCESSING',
    missionElapsed: '04:16:23',
    nextMilestone: 'Content Analysis Complete',
    missionPhase: 'OPERATIONAL',
    vehicleStatus: 'NOMINAL',
    crewSafety: 'GREEN',
    systemsHealth: 99.2,
    dataLink: 'STRONG',
    groundStations: 3,
    activeOperations: 8,
    contentProcessed: 2847,
    transcriptionRate: 15.7,
    aiInferenceLoad: 78.3,
    networkBandwidth: 95.6
  });

  const [flightMetrics, setFlightMetrics] = useState([
    { time: '04:16', altitude: 408, velocity: 7.66, acceleration: 0.02, gForce: 1.0 },
    { time: '04:15', altitude: 408, velocity: 7.66, acceleration: 0.01, gForce: 1.0 },
    { time: '04:14', altitude: 408, velocity: 7.66, acceleration: 0.03, gForce: 1.0 },
    { time: '04:13', altitude: 408, velocity: 7.66, acceleration: 0.02, gForce: 1.0 },
    { time: '04:12', altitude: 408, velocity: 7.66, acceleration: 0.01, gForce: 1.0 }
  ]);

  const [systemsData, setSystemsData] = useState([
    { name: 'Power', value: 98.7, color: '#00ff41' },
    { name: 'Thermal', value: 96.4, color: '#ffa500' },
    { name: 'Comms', value: 99.2, color: '#1e90ff' },
    { name: 'Computing', value: 97.8, color: '#ff6b6b' },
    { name: 'Storage', value: 95.3, color: '#9b59b6' },
    { name: 'Network', value: 98.1, color: '#2ecc71' }
  ]);

  const [operationsTimeline, setOperationsTimeline] = useState([
    { time: '00:00', event: 'Mission Start', status: 'COMPLETE', phase: 'INITIALIZATION' },
    { time: '00:15', event: 'Systems Check', status: 'COMPLETE', phase: 'INITIALIZATION' },
    { time: '01:30', event: 'Content Intake Begin', status: 'COMPLETE', phase: 'OPERATIONS' },
    { time: '02:45', event: 'AI Processing Online', status: 'COMPLETE', phase: 'OPERATIONS' },
    { time: '04:00', event: 'Batch Processing', status: 'ACTIVE', phase: 'OPERATIONS' },
    { time: '06:00', event: 'Analysis Complete', status: 'PENDING', phase: 'OPERATIONS' },
    { time: '08:00', event: 'Mission Summary', status: 'SCHEDULED', phase: 'COMPLETION' }
  ]);

  const [realTimeActivities, setRealTimeActivities] = useState([
    { id: 'ACT-001', name: 'Video Transcription', progress: 87, status: 'ACTIVE', eta: '12 min' },
    { id: 'ACT-002', name: 'Content Analysis', progress: 76, status: 'ACTIVE', eta: '18 min' },
    { id: 'ACT-003', name: 'Trend Detection', progress: 92, status: 'ACTIVE', eta: '5 min' },
    { id: 'ACT-004', name: 'Quality Assessment', progress: 68, status: 'ACTIVE', eta: '25 min' }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { metric: 'Content Throughput', current: 15.7, target: 20.0, unit: 'items/min' },
    { metric: 'Processing Latency', current: 1.2, target: 2.0, unit: 'seconds' },
    { metric: 'AI Accuracy', current: 97.8, target: 95.0, unit: '%' },
    { metric: 'System Efficiency', current: 94.3, target: 90.0, unit: '%' },
    { metric: 'Error Rate', current: 0.02, target: 0.05, unit: '%' },
    { metric: 'Uptime', current: 99.97, target: 99.9, unit: '%' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update mission elapsed time
      const now = new Date();
      const elapsed = now.toLocaleTimeString('en-US', { hour12: false });
      
      setMissionData(prev => ({
        ...prev,
        missionElapsed: elapsed,
        systemsHealth: Math.max(97, Math.min(100, prev.systemsHealth + (Math.random() - 0.5) * 0.5)),
        contentProcessed: prev.contentProcessed + Math.floor(Math.random() * 3) + 1,
        transcriptionRate: Math.max(10, Math.min(25, prev.transcriptionRate + (Math.random() - 0.5) * 1)),
        aiInferenceLoad: Math.max(50, Math.min(90, prev.aiInferenceLoad + (Math.random() - 0.5) * 3)),
        networkBandwidth: Math.max(85, Math.min(100, prev.networkBandwidth + (Math.random() - 0.5) * 2))
      }));

      // Update real-time activities
      setRealTimeActivities(prev => prev.map(activity => ({
        ...activity,
        progress: Math.max(0, Math.min(100, activity.progress + Math.floor(Math.random() * 3)))
      })));

      // Update performance metrics
      setPerformanceMetrics(prev => prev.map(metric => ({
        ...metric,
        current: Math.max(0, metric.current + (Math.random() - 0.5) * (metric.unit === '%' ? 0.5 : 0.1))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'NOMINAL': case 'COMPLETE': case 'GREEN': case 'STRONG': return 'text-green-400';
      case 'ACTIVE': case 'OPERATIONAL': return 'text-blue-400';
      case 'PENDING': case 'SCHEDULED': return 'text-yellow-400';
      case 'WARNING': case 'CAUTION': return 'text-orange-400';
      case 'CRITICAL': case 'ABORT': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'from-green-500 to-green-600';
    if (progress >= 60) return 'from-blue-500 to-blue-600';
    if (progress >= 40) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* SpaceX-Style Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{missionData.missionName}</h1>
              <div className="flex space-x-8 text-sm">
                <div>MISSION ELAPSED: <span className="text-green-400 font-mono">{missionData.missionElapsed}</span></div>
                <div>PHASE: <span className={getStatusColor(missionData.missionPhase)}>{missionData.missionPhase}</span></div>
                <div>VEHICLE: <span className={getStatusColor(missionData.vehicleStatus)}>{missionData.vehicleStatus}</span></div>
                <div>CREW SAFETY: <span className={getStatusColor(missionData.crewSafety)}>{missionData.crewSafety}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">{missionData.systemsHealth.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">SYSTEMS HEALTH</div>
              <div className="text-xs text-green-300">ALL SYSTEMS GO</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
          {/* Real-time Flight Metrics */}
          <div className="xl:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚀 Real-time Operations Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={flightMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Legend />
                <Area type="monotone" dataKey="altitude" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Altitude (km)" />
                <Area type="monotone" dataKey="velocity" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.4} name="Velocity (km/s)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Systems Health Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">⚡ Systems Health</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={systemsData}>
                <RadialBar dataKey="value" cornerRadius={10} fill={(entry) => entry.color} />
                <Tooltip formatter={(value) => [`${value}%`, 'Health']} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              {systemsData.map((system, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-300">{system.name}</span>
                  <span className={system.value > 95 ? 'text-green-400' : system.value > 90 ? 'text-yellow-400' : 'text-red-400'}>
                    {system.value.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Mission Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⏱️ Operations Timeline
            </h3>
            <div className="space-y-3">
              {operationsTimeline.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">{item.time}</span>
                    <span className="text-white">{item.event}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 px-2 py-1 bg-gray-600 rounded">{item.phase}</span>
                    <span className={`font-bold ${getStatusColor(item.status)}`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Activities */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔄 Active Operations
            </h3>
            <div className="space-y-4">
              {realTimeActivities.map((activity) => (
                <div key={activity.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">{activity.name}</span>
                    <span className="text-sm text-gray-400">ETA: {activity.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{activity.id}</span>
                    <span className="text-green-400">{activity.progress}%</span>
                  </div>
                  <div className="bg-gray-600 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${getProgressColor(activity.progress)} h-3 rounded-full transition-all duration-300`}
                      style={{ width: `${activity.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📊 Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {metric.current.toFixed(metric.unit === '%' ? 1 : 2)}
                  <span className="text-lg text-gray-300">{metric.unit}</span>
                </div>
                <div className="text-sm text-white mb-1">{metric.metric}</div>
                <div className="text-xs text-gray-400">
                  Target: {metric.target}{metric.unit}
                </div>
                <div className={`text-xs font-bold ${
                  (metric.metric === 'Error Rate' ? metric.current <= metric.target : metric.current >= metric.target) 
                  ? 'text-green-400' : 'text-yellow-400'
                }`}>
                  {(metric.metric === 'Error Rate' ? metric.current <= metric.target : metric.current >= metric.target) 
                   ? '✓ ON TARGET' : '△ MONITOR'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Control Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            SPACEX MISSION CONTROL STYLE | ALEKSANDRA AI OPERATIONS CENTER | REAL-TIME MONITORING SYSTEM
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Next Milestone: {missionData.nextMilestone} | Data Link: {missionData.dataLink} | Ground Stations: {missionData.groundStations}
          </div>
        </div>
      </div>
    </div>
  );
}