// AviationOperationsCenter.js - Aviation Operations Center & Airport Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AviationOperationsCenter = () => {
  const [airportStatus, setAirportStatus] = useState({
    operationalStatus: 'AOCC_INTEGRATED_ACTIVE',
    totalRunways: 4,
    runwaysOperational: 4,
    totalGates: 78,
    gatesAvailable: 23,
    flightsToday: 547,
    passengersThroughput: 89456,
    weatherCondition: 'VMC', // Visual Meteorological Conditions
    visibilityKm: 8.5,
    windSpeedKnots: 12,
    lastUpdate: Date.now()
  });

  const [flightOperations, setFlightOperations] = useState({
    air_traffic_control: {
      arrivals_scheduled_today: 274,
      arrivals_completed: 198,
      arrivals_delayed: 23,
      arrivals_cancelled: 2,
      departures_scheduled_today: 273,
      departures_completed: 201,
      departures_delayed: 18,
      departures_cancelled: 1,
      flights_in_terminal_airspace: 12,
      flights_on_approach: 3,
      flights_holding: 1,
      ground_stop_active: false,
      average_delay_minutes: 14.7,
      on_time_performance: 82.4 // percentage
    },
    runway_operations: {
      runway_configurations: {
        runway_09L_27R: 'ACTIVE_ARRIVALS',
        runway_09R_27L: 'ACTIVE_DEPARTURES', 
        runway_04_22: 'CLOSED_MAINTENANCE',
        runway_15_33: 'STANDBY'
      },
      runway_capacity_hourly: 45,
      current_runway_utilization: 67.8, // percentage
      ground_movements_active: 34,
      taxi_time_average_minutes: 8.3,
      runway_occupancy_time_seconds: 47.2,
      wake_turbulence_separations: 12,
      noise_abatement_procedures: 'ACTIVE'
    },
    terminal_operations: {
      terminal_a: {
        gates_total: 24,
        gates_occupied: 18,
        gates_available: 6,
        passengers_current: 2847,
        passenger_flow_rate_hourly: 1456,
        security_wait_time_minutes: 12.4,
        customs_processing_time_minutes: 8.7
      },
      terminal_b: {
        gates_total: 32,
        gates_occupied: 21,
        gates_available: 11,
        passengers_current: 3967,
        passenger_flow_rate_hourly: 2134,
        security_wait_time_minutes: 18.6,
        customs_processing_time_minutes: 11.2
      },
      terminal_c: {
        gates_total: 22,
        gates_occupied: 16,
        gates_available: 6,
        passengers_current: 2145,
        passenger_flow_rate_hourly: 987,
        security_wait_time_minutes: 9.3,
        customs_processing_time_minutes: 7.8
      }
    }
  });

  const [groundOperations, setGroundOperations] = useState({
    ground_handling: {
      ground_service_equipment: {
        baggage_loaders: 34,
        baggage_loaders_available: 28,
        pushback_tugs: 18,
        pushback_tugs_available: 14,
        fuel_trucks: 12,
        fuel_trucks_available: 9,
        catering_trucks: 8,
        catering_trucks_available: 6,
        passenger_boarding_bridges: 45,
        boarding_bridges_operational: 42
      },
      baggage_operations: {
        bags_processed_today: 67890,
        bags_loaded_current_hour: 2847,
        mishandled_bags_today: 23,
        baggage_claim_wait_time_minutes: 14.7,
        baggage_system_efficiency: 97.8, // percentage
        sorting_system_status: 'OPERATIONAL',
        conveyor_belt_downtime: 0
      },
      aircraft_servicing: {
        turnaround_time_average_minutes: 42.3,
        fuel_service_time_minutes: 18.6,
        cleaning_service_time_minutes: 23.4,
        catering_service_time_minutes: 15.7,
        maintenance_checks_completed: 12,
        ground_power_units_available: 23,
        air_conditioning_units_available: 18
      }
    },
    cargo_operations: {
      cargo_tonnage_today: 1247.6,
      cargo_flights_today: 45,
      cargo_loading_efficiency: 89.4, // percentage
      cargo_storage_utilization: 76.8,
      dangerous_goods_shipments: 8,
      perishable_cargo_temperature_controlled: 12,
      cargo_security_screening_rate: 100.0,
      cargo_handling_equipment_available: 18
    },
    ground_transportation: {
      parking_spaces_total: 12456,
      parking_spaces_occupied: 8934,
      parking_occupancy_rate: 71.7, // percentage
      rental_car_availability: 'ADEQUATE',
      taxi_queue_length: 23,
      public_transit_connections: 4,
      shuttle_services_active: 8,
      ride_share_pickup_zones: 6
    }
  });

  const [safetySecurityOperations, setSafetySecurityOperations] = useState({
    safety_management: {
      safety_incidents_today: 0,
      wildlife_strikes_today: 0,
      runway_incursions_today: 0,
      aircraft_emergency_declared: 0,
      fire_rescue_response_time_seconds: 180, // target <180s
      fire_rescue_vehicles_ready: 6,
      medical_emergency_response_time_minutes: 4.2,
      weather_monitoring_stations: 8,
      wind_shear_detection_system: 'ACTIVE'
    },
    security_operations: {
      security_checkpoint_throughput: 4567, // passengers today
      prohibited_items_detected: 34,
      security_breaches_today: 0,
      perimeter_security_status: 'SECURED',
      cctv_cameras_operational: 1247,
      cctv_cameras_total: 1289,
      access_control_points: 89,
      access_violations: 2,
      k9_units_deployed: 4,
      security_alert_level: 'NORMAL'
    },
    emergency_preparedness: {
      emergency_response_teams_available: 3,
      fire_station_response_ready: true,
      medical_facilities_status: 'OPERATIONAL',
      evacuation_procedures_current: true,
      crisis_communication_system: 'ACTIVE',
      mass_casualty_plan_status: 'READY',
      hazmat_response_capability: 'AVAILABLE',
      disaster_recovery_plan_current: true
    }
  });

  const [resourceManagement, setResourceManagement] = useState({
    staffing_operations: {
      air_traffic_controllers: 24,
      atc_minimum_required: 18,
      ground_controllers: 12,
      approach_controllers: 8,
      tower_controllers: 4,
      ground_handling_staff: 234,
      security_personnel: 89,
      customs_officers: 34,
      maintenance_technicians: 67,
      shift_coverage: 94.7 // percentage
    },
    facility_management: {
      terminal_hvac_systems: 'OPERATIONAL',
      lighting_systems: 'OPERATIONAL',
      electrical_power_status: 'NORMAL',
      backup_power_systems: 'TESTED_OK',
      water_systems: 'NORMAL',
      waste_management: 'OPERATIONAL',
      cleaning_services: 'ACTIVE',
      facility_maintenance_requests: 12,
      environmental_compliance: 'CURRENT'
    },
    technology_systems: {
      radar_systems_primary: 'OPERATIONAL',
      radar_systems_secondary: 'OPERATIONAL',
      communication_systems: 'NORMAL',
      navigation_aids: 'OPERATIONAL',
      weather_detection_systems: 'ACTIVE',
      flight_information_displays: 'UPDATED',
      baggage_handling_system: 'OPERATIONAL',
      airport_operational_database: 'SYNCHRONIZED',
      network_connectivity: 'STABLE'
    }
  });

  const [airlineOperations, setAirlineOperations] = useState({
    hub_operations: {
      connecting_passengers_today: 12456,
      minimum_connection_time_minutes: 45,
      average_connection_time_minutes: 78.3,
      missed_connections_today: 23,
      connection_rate_success: 96.8, // percentage
      hub_carrier_flights: 234,
      partner_airline_flights: 89,
      codeshare_flights: 34,
      alliance_coordination: 'ACTIVE'
    },
    passenger_services: {
      check_in_counters_open: 45,
      self_service_kiosks_available: 89,
      mobile_check_in_rate: 67.8, // percentage
      special_assistance_requests: 34,
      unaccompanied_minors: 12,
      wheelchair_assistance_requests: 23,
      vip_lounge_occupancy: 78.4, // percentage
      customer_service_response_time_minutes: 3.7
    },
    crew_operations: {
      flight_crews_on_duty: 156,
      cabin_crews_on_duty: 234,
      crew_rest_facilities_occupied: 23,
      crew_scheduling_conflicts: 2,
      pilot_duty_time_compliance: 98.7, // percentage
      flight_attendant_ratio_compliance: 100.0,
      crew_training_sessions_today: 8,
      crew_medical_clearances_current: 97.3
    }
  });

  const [aviationHistory, setAviationHistory] = useState([]);

  const generateAviationHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of aviation data
      const hour = i;
      let flightLoadMultiplier = 0.3; // Base flight activity
      
      // Airport flight patterns
      if (hour >= 5 && hour <= 9) flightLoadMultiplier = 1.0; // Morning departure rush
      if (hour >= 10 && hour <= 15) flightLoadMultiplier = 0.8; // Midday activity
      if (hour >= 16 && hour <= 20) flightLoadMultiplier = 1.2; // Evening arrival/departure peak
      if (hour >= 21 || hour <= 4) flightLoadMultiplier = 0.2; // Night/early morning
      if ([7, 8, 17, 18].includes(hour)) flightLoadMultiplier = 1.4; // Peak flight times
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        flight_operations: Math.floor((15 + flightLoadMultiplier * 30) + Math.random() * 8),
        passenger_throughput: Math.floor((1000 + flightLoadMultiplier * 3000) + Math.random() * 500),
        baggage_processed: Math.floor((500 + flightLoadMultiplier * 2000) + Math.random() * 300),
        runway_utilization: Math.max(20, Math.min(90, 45 + flightLoadMultiplier * 25 + Math.random() * 15)),
        on_time_performance: Math.max(70, Math.min(95, 85 - flightLoadMultiplier * 8 + Math.random() * 10)),
        gate_utilization: Math.max(40, Math.min(85, 55 + flightLoadMultiplier * 20 + Math.random() * 10)),
        security_wait_time: Math.max(5, Math.min(30, 15 + flightLoadMultiplier * 8 + Math.random() * 5)),
        taxi_time_minutes: Math.max(3, Math.min(15, 6 + flightLoadMultiplier * 4 + Math.random() * 3)),
        cargo_tonnage: Math.max(20, Math.min(100, 50 + flightLoadMultiplier * 30 + Math.random() * 15)),
        delay_minutes: Math.max(0, Math.min(45, 8 + flightLoadMultiplier * 15 + Math.random() * 8)),
        ground_movements: Math.floor(flightLoadMultiplier * 25 + Math.random() * 12),
        emergency_responses: Math.floor(flightLoadMultiplier * 0.8 + Math.random() * 1.5)
      });
    }
    return data;
  };

  useEffect(() => {
    setAviationHistory(generateAviationHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update airport status
      setAirportStatus(prev => ({
        ...prev,
        gatesAvailable: Math.max(15, Math.min(35, prev.gatesAvailable + Math.floor((Math.random() - 0.5) * 6))),
        flightsToday: prev.flightsToday + Math.floor(Math.random() * 3),
        passengersThroughput: prev.passengersThroughput + Math.floor(Math.random() * 500) + 200,
        visibilityKm: Math.max(0.5, Math.min(15.0, prev.visibilityKm + (Math.random() - 0.5) * 2.0)),
        windSpeedKnots: Math.max(0, Math.min(35, prev.windSpeedKnots + Math.floor((Math.random() - 0.5) * 5))),
        lastUpdate: Date.now()
      }));

      // Update flight operations
      setFlightOperations(prev => ({
        ...prev,
        air_traffic_control: {
          ...prev.air_traffic_control,
          arrivals_completed: Math.min(prev.air_traffic_control.arrivals_scheduled_today, prev.air_traffic_control.arrivals_completed + Math.floor(Math.random() * 3)),
          departures_completed: Math.min(prev.air_traffic_control.departures_scheduled_today, prev.air_traffic_control.departures_completed + Math.floor(Math.random() * 3)),
          flights_in_terminal_airspace: Math.max(5, Math.min(20, prev.air_traffic_control.flights_in_terminal_airspace + Math.floor((Math.random() - 0.5) * 4))),
          flights_holding: Math.max(0, Math.min(5, prev.air_traffic_control.flights_holding + Math.floor((Math.random() - 0.7) * 2)))
        },
        runway_operations: {
          ...prev.runway_operations,
          current_runway_utilization: Math.max(40.0, Math.min(95.0, prev.runway_operations.current_runway_utilization + (Math.random() - 0.5) * 8.0)),
          ground_movements_active: Math.max(15, Math.min(50, prev.runway_operations.ground_movements_active + Math.floor((Math.random() - 0.5) * 6)))
        }
      }));

      // Update ground operations
      setGroundOperations(prev => ({
        ...prev,
        ground_handling: {
          ...prev.ground_handling,
          baggage_operations: {
            ...prev.ground_handling.baggage_operations,
            bags_processed_today: prev.ground_handling.baggage_operations.bags_processed_today + Math.floor(Math.random() * 300) + 150,
            bags_loaded_current_hour: Math.floor(1500 + Math.random() * 2000),
            mishandled_bags_today: Math.max(prev.ground_handling.baggage_operations.mishandled_bags_today, prev.ground_handling.baggage_operations.mishandled_bags_today + Math.floor(Math.random() * 0.3))
          },
          aircraft_servicing: {
            ...prev.ground_handling.aircraft_servicing,
            turnaround_time_average_minutes: Math.max(25.0, Math.min(65.0, prev.ground_handling.aircraft_servicing.turnaround_time_average_minutes + (Math.random() - 0.5) * 5.0))
          }
        }
      }));

      // Update safety and security
      setSafetySecurityOperations(prev => ({
        ...prev,
        security_operations: {
          ...prev.security_operations,
          security_checkpoint_throughput: prev.security_operations.security_checkpoint_throughput + Math.floor(Math.random() * 200) + 100,
          prohibited_items_detected: prev.security_operations.prohibited_items_detected + Math.floor(Math.random() * 0.5)
        }
      }));

    }, 40000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'AOCC_INTEGRATED_ACTIVE':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'NORMAL':
      case 'VMC':
      case 'SECURED':
      case 'READY':
      case 'AVAILABLE':
      case 'TESTED_OK':
      case 'CURRENT':
      case 'STABLE':
      case 'SYNCHRONIZED':
      case 'UPDATED':
      case 'ADEQUATE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY':
      case 'MARGINAL': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CLOSED_MAINTENANCE':
      case 'DEGRADED':
      case 'ALERT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
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

  const formatPercentage = (num) => {
    return `${formatNumber(num)}%`;
  };

  // Calculate derived values
  const totalGatesOccupied = flightOperations.terminal_operations.terminal_a.gates_occupied + 
                            flightOperations.terminal_operations.terminal_b.gates_occupied + 
                            flightOperations.terminal_operations.terminal_c.gates_occupied;
  const gateOccupancyRate = (totalGatesOccupied / airportStatus.totalGates) * 100;
  const totalPassengers = flightOperations.terminal_operations.terminal_a.passengers_current +
                          flightOperations.terminal_operations.terminal_b.passengers_current +
                          flightOperations.terminal_operations.terminal_c.passengers_current;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ✈️ AVIATION OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(airportStatus.operationalStatus)}`}>
            {airportStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {airportStatus.runwaysOperational}/{airportStatus.totalRunways} Runways
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatLargeNumber(airportStatus.flightsToday)} Flights Today
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatLargeNumber(airportStatus.passengersThroughput)} PAX
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(airportStatus.weatherCondition)}`}>
            {airportStatus.weatherCondition} {formatNumber(airportStatus.visibilityKm)}km
          </div>
          <div className="text-sm text-gray-400 font-mono">
            AOCC Integrated Flight & Terminal Operations
          </div>
        </div>
      </div>

      {/* Airport Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ON-TIME PERFORMANCE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatPercentage(flightOperations.air_traffic_control.on_time_performance)}
              </div>
              <div className="text-xs text-blue-300">
                Flight operations
              </div>
            </div>
            <div className="text-3xl opacity-60">✈️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">GATE OCCUPANCY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatPercentage(gateOccupancyRate)}
              </div>
              <div className="text-xs text-green-300">
                {totalGatesOccupied}/{airportStatus.totalGates} gates
              </div>
            </div>
            <div className="text-3xl opacity-60">🚪</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">RUNWAY UTILIZATION</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatPercentage(flightOperations.runway_operations.current_runway_utilization)}
              </div>
              <div className="text-xs text-purple-300">
                {flightOperations.runway_operations.runway_capacity_hourly}/hr capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">🛬</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TERMINAL PASSENGERS</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatLargeNumber(totalPassengers)}
              </div>
              <div className="text-xs text-orange-300">
                Current passenger load
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>
      </div>

      {/* Aviation Operations Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 AVIATION OPERATIONS & PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={aviationHistory}>
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
              dataKey="flight_operations"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Flight Operations"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="passenger_throughput" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Passenger Throughput"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="runway_utilization" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Runway Utilization %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="on_time_performance" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="On-Time Performance %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="gate_utilization" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Gate Utilization %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="security_wait_time" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Security Wait (min)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="cargo_tonnage" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="Cargo Tonnage"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Flight Operations & Ground Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Flight Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛫 FLIGHT OPERATIONS & AIR TRAFFIC CONTROL
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Air Traffic Control</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Arrivals Today:</span>
                  <span className="text-blue-400">{flightOperations.air_traffic_control.arrivals_completed}/{flightOperations.air_traffic_control.arrivals_scheduled_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Departures Today:</span>
                  <span className="text-green-400">{flightOperations.air_traffic_control.departures_completed}/{flightOperations.air_traffic_control.departures_scheduled_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">In Terminal Airspace:</span>
                  <span className="text-purple-400">{flightOperations.air_traffic_control.flights_in_terminal_airspace}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">On Approach:</span>
                  <span className="text-orange-400">{flightOperations.air_traffic_control.flights_on_approach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Holding:</span>
                  <span className="text-red-400">{flightOperations.air_traffic_control.flights_holding}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Delay:</span>
                  <span className="text-yellow-400">{formatNumber(flightOperations.air_traffic_control.average_delay_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">On-Time Performance:</span>
                  <span className="text-cyan-400">{formatPercentage(flightOperations.air_traffic_control.on_time_performance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ground Stop:</span>
                  <span className={`${flightOperations.air_traffic_control.ground_stop_active ? 'text-red-400' : 'text-green-400'}`}>
                    {flightOperations.air_traffic_control.ground_stop_active ? 'ACTIVE' : 'CLEAR'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Runway Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">09L/27R:</span>
                  <span className={`${getStatusColor(flightOperations.runway_operations.runway_configurations.runway_09L_27R)?.split(' ')[0] || 'text-green-400'}`}>
                    {flightOperations.runway_operations.runway_configurations.runway_09L_27R.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">09R/27L:</span>
                  <span className={`${getStatusColor(flightOperations.runway_operations.runway_configurations.runway_09R_27L)?.split(' ')[0] || 'text-green-400'}`}>
                    {flightOperations.runway_operations.runway_configurations.runway_09R_27L.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">04/22:</span>
                  <span className={`${getStatusColor(flightOperations.runway_operations.runway_configurations.runway_04_22)?.split(' ')[0] || 'text-red-400'}`}>
                    {flightOperations.runway_operations.runway_configurations.runway_04_22.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">15/33:</span>
                  <span className={`${getStatusColor(flightOperations.runway_operations.runway_configurations.runway_15_33)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {flightOperations.runway_operations.runway_configurations.runway_15_33}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hourly Capacity:</span>
                  <span className="text-blue-400">{flightOperations.runway_operations.runway_capacity_hourly} ops/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Utilization:</span>
                  <span className="text-green-400">{formatPercentage(flightOperations.runway_operations.current_runway_utilization)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ground Movements:</span>
                  <span className="text-purple-400">{flightOperations.runway_operations.ground_movements_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Taxi Time:</span>
                  <span className="text-orange-400">{formatNumber(flightOperations.runway_operations.taxi_time_average_minutes)} min</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Terminal Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Terminal A: </span>
                  <span className="text-blue-400">{flightOperations.terminal_operations.terminal_a.gates_occupied}/{flightOperations.terminal_operations.terminal_a.gates_total}</span>
                  <span className="text-gray-400"> | Security: </span>
                  <span className="text-green-400">{formatNumber(flightOperations.terminal_operations.terminal_a.security_wait_time_minutes)}m</span>
                  <span className="text-gray-400"> | PAX: </span>
                  <span className="text-purple-400">{formatLargeNumber(flightOperations.terminal_operations.terminal_a.passengers_current)}</span>
                </div>
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Terminal B: </span>
                  <span className="text-blue-400">{flightOperations.terminal_operations.terminal_b.gates_occupied}/{flightOperations.terminal_operations.terminal_b.gates_total}</span>
                  <span className="text-gray-400"> | Security: </span>
                  <span className="text-orange-400">{formatNumber(flightOperations.terminal_operations.terminal_b.security_wait_time_minutes)}m</span>
                  <span className="text-gray-400"> | PAX: </span>
                  <span className="text-purple-400">{formatLargeNumber(flightOperations.terminal_operations.terminal_b.passengers_current)}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400">Terminal C: </span>
                  <span className="text-blue-400">{flightOperations.terminal_operations.terminal_c.gates_occupied}/{flightOperations.terminal_operations.terminal_c.gates_total}</span>
                  <span className="text-gray-400"> | Security: </span>
                  <span className="text-green-400">{formatNumber(flightOperations.terminal_operations.terminal_c.security_wait_time_minutes)}m</span>
                  <span className="text-gray-400"> | PAX: </span>
                  <span className="text-purple-400">{formatLargeNumber(flightOperations.terminal_operations.terminal_c.passengers_current)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ground Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚛 GROUND OPERATIONS & BAGGAGE HANDLING
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Ground Service Equipment</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Baggage Loaders:</span>
                  <span className="text-blue-400">{groundOperations.ground_handling.ground_service_equipment.baggage_loaders_available}/{groundOperations.ground_handling.ground_service_equipment.baggage_loaders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pushback Tugs:</span>
                  <span className="text-green-400">{groundOperations.ground_handling.ground_service_equipment.pushback_tugs_available}/{groundOperations.ground_handling.ground_service_equipment.pushback_tugs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fuel Trucks:</span>
                  <span className="text-purple-400">{groundOperations.ground_handling.ground_service_equipment.fuel_trucks_available}/{groundOperations.ground_handling.ground_service_equipment.fuel_trucks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Catering Trucks:</span>
                  <span className="text-orange-400">{groundOperations.ground_handling.ground_service_equipment.catering_trucks_available}/{groundOperations.ground_handling.ground_service_equipment.catering_trucks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Jet Bridges:</span>
                  <span className="text-cyan-400">{groundOperations.ground_handling.ground_service_equipment.boarding_bridges_operational}/{groundOperations.ground_handling.ground_service_equipment.passenger_boarding_bridges}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Baggage Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Bags Processed:</span>
                  <span className="text-blue-400">{formatLargeNumber(groundOperations.ground_handling.baggage_operations.bags_processed_today)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Hour Rate:</span>
                  <span className="text-green-400">{formatLargeNumber(groundOperations.ground_handling.baggage_operations.bags_loaded_current_hour)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mishandled Bags:</span>
                  <span className="text-red-400">{groundOperations.ground_handling.baggage_operations.mishandled_bags_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Claim Wait Time:</span>
                  <span className="text-orange-400">{formatNumber(groundOperations.ground_handling.baggage_operations.baggage_claim_wait_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">System Efficiency:</span>
                  <span className="text-purple-400">{formatPercentage(groundOperations.ground_handling.baggage_operations.baggage_system_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sorting System:</span>
                  <span className={`${getStatusColor(groundOperations.ground_handling.baggage_operations.sorting_system_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {groundOperations.ground_handling.baggage_operations.sorting_system_status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Aircraft Servicing</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Turnaround:</span>
                  <span className="text-blue-400">{formatNumber(groundOperations.ground_handling.aircraft_servicing.turnaround_time_average_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fuel Service:</span>
                  <span className="text-green-400">{formatNumber(groundOperations.ground_handling.aircraft_servicing.fuel_service_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cleaning Service:</span>
                  <span className="text-purple-400">{formatNumber(groundOperations.ground_handling.aircraft_servicing.cleaning_service_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Catering Service:</span>
                  <span className="text-orange-400">{formatNumber(groundOperations.ground_handling.aircraft_servicing.catering_service_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Maint Checks:</span>
                  <span className="text-cyan-400">{groundOperations.ground_handling.aircraft_servicing.maintenance_checks_completed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ground Power:</span>
                  <span className="text-yellow-400">{groundOperations.ground_handling.aircraft_servicing.ground_power_units_available}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Cargo Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Cargo Today:</span>
                  <span className="text-blue-400">{formatNumber(groundOperations.cargo_operations.cargo_tonnage_today)} tons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cargo Flights:</span>
                  <span className="text-green-400">{groundOperations.cargo_operations.cargo_flights_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Loading Efficiency:</span>
                  <span className="text-purple-400">{formatPercentage(groundOperations.cargo_operations.cargo_loading_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage Utilization:</span>
                  <span className="text-orange-400">{formatPercentage(groundOperations.cargo_operations.cargo_storage_utilization)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">DG Shipments:</span>
                  <span className="text-red-400">{groundOperations.cargo_operations.dangerous_goods_shipments}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Screening:</span>
                  <span className="text-cyan-400">{formatPercentage(groundOperations.cargo_operations.cargo_security_screening_rate)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Security & Resource Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety & Security Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SAFETY & SECURITY OPERATIONS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Safety Management</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Safety Incidents:</span>
                  <span className="text-green-400">{safetySecurityOperations.safety_management.safety_incidents_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wildlife Strikes:</span>
                  <span className="text-green-400">{safetySecurityOperations.safety_management.wildlife_strikes_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Runway Incursions:</span>
                  <span className="text-green-400">{safetySecurityOperations.safety_management.runway_incursions_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Aircraft Emergency:</span>
                  <span className="text-green-400">{safetySecurityOperations.safety_management.aircraft_emergency_declared}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fire Rescue Response:</span>
                  <span className="text-blue-400">{safetySecurityOperations.safety_management.fire_rescue_response_time_seconds}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fire Vehicles Ready:</span>
                  <span className="text-purple-400">{safetySecurityOperations.safety_management.fire_rescue_vehicles_ready}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wind Shear Detection:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.safety_management.wind_shear_detection_system)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.safety_management.wind_shear_detection_system}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Security Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Checkpoint Throughput:</span>
                  <span className="text-blue-400">{formatLargeNumber(safetySecurityOperations.security_operations.security_checkpoint_throughput)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prohibited Items:</span>
                  <span className="text-orange-400">{safetySecurityOperations.security_operations.prohibited_items_detected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Breaches:</span>
                  <span className="text-green-400">{safetySecurityOperations.security_operations.security_breaches_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Perimeter Status:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.security_operations.perimeter_security_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.security_operations.perimeter_security_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CCTV Cameras:</span>
                  <span className="text-purple-400">{safetySecurityOperations.security_operations.cctv_cameras_operational}/{safetySecurityOperations.security_operations.cctv_cameras_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Access Violations:</span>
                  <span className="text-red-400">{safetySecurityOperations.security_operations.access_violations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">K9 Units:</span>
                  <span className="text-cyan-400">{safetySecurityOperations.security_operations.k9_units_deployed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Alert Level:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.security_operations.security_alert_level)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.security_operations.security_alert_level}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Emergency Preparedness</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Teams:</span>
                  <span className="text-blue-400">{safetySecurityOperations.emergency_preparedness.emergency_response_teams_available}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fire Station:</span>
                  <span className={`${safetySecurityOperations.emergency_preparedness.fire_station_response_ready ? 'text-green-400' : 'text-red-400'}`}>
                    {safetySecurityOperations.emergency_preparedness.fire_station_response_ready ? 'READY' : 'NOT READY'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Medical Facilities:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.emergency_preparedness.medical_facilities_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.emergency_preparedness.medical_facilities_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Crisis Communication:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.emergency_preparedness.crisis_communication_system)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.emergency_preparedness.crisis_communication_system}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mass Casualty Plan:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.emergency_preparedness.mass_casualty_plan_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.emergency_preparedness.mass_casualty_plan_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hazmat Response:</span>
                  <span className={`${getStatusColor(safetySecurityOperations.emergency_preparedness.hazmat_response_capability)?.split(' ')[0] || 'text-green-400'}`}>
                    {safetySecurityOperations.emergency_preparedness.hazmat_response_capability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 RESOURCE MANAGEMENT & TECHNOLOGY SYSTEMS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Staffing Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">ATC Controllers:</span>
                  <span className="text-blue-400">{resourceManagement.staffing_operations.air_traffic_controllers}/{resourceManagement.staffing_operations.atc_minimum_required} req</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ground Controllers:</span>
                  <span className="text-green-400">{resourceManagement.staffing_operations.ground_controllers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Approach Controllers:</span>
                  <span className="text-purple-400">{resourceManagement.staffing_operations.approach_controllers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tower Controllers:</span>
                  <span className="text-orange-400">{resourceManagement.staffing_operations.tower_controllers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ground Handling:</span>
                  <span className="text-cyan-400">{resourceManagement.staffing_operations.ground_handling_staff}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Personnel:</span>
                  <span className="text-yellow-400">{resourceManagement.staffing_operations.security_personnel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shift Coverage:</span>
                  <span className="text-pink-400">{formatPercentage(resourceManagement.staffing_operations.shift_coverage)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Technology Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Primary Radar:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.radar_systems_primary)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.radar_systems_primary}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Secondary Radar:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.radar_systems_secondary)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.radar_systems_secondary}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Communications:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.communication_systems)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.communication_systems}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Navigation Aids:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.navigation_aids)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.navigation_aids}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weather Detection:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.weather_detection_systems)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.weather_detection_systems}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Flight Information:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.flight_information_displays)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.flight_information_displays}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Baggage System:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.baggage_handling_system)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.baggage_handling_system}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network:</span>
                  <span className={`${getStatusColor(resourceManagement.technology_systems.network_connectivity)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.technology_systems.network_connectivity}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Airline Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Connecting PAX:</span>
                  <span className="text-blue-400">{formatLargeNumber(airlineOperations.hub_operations.connecting_passengers_today)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Connect Time:</span>
                  <span className="text-green-400">{airlineOperations.hub_operations.minimum_connection_time_minutes} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Connect Time:</span>
                  <span className="text-purple-400">{formatNumber(airlineOperations.hub_operations.average_connection_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Missed Connections:</span>
                  <span className="text-red-400">{airlineOperations.hub_operations.missed_connections_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Connection Rate:</span>
                  <span className="text-orange-400">{formatPercentage(airlineOperations.hub_operations.connection_rate_success)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hub Carrier:</span>
                  <span className="text-cyan-400">{airlineOperations.hub_operations.hub_carrier_flights} flights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Partner Airlines:</span>
                  <span className="text-yellow-400">{airlineOperations.hub_operations.partner_airline_flights} flights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Special Assistance:</span>
                  <span className="text-pink-400">{airlineOperations.passenger_services.special_assistance_requests}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationOperationsCenter;