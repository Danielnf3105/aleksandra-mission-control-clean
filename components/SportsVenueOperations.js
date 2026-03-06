// SportsVenueOperations.js - Sports Venue Operations Center & Stadium Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SportsVenueOperations = () => {
  const [venueStatus, setVenueStatus] = useState({
    operationalStatus: 'EVENT_ACTIVE',
    totalCapacity: 75000,
    currentAttendance: 68743,
    ticketsSold: 71456,
    gatesOpen: 12,
    gatesOperational: 12,
    securityLevel: 'NORMAL',
    weatherConditions: 'CLEAR',
    eventStatus: 'LIVE_GAME',
    eventProgress: 'QUARTER_3',
    kickoffTime: Date.now() - 2.5 * 60 * 60 * 1000,
    estimatedEndTime: Date.now() + 1 * 60 * 60 * 1000,
    concessionsRevenue: 847392, // USD today
    parkingOccupancy: 89.7, // percentage
    lastUpdate: Date.now()
  });

  const [gateOperations, setGateOperations] = useState([
    {
      gate_id: 'GATE_A_MAIN',
      name: 'Gate A - Main Entrance',
      sector: 'NORTH',
      status: 'OPERATIONAL',
      type: 'MAIN_ENTRY',
      current_queue: 23,
      average_wait_time: 2.3, // minutes
      throughput_rate: 145, // people per minute
      total_scanned: 8947,
      security_alerts: 0,
      staff_assigned: 12,
      scanners_operational: 8,
      scanners_total: 8,
      metal_detectors: 4,
      bag_checks: 156,
      accessibility: 'FULL',
      crowd_density: 'MODERATE'
    },
    {
      gate_id: 'GATE_B_SOUTH',
      name: 'Gate B - South Entrance',
      sector: 'SOUTH',
      status: 'OPERATIONAL',
      type: 'GENERAL_ADMISSION',
      current_queue: 67,
      average_wait_time: 4.7,
      throughput_rate: 112,
      total_scanned: 12456,
      security_alerts: 2,
      staff_assigned: 10,
      scanners_operational: 6,
      scanners_total: 6,
      metal_detectors: 3,
      bag_checks: 234,
      accessibility: 'LIMITED',
      crowd_density: 'HIGH'
    },
    {
      gate_id: 'GATE_C_VIP',
      name: 'Gate C - VIP/Premium',
      sector: 'WEST',
      status: 'OPERATIONAL',
      type: 'VIP_ENTRY',
      current_queue: 5,
      average_wait_time: 0.8,
      throughput_rate: 45,
      total_scanned: 567,
      security_alerts: 0,
      staff_assigned: 6,
      scanners_operational: 3,
      scanners_total: 3,
      metal_detectors: 2,
      bag_checks: 12,
      accessibility: 'FULL',
      crowd_density: 'LOW'
    },
    {
      gate_id: 'GATE_D_EAST',
      name: 'Gate D - East Entrance',
      sector: 'EAST',
      status: 'MAINTENANCE',
      type: 'GENERAL_ADMISSION',
      maintenance_issue: 'SCANNER_MALFUNCTION',
      eta_repair: Date.now() + 45 * 60 * 1000,
      staff_assigned: 4,
      scanners_operational: 2,
      scanners_total: 4,
      crowd_redirect: 'GATE_B_SOUTH'
    }
  ]);

  const [concessionOperations, setConcessionOperations] = useState([
    {
      location_id: 'CONCOURSE_A_LEVEL_1',
      name: 'Concourse A - Main Level',
      type: 'FOOD_COURT',
      status: 'BUSY',
      vendors: [
        {
          vendor_id: 'HOT_DOGS_01',
          name: 'Stadium Dogs',
          status: 'OPERATIONAL',
          queue_length: 23,
          average_wait: 4.2, // minutes
          sales_today: 8947, // USD
          staff: 4,
          supplies: 'ADEQUATE'
        },
        {
          vendor_id: 'BEER_GARDEN_01',
          name: 'Brew Stadium',
          status: 'OPERATIONAL',
          queue_length: 34,
          average_wait: 3.8,
          sales_today: 15647,
          staff: 6,
          supplies: 'LOW',
          supply_alert: 'BEER_KEGS_25_PERCENT'
        },
        {
          vendor_id: 'PIZZA_CORNER_01',
          name: 'Championship Pizza',
          status: 'OPERATIONAL',
          queue_length: 18,
          average_wait: 5.1,
          sales_today: 7834,
          staff: 5,
          supplies: 'ADEQUATE'
        }
      ],
      total_sales: 32428,
      pos_systems: 8,
      pos_operational: 7,
      digital_menu_boards: 'UPDATED'
    },
    {
      location_id: 'PREMIUM_CLUB_LEVEL',
      name: 'Premium Club Level',
      type: 'PREMIUM_DINING',
      status: 'OPERATIONAL',
      vendors: [
        {
          vendor_id: 'PREMIUM_GRILL',
          name: 'Champions Grill',
          status: 'OPERATIONAL',
          queue_length: 8,
          average_wait: 2.1,
          sales_today: 23456,
          staff: 8,
          supplies: 'ADEQUATE'
        }
      ],
      total_sales: 23456,
      pos_systems: 4,
      pos_operational: 4,
      digital_menu_boards: 'UPDATED'
    },
    {
      location_id: 'UPPER_DECK_NORTH',
      name: 'Upper Deck North',
      type: 'EXPRESS_STANDS',
      status: 'OPERATIONAL',
      vendors: [
        {
          vendor_id: 'EXPRESS_SNACKS_01',
          name: 'Quick Bites',
          status: 'OPERATIONAL',
          queue_length: 12,
          average_wait: 1.8,
          sales_today: 5647,
          staff: 3,
          supplies: 'ADEQUATE'
        }
      ],
      total_sales: 5647,
      pos_systems: 3,
      pos_operational: 3,
      digital_menu_boards: 'UPDATED'
    }
  ]);

  const [securityOperations, setSecurityOperations] = useState({
    command_center: {
      status: 'ACTIVE',
      operators_on_duty: 8,
      total_cameras: 456,
      operational_cameras: 447,
      facial_recognition: 'ENABLED',
      crowd_analytics: 'ACTIVE',
      threat_level: 'GREEN',
      incidents_today: 3,
      security_alerts_active: 1
    },
    crowd_management: {
      total_sectors: 12,
      high_density_sectors: 3,
      evacuation_routes: 'CLEAR',
      emergency_exits: 24,
      exits_operational: 24,
      crowd_flow_rate: 'NORMAL',
      bottlenecks_detected: 1,
      crowd_temperature: 'CALM'
    },
    access_control: {
      credential_scanners: 89,
      scanners_operational: 86,
      vip_access_points: 12,
      staff_badges_active: 567,
      contractor_badges: 89,
      vendor_badges: 34,
      unauthorized_attempts: 5,
      lockdown_capability: 'READY'
    },
    emergency_response: {
      medical_stations: 8,
      medical_staff: 24,
      ems_units_onsite: 4,
      fire_safety_teams: 6,
      bomb_detection_dogs: 2,
      emergency_communications: 'OPERATIONAL',
      evacuation_plan: 'ACTIVE',
      coordination_with_pd: 'ESTABLISHED'
    }
  });

  const [facilityManagement, setFacilityManagement] = useState({
    hvac_systems: {
      zones_total: 24,
      zones_operational: 23,
      zones_maintenance: 1,
      average_temperature: 23.4, // celsius
      field_temperature: 21.2,
      stands_temperature: 24.1,
      premium_areas_temp: 22.8,
      humidity: 47.3,
      air_quality: 'GOOD',
      energy_consumption: 2847.6 // kWh today
    },
    lighting_systems: {
      field_lighting: 'FULL_BRIGHTNESS',
      concourse_lighting: 'OPERATIONAL',
      emergency_lighting: 'STANDBY',
      scoreboard_systems: 'OPERATIONAL',
      video_boards: 4,
      video_boards_operational: 4,
      led_ribbons: 'OPERATIONAL',
      light_show_capability: 'READY'
    },
    field_conditions: {
      surface_type: 'HYBRID_GRASS',
      surface_quality: 'EXCELLENT',
      drainage_system: 'OPERATIONAL',
      irrigation_status: 'STANDBY',
      field_temperature: 21.2,
      soil_moisture: 'OPTIMAL',
      groundskeeping_crew: 12,
      last_maintenance: Date.now() - 12 * 60 * 60 * 1000
    },
    audio_visual: {
      pa_system_zones: 24,
      pa_operational: 24,
      sound_quality: 'EXCELLENT',
      video_production: 'LIVE',
      broadcast_feeds: 8,
      streaming_quality: '4K',
      commentary_booths: 12,
      camera_positions: 24
    }
  });

  const [eventMetrics, setEventMetrics] = useState([
    {
      id: 'attendance',
      name: 'Attendance Tracking',
      current: 68743,
      target: 72000,
      percentage: 95.5,
      trend: 'STABLE'
    },
    {
      id: 'concessions',
      name: 'Concessions Revenue',
      current: 847392,
      target: 900000,
      percentage: 94.1,
      trend: 'INCREASING'
    },
    {
      id: 'parking',
      name: 'Parking Utilization',
      current: 89.7,
      target: 95.0,
      percentage: 94.4,
      trend: 'STABLE'
    },
    {
      id: 'merchandise',
      name: 'Merchandise Sales',
      current: 234567,
      target: 280000,
      percentage: 83.8,
      trend: 'INCREASING'
    }
  ]);

  const [operationsHistory, setOperationsHistory] = useState([]);

  const generateOperationsHistory = () => {
    const data = [];
    const gameStart = new Date(Date.now() - 2.5 * 60 * 60 * 1000);
    
    for (let i = 0; i <= 30; i++) { // 30 intervals from game start
      const time = new Date(gameStart.getTime() + i * 5 * 60 * 1000); // 5-minute intervals
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        attendance: Math.floor(15000 + i * 1800 + Math.random() * 2000),
        concessions_revenue: Math.floor(i * 28000 + Math.random() * 15000),
        security_alerts: Math.floor(Math.random() * 3),
        crowd_density: 60 + Math.random() * 35,
        gate_throughput: i < 10 ? 200 + Math.random() * 150 : 50 + Math.random() * 30,
        facility_efficiency: 85 + Math.random() * 12
      });
    }
    return data;
  };

  useEffect(() => {
    setOperationsHistory(generateOperationsHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update venue status
      setVenueStatus(prev => ({
        ...prev,
        currentAttendance: Math.max(65000, Math.min(72000, prev.currentAttendance + Math.floor((Math.random() - 0.3) * 100))),
        concessionsRevenue: prev.concessionsRevenue + Math.floor(Math.random() * 5000),
        parkingOccupancy: Math.max(85.0, Math.min(95.0, prev.parkingOccupancy + (Math.random() - 0.5) * 1.0)),
        lastUpdate: Date.now()
      }));

      // Update gate operations
      setGateOperations(prev => prev.map(gate => {
        if (gate.status === 'OPERATIONAL') {
          return {
            ...gate,
            current_queue: Math.max(0, Math.min(100, gate.current_queue + Math.floor((Math.random() - 0.5) * 10))),
            total_scanned: gate.total_scanned + Math.floor(Math.random() * 20),
            average_wait_time: Math.max(0.5, Math.min(8.0, gate.average_wait_time + (Math.random() - 0.5) * 1.0))
          };
        }
        return gate;
      }));

    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'EVENT_ACTIVE':
      case 'OPERATIONAL':
      case 'LIVE_GAME':
      case 'ACTIVE':
      case 'CLEAR':
      case 'EXCELLENT':
      case 'GOOD':
      case 'OPTIMAL':
      case 'READY':
      case 'ENABLED':
      case 'GREEN':
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BUSY':
      case 'HIGH':
      case 'MODERATE':
      case 'STANDBY':
      case 'LIMITED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MAINTENANCE':
      case 'DOWN': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECREASING': return 'text-orange-400';
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
          🏟️ SPORTS VENUE OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatLargeNumber(venueStatus.currentAttendance)} Fans
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {venueStatus.eventProgress}
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(venueStatus.parkingOccupancy, 1)}% Parking
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Stadium Management & Crowd Control
          </div>
        </div>
      </div>

      {/* Venue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ATTENDANCE</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(venueStatus.currentAttendance)}
              </div>
              <div className="text-xs text-blue-300">
                of {formatLargeNumber(venueStatus.totalCapacity)} capacity ({formatNumber((venueStatus.currentAttendance / venueStatus.totalCapacity) * 100, 1)}%)
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">CONCESSIONS REVENUE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatCurrency(venueStatus.concessionsRevenue)}
              </div>
              <div className="text-xs text-green-300">
                Today's Total
              </div>
            </div>
            <div className="text-3xl opacity-60">🍔</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">EVENT STATUS</div>
              <div className="text-2xl font-bold text-purple-100">
                {venueStatus.eventProgress.replace(/_/g, ' ')}
              </div>
              <div className="text-xs text-purple-300">
                Live Game in Progress
              </div>
            </div>
            <div className="text-3xl opacity-60">🏈</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SECURITY LEVEL</div>
              <div className="text-2xl font-bold text-orange-100">
                {venueStatus.securityLevel}
              </div>
              <div className="text-xs text-orange-300">
                All Systems Secure
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>
      </div>

      {/* Gate Operations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚪 GATE OPERATIONS & CROWD FLOW
        </h3>
        <div className="space-y-3">
          {gateOperations.map((gate) => (
            <div key={gate.gate_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{gate.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(gate.status)}`}>
                    {gate.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {gate.type?.replace(/_/g, ' ')}
                  </span>
                  {gate.security_alerts > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-red-500 text-white animate-pulse">
                      {gate.security_alerts} ALERT{gate.security_alerts > 1 ? 'S' : ''}
                    </span>
                  )}
                </div>
              </div>

              {gate.status === 'OPERATIONAL' && (
                <>
                  <div className="text-xs mb-3">
                    <span className="text-gray-400">Queue: </span>
                    <span className={gate.current_queue > 50 ? 'text-red-400' : gate.current_queue > 25 ? 'text-yellow-400' : 'text-green-400'}>
                      {gate.current_queue} people
                    </span>
                    <span className="text-gray-400"> | Wait Time: </span>
                    <span className="text-purple-400">{formatNumber(gate.average_wait_time, 1)} min</span>
                    <span className="text-gray-400"> | Throughput: </span>
                    <span className="text-orange-400">{gate.throughput_rate} ppl/min</span>
                    <span className="text-gray-400"> | Scanned: </span>
                    <span className="text-cyan-400">{formatLargeNumber(gate.total_scanned)}</span>
                  </div>

                  <div className="text-xs mb-3">
                    <span className="text-gray-400">Staff: </span>
                    <span className="text-green-400">{gate.staff_assigned}</span>
                    <span className="text-gray-400"> | Scanners: </span>
                    <span className="text-blue-400">{gate.scanners_operational}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-purple-400">{gate.scanners_total}</span>
                    <span className="text-gray-400"> | Metal Detectors: </span>
                    <span className="text-orange-400">{gate.metal_detectors}</span>
                    <span className="text-gray-400"> | Bag Checks: </span>
                    <span className="text-yellow-400">{gate.bag_checks}</span>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400">Accessibility: </span>
                    <span className={gate.accessibility === 'FULL' ? 'text-green-400' : 'text-yellow-400'}>
                      {gate.accessibility}
                    </span>
                    <span className="text-gray-400"> | Crowd Density: </span>
                    <span className={`${getStatusColor(gate.crowd_density).split(' ')[0]}`}>
                      {gate.crowd_density}
                    </span>
                  </div>
                </>
              )}

              {gate.status === 'MAINTENANCE' && (
                <div className="text-xs">
                  <span className="text-gray-400">Issue: </span>
                  <span className="text-red-400">{gate.maintenance_issue?.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | ETA Repair: </span>
                  <span className="text-yellow-400">{formatTime(gate.eta_repair)}</span>
                  <span className="text-gray-400"> | Redirect to: </span>
                  <span className="text-cyan-400">{gate.crowd_redirect}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Concessions and Security */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Concession Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🍕 CONCESSION OPERATIONS & REVENUE
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {concessionOperations.map((location) => (
              <div key={location.location_id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{location.name}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(location.status)}`}>
                      {location.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {location.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Total Sales: </span>
                  <span className="text-green-400">{formatCurrency(location.total_sales)}</span>
                  <span className="text-gray-400"> | POS Systems: </span>
                  <span className="text-blue-400">{location.pos_operational}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-purple-400">{location.pos_systems}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Vendors:</span>
                </div>

                {location.vendors.map((vendor, index) => (
                  <div key={vendor.vendor_id} className="bg-gray-600 rounded p-2 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{vendor.name}</span>
                      <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(vendor.status)}`}>
                        {vendor.status}
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Queue: </span>
                      <span className={vendor.queue_length > 30 ? 'text-red-400' : vendor.queue_length > 15 ? 'text-yellow-400' : 'text-green-400'}>
                        {vendor.queue_length}
                      </span>
                      <span className="text-gray-400"> | Wait: </span>
                      <span className="text-purple-400">{formatNumber(vendor.average_wait, 1)} min</span>
                      <span className="text-gray-400"> | Sales: </span>
                      <span className="text-green-400">{formatCurrency(vendor.sales_today)}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Staff: </span>
                      <span className="text-cyan-400">{vendor.staff}</span>
                      <span className="text-gray-400"> | Supplies: </span>
                      <span className={vendor.supplies === 'LOW' ? 'text-yellow-400' : 'text-green-400'}>
                        {vendor.supplies}
                      </span>
                      {vendor.supply_alert && (
                        <>
                          <span className="text-gray-400"> | Alert: </span>
                          <span className="text-orange-400">{vendor.supply_alert.replace(/_/g, ' ')}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Security Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SECURITY OPERATIONS & MONITORING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Command Center</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">{securityOperations.command_center.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Operators:</span>
                <span className="text-blue-400">{securityOperations.command_center.operators_on_duty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cameras:</span>
                <span className="text-cyan-400">{securityOperations.command_center.operational_cameras}/{securityOperations.command_center.total_cameras}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Threat Level:</span>
                <span className="text-green-400">{securityOperations.command_center.threat_level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Incidents Today:</span>
                <span className="text-yellow-400">{securityOperations.command_center.incidents_today}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Crowd Management</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">High Density Sectors:</span>
                <span className="text-orange-400">{securityOperations.crowd_management.high_density_sectors}/{securityOperations.crowd_management.total_sectors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Evacuation Routes:</span>
                <span className="text-green-400">{securityOperations.crowd_management.evacuation_routes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emergency Exits:</span>
                <span className="text-blue-400">{securityOperations.crowd_management.exits_operational}/{securityOperations.crowd_management.emergency_exits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Crowd Temperature:</span>
                <span className="text-cyan-400">{securityOperations.crowd_management.crowd_temperature}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Emergency Response</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Medical Stations:</span>
                <span className="text-green-400">{securityOperations.emergency_response.medical_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Medical Staff:</span>
                <span className="text-blue-400">{securityOperations.emergency_response.medical_staff}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">EMS Units:</span>
                <span className="text-purple-400">{securityOperations.emergency_response.ems_units_onsite}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Police Coordination:</span>
                <span className="text-orange-400">{securityOperations.emergency_response.coordination_with_pd}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 VENUE OPERATIONS TRENDS (GAME DAY)
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
              dataKey="attendance"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Attendance"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="concessions_revenue" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Concessions Revenue ($)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="crowd_density" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Crowd Density %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="gate_throughput" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Gate Throughput/min"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="facility_efficiency" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Facility Efficiency %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="security_alerts" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Security Alerts"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Facility Management and Event Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Facility Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏟️ FACILITY MANAGEMENT & SYSTEMS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">HVAC Systems</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Zones Operational:</span>
                <span className="text-green-400">{facilityManagement.hvac_systems.zones_operational}/{facilityManagement.hvac_systems.zones_total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Field Temperature:</span>
                <span className="text-blue-400">{formatNumber(facilityManagement.hvac_systems.field_temperature, 1)}°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stands Temperature:</span>
                <span className="text-purple-400">{formatNumber(facilityManagement.hvac_systems.stands_temperature, 1)}°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Air Quality:</span>
                <span className="text-green-400">{facilityManagement.hvac_systems.air_quality}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Field Conditions</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Surface Quality:</span>
                <span className="text-green-400">{facilityManagement.field_conditions.surface_quality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Drainage System:</span>
                <span className="text-blue-400">{facilityManagement.field_conditions.drainage_system}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Soil Moisture:</span>
                <span className="text-cyan-400">{facilityManagement.field_conditions.soil_moisture}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Crew Size:</span>
                <span className="text-orange-400">{facilityManagement.field_conditions.groundskeeping_crew}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Audio/Visual</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">PA System:</span>
                <span className="text-green-400">{facilityManagement.audio_visual.pa_operational}/{facilityManagement.audio_visual.pa_system_zones}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Video Boards:</span>
                <span className="text-blue-400">{facilityManagement.audio_visual.video_boards_operational}/{facilityManagement.audio_visual.video_boards}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Broadcast Feeds:</span>
                <span className="text-purple-400">{facilityManagement.audio_visual.broadcast_feeds}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Camera Positions:</span>
                <span className="text-orange-400">{facilityManagement.audio_visual.camera_positions}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Metrics KPIs */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 EVENT PERFORMANCE METRICS & KPIs
          </h3>
          
          <div className="grid grid-cols-1 gap-4 mb-4">
            {eventMetrics.map((metric) => (
              <div key={metric.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{metric.name}</span>
                  <span className={`text-sm font-mono ${getTrendColor(metric.trend)}`}>
                    {metric.trend} {metric.trend === 'INCREASING' ? '↗️' : metric.trend === 'STABLE' ? '➡️' : '↘️'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-white">
                    {metric.id === 'concessions' || metric.id === 'merchandise' ? 
                      formatCurrency(metric.current) : 
                      metric.id === 'parking' ? 
                        `${formatNumber(metric.current, 1)}%` : 
                        formatLargeNumber(metric.current)
                    }
                  </span>
                  <span className="text-sm text-gray-400">
                    Target: {metric.id === 'concessions' || metric.id === 'merchandise' ? 
                      formatCurrency(metric.target) : 
                      metric.id === 'parking' ? 
                        `${formatNumber(metric.target, 1)}%` : 
                        formatLargeNumber(metric.target)
                    }
                  </span>
                </div>
                
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${metric.percentage >= 95 ? 'bg-green-400' : 
                                                     metric.percentage >= 80 ? 'bg-yellow-400' : 'bg-orange-400'}`}
                    style={{ width: `${Math.min(metric.percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {formatNumber(metric.percentage, 1)}% of target achieved
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Overall Event Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Event Duration:</span>
                <span className="text-green-400">{formatTime(venueStatus.kickoffTime)} - {formatTime(venueStatus.estimatedEndTime)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weather:</span>
                <span className="text-blue-400">{venueStatus.weatherConditions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tickets Sold:</span>
                <span className="text-purple-400">{formatLargeNumber(venueStatus.ticketsSold)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Gates Operational:</span>
                <span className="text-orange-400">{venueStatus.gatesOperational}/{venueStatus.gatesOpen}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsVenueOperations;