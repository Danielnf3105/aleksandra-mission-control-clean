// MaritimeOperations.js - Maritime/Port Operations Center & Vessel Traffic Service Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MaritimeOperations = () => {
  const [portStatus, setPortStatus] = useState({
    operationalStatus: 'NORMAL',
    vesselsInPort: 47,
    vesselsAnchored: 12,
    vesselsInbound: 18,
    vesselsOutbound: 15,
    totalBerths: 85,
    occupiedBerths: 67,
    containerMovements: 8947, // today
    cargoThroughput: 28456, // TEU today
    pilotOperations: 23, // today
    tugOperations: 45, // today
    averageTurnaroundTime: 18.7, // hours
    lastUpdate: Date.now()
  });

  const [vesselTraffic, setVesselTraffic] = useState([
    {
      id: 'MSC_AURORA',
      vessel_name: 'MSC Aurora',
      call_sign: 'H3RC',
      imo_number: '9876543',
      vessel_type: 'CONTAINER_SHIP',
      flag: 'Panama',
      status: 'BERTHED',
      berth: 'Container Terminal 5 - Berth 52',
      length: 400, // meters
      beam: 59,
      draft: 16.2,
      gross_tonnage: 220000,
      cargo_capacity: 24000, // TEU
      current_load: 18650, // TEU
      arrival_time: Date.now() - 8 * 60 * 60 * 1000,
      eta_departure: Date.now() + 12 * 60 * 60 * 1000,
      pilot_required: true,
      pilot_onboard: true,
      tug_assistance: 'STANDBY',
      cargo_operations: 'DISCHARGING',
      containers_discharged: 4850,
      containers_loaded: 2340,
      last_port: 'Shanghai',
      next_port: 'Rotterdam',
      agent: 'Maritime Services Ltd',
      captain: 'Capt. Alessandro Rossi',
      crew: 24,
      passengers: 0
    },
    {
      id: 'OCEAN_HARMONY',
      vessel_name: 'Ocean Harmony',
      call_sign: 'V7QJ2',
      imo_number: '9654321',
      vessel_type: 'BULK_CARRIER',
      flag: 'Liberia',
      status: 'APPROACHING',
      eta_arrival: Date.now() + 2 * 60 * 60 * 1000,
      assigned_berth: 'Bulk Terminal 3 - Berth 14',
      length: 289,
      beam: 45,
      draft: 18.5,
      gross_tonnage: 180000,
      cargo_type: 'IRON_ORE',
      cargo_quantity: 165000, // metric tons
      pilot_required: true,
      pilot_assignment: 'Pilot Station 14:30',
      tug_assistance: 'REQUIRED',
      tugs_assigned: 2,
      last_port: 'Port Hedland',
      next_port: 'Qingdao',
      agent: 'Bulk Logistics Corp',
      captain: 'Capt. John Mitchell',
      crew: 21,
      distance_to_port: 8.5 // nautical miles
    },
    {
      id: 'ATLANTIC_STAR',
      vessel_name: 'Atlantic Star',
      call_sign: 'GBQX',
      imo_number: '9432109',
      vessel_type: 'TANKER',
      flag: 'Marshall Islands',
      status: 'ANCHORED',
      anchorage: 'Anchorage Area B',
      anchor_position: { lat: '40.6892', lon: '-74.0445' },
      length: 333,
      beam: 60,
      draft: 22.1,
      gross_tonnage: 164000,
      cargo_type: 'CRUDE_OIL',
      cargo_quantity: 320000, // barrels
      waiting_reason: 'BERTH_AVAILABILITY',
      eta_berth: Date.now() + 18 * 60 * 60 * 1000,
      assigned_berth: 'Oil Terminal 1 - Berth 7',
      pilot_required: true,
      tug_assistance: 'REQUIRED',
      last_port: 'Ras Tanura',
      next_port: 'Port Arthur',
      agent: 'Petro Marine Services',
      captain: 'Capt. Hassan Al-Mahmoud',
      crew: 28,
      anchor_time: Date.now() - 6 * 60 * 60 * 1000
    },
    {
      id: 'NORDIC_EXPRESS',
      vessel_name: 'Nordic Express',
      call_sign: 'LATJ',
      imo_number: '9567890',
      vessel_type: 'RO_RO_FERRY',
      flag: 'Norway',
      status: 'DEPARTING',
      berth: 'Ferry Terminal 2',
      length: 200,
      beam: 32,
      draft: 6.8,
      gross_tonnage: 35000,
      passenger_capacity: 2000,
      current_passengers: 1847,
      vehicle_capacity: 750,
      current_vehicles: 623,
      departure_time: Date.now() + 15 * 60 * 1000,
      pilot_required: false,
      tug_assistance: 'NOT_REQUIRED',
      destination: 'Bergen',
      agent: 'Scandinavian Ferry Lines',
      captain: 'Capt. Erik Larsen',
      crew: 45,
      voyage_duration: 7.5 // hours
    },
    {
      id: 'PACIFIC_VENTURE',
      vessel_name: 'Pacific Venture',
      call_sign: 'JMUX',
      imo_number: '9345678',
      vessel_type: 'CRUISE_SHIP',
      flag: 'Bahamas',
      status: 'EMERGENCY',
      berth: 'Passenger Terminal A',
      emergency_type: 'MEDICAL_EMERGENCY',
      length: 362,
      beam: 47,
      draft: 8.2,
      gross_tonnage: 170000,
      passenger_capacity: 5400,
      current_passengers: 4987,
      crew: 1732,
      medical_assistance: 'COAST_GUARD_HELICOPTER_ENROUTE',
      eta_medical_evac: Date.now() + 25 * 60 * 1000,
      agent: 'Oceanic Cruise Services',
      captain: 'Capt. Maria Santos',
      incident_time: Date.now() - 45 * 60 * 1000
    }
  ]);

  const [berthdOperations, setBerthOperations] = useState([
    {
      terminal: 'Container Terminal 1',
      berths: [
        {
          berth_id: 'CT1-B1',
          status: 'OCCUPIED',
          vessel: 'MSC Mediterranean',
          vessel_type: 'CONTAINER_SHIP',
          arrival: Date.now() - 14 * 60 * 60 * 1000,
          eta_departure: Date.now() + 6 * 60 * 60 * 1000,
          cargo_operations: 'LOADING',
          crane_assignments: 4,
          containers_moved: 2847,
          productivity: 32 // containers per hour
        },
        {
          berth_id: 'CT1-B2',
          status: 'AVAILABLE',
          last_vessel: 'COSCO Shanghai',
          last_departure: Date.now() - 2 * 60 * 60 * 1000,
          next_arrival: Date.now() + 4 * 60 * 60 * 1000,
          next_vessel: 'Evergreen Harmony'
        }
      ]
    },
    {
      terminal: 'Bulk Terminal 2',
      berths: [
        {
          berth_id: 'BT2-B1',
          status: 'OCCUPIED',
          vessel: 'Iron Duke',
          vessel_type: 'BULK_CARRIER',
          arrival: Date.now() - 22 * 60 * 60 * 1000,
          eta_departure: Date.now() + 8 * 60 * 60 * 1000,
          cargo_operations: 'DISCHARGING',
          cargo_type: 'COAL',
          discharge_rate: 2800, // tons per hour
          total_cargo: 85000 // tons
        },
        {
          berth_id: 'BT2-B2',
          status: 'MAINTENANCE',
          maintenance_type: 'CRANE_REPAIR',
          eta_completion: Date.now() + 18 * 60 * 60 * 1000
        }
      ]
    },
    {
      terminal: 'Oil Terminal',
      berths: [
        {
          berth_id: 'OT-B1',
          status: 'AVAILABLE',
          last_vessel: 'Petro Star',
          last_departure: Date.now() - 36 * 60 * 60 * 1000,
          environmental_clearance: 'APPROVED',
          safety_inspection: 'CURRENT'
        }
      ]
    }
  ]);

  const [craneOperations, setCraneOperations] = useState([
    {
      crane_id: 'STS-01',
      type: 'SHIP_TO_SHORE',
      status: 'OPERATING',
      assigned_vessel: 'MSC Aurora',
      current_operation: 'DISCHARGING',
      containers_moved_today: 287,
      productivity: 28, // containers per hour
      operator: 'Rodriguez, M.',
      maintenance_due: Date.now() + 72 * 60 * 60 * 1000,
      last_service: Date.now() - 14 * 24 * 60 * 60 * 1000
    },
    {
      crane_id: 'RTG-05',
      type: 'RUBBER_TIRED_GANTRY',
      status: 'OPERATING',
      current_operation: 'YARD_OPERATIONS',
      containers_moved_today: 156,
      productivity: 18,
      operator: 'Chen, L.',
      maintenance_due: Date.now() + 120 * 60 * 60 * 1000,
      last_service: Date.now() - 7 * 24 * 60 * 60 * 1000
    },
    {
      crane_id: 'STS-03',
      type: 'SHIP_TO_SHORE',
      status: 'MAINTENANCE',
      maintenance_type: 'SCHEDULED_INSPECTION',
      eta_completion: Date.now() + 4 * 60 * 60 * 1000,
      technician: 'Maintenance Team Alpha'
    },
    {
      crane_id: 'RTG-12',
      type: 'RUBBER_TIRED_GANTRY',
      status: 'STANDBY',
      last_operation: Date.now() - 3 * 60 * 60 * 1000,
      next_assignment: 'Evergreen Harmony arrival',
      operator: 'ASSIGNED_ON_CALL'
    }
  ]);

  const [weatherAndEnvironmental, setWeatherAndEnvironmental] = useState({
    weather_conditions: {
      temperature: 18, // celsius
      wind_speed: 12, // knots
      wind_direction: 245, // degrees
      wave_height: 1.2, // meters
      visibility: 8, // nautical miles
      barometric_pressure: 1018, // mb
      conditions: 'PARTLY_CLOUDY',
      forecast_6h: 'DETERIORATING'
    },
    tide_info: {
      current_tide: 'HIGH',
      tide_height: 2.8, // meters above datum
      next_high_tide: Date.now() + 6.2 * 60 * 60 * 1000,
      next_low_tide: Date.now() + 12.4 * 60 * 60 * 1000,
      tidal_range: 3.4 // meters
    },
    environmental_monitoring: {
      water_quality: 'GOOD',
      air_quality_index: 'MODERATE',
      noise_levels: 'WITHIN_LIMITS',
      oil_spill_detection: 'NONE',
      marine_life_activity: 'NORMAL',
      waste_discharge_compliance: 'COMPLIANT'
    },
    navigational_aids: {
      lighthouse_status: 'OPERATIONAL',
      buoy_system: 'ALL_FUNCTIONAL',
      radar_coverage: 'FULL_OPERATIONAL',
      gps_accuracy: 'HIGH',
      vts_radar: 'OPERATIONAL',
      communication_systems: 'ALL_CHANNELS_CLEAR'
    }
  });

  const [safetyAndSecurity, setSafetyAndSecurity] = useState({
    security_level: 'MARSEC_1',
    incidents_today: 1,
    security_patrols: {
      waterside: 'ACTIVE',
      landside: 'ACTIVE',
      perimeter: 'ACTIVE'
    },
    emergency_response: {
      fire_brigade: 'STANDBY',
      medical_team: 'AVAILABLE',
      spill_response: 'STANDBY',
      tugboat_emergency: 'AVAILABLE'
    },
    safety_metrics: {
      lost_time_injuries: 0, // this month
      near_misses: 8,
      safety_training_compliance: 96.8, // percentage
      emergency_drills_completed: 12 // this month
    },
    port_security: {
      access_control: 'STRICT',
      twic_compliance: 'ENFORCED',
      cargo_screening: 'ACTIVE',
      vessel_screening: 'MANDATORY'
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
        vessel_arrivals: Math.floor(1 + Math.random() * 4),
        vessel_departures: Math.floor(1 + Math.random() * 3),
        container_movements: Math.floor(200 + Math.random() * 400),
        cargo_throughput: Math.floor(800 + Math.random() * 1600), // TEU
        berth_utilization: 70 + Math.random() * 25,
        average_turnaround: 15 + Math.random() * 8
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update port status
      setPortStatus(prev => ({
        ...prev,
        vesselsInPort: Math.max(40, Math.min(55, prev.vesselsInPort + Math.floor((Math.random() - 0.5) * 3))),
        occupiedBerths: Math.max(60, Math.min(80, prev.occupiedBerths + Math.floor((Math.random() - 0.5) * 2))),
        containerMovements: prev.containerMovements + Math.floor(Math.random() * 50),
        cargoThroughput: prev.cargoThroughput + Math.floor(Math.random() * 200),
        averageTurnaroundTime: Math.max(15.0, Math.min(25.0, prev.averageTurnaroundTime + (Math.random() - 0.5) * 1.0)),
        lastUpdate: Date.now()
      }));

      // Update weather conditions
      setWeatherAndEnvironmental(prev => ({
        ...prev,
        weather_conditions: {
          ...prev.weather_conditions,
          wind_speed: Math.max(8, Math.min(20, prev.weather_conditions.wind_speed + (Math.random() - 0.5) * 2)),
          wave_height: Math.max(0.5, Math.min(2.5, prev.weather_conditions.wave_height + (Math.random() - 0.5) * 0.2))
        }
      }));

    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'BERTHED':
      case 'OCCUPIED':
      case 'OPERATING':
      case 'NORMAL':
      case 'AVAILABLE':
      case 'GOOD':
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'APPROACHING':
      case 'DEPARTING':
      case 'LOADING':
      case 'DISCHARGING':
      case 'STANDBY':
      case 'MODERATE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'ANCHORED':
      case 'PARTLY_CLOUDY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'DETERIORATING': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'EMERGENCY': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getVesselTypeIcon = (type) => {
    switch (type) {
      case 'CONTAINER_SHIP': return '🚢';
      case 'BULK_CARRIER': return '🚛';
      case 'TANKER': return '🛢️';
      case 'RO_RO_FERRY': return '⛴️';
      case 'CRUISE_SHIP': return '🛳️';
      default: return '🚤';
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
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h ${Math.floor((diff % 3600000) / 60000)}min`;
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
          🚢 MARITIME/PORT OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {portStatus.occupiedBerths}/{portStatus.totalBerths} Berths
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {portStatus.vesselsInPort} Vessels
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(portStatus.averageTurnaroundTime, 1)}h TAT
          </div>
          <div className="text-sm text-gray-400 font-mono">
            VTS & Port Management Systems
          </div>
        </div>
      </div>

      {/* Port Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">CARGO THROUGHPUT</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(portStatus.cargoThroughput)}
              </div>
              <div className="text-xs text-blue-300">
                TEU Today
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">VESSELS IN PORT</div>
              <div className="text-2xl font-bold text-green-100">
                {portStatus.vesselsInPort}
              </div>
              <div className="text-xs text-green-300">
                Active Vessels
              </div>
            </div>
            <div className="text-3xl opacity-60">🚢</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">BERTH UTILIZATION</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber((portStatus.occupiedBerths / portStatus.totalBerths) * 100)}%
              </div>
              <div className="text-xs text-purple-300">
                Occupancy Rate
              </div>
            </div>
            <div className="text-3xl opacity-60">⚓</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TURNAROUND TIME</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(portStatus.averageTurnaroundTime, 1)}
              </div>
              <div className="text-xs text-orange-300">
                Hours Average
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>
      </div>

      {/* Vessel Traffic & VTS */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌊 VESSEL TRAFFIC SERVICE (VTS) & SHIP MOVEMENTS
        </h3>
        <div className="space-y-3">
          {vesselTraffic.map((vessel) => (
            <div key={vessel.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getVesselTypeIcon(vessel.vessel_type)}</span>
                  <div className="text-sm font-bold text-white">{vessel.vessel_name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(vessel.status)}`}>
                    {vessel.status.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {vessel.vessel_type.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                    {vessel.flag}
                  </span>
                  {vessel.status === 'EMERGENCY' && (
                    <span className="text-xs px-2 py-1 rounded bg-red-500 text-white animate-pulse">
                      EMERGENCY
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Call Sign: </span>
                <span className="text-cyan-400">{vessel.call_sign}</span>
                <span className="text-gray-400"> | IMO: </span>
                <span className="text-blue-400">{vessel.imo_number}</span>
                <span className="text-gray-400"> | Captain: </span>
                <span className="text-green-400">{vessel.captain}</span>
                <span className="text-gray-400"> | Crew: </span>
                <span className="text-purple-400">{vessel.crew}</span>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Dimensions: </span>
                <span className="text-orange-400">{vessel.length}m × {vessel.beam}m × {formatNumber(vessel.draft, 1)}m</span>
                <span className="text-gray-400"> | GT: </span>
                <span className="text-yellow-400">{formatLargeNumber(vessel.gross_tonnage)}</span>
                {vessel.cargo_capacity && (
                  <>
                    <span className="text-gray-400"> | Capacity: </span>
                    <span className="text-cyan-400">{formatLargeNumber(vessel.cargo_capacity)} TEU</span>
                  </>
                )}
              </div>

              {vessel.status === 'BERTHED' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Berth: </span>
                  <span className="text-green-400">{vessel.berth}</span>
                  <span className="text-gray-400"> | Operation: </span>
                  <span className="text-blue-400">{vessel.cargo_operations}</span>
                  <span className="text-gray-400"> | Departure: </span>
                  <span className="text-purple-400">{formatTime(vessel.eta_departure)}</span>
                </div>
              )}

              {vessel.status === 'APPROACHING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Distance: </span>
                  <span className="text-yellow-400">{formatNumber(vessel.distance_to_port, 1)} nm</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-green-400">{formatTime(vessel.eta_arrival)}</span>
                  <span className="text-gray-400"> | Assigned Berth: </span>
                  <span className="text-cyan-400">{vessel.assigned_berth}</span>
                </div>
              )}

              {vessel.status === 'ANCHORED' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Anchorage: </span>
                  <span className="text-yellow-400">{vessel.anchorage}</span>
                  <span className="text-gray-400"> | Waiting: </span>
                  <span className="text-orange-400">{vessel.waiting_reason.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | ETA Berth: </span>
                  <span className="text-green-400">{formatTime(vessel.eta_berth)}</span>
                </div>
              )}

              {vessel.status === 'DEPARTING' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Departure: </span>
                  <span className="text-green-400">{formatTime(vessel.departure_time)}</span>
                  <span className="text-gray-400"> | Destination: </span>
                  <span className="text-cyan-400">{vessel.destination}</span>
                  {vessel.current_passengers && (
                    <>
                      <span className="text-gray-400"> | Passengers: </span>
                      <span className="text-purple-400">{vessel.current_passengers}</span>
                    </>
                  )}
                </div>
              )}

              {vessel.status === 'EMERGENCY' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Emergency: </span>
                  <span className="text-red-400">{vessel.emergency_type.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Assistance: </span>
                  <span className="text-orange-400">{vessel.medical_assistance.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-green-400">{formatTime(vessel.eta_medical_evac)}</span>
                </div>
              )}

              <div className="text-xs mb-3">
                <span className="text-gray-400">Route: </span>
                <span className="text-blue-400">{vessel.last_port}</span>
                <span className="text-gray-400"> → </span>
                <span className="text-green-400">{vessel.next_port}</span>
                <span className="text-gray-400"> | Agent: </span>
                <span className="text-cyan-400">{vessel.agent}</span>
              </div>

              {vessel.pilot_required && (
                <div className="text-xs">
                  <span className="text-gray-400">Pilot: </span>
                  <span className={vessel.pilot_onboard ? 'text-green-400' : 'text-yellow-400'}>
                    {vessel.pilot_onboard ? 'ON BOARD' : vessel.pilot_assignment || 'REQUIRED'}
                  </span>
                  <span className="text-gray-400"> | Tug: </span>
                  <span className={vessel.tug_assistance === 'NOT_REQUIRED' ? 'text-gray-400' : 
                                   vessel.tug_assistance === 'STANDBY' ? 'text-yellow-400' : 'text-green-400'}>
                    {vessel.tug_assistance.replace(/_/g, ' ')}
                  </span>
                  {vessel.tugs_assigned && (
                    <>
                      <span className="text-gray-400"> ({vessel.tugs_assigned} tugs)</span>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Berth Operations and Crane Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Berth Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚓ BERTH OPERATIONS & TERMINAL STATUS
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {berthdOperations.map((terminal) => (
              <div key={terminal.terminal} className="bg-gray-700 rounded-lg p-3">
                <h4 className="text-sm font-bold text-white mb-3">{terminal.terminal}</h4>
                <div className="space-y-2">
                  {terminal.berths.map((berth) => (
                    <div key={berth.berth_id} className="bg-gray-600 rounded p-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-xs">{berth.berth_id}</span>
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(berth.status)}`}>
                          {berth.status}
                        </span>
                      </div>
                      
                      {berth.vessel && (
                        <div className="text-xs mb-2">
                          <div className="text-cyan-400">{berth.vessel}</div>
                          <div className="text-gray-400">Type: {berth.vessel_type?.replace(/_/g, ' ')}</div>
                        </div>
                      )}
                      
                      {berth.cargo_operations && (
                        <div className="text-xs mb-2">
                          <span className="text-gray-400">Operation: </span>
                          <span className="text-green-400">{berth.cargo_operations}</span>
                          {berth.crane_assignments && (
                            <>
                              <span className="text-gray-400"> | Cranes: </span>
                              <span className="text-blue-400">{berth.crane_assignments}</span>
                            </>
                          )}
                        </div>
                      )}
                      
                      {berth.containers_moved && (
                        <div className="text-xs mb-2">
                          <span className="text-gray-400">Moved: </span>
                          <span className="text-purple-400">{berth.containers_moved} TEU</span>
                          <span className="text-gray-400"> | Rate: </span>
                          <span className="text-orange-400">{berth.productivity} TEU/h</span>
                        </div>
                      )}
                      
                      {berth.cargo_type && (
                        <div className="text-xs mb-2">
                          <span className="text-gray-400">Cargo: </span>
                          <span className="text-yellow-400">{berth.cargo_type.replace(/_/g, ' ')}</span>
                          <span className="text-gray-400"> | Rate: </span>
                          <span className="text-green-400">{formatLargeNumber(berth.discharge_rate)} t/h</span>
                        </div>
                      )}
                      
                      {berth.eta_departure && (
                        <div className="text-xs mb-1">
                          <span className="text-gray-400">Departure: </span>
                          <span className="text-green-400">{formatTime(berth.eta_departure)}</span>
                        </div>
                      )}
                      
                      {berth.next_vessel && (
                        <div className="text-xs mb-1">
                          <span className="text-gray-400">Next: </span>
                          <span className="text-cyan-400">{berth.next_vessel}</span>
                          <span className="text-gray-400"> at </span>
                          <span className="text-green-400">{formatTime(berth.next_arrival)}</span>
                        </div>
                      )}
                      
                      {berth.maintenance_type && (
                        <div className="text-xs">
                          <span className="text-gray-400">Maintenance: </span>
                          <span className="text-orange-400">{berth.maintenance_type.replace(/_/g, ' ')}</span>
                          <span className="text-gray-400"> | ETA: </span>
                          <span className="text-yellow-400">{formatTime(berth.eta_completion)}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crane Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏗️ CRANE OPERATIONS & CARGO HANDLING
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {craneOperations.map((crane) => (
              <div key={crane.crane_id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{crane.crane_id}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(crane.status)}`}>
                      {crane.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {crane.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>

                {crane.assigned_vessel && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Vessel: </span>
                    <span className="text-cyan-400">{crane.assigned_vessel}</span>
                    <span className="text-gray-400"> | Operation: </span>
                    <span className="text-green-400">{crane.current_operation}</span>
                  </div>
                )}

                {crane.containers_moved_today && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Today: </span>
                    <span className="text-purple-400">{crane.containers_moved_today} TEU</span>
                    <span className="text-gray-400"> | Rate: </span>
                    <span className="text-orange-400">{crane.productivity} TEU/h</span>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Operator: </span>
                  <span className="text-cyan-400">{crane.operator}</span>
                </div>

                {crane.maintenance_type && (
                  <div className="text-xs">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{crane.maintenance_type.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-yellow-400">{formatTime(crane.eta_completion)}</span>
                  </div>
                )}

                {crane.next_assignment && (
                  <div className="text-xs">
                    <span className="text-gray-400">Next: </span>
                    <span className="text-blue-400">{crane.next_assignment}</span>
                  </div>
                )}

                {crane.maintenance_due && !crane.maintenance_type && (
                  <div className="text-xs">
                    <span className="text-gray-400">Maintenance Due: </span>
                    <span className="text-yellow-400">{formatTime(crane.maintenance_due)}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Port Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 PORT OPERATIONS TRENDS (24 HOURS)
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
              dataKey="container_movements"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Container Movements/hr"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="cargo_throughput" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Cargo Throughput (TEU/hr)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="berth_utilization" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Berth Utilization %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="average_turnaround" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Avg Turnaround (hrs)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="vessel_arrivals" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Vessel Arrivals/hr"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Weather & Environment and Safety & Security */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weather & Environmental */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌊 WEATHER & ENVIRONMENTAL MONITORING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Current Weather</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Temperature</div>
                <div className="text-green-400">{weatherAndEnvironmental.weather_conditions.temperature}°C</div>
              </div>
              <div>
                <div className="text-gray-400">Wind</div>
                <div className="text-blue-400">{weatherAndEnvironmental.weather_conditions.wind_speed} kt @ {weatherAndEnvironmental.weather_conditions.wind_direction}°</div>
              </div>
              <div>
                <div className="text-gray-400">Wave Height</div>
                <div className="text-purple-400">{formatNumber(weatherAndEnvironmental.weather_conditions.wave_height, 1)} m</div>
              </div>
              <div>
                <div className="text-gray-400">Visibility</div>
                <div className="text-orange-400">{weatherAndEnvironmental.weather_conditions.visibility} nm</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Environmental Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Water Quality:</span>
                <span className={`${getStatusColor(weatherAndEnvironmental.environmental_monitoring.water_quality).split(' ')[0]}`}>
                  {weatherAndEnvironmental.environmental_monitoring.water_quality}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Air Quality:</span>
                <span className="text-yellow-400">{weatherAndEnvironmental.environmental_monitoring.air_quality_index}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Oil Spill Detection:</span>
                <span className="text-green-400">{weatherAndEnvironmental.environmental_monitoring.oil_spill_detection}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Navigational Aids</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">VTS Radar:</span>
                <span className="text-green-400">{weatherAndEnvironmental.navigational_aids.vts_radar}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">GPS Accuracy:</span>
                <span className="text-blue-400">{weatherAndEnvironmental.navigational_aids.gps_accuracy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Communications:</span>
                <span className="text-cyan-400">{weatherAndEnvironmental.navigational_aids.communication_systems}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Security */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SAFETY & SECURITY OPERATIONS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Security Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Security Level:</span>
                <span className="text-green-400">{safetyAndSecurity.security_level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Incidents Today:</span>
                <span className="text-yellow-400">{safetyAndSecurity.incidents_today}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Access Control:</span>
                <span className="text-orange-400">{safetyAndSecurity.port_security.access_control}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Emergency Response</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Fire Brigade:</span>
                <span className="text-green-400">{safetyAndSecurity.emergency_response.fire_brigade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Medical Team:</span>
                <span className="text-blue-400">{safetyAndSecurity.emergency_response.medical_team}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Spill Response:</span>
                <span className="text-purple-400">{safetyAndSecurity.emergency_response.spill_response}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Safety Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">LTI (This Month):</span>
                <span className="text-green-400">{safetyAndSecurity.safety_metrics.lost_time_injuries}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Near Misses:</span>
                <span className="text-yellow-400">{safetyAndSecurity.safety_metrics.near_misses}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Training Compliance:</span>
                <span className="text-cyan-400">{formatNumber(safetyAndSecurity.safety_metrics.safety_training_compliance, 1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Port Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 PORT PERFORMANCE KPIs & OPERATIONAL METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Berth Utilization</div>
            <div className="text-white font-bold text-lg">
              {formatNumber((portStatus.occupiedBerths / portStatus.totalBerths) * 100)}%
            </div>
            <div className="text-green-400 text-xs">occupied berths</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Daily Throughput</div>
            <div className="text-white font-bold text-lg">
              {formatLargeNumber(portStatus.cargoThroughput)}
            </div>
            <div className="text-blue-400 text-xs">TEU today</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Turnaround Time</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(portStatus.averageTurnaroundTime, 1)}
            </div>
            <div className="text-purple-400 text-xs">hours average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Vessels in Port</div>
            <div className="text-white font-bold text-lg">
              {portStatus.vesselsInPort}
            </div>
            <div className="text-orange-400 text-xs">active vessels</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Container Moves</div>
            <div className="text-white font-bold text-lg">
              {formatLargeNumber(portStatus.containerMovements)}
            </div>
            <div className="text-cyan-400 text-xs">moves today</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Security Level</div>
            <div className="text-white font-bold text-lg">
              {safetyAndSecurity.security_level}
            </div>
            <div className="text-yellow-400 text-xs">MARSEC level</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeOperations;