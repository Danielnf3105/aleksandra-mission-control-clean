import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const AtmosphericTechnologyWeatherCenter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherPhase, setWeatherPhase] = useState('GLOBAL_MONITORING_ACTIVE');
  const [alertLevel, setAlertLevel] = useState('NOMINAL');

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate weather monitoring phase changes
      const phases = ['GLOBAL_MONITORING_ACTIVE', 'CLOUD_SEEDING_OPERATIONS', 'STORM_TRACKING_MODE', 'AI_FORECASTING_ENHANCED', 'BALLOON_DEPLOYMENT_PHASE'];
      setWeatherPhase(phases[Math.floor(Math.random() * phases.length)]);
      
      // Simulate alert level changes
      const alerts = ['NOMINAL', 'ADVISORY', 'WATCH', 'WARNING'];
      setAlertLevel(alerts[Math.floor(Math.random() * alerts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2026 Atmospheric Technology Data
  const weatherBalloonFleet = [
    { name: 'WindBorne Systems', status: 97.8, balloons: 127, type: 'Self-Flying AI', autonomy: 96.4, altitude: 20000 },
    { name: 'NOAA Radiosondes', status: 94.6, balloons: 89, type: 'Traditional', autonomy: 78.2, altitude: 35000 },
    { name: 'Meteomatics Drones', status: 98.1, balloons: 67, type: 'Weather Drones', autonomy: 94.7, altitude: 20000 },
    { name: 'NASA Research Fleet', status: 96.3, balloons: 34, type: 'Stratospheric', autonomy: 91.8, altitude: 40000 },
    { name: 'WeatherXM Network', status: 95.7, balloons: 156, type: 'Decentralized', autonomy: 89.3, altitude: 15000 },
    { name: 'Tomorrow.io Sensors', status: 97.2, balloons: 78, type: 'AI-Enhanced', autonomy: 95.6, altitude: 18000 }
  ];

  const atmosphericMonitoringData = [
    { time: '00:00', temperature: 87, humidity: 92, wind_speed: 94, pressure: 89, ai_accuracy: 96 },
    { time: '04:00', temperature: 93, humidity: 88, wind_speed: 91, pressure: 94, ai_accuracy: 98 },
    { time: '08:00', temperature: 78, humidity: 95, wind_speed: 89, pressure: 87, ai_accuracy: 94 },
    { time: '12:00', temperature: 89, humidity: 93, wind_speed: 96, pressure: 91, ai_accuracy: 97 },
    { time: '16:00', temperature: 94, humidity: 91, wind_speed: 93, pressure: 88, ai_accuracy: 95 },
    { time: '20:00', temperature: 91, humidity: 89, wind_speed: 97, pressure: 93, ai_accuracy: 99 }
  ];

  const globalWeatherStations = [
    { region: 'North America', stations: 247, coverage: 94.7, ai_models: 8, forecast_accuracy: 96.8 },
    { region: 'Europe', stations: 189, coverage: 97.2, ai_models: 12, forecast_accuracy: 98.1 },
    { region: 'Asia Pacific', stations: 334, coverage: 89.4, ai_models: 15, forecast_accuracy: 94.6 },
    { region: 'South America', stations: 134, coverage: 87.9, ai_models: 6, forecast_accuracy: 92.7 },
    { region: 'Africa', stations: 167, coverage: 82.6, ai_models: 4, forecast_accuracy: 89.3 },
    { region: 'Antarctica', stations: 23, coverage: 78.4, ai_models: 3, forecast_accuracy: 91.8 }
  ];

  const weatherModificationOperations = [
    { project: 'Nevada Cloud Seeding', output: 187.4, effectiveness: 94.7, flights: 47, silver_iodide_kg: 234 },
    { project: 'California Drought Relief', output: 203.8, effectiveness: 91.2, flights: 62, silver_iodide_kg: 289 },
    { project: 'UAE Rain Enhancement', output: 156.7, effectiveness: 96.8, flights: 34, silver_iodide_kg: 178 },
    { project: 'Texas Hail Suppression', output: 134.5, effectiveness: 88.9, flights: 28, silver_iodide_kg: 156 },
    { project: 'China Weather Control', output: 298.6, effectiveness: 93.4, flights: 89, silver_iodide_kg: 423 },
    { project: 'Australia Fire Prevention', output: 167.3, effectiveness: 95.1, flights: 41, silver_iodide_kg: 201 }
  ];

  const aiModelPerformance = [
    { hour: 0, prithvi_accuracy: 97.8, noaa_gfs: 94.6, deepmind_graphcast: 96.2, windborne_ai: 98.1 },
    { hour: 4, prithvi_accuracy: 98.1, noaa_gfs: 95.2, deepmind_graphcast: 97.4, windborne_ai: 97.9 },
    { hour: 8, prithvi_accuracy: 96.9, noaa_gfs: 93.8, deepmind_graphcast: 95.7, windborne_ai: 98.3 },
    { hour: 12, prithvi_accuracy: 97.6, noaa_gfs: 96.1, deepmind_graphcast: 98.2, windborne_ai: 97.7 },
    { hour: 16, prithvi_accuracy: 98.4, noaa_gfs: 94.9, deepmind_graphcast: 96.8, windborne_ai: 98.9 },
    { hour: 20, prithvi_accuracy: 97.2, noaa_gfs: 95.7, deepmind_graphcast: 97.1, windborne_ai: 98.6 }
  ];

  const severeWeatherEvents = [
    { event: 'Hurricane Season 2026', severity: 'HIGH', tracked: 23, predicted: 19, ai_accuracy: 97.8 },
    { event: 'Midwest Tornado Alley', severity: 'WARNING', tracked: 67, predicted: 61, ai_accuracy: 94.6 },
    { event: 'European Heat Dome', severity: 'ADVISORY', tracked: 12, predicted: 11, ai_accuracy: 96.2 },
    { event: 'Arctic Polar Vortex', severity: 'WATCH', tracked: 8, predicted: 7, ai_accuracy: 95.4 },
    { event: 'Pacific Typhoon Belt', severity: 'HIGH', tracked: 34, predicted: 31, ai_accuracy: 93.7 },
    { event: 'Australian Bushfire Risk', severity: 'WARNING', tracked: 89, predicted: 84, ai_accuracy: 96.9 }
  ];

  const atmosphericMetrics = {
    total_weather_balloons: 551,
    ai_forecast_accuracy: 96.8,
    cloud_seeding_projects: 89,
    space_weather_satellites: 47,
    weather_modification_budget: 2.43, // billion USD
    global_coverage_percentage: 91.4,
    real_time_data_points: 847000,
    windborne_series_a_funding: 15, // million USD
    noaa_ai_models_deployed: 12,
    atmospheric_profiles_daily: 2400,
    silver_iodide_annual_tons: 1.67,
    gao_oversight_score: 87.3,
    prithvi_model_performance: 97.8,
    disaster_prevention_saves: '4.2B' // USD prevented damages
  };

  const getStatusColor = (value) => {
    if (value >= 95) return 'text-green-400';
    if (value >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'GLOBAL_MONITORING_ACTIVE': return 'text-blue-400';
      case 'CLOUD_SEEDING_OPERATIONS': return 'text-cyan-400';
      case 'STORM_TRACKING_MODE': return 'text-orange-400';
      case 'AI_FORECASTING_ENHANCED': return 'text-green-400';
      case 'BALLOON_DEPLOYMENT_PHASE': return 'text-purple-400';
      default: return 'text-white';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'text-red-400';
      case 'WARNING': return 'text-orange-400';
      case 'ADVISORY': return 'text-yellow-400';
      case 'WATCH': return 'text-blue-400';
      default: return 'text-white';
    }
  };

  const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-mono">
      {/* Header */}
      <div className="border-b border-cyan-500 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">🌪️🎈 ATMOSPHERIC TECHNOLOGY & WEATHER INTELLIGENCE CENTER</h1>
            <p className="text-cyan-300">2026 AI Weather Forecasting | Self-Flying Balloons | Cloud Seeding | NOAA-IBM Prithvi | WindBorne Systems</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-green-400">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-gray-400">{currentTime.toDateString()}</div>
            <div className={`text-lg font-bold ${getPhaseColor(weatherPhase)}`}>{weatherPhase}</div>
            <div className="text-yellow-400">ALERT: {alertLevel}</div>
          </div>
        </div>
      </div>

      {/* Real-time Weather Operations Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-2">🎈 BALLOON FLEET</h3>
          <div className="text-2xl text-green-400">{atmosphericMetrics.total_weather_balloons}</div>
          <div className="text-sm text-gray-400">Active Weather Balloons</div>
        </div>
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">☁️ CLOUD SEEDING</h3>
          <div className="text-2xl text-cyan-400">{atmosphericMetrics.cloud_seeding_projects}</div>
          <div className="text-sm text-gray-400">Active Weather Modification</div>
        </div>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-2">🤖 AI ACCURACY</h3>
          <div className="text-2xl text-green-400">{atmosphericMetrics.ai_forecast_accuracy}%</div>
          <div className="text-sm text-gray-400">Forecast Precision</div>
        </div>
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-2">💰 PREVENTED DAMAGES</h3>
          <div className="text-2xl text-yellow-400">${atmosphericMetrics.disaster_prevention_saves}</div>
          <div className="text-sm text-gray-400">2026 Disaster Prevention</div>
        </div>
      </div>

      {/* Main Weather Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Weather Balloon Fleet Status */}
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🎈 ATMOSPHERIC BALLOON & DRONE FLEET</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weatherBalloonFleet}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 9 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #8b5cf6', color: '#8b5cf6' }}
                formatter={(value, name) => [`${value}${name === 'balloons' || name === 'altitude' ? '' : '%'}`, name]}
              />
              <Bar dataKey="status" fill="#8b5cf6" name="System Status" />
              <Bar dataKey="autonomy" fill="#22c55e" name="AI Autonomy" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Real-time Atmospheric Monitoring */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">🌡️ REAL-TIME ATMOSPHERIC MONITORING</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={atmosphericMonitoringData}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="time" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #22c55e', color: '#22c55e' }} />
              <Line type="monotone" dataKey="temperature" stroke="#ef4444" strokeWidth={2} name="Temperature" />
              <Line type="monotone" dataKey="humidity" stroke="#06b6d4" strokeWidth={2} name="Humidity" />
              <Line type="monotone" dataKey="wind_speed" stroke="#84cc16" strokeWidth={2} name="Wind Speed" />
              <Line type="monotone" dataKey="pressure" stroke="#f59e0b" strokeWidth={2} name="Pressure" />
              <Line type="monotone" dataKey="ai_accuracy" stroke="#8b5cf6" strokeWidth={3} name="AI Accuracy" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Global Weather Network */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🌍 GLOBAL WEATHER STATION NETWORK</h2>
          <div className="space-y-3">
            {globalWeatherStations.map((region, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-400 font-bold">{region.region}</span>
                  <span className={getStatusColor(region.forecast_accuracy)}>{region.forecast_accuracy}%</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Stations</div>
                    <div className="text-white">{region.stations}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Coverage</div>
                    <div className="text-cyan-400">{region.coverage}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">AI Models</div>
                    <div className="text-green-400">{region.ai_models}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Modification Operations */}
        <div className="bg-gray-900 border border-cyan-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">☁️ CLOUD SEEDING & WEATHER MODIFICATION</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={weatherModificationOperations}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="project" tick={{ fill: '#fff', fontSize: 8 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #06b6d4', color: '#06b6d4' }} />
              <Bar dataKey="output" fill="#06b6d4" name="Precipitation Increase %" />
              <Line type="monotone" dataKey="effectiveness" stroke="#22c55e" strokeWidth={3} name="Effectiveness %" />
              <Line type="monotone" dataKey="flights" stroke="#f59e0b" strokeWidth={2} name="Seeding Flights" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Model Performance & Severe Weather Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900 border border-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">🤖 AI WEATHER MODEL PERFORMANCE</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={aiModelPerformance}>
              <CartesianGrid strokeDasharray="3,3" stroke="#333" />
              <XAxis dataKey="hour" tick={{ fill: '#fff' }} />
              <YAxis tick={{ fill: '#fff' }} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #f59e0b', color: '#f59e0b' }} />
              <Area type="monotone" dataKey="prithvi_accuracy" stackId="1" stroke="#8b5cf6" fill="#8b5cf633" name="NASA-IBM Prithvi" />
              <Area type="monotone" dataKey="noaa_gfs" stackId="2" stroke="#0ea5e9" fill="#0ea5e933" name="NOAA GFS" />
              <Area type="monotone" dataKey="deepmind_graphcast" stackId="3" stroke="#22c55e" fill="#22c55e33" name="DeepMind GraphCast" />
              <Line type="monotone" dataKey="windborne_ai" stroke="#ef4444" strokeWidth={3} name="WindBorne AI" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ SEVERE WEATHER EVENT TRACKING</h2>
          <div className="space-y-3">
            {severeWeatherEvents.map((event, idx) => (
              <div key={idx} className="bg-gray-800 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold text-sm">{event.event}</span>
                  <span className={getSeverityColor(event.severity)}>{event.severity}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-400">Tracked</div>
                    <div className="text-yellow-400">{event.tracked}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Predicted</div>
                    <div className="text-cyan-400">{event.predicted}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">AI Accuracy</div>
                    <div className={getStatusColor(event.ai_accuracy)}>{event.ai_accuracy}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Weather Intelligence Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-green-400 mb-3">💰 WINDBORNE SYSTEMS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Series A Funding (2025)</span>
              <span className="text-green-400">${atmosphericMetrics.windborne_series_a_funding}M</span>
            </div>
            <div className="flex justify-between">
              <span>Balloon Autonomy</span>
              <span className="text-cyan-400">96.4% SELF-FLYING</span>
            </div>
            <div className="flex justify-between">
              <span>NOAA Partnership</span>
              <span className="text-yellow-400">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>Vertical Profiles/Day</span>
              <span className="text-purple-400">40+ PER BALLOON</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">🛰️ PRITHVI WEATHER-CLIMATE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>NASA-IBM Foundation Model</span>
              <span className="text-green-400">{atmosphericMetrics.prithvi_model_performance}%</span>
            </div>
            <div className="flex justify-between">
              <span>Earth Observations Archive</span>
              <span className="text-cyan-400">VAST SCALE</span>
            </div>
            <div className="flex justify-between">
              <span>Atmospheric Understanding</span>
              <span className="text-orange-400">BREAKTHROUGH</span>
            </div>
            <div className="flex justify-between">
              <span>Climate Predictions</span>
              <span className="text-green-400">ADVANCED</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
          <h3 className="text-lg font-bold text-orange-400 mb-3">📊 GAO OVERSIGHT (2026)</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Weather Modification Market</span>
              <span className="text-green-400">${atmosphericMetrics.weather_modification_budget}B</span>
            </div>
            <div className="flex justify-between">
              <span>Silver Iodide Annual Use</span>
              <span className="text-cyan-400">{atmosphericMetrics.silver_iodide_annual_tons}K tons</span>
            </div>
            <div className="flex justify-between">
              <span>NOAA Tracking Compliance</span>
              <span className="text-yellow-400">{atmosphericMetrics.gao_oversight_score}%</span>
            </div>
            <div className="flex justify-between">
              <span>Global Monitoring Coverage</span>
              <span className="text-purple-400">{atmosphericMetrics.global_coverage_percentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance Summary */}
      <div className="bg-gray-900 border border-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">📊 2026 ATMOSPHERIC TECHNOLOGY INTELLIGENCE SUMMARY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">{(atmosphericMetrics.real_time_data_points / 1000).toFixed(0)}K</div>
            <div className="text-gray-400">Real-time Data Points</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-green-400 mb-2">{atmosphericMetrics.atmospheric_profiles_daily}</div>
            <div className="text-gray-400">Daily Atmospheric Profiles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-cyan-400 mb-2">{atmosphericMetrics.noaa_ai_models_deployed}</div>
            <div className="text-gray-400">NOAA AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-orange-400 mb-2">{atmosphericMetrics.space_weather_satellites}</div>
            <div className="text-gray-400">Space Weather Satellites</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-cyan-500 text-center text-gray-400">
        <p>🌪️ 2026 Atmospheric Technology Command Center | AI Weather Forecasting | Self-Flying Balloons | Cloud Seeding Operations | Global Weather Monitoring</p>
        <p className="text-cyan-400">Research Sources: WindBorne Systems, NOAA, NASA-IBM Prithvi, IEEE Spectrum, GAO Weather Modification Report, Meteomatics, Tomorrow.io</p>
      </div>
    </div>
  );
};

export default AtmosphericTechnologyWeatherCenter;