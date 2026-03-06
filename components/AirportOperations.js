// AirportOperations.js - Airport Operations Center & Aviation Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AirportOperations = () => {
  const [airportStatus, setAirportStatus] = useState({
    operationalStatus: 'NORMAL',
    activeRunways: 3,
    totalRunways: 4,
    flightOperations: 1247, // daily count
    currentTraffic: 28,
    weatherCondition: 'VFR',
    visibility: 10, // statute miles
    windSpeed: 8, // knots
    windDirection: 270, // degrees
    temperature: 22, // celsius
    avgTaxiTime: 12, // minutes
    lastUpdate: Date.now()
  });

  const [runwayStatus, setRunwayStatus] = useState([
    {
      id: 'RWY_09L_27R',
      name: 'Runway 09L/27R',
      length: 3200, // meters
      width: 45,
      surface: 'CONCRETE',
      status: 'OPERATIONAL',
      active_direction: '09L',
      operations_today: 342,
      last_operation: Date.now() - 3 * 60 * 1000,
      aircraft_on_approach: 1,
      next_departure: 'UAL456 - ETA 2 min',
      ils_status: 'OPERATIONAL',
      lighting: 'HIGH_INTENSITY',
      condition: 'DRY',
      friction_coefficient: 0.85,
      noise_restrictions: 'NONE',
      maintenance_window: 'NONE_SCHEDULED'
    },
    {
      id: 'RWY_09R_27L',
      name: 'Runway 09R/27L',
      length: 2800,
      width: 45,
      surface: 'CONCRETE',
      status: 'OPERATIONAL',
      active_direction: '27L',
      operations_today: 298,
      last_operation: Date.now() - 1 * 60 * 1000,
      aircraft_on_approach: 0,
      next_departure: 'DLH234 - ETA 4 min',
      ils_status: 'OPERATIONAL',
      lighting: 'MEDIUM_INTENSITY',
      condition: 'DRY',
      friction_coefficient: 0.82,
      noise_restrictions: 'NIGHT_RESTRICTIONS',
      maintenance_window: 'NONE_SCHEDULED'
    },
    {
      id: 'RWY_15_33',
      name: 'Runway 15/33',
      length: 2100,
      width: 30,
      surface: 'ASPHALT',
      status: 'OPERATIONAL',
      active_direction: '15',
      operations_today: 89,
      last_operation: Date.now() - 15 * 60 * 1000,
      aircraft_on_approach: 0,
      next_departure: 'NONE_SCHEDULED',
      ils_status: 'LOCALIZER_ONLY',
      lighting: 'MEDIUM_INTENSITY',
      condition: 'DRY',
      friction_coefficient: 0.78,
      noise_restrictions: 'TRAINING_ONLY',
      maintenance_window: 'NONE_SCHEDULED'
    },
    {
      id: 'RWY_04_22',
      name: 'Runway 04/22',
      length: 1800,
      width: 30,
      surface: 'ASPHALT',
      status: 'MAINTENANCE',
      active_direction: 'CLOSED',
      operations_today: 0,
      last_operation: Date.now() - 24 * 60 * 60 * 1000,
      aircraft_on_approach: 0,
      next_departure: 'CLOSED_FOR_RESURFACING',
      ils_status: 'NOT_AVAILABLE',
      lighting: 'OUT_OF_SERVICE',
      condition: 'UNDER_CONSTRUCTION',
      friction_coefficient: 0.0,
      noise_restrictions: 'N/A',
      maintenance_window: 'RESURFACING_UNTIL_2026-03-15'
    }
  ]);

  const [activeFlights, setActiveFlights] = useState([
    {
      id: 'UAL456',
      callsign: 'United 456',
      flight_number: 'UA456',
      aircraft_type: 'B737-800',
      status: 'APPROACH',
      altitude: 2500, // feet
      speed: 180, // knots
      distance_to_airport: 8, // nautical miles
      runway_assignment: '09L',
      gate_assignment: 'A12',
      origin: 'LAX',
      destination: 'JFK',
      eta: Date.now() + 8 * 60 * 1000,
      passengers: 156,
      fuel_remaining: 2400, // kg
      pilot: 'Capt. Johnson, S.',
      priority: 'NORMAL',
      special_requirements: 'NONE'
    },
    {
      id: 'DLH234',
      callsign: 'Lufthansa 234',
      flight_number: 'LH234',
      aircraft_type: 'A330-300',
      status: 'TAXI_FOR_DEPARTURE',
      altitude: 0,
      speed: 15,
      gate_assignment: 'B8',
      runway_assignment: '27L',
      origin: 'JFK',
      destination: 'FRA',
      etd: Date.now() + 4 * 60 * 1000,
      passengers: 298,
      fuel_remaining: 48000,
      pilot: 'Capt. Mueller, H.',
      priority: 'NORMAL',
      special_requirements: 'DIPLOMATIC_PASSENGER'
    },
    {
      id: 'AAL789',
      callsign: 'American 789',
      flight_number: 'AA789',
      aircraft_type: 'B777-200',
      status: 'GROUND_STOP',
      altitude: 0,
      speed: 0,
      gate_assignment: 'C15',
      runway_assignment: 'HOLDING',
      origin: 'JFK',
      destination: 'MIA',
      delay_reason: 'WEATHER_AT_DESTINATION',
      delay_duration: 45, // minutes
      passengers: 312,
      fuel_remaining: 18000,
      pilot: 'Capt. Rodriguez, M.',
      priority: 'NORMAL',
      special_requirements: 'UNACCOMPANIED_MINORS'
    },
    {
      id: 'SWA123',
      callsign: 'Southwest 123',
      flight_number: 'WN123',
      aircraft_type: 'B737-700',
      status: 'BOARDING',
      gate_assignment: 'A5',
      origin: 'JFK',
      destination: 'BWI',
      scheduled_departure: Date.now() + 25 * 60 * 1000,
      passengers: 138,
      pilot: 'Capt. Smith, J.',
      priority: 'NORMAL',
      special_requirements: 'WHEELCHAIR_ASSISTANCE'
    },
    {
      id: 'MED911',
      callsign: 'Medevac 911',
      flight_number: 'MED911',
      aircraft_type: 'EC135',
      status: 'EMERGENCY_LANDING',
      altitude: 800,
      speed: 120,
      distance_to_airport: 3,
      runway_assignment: '09L',
      priority: 'EMERGENCY',
      nature_of_emergency: 'MEDICAL_TRANSPORT',
      patient_condition: 'CRITICAL',
      hospital_destination: 'METRO_GENERAL',
      escort_vehicles: 'AMBULANCE_STANDING_BY'
    }
  ]);

  const [gateManagemment, setGateManagement] = useState([
    {
      terminal: 'A',
      gates: [
        { number: 'A1', status: 'OCCUPIED', aircraft: 'B737-800 (UA456)', scheduled_departure: '+15min' },
        { number: 'A2', status: 'AVAILABLE', next_arrival: 'B757-200 in 45min' },
        { number: 'A3', status: 'MAINTENANCE', issue: 'Jetbridge repair' },
        { number: 'A4', status: 'OCCUPIED', aircraft: 'A320 (JBU567)', scheduled_departure: '+8min' },
        { number: 'A5', status: 'BOARDING', aircraft: 'B737-700 (WN123)', departure: '+25min' },
        { number: 'A6', status: 'AVAILABLE', next_arrival: 'A321 in 1h 20min' }
      ]
    },
    {
      terminal: 'B',
      gates: [
        { number: 'B1', status: 'OCCUPIED', aircraft: 'B787-9 (BAW456)', scheduled_departure: '+35min' },
        { number: 'B2', status: 'AVAILABLE', next_arrival: 'A380 in 2h 15min' },
        { number: 'B3', status: 'CLEANING', last_departure: '10min ago' },
        { number: 'B4', status: 'AVAILABLE', next_arrival: 'B777-300 in 55min' },
        { number: 'B5', status: 'MAINTENANCE', issue: 'Ground power unit repair' },
        { number: 'B6', status: 'OCCUPIED', aircraft: 'A350-900 (DLH789)', scheduled_departure: '+1h 15min' },
        { number: 'B7', status: 'AVAILABLE', next_arrival: 'A330-200 in 1h 45min' },
        { number: 'B8', status: 'DEPARTURE', aircraft: 'A330-300 (LH234)', taxi_clearance: 'CLEARED' }
      ]
    },
    {
      terminal: 'C',
      gates: [
        { number: 'C1', status: 'OCCUPIED', aircraft: 'B737-900 (UAL234)', scheduled_departure: '+22min' },
        { number: 'C2', status: 'AVAILABLE', next_arrival: 'CRJ-900 in 30min' },
        { number: 'C3', status: 'CLEANING', last_departure: '5min ago' }
      ]
    }
  ]);

  const [groundOperations, setGroundOperations] = useState({
    baggage_handling: {
      total_bags_processed: 8947, // today
      average_processing_time: 18, // minutes
      delayed_bags: 23,
      lost_bags: 2,
      system_efficiency: 97.8, // percentage
      conveyor_status: 'OPERATIONAL',
      sortation_system: 'AUTOMATED'
    },
    ground_support_equipment: {
      tugs: { total: 45, available: 38, maintenance: 4, deployed: 3 },
      loaders: { total: 32, available: 28, maintenance: 2, deployed: 2 },
      fuel_trucks: { total: 12, available: 9, deployed: 3 },
      catering_trucks: { total: 18, available: 14, deployed: 4 },
      lavatory_service: { total: 8, available: 6, deployed: 2 }
    },
    fuel_operations: {
      total_fuel_dispensed: 245780, // liters today
      fuel_trucks_active: 3,
      average_fuel_time: 35, // minutes
      fuel_price_jet_a1: 0.87, // per liter
      fuel_storage: {
        tank_1: { capacity: 2000000, current: 1650000, percentage: 82.5 },
        tank_2: { capacity: 2000000, current: 1890000, percentage: 94.5 },
        tank_3: { capacity: 1500000, current: 890000, percentage: 59.3 }
      }
    },
    security_operations: {
      passenger_screening: {
        checkpoint_1: { wait_time: 8, throughput: 245 }, // passengers per hour
        checkpoint_2: { wait_time: 12, throughput: 210 },
        checkpoint_3: { wait_time: 6, throughput: 280 }
      },
      security_level: 'NORMAL',
      incidents_today: 1,
      false_alarms: 3,
      prohibited_items_confiscated: 47
    }
  });

  const [airspaceManagement, setAirspaceManagement] = useState({
    approach_control: {
      aircraft_in_sequence: 8,
      average_spacing: 5.2, // nautical miles
      holding_patterns_active: 1,
      vectoring_delays: 'MINIMAL',
      arrival_rate: 28, // per hour
      approach_category: 'ILS_CAT_I'
    },
    departure_control: {
      aircraft_in_queue: 4,
      average_taxi_time: 12, // minutes
      departure_rate: 24, // per hour
      ground_stops: 1, // active
      departure_fixes: {
        north_fix: 'CLEAR',
        south_fix: 'MODERATE_TRAFFIC',
        east_fix: 'CLEAR',
        west_fix: 'HEAVY_TRAFFIC'
      }
    },
    weather_impact: {
      current_conditions: 'VFR',
      ceiling: 'UNLIMITED',
      visibility: 10, // statute miles
      precipitation: 'NONE',
      wind_impact: 'MINIMAL',
      turbulence_reports: 'LIGHT_BELOW_5000'
    }
  });

  const [flightTrends, setFlightTrends] = useState([]);

  const generateFlightTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        arrivals: Math.floor(15 + Math.random() * 20),
        departures: Math.floor(12 + Math.random() * 18),
        total_operations: Math.floor(28 + Math.random() * 35),
        delays: Math.floor(2 + Math.random() * 8),
        taxi_time: 8 + Math.random() * 10
      });
    }
    return data;
  };

  useEffect(() => {
    setFlightTrends(generateFlightTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update airport status
      setAirportStatus(prev => ({
        ...prev,
        currentTraffic: Math.max(15, Math.min(45, prev.currentTraffic + Math.floor((Math.random() - 0.5) * 4))),
        avgTaxiTime: Math.max(8, Math.min(20, prev.avgTaxiTime + (Math.random() - 0.5) * 2)),
        windSpeed: Math.max(0, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 3)),
        lastUpdate: Date.now()
      }));

      // Update active flights
      setActiveFlights(prev => prev.map(flight => {
        if (flight.status === 'APPROACH' && Math.random() < 0.3) {
          return {
            ...flight,
            status: 'LANDING',
            altitude: 100,
            distance_to_airport: 0.5
          };
        }
        if (flight.status === 'TAXI_FOR_DEPARTURE' && Math.random() < 0.2) {
          return {
            ...flight,
            status: 'TAKEOFF_CLEARANCE',
            runway_assignment: flight.runway_assignment
          };
        }
        return flight;
      }));

    }, 18000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'NORMAL':
      case 'AVAILABLE':
      case 'VFR':
      case 'CLEAR':
      case 'AUTOMATED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BOARDING':
      case 'TAXI_FOR_DEPARTURE':
      case 'APPROACH':
      case 'DEPARTURE':
      case 'CLEANING':
      case 'MODERATE_TRAFFIC': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'OCCUPIED':
      case 'GROUND_STOP':
      case 'HEAVY_TRAFFIC':
      case 'MINIMAL': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'CLOSED':
      case 'OUT_OF_SERVICE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'EMERGENCY':
      case 'EMERGENCY_LANDING':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'EMERGENCY': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'NORMAL': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = Date.now() - timestamp;
    if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ✈️ AIRPORT OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {airportStatus.activeRunways}/{airportStatus.totalRunways} Runways
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {airportStatus.currentTraffic} Traffic
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {airportStatus.avgTaxiTime}min Taxi
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Air Traffic Control & Terminal Management
          </div>
        </div>
      </div>

      {/* Airport Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">DAILY OPERATIONS</div>
              <div className="text-2xl font-bold text-blue-100">
                {airportStatus.flightOperations}
              </div>
              <div className="text-xs text-blue-300">
                Flight Operations
              </div>
            </div>
            <div className="text-3xl opacity-60">✈️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">CURRENT TRAFFIC</div>
              <div className="text-2xl font-bold text-green-100">
                {airportStatus.currentTraffic}
              </div>
              <div className="text-xs text-green-300">
                Active Aircraft
              </div>
            </div>
            <div className="text-3xl opacity-60">🛩️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">WEATHER CONDITIONS</div>
              <div className="text-2xl font-bold text-purple-100">
                {airportStatus.weatherCondition}
              </div>
              <div className="text-xs text-purple-300">
                {airportStatus.windSpeed}kt @ {airportStatus.windDirection}°
              </div>
            </div>
            <div className="text-3xl opacity-60">🌤️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">AVG TAXI TIME</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(airportStatus.avgTaxiTime)}
              </div>
              <div className="text-xs text-orange-300">
                Minutes
              </div>
            </div>
            <div className="text-3xl opacity-60">🚛</div>
          </div>
        </div>
      </div>

      {/* Runway Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🛬 RUNWAY STATUS & FLIGHT OPERATIONS
        </h3>
        <div className="space-y-3">
          {runwayStatus.map((runway) => (
            <div key={runway.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{runway.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(runway.status)}`}>
                    {runway.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {runway.length}m x {runway.width}m
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                    {runway.surface}
                  </span>
                </div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Active Direction: </span>
                <span className="text-green-400">{runway.active_direction}</span>
                <span className="text-gray-400"> | Operations Today: </span>
                <span className="text-blue-400">{runway.operations_today}</span>
                <span className="text-gray-400"> | Last Operation: </span>
                <span className="text-purple-400">{formatTime(runway.last_operation)}</span>
              </div>

              {runway.status === 'OPERATIONAL' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">ILS Status: </span>
                  <span className={getStatusColor(runway.ils_status)}>{runway.ils_status.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Lighting: </span>
                  <span className="text-yellow-400">{runway.lighting.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Condition: </span>
                  <span className="text-green-400">{runway.condition}</span>
                  <span className="text-gray-400"> | Friction: </span>
                  <span className="text-orange-400">{formatNumber(runway.friction_coefficient, 2)}</span>
                </div>
              )}

              {runway.aircraft_on_approach > 0 && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">On Approach: </span>
                  <span className="text-red-400">{runway.aircraft_on_approach} aircraft</span>
                </div>
              )}

              {runway.next_departure !== 'NONE_SCHEDULED' && runway.next_departure !== 'CLOSED_FOR_RESURFACING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Next Departure: </span>
                  <span className="text-cyan-400">{runway.next_departure}</span>
                </div>
              )}

              {runway.noise_restrictions !== 'NONE' && runway.noise_restrictions !== 'N/A' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Restrictions: </span>
                  <span className="text-yellow-400">{runway.noise_restrictions.replace(/_/g, ' ')}</span>
                </div>
              )}

              {runway.maintenance_window !== 'NONE_SCHEDULED' && (
                <div className="text-xs">
                  <span className="text-gray-400">Maintenance: </span>
                  <span className="text-orange-400">{runway.maintenance_window.replace(/_/g, ' ')}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Flights and Gate Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Flights */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛫 ACTIVE FLIGHTS & AIR TRAFFIC
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {activeFlights.map((flight) => (
              <div key={flight.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{flight.callsign}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(flight.status)}`}>
                      {flight.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {flight.aircraft_type}
                    </span>
                    {flight.priority && (
                      <span className={`px-2 py-1 rounded text-xs font-mono ${getPriorityColor(flight.priority)}`}>
                        {flight.priority}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Flight: </span>
                  <span className="text-cyan-400">{flight.flight_number}</span>
                  <span className="text-gray-400"> | Route: </span>
                  <span className="text-blue-400">{flight.origin} → {flight.destination}</span>
                  <span className="text-gray-400"> | Gate: </span>
                  <span className="text-green-400">{flight.gate_assignment}</span>
                </div>

                {flight.altitude > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Altitude: </span>
                    <span className="text-purple-400">{formatNumber(flight.altitude)} ft</span>
                    <span className="text-gray-400"> | Speed: </span>
                    <span className="text-orange-400">{formatNumber(flight.speed)} kt</span>
                    {flight.distance_to_airport && (
                      <>
                        <span className="text-gray-400"> | Distance: </span>
                        <span className="text-yellow-400">{formatNumber(flight.distance_to_airport, 1)} nm</span>
                      </>
                    )}
                  </div>
                )}

                {flight.runway_assignment && flight.runway_assignment !== 'HOLDING' && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Runway: </span>
                    <span className="text-green-400">{flight.runway_assignment}</span>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Passengers: </span>
                  <span className="text-blue-400">{flight.passengers}</span>
                  <span className="text-gray-400"> | Pilot: </span>
                  <span className="text-cyan-400">{flight.pilot}</span>
                </div>

                {flight.delay_reason && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Delay: </span>
                    <span className="text-orange-400">{flight.delay_reason.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> ({flight.delay_duration}min)</span>
                  </div>
                )}

                {flight.nature_of_emergency && (
                  <div className="text-xs">
                    <span className="text-gray-400">Emergency: </span>
                    <span className="text-red-400">{flight.nature_of_emergency.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Patient: </span>
                    <span className="text-orange-400">{flight.patient_condition}</span>
                  </div>
                )}

                {flight.special_requirements && flight.special_requirements !== 'NONE' && (
                  <div className="text-xs">
                    <span className="text-gray-400">Special: </span>
                    <span className="text-yellow-400">{flight.special_requirements.replace(/_/g, ' ')}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gate Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚪 GATE MANAGEMENT & TERMINAL STATUS
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {gateManagemment.map((terminal) => (
              <div key={terminal.terminal} className="bg-gray-700 rounded-lg p-3">
                <h4 className="text-sm font-bold text-white mb-3">Terminal {terminal.terminal}</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {terminal.gates.map((gate) => (
                    <div key={gate.number} className="bg-gray-600 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">{gate.number}</span>
                        <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(gate.status).split(' ')[0]}`}>
                          {gate.status}
                        </span>
                      </div>
                      
                      {gate.aircraft && (
                        <div className="text-cyan-400 mb-1">{gate.aircraft}</div>
                      )}
                      
                      {gate.scheduled_departure && (
                        <div className="text-yellow-400">Dep: {gate.scheduled_departure}</div>
                      )}
                      
                      {gate.next_arrival && (
                        <div className="text-green-400">{gate.next_arrival}</div>
                      )}
                      
                      {gate.last_departure && (
                        <div className="text-blue-400">Last: {gate.last_departure}</div>
                      )}
                      
                      {gate.issue && (
                        <div className="text-orange-400">{gate.issue}</div>
                      )}
                      
                      {gate.departure && (
                        <div className="text-purple-400">Dep: {gate.departure}</div>
                      )}
                      
                      {gate.taxi_clearance && (
                        <div className="text-green-400">Taxi: {gate.taxi_clearance}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flight Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 FLIGHT OPERATIONS TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={flightTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
            <YAxis stroke="#9CA3AF" fontSize={12}/>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="arrivals" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Arrivals/hr"
            />
            <Line 
              type="monotone" 
              dataKey="departures" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Departures/hr"
            />
            <Line 
              type="monotone" 
              dataKey="total_operations" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              name="Total Operations/hr"
            />
            <Line 
              type="monotone" 
              dataKey="delays" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Delays/hr"
            />
            <Line 
              type="monotone" 
              dataKey="taxi_time" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Avg Taxi Time (min)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Ground Operations and Airspace Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ground Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚛 GROUND OPERATIONS & SUPPORT EQUIPMENT
          </h3>
          
          {/* Baggage Handling */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Baggage Handling System</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Bags Processed</div>
                <div className="text-green-400">{formatNumber(groundOperations.baggage_handling.total_bags_processed)}</div>
              </div>
              <div>
                <div className="text-gray-400">Avg Processing</div>
                <div className="text-blue-400">{groundOperations.baggage_handling.average_processing_time}min</div>
              </div>
              <div>
                <div className="text-gray-400">Delayed Bags</div>
                <div className="text-yellow-400">{groundOperations.baggage_handling.delayed_bags}</div>
              </div>
              <div>
                <div className="text-gray-400">System Efficiency</div>
                <div className="text-purple-400">{formatNumber(groundOperations.baggage_handling.system_efficiency)}%</div>
              </div>
            </div>
          </div>

          {/* Ground Support Equipment */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Ground Support Equipment</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(groundOperations.ground_support_equipment).map(([equipment, data]) => (
                <div key={equipment} className="flex justify-between">
                  <span className="text-gray-400 capitalize">{equipment.replace(/_/g, ' ')}:</span>
                  <div className="flex space-x-2">
                    <span className="text-green-400">{data.available} avail</span>
                    <span className="text-blue-400">{data.deployed} deployed</span>
                    {data.maintenance > 0 && (
                      <span className="text-orange-400">{data.maintenance} maint</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Airspace Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 AIRSPACE MANAGEMENT & TRAFFIC CONTROL
          </h3>
          
          {/* Approach Control */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Approach Control</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Aircraft in Sequence</div>
                <div className="text-green-400">{airspaceManagement.approach_control.aircraft_in_sequence}</div>
              </div>
              <div>
                <div className="text-gray-400">Avg Spacing</div>
                <div className="text-blue-400">{formatNumber(airspaceManagement.approach_control.average_spacing, 1)} nm</div>
              </div>
              <div>
                <div className="text-gray-400">Arrival Rate</div>
                <div className="text-purple-400">{airspaceManagement.approach_control.arrival_rate}/hr</div>
              </div>
              <div>
                <div className="text-gray-400">Approach Category</div>
                <div className="text-orange-400">{airspaceManagement.approach_control.approach_category.replace(/_/g, ' ')}</div>
              </div>
            </div>
          </div>

          {/* Departure Control */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Departure Control</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Aircraft in Queue</div>
                <div className="text-yellow-400">{airspaceManagement.departure_control.aircraft_in_queue}</div>
              </div>
              <div>
                <div className="text-gray-400">Departure Rate</div>
                <div className="text-green-400">{airspaceManagement.departure_control.departure_rate}/hr</div>
              </div>
              <div>
                <div className="text-gray-400">Ground Stops</div>
                <div className="text-red-400">{airspaceManagement.departure_control.ground_stops}</div>
              </div>
              <div>
                <div className="text-gray-400">Avg Taxi Time</div>
                <div className="text-blue-400">{airspaceManagement.departure_control.average_taxi_time}min</div>
              </div>
            </div>
          </div>

          {/* Weather Impact */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Weather Impact</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Conditions:</span>
                <span className={`${getStatusColor(airspaceManagement.weather_impact.current_conditions).split(' ')[0]}`}>
                  {airspaceManagement.weather_impact.current_conditions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Visibility:</span>
                <span className="text-green-400">{airspaceManagement.weather_impact.visibility} SM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wind Impact:</span>
                <span className={`${getStatusColor(airspaceManagement.weather_impact.wind_impact).split(' ')[0]}`}>
                  {airspaceManagement.weather_impact.wind_impact}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Turbulence:</span>
                <span className="text-orange-400">{airspaceManagement.weather_impact.turbulence_reports.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airport Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 AIRPORT PERFORMANCE KPIs & OPERATIONAL METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Runway Utilization</div>
            <div className="text-white font-bold text-lg">
              {formatNumber((airportStatus.activeRunways / airportStatus.totalRunways) * 100)}%
            </div>
            <div className="text-green-400 text-xs">operational runways</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Daily Operations</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(airportStatus.flightOperations)}
            </div>
            <div className="text-blue-400 text-xs">flight movements</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Taxi Time</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(airportStatus.avgTaxiTime)}
            </div>
            <div className="text-purple-400 text-xs">minutes</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Baggage Efficiency</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(groundOperations.baggage_handling.system_efficiency)}%
            </div>
            <div className="text-orange-400 text-xs">processing rate</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Weather Conditions</div>
            <div className="text-white font-bold text-lg">
              {airportStatus.weatherCondition}
            </div>
            <div className="text-cyan-400 text-xs">{airportStatus.visibility} SM vis</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Current Traffic</div>
            <div className="text-white font-bold text-lg">
              {airportStatus.currentTraffic}
            </div>
            <div className="text-yellow-400 text-xs">active aircraft</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportOperations;