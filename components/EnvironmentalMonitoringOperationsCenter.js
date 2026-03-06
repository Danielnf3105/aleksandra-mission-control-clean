// EnvironmentalMonitoringOperationsCenter.js - Environmental Monitoring Operations Center & Climate Data Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EnvironmentalMonitoringOperationsCenter = () => {
  const [environmentalStatus, setEnvironmentalStatus] = useState({
    operationalStatus: 'MONITORING_ACTIVE',
    totalStations: 247,
    stationsOnline: 231,
    totalSensors: 3847,
    sensorsOperational: 3674,
    dailyDataPoints: 2847293, // data points collected today
    overallAirQualityIndex: 78, // AQI value
    climateAlertLevel: 'NORMAL',
    pollutionEvents: 3,
    lastUpdate: Date.now()
  });

  const [airQualityMonitoring, setAirQualityMonitoring] = useState({
    pollutant_levels: {
      pm25_concentration: 23.4, // μg/m³
      pm10_concentration: 47.8, // μg/m³
      co_concentration: 2.1, // ppm
      no2_concentration: 34.7, // ppb
      so2_concentration: 12.3, // ppb
      ozone_concentration: 67.2, // ppb
      voc_concentration: 145.7, // ppb total VOCs
      carbon_monoxide: 1.8 // ppm
    },
    aqm_stations: {
      fixed_stations: 47,
      stations_operational: 43,
      mobile_stations: 12,
      mobile_active: 11,
      reference_stations: 8,
      reference_online: 8,
      low_cost_sensors: 180,
      sensors_reporting: 167
    },
    monitoring_parameters: {
      meteorological_data: 'ACTIVE',
      particle_analysis: 'CONTINUOUS',
      gas_analyzers: 'CALIBRATED',
      noise_monitoring: 'OPERATIONAL',
      radiation_monitoring: 'ACTIVE',
      odor_detection: 'ENABLED'
    },
    data_quality: {
      data_completeness: 96.8, // percentage
      measurement_accuracy: 94.5, // percentage
      sensor_calibration_status: 'CURRENT',
      qc_flag_rate: 2.1, // percentage flagged data
      validation_score: 97.3 // percentage
    }
  });

  const [weatherStations, setWeatherStations] = useState([
    {
      station_id: 'WS_001_URBAN_CENTRAL',
      location: 'City Center',
      latitude: 40.7128,
      longitude: -74.0060,
      status: 'OPERATIONAL',
      temperature: 18.7, // Celsius
      humidity: 67.3, // percentage
      pressure: 1013.2, // hPa
      wind_speed: 12.4, // km/h
      wind_direction: 245, // degrees
      precipitation: 0.0, // mm/h
      solar_radiation: 456.8, // W/m²
      visibility: 15.2, // km
      uv_index: 4,
      last_update: '2026-03-05T21:30:00Z',
      data_quality: 'EXCELLENT',
      sensor_health: 'HEALTHY'
    },
    {
      station_id: 'WS_012_COASTAL',
      location: 'Harbor District',
      latitude: 40.6892,
      longitude: -74.0445,
      status: 'OPERATIONAL',
      temperature: 16.2,
      humidity: 78.9,
      pressure: 1014.7,
      wind_speed: 18.7,
      wind_direction: 280,
      precipitation: 0.2,
      solar_radiation: 234.6,
      visibility: 12.8,
      uv_index: 3,
      last_update: '2026-03-05T21:30:00Z',
      data_quality: 'GOOD',
      sensor_health: 'HEALTHY'
    },
    {
      station_id: 'WS_023_INDUSTRIAL',
      location: 'Manufacturing Zone',
      latitude: 40.7381,
      longitude: -73.9925,
      status: 'OPERATIONAL',
      temperature: 21.4,
      humidity: 52.1,
      pressure: 1012.8,
      wind_speed: 8.9,
      wind_direction: 135,
      precipitation: 0.0,
      solar_radiation: 523.4,
      visibility: 18.7,
      uv_index: 5,
      last_update: '2026-03-05T21:30:00Z',
      data_quality: 'EXCELLENT',
      sensor_health: 'HEALTHY'
    },
    {
      station_id: 'WS_034_RESIDENTIAL',
      location: 'Suburban Area',
      latitude: 40.7831,
      longitude: -73.9712,
      status: 'OPERATIONAL',
      temperature: 17.9,
      humidity: 61.4,
      pressure: 1013.9,
      wind_speed: 6.3,
      wind_direction: 190,
      precipitation: 0.0,
      solar_radiation: 398.2,
      visibility: 22.1,
      uv_index: 4,
      last_update: '2026-03-05T21:30:00Z',
      data_quality: 'GOOD',
      sensor_health: 'HEALTHY'
    },
    {
      station_id: 'WS_045_MOUNTAIN',
      location: 'Elevated Station',
      latitude: 40.8176,
      longitude: -73.9782,
      status: 'MAINTENANCE',
      temperature: null,
      humidity: null,
      pressure: null,
      wind_speed: null,
      wind_direction: null,
      precipitation: null,
      solar_radiation: null,
      visibility: null,
      uv_index: null,
      last_update: '2026-03-05T14:22:00Z',
      data_quality: 'NO_DATA',
      sensor_health: 'MAINTENANCE_MODE',
      maintenance_type: 'SENSOR_CALIBRATION'
    }
  ]);

  const [waterQualityMonitoring, setWaterQualityMonitoring] = useState({
    monitoring_sites: {
      river_stations: 23,
      river_active: 21,
      lake_stations: 8,
      lake_active: 7,
      groundwater_wells: 45,
      wells_operational: 42,
      coastal_stations: 12,
      coastal_active: 11
    },
    water_parameters: {
      ph_level: 7.4,
      dissolved_oxygen: 8.7, // mg/L
      turbidity: 12.3, // NTU
      conductivity: 234.7, // μS/cm
      temperature: 14.8, // Celsius
      nitrate_concentration: 2.1, // mg/L
      phosphate_concentration: 0.34, // mg/L
      bacterial_count: 47, // CFU/100mL
      heavy_metals_detected: false,
      pollution_index: 'MODERATE'
    },
    automated_sampling: {
      auto_samplers_deployed: 34,
      samplers_operational: 31,
      daily_samples_collected: 156,
      lab_analysis_pending: 23,
      real_time_sensors: 89,
      sensors_reporting: 84,
      data_transmission: 'CONTINUOUS',
      quality_alerts: 2
    }
  });

  const [noiseMonitoring, setNoiseMonitoring] = useState({
    sound_measurement: {
      average_db_level: 67.4, // dB(A)
      peak_db_level: 89.2, // dB(A)
      nighttime_average: 52.1, // dB(A)
      daytime_average: 71.8, // dB(A)
      noise_pollution_index: 'MODERATE',
      complaint_threshold_exceeded: false,
      monitoring_stations: 34,
      stations_active: 32
    },
    frequency_analysis: {
      low_frequency: 45.2, // dB (125Hz)
      mid_frequency: 68.7, // dB (1kHz)
      high_frequency: 23.4, // dB (8kHz)
      traffic_noise_component: 78.3, // percentage
      industrial_noise_component: 12.7, // percentage
      aircraft_noise_component: 6.4, // percentage
      natural_sounds_component: 2.6 // percentage
    }
  });

  const [pollutionEvents, setPollutionEvents] = useState([
    {
      event_id: 'PE_001',
      event_type: 'AIR_QUALITY_ALERT',
      location: 'Industrial Zone',
      pollutant: 'PM2.5',
      concentration: 67.8, // μg/m³
      threshold: 55.0, // μg/m³
      severity: 'MODERATE',
      start_time: '2026-03-05T19:45:00Z',
      duration: 142, // minutes
      wind_direction: 225, // degrees
      affected_population: 12400,
      status: 'ACTIVE',
      mitigation_actions: ['PUBLIC_NOTIFICATION', 'TRAFFIC_REDUCTION']
    },
    {
      event_id: 'PE_002',
      event_type: 'WATER_CONTAMINATION',
      location: 'River Station 7',
      pollutant: 'BACTERIAL_CONTAMINATION',
      concentration: 156, // CFU/100mL
      threshold: 126, // CFU/100mL
      severity: 'LOW',
      start_time: '2026-03-05T16:20:00Z',
      duration: 89,
      source_suspected: 'AGRICULTURAL_RUNOFF',
      affected_area: 'DOWNSTREAM_3KM',
      status: 'MONITORING',
      mitigation_actions: ['WATER_TESTING_INCREASED']
    },
    {
      event_id: 'PE_003',
      event_type: 'NOISE_VIOLATION',
      location: 'Residential Area 4',
      pollutant: 'NOISE_LEVEL',
      concentration: 78.4, // dB(A)
      threshold: 70.0, // dB(A) nighttime
      severity: 'MODERATE',
      start_time: '2026-03-05T23:15:00Z',
      duration: 45,
      source_suspected: 'CONSTRUCTION_ACTIVITY',
      affected_population: 2800,
      status: 'RESOLVED',
      mitigation_actions: ['ENFORCEMENT_ACTION', 'NOISE_BARRIER_INSPECTION']
    }
  ]);

  const [climateData, setClimateData] = useState({
    temperature_trends: {
      current_temperature: 18.7, // Celsius
      daily_high: 24.3,
      daily_low: 12.1,
      monthly_average: 16.8,
      yearly_average: 14.2,
      climate_normal: 13.9, // 30-year average
      anomaly: 4.8, // degrees above normal
      heat_index: 19.4,
      wind_chill: null
    },
    precipitation_data: {
      current_rate: 0.0, // mm/h
      daily_total: 2.4, // mm
      monthly_total: 47.8, // mm
      yearly_total: 156.7, // mm
      climate_normal_monthly: 52.3, // mm
      drought_index: 'NORMAL',
      flood_risk: 'LOW',
      soil_moisture: 67.3 // percentage
    },
    extreme_weather: {
      heat_wave_alert: false,
      cold_wave_alert: false,
      storm_warning: false,
      frost_warning: false,
      wind_advisory: false,
      air_quality_advisory: true,
      uv_warning: false,
      last_severe_weather: '2026-02-28'
    }
  });

  const [environmentalHistory, setEnvironmentalHistory] = useState([]);

  const generateEnvironmentalHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of monitoring
      const hour = i;
      let airQualityVariation = 1.0;
      let noiseVariation = 1.0;
      
      // Environmental patterns throughout the day
      if (hour >= 6 && hour <= 10) {
        airQualityVariation = 1.3; // Morning traffic
        noiseVariation = 1.4;
      }
      if (hour >= 17 && hour <= 19) {
        airQualityVariation = 1.2; // Evening traffic
        noiseVariation = 1.3;
      }
      if (hour >= 22 || hour <= 6) {
        airQualityVariation = 0.7; // Night cleaner air
        noiseVariation = 0.5; // Quieter nights
      }
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        aqi_value: Math.floor(40 + airQualityVariation * 35 + Math.random() * 20),
        pm25_concentration: 15 + airQualityVariation * 20 + Math.random() * 15,
        temperature: 14 + Math.sin((hour - 6) * Math.PI / 12) * 8 + Math.random() * 3,
        humidity: 50 + Math.cos(hour * Math.PI / 12) * 25 + Math.random() * 10,
        noise_level: 45 + noiseVariation * 25 + Math.random() * 10,
        wind_speed: 5 + Math.random() * 15,
        solar_radiation: hour >= 6 && hour <= 18 ? Math.max(0, Math.sin((hour - 6) * Math.PI / 12) * 800) : 0,
        precipitation: Math.random() > 0.9 ? Math.random() * 5 : 0,
        pollution_events: Math.floor(airQualityVariation * Math.random() * 3),
        sensor_alerts: Math.floor(Math.random() * 2),
        data_completeness: 85 + Math.random() * 13
      });
    }
    return data;
  };

  useEffect(() => {
    setEnvironmentalHistory(generateEnvironmentalHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update environmental status
      setEnvironmentalStatus(prev => ({
        ...prev,
        stationsOnline: Math.max(220, Math.min(247, prev.stationsOnline + Math.floor((Math.random() - 0.5) * 4))),
        sensorsOperational: Math.max(3500, Math.min(3847, prev.sensorsOperational + Math.floor((Math.random() - 0.5) * 20))),
        dailyDataPoints: prev.dailyDataPoints + Math.floor(Math.random() * 500) + 100,
        overallAirQualityIndex: Math.max(30, Math.min(150, prev.overallAirQualityIndex + (Math.random() - 0.5) * 5)),
        pollutionEvents: Math.max(0, Math.min(8, prev.pollutionEvents + Math.floor((Math.random() - 0.8) * 2))),
        lastUpdate: Date.now()
      }));

      // Update air quality monitoring
      setAirQualityMonitoring(prev => ({
        ...prev,
        pollutant_levels: {
          ...prev.pollutant_levels,
          pm25_concentration: Math.max(5.0, Math.min(75.0, prev.pollutant_levels.pm25_concentration + (Math.random() - 0.5) * 4.0)),
          pm10_concentration: Math.max(10.0, Math.min(150.0, prev.pollutant_levels.pm10_concentration + (Math.random() - 0.5) * 8.0)),
          no2_concentration: Math.max(10.0, Math.min(80.0, prev.pollutant_levels.no2_concentration + (Math.random() - 0.5) * 6.0)),
          ozone_concentration: Math.max(20.0, Math.min(120.0, prev.pollutant_levels.ozone_concentration + (Math.random() - 0.5) * 8.0))
        },
        data_quality: {
          ...prev.data_quality,
          data_completeness: Math.max(90.0, Math.min(99.5, prev.data_quality.data_completeness + (Math.random() - 0.5) * 1.0))
        }
      }));

      // Update weather stations randomly
      setWeatherStations(prev => prev.map(station => {
        if (station.status === 'OPERATIONAL') {
          return {
            ...station,
            temperature: Math.max(-10, Math.min(40, station.temperature + (Math.random() - 0.5) * 2.0)),
            humidity: Math.max(20, Math.min(100, station.humidity + (Math.random() - 0.5) * 4.0)),
            wind_speed: Math.max(0, Math.min(50, station.wind_speed + (Math.random() - 0.5) * 3.0))
          };
        }
        return station;
      }));

      // Update noise monitoring
      setNoiseMonitoring(prev => ({
        ...prev,
        sound_measurement: {
          ...prev.sound_measurement,
          average_db_level: Math.max(35.0, Math.min(85.0, prev.sound_measurement.average_db_level + (Math.random() - 0.5) * 3.0)),
          peak_db_level: Math.max(60.0, Math.min(120.0, prev.sound_measurement.peak_db_level + (Math.random() - 0.5) * 5.0))
        }
      }));

    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'MONITORING_ACTIVE':
      case 'OPERATIONAL':
      case 'EXCELLENT':
      case 'HEALTHY':
      case 'CURRENT':
      case 'CONTINUOUS':
      case 'CALIBRATED':
      case 'ENABLED':
      case 'ACTIVE':
      case 'NORMAL':
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'GOOD':
      case 'MODERATE':
      case 'MONITORING':
      case 'MAINTENANCE_MODE':
      case 'NO_DATA': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'RESOLVED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFFLINE':
      case 'ERROR':
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return 'text-green-400';
    if (aqi <= 100) return 'text-yellow-400';
    if (aqi <= 150) return 'text-orange-400';
    if (aqi <= 200) return 'text-red-400';
    return 'text-purple-400';
  };

  const getAQICategory = (aqi) => {
    if (aqi <= 50) return 'GOOD';
    if (aqi <= 100) return 'MODERATE';
    if (aqi <= 150) return 'UNHEALTHY_SENSITIVE';
    if (aqi <= 200) return 'UNHEALTHY';
    return 'VERY_UNHEALTHY';
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
      minute: '2-digit'
    });
  };

  const formatDuration = (minutes) => {
    if (!minutes) return 'N/A';
    if (minutes < 60) return `${minutes}min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🌍 ENVIRONMENTAL MONITORING OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(environmentalStatus.operationalStatus)}`}>
            {environmentalStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {environmentalStatus.stationsOnline}/{environmentalStatus.totalStations} Stations
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getAQIColor(environmentalStatus.overallAirQualityIndex)} bg-gray-700/50`}>
            AQI {environmentalStatus.overallAirQualityIndex}
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatLargeNumber(environmentalStatus.dailyDataPoints)} Data Points
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Climate & Environmental Data Management
          </div>
        </div>
      </div>

      {/* Environmental Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">AIR QUALITY INDEX</div>
              <div className={`text-2xl font-bold ${getAQIColor(environmentalStatus.overallAirQualityIndex)}`}>
                {environmentalStatus.overallAirQualityIndex}
              </div>
              <div className="text-xs text-blue-300">
                {getAQICategory(environmentalStatus.overallAirQualityIndex)}
              </div>
            </div>
            <div className="text-3xl opacity-60">🌬️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SENSOR NETWORK</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(environmentalStatus.sensorsOperational)}
              </div>
              <div className="text-xs text-green-300">
                Active sensors monitoring
              </div>
            </div>
            <div className="text-3xl opacity-60">📡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">DATA COLLECTION</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatLargeNumber(environmentalStatus.dailyDataPoints)}
              </div>
              <div className="text-xs text-purple-300">
                Points collected today
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">POLLUTION EVENTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {environmentalStatus.pollutionEvents}
              </div>
              <div className="text-xs text-orange-300">
                Active monitoring alerts
              </div>
            </div>
            <div className="text-3xl opacity-60">⚠️</div>
          </div>
        </div>
      </div>

      {/* Air Quality Monitoring */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌬️ AIR QUALITY MONITORING NETWORK
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Pollutant Levels</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">PM2.5:</span>
                <span className="text-blue-400">{formatNumber(airQualityMonitoring.pollutant_levels.pm25_concentration)} μg/m³</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">PM10:</span>
                <span className="text-green-400">{formatNumber(airQualityMonitoring.pollutant_levels.pm10_concentration)} μg/m³</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CO:</span>
                <span className="text-purple-400">{formatNumber(airQualityMonitoring.pollutant_levels.co_concentration)} ppm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">NO₂:</span>
                <span className="text-orange-400">{formatNumber(airQualityMonitoring.pollutant_levels.no2_concentration)} ppb</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SO₂:</span>
                <span className="text-cyan-400">{formatNumber(airQualityMonitoring.pollutant_levels.so2_concentration)} ppb</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">O₃:</span>
                <span className="text-yellow-400">{formatNumber(airQualityMonitoring.pollutant_levels.ozone_concentration)} ppb</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">VOCs:</span>
                <span className="text-pink-400">{formatNumber(airQualityMonitoring.pollutant_levels.voc_concentration)} ppb</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">AQM Stations</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Fixed Stations:</span>
                <span className="text-blue-400">{airQualityMonitoring.aqm_stations.stations_operational}/{airQualityMonitoring.aqm_stations.fixed_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mobile Stations:</span>
                <span className="text-green-400">{airQualityMonitoring.aqm_stations.mobile_active}/{airQualityMonitoring.aqm_stations.mobile_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Reference Stations:</span>
                <span className="text-purple-400">{airQualityMonitoring.aqm_stations.reference_online}/{airQualityMonitoring.aqm_stations.reference_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Low-Cost Sensors:</span>
                <span className="text-orange-400">{airQualityMonitoring.aqm_stations.sensors_reporting}/{airQualityMonitoring.aqm_stations.low_cost_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Completeness:</span>
                <span className="text-cyan-400">{formatNumber(airQualityMonitoring.data_quality.data_completeness)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Measurement Accuracy:</span>
                <span className="text-yellow-400">{formatNumber(airQualityMonitoring.data_quality.measurement_accuracy)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Validation Score:</span>
                <span className="text-pink-400">{formatNumber(airQualityMonitoring.data_quality.validation_score)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Monitoring Parameters</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Meteorological Data:</span>
                <span className={`${getStatusColor(airQualityMonitoring.monitoring_parameters.meteorological_data)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.monitoring_parameters.meteorological_data}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Particle Analysis:</span>
                <span className={`${getStatusColor(airQualityMonitoring.monitoring_parameters.particle_analysis)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.monitoring_parameters.particle_analysis}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Gas Analyzers:</span>
                <span className={`${getStatusColor(airQualityMonitoring.monitoring_parameters.gas_analyzers)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.monitoring_parameters.gas_analyzers}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Noise Monitoring:</span>
                <span className={`${getStatusColor(airQualityMonitoring.monitoring_parameters.noise_monitoring)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.monitoring_parameters.noise_monitoring}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Radiation Monitor:</span>
                <span className={`${getStatusColor(airQualityMonitoring.monitoring_parameters.radiation_monitoring)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.monitoring_parameters.radiation_monitoring}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Odor Detection:</span>
                <span className={`${getStatusColor(airQualityMonitoring.monitoring_parameters.odor_detection)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.monitoring_parameters.odor_detection}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Data Quality</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Completeness:</span>
                <span className="text-blue-400">{formatNumber(airQualityMonitoring.data_quality.data_completeness)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy:</span>
                <span className="text-green-400">{formatNumber(airQualityMonitoring.data_quality.measurement_accuracy)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Calibration:</span>
                <span className={`${getStatusColor(airQualityMonitoring.data_quality.sensor_calibration_status)?.split(' ')[0] || 'text-green-400'}`}>
                  {airQualityMonitoring.data_quality.sensor_calibration_status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">QC Flag Rate:</span>
                <span className="text-orange-400">{formatNumber(airQualityMonitoring.data_quality.qc_flag_rate)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Validation:</span>
                <span className="text-cyan-400">{formatNumber(airQualityMonitoring.data_quality.validation_score)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Stations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌡️ WEATHER MONITORING STATIONS
        </h3>
        <div className="space-y-3">
          {weatherStations.map((station) => (
            <div key={station.station_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{station.station_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(station.status)}`}>
                    {station.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(station.data_quality)}`}>
                    {station.data_quality}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {station.location}
                </div>
              </div>

              {station.status === 'OPERATIONAL' && (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Temp: </span>
                    <span className="text-cyan-400">{formatNumber(station.temperature)}°C</span>
                    <span className="text-gray-400"> | Humidity: </span>
                    <span className="text-green-400">{formatNumber(station.humidity)}%</span>
                    <span className="text-gray-400"> | Pressure: </span>
                    <span className="text-purple-400">{formatNumber(station.pressure)} hPa</span>
                    <span className="text-gray-400"> | UV Index: </span>
                    <span className="text-orange-400">{station.uv_index}</span>
                  </div>
                  
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Wind: </span>
                    <span className="text-blue-400">{formatNumber(station.wind_speed)} km/h</span>
                    <span className="text-gray-400"> @ {station.wind_direction}°</span>
                    <span className="text-gray-400"> | Precip: </span>
                    <span className="text-cyan-400">{formatNumber(station.precipitation)} mm/h</span>
                    <span className="text-gray-400"> | Visibility: </span>
                    <span className="text-yellow-400">{formatNumber(station.visibility)} km</span>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400">Solar Radiation: </span>
                    <span className="text-orange-400">{formatNumber(station.solar_radiation)} W/m²</span>
                    <span className="text-gray-400"> | Sensor Health: </span>
                    <span className={`${getStatusColor(station.sensor_health)?.split(' ')[0] || 'text-green-400'}`}>
                      {station.sensor_health}
                    </span>
                    <span className="text-gray-400"> | Updated: </span>
                    <span className="text-pink-400">{formatDateTime(station.last_update)}</span>
                  </div>
                </>
              )}

              {station.status === 'MAINTENANCE' && (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Maintenance Type: </span>
                    <span className="text-orange-400">{station.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Health Status: </span>
                    <span className={`${getStatusColor(station.sensor_health)?.split(' ')[0] || 'text-orange-400'}`}>
                      {station.sensor_health.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Last Data: </span>
                    <span className="text-yellow-400">{formatDateTime(station.last_update)}</span>
                    <span className="text-gray-400"> | Location: </span>
                    <span className="text-cyan-400">{formatNumber(station.latitude, 4)}°N, {formatNumber(Math.abs(station.longitude), 4)}°W</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 ENVIRONMENTAL MONITORING TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={environmentalHistory}>
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
              dataKey="solar_radiation"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Solar Radiation (W/m²)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="aqi_value" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="AQI"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pm25_concentration" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="PM2.5 (μg/m³)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="temperature" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Temperature (°C)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="humidity" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Humidity (%)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="noise_level" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Noise Level (dB)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="wind_speed" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="Wind Speed (km/h)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Water Quality and Noise Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Water Quality */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💧 WATER QUALITY MONITORING
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Monitoring Sites</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">River Stations:</span>
                  <span className="text-blue-400">{waterQualityMonitoring.monitoring_sites.river_active}/{waterQualityMonitoring.monitoring_sites.river_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lake Stations:</span>
                  <span className="text-green-400">{waterQualityMonitoring.monitoring_sites.lake_active}/{waterQualityMonitoring.monitoring_sites.lake_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Groundwater Wells:</span>
                  <span className="text-purple-400">{waterQualityMonitoring.monitoring_sites.wells_operational}/{waterQualityMonitoring.monitoring_sites.groundwater_wells}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Coastal Stations:</span>
                  <span className="text-orange-400">{waterQualityMonitoring.monitoring_sites.coastal_active}/{waterQualityMonitoring.monitoring_sites.coastal_stations}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Water Parameters</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">pH Level:</span>
                  <span className="text-blue-400">{formatNumber(waterQualityMonitoring.water_parameters.ph_level)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dissolved Oxygen:</span>
                  <span className="text-green-400">{formatNumber(waterQualityMonitoring.water_parameters.dissolved_oxygen)} mg/L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Turbidity:</span>
                  <span className="text-purple-400">{formatNumber(waterQualityMonitoring.water_parameters.turbidity)} NTU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Conductivity:</span>
                  <span className="text-orange-400">{formatNumber(waterQualityMonitoring.water_parameters.conductivity)} μS/cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Temperature:</span>
                  <span className="text-cyan-400">{formatNumber(waterQualityMonitoring.water_parameters.temperature)}°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nitrate:</span>
                  <span className="text-yellow-400">{formatNumber(waterQualityMonitoring.water_parameters.nitrate_concentration)} mg/L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phosphate:</span>
                  <span className="text-pink-400">{formatNumber(waterQualityMonitoring.water_parameters.phosphate_concentration)} mg/L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bacterial Count:</span>
                  <span className="text-red-400">{waterQualityMonitoring.water_parameters.bacterial_count} CFU/100mL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pollution Index:</span>
                  <span className={`${getStatusColor(waterQualityMonitoring.water_parameters.pollution_index)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {waterQualityMonitoring.water_parameters.pollution_index}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Automated Sampling</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Auto Samplers:</span>
                  <span className="text-blue-400">{waterQualityMonitoring.automated_sampling.samplers_operational}/{waterQualityMonitoring.automated_sampling.auto_samplers_deployed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily Samples:</span>
                  <span className="text-green-400">{waterQualityMonitoring.automated_sampling.daily_samples_collected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lab Analysis Pending:</span>
                  <span className="text-orange-400">{waterQualityMonitoring.automated_sampling.lab_analysis_pending}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Real-time Sensors:</span>
                  <span className="text-purple-400">{waterQualityMonitoring.automated_sampling.sensors_reporting}/{waterQualityMonitoring.automated_sampling.real_time_sensors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Transmission:</span>
                  <span className={`${getStatusColor(waterQualityMonitoring.automated_sampling.data_transmission)?.split(' ')[0] || 'text-green-400'}`}>
                    {waterQualityMonitoring.automated_sampling.data_transmission}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Quality Alerts:</span>
                  <span className="text-red-400">{waterQualityMonitoring.automated_sampling.quality_alerts}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Noise Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔊 NOISE POLLUTION MONITORING
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Sound Measurement</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Level:</span>
                  <span className="text-blue-400">{formatNumber(noiseMonitoring.sound_measurement.average_db_level)} dB(A)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Peak Level:</span>
                  <span className="text-red-400">{formatNumber(noiseMonitoring.sound_measurement.peak_db_level)} dB(A)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Daytime Average:</span>
                  <span className="text-orange-400">{formatNumber(noiseMonitoring.sound_measurement.daytime_average)} dB(A)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nighttime Average:</span>
                  <span className="text-green-400">{formatNumber(noiseMonitoring.sound_measurement.nighttime_average)} dB(A)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pollution Index:</span>
                  <span className={`${getStatusColor(noiseMonitoring.sound_measurement.noise_pollution_index)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {noiseMonitoring.sound_measurement.noise_pollution_index}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Threshold Exceeded:</span>
                  <span className={`${noiseMonitoring.sound_measurement.complaint_threshold_exceeded ? 'text-red-400' : 'text-green-400'}`}>
                    {noiseMonitoring.sound_measurement.complaint_threshold_exceeded ? 'YES' : 'NO'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monitor Stations:</span>
                  <span className="text-cyan-400">{noiseMonitoring.sound_measurement.stations_active}/{noiseMonitoring.sound_measurement.monitoring_stations}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Frequency Analysis</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Low Frequency (125Hz):</span>
                  <span className="text-blue-400">{formatNumber(noiseMonitoring.frequency_analysis.low_frequency)} dB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mid Frequency (1kHz):</span>
                  <span className="text-green-400">{formatNumber(noiseMonitoring.frequency_analysis.mid_frequency)} dB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">High Frequency (8kHz):</span>
                  <span className="text-purple-400">{formatNumber(noiseMonitoring.frequency_analysis.high_frequency)} dB</span>
                </div>
              </div>
              
              <h4 className="text-sm font-bold text-white mt-4 mb-3">Noise Sources</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Traffic Noise:</span>
                  <span className="text-orange-400">{formatNumber(noiseMonitoring.frequency_analysis.traffic_noise_component)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Industrial Noise:</span>
                  <span className="text-red-400">{formatNumber(noiseMonitoring.frequency_analysis.industrial_noise_component)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Aircraft Noise:</span>
                  <span className="text-cyan-400">{formatNumber(noiseMonitoring.frequency_analysis.aircraft_noise_component)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Natural Sounds:</span>
                  <span className="text-green-400">{formatNumber(noiseMonitoring.frequency_analysis.natural_sounds_component)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pollution Events */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 ACTIVE POLLUTION EVENTS & ALERTS
        </h3>
        <div className="space-y-3">
          {pollutionEvents.map((event) => (
            <div key={event.event_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{event.event_id}</div>
                  <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {event.event_type.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(event.severity)}`}>
                    {event.severity}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {event.location}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Pollutant: </span>
                <span className="text-cyan-400">{event.pollutant}</span>
                <span className="text-gray-400"> | Concentration: </span>
                <span className="text-orange-400">{formatNumber(event.concentration)}</span>
                <span className="text-gray-400"> | Threshold: </span>
                <span className="text-red-400">{formatNumber(event.threshold)}</span>
                <span className="text-gray-400"> | Duration: </span>
                <span className="text-purple-400">{formatDuration(event.duration)}</span>
              </div>

              {event.affected_population && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Affected Population: </span>
                  <span className="text-yellow-400">{formatLargeNumber(event.affected_population)}</span>
                  {event.wind_direction && (
                    <>
                      <span className="text-gray-400"> | Wind Direction: </span>
                      <span className="text-blue-400">{event.wind_direction}°</span>
                    </>
                  )}
                  {event.source_suspected && (
                    <>
                      <span className="text-gray-400"> | Suspected Source: </span>
                      <span className="text-pink-400">{event.source_suspected.replace(/_/g, ' ')}</span>
                    </>
                  )}
                </div>
              )}

              {event.affected_area && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Affected Area: </span>
                  <span className="text-yellow-400">{event.affected_area.replace(/_/g, ' ')}</span>
                  {event.source_suspected && (
                    <>
                      <span className="text-gray-400"> | Source: </span>
                      <span className="text-pink-400">{event.source_suspected.replace(/_/g, ' ')}</span>
                    </>
                  )}
                </div>
              )}

              <div className="text-xs">
                <span className="text-gray-400">Start Time: </span>
                <span className="text-cyan-400">{formatDateTime(event.start_time)}</span>
                <span className="text-gray-400"> | Actions: </span>
                {event.mitigation_actions.map((action, i) => (
                  <span key={i} className="text-green-400">
                    {action.replace(/_/g, ' ')}{i < event.mitigation_actions.length - 1 ? ', ' : ''}
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

export default EnvironmentalMonitoringOperationsCenter;