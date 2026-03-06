// SubwayOperations.js - Subway/Metro Operations Center & Transit Control Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SubwayOperations = () => {
  const [systemStatus, setSystemStatus] = useState({
    operationalStatus: 'NORMAL',
    totalLines: 12,
    operationalLines: 11,
    totalStations: 287,
    operationalStations: 283,
    trainsInService: 156,
    totalTrains: 180,
    systemPassengers: 2847, // current system load
    avgHeadway: 3.2, // minutes
    systemDelay: 2.8, // minutes average
    lastUpdate: Date.now()
  });

  const [lineStatus, setLineStatus] = useState([
    {
      id: 'red_line',
      name: 'Red Line',
      color: '#DC143C',
      status: 'GOOD_SERVICE',
      trains_running: 18,
      total_trains: 20,
      current_headway: 2.8, // minutes
      target_headway: 3.0,
      passenger_load: 2456,
      total_stations: 28,
      operational_stations: 28,
      signal_system: 'CBTC',
      power_status: 'NORMAL',
      track_conditions: 'CLEAR',
      last_incident: null,
      service_alerts: [],
      speed_restrictions: 0,
      avg_speed: 32, // km/h
      on_time_performance: 94.7, // percentage
      last_update: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'blue_line',
      name: 'Blue Line',
      color: '#0066CC',
      status: 'DELAYS',
      trains_running: 14,
      total_trains: 16,
      current_headway: 5.2,
      target_headway: 3.5,
      passenger_load: 1894,
      total_stations: 24,
      operational_stations: 23,
      signal_system: 'CBTC',
      power_status: 'NORMAL',
      track_conditions: 'SIGNAL_PROBLEM',
      last_incident: Date.now() - 45 * 60 * 1000,
      service_alerts: ['Signal problem at Central Station causing delays'],
      speed_restrictions: 2,
      avg_speed: 28,
      on_time_performance: 78.3,
      last_update: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'green_line',
      name: 'Green Line',
      color: '#228B22',
      status: 'GOOD_SERVICE',
      trains_running: 12,
      total_trains: 14,
      current_headway: 4.1,
      target_headway: 4.0,
      passenger_load: 1623,
      total_stations: 22,
      operational_stations: 22,
      signal_system: 'TRADITIONAL',
      power_status: 'NORMAL',
      track_conditions: 'CLEAR',
      last_incident: Date.now() - 6 * 60 * 60 * 1000,
      service_alerts: [],
      speed_restrictions: 0,
      avg_speed: 35,
      on_time_performance: 91.2,
      last_update: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'yellow_line',
      name: 'Yellow Line',
      color: '#FFD700',
      status: 'PARTIAL_SERVICE',
      trains_running: 8,
      total_trains: 12,
      current_headway: 7.8,
      target_headway: 4.5,
      passenger_load: 987,
      total_stations: 18,
      operational_stations: 16,
      signal_system: 'TRADITIONAL',
      power_status: 'REDUCED',
      track_conditions: 'MAINTENANCE',
      last_incident: Date.now() - 2 * 60 * 60 * 1000,
      service_alerts: ['Track maintenance between Oak St and Pine Ave', 'Shuttle buses running'],
      speed_restrictions: 4,
      avg_speed: 22,
      on_time_performance: 65.8,
      last_update: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'orange_line',
      name: 'Orange Line',
      color: '#FF8C00',
      status: 'SUSPENDED',
      trains_running: 0,
      total_trains: 10,
      current_headway: 0,
      target_headway: 5.0,
      passenger_load: 0,
      total_stations: 15,
      operational_stations: 0,
      signal_system: 'TRADITIONAL',
      power_status: 'OFF',
      track_conditions: 'EMERGENCY_WORK',
      last_incident: Date.now() - 4 * 60 * 60 * 1000,
      service_alerts: ['Line suspended for emergency signal repairs', 'Expected restoration: 22:00'],
      speed_restrictions: 0,
      avg_speed: 0,
      on_time_performance: 0,
      last_update: Date.now() - 3 * 60 * 1000
    }
  ]);

  const [activeTrains, setActiveTrains] = useState([
    {
      id: 'T-001',
      line: 'Red Line',
      train_number: 'R-401',
      status: 'IN_SERVICE',
      current_station: 'Union Square',
      next_station: 'Central Park',
      direction: 'NORTHBOUND',
      passenger_count: 187,
      capacity: 200,
      load_factor: 93.5, // percentage
      speed: 0, // currently stopped
      doors_status: 'OPEN',
      dwell_time: 35, // seconds at current station
      operator: 'Johnson, M.',
      next_arrival: 180, // seconds to next station
      delay_minutes: 1.2,
      last_maintenance: Date.now() - 3 * 24 * 60 * 60 * 1000,
      alerts: ['High passenger load']
    },
    {
      id: 'T-002',
      line: 'Blue Line',
      train_number: 'B-205',
      status: 'DELAYED',
      current_station: 'Central Station',
      next_station: 'Downtown',
      direction: 'SOUTHBOUND',
      passenger_count: 156,
      capacity: 180,
      load_factor: 86.7,
      speed: 0,
      doors_status: 'CLOSED',
      dwell_time: 0,
      operator: 'Rodriguez, A.',
      delay_minutes: 8.7,
      delay_reason: 'SIGNAL_MALFUNCTION',
      next_arrival: 420,
      last_maintenance: Date.now() - 5 * 24 * 60 * 60 * 1000,
      alerts: ['Signal system malfunction', 'Maintenance requested']
    },
    {
      id: 'T-003',
      line: 'Green Line',
      train_number: 'G-112',
      status: 'IN_SERVICE',
      current_station: 'Between Oak Ave and Maple St',
      next_station: 'Maple Street',
      direction: 'EASTBOUND',
      passenger_count: 142,
      capacity: 160,
      load_factor: 88.8,
      speed: 65, // km/h
      doors_status: 'CLOSED',
      dwell_time: 0,
      operator: 'Chen, L.',
      next_arrival: 90,
      delay_minutes: 0.5,
      last_maintenance: Date.now() - 1 * 24 * 60 * 60 * 1000,
      alerts: []
    },
    {
      id: 'T-004',
      line: 'Red Line',
      train_number: 'R-312',
      status: 'OUT_OF_SERVICE',
      current_station: 'Maintenance Yard',
      direction: 'N/A',
      passenger_count: 0,
      capacity: 200,
      load_factor: 0,
      speed: 0,
      doors_status: 'LOCKED',
      dwell_time: 0,
      operator: 'MAINTENANCE',
      maintenance_type: 'SCHEDULED_INSPECTION',
      estimated_return: Date.now() + 2 * 60 * 60 * 1000,
      last_maintenance: Date.now(),
      alerts: ['Scheduled 48-hour inspection in progress']
    }
  ]);

  const [stationStatus, setStationStatus] = useState([
    {
      id: 'union_square',
      name: 'Union Square',
      lines: ['Red Line', 'Blue Line'],
      status: 'OPERATIONAL',
      passenger_count: 234,
      platform_capacity: 400,
      crowding_level: 'MODERATE',
      elevators: { total: 4, operational: 4 },
      escalators: { total: 8, operational: 7 },
      accessibility: 'FULLY_ACCESSIBLE',
      security_level: 'NORMAL',
      cleaning_status: 'RECENT',
      last_incident: null,
      wifi_status: 'OPERATIONAL',
      cellular_coverage: 'EXCELLENT',
      emergency_systems: 'ALL_OPERATIONAL'
    },
    {
      id: 'central_station',
      name: 'Central Station',
      lines: ['Blue Line', 'Green Line', 'Yellow Line'],
      status: 'SIGNAL_ISSUES',
      passenger_count: 387,
      platform_capacity: 600,
      crowding_level: 'HIGH',
      elevators: { total: 6, operational: 5 },
      escalators: { total: 12, operational: 10 },
      accessibility: 'LIMITED',
      security_level: 'HEIGHTENED',
      cleaning_status: 'OVERDUE',
      last_incident: Date.now() - 45 * 60 * 1000,
      wifi_status: 'OPERATIONAL',
      cellular_coverage: 'GOOD',
      emergency_systems: 'SIGNAL_FAULT_DETECTED',
      maintenance_crew_present: true
    },
    {
      id: 'downtown',
      name: 'Downtown Terminal',
      lines: ['Red Line', 'Green Line'],
      status: 'OPERATIONAL',
      passenger_count: 456,
      platform_capacity: 800,
      crowding_level: 'HIGH',
      elevators: { total: 8, operational: 8 },
      escalators: { total: 16, operational: 15 },
      accessibility: 'FULLY_ACCESSIBLE',
      security_level: 'NORMAL',
      cleaning_status: 'IN_PROGRESS',
      last_incident: Date.now() - 24 * 60 * 60 * 1000,
      wifi_status: 'OPERATIONAL',
      cellular_coverage: 'EXCELLENT',
      emergency_systems: 'ALL_OPERATIONAL'
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    performance: {
      on_time_performance: 86.4, // system average
      service_reliability: 94.7,
      customer_satisfaction: 4.1, // out of 5
      mean_distance_between_failures: 45673, // km
      availability: 97.8 // percentage
    },
    ridership: {
      daily_ridership: 847392,
      peak_hour_ridership: 156789,
      off_peak_ridership: 89234,
      weekend_ridership: 234567,
      monthly_growth: 2.3 // percentage
    },
    safety: {
      incidents_today: 2,
      safety_index: 'GREEN',
      emergency_activations: 5,
      medical_emergencies: 3,
      security_alerts: 1,
      evacuation_drills_completed: 4
    },
    maintenance: {
      trains_in_maintenance: 24,
      scheduled_maintenance: 18,
      emergency_repairs: 6,
      maintenance_backlog: 12,
      parts_availability: 94.6 // percentage
    }
  });

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        ridership: Math.floor(25000 + Math.random() * 40000),
        on_time_performance: 75 + Math.random() * 20,
        system_delay: 1 + Math.random() * 5,
        trains_in_service: Math.floor(140 + Math.random() * 25),
        passenger_complaints: Math.floor(2 + Math.random() * 8)
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update system status
      setSystemStatus(prev => ({
        ...prev,
        trainsInService: Math.max(140, Math.min(170, prev.trainsInService + Math.floor((Math.random() - 0.5) * 4))),
        systemPassengers: Math.max(2000, Math.min(3500, prev.systemPassengers + Math.floor((Math.random() - 0.5) * 200))),
        avgHeadway: Math.max(2.5, Math.min(4.5, prev.avgHeadway + (Math.random() - 0.5) * 0.3)),
        systemDelay: Math.max(1.0, Math.min(6.0, prev.systemDelay + (Math.random() - 0.5) * 0.5)),
        lastUpdate: Date.now()
      }));

      // Update line status
      setLineStatus(prev => prev.map(line => ({
        ...line,
        current_headway: Math.max(line.target_headway * 0.8, Math.min(line.target_headway * 1.5,
          line.current_headway + (Math.random() - 0.5) * 0.2)),
        passenger_load: Math.max(line.passenger_load * 0.9, Math.min(line.passenger_load * 1.1,
          line.passenger_load + Math.floor((Math.random() - 0.5) * 50))),
        on_time_performance: Math.max(60, Math.min(98, 
          line.on_time_performance + (Math.random() - 0.5) * 2)),
        last_update: Date.now()
      })));

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getLineStatusColor = (status) => {
    switch (status) {
      case 'GOOD_SERVICE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'DELAYS': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'PARTIAL_SERVICE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'SUSPENDED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTrainStatusColor = (status) => {
    switch (status) {
      case 'IN_SERVICE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'DELAYED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OUT_OF_SERVICE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStationStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SIGNAL_ISSUES':
      case 'LIMITED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CLOSED':
      case 'EMERGENCY': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCrowdingColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
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
          🚇 SUBWAY/METRO OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {systemStatus.operationalLines}/{systemStatus.totalLines} Lines
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {systemStatus.trainsInService} Trains
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(systemStatus.avgHeadway, 1)}min Headway
          </div>
          <div className="text-sm text-gray-400 font-mono">
            SCADA & Transit Control Systems
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">DAILY RIDERSHIP</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(systemMetrics.ridership.daily_ridership)}
              </div>
              <div className="text-xs text-blue-300">
                Passengers Today
              </div>
            </div>
            <div className="text-3xl opacity-60">🚇</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ON-TIME PERFORMANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(systemMetrics.performance.on_time_performance)}%
              </div>
              <div className="text-xs text-green-300">
                System Average
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">TRAINS IN SERVICE</div>
              <div className="text-2xl font-bold text-purple-100">
                {systemStatus.trainsInService}
              </div>
              <div className="text-xs text-purple-300">
                of {systemStatus.totalTrains} total
              </div>
            </div>
            <div className="text-3xl opacity-60">🚊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SYSTEM DELAY</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(systemStatus.systemDelay, 1)}
              </div>
              <div className="text-xs text-orange-300">
                Minutes Average
              </div>
            </div>
            <div className="text-3xl opacity-60">⚠️</div>
          </div>
        </div>
      </div>

      {/* Line Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚉 LINE STATUS & REAL-TIME OPERATIONS
        </h3>
        <div className="space-y-3">
          {lineStatus.map((line) => (
            <div key={line.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: line.color }}
                  ></div>
                  <div className="text-sm font-bold text-white">{line.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getLineStatusColor(line.status)}`}>
                    {line.status.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {line.signal_system}
                  </span>
                  {line.service_alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                      {line.service_alerts.length} alert{line.service_alerts.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {formatTime(line.last_update)}
                </div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Trains: </span>
                <span className="text-green-400">{line.trains_running}</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{line.total_trains} active</span>
                <span className="text-gray-400"> | Headway: </span>
                <span className="text-purple-400">{formatNumber(line.current_headway, 1)}min</span>
                <span className="text-gray-400"> (target {formatNumber(line.target_headway, 1)}min)</span>
                <span className="text-gray-400"> | Passengers: </span>
                <span className="text-orange-400">{formatNumber(line.passenger_load)}</span>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Stations: </span>
                <span className="text-green-400">{line.operational_stations}</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{line.total_stations} operational</span>
                <span className="text-gray-400"> | Performance: </span>
                <span className="text-cyan-400">{formatNumber(line.on_time_performance, 1)}%</span>
                <span className="text-gray-400"> | Avg Speed: </span>
                <span className="text-yellow-400">{line.avg_speed} km/h</span>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Power: </span>
                <span className={line.power_status === 'NORMAL' ? 'text-green-400' : 
                                 line.power_status === 'REDUCED' ? 'text-yellow-400' : 'text-red-400'}>
                  {line.power_status}
                </span>
                <span className="text-gray-400"> | Track: </span>
                <span className={line.track_conditions === 'CLEAR' ? 'text-green-400' : 
                                 line.track_conditions === 'SIGNAL_PROBLEM' || 
                                 line.track_conditions === 'MAINTENANCE' ? 'text-yellow-400' : 'text-red-400'}>
                  {line.track_conditions.replace(/_/g, ' ')}
                </span>
                {line.speed_restrictions > 0 && (
                  <>
                    <span className="text-gray-400"> | Speed Restrictions: </span>
                    <span className="text-orange-400">{line.speed_restrictions} active</span>
                  </>
                )}
              </div>

              {line.service_alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Service Alerts:</div>
                  {line.service_alerts.map((alert, index) => (
                    <div key={index} className="text-yellow-400">🚇 {alert}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Trains and Station Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Trains */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚊 ACTIVE TRAINS & ROLLING STOCK
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {activeTrains.map((train) => (
              <div key={train.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{train.train_number}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getTrainStatusColor(train.status)}`}>
                      {train.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {train.line}
                    </span>
                    {train.alerts && train.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {train.alerts.length}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Location: </span>
                  <span className="text-cyan-400">{train.current_station}</span>
                  {train.direction !== 'N/A' && (
                    <>
                      <span className="text-gray-400"> → </span>
                      <span className="text-green-400">{train.next_station}</span>
                      <span className="text-gray-400"> ({train.direction})</span>
                    </>
                  )}
                </div>

                {train.status === 'IN_SERVICE' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Load: </span>
                    <span className="text-purple-400">{train.passenger_count}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{train.capacity}</span>
                    <span className="text-gray-400"> ({formatNumber(train.load_factor)}%)</span>
                    <span className="text-gray-400"> | Speed: </span>
                    <span className="text-orange-400">{train.speed} km/h</span>
                    <span className="text-gray-400"> | Doors: </span>
                    <span className={train.doors_status === 'OPEN' ? 'text-yellow-400' : 'text-green-400'}>
                      {train.doors_status}
                    </span>
                  </div>
                )}

                {train.delay_minutes > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Delay: </span>
                    <span className="text-orange-400">{formatNumber(train.delay_minutes, 1)} min</span>
                    {train.delay_reason && (
                      <>
                        <span className="text-gray-400"> - </span>
                        <span className="text-red-400">{train.delay_reason.replace(/_/g, ' ')}</span>
                      </>
                    )}
                  </div>
                )}

                {train.next_arrival && train.status === 'IN_SERVICE' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Next Station: </span>
                    <span className="text-green-400">{Math.floor(train.next_arrival / 60)}:{String(train.next_arrival % 60).padStart(2, '0')}</span>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Operator: </span>
                  <span className="text-cyan-400">{train.operator}</span>
                  {train.maintenance_type && (
                    <>
                      <span className="text-gray-400"> | Maintenance: </span>
                      <span className="text-blue-400">{train.maintenance_type.replace(/_/g, ' ')}</span>
                    </>
                  )}
                </div>

                {train.alerts && train.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {train.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🚊 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Station Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏢 STATION STATUS & PASSENGER FLOW
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {stationStatus.map((station) => (
              <div key={station.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{station.name}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStationStatusColor(station.status)}`}>
                      {station.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Lines: </span>
                  {station.lines.map((line, index) => (
                    <span key={line}>
                      <span className="text-cyan-400">{line}</span>
                      {index < station.lines.length - 1 && <span className="text-gray-400">, </span>}
                    </span>
                  ))}
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Passengers: </span>
                  <span className="text-purple-400">{station.passenger_count}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{station.platform_capacity}</span>
                  <span className="text-gray-400"> | Crowding: </span>
                  <span className={getCrowdingColor(station.crowding_level)}>
                    {station.crowding_level}
                  </span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Elevators: </span>
                  <span className="text-green-400">{station.elevators.operational}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{station.elevators.total}</span>
                  <span className="text-gray-400"> | Escalators: </span>
                  <span className="text-green-400">{station.escalators.operational}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{station.escalators.total}</span>
                  <span className="text-gray-400"> | Access: </span>
                  <span className={station.accessibility === 'FULLY_ACCESSIBLE' ? 'text-green-400' : 'text-yellow-400'}>
                    {station.accessibility.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Security: </span>
                  <span className={station.security_level === 'NORMAL' ? 'text-green-400' : 'text-yellow-400'}>
                    {station.security_level}
                  </span>
                  <span className="text-gray-400"> | WiFi: </span>
                  <span className="text-green-400">{station.wifi_status}</span>
                  <span className="text-gray-400"> | Cellular: </span>
                  <span className="text-blue-400">{station.cellular_coverage}</span>
                </div>

                {station.maintenance_crew_present && (
                  <div className="text-xs mb-2">
                    <span className="text-blue-400">🔧 Maintenance crew on site</span>
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Emergency Systems: </span>
                  <span className={station.emergency_systems === 'ALL_OPERATIONAL' ? 'text-green-400' : 'text-orange-400'}>
                    {station.emergency_systems.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 SYSTEM OPERATIONS TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={operationsHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="ridership"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Ridership/hr"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="on_time_performance" 
              stroke="#10B981" 
              strokeWidth={2}
              name="On-Time Performance %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="system_delay" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Avg Delay (min)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="trains_in_service" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Trains in Service"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="passenger_complaints" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Complaints/hr"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* System Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 SUBWAY SYSTEM KPIs & PERFORMANCE METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">On-Time Performance</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(systemMetrics.performance.on_time_performance, 1)}%
            </div>
            <div className="text-green-400 text-xs">system average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Service Reliability</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(systemMetrics.performance.service_reliability, 1)}%
            </div>
            <div className="text-blue-400 text-xs">availability</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Daily Ridership</div>
            <div className="text-white font-bold text-lg">
              {formatLargeNumber(systemMetrics.ridership.daily_ridership)}
            </div>
            <div className="text-purple-400 text-xs">passengers</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Headway</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(systemStatus.avgHeadway, 1)}
            </div>
            <div className="text-orange-400 text-xs">minutes</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Customer Satisfaction</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(systemMetrics.performance.customer_satisfaction, 1)}
            </div>
            <div className="text-cyan-400 text-xs">out of 5</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Safety Index</div>
            <div className="text-white font-bold text-lg">
              {systemMetrics.safety.safety_index}
            </div>
            <div className="text-yellow-400 text-xs">status level</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubwayOperations;