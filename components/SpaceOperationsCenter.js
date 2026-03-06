// SpaceOperationsCenter.js - Space Operations Center & Satellite Mission Control
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SpaceOperationsCenter = () => {
  const [spaceStatus, setSpaceStatus] = useState({
    operationalStatus: 'FLIGHT_OPERATIONS_ACTIVE',
    totalSatellites: 2847,
    satellitesOperational: 2734,
    totalGroundStations: 156,
    groundStationsOnline: 149,
    activeMissions: 47,
    totalSpacecraft: 89,
    spacecraftTracked: 85,
    dailyTelemetryPoints: 15847293, // data points received
    lastUpdate: Date.now()
  });

  const [satelliteFleet, setSatelliteFleet] = useState([
    {
      satellite_id: 'SAT_2847_COMM_A',
      name: 'CommSat Alpha',
      mission_type: 'COMMUNICATIONS',
      orbit_type: 'GEOSTATIONARY',
      altitude: 35786, // km
      inclination: 0.1, // degrees
      launch_date: '2023-03-15',
      status: 'OPERATIONAL',
      health_score: 94.7, // percentage
      power_level: 89.3, // percentage
      fuel_remaining: 67.8, // percentage
      signal_strength: -87.2, // dBm
      uptime: 1247.8, // hours
      last_contact: '2026-03-05T21:45:00Z',
      ground_track_lat: 12.4567,
      ground_track_lon: -45.2341,
      command_responses: 'NOMINAL'
    },
    {
      satellite_id: 'SAT_1456_EARTH_OBS',
      name: 'EarthView-7',
      mission_type: 'EARTH_OBSERVATION',
      orbit_type: 'SUN_SYNCHRONOUS',
      altitude: 705,
      inclination: 98.2,
      launch_date: '2024-08-22',
      status: 'OPERATIONAL',
      health_score: 97.1,
      power_level: 92.6,
      fuel_remaining: 84.2,
      signal_strength: -82.5,
      uptime: 5634.2,
      last_contact: '2026-03-05T21:47:00Z',
      ground_track_lat: 67.1234,
      ground_track_lon: 123.5678,
      command_responses: 'NOMINAL'
    },
    {
      satellite_id: 'SAT_3421_GPS_K',
      name: 'NavStar GPS III',
      mission_type: 'NAVIGATION',
      orbit_type: 'MEDIUM_EARTH_ORBIT',
      altitude: 20200,
      inclination: 55.0,
      launch_date: '2025-01-10',
      status: 'OPERATIONAL',
      health_score: 98.9,
      power_level: 95.1,
      fuel_remaining: 94.7,
      signal_strength: -78.9,
      uptime: 10234.7,
      last_contact: '2026-03-05T21:48:00Z',
      ground_track_lat: -23.4567,
      ground_track_lon: 67.8901,
      command_responses: 'NOMINAL'
    },
    {
      satellite_id: 'SAT_5678_WEATHER',
      name: 'MeteoSat Next',
      mission_type: 'WEATHER_MONITORING',
      orbit_type: 'POLAR',
      altitude: 850,
      inclination: 98.7,
      launch_date: '2025-06-03',
      status: 'COMMISSIONING',
      health_score: 91.2,
      power_level: 88.7,
      fuel_remaining: 98.9,
      signal_strength: -84.1,
      uptime: 2867.4,
      last_contact: '2026-03-05T21:46:00Z',
      ground_track_lat: 45.6789,
      ground_track_lon: -112.3456,
      command_responses: 'DELAYED'
    },
    {
      satellite_id: 'SAT_9876_SCIENCE',
      name: 'Deep Space Explorer',
      mission_type: 'SPACE_SCIENCE',
      orbit_type: 'HELIOCENTRIC',
      altitude: 149597870, // km (1 AU)
      inclination: 7.2,
      launch_date: '2022-11-15',
      status: 'MAINTENANCE',
      health_score: 78.4,
      power_level: 34.2,
      fuel_remaining: 23.8,
      signal_strength: -156.7,
      uptime: 28476.1,
      last_contact: '2026-03-05T19:23:00Z',
      ground_track_lat: null,
      ground_track_lon: null,
      command_responses: 'INTERMITTENT'
    }
  ]);

  const [groundStations, setGroundStations] = useState({
    primary_stations: {
      total_primary: 23,
      primary_online: 22,
      kennedy_space_center: 'OPERATIONAL',
      johnson_space_center: 'OPERATIONAL',
      goddard_space_flight: 'OPERATIONAL',
      jet_propulsion_lab: 'OPERATIONAL',
      vandenberg_space_force: 'OPERATIONAL',
      wallops_flight_facility: 'MAINTENANCE'
    },
    global_network: {
      north_america_stations: 45,
      na_stations_online: 43,
      europe_stations: 34,
      eu_stations_online: 32,
      asia_pacific_stations: 28,
      ap_stations_online: 26,
      africa_stations: 12,
      africa_stations_online: 11,
      antarctica_stations: 3,
      antarctica_online: 3
    },
    deep_space_network: {
      goldstone_complex: 'OPERATIONAL',
      madrid_complex: 'OPERATIONAL', 
      canberra_complex: 'OPERATIONAL',
      total_antennas: 12,
      antennas_available: 11,
      signal_acquisition: 'CONTINUOUS',
      tracking_coverage: 'GLOBAL_24_7'
    },
    communication_links: {
      s_band_links: 89,
      s_band_active: 84,
      x_band_links: 45,
      x_band_active: 43,
      ka_band_links: 23,
      ka_band_active: 22,
      laser_comm_links: 8,
      laser_active: 7
    }
  });

  const [missionControl, setMissionControl] = useState({
    flight_directors: {
      total_flight_directors: 12,
      directors_on_shift: 3,
      current_shift: 'EVENING_SHIFT',
      shift_change_time: '22:00:00Z',
      mission_elapsed_time: '147:23:45',
      next_major_event: 'ORBITAL_MANEUVER',
      event_countdown: '04:23:15'
    },
    flight_controllers: {
      flight_dynamics: 'STAFFED',
      guidance_navigation: 'STAFFED',
      electrical_power: 'STAFFED',
      environmental_control: 'STAFFED',
      communications: 'STAFFED',
      propulsion: 'STAFFED',
      thermal_control: 'STAFFED',
      attitude_control: 'STAFFED',
      payload_operations: 'STAFFED',
      mission_planning: 'STAFFED'
    },
    mission_phases: {
      launch_operations: 2,
      early_orbit_checkout: 3,
      nominal_operations: 38,
      end_of_mission: 4,
      deorbit_preparation: 0,
      total_active_phases: 47
    },
    anomaly_resolution: {
      open_anomalies: 7,
      high_priority: 2,
      medium_priority: 3,
      low_priority: 2,
      resolved_24h: 5,
      average_resolution_time: 4.7 // hours
    }
  });

  const [telemetryData, setTelemetryData] = useState({
    data_reception: {
      total_data_rate: 2847.5, // Mbps
      real_time_streams: 156,
      stored_data_dumps: 89,
      data_quality_score: 96.8, // percentage
      packet_loss_rate: 0.23, // percentage
      bit_error_rate: 1.2e-7,
      signal_to_noise_ratio: 23.4 // dB
    },
    command_transmission: {
      commands_sent_24h: 1247,
      successful_commands: 1231,
      failed_commands: 16,
      command_success_rate: 98.7, // percentage
      average_response_time: 1.34, // seconds
      emergency_commands: 0,
      automated_commands: 234,
      manual_commands: 1013
    },
    orbit_determination: {
      position_accuracy: 2.3, // meters
      velocity_accuracy: 0.012, // m/s
      tracking_data_points: 45892,
      orbit_prediction_horizon: 7, // days
      conjunction_assessments: 23,
      debris_avoidance_maneuvers: 0,
      ephemeris_updates: 156
    }
  });

  const [launchOperations, setLaunchOperations] = useState({
    upcoming_launches: [
      {
        mission_id: 'LAUNCH_2026_089',
        vehicle: 'Falcon 9 Block 5',
        payload: 'Starlink Group 15-7',
        launch_site: 'Cape Canaveral LC-39A',
        net_date: '2026-03-08T14:30:00Z',
        status: 'GO_FOR_LAUNCH',
        weather_probability: 85, // percentage favorable
        range_availability: 'CONFIRMED',
        payload_ready: 'ENCAPSULATED',
        vehicle_ready: 'FUELED',
        countdown_hold: false
      },
      {
        mission_id: 'LAUNCH_2026_090',
        vehicle: 'Atlas V 551',
        payload: 'NOAA Weather Satellite',
        launch_site: 'Vandenberg SFB SLC-3E',
        net_date: '2026-03-12T09:15:00Z',
        status: 'IN_PREPARATION',
        weather_probability: 72,
        range_availability: 'CONDITIONAL',
        payload_ready: 'INTEGRATION',
        vehicle_ready: 'ASSEMBLY',
        countdown_hold: false
      }
    ],
    launch_facilities: {
      kennedy_space_center: 'OPERATIONAL',
      cape_canaveral_sfs: 'OPERATIONAL',
      vandenberg_sfb: 'OPERATIONAL',
      wallops_flight_facility: 'MAINTENANCE',
      boca_chica_starbase: 'OPERATIONAL'
    },
    range_safety: {
      tracking_radars: 'OPERATIONAL',
      flight_termination_system: 'ARMED',
      debris_assessment: 'CLEAR',
      airspace_coordination: 'CONFIRMED',
      maritime_coordination: 'CONFIRMED'
    }
  });

  const [spaceDebris, setSpaceDebris] = useState({
    tracking_catalog: {
      total_objects: 34567,
      objects_tracked: 32891,
      debris_objects: 28456,
      operational_satellites: 4112,
      rocket_bodies: 1999,
      fragmentation_debris: 26457,
      mission_related_objects: 2110
    },
    collision_avoidance: {
      conjunction_assessments_active: 89,
      high_risk_conjunctions: 3,
      medium_risk_conjunctions: 12,
      low_risk_conjunctions: 74,
      probability_threshold: 1e-4,
      maneuver_recommendations: 2,
      executed_maneuvers: 0
    },
    space_situational_awareness: {
      radar_observations_24h: 156789,
      optical_observations_24h: 45234,
      new_objects_detected: 7,
      objects_reentered: 12,
      breakup_events: 0,
      close_approach_warnings: 23
    }
  });

  const [spaceHistory, setSpaceHistory] = useState([]);

  const generateSpaceHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of space operations
      const hour = i;
      
      // Space operations patterns (fairly constant but with some variation)
      const baseActivity = 0.9;
      const activityVariation = 1.0 + Math.sin(hour * Math.PI / 12) * 0.1; // Slight diurnal pattern
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        satellites_tracked: Math.floor(2600 + activityVariation * 150 + Math.random() * 100),
        telemetry_data_rate: 2500 + activityVariation * 400 + Math.random() * 200, // Mbps
        ground_station_coverage: 90 + activityVariation * 8 + Math.random() * 5,
        command_success_rate: 96 + Math.random() * 3,
        orbit_accuracy: 1.5 + Math.random() * 1.5, // meters
        communication_quality: 92 + activityVariation * 6 + Math.random() * 4,
        anomalies_detected: Math.floor(Math.random() * 4),
        debris_conjunctions: Math.floor(Math.random() * 3),
        launch_operations: Math.floor(Math.random() > 0.9 ? 1 : 0),
        deep_space_contacts: Math.floor(activityVariation * 3 + Math.random() * 2),
        power_efficiency: 88 + Math.random() * 8,
        mission_health_score: 93 + activityVariation * 5 + Math.random() * 4
      });
    }
    return data;
  };

  useEffect(() => {
    setSpaceHistory(generateSpaceHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update space status
      setSpaceStatus(prev => ({
        ...prev,
        satellitesOperational: Math.max(2600, Math.min(2847, prev.satellitesOperational + Math.floor((Math.random() - 0.5) * 8))),
        groundStationsOnline: Math.max(140, Math.min(156, prev.groundStationsOnline + Math.floor((Math.random() - 0.5) * 3))),
        spacecraftTracked: Math.max(80, Math.min(89, prev.spacecraftTracked + Math.floor((Math.random() - 0.5) * 2))),
        dailyTelemetryPoints: prev.dailyTelemetryPoints + Math.floor(Math.random() * 50000) + 25000,
        lastUpdate: Date.now()
      }));

      // Update satellite fleet
      setSatelliteFleet(prev => prev.map(sat => {
        if (sat.status === 'OPERATIONAL') {
          return {
            ...sat,
            health_score: Math.max(85.0, Math.min(99.0, sat.health_score + (Math.random() - 0.5) * 2.0)),
            power_level: Math.max(70.0, Math.min(100.0, sat.power_level + (Math.random() - 0.5) * 3.0)),
            signal_strength: Math.max(-200.0, Math.min(-70.0, sat.signal_strength + (Math.random() - 0.5) * 5.0)),
            uptime: sat.uptime + 0.5 + Math.random() * 0.1
          };
        }
        return sat;
      }));

      // Update telemetry data
      setTelemetryData(prev => ({
        ...prev,
        data_reception: {
          ...prev.data_reception,
          total_data_rate: Math.max(2000.0, Math.min(3500.0, prev.data_reception.total_data_rate + (Math.random() - 0.5) * 200.0)),
          data_quality_score: Math.max(90.0, Math.min(99.5, prev.data_reception.data_quality_score + (Math.random() - 0.5) * 1.0))
        },
        command_transmission: {
          ...prev.command_transmission,
          commands_sent_24h: prev.command_transmission.commands_sent_24h + Math.floor(Math.random() * 5),
          successful_commands: prev.command_transmission.successful_commands + Math.floor(Math.random() * 5)
        }
      }));

      // Update space debris tracking
      setSpaceDebris(prev => ({
        ...prev,
        tracking_catalog: {
          ...prev.tracking_catalog,
          objects_tracked: Math.max(30000, Math.min(35000, prev.tracking_catalog.objects_tracked + Math.floor((Math.random() - 0.5) * 20)))
        },
        collision_avoidance: {
          ...prev.collision_avoidance,
          conjunction_assessments_active: Math.max(70, Math.min(120, prev.collision_avoidance.conjunction_assessments_active + Math.floor((Math.random() - 0.5) * 6)))
        }
      }));

    }, 35000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'FLIGHT_OPERATIONS_ACTIVE':
      case 'OPERATIONAL':
      case 'STAFFED':
      case 'NOMINAL':
      case 'GO_FOR_LAUNCH':
      case 'CONFIRMED':
      case 'ENCAPSULATED':
      case 'FUELED':
      case 'ARMED':
      case 'CLEAR':
      case 'CONTINUOUS':
      case 'GLOBAL_24_7': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'COMMISSIONING':
      case 'IN_PREPARATION':
      case 'CONDITIONAL':
      case 'INTEGRATION':
      case 'ASSEMBLY':
      case 'DELAYED':
      case 'EVENING_SHIFT': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'INTERMITTENT': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFFLINE':
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-400';
    if (health >= 85) return 'text-yellow-400';
    if (health >= 70) return 'text-orange-400';
    return 'text-red-400';
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

  const formatScientific = (num) => {
    return num.toExponential(1);
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'N/A';
    return new Date(dateTimeString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCountdown = (timeString) => {
    if (!timeString) return 'N/A';
    return timeString;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚀 SPACE OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(spaceStatus.operationalStatus)}`}>
            {spaceStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {spaceStatus.satellitesOperational}/{spaceStatus.totalSatellites} Satellites
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {spaceStatus.groundStationsOnline}/{spaceStatus.totalGroundStations} Ground Stations
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {spaceStatus.activeMissions} Active Missions
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Satellite Mission Control & Deep Space Network
          </div>
        </div>
      </div>

      {/* Space Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">SATELLITES OPERATIONAL</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(spaceStatus.satellitesOperational)}
              </div>
              <div className="text-xs text-blue-300">
                Active spacecraft tracked
              </div>
            </div>
            <div className="text-3xl opacity-60">🛰️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">GROUND STATIONS</div>
              <div className="text-2xl font-bold text-green-100">
                {spaceStatus.groundStationsOnline}
              </div>
              <div className="text-xs text-green-300">
                Tracking facilities online
              </div>
            </div>
            <div className="text-3xl opacity-60">📡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ACTIVE MISSIONS</div>
              <div className="text-2xl font-bold text-purple-100">
                {spaceStatus.activeMissions}
              </div>
              <div className="text-xs text-purple-300">
                Ongoing operations
              </div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TELEMETRY DATA</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatLargeNumber(spaceStatus.dailyTelemetryPoints)}
              </div>
              <div className="text-xs text-orange-300">
                Data points received today
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>
      </div>

      {/* Satellite Fleet Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🛰️ SATELLITE FLEET STATUS & ORBITAL TRACKING
        </h3>
        <div className="space-y-3">
          {satelliteFleet.map((satellite) => (
            <div key={satellite.satellite_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{satellite.satellite_id}</div>
                  <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {satellite.mission_type.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(satellite.status)}`}>
                    {satellite.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(satellite.command_responses)}`}>
                    {satellite.command_responses}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {satellite.name}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Orbit: </span>
                <span className="text-cyan-400">{satellite.orbit_type.replace(/_/g, ' ')}</span>
                <span className="text-gray-400"> | Altitude: </span>
                <span className="text-green-400">{formatLargeNumber(satellite.altitude)} km</span>
                <span className="text-gray-400"> | Inclination: </span>
                <span className="text-purple-400">{formatNumber(satellite.inclination)}°</span>
                <span className="text-gray-400"> | Launch: </span>
                <span className="text-orange-400">{formatDate(satellite.launch_date)}</span>
              </div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Health: </span>
                <span className={`${getHealthColor(satellite.health_score)}`}>
                  {formatNumber(satellite.health_score)}%
                </span>
                <span className="text-gray-400"> | Power: </span>
                <span className="text-blue-400">{formatNumber(satellite.power_level)}%</span>
                <span className="text-gray-400"> | Fuel: </span>
                <span className="text-purple-400">{formatNumber(satellite.fuel_remaining)}%</span>
                <span className="text-gray-400"> | Signal: </span>
                <span className="text-orange-400">{formatNumber(satellite.signal_strength)} dBm</span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Uptime: </span>
                <span className="text-cyan-400">{formatLargeNumber(satellite.uptime)} hrs</span>
                <span className="text-gray-400"> | Last Contact: </span>
                <span className="text-yellow-400">{formatDateTime(satellite.last_contact)}</span>
                {satellite.ground_track_lat && (
                  <>
                    <span className="text-gray-400"> | Position: </span>
                    <span className="text-pink-400">{formatNumber(satellite.ground_track_lat, 4)}°, {formatNumber(satellite.ground_track_lon, 4)}°</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ground Station Network */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📡 GROUND STATION NETWORK & COMMUNICATIONS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Primary Stations</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Primary:</span>
                <span className="text-blue-400">{groundStations.primary_stations.primary_online}/{groundStations.primary_stations.total_primary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Kennedy SC:</span>
                <span className={`${getStatusColor(groundStations.primary_stations.kennedy_space_center)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.primary_stations.kennedy_space_center}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Johnson SC:</span>
                <span className={`${getStatusColor(groundStations.primary_stations.johnson_space_center)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.primary_stations.johnson_space_center}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Goddard SF:</span>
                <span className={`${getStatusColor(groundStations.primary_stations.goddard_space_flight)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.primary_stations.goddard_space_flight}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">JPL:</span>
                <span className={`${getStatusColor(groundStations.primary_stations.jet_propulsion_lab)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.primary_stations.jet_propulsion_lab}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vandenberg:</span>
                <span className={`${getStatusColor(groundStations.primary_stations.vandenberg_space_force)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.primary_stations.vandenberg_space_force}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wallops:</span>
                <span className={`${getStatusColor(groundStations.primary_stations.wallops_flight_facility)?.split(' ')[0] || 'text-orange-400'}`}>
                  {groundStations.primary_stations.wallops_flight_facility}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Global Network</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">North America:</span>
                <span className="text-blue-400">{groundStations.global_network.na_stations_online}/{groundStations.global_network.north_america_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Europe:</span>
                <span className="text-green-400">{groundStations.global_network.eu_stations_online}/{groundStations.global_network.europe_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Asia Pacific:</span>
                <span className="text-purple-400">{groundStations.global_network.ap_stations_online}/{groundStations.global_network.asia_pacific_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Africa:</span>
                <span className="text-orange-400">{groundStations.global_network.africa_stations_online}/{groundStations.global_network.africa_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Antarctica:</span>
                <span className="text-cyan-400">{groundStations.global_network.antarctica_online}/{groundStations.global_network.antarctica_stations}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Deep Space Network</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Goldstone:</span>
                <span className={`${getStatusColor(groundStations.deep_space_network.goldstone_complex)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.deep_space_network.goldstone_complex}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Madrid:</span>
                <span className={`${getStatusColor(groundStations.deep_space_network.madrid_complex)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.deep_space_network.madrid_complex}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Canberra:</span>
                <span className={`${getStatusColor(groundStations.deep_space_network.canberra_complex)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.deep_space_network.canberra_complex}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Antennas:</span>
                <span className="text-purple-400">{groundStations.deep_space_network.antennas_available}/{groundStations.deep_space_network.total_antennas}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Signal Acquisition:</span>
                <span className={`${getStatusColor(groundStations.deep_space_network.signal_acquisition)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.deep_space_network.signal_acquisition}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coverage:</span>
                <span className={`${getStatusColor(groundStations.deep_space_network.tracking_coverage)?.split(' ')[0] || 'text-green-400'}`}>
                  {groundStations.deep_space_network.tracking_coverage.replace(/_/g, ' ')}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Communication Links</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">S-Band Links:</span>
                <span className="text-blue-400">{groundStations.communication_links.s_band_active}/{groundStations.communication_links.s_band_links}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">X-Band Links:</span>
                <span className="text-green-400">{groundStations.communication_links.x_band_active}/{groundStations.communication_links.x_band_links}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Ka-Band Links:</span>
                <span className="text-purple-400">{groundStations.communication_links.ka_band_active}/{groundStations.communication_links.ka_band_links}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Laser Comm:</span>
                <span className="text-orange-400">{groundStations.communication_links.laser_active}/{groundStations.communication_links.laser_comm_links}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Space Operations Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 SPACE OPERATIONS PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={spaceHistory}>
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
              dataKey="telemetry_data_rate"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Telemetry Data Rate (Mbps)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="satellites_tracked" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Satellites Tracked"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="ground_station_coverage" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Ground Station Coverage %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="command_success_rate" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Command Success Rate %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="communication_quality" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Communication Quality %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="anomalies_detected" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Anomalies Detected"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="deep_space_contacts" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="Deep Space Contacts"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Mission Control and Launch Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mission Control */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 MISSION CONTROL & FLIGHT OPERATIONS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Flight Directors</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Directors on Shift:</span>
                  <span className="text-blue-400">{missionControl.flight_directors.directors_on_shift}/{missionControl.flight_directors.total_flight_directors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Shift:</span>
                  <span className={`${getStatusColor(missionControl.flight_directors.current_shift)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {missionControl.flight_directors.current_shift.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mission Elapsed:</span>
                  <span className="text-green-400">{missionControl.flight_directors.mission_elapsed_time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Next Event:</span>
                  <span className="text-purple-400">{missionControl.flight_directors.next_major_event.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Countdown:</span>
                  <span className="text-orange-400">{formatCountdown(missionControl.flight_directors.event_countdown)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Flight Controllers</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(missionControl.flight_controllers).map(([controller, status]) => (
                  <div key={controller} className="flex justify-between">
                    <span className="text-gray-400">{controller.replace(/_/g, ' ').substring(0, 12)}:</span>
                    <span className={`${getStatusColor(status)?.split(' ')[0] || 'text-green-400'}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Mission Phases</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Launch Operations:</span>
                  <span className="text-blue-400">{missionControl.mission_phases.launch_operations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Early Orbit:</span>
                  <span className="text-green-400">{missionControl.mission_phases.early_orbit_checkout}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nominal Operations:</span>
                  <span className="text-purple-400">{missionControl.mission_phases.nominal_operations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">End of Mission:</span>
                  <span className="text-orange-400">{missionControl.mission_phases.end_of_mission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Active:</span>
                  <span className="text-cyan-400">{missionControl.mission_phases.total_active_phases}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Anomaly Resolution</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Open Anomalies:</span>
                  <span className="text-blue-400">{missionControl.anomaly_resolution.open_anomalies}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">High Priority:</span>
                  <span className="text-red-400">{missionControl.anomaly_resolution.high_priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Medium Priority:</span>
                  <span className="text-yellow-400">{missionControl.anomaly_resolution.medium_priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Low Priority:</span>
                  <span className="text-green-400">{missionControl.anomaly_resolution.low_priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resolved 24h:</span>
                  <span className="text-purple-400">{missionControl.anomaly_resolution.resolved_24h}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Resolution:</span>
                  <span className="text-orange-400">{formatNumber(missionControl.anomaly_resolution.average_resolution_time)}h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚀 LAUNCH OPERATIONS & UPCOMING MISSIONS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Upcoming Launches</h4>
              <div className="space-y-3">
                {launchOperations.upcoming_launches.map((launch, index) => (
                  <div key={launch.mission_id} className="bg-gray-600 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-white">{launch.mission_id}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(launch.status)}`}>
                        {launch.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <div className="text-xs mb-1">
                      <span className="text-gray-400">Vehicle: </span>
                      <span className="text-blue-400">{launch.vehicle}</span>
                      <span className="text-gray-400"> | Payload: </span>
                      <span className="text-green-400">{launch.payload}</span>
                    </div>
                    <div className="text-xs mb-1">
                      <span className="text-gray-400">Site: </span>
                      <span className="text-purple-400">{launch.launch_site}</span>
                      <span className="text-gray-400"> | NET: </span>
                      <span className="text-orange-400">{formatDateTime(launch.net_date)}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Weather: </span>
                      <span className="text-cyan-400">{launch.weather_probability}%</span>
                      <span className="text-gray-400"> | Range: </span>
                      <span className={`${getStatusColor(launch.range_availability)?.split(' ')[0] || 'text-green-400'}`}>
                        {launch.range_availability}
                      </span>
                      <span className="text-gray-400"> | Vehicle: </span>
                      <span className={`${getStatusColor(launch.vehicle_ready)?.split(' ')[0] || 'text-green-400'}`}>
                        {launch.vehicle_ready}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Launch Facilities</h4>
              <div className="space-y-2 text-xs">
                {Object.entries(launchOperations.launch_facilities).map(([facility, status]) => (
                  <div key={facility} className="flex justify-between">
                    <span className="text-gray-400">{facility.replace(/_/g, ' ').substring(0, 18)}:</span>
                    <span className={`${getStatusColor(status)?.split(' ')[0] || 'text-green-400'}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Range Safety</h4>
              <div className="space-y-2 text-xs">
                {Object.entries(launchOperations.range_safety).map(([system, status]) => (
                  <div key={system} className="flex justify-between">
                    <span className="text-gray-400">{system.replace(/_/g, ' ').substring(0, 18)}:</span>
                    <span className={`${getStatusColor(status)?.split(' ')[0] || 'text-green-400'}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Data and Space Debris Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Telemetry Data */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 TELEMETRY DATA & ORBITAL TRACKING
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Data Reception</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Rate:</span>
                  <span className="text-blue-400">{formatNumber(telemetryData.data_reception.total_data_rate)} Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Real-time Streams:</span>
                  <span className="text-green-400">{telemetryData.data_reception.real_time_streams}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Quality:</span>
                  <span className="text-purple-400">{formatNumber(telemetryData.data_reception.data_quality_score)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Packet Loss:</span>
                  <span className="text-orange-400">{formatNumber(telemetryData.data_reception.packet_loss_rate)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bit Error Rate:</span>
                  <span className="text-cyan-400">{formatScientific(telemetryData.data_reception.bit_error_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SNR:</span>
                  <span className="text-yellow-400">{formatNumber(telemetryData.data_reception.signal_to_noise_ratio)} dB</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Command Transmission</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Commands Sent:</span>
                  <span className="text-blue-400">{telemetryData.command_transmission.commands_sent_24h}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Successful:</span>
                  <span className="text-green-400">{telemetryData.command_transmission.successful_commands}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Failed:</span>
                  <span className="text-red-400">{telemetryData.command_transmission.failed_commands}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Success Rate:</span>
                  <span className="text-purple-400">{formatNumber(telemetryData.command_transmission.command_success_rate)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-orange-400">{formatNumber(telemetryData.command_transmission.average_response_time)}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Automated:</span>
                  <span className="text-cyan-400">{telemetryData.command_transmission.automated_commands}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Orbit Determination</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Position Accuracy:</span>
                  <span className="text-blue-400">{formatNumber(telemetryData.orbit_determination.position_accuracy)}m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Velocity Accuracy:</span>
                  <span className="text-green-400">{formatNumber(telemetryData.orbit_determination.velocity_accuracy, 3)} m/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tracking Points:</span>
                  <span className="text-purple-400">{formatLargeNumber(telemetryData.orbit_determination.tracking_data_points)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prediction Horizon:</span>
                  <span className="text-orange-400">{telemetryData.orbit_determination.orbit_prediction_horizon} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Conjunctions:</span>
                  <span className="text-cyan-400">{telemetryData.orbit_determination.conjunction_assessments}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ephemeris Updates:</span>
                  <span className="text-yellow-400">{telemetryData.orbit_determination.ephemeris_updates}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Debris Tracking */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SPACE DEBRIS TRACKING & COLLISION AVOIDANCE
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Tracking Catalog</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Objects:</span>
                  <span className="text-blue-400">{formatLargeNumber(spaceDebris.tracking_catalog.total_objects)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Objects Tracked:</span>
                  <span className="text-green-400">{formatLargeNumber(spaceDebris.tracking_catalog.objects_tracked)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Debris Objects:</span>
                  <span className="text-red-400">{formatLargeNumber(spaceDebris.tracking_catalog.debris_objects)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Operational Sats:</span>
                  <span className="text-purple-400">{formatLargeNumber(spaceDebris.tracking_catalog.operational_satellites)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rocket Bodies:</span>
                  <span className="text-orange-400">{formatLargeNumber(spaceDebris.tracking_catalog.rocket_bodies)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fragmentation:</span>
                  <span className="text-cyan-400">{formatLargeNumber(spaceDebris.tracking_catalog.fragmentation_debris)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Collision Avoidance</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Assessments:</span>
                  <span className="text-blue-400">{spaceDebris.collision_avoidance.conjunction_assessments_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">High Risk:</span>
                  <span className="text-red-400">{spaceDebris.collision_avoidance.high_risk_conjunctions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Medium Risk:</span>
                  <span className="text-yellow-400">{spaceDebris.collision_avoidance.medium_risk_conjunctions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Low Risk:</span>
                  <span className="text-green-400">{spaceDebris.collision_avoidance.low_risk_conjunctions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Probability Threshold:</span>
                  <span className="text-purple-400">{formatScientific(spaceDebris.collision_avoidance.probability_threshold)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Recommendations:</span>
                  <span className="text-orange-400">{spaceDebris.collision_avoidance.maneuver_recommendations}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Space Situational Awareness</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Radar Observations:</span>
                  <span className="text-blue-400">{formatLargeNumber(spaceDebris.space_situational_awareness.radar_observations_24h)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Optical Observations:</span>
                  <span className="text-green-400">{formatLargeNumber(spaceDebris.space_situational_awareness.optical_observations_24h)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">New Objects:</span>
                  <span className="text-purple-400">{spaceDebris.space_situational_awareness.new_objects_detected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reentries:</span>
                  <span className="text-orange-400">{spaceDebris.space_situational_awareness.objects_reentered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Breakup Events:</span>
                  <span className="text-red-400">{spaceDebris.space_situational_awareness.breakup_events}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Close Approach:</span>
                  <span className="text-yellow-400">{spaceDebris.space_situational_awareness.close_approach_warnings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceOperationsCenter;