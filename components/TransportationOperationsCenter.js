// TransportationOperationsCenter.js - Transportation Operations Center & Smart Mobility Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TransportationOperationsCenter = () => {
  const [transportationStatus, setTransportationStatus] = useState({
    operationalStatus: 'SMART_MOBILITY_ACTIVE',
    totalIntersections: 2847,
    intersectionsConnected: 2634,
    totalSensors: 15647,
    sensorsOnline: 14892,
    activeVehicles: 234567,
    connectedVehicles: 67890,
    dailyTransactions: 4567892, // traffic events processed
    overallTrafficFlow: 87.3, // efficiency percentage
    lastUpdate: Date.now()
  });

  const [trafficManagement, setTrafficManagement] = useState({
    signal_control: {
      adaptive_signals: 2456,
      signals_operational: 2367,
      fixed_time_signals: 391,
      fixed_operational: 367,
      pedestrian_signals: 1567,
      pedestrian_active: 1489,
      emergency_preemption: 'ENABLED',
      signal_timing_optimization: 'AI_ADAPTIVE',
      coordination_efficiency: 92.4 // percentage
    },
    traffic_detection: {
      inductive_loop_sensors: 3456,
      loops_functional: 3298,
      video_detection_cameras: 1847,
      cameras_operational: 1734,
      radar_sensors: 567,
      radar_active: 534,
      bluetooth_beacons: 234,
      beacons_working: 221,
      lidar_sensors: 89,
      lidar_operational: 84
    },
    incident_management: {
      active_incidents: 23,
      traffic_accidents: 7,
      road_closures: 4,
      construction_zones: 8,
      weather_related: 4,
      average_response_time: 4.7, // minutes
      incident_clearance_time: 23.4, // minutes
      emergency_response_coordination: 'ACTIVE'
    }
  });

  const [smartMobility, setSmartMobility] = useState([
    {
      corridor_id: 'CORRIDOR_A_MAIN',
      name: 'Main Street Corridor',
      length_km: 12.7,
      intersections: 23,
      traffic_volume: 45678, // vehicles/day
      current_speed: 42.3, // km/h
      target_speed: 50.0,
      congestion_level: 'MODERATE',
      travel_time: 18.7, // minutes
      delay_index: 1.34,
      signal_coordination: 'OPTIMIZED',
      incident_count: 2,
      air_quality_impact: 'LOW',
      noise_level: 68.4 // dB
    },
    {
      corridor_id: 'CORRIDOR_B_HIGHWAY',
      name: 'Highway 101 Corridor',
      length_km: 34.2,
      intersections: 12,
      traffic_volume: 123456,
      current_speed: 87.6,
      target_speed: 100.0,
      congestion_level: 'HEAVY',
      travel_time: 23.5,
      delay_index: 1.67,
      signal_coordination: 'ADAPTIVE',
      incident_count: 5,
      air_quality_impact: 'MODERATE',
      noise_level: 74.2
    },
    {
      corridor_id: 'CORRIDOR_C_URBAN',
      name: 'Downtown Urban Grid',
      length_km: 8.9,
      intersections: 34,
      traffic_volume: 67890,
      current_speed: 24.1,
      target_speed: 35.0,
      congestion_level: 'SEVERE',
      travel_time: 22.3,
      delay_index: 2.14,
      signal_coordination: 'EMERGENCY_OVERRIDE',
      incident_count: 8,
      air_quality_impact: 'HIGH',
      noise_level: 72.8
    },
    {
      corridor_id: 'CORRIDOR_D_SUBURBAN',
      name: 'Suburban Arterial',
      length_km: 18.4,
      intersections: 16,
      traffic_volume: 34567,
      current_speed: 58.2,
      target_speed: 60.0,
      congestion_level: 'LIGHT',
      travel_time: 18.9,
      delay_index: 1.12,
      signal_coordination: 'TIMED',
      incident_count: 1,
      air_quality_impact: 'LOW',
      noise_level: 64.7
    }
  ]);

  const [publicTransit, setPublicTransit] = useState({
    bus_operations: {
      total_buses: 1247,
      buses_in_service: 1134,
      routes_active: 89,
      on_time_performance: 87.6, // percentage
      ridership_today: 234567,
      average_headway: 8.7, // minutes
      fleet_utilization: 91.0, // percentage
      real_time_tracking: 'ENABLED'
    },
    rail_systems: {
      metro_trains: 67,
      trains_operational: 63,
      metro_lines: 4,
      lines_active: 4,
      light_rail_vehicles: 34,
      lrv_in_service: 32,
      subway_ridership: 456789,
      on_time_performance: 94.2,
      signal_system: 'CBTC_AUTOMATED'
    },
    shared_mobility: {
      bike_share_stations: 234,
      stations_operational: 221,
      available_bikes: 2847,
      e_scooter_fleet: 4567,
      scooters_available: 3891,
      ride_share_vehicles: 8900,
      active_ride_shares: 7234,
      micro_transit_zones: 12,
      demand_response_active: 'ENABLED'
    },
    mobility_integration: {
      multimodal_trip_planning: 'AI_ENABLED',
      payment_integration: 'UNIFIED_SYSTEM',
      real_time_information: 'CROSS_MODAL',
      accessibility_features: 'FULL_COMPLIANCE',
      carbon_footprint_tracking: 'ACTIVE'
    }
  });

  const [autonomousVehicles, setAutonomousVehicles] = useState({
    av_deployment: {
      total_autonomous_vehicles: 3456,
      avs_operational: 2987,
      level_4_vehicles: 1234,
      level_5_vehicles: 567,
      testing_vehicles: 345,
      commercial_operations: 1841,
      penetration_rate: 2.9, // percentage of total traffic
      safety_score: 99.7 // incidents per million miles
    },
    infrastructure_support: {
      v2i_enabled_intersections: 234,
      v2i_operational: 221,
      dedicated_av_lanes: 12,
      av_lanes_active: 11,
      charging_stations: 456,
      charging_available: 423,
      coverage_5g: 89.4, // percentage
      edge_computing_nodes: 67,
      nodes_operational: 64
    },
    coordination_systems: {
      traffic_orchestration: 'AI_COORDINATED',
      platoon_management: 'AUTOMATED',
      emergency_response: 'INTEGRATED',
      weather_adaptation: 'DYNAMIC',
      construction_zone_handling: 'ADAPTIVE',
      mixed_traffic_optimization: 'ACTIVE'
    }
  });

  const [urbanPlanning, setUrbanPlanning] = useState({
    congestion_analytics: {
      peak_hour_congestion: 78.4, // percentage
      off_peak_congestion: 23.7,
      weekend_congestion: 45.2,
      congestion_cost_daily: 2345678, // USD
      travel_time_reliability: 67.8, // percentage
      bottleneck_locations: 23,
      improvement_projects: 12
    },
    environmental_impact: {
      co2_emissions_daily: 456.7, // tons
      emission_reduction_target: 25.0, // percentage by 2030
      air_quality_index: 67,
      noise_pollution_average: 69.2, // dB
      green_corridor_coverage: 34.5, // percentage
      electric_vehicle_adoption: 18.9, // percentage
      carbon_neutral_trips: 23.4 // percentage
    },
    accessibility_metrics: {
      wheelchair_accessible_stops: 89.7, // percentage
      visual_impairment_support: 'AUDIO_ENABLED',
      multilingual_interface: 'SUPPORTED',
      senior_mobility_programs: 'ACTIVE',
      low_income_transit_access: 'SUBSIDIZED',
      rural_connectivity_score: 67.8
    },
    future_planning: {
      smart_city_readiness: 84.7, // percentage
      autonomous_infrastructure: 67.2, // percentage ready
      city_score_15_minute: 72.3, // accessibility index
      climate_resilience: 'ADAPTIVE_PLANNING',
      population_growth_projection: 2.3, // percentage annually
      infrastructure_investment: 'PRIORITIZED'
    }
  });

  const [parkingManagement, setParkingManagement] = useState({
    parking_inventory: {
      total_spaces: 45678,
      occupied_spaces: 34567,
      occupancy_rate: 75.7, // percentage
      on_street_spaces: 12345,
      off_street_spaces: 23456,
      ev_charging_spaces: 2345,
      accessible_spaces: 1234,
      dynamic_pricing_enabled: true
    },
    smart_parking_systems: {
      sensor_equipped_spaces: 23456,
      sensors_operational: 22134,
      real_time_availability: 'ENABLED',
      mobile_payment_integration: 'ACTIVE',
      reservation_system: 'AVAILABLE',
      violation_detection: 'AUTOMATED',
      average_search_time: 3.4, // minutes
      revenue_optimization: 'AI_DRIVEN'
    },
    curbside_management: {
      loading_zones: 234,
      pickup_dropoff_zones: 156,
      ride_share_zones: 89,
      delivery_windows: 'TIME_RESTRICTED',
      enforcement_coverage: 67.8, // percentage
      turnover_rate: 4.2 // vehicles per hour per space
    }
  });

  const [transportationHistory, setTransportationHistory] = useState([]);

  const generateTransportationHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of transportation data
      const hour = i;
      let trafficMultiplier = 0.3; // Base traffic
      
      // Urban traffic patterns
      if (hour >= 6 && hour <= 9) trafficMultiplier = 1.0; // Morning rush
      if (hour >= 17 && hour <= 19) trafficMultiplier = 0.95; // Evening rush
      if (hour >= 11 && hour <= 14) trafficMultiplier = 0.6; // Lunch hour
      if (hour >= 20 || hour <= 5) trafficMultiplier = 0.2; // Night/early morning
      if ([7, 8, 17, 18].includes(hour)) trafficMultiplier = 1.2; // Peak rush
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        traffic_volume: Math.floor((50000 + trafficMultiplier * 150000) + Math.random() * 30000),
        average_speed: Math.max(15, Math.min(65, 35 + (1 - trafficMultiplier) * 25 + Math.random() * 10)),
        congestion_level: Math.max(10, Math.min(90, 30 + trafficMultiplier * 50 + Math.random() * 15)),
        public_transit_usage: Math.floor((5000 + trafficMultiplier * 25000) + Math.random() * 8000),
        signal_efficiency: Math.max(70, Math.min(95, 85 - trafficMultiplier * 10 + Math.random() * 8)),
        incident_count: Math.floor(trafficMultiplier * 12 + Math.random() * 6),
        autonomous_vehicle_share: 2.5 + Math.random() * 1.5, // percentage
        parking_occupancy: Math.max(30, Math.min(95, 50 + trafficMultiplier * 35 + Math.random() * 15)),
        air_quality_impact: Math.max(20, Math.min(80, 40 + trafficMultiplier * 25 + Math.random() * 10)),
        energy_consumption: Math.floor((1000 + trafficMultiplier * 3000) + Math.random() * 500),
        carbon_emissions: 20 + trafficMultiplier * 40 + Math.random() * 15 // tons/hour
      });
    }
    return data;
  };

  useEffect(() => {
    setTransportationHistory(generateTransportationHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update transportation status
      setTransportationStatus(prev => ({
        ...prev,
        intersectionsConnected: Math.max(2500, Math.min(2847, prev.intersectionsConnected + Math.floor((Math.random() - 0.5) * 10))),
        sensorsOnline: Math.max(14000, Math.min(15647, prev.sensorsOnline + Math.floor((Math.random() - 0.5) * 50))),
        connectedVehicles: Math.max(60000, Math.min(80000, prev.connectedVehicles + Math.floor((Math.random() - 0.5) * 500))),
        dailyTransactions: prev.dailyTransactions + Math.floor(Math.random() * 5000) + 2000,
        overallTrafficFlow: Math.max(75.0, Math.min(95.0, prev.overallTrafficFlow + (Math.random() - 0.5) * 3.0)),
        lastUpdate: Date.now()
      }));

      // Update traffic management
      setTrafficManagement(prev => ({
        ...prev,
        signal_control: {
          ...prev.signal_control,
          signals_operational: Math.max(2250, Math.min(2456, prev.signal_control.signals_operational + Math.floor((Math.random() - 0.5) * 5))),
          coordination_efficiency: Math.max(85.0, Math.min(98.0, prev.signal_control.coordination_efficiency + (Math.random() - 0.5) * 1.0))
        },
        incident_management: {
          ...prev.incident_management,
          active_incidents: Math.max(10, Math.min(50, prev.incident_management.active_incidents + Math.floor((Math.random() - 0.7) * 3)))
        }
      }));

      // Update smart mobility corridors
      setSmartMobility(prev => prev.map(corridor => ({
        ...corridor,
        current_speed: Math.max(10.0, Math.min(corridor.target_speed * 1.1, corridor.current_speed + (Math.random() - 0.5) * 5.0)),
        congestion_level: Math.random() > 0.8 ? 
          (corridor.congestion_level === 'LIGHT' ? 'MODERATE' : 
           corridor.congestion_level === 'MODERATE' ? 'HEAVY' : 
           corridor.congestion_level === 'HEAVY' ? 'SEVERE' : 'LIGHT') : 
          corridor.congestion_level,
        incident_count: Math.max(0, corridor.incident_count + Math.floor((Math.random() - 0.8) * 2))
      })));

      // Update public transit
      setPublicTransit(prev => ({
        ...prev,
        bus_operations: {
          ...prev.bus_operations,
          buses_in_service: Math.max(1000, Math.min(1247, prev.bus_operations.buses_in_service + Math.floor((Math.random() - 0.5) * 10))),
          on_time_performance: Math.max(80.0, Math.min(95.0, prev.bus_operations.on_time_performance + (Math.random() - 0.5) * 2.0)),
          ridership_today: prev.bus_operations.ridership_today + Math.floor(Math.random() * 1000) + 500
        }
      }));

      // Update autonomous vehicles
      setAutonomousVehicles(prev => ({
        ...prev,
        av_deployment: {
          ...prev.av_deployment,
          avs_operational: Math.max(2800, Math.min(3456, prev.av_deployment.avs_operational + Math.floor((Math.random() - 0.5) * 20))),
          penetration_rate: Math.max(2.0, Math.min(5.0, prev.av_deployment.penetration_rate + (Math.random() - 0.5) * 0.2))
        }
      }));

    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'SMART_MOBILITY_ACTIVE':
      case 'ENABLED':
      case 'AI_ADAPTIVE':
      case 'OPTIMIZED':
      case 'ACTIVE':
      case 'AUTOMATED':
      case 'OPERATIONAL':
      case 'AVAILABLE':
      case 'FULL_COMPLIANCE':
      case 'ADAPTIVE_PLANNING':
      case 'PRIORITIZED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'LIGHT':
      case 'LOW':
      case 'TIMED':
      case 'SUBSIDIZED':
      case 'SUPPORTED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MODERATE':
      case 'ADAPTIVE':
      case 'TIME_RESTRICTED':
      case 'AI_DRIVEN': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'HEAVY':
      case 'SEVERE':
      case 'HIGH':
      case 'EMERGENCY_OVERRIDE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const getCongestionColor = (level) => {
    switch (level) {
      case 'LIGHT': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HEAVY': return 'text-orange-400';
      case 'SEVERE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    if (!num && num !== 0) return 'N/A';
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (num) => {
    return `${formatNumber(num)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚦 TRANSPORTATION OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(transportationStatus.operationalStatus)}`}>
            {transportationStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {transportationStatus.intersectionsConnected}/{transportationStatus.totalIntersections} Intersections
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatLargeNumber(transportationStatus.connectedVehicles)} Connected Vehicles
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            Flow {formatPercentage(transportationStatus.overallTrafficFlow)}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Smart City Mobility & ITS Management
          </div>
        </div>
      </div>

      {/* Transportation Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TRAFFIC FLOW EFFICIENCY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatPercentage(transportationStatus.overallTrafficFlow)}
              </div>
              <div className="text-xs text-green-300">
                System-wide performance
              </div>
            </div>
            <div className="text-3xl opacity-60">🚦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">CONNECTED VEHICLES</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(transportationStatus.connectedVehicles)}
              </div>
              <div className="text-xs text-blue-300">
                V2I enabled fleet
              </div>
            </div>
            <div className="text-3xl opacity-60">🚗</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">SENSOR NETWORK</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatLargeNumber(transportationStatus.sensorsOnline)}
              </div>
              <div className="text-xs text-purple-300">
                ITS sensors active
              </div>
            </div>
            <div className="text-3xl opacity-60">📡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">DAILY TRANSACTIONS</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatLargeNumber(transportationStatus.dailyTransactions)}
              </div>
              <div className="text-xs text-orange-300">
                Traffic events processed
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>
      </div>

      {/* Traffic Management Systems */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚦 TRAFFIC MANAGEMENT & SIGNAL CONTROL SYSTEMS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Signal Control</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Adaptive Signals:</span>
                <span className="text-blue-400">{trafficManagement.signal_control.signals_operational}/{trafficManagement.signal_control.adaptive_signals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fixed Time:</span>
                <span className="text-green-400">{trafficManagement.signal_control.fixed_operational}/{trafficManagement.signal_control.fixed_time_signals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pedestrian Signals:</span>
                <span className="text-purple-400">{trafficManagement.signal_control.pedestrian_active}/{trafficManagement.signal_control.pedestrian_signals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emergency Preemption:</span>
                <span className={`${getStatusColor(trafficManagement.signal_control.emergency_preemption)?.split(' ')[0] || 'text-green-400'}`}>
                  {trafficManagement.signal_control.emergency_preemption}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Timing Optimization:</span>
                <span className={`${getStatusColor(trafficManagement.signal_control.signal_timing_optimization)?.split(' ')[0] || 'text-green-400'}`}>
                  {trafficManagement.signal_control.signal_timing_optimization.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coordination Efficiency:</span>
                <span className="text-cyan-400">{formatPercentage(trafficManagement.signal_control.coordination_efficiency)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Traffic Detection</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Inductive Loops:</span>
                <span className="text-blue-400">{trafficManagement.traffic_detection.loops_functional}/{trafficManagement.traffic_detection.inductive_loop_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Video Detection:</span>
                <span className="text-green-400">{trafficManagement.traffic_detection.cameras_operational}/{trafficManagement.traffic_detection.video_detection_cameras}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Radar Sensors:</span>
                <span className="text-purple-400">{trafficManagement.traffic_detection.radar_active}/{trafficManagement.traffic_detection.radar_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bluetooth Beacons:</span>
                <span className="text-orange-400">{trafficManagement.traffic_detection.beacons_working}/{trafficManagement.traffic_detection.bluetooth_beacons}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LiDAR Sensors:</span>
                <span className="text-cyan-400">{trafficManagement.traffic_detection.lidar_operational}/{trafficManagement.traffic_detection.lidar_sensors}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Incident Management</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Incidents:</span>
                <span className="text-red-400">{trafficManagement.incident_management.active_incidents}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Traffic Accidents:</span>
                <span className="text-orange-400">{trafficManagement.incident_management.traffic_accidents}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Road Closures:</span>
                <span className="text-purple-400">{trafficManagement.incident_management.road_closures}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Construction Zones:</span>
                <span className="text-yellow-400">{trafficManagement.incident_management.construction_zones}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weather Related:</span>
                <span className="text-cyan-400">{trafficManagement.incident_management.weather_related}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Response:</span>
                <span className="text-green-400">{formatNumber(trafficManagement.incident_management.average_response_time)} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Clearance Time:</span>
                <span className="text-blue-400">{formatNumber(trafficManagement.incident_management.incident_clearance_time)} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Mobility Corridors */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🛤️ SMART MOBILITY CORRIDORS & TRAFFIC FLOW
        </h3>
        <div className="space-y-3">
          {smartMobility.map((corridor) => (
            <div key={corridor.corridor_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{corridor.corridor_id}</div>
                  <span className={`px-2 py-1 rounded text-xs border ${getCongestionColor(corridor.congestion_level)}`}>
                    {corridor.congestion_level}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(corridor.signal_coordination)}`}>
                    {corridor.signal_coordination.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {corridor.name}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Length: </span>
                <span className="text-cyan-400">{formatNumber(corridor.length_km)} km</span>
                <span className="text-gray-400"> | Intersections: </span>
                <span className="text-green-400">{corridor.intersections}</span>
                <span className="text-gray-400"> | Volume: </span>
                <span className="text-purple-400">{formatLargeNumber(corridor.traffic_volume)} veh/day</span>
                <span className="text-gray-400"> | Travel Time: </span>
                <span className="text-orange-400">{formatNumber(corridor.travel_time)} min</span>
              </div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Current Speed: </span>
                <span className="text-blue-400">{formatNumber(corridor.current_speed)} km/h</span>
                <span className="text-gray-400"> | Target: </span>
                <span className="text-green-400">{formatNumber(corridor.target_speed)} km/h</span>
                <span className="text-gray-400"> | Delay Index: </span>
                <span className="text-purple-400">{formatNumber(corridor.delay_index, 2)}</span>
                <span className="text-gray-400"> | Incidents: </span>
                <span className="text-red-400">{corridor.incident_count}</span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Air Quality Impact: </span>
                <span className={`${getStatusColor(corridor.air_quality_impact)?.split(' ')[0] || 'text-yellow-400'}`}>
                  {corridor.air_quality_impact}
                </span>
                <span className="text-gray-400"> | Noise Level: </span>
                <span className="text-orange-400">{formatNumber(corridor.noise_level)} dB</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transportation Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 TRANSPORTATION PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={transportationHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={10}/>
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
              dataKey="traffic_volume"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Traffic Volume"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="average_speed" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Average Speed (km/h)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="congestion_level" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Congestion Level %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="public_transit_usage" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Transit Usage"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="signal_efficiency" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Signal Efficiency %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="incident_count" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Incidents"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="autonomous_vehicle_share" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="AV Share %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Public Transit and Autonomous Vehicles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Public Transit */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚌 PUBLIC TRANSIT & SHARED MOBILITY
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Bus Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Buses in Service:</span>
                  <span className="text-blue-400">{publicTransit.bus_operations.buses_in_service}/{publicTransit.bus_operations.total_buses}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Routes Active:</span>
                  <span className="text-green-400">{publicTransit.bus_operations.routes_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">On-Time Performance:</span>
                  <span className="text-purple-400">{formatPercentage(publicTransit.bus_operations.on_time_performance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ridership Today:</span>
                  <span className="text-orange-400">{formatLargeNumber(publicTransit.bus_operations.ridership_today)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Headway:</span>
                  <span className="text-cyan-400">{formatNumber(publicTransit.bus_operations.average_headway)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fleet Utilization:</span>
                  <span className="text-yellow-400">{formatPercentage(publicTransit.bus_operations.fleet_utilization)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Rail Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Metro Trains:</span>
                  <span className="text-blue-400">{publicTransit.rail_systems.trains_operational}/{publicTransit.rail_systems.metro_trains}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Metro Lines:</span>
                  <span className="text-green-400">{publicTransit.rail_systems.lines_active}/{publicTransit.rail_systems.metro_lines}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Light Rail:</span>
                  <span className="text-purple-400">{publicTransit.rail_systems.lrv_in_service}/{publicTransit.rail_systems.light_rail_vehicles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Subway Ridership:</span>
                  <span className="text-orange-400">{formatLargeNumber(publicTransit.rail_systems.subway_ridership)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">On-Time:</span>
                  <span className="text-cyan-400">{formatPercentage(publicTransit.rail_systems.on_time_performance)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Shared Mobility</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Bike Stations:</span>
                  <span className="text-blue-400">{publicTransit.shared_mobility.stations_operational}/{publicTransit.shared_mobility.bike_share_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Available Bikes:</span>
                  <span className="text-green-400">{formatLargeNumber(publicTransit.shared_mobility.available_bikes)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">E-Scooters:</span>
                  <span className="text-purple-400">{formatLargeNumber(publicTransit.shared_mobility.scooters_available)}/{formatLargeNumber(publicTransit.shared_mobility.e_scooter_fleet)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ride Share:</span>
                  <span className="text-orange-400">{formatLargeNumber(publicTransit.shared_mobility.active_ride_shares)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Micro Transit:</span>
                  <span className="text-cyan-400">{publicTransit.shared_mobility.micro_transit_zones} zones</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Autonomous Vehicles */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AUTONOMOUS VEHICLES & V2I INTEGRATION
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">AV Deployment</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">AVs Operational:</span>
                  <span className="text-blue-400">{formatLargeNumber(autonomousVehicles.av_deployment.avs_operational)}/{formatLargeNumber(autonomousVehicles.av_deployment.total_autonomous_vehicles)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Level 4 Vehicles:</span>
                  <span className="text-green-400">{formatLargeNumber(autonomousVehicles.av_deployment.level_4_vehicles)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Level 5 Vehicles:</span>
                  <span className="text-purple-400">{autonomousVehicles.av_deployment.level_5_vehicles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Testing Vehicles:</span>
                  <span className="text-orange-400">{autonomousVehicles.av_deployment.testing_vehicles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Commercial Ops:</span>
                  <span className="text-cyan-400">{formatLargeNumber(autonomousVehicles.av_deployment.commercial_operations)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Penetration Rate:</span>
                  <span className="text-yellow-400">{formatPercentage(autonomousVehicles.av_deployment.penetration_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Safety Score:</span>
                  <span className="text-pink-400">{formatPercentage(autonomousVehicles.av_deployment.safety_score)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Infrastructure Support</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">V2I Intersections:</span>
                  <span className="text-blue-400">{autonomousVehicles.infrastructure_support.v2i_operational}/{autonomousVehicles.infrastructure_support.v2i_enabled_intersections}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AV Lanes:</span>
                  <span className="text-green-400">{autonomousVehicles.infrastructure_support.av_lanes_active}/{autonomousVehicles.infrastructure_support.dedicated_av_lanes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Charging Stations:</span>
                  <span className="text-purple-400">{autonomousVehicles.infrastructure_support.charging_available}/{autonomousVehicles.infrastructure_support.charging_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">5G Coverage:</span>
                  <span className="text-orange-400">{formatPercentage(autonomousVehicles.infrastructure_support.coverage_5g)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Edge Nodes:</span>
                  <span className="text-cyan-400">{autonomousVehicles.infrastructure_support.nodes_operational}/{autonomousVehicles.infrastructure_support.edge_computing_nodes}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Coordination Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Traffic Orchestration:</span>
                  <span className={`${getStatusColor(autonomousVehicles.coordination_systems.traffic_orchestration)?.split(' ')[0] || 'text-green-400'}`}>
                    {autonomousVehicles.coordination_systems.traffic_orchestration.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Platoon Management:</span>
                  <span className={`${getStatusColor(autonomousVehicles.coordination_systems.platoon_management)?.split(' ')[0] || 'text-green-400'}`}>
                    {autonomousVehicles.coordination_systems.platoon_management}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Response:</span>
                  <span className={`${getStatusColor(autonomousVehicles.coordination_systems.emergency_response)?.split(' ')[0] || 'text-green-400'}`}>
                    {autonomousVehicles.coordination_systems.emergency_response}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weather Adaptation:</span>
                  <span className={`${getStatusColor(autonomousVehicles.coordination_systems.weather_adaptation)?.split(' ')[0] || 'text-green-400'}`}>
                    {autonomousVehicles.coordination_systems.weather_adaptation}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mixed Traffic:</span>
                  <span className={`${getStatusColor(autonomousVehicles.coordination_systems.mixed_traffic_optimization)?.split(' ')[0] || 'text-green-400'}`}>
                    {autonomousVehicles.coordination_systems.mixed_traffic_optimization}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urban Planning and Parking Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Urban Planning */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏙️ URBAN PLANNING & SMART CITY ANALYTICS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Congestion Analytics</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Peak Hour:</span>
                  <span className="text-red-400">{formatPercentage(urbanPlanning.congestion_analytics.peak_hour_congestion)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Off Peak:</span>
                  <span className="text-green-400">{formatPercentage(urbanPlanning.congestion_analytics.off_peak_congestion)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weekend:</span>
                  <span className="text-yellow-400">{formatPercentage(urbanPlanning.congestion_analytics.weekend_congestion)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily Cost:</span>
                  <span className="text-red-400">{formatCurrency(urbanPlanning.congestion_analytics.congestion_cost_daily)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reliability:</span>
                  <span className="text-purple-400">{formatPercentage(urbanPlanning.congestion_analytics.travel_time_reliability)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bottlenecks:</span>
                  <span className="text-orange-400">{urbanPlanning.congestion_analytics.bottleneck_locations}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Environmental Impact</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily CO₂:</span>
                  <span className="text-red-400">{formatNumber(urbanPlanning.environmental_impact.co2_emissions_daily)} tons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reduction Target:</span>
                  <span className="text-green-400">{formatPercentage(urbanPlanning.environmental_impact.emission_reduction_target)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Air Quality Index:</span>
                  <span className="text-yellow-400">{urbanPlanning.environmental_impact.air_quality_index}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Noise Pollution:</span>
                  <span className="text-orange-400">{formatNumber(urbanPlanning.environmental_impact.noise_pollution_average)} dB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Green Corridors:</span>
                  <span className="text-green-400">{formatPercentage(urbanPlanning.environmental_impact.green_corridor_coverage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">EV Adoption:</span>
                  <span className="text-blue-400">{formatPercentage(urbanPlanning.environmental_impact.electric_vehicle_adoption)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Future Planning</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Smart City Readiness:</span>
                  <span className="text-blue-400">{formatPercentage(urbanPlanning.future_planning.smart_city_readiness)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AV Infrastructure:</span>
                  <span className="text-green-400">{formatPercentage(urbanPlanning.future_planning.autonomous_infrastructure)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">15-Min City Score:</span>
                  <span className="text-purple-400">{formatNumber(urbanPlanning.future_planning.city_score_15_minute)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Climate Resilience:</span>
                  <span className={`${getStatusColor(urbanPlanning.future_planning.climate_resilience)?.split(' ')[0] || 'text-green-400'}`}>
                    {urbanPlanning.future_planning.climate_resilience.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Population Growth:</span>
                  <span className="text-orange-400">{formatPercentage(urbanPlanning.future_planning.population_growth_projection)}/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parking Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🅿️ PARKING MANAGEMENT & CURBSIDE OPERATIONS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Parking Inventory</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Spaces:</span>
                  <span className="text-blue-400">{formatLargeNumber(parkingManagement.parking_inventory.total_spaces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Occupied:</span>
                  <span className="text-red-400">{formatLargeNumber(parkingManagement.parking_inventory.occupied_spaces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Occupancy Rate:</span>
                  <span className="text-orange-400">{formatPercentage(parkingManagement.parking_inventory.occupancy_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">On-Street:</span>
                  <span className="text-green-400">{formatLargeNumber(parkingManagement.parking_inventory.on_street_spaces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Off-Street:</span>
                  <span className="text-purple-400">{formatLargeNumber(parkingManagement.parking_inventory.off_street_spaces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">EV Charging:</span>
                  <span className="text-cyan-400">{formatLargeNumber(parkingManagement.parking_inventory.ev_charging_spaces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Accessible:</span>
                  <span className="text-yellow-400">{formatLargeNumber(parkingManagement.parking_inventory.accessible_spaces)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Smart Parking Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sensor Spaces:</span>
                  <span className="text-blue-400">{formatLargeNumber(parkingManagement.smart_parking_systems.sensors_operational)}/{formatLargeNumber(parkingManagement.smart_parking_systems.sensor_equipped_spaces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Real-Time Avail:</span>
                  <span className={`${getStatusColor(parkingManagement.smart_parking_systems.real_time_availability)?.split(' ')[0] || 'text-green-400'}`}>
                    {parkingManagement.smart_parking_systems.real_time_availability}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mobile Payment:</span>
                  <span className={`${getStatusColor(parkingManagement.smart_parking_systems.mobile_payment_integration)?.split(' ')[0] || 'text-green-400'}`}>
                    {parkingManagement.smart_parking_systems.mobile_payment_integration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reservations:</span>
                  <span className={`${getStatusColor(parkingManagement.smart_parking_systems.reservation_system)?.split(' ')[0] || 'text-green-400'}`}>
                    {parkingManagement.smart_parking_systems.reservation_system}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Search Time:</span>
                  <span className="text-orange-400">{formatNumber(parkingManagement.smart_parking_systems.average_search_time)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue Optim:</span>
                  <span className={`${getStatusColor(parkingManagement.smart_parking_systems.revenue_optimization)?.split(' ')[0] || 'text-green-400'}`}>
                    {parkingManagement.smart_parking_systems.revenue_optimization.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Curbside Management</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Loading Zones:</span>
                  <span className="text-blue-400">{parkingManagement.curbside_management.loading_zones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pickup/Dropoff:</span>
                  <span className="text-green-400">{parkingManagement.curbside_management.pickup_dropoff_zones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ride Share Zones:</span>
                  <span className="text-purple-400">{parkingManagement.curbside_management.ride_share_zones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery Windows:</span>
                  <span className={`${getStatusColor(parkingManagement.curbside_management.delivery_windows)?.split(' ')[0] || 'text-orange-400'}`}>
                    {parkingManagement.curbside_management.delivery_windows.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Enforcement:</span>
                  <span className="text-orange-400">{formatPercentage(parkingManagement.curbside_management.enforcement_coverage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Turnover Rate:</span>
                  <span className="text-cyan-400">{formatNumber(parkingManagement.curbside_management.turnover_rate)} veh/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationOperationsCenter;