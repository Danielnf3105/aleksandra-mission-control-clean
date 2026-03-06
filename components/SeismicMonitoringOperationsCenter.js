// SeismicMonitoringOperationsCenter.js - Seismic Monitoring Operations Center & Earthquake Early Warning Systems
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SeismicMonitoringOperationsCenter = () => {
  const [seismicStatus, setSeismicStatus] = useState({
    operationalStatus: 'GLOBAL_MONITORING_ACTIVE',
    totalStations: 389,
    stationsOnline: 367,
    totalSeismographs: 1247,
    seismographsOperational: 1189,
    activeEarthquakes: 12,
    recentLargeEvents: 3, // magnitude > 5.0
    tsunamiWatchLevel: 'NORMAL',
    earlyWarningSystemStatus: 'OPERATIONAL',
    lastUpdate: Date.now()
  });

  const [earthquakeEvents, setEarthquakeEvents] = useState([
    {
      event_id: 'EQ_2026030521_001',
      magnitude: 6.2,
      depth: 12.4, // km
      location: 'Pacific Ocean, 180 km SW of Los Angeles',
      latitude: 33.2156,
      longitude: -119.3421,
      origin_time: '2026-03-05T21:15:47Z',
      intensity: 'MODERATE',
      felt_reports: 847,
      tsunami_potential: 'LOCAL',
      early_warning_issued: true,
      warning_lead_time: 23, // seconds
      affected_population: 245000,
      status: 'MONITORING',
      data_quality: 'EXCELLENT'
    },
    {
      event_id: 'EQ_2026030520_002',
      magnitude: 4.8,
      depth: 8.7,
      location: 'San Andreas Fault, 45 km E of San Francisco',
      latitude: 37.7749,
      longitude: -122.0194,
      origin_time: '2026-03-05T20:42:13Z',
      intensity: 'LIGHT',
      felt_reports: 234,
      tsunami_potential: 'NONE',
      early_warning_issued: true,
      warning_lead_time: 12,
      affected_population: 89000,
      status: 'ANALYZED',
      data_quality: 'GOOD'
    },
    {
      event_id: 'EQ_2026030519_003',
      magnitude: 7.1,
      depth: 35.2,
      location: 'Alaska Peninsula, 230 km SW of Anchorage',
      latitude: 60.1234,
      longitude: -153.7890,
      origin_time: '2026-03-05T19:28:05Z',
      intensity: 'STRONG',
      felt_reports: 1567,
      tsunami_potential: 'REGIONAL',
      early_warning_issued: true,
      warning_lead_time: 45,
      affected_population: 125000,
      status: 'TSUNAMI_WARNING_ISSUED',
      data_quality: 'EXCELLENT'
    }
  ]);

  const [seismographNetworks, setSeismographNetworks] = useState({
    global_seismographic_network: {
      gsn_stations: 150,
      stations_operational: 143,
      data_completeness: 97.8, // percentage
      real_time_streams: 'ACTIVE',
      broadband_sensors: 150,
      short_period_sensors: 89,
      strong_motion_sensors: 67
    },
    regional_networks: {
      california_integrated_network: {
        stations: 89,
        online: 84,
        shakealert_enabled: true,
        mmi_threshold: 3.0,
        coverage_area: 'CALIFORNIA_OREGON_WASHINGTON'
      },
      pacific_northwest_network: {
        stations: 67,
        online: 63,
        volcano_monitoring: 'ACTIVE',
        cascade_volcanoes: 15,
        landslide_monitoring: 'ENABLED'
      },
      alaska_seismic_network: {
        stations: 45,
        online: 42,
        tsunami_detection: 'ACTIVE',
        arctic_coverage: 'ENHANCED',
        permafrost_monitoring: 'INCLUDED'
      }
    },
    ocean_bottom_sensors: {
      dart_buoys_deployed: 39,
      dart_buoys_operational: 36,
      ocean_bottom_seismometers: 28,
      obs_functional: 25,
      deep_ocean_coverage: 'PACIFIC_ATLANTIC',
      data_transmission: 'SATELLITE_RELAY'
    }
  });

  const [tsunamiWarningSystem, setTsunamiWarningSystem] = useState({
    warning_centers: {
      pacific_tsunami_warning_center: {
        status: 'OPERATIONAL',
        coverage: 'PACIFIC_BASIN',
        alert_level: 'NORMAL',
        active_warnings: 1,
        monitored_sources: 847,
        last_bulletin: '2026-03-05T21:20:00Z'
      },
      national_tsunami_warning_centers: {
        usa_ntwc: 'OPERATIONAL',
        japan_jma: 'OPERATIONAL',
        australia_jatwc: 'OPERATIONAL',
        chile_shoa: 'OPERATIONAL',
        russia_sakhalin: 'OPERATIONAL',
        indonesia_bmkg: 'OPERATIONAL'
      }
    },
    detection_systems: {
      tide_gauges_global: 234,
      tide_gauges_reporting: 219,
      coastal_buoys: 89,
      buoys_operational: 82,
      deep_ocean_buoys: 39,
      deep_ocean_active: 36,
      satellite_altimetry: 'OPERATIONAL'
    },
    warning_dissemination: {
      emergency_alert_system: 'ACTIVE',
      wireless_emergency_alerts: 'ENABLED',
      social_media_integration: 'AUTOMATED',
      siren_networks: 156,
      sirens_functional: 148,
      radio_tv_integration: 'REAL_TIME',
      mobile_app_users: 23400000
    }
  });

  const [earthquakePredictionModels, setEarthquakePredictionModels] = useState({
    machine_learning_models: {
      neural_network_prediction: {
        model_accuracy: 87.4, // percentage
        training_data_years: 45,
        prediction_horizon: '72_HOURS',
        confidence_threshold: 85.0,
        false_positive_rate: 12.6, // percentage
        last_model_update: '2026-03-01'
      },
      statistical_analysis: {
        gutenberg_richter_law: 'APPLIED',
        aftershock_probability: 'CALCULATED',
        foreshock_detection: 'ENABLED',
        clustering_analysis: 'ACTIVE',
        precursor_monitoring: 'CONTINUOUS'
      }
    },
    geological_monitoring: {
      ground_deformation: {
        gps_stations: 234,
        stations_active: 221,
        insar_satellites: 8,
        satellites_operational: 7,
        tiltmeters: 89,
        tiltmeters_functional: 84,
        strain_meters: 45,
        strain_meters_active: 42
      },
      geochemical_monitoring: {
        groundwater_monitoring: 67,
        wells_operational: 61,
        gas_emission_sensors: 34,
        gas_sensors_active: 31,
        radon_detectors: 156,
        radon_detectors_online: 147,
        temperature_monitoring: 'CONTINUOUS'
      }
    }
  });

  const [earlyWarningPerformance, setEarlyWarningPerformance] = useState({
    shakealert_system: {
      total_alerts_issued: 1247,
      successful_alerts: 1189,
      false_alarms: 58,
      missed_events: 23,
      average_lead_time: 18.7, // seconds
      maximum_lead_time: 67, // seconds
      minimum_magnitude: 3.0,
      detection_accuracy: 95.3, // percentage
      public_adoption_rate: 68.2 // percentage
    },
    tsunami_warnings: {
      warnings_issued_2026: 12,
      warnings_accurate: 11,
      false_warnings: 1,
      evacuation_success_rate: 89.7, // percentage
      warning_lead_time_avg: 34.2, // minutes
      coastal_coverage: 'GLOBAL',
      population_protected: 245000000
    },
    emergency_response: {
      first_responder_alerts: 'AUTOMATED',
      hospital_notifications: 'REAL_TIME',
      infrastructure_shutdowns: 'TRIGGERED',
      transportation_alerts: 'ACTIVE',
      utility_company_alerts: 'ENABLED',
      social_media_reach: 89400000 // followers/users reached
    }
  });

  const [geologicalHazards, setGeologicalHazards] = useState([
    {
      hazard_id: 'GH_001_SAN_ANDREAS',
      hazard_type: 'FAULT_SYSTEM',
      location: 'San Andreas Fault System',
      risk_level: 'HIGH',
      probability_30yr: 72.0, // percentage chance in 30 years
      expected_magnitude: '7.5_OR_GREATER',
      last_major_event: '1906-04-18',
      monitoring_stations: 89,
      stations_active: 84,
      current_status: 'ELEVATED_MONITORING',
      strain_accumulation: 'DETECTED',
      precursor_indicators: ['MICROSEISMIC_ACTIVITY', 'GROUND_DEFORMATION']
    },
    {
      hazard_id: 'GH_002_CASCADIA',
      hazard_type: 'SUBDUCTION_ZONE',
      location: 'Cascadia Subduction Zone',
      risk_level: 'HIGH',
      probability_30yr: 37.0,
      expected_magnitude: '9.0_OR_GREATER',
      last_major_event: '1700-01-26',
      monitoring_stations: 67,
      stations_active: 63,
      current_status: 'NORMAL_MONITORING',
      strain_accumulation: 'GRADUAL',
      precursor_indicators: ['SLOW_SLIP_EVENTS', 'TREMOR_ACTIVITY']
    },
    {
      hazard_id: 'GH_003_YELLOWSTONE',
      hazard_type: 'VOLCANIC_CALDERA',
      location: 'Yellowstone Caldera',
      risk_level: 'MODERATE',
      probability_30yr: 0.01,
      expected_magnitude: '8.0_PLUS_VEI_7',
      last_major_event: '640000_BC',
      monitoring_stations: 34,
      stations_active: 32,
      current_status: 'NORMAL_BACKGROUND',
      strain_accumulation: 'MINIMAL',
      precursor_indicators: ['HYDROTHERMAL_CHANGES', 'GROUND_UPLIFT']
    }
  ]);

  const [seismicHistory, setSeismicHistory] = useState([]);

  const generateSeismicHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of seismic monitoring
      const hour = i;
      
      // Seismic activity patterns (generally random but with some clustering)
      const baseSeismicity = 0.5;
      const activityMultiplier = 1.0 + Math.sin(hour * Math.PI / 12) * 0.3; // Slight diurnal pattern
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        earthquake_count: Math.floor(baseSeismicity * activityMultiplier * (2 + Math.random() * 4)),
        average_magnitude: 2.1 + Math.random() * 1.8,
        maximum_magnitude: 3.5 + Math.random() * 2.5,
        network_completeness: 92 + Math.random() * 7,
        data_quality_score: 88 + Math.random() * 10,
        early_warnings_issued: Math.floor(Math.random() * 3),
        felt_reports_received: Math.floor(Math.random() * 50),
        tsunami_alerts: Math.floor(Math.random() > 0.95 ? 1 : 0),
        station_health: 94 + Math.random() * 5,
        processing_latency: 1.2 + Math.random() * 0.8, // seconds
        false_detection_rate: Math.random() * 2 // percentage
      });
    }
    return data;
  };

  useEffect(() => {
    setSeismicHistory(generateSeismicHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update seismic status
      setSeismicStatus(prev => ({
        ...prev,
        stationsOnline: Math.max(340, Math.min(389, prev.stationsOnline + Math.floor((Math.random() - 0.5) * 4))),
        seismographsOperational: Math.max(1100, Math.min(1247, prev.seismographsOperational + Math.floor((Math.random() - 0.5) * 8))),
        activeEarthquakes: Math.max(0, Math.min(50, prev.activeEarthquakes + Math.floor((Math.random() - 0.7) * 3))),
        recentLargeEvents: Math.max(0, Math.min(8, prev.recentLargeEvents + Math.floor((Math.random() - 0.9) * 2))),
        lastUpdate: Date.now()
      }));

      // Update seismograph networks
      setSeismographNetworks(prev => ({
        ...prev,
        global_seismographic_network: {
          ...prev.global_seismographic_network,
          stations_operational: Math.max(135, Math.min(150, prev.global_seismographic_network.stations_operational + Math.floor((Math.random() - 0.5) * 3))),
          data_completeness: Math.max(90.0, Math.min(99.5, prev.global_seismographic_network.data_completeness + (Math.random() - 0.5) * 1.0))
        },
        ocean_bottom_sensors: {
          ...prev.ocean_bottom_sensors,
          dart_buoys_operational: Math.max(32, Math.min(39, prev.ocean_bottom_sensors.dart_buoys_operational + Math.floor((Math.random() - 0.5) * 2))),
          obs_functional: Math.max(20, Math.min(28, prev.ocean_bottom_sensors.obs_functional + Math.floor((Math.random() - 0.5) * 2)))
        }
      }));

      // Update earthquake prediction models
      setEarthquakePredictionModels(prev => ({
        ...prev,
        machine_learning_models: {
          ...prev.machine_learning_models,
          neural_network_prediction: {
            ...prev.machine_learning_models.neural_network_prediction,
            model_accuracy: Math.max(80.0, Math.min(95.0, prev.machine_learning_models.neural_network_prediction.model_accuracy + (Math.random() - 0.5) * 1.0))
          }
        }
      }));

    }, 35000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'GLOBAL_MONITORING_ACTIVE':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'EXCELLENT':
      case 'ENABLED':
      case 'AUTOMATED':
      case 'REAL_TIME':
      case 'CONTINUOUS':
      case 'APPLIED':
      case 'CALCULATED':
      case 'FUNCTIONAL':
      case 'SATELLITE_RELAY':
      case 'TRIGGERED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'NORMAL':
      case 'LOCAL':
      case 'LIGHT':
      case 'GOOD':
      case 'NORMAL_MONITORING':
      case 'NORMAL_BACKGROUND':
      case 'GRADUAL':
      case 'MINIMAL': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MODERATE':
      case 'MONITORING':
      case 'ANALYZED':
      case 'REGIONAL':
      case 'ELEVATED_MONITORING':
      case 'DETECTED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'STRONG':
      case 'TSUNAMI_WARNING_ISSUED':
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'NONE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const getMagnitudeColor = (magnitude) => {
    if (magnitude < 3.0) return 'text-green-400';
    if (magnitude < 4.0) return 'text-yellow-400';
    if (magnitude < 5.0) return 'text-orange-400';
    if (magnitude < 6.0) return 'text-red-400';
    if (magnitude < 7.0) return 'text-purple-400';
    return 'text-pink-400';
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

  const formatDuration = (seconds) => {
    if (!seconds) return 'N/A';
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🌏 SEISMIC MONITORING OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(seismicStatus.operationalStatus)}`}>
            {seismicStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {seismicStatus.stationsOnline}/{seismicStatus.totalStations} Stations
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(seismicStatus.earlyWarningSystemStatus)} bg-gray-700/50`}>
            EEW {seismicStatus.earlyWarningSystemStatus}
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {seismicStatus.activeEarthquakes} Active Events
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Earthquake Early Warning & Tsunami Detection
          </div>
        </div>
      </div>

      {/* Seismic Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ACTIVE EARTHQUAKES</div>
              <div className="text-2xl font-bold text-blue-100">
                {seismicStatus.activeEarthquakes}
              </div>
              <div className="text-xs text-blue-300">
                Currently monitoring
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SEISMOGRAPH NETWORK</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(seismicStatus.seismographsOperational)}
              </div>
              <div className="text-xs text-green-300">
                Sensors operational
              </div>
            </div>
            <div className="text-3xl opacity-60">📡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">LARGE EVENTS (M&gt;5)</div>
              <div className="text-2xl font-bold text-purple-100">
                {seismicStatus.recentLargeEvents}
              </div>
              <div className="text-xs text-purple-300">
                Recent significant events
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TSUNAMI WATCH</div>
              <div className="text-2xl font-bold text-orange-100">
                {seismicStatus.tsunamiWatchLevel}
              </div>
              <div className="text-xs text-orange-300">
                Alert status level
              </div>
            </div>
            <div className="text-3xl opacity-60">🌊</div>
          </div>
        </div>
      </div>

      {/* Recent Earthquake Events */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔺 RECENT EARTHQUAKE EVENTS & EARLY WARNINGS
        </h3>
        <div className="space-y-3">
          {earthquakeEvents.map((event) => (
            <div key={event.event_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{event.event_id}</div>
                  <span className={`text-lg font-bold px-2 py-1 rounded ${getMagnitudeColor(event.magnitude)}`}>
                    M{formatNumber(event.magnitude)}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(event.intensity)}`}>
                    {event.intensity}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(event.status)}`}>
                    {event.status.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {formatDateTime(event.origin_time)}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Location: </span>
                <span className="text-cyan-400">{event.location}</span>
                <span className="text-gray-400"> | Depth: </span>
                <span className="text-green-400">{formatNumber(event.depth)} km</span>
                <span className="text-gray-400"> | Felt Reports: </span>
                <span className="text-purple-400">{event.felt_reports}</span>
              </div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Coordinates: </span>
                <span className="text-blue-400">{formatNumber(event.latitude, 4)}°, {formatNumber(event.longitude, 4)}°</span>
                <span className="text-gray-400"> | Tsunami Potential: </span>
                <span className={`${getStatusColor(event.tsunami_potential)?.split(' ')[0] || 'text-gray-400'}`}>
                  {event.tsunami_potential}
                </span>
                <span className="text-gray-400"> | Affected Population: </span>
                <span className="text-yellow-400">{formatLargeNumber(event.affected_population)}</span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Early Warning: </span>
                <span className={`${event.early_warning_issued ? 'text-green-400' : 'text-red-400'}`}>
                  {event.early_warning_issued ? 'ISSUED' : 'NOT_ISSUED'}
                </span>
                {event.early_warning_issued && (
                  <>
                    <span className="text-gray-400"> | Lead Time: </span>
                    <span className="text-orange-400">{event.warning_lead_time}s</span>
                  </>
                )}
                <span className="text-gray-400"> | Data Quality: </span>
                <span className={`${getStatusColor(event.data_quality)?.split(' ')[0] || 'text-green-400'}`}>
                  {event.data_quality}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seismograph Networks */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📡 SEISMOGRAPH NETWORKS & MONITORING INFRASTRUCTURE
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Global Seismographic Network</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">GSN Stations:</span>
                <span className="text-blue-400">{seismographNetworks.global_seismographic_network.stations_operational}/{seismographNetworks.global_seismographic_network.gsn_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Completeness:</span>
                <span className="text-green-400">{formatNumber(seismographNetworks.global_seismographic_network.data_completeness)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Real-time Streams:</span>
                <span className={`${getStatusColor(seismographNetworks.global_seismographic_network.real_time_streams)?.split(' ')[0] || 'text-green-400'}`}>
                  {seismographNetworks.global_seismographic_network.real_time_streams}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Broadband Sensors:</span>
                <span className="text-purple-400">{seismographNetworks.global_seismographic_network.broadband_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Short Period:</span>
                <span className="text-orange-400">{seismographNetworks.global_seismographic_network.short_period_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Strong Motion:</span>
                <span className="text-cyan-400">{seismographNetworks.global_seismographic_network.strong_motion_sensors}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Regional Networks</h4>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-cyan-400 mb-1">California Integrated Network</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stations Online:</span>
                    <span className="text-green-400">{seismographNetworks.regional_networks.california_integrated_network.online}/{seismographNetworks.regional_networks.california_integrated_network.stations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ShakeAlert:</span>
                    <span className={`${seismographNetworks.regional_networks.california_integrated_network.shakealert_enabled ? 'text-green-400' : 'text-red-400'}`}>
                      {seismographNetworks.regional_networks.california_integrated_network.shakealert_enabled ? 'ENABLED' : 'DISABLED'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">MMI Threshold:</span>
                    <span className="text-orange-400">{seismographNetworks.regional_networks.california_integrated_network.mmi_threshold}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-cyan-400 mb-1">Pacific Northwest Network</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stations Online:</span>
                    <span className="text-green-400">{seismographNetworks.regional_networks.pacific_northwest_network.online}/{seismographNetworks.regional_networks.pacific_northwest_network.stations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volcano Monitor:</span>
                    <span className={`${getStatusColor(seismographNetworks.regional_networks.pacific_northwest_network.volcano_monitoring)?.split(' ')[0] || 'text-green-400'}`}>
                      {seismographNetworks.regional_networks.pacific_northwest_network.volcano_monitoring}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cascade Volcanoes:</span>
                    <span className="text-purple-400">{seismographNetworks.regional_networks.pacific_northwest_network.cascade_volcanoes}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-cyan-400 mb-1">Alaska Seismic Network</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stations Online:</span>
                    <span className="text-green-400">{seismographNetworks.regional_networks.alaska_seismic_network.online}/{seismographNetworks.regional_networks.alaska_seismic_network.stations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tsunami Detection:</span>
                    <span className={`${getStatusColor(seismographNetworks.regional_networks.alaska_seismic_network.tsunami_detection)?.split(' ')[0] || 'text-green-400'}`}>
                      {seismographNetworks.regional_networks.alaska_seismic_network.tsunami_detection}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Arctic Coverage:</span>
                    <span className="text-orange-400">{seismographNetworks.regional_networks.alaska_seismic_network.arctic_coverage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Ocean Bottom Sensors</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">DART Buoys:</span>
                <span className="text-blue-400">{seismographNetworks.ocean_bottom_sensors.dart_buoys_operational}/{seismographNetworks.ocean_bottom_sensors.dart_buoys_deployed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Ocean Bottom Seismo:</span>
                <span className="text-green-400">{seismographNetworks.ocean_bottom_sensors.obs_functional}/{seismographNetworks.ocean_bottom_sensors.ocean_bottom_seismometers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coverage Area:</span>
                <span className="text-purple-400">{seismographNetworks.ocean_bottom_sensors.deep_ocean_coverage.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Transmission:</span>
                <span className={`${getStatusColor(seismographNetworks.ocean_bottom_sensors.data_transmission)?.split(' ')[0] || 'text-green-400'}`}>
                  {seismographNetworks.ocean_bottom_sensors.data_transmission.replace(/_/g, ' ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seismic Monitoring Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 SEISMIC MONITORING TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={seismicHistory}>
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
              yAxisId="right"
              type="monotone"
              dataKey="network_completeness"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Network Completeness %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="earthquake_count" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Earthquake Count"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="average_magnitude" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Average Magnitude"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="maximum_magnitude" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Maximum Magnitude"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="data_quality_score" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Data Quality Score"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="early_warnings_issued" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Early Warnings Issued"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="felt_reports_received" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="Felt Reports"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tsunami Warning System and Early Warning Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tsunami Warning System */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌊 TSUNAMI WARNING SYSTEM
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Warning Centers</h4>
              <div className="text-xs mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">PTWC Status:</span>
                  <span className={`${getStatusColor(tsunamiWarningSystem.warning_centers.pacific_tsunami_warning_center.status)?.split(' ')[0] || 'text-green-400'}`}>
                    {tsunamiWarningSystem.warning_centers.pacific_tsunami_warning_center.status}
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Alert Level:</span>
                  <span className={`${getStatusColor(tsunamiWarningSystem.warning_centers.pacific_tsunami_warning_center.alert_level)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {tsunamiWarningSystem.warning_centers.pacific_tsunami_warning_center.alert_level}
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Active Warnings:</span>
                  <span className="text-orange-400">{tsunamiWarningSystem.warning_centers.pacific_tsunami_warning_center.active_warnings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sources Monitored:</span>
                  <span className="text-cyan-400">{tsunamiWarningSystem.warning_centers.pacific_tsunami_warning_center.monitored_sources}</span>
                </div>
              </div>
              
              <div className="text-xs">
                <div className="font-semibold text-cyan-400 mb-2">National Centers Status:</div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(tsunamiWarningSystem.warning_centers.national_tsunami_warning_centers).map(([center, status]) => (
                    <div key={center} className="flex justify-between">
                      <span className="text-gray-400">{center.toUpperCase()}:</span>
                      <span className={`${getStatusColor(status)?.split(' ')[0] || 'text-green-400'}`}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Detection Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tide Gauges:</span>
                  <span className="text-blue-400">{tsunamiWarningSystem.detection_systems.tide_gauges_reporting}/{tsunamiWarningSystem.detection_systems.tide_gauges_global}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Coastal Buoys:</span>
                  <span className="text-green-400">{tsunamiWarningSystem.detection_systems.buoys_operational}/{tsunamiWarningSystem.detection_systems.coastal_buoys}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Deep Ocean Buoys:</span>
                  <span className="text-purple-400">{tsunamiWarningSystem.detection_systems.deep_ocean_active}/{tsunamiWarningSystem.detection_systems.deep_ocean_buoys}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Satellite Altimetry:</span>
                  <span className={`${getStatusColor(tsunamiWarningSystem.detection_systems.satellite_altimetry)?.split(' ')[0] || 'text-green-400'}`}>
                    {tsunamiWarningSystem.detection_systems.satellite_altimetry}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Warning Dissemination</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Alert:</span>
                  <span className={`${getStatusColor(tsunamiWarningSystem.warning_dissemination.emergency_alert_system)?.split(' ')[0] || 'text-green-400'}`}>
                    {tsunamiWarningSystem.warning_dissemination.emergency_alert_system}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wireless Alerts:</span>
                  <span className={`${getStatusColor(tsunamiWarningSystem.warning_dissemination.wireless_emergency_alerts)?.split(' ')[0] || 'text-green-400'}`}>
                    {tsunamiWarningSystem.warning_dissemination.wireless_emergency_alerts}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Siren Networks:</span>
                  <span className="text-orange-400">{tsunamiWarningSystem.warning_dissemination.sirens_functional}/{tsunamiWarningSystem.warning_dissemination.siren_networks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Social Media:</span>
                  <span className={`${getStatusColor(tsunamiWarningSystem.warning_dissemination.social_media_integration)?.split(' ')[0] || 'text-green-400'}`}>
                    {tsunamiWarningSystem.warning_dissemination.social_media_integration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mobile App Users:</span>
                  <span className="text-cyan-400">{formatLargeNumber(tsunamiWarningSystem.warning_dissemination.mobile_app_users)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early Warning Performance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚡ EARLY WARNING PERFORMANCE METRICS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">ShakeAlert System</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Alerts Issued:</span>
                  <span className="text-blue-400">{formatLargeNumber(earlyWarningPerformance.shakealert_system.total_alerts_issued)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Successful Alerts:</span>
                  <span className="text-green-400">{formatLargeNumber(earlyWarningPerformance.shakealert_system.successful_alerts)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">False Alarms:</span>
                  <span className="text-red-400">{earlyWarningPerformance.shakealert_system.false_alarms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Missed Events:</span>
                  <span className="text-orange-400">{earlyWarningPerformance.shakealert_system.missed_events}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Lead Time:</span>
                  <span className="text-purple-400">{formatNumber(earlyWarningPerformance.shakealert_system.average_lead_time)}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Maximum Lead Time:</span>
                  <span className="text-cyan-400">{earlyWarningPerformance.shakealert_system.maximum_lead_time}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Detection Accuracy:</span>
                  <span className="text-yellow-400">{formatNumber(earlyWarningPerformance.shakealert_system.detection_accuracy)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Public Adoption:</span>
                  <span className="text-pink-400">{formatNumber(earlyWarningPerformance.shakealert_system.public_adoption_rate)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Tsunami Warning Performance</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Warnings Issued 2026:</span>
                  <span className="text-blue-400">{earlyWarningPerformance.tsunami_warnings.warnings_issued_2026}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Accurate Warnings:</span>
                  <span className="text-green-400">{earlyWarningPerformance.tsunami_warnings.warnings_accurate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">False Warnings:</span>
                  <span className="text-red-400">{earlyWarningPerformance.tsunami_warnings.false_warnings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Evacuation Success:</span>
                  <span className="text-purple-400">{formatNumber(earlyWarningPerformance.tsunami_warnings.evacuation_success_rate)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Lead Time:</span>
                  <span className="text-orange-400">{formatNumber(earlyWarningPerformance.tsunami_warnings.warning_lead_time_avg)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Population Protected:</span>
                  <span className="text-cyan-400">{formatLargeNumber(earlyWarningPerformance.tsunami_warnings.population_protected)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Emergency Response Integration</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">First Responder:</span>
                  <span className={`${getStatusColor(earlyWarningPerformance.emergency_response.first_responder_alerts)?.split(' ')[0] || 'text-green-400'}`}>
                    {earlyWarningPerformance.emergency_response.first_responder_alerts}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hospital Alerts:</span>
                  <span className={`${getStatusColor(earlyWarningPerformance.emergency_response.hospital_notifications)?.split(' ')[0] || 'text-green-400'}`}>
                    {earlyWarningPerformance.emergency_response.hospital_notifications.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Infrastructure:</span>
                  <span className={`${getStatusColor(earlyWarningPerformance.emergency_response.infrastructure_shutdowns)?.split(' ')[0] || 'text-green-400'}`}>
                    {earlyWarningPerformance.emergency_response.infrastructure_shutdowns}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transportation:</span>
                  <span className={`${getStatusColor(earlyWarningPerformance.emergency_response.transportation_alerts)?.split(' ')[0] || 'text-green-400'}`}>
                    {earlyWarningPerformance.emergency_response.transportation_alerts}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Utility Companies:</span>
                  <span className={`${getStatusColor(earlyWarningPerformance.emergency_response.utility_company_alerts)?.split(' ')[0] || 'text-green-400'}`}>
                    {earlyWarningPerformance.emergency_response.utility_company_alerts}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Social Media Reach:</span>
                  <span className="text-cyan-400">{formatLargeNumber(earlyWarningPerformance.emergency_response.social_media_reach)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geological Hazards Assessment */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏔️ GEOLOGICAL HAZARDS ASSESSMENT & LONG-TERM MONITORING
        </h3>
        <div className="space-y-3">
          {geologicalHazards.map((hazard) => (
            <div key={hazard.hazard_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{hazard.hazard_id}</div>
                  <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {hazard.hazard_type.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(hazard.risk_level)}`}>
                    {hazard.risk_level} RISK
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(hazard.current_status)}`}>
                    {hazard.current_status.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {hazard.location}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">30-Year Probability: </span>
                <span className="text-orange-400">{formatNumber(hazard.probability_30yr)}%</span>
                <span className="text-gray-400"> | Expected Magnitude: </span>
                <span className="text-red-400">{hazard.expected_magnitude.replace(/_/g, ' ')}</span>
                <span className="text-gray-400"> | Last Major Event: </span>
                <span className="text-cyan-400">{hazard.last_major_event}</span>
              </div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Monitoring Stations: </span>
                <span className="text-green-400">{hazard.stations_active}/{hazard.monitoring_stations}</span>
                <span className="text-gray-400"> | Strain Accumulation: </span>
                <span className={`${getStatusColor(hazard.strain_accumulation)?.split(' ')[0] || 'text-yellow-400'}`}>
                  {hazard.strain_accumulation}
                </span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Precursor Indicators: </span>
                {hazard.precursor_indicators.map((indicator, i) => (
                  <span key={i} className="text-purple-400">
                    {indicator.replace(/_/g, ' ')}{i < hazard.precursor_indicators.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeismicMonitoringOperationsCenter;