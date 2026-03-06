// FleetOperationsCenter.js - Fleet Operations Center & Vehicle Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FleetOperationsCenter = () => {
  const [fleetStatus, setFleetStatus] = useState({
    operationalStatus: 'ACTIVE_OPERATIONS',
    totalVehicles: 347,
    activeVehicles: 289,
    maintenanceVehicles: 12,
    idleVehicles: 34,
    offlineVehicles: 12,
    totalMileage: 2847392,
    fuelEfficiency: 8.4, // km/L average
    maintenanceCosts: 156743, // USD this month
    driverUtilization: 87.3, // percentage
    onTimeDelivery: 94.7, // percentage
    lastUpdate: Date.now()
  });

  const [vehicleTracking, setVehicleTracking] = useState([
    {
      vehicle_id: 'TRK_001_ALPHA',
      vehicle_type: 'DELIVERY_TRUCK',
      plate_number: 'ABC-1234',
      driver: 'John Martinez',
      status: 'IN_TRANSIT',
      location: {
        lat: 40.7589,
        lng: -73.9851,
        address: 'Manhattan, NY'
      },
      destination: 'Brooklyn Distribution Center',
      eta: Date.now() + 45 * 60 * 1000,
      speed: 45, // km/h
      fuel_level: 67.3, // percentage
      odometer: 154763,
      route_progress: 78.5, // percentage
      delivery_stops: 3,
      completed_stops: 2,
      cargo_weight: 2847, // kg
      temperature: 4.2, // celsius for refrigerated trucks
      engine_hours: 2847.3,
      driver_score: 4.6, // out of 5
      gps_last_update: Date.now() - 30000
    },
    {
      vehicle_id: 'VAN_045_BETA',
      vehicle_type: 'SERVICE_VAN',
      plate_number: 'XYZ-5678',
      driver: 'Sarah Johnson',
      status: 'ON_SITE',
      location: {
        lat: 40.6892,
        lng: -74.0445,
        address: 'Jersey City, NJ'
      },
      destination: 'Client Site #4',
      service_start: Date.now() - 67 * 60 * 1000,
      eta_completion: Date.now() + 23 * 60 * 1000,
      speed: 0,
      fuel_level: 42.8,
      odometer: 89234,
      tools_inventory: 'COMPLETE',
      service_type: 'HVAC_MAINTENANCE',
      client_rating: 4.8,
      engine_hours: 1634.7,
      driver_score: 4.9,
      gps_last_update: Date.now() - 15000
    },
    {
      vehicle_id: 'BUS_012_CHARLIE',
      vehicle_type: 'SHUTTLE_BUS',
      plate_number: 'BUS-9012',
      driver: 'Mike Chen',
      status: 'SCHEDULED_BREAK',
      location: {
        lat: 40.7505,
        lng: -73.9934,
        address: 'Times Square Transit Hub'
      },
      break_end: Date.now() + 12 * 60 * 1000,
      passengers: 0,
      max_capacity: 45,
      speed: 0,
      fuel_level: 89.2,
      odometer: 267893,
      route_number: 'R-15',
      scheduled_trips_today: 12,
      completed_trips: 8,
      engine_hours: 4523.8,
      driver_score: 4.4,
      gps_last_update: Date.now() - 45000
    },
    {
      vehicle_id: 'TRK_078_DELTA',
      vehicle_type: 'HEAVY_TRUCK',
      plate_number: 'HVY-3456',
      driver: 'Lisa Rodriguez',
      status: 'MAINTENANCE',
      location: {
        lat: 40.6643,
        lng: -73.9385,
        address: 'Fleet Maintenance Facility'
      },
      maintenance_type: 'SCHEDULED_SERVICE',
      maintenance_start: Date.now() - 3 * 60 * 60 * 1000,
      eta_completion: Date.now() + 2 * 60 * 60 * 1000,
      odometer: 456789,
      fuel_level: 23.4,
      service_items: ['Oil Change', 'Brake Inspection', 'Tire Rotation'],
      maintenance_cost: 847,
      engine_hours: 7234.2,
      last_service: Date.now() - 30 * 24 * 60 * 60 * 1000
    }
  ]);

  const [dispatchOperations, setDispatchOperations] = useState({
    active_dispatchers: 8,
    pending_orders: 67,
    assigned_routes: 134,
    completed_deliveries: 289,
    emergency_calls: 2,
    route_optimization: 'AI_ENABLED',
    average_response_time: 12.7, // minutes
    dispatcher_efficiency: 94.2, // percentage
    load_balancing: 'OPTIMAL',
    traffic_integration: 'LIVE_DATA',
    weather_alerts: 1,
    road_closures: 3,
    high_priority_routes: [
      {
        route_id: 'ROUTE_URGENT_001',
        priority: 'HIGH',
        vehicle: 'TRK_001_ALPHA',
        type: 'MEDICAL_SUPPLIES',
        destination: 'City Hospital',
        eta: Date.now() + 23 * 60 * 1000,
        status: 'IN_TRANSIT'
      },
      {
        route_id: 'ROUTE_EXPRESS_002',
        priority: 'MEDIUM',
        vehicle: 'VAN_067_EXPRESS',
        type: 'SAME_DAY_DELIVERY',
        destination: 'Corporate Office',
        eta: Date.now() + 45 * 60 * 1000,
        status: 'ASSIGNED'
      }
    ]
  });

  const [maintenanceManagement, setMaintenanceManagement] = useState({
    scheduled_maintenance: 23,
    overdue_maintenance: 8,
    maintenance_alerts: 15,
    ai_predictions: [
      {
        vehicle: 'TRK_089_ECHO',
        prediction: 'BRAKE_REPLACEMENT_NEEDED',
        confidence: 87.3,
        estimated_days: 12,
        estimated_cost: 1247,
        priority: 'HIGH'
      },
      {
        vehicle: 'VAN_034_FOXTROT',
        prediction: 'OIL_CHANGE_DUE',
        confidence: 94.7,
        estimated_days: 3,
        estimated_cost: 89,
        priority: 'MEDIUM'
      },
      {
        vehicle: 'BUS_018_GOLF',
        prediction: 'TIRE_REPLACEMENT_NEEDED',
        confidence: 76.8,
        estimated_days: 18,
        estimated_cost: 2340,
        priority: 'MEDIUM'
      }
    ],
    parts_inventory: {
      critical_parts: 234,
      low_stock_parts: 67,
      emergency_orders: 12,
      supplier_performance: 91.4 // percentage
    },
    maintenance_teams: 12,
    active_technicians: 8,
    workshop_utilization: 78.5 // percentage
  });

  const [driverManagement, setDriverManagement] = useState({
    total_drivers: 167,
    active_drivers: 134,
    off_duty_drivers: 23,
    on_break_drivers: 10,
    driver_performance: [
      {
        driver_id: 'DRV_001',
        name: 'John Martinez',
        vehicle: 'TRK_001_ALPHA',
        hours_today: 7.2,
        max_hours: 11.0,
        safety_score: 4.6,
        fuel_efficiency: 9.2, // km/L
        on_time_deliveries: 23,
        total_deliveries: 25,
        violations: 0,
        customer_rating: 4.7,
        driving_behavior: 'EXCELLENT'
      },
      {
        driver_id: 'DRV_002',
        name: 'Sarah Johnson',
        vehicle: 'VAN_045_BETA',
        hours_today: 6.8,
        max_hours: 10.0,
        safety_score: 4.9,
        fuel_efficiency: 8.7,
        service_calls: 4,
        completed_calls: 4,
        violations: 0,
        customer_rating: 4.8,
        driving_behavior: 'EXCELLENT'
      },
      {
        driver_id: 'DRV_003',
        name: 'Mike Chen',
        vehicle: 'BUS_012_CHARLIE',
        hours_today: 5.5,
        max_hours: 8.0,
        safety_score: 4.4,
        fuel_efficiency: 7.8,
        passenger_trips: 8,
        scheduled_trips: 12,
        violations: 1,
        passenger_rating: 4.3,
        driving_behavior: 'GOOD'
      }
    ],
    compliance_status: {
      hours_violations: 3,
      speed_violations: 7,
      route_deviations: 12,
      break_compliance: 94.7, // percentage
      license_renewals_due: 8,
      training_completions: 89.3 // percentage
    }
  });

  const [fuelManagement, setFuelManagement] = useState({
    total_fuel_consumption: 4523.7, // liters today
    fuel_cost_today: 6734.23, // USD
    average_fuel_efficiency: 8.4, // km/L
    fuel_stations: [
      {
        station_id: 'FUEL_001',
        location: 'Main Depot',
        capacity: 10000, // liters
        current_level: 6734,
        pumps_operational: 6,
        pumps_total: 8,
        fuel_type: 'DIESEL',
        price_per_liter: 1.489
      },
      {
        station_id: 'FUEL_002',
        location: 'North Branch',
        capacity: 5000,
        current_level: 2847,
        pumps_operational: 4,
        pumps_total: 4,
        fuel_type: 'GASOLINE',
        price_per_liter: 1.623
      }
    ],
    fuel_cards: {
      active_cards: 167,
      blocked_cards: 3,
      daily_limit_exceeded: 8,
      fraud_alerts: 2
    },
    eco_metrics: {
      carbon_footprint: 12.7, // tons CO2 today
      electric_vehicles: 23,
      hybrid_vehicles: 45,
      fuel_efficiency_trend: 'IMPROVING'
    }
  });

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(5, 0, 0, 0); // Fleet operations start at 5 AM
    
    for (let i = 0; i <= 17; i++) { // 17 hours from 5 AM to 10 PM
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic fleet patterns
      const hour = time.getHours();
      let activityMultiplier = 0.4; // Base activity
      
      if (hour >= 6 && hour <= 9) activityMultiplier = 1.0; // Morning peak
      if (hour >= 10 && hour <= 16) activityMultiplier = 0.8; // Daytime operations
      if (hour >= 17 && hour <= 19) activityMultiplier = 0.9; // Evening deliveries
      if (hour >= 20) activityMultiplier = 0.3; // Night operations
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        active_vehicles: Math.floor(200 + activityMultiplier * 100 + Math.random() * 30),
        fuel_consumption: Math.floor(200 + activityMultiplier * 300 + Math.random() * 50),
        deliveries_completed: Math.floor(activityMultiplier * 25 + Math.random() * 8),
        maintenance_alerts: Math.floor(Math.random() * 4),
        driver_violations: Math.floor(Math.random() * 3),
        fuel_efficiency: 7.5 + activityMultiplier * 1.5 + Math.random() * 1,
        on_time_percentage: 85 + activityMultiplier * 10 + Math.random() * 5
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update fleet status
      setFleetStatus(prev => ({
        ...prev,
        totalMileage: prev.totalMileage + Math.floor(Math.random() * 500),
        fuelEfficiency: Math.max(7.0, Math.min(10.0, prev.fuelEfficiency + (Math.random() - 0.5) * 0.3)),
        driverUtilization: Math.max(75.0, Math.min(95.0, prev.driverUtilization + (Math.random() - 0.5) * 2.0)),
        onTimeDelivery: Math.max(85.0, Math.min(98.0, prev.onTimeDelivery + (Math.random() - 0.5) * 1.5)),
        lastUpdate: Date.now()
      }));

      // Update vehicle tracking
      setVehicleTracking(prev => prev.map(vehicle => {
        if (vehicle.status === 'IN_TRANSIT') {
          return {
            ...vehicle,
            fuel_level: Math.max(10.0, vehicle.fuel_level - Math.random() * 2.0),
            route_progress: Math.min(100, vehicle.route_progress + Math.random() * 5),
            speed: Math.max(0, Math.min(80, vehicle.speed + (Math.random() - 0.5) * 10)),
            gps_last_update: Date.now()
          };
        }
        return vehicle;
      }));

      // Update dispatch operations
      setDispatchOperations(prev => ({
        ...prev,
        pending_orders: Math.max(0, prev.pending_orders + Math.floor((Math.random() - 0.7) * 5)),
        completed_deliveries: prev.completed_deliveries + Math.floor(Math.random() * 3),
        average_response_time: Math.max(5.0, Math.min(20.0, prev.average_response_time + (Math.random() - 0.5) * 2.0))
      }));

    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE_OPERATIONS':
      case 'IN_TRANSIT':
      case 'OPERATIONAL':
      case 'EXCELLENT':
      case 'COMPLETE':
      case 'OPTIMAL':
      case 'AI_ENABLED':
      case 'LIVE_DATA': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'ON_SITE':
      case 'ASSIGNED':
      case 'GOOD':
      case 'IMPROVING':
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'SCHEDULED_BREAK':
      case 'IDLE':
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE':
      case 'HIGH':
      case 'CRITICAL': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFFLINE':
      case 'EMERGENCY': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      return `${Math.floor(absDiff / 3600000)}h ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚛 FLEET OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {fleetStatus.activeVehicles}/{fleetStatus.totalVehicles} Active
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(fleetStatus.fuelEfficiency, 1)} km/L
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(fleetStatus.onTimeDelivery, 1)}% On-Time
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Vehicle Tracking & Logistics Management
          </div>
        </div>
      </div>

      {/* Fleet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">FLEET STATUS</div>
              <div className="text-2xl font-bold text-blue-100">
                {fleetStatus.activeVehicles}
              </div>
              <div className="text-xs text-blue-300">
                of {fleetStatus.totalVehicles} vehicles active
              </div>
            </div>
            <div className="text-3xl opacity-60">🚛</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL MILEAGE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(fleetStatus.totalMileage)}
              </div>
              <div className="text-xs text-green-300">
                kilometers today
              </div>
            </div>
            <div className="text-3xl opacity-60">📍</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">FUEL EFFICIENCY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(fleetStatus.fuelEfficiency, 1)} km/L
              </div>
              <div className="text-xs text-purple-300">
                Average Fleet
              </div>
            </div>
            <div className="text-3xl opacity-60">⛽</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">DRIVER UTILIZATION</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(fleetStatus.driverUtilization, 1)}%
              </div>
              <div className="text-xs text-orange-300">
                Fleet Productivity
              </div>
            </div>
            <div className="text-3xl opacity-60">👤</div>
          </div>
        </div>
      </div>

      {/* Vehicle Tracking */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📍 REAL-TIME VEHICLE TRACKING & GPS
        </h3>
        <div className="space-y-3">
          {vehicleTracking.map((vehicle) => (
            <div key={vehicle.vehicle_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">
                    {vehicle.vehicle_id} - {vehicle.plate_number}
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(vehicle.status)}`}>
                    {vehicle.status.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {vehicle.vehicle_type.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Driver: {vehicle.driver}
                </div>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Location: </span>
                <span className="text-cyan-400">{vehicle.location.address}</span>
                {vehicle.destination && (
                  <>
                    <span className="text-gray-400"> → </span>
                    <span className="text-blue-400">{vehicle.destination}</span>
                  </>
                )}
                {vehicle.eta && (
                  <>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-yellow-400">{formatTime(vehicle.eta)}</span>
                  </>
                )}
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Speed: </span>
                <span className="text-orange-400">{vehicle.speed} km/h</span>
                <span className="text-gray-400"> | Fuel: </span>
                <span className={vehicle.fuel_level < 25 ? 'text-red-400' : vehicle.fuel_level < 50 ? 'text-yellow-400' : 'text-green-400'}>
                  {formatNumber(vehicle.fuel_level, 1)}%
                </span>
                <span className="text-gray-400"> | Odometer: </span>
                <span className="text-purple-400">{formatLargeNumber(vehicle.odometer)} km</span>
                {vehicle.engine_hours && (
                  <>
                    <span className="text-gray-400"> | Engine Hours: </span>
                    <span className="text-pink-400">{formatLargeNumber(vehicle.engine_hours)}h</span>
                  </>
                )}
              </div>

              {vehicle.route_progress !== undefined && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Route Progress: </span>
                  <span className="text-green-400">{formatNumber(vehicle.route_progress, 1)}%</span>
                  {vehicle.delivery_stops && (
                    <>
                      <span className="text-gray-400"> | Stops: </span>
                      <span className="text-cyan-400">{vehicle.completed_stops}</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-blue-400">{vehicle.delivery_stops}</span>
                    </>
                  )}
                  {vehicle.cargo_weight && (
                    <>
                      <span className="text-gray-400"> | Cargo: </span>
                      <span className="text-yellow-400">{formatLargeNumber(vehicle.cargo_weight)} kg</span>
                    </>
                  )}
                </div>
              )}

              {vehicle.status === 'MAINTENANCE' && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Service: </span>
                  <span className="text-orange-400">{vehicle.maintenance_type?.replace(/_/g, ' ')}</span>
                  {vehicle.eta_completion && (
                    <>
                      <span className="text-gray-400"> | ETA Completion: </span>
                      <span className="text-yellow-400">{formatTime(vehicle.eta_completion)}</span>
                    </>
                  )}
                  {vehicle.maintenance_cost && (
                    <>
                      <span className="text-gray-400"> | Cost: </span>
                      <span className="text-red-400">{formatCurrency(vehicle.maintenance_cost)}</span>
                    </>
                  )}
                </div>
              )}

              <div className="text-xs">
                <span className="text-gray-400">Driver Score: </span>
                <span className="text-green-400">{formatNumber(vehicle.driver_score, 1)}/5</span>
                <span className="text-gray-400"> | GPS Update: </span>
                <span className="text-purple-400">{formatTime(vehicle.gps_last_update)}</span>
                {vehicle.temperature !== undefined && (
                  <>
                    <span className="text-gray-400"> | Temp: </span>
                    <span className="text-blue-400">{formatNumber(vehicle.temperature, 1)}°C</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dispatch Operations and Maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dispatch Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 DISPATCH OPERATIONS & ROUTING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Dispatch Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Dispatchers:</span>
                <span className="text-green-400">{dispatchOperations.active_dispatchers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pending Orders:</span>
                <span className="text-yellow-400">{dispatchOperations.pending_orders}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Assigned Routes:</span>
                <span className="text-blue-400">{dispatchOperations.assigned_routes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Completed Today:</span>
                <span className="text-purple-400">{dispatchOperations.completed_deliveries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emergency Calls:</span>
                <span className="text-red-400">{dispatchOperations.emergency_calls}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Operations Efficiency</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Route Optimization:</span>
                <span className={`${getStatusColor(dispatchOperations.route_optimization).split(' ')[0]}`}>
                  {dispatchOperations.route_optimization.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Response Time:</span>
                <span className="text-orange-400">{formatNumber(dispatchOperations.average_response_time, 1)} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Efficiency:</span>
                <span className="text-cyan-400">{formatNumber(dispatchOperations.dispatcher_efficiency, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Load Balancing:</span>
                <span className="text-green-400">{dispatchOperations.load_balancing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Traffic Integration:</span>
                <span className="text-blue-400">{dispatchOperations.traffic_integration.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>

          {dispatchOperations.high_priority_routes.length > 0 && (
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">High Priority Routes</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {dispatchOperations.high_priority_routes.map((route, index) => (
                  <div key={index} className="bg-gray-600 rounded p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{route.route_id}</span>
                      <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(route.priority)}`}>
                        {route.priority}
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Vehicle: </span>
                      <span className="text-cyan-400">{route.vehicle}</span>
                      <span className="text-gray-400"> | Type: </span>
                      <span className="text-yellow-400">{route.type.replace(/_/g, ' ')}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Destination: </span>
                      <span className="text-blue-400">{route.destination}</span>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-orange-400">{formatTime(route.eta)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Maintenance Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔧 MAINTENANCE MANAGEMENT & AI PREDICTIONS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Maintenance Overview</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Scheduled:</span>
                <span className="text-blue-400">{maintenanceManagement.scheduled_maintenance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Overdue:</span>
                <span className="text-red-400">{maintenanceManagement.overdue_maintenance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Alerts:</span>
                <span className="text-yellow-400">{maintenanceManagement.maintenance_alerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Technicians:</span>
                <span className="text-green-400">{maintenanceManagement.active_technicians}/{maintenanceManagement.maintenance_teams}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Workshop Utilization:</span>
                <span className="text-purple-400">{formatNumber(maintenanceManagement.workshop_utilization, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">AI Maintenance Predictions</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {maintenanceManagement.ai_predictions.map((prediction, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{prediction.vehicle}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(prediction.priority)}`}>
                      {prediction.priority}
                    </span>
                  </div>
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Prediction: </span>
                    <span className="text-yellow-400">{prediction.prediction.replace(/_/g, ' ')}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Confidence: </span>
                    <span className="text-green-400">{formatNumber(prediction.confidence, 1)}%</span>
                    <span className="text-gray-400"> | Days: </span>
                    <span className="text-orange-400">{prediction.estimated_days}</span>
                    <span className="text-gray-400"> | Cost: </span>
                    <span className="text-red-400">{formatCurrency(prediction.estimated_cost)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 FLEET OPERATIONS TRENDS (TODAY)
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
              dataKey="active_vehicles"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Active Vehicles"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="fuel_consumption" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Fuel Consumption (L)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="deliveries_completed" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Deliveries Completed"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="fuel_efficiency" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Fuel Efficiency (km/L)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="on_time_percentage" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="On-Time Delivery %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="maintenance_alerts" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Maintenance Alerts"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="driver_violations" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Driver Violations"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Driver Management and Fuel Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Driver Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👤 DRIVER MANAGEMENT & PERFORMANCE
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Driver Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Drivers:</span>
                <span className="text-blue-400">{driverManagement.total_drivers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active:</span>
                <span className="text-green-400">{driverManagement.active_drivers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Off Duty:</span>
                <span className="text-gray-400">{driverManagement.off_duty_drivers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">On Break:</span>
                <span className="text-yellow-400">{driverManagement.on_break_drivers}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Top Performers</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {driverManagement.driver_performance.map((driver, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{driver.name}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(driver.driving_behavior)}`}>
                      {driver.driving_behavior}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Vehicle: </span>
                    <span className="text-cyan-400">{driver.vehicle}</span>
                    <span className="text-gray-400"> | Hours: </span>
                    <span className="text-purple-400">{formatNumber(driver.hours_today, 1)}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{formatNumber(driver.max_hours, 1)}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Safety: </span>
                    <span className="text-green-400">{formatNumber(driver.safety_score, 1)}/5</span>
                    <span className="text-gray-400"> | Fuel: </span>
                    <span className="text-orange-400">{formatNumber(driver.fuel_efficiency, 1)} km/L</span>
                    <span className="text-gray-400"> | Violations: </span>
                    <span className={driver.violations === 0 ? 'text-green-400' : 'text-red-400'}>
                      {driver.violations}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Compliance Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Hours Violations:</span>
                <span className="text-red-400">{driverManagement.compliance_status.hours_violations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Speed Violations:</span>
                <span className="text-yellow-400">{driverManagement.compliance_status.speed_violations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Break Compliance:</span>
                <span className="text-green-400">{formatNumber(driverManagement.compliance_status.break_compliance, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">License Renewals Due:</span>
                <span className="text-orange-400">{driverManagement.compliance_status.license_renewals_due}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fuel Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⛽ FUEL MANAGEMENT & ECO METRICS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Fuel Consumption</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Today's Consumption:</span>
                <span className="text-blue-400">{formatLargeNumber(fuelManagement.total_fuel_consumption)} L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fuel Cost:</span>
                <span className="text-red-400">{formatCurrency(fuelManagement.fuel_cost_today)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Efficiency:</span>
                <span className="text-green-400">{formatNumber(fuelManagement.average_fuel_efficiency, 1)} km/L</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Fuel Stations</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {fuelManagement.fuel_stations.map((station, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{station.location}</span>
                    <span className="text-xs text-gray-400">{station.fuel_type}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Level: </span>
                    <span className="text-blue-400">{formatLargeNumber(station.current_level)}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-purple-400">{formatLargeNumber(station.capacity)} L</span>
                    <span className="text-gray-400"> | Pumps: </span>
                    <span className="text-green-400">{station.pumps_operational}/{station.pumps_total}</span>
                    <span className="text-gray-400"> | Price: </span>
                    <span className="text-orange-400">${formatNumber(station.price_per_liter, 3)}/L</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Eco Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon Footprint:</span>
                <span className="text-red-400">{formatNumber(fuelManagement.eco_metrics.carbon_footprint, 1)} tons CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Electric Vehicles:</span>
                <span className="text-green-400">{fuelManagement.eco_metrics.electric_vehicles}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hybrid Vehicles:</span>
                <span className="text-blue-400">{fuelManagement.eco_metrics.hybrid_vehicles}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Efficiency Trend:</span>
                <span className={`${getStatusColor(fuelManagement.eco_metrics.fuel_efficiency_trend).split(' ')[0]}`}>
                  {fuelManagement.eco_metrics.fuel_efficiency_trend}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetOperationsCenter;