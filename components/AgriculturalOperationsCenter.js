// AgriculturalOperationsCenter.js - Agricultural Operations Center & Precision Farming Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AgriculturalOperationsCenter = () => {
  const [agriculturalStatus, setAgriculturalStatus] = useState({
    operationalStatus: 'SMART_FARMING_ACTIVE',
    totalFarms: 127,
    farmsConnected: 118,
    totalFields: 3847,
    fieldsMonitored: 3629,
    totalLivestock: 45892,
    livestockTracked: 44234,
    dailyDataPoints: 8934729, // sensor data points
    cropYieldPrediction: 96.7, // percentage of expected yield
    lastUpdate: Date.now()
  });

  const [precisionFarming, setPrecisionFarming] = useState({
    sensor_networks: {
      soil_sensors: 8947,
      sensors_active: 8534,
      weather_stations: 189,
      stations_operational: 175,
      moisture_sensors: 2847,
      moisture_active: 2701,
      ph_sensors: 1567,
      ph_operational: 1489,
      nutrient_sensors: 945,
      nutrient_functional: 889,
      temperature_sensors: 3456,
      temp_sensors_active: 3298
    },
    iot_infrastructure: {
      edge_gateways: 247,
      gateways_online: 231,
      wireless_nodes: 12847,
      nodes_connected: 12234,
      satellite_coverage: 'GLOBAL_GPS_RTK',
      cellular_connectivity: '5G_ENABLED',
      data_transmission: 'CONTINUOUS',
      power_management: 'SOLAR_BATTERY_HYBRID',
      network_reliability: 97.8, // percentage
      latency_ms: 23.4
    },
    field_monitoring: {
      ndvi_analysis: 'DAILY_SATELLITE',
      crop_stress_detection: 'AI_ENABLED',
      pest_monitoring: 'AUTOMATED_TRAPS',
      disease_identification: 'COMPUTER_VISION',
      growth_stage_tracking: 'PHENOLOGY_MODELS',
      yield_prediction: 'ML_ALGORITHMS',
      variable_rate_application: 'PRESCRIPTION_MAPS'
    }
  });

  const [cropManagement, setCropManagement] = useState([
    {
      field_id: 'FIELD_001_CORN_NORTH',
      crop_type: 'CORN',
      variety: 'Pioneer P2089YHR',
      area_hectares: 247.8,
      planting_date: '2026-04-15',
      growth_stage: 'V8_STAGE',
      days_to_maturity: 89,
      soil_moisture: 67.3, // percentage
      ndvi_value: 0.78,
      predicted_yield: 12.4, // tons/hectare
      irrigation_status: 'AUTOMATED',
      fertilizer_applied: 'VARIABLE_RATE',
      pest_pressure: 'LOW',
      disease_risk: 'MINIMAL',
      weather_stress: 'NONE',
      harvest_readiness: 23 // percentage
    },
    {
      field_id: 'FIELD_012_SOY_SOUTH',
      crop_type: 'SOYBEAN',
      variety: 'Asgrow AG2834',
      area_hectares: 189.5,
      planting_date: '2026-05-02',
      growth_stage: 'R3_POD_BEGINNING',
      days_to_maturity: 67,
      soil_moisture: 73.8,
      ndvi_value: 0.84,
      predicted_yield: 3.7,
      irrigation_status: 'SCHEDULED',
      fertilizer_applied: 'PRECISION_APPLIED',
      pest_pressure: 'MODERATE',
      disease_risk: 'MONITORED',
      weather_stress: 'HEAT_STRESS',
      harvest_readiness: 45
    },
    {
      field_id: 'FIELD_023_WHEAT_EAST',
      crop_type: 'WHEAT',
      variety: 'WB-Grainfield',
      area_hectares: 156.2,
      planting_date: '2026-03-20',
      growth_stage: 'HEADING_STAGE',
      days_to_maturity: 34,
      soil_moisture: 58.9,
      ndvi_value: 0.69,
      predicted_yield: 8.9,
      irrigation_status: 'DEFICIT_MANAGED',
      fertilizer_applied: 'COMPLETE',
      pest_pressure: 'HIGH',
      disease_risk: 'ELEVATED',
      weather_stress: 'DROUGHT_STRESS',
      harvest_readiness: 78
    },
    {
      field_id: 'FIELD_034_COTTON_WEST',
      crop_type: 'COTTON',
      variety: 'Deltapine DP2141',
      area_hectares: 134.7,
      planting_date: '2026-04-28',
      growth_stage: 'FLOWERING_STAGE',
      days_to_maturity: 98,
      soil_moisture: 45.2,
      ndvi_value: 0.71,
      predicted_yield: 2.1, // bales/hectare
      irrigation_status: 'CRITICAL_NEEDED',
      fertilizer_applied: 'SIDE_DRESSED',
      pest_pressure: 'VERY_HIGH',
      disease_risk: 'HIGH',
      weather_stress: 'SEVERE_DROUGHT',
      harvest_readiness: 12
    }
  ]);

  const [livestockManagement, setLivestockManagement] = useState({
    cattle_herds: {
      total_cattle: 12847,
      cattle_tracked: 12456,
      breeding_stock: 3456,
      feedlot_cattle: 7892,
      dairy_cows: 1499,
      health_monitoring: 'RFID_SENSORS',
      weight_tracking: 'AUTOMATED_SCALES',
      feed_management: 'PRECISION_FEEDING',
      reproductive_status: 'AI_MONITORED',
      location_tracking: 'GPS_COLLARS',
      behavior_analysis: 'COMPUTER_VISION'
    },
    swine_operations: {
      total_swine: 23456,
      swine_monitored: 22789,
      breeding_sows: 2345,
      finishing_pigs: 18945,
      nursery_pigs: 2166,
      health_status: 'SENSOR_MONITORED',
      environmental_control: 'AUTOMATED_HVAC',
      feed_conversion: 2.34, // feed:gain ratio
      mortality_rate: 1.8, // percentage
      growth_rate: 'OPTIMIZED'
    },
    poultry_farms: {
      total_birds: 456789,
      birds_tracked: 445623,
      laying_hens: 234567,
      broiler_chickens: 189456,
      turkeys: 32766,
      egg_production: 'AUTOMATED_COLLECTION',
      climate_control: 'PRECISION_ENVIRONMENTAL',
      feed_efficiency: 1.89,
      mortality_monitoring: 'REAL_TIME',
      production_analytics: 'AI_OPTIMIZED'
    },
    pasture_management: {
      total_pastures: 89,
      pastures_monitored: 84,
      rotational_grazing: 'GPS_MANAGED',
      grass_growth_monitoring: 'SATELLITE_NDVI',
      soil_compaction: 'SENSOR_DETECTED',
      water_distribution: 'AUTOMATED_SYSTEMS',
      fencing_status: 'VIRTUAL_SMART_FENCING',
      stocking_density: 'OPTIMIZED'
    }
  });

  const [smartIrrigation, setSmartIrrigation] = useState({
    irrigation_systems: {
      center_pivot_systems: 45,
      pivots_operational: 42,
      drip_irrigation_zones: 234,
      drip_zones_active: 221,
      sprinkler_systems: 89,
      sprinklers_functional: 83,
      micro_irrigation: 167,
      micro_systems_working: 159
    },
    water_management: {
      total_water_sources: 23,
      sources_available: 21,
      groundwater_wells: 12,
      wells_operational: 11,
      surface_water_access: 8,
      surface_sources_active: 7,
      rainwater_collection: 3,
      collection_systems_active: 3,
      water_quality_monitoring: 'CONTINUOUS',
      usage_efficiency: 87.4 // percentage
    },
    scheduling_automation: {
      weather_based_scheduling: 'AI_ENABLED',
      soil_moisture_triggers: 'SENSOR_DRIVEN',
      crop_stage_adjustments: 'AUTOMATED',
      deficit_irrigation: 'PRECISION_CONTROLLED',
      fertigation_scheduling: 'NUTRIENT_OPTIMIZED',
      water_application_rate: 'VARIABLE_RATE',
      evapotranspiration_calculation: 'REAL_TIME'
    }
  });

  const [weatherData, setWeatherData] = useState({
    current_conditions: {
      temperature: 24.7, // Celsius
      humidity: 68.3, // percentage
      wind_speed: 12.4, // km/h
      wind_direction: 235, // degrees
      solar_radiation: 678.9, // W/m²
      rainfall_24h: 2.3, // mm
      barometric_pressure: 1013.8, // hPa
      dew_point: 18.2, // Celsius
      growing_degree_days: 1847.3 // accumulated
    },
    forecasting: {
      temperature_forecast: 'AI_ENHANCED',
      precipitation_prediction: 'ENSEMBLE_MODELS',
      wind_forecasting: 'MESOSCALE_MODELS',
      frost_warning_system: 'AUTOMATED_ALERTS',
      drought_monitoring: 'SATELLITE_BASED',
      heat_stress_alerts: 'LIVESTOCK_FOCUSED',
      spray_conditions: 'OPTIMIZED_WINDOWS',
      harvest_weather: 'LONG_RANGE_OUTLOOK'
    },
    climate_monitoring: {
      microclimate_stations: 78,
      stations_reporting: 73,
      canopy_temperature: 'INFRARED_SENSORS',
      leaf_wetness: 'SENSOR_MEASURED',
      soil_temperature: 'MULTI_DEPTH',
      evapotranspiration: 'CALCULATED_REAL_TIME',
      vapor_pressure_deficit: 'MONITORED',
      heat_units: 'CROP_SPECIFIC'
    }
  });

  const [farmAutomation, setFarmAutomation] = useState({
    autonomous_equipment: {
      tractors_autonomous: 23,
      tractors_operational: 21,
      harvesters_autonomous: 12,
      harvesters_active: 11,
      spraying_drones: 45,
      drones_flight_ready: 42,
      seeding_robots: 8,
      seeding_robots_active: 7,
      weeding_robots: 15,
      weed_robots_operational: 14
    },
    robotic_systems: {
      milking_robots: 34,
      milking_systems_active: 32,
      feeding_robots: 67,
      feeding_systems_online: 63,
      fruit_picking_robots: 12,
      picking_robots_active: 10,
      greenhouse_robots: 28,
      greenhouse_systems_operational: 26
    },
    ai_decision_support: {
      crop_advisory_system: 'MACHINE_LEARNING',
      pest_prediction_models: 'DEEP_LEARNING',
      market_price_forecasting: 'AI_ANALYTICS',
      resource_optimization: 'GENETIC_ALGORITHMS',
      yield_maximization: 'MULTI_OBJECTIVE_OPTIMIZATION',
      sustainability_scoring: 'ESG_ALGORITHMS',
      carbon_footprint_tracking: 'LIFECYCLE_ASSESSMENT'
    }
  });

  const [agriculturalHistory, setAgriculturalHistory] = useState([]);

  const generateAgriculturalHistory = () => {
    const data = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30); // Last 30 days
    
    for (let i = 0; i <= 30; i++) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      
      // Seasonal agricultural patterns
      const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
      const seasonalFactor = 0.8 + 0.3 * Math.sin((dayOfYear - 80) * 2 * Math.PI / 365); // Spring peak
      
      data.push({
        date: date.toISOString().split('T')[0],
        crop_health_index: Math.max(70, Math.min(95, 82 + seasonalFactor * 8 + Math.random() * 6)),
        soil_moisture_avg: Math.max(30, Math.min(80, 55 + seasonalFactor * 15 + Math.random() * 10)),
        irrigation_efficiency: Math.max(75, Math.min(95, 85 + Math.random() * 8)),
        livestock_health_score: Math.max(85, Math.min(98, 92 + Math.random() * 4)),
        yield_prediction: Math.max(80, Math.min(105, 95 + seasonalFactor * 5 + Math.random() * 8)),
        weather_stress_index: Math.max(0, Math.min(40, 15 + Math.random() * 15 - seasonalFactor * 5)),
        automation_efficiency: Math.max(80, Math.min(98, 89 + Math.random() * 6)),
        energy_consumption: Math.max(200, Math.min(400, 300 + Math.random() * 100 - seasonalFactor * 50)),
        pest_pressure_level: Math.max(5, Math.min(35, 20 + Math.random() * 10 - seasonalFactor * 5)),
        fertilizer_efficiency: Math.max(75, Math.min(95, 85 + Math.random() * 8)),
        water_usage_efficiency: Math.max(70, Math.min(90, 82 + Math.random() * 8))
      });
    }
    return data;
  };

  useEffect(() => {
    setAgriculturalHistory(generateAgriculturalHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update agricultural status
      setAgriculturalStatus(prev => ({
        ...prev,
        farmsConnected: Math.max(110, Math.min(127, prev.farmsConnected + Math.floor((Math.random() - 0.5) * 3))),
        fieldsMonitored: Math.max(3400, Math.min(3847, prev.fieldsMonitored + Math.floor((Math.random() - 0.5) * 50))),
        livestockTracked: Math.max(42000, Math.min(45892, prev.livestockTracked + Math.floor((Math.random() - 0.5) * 200))),
        dailyDataPoints: prev.dailyDataPoints + Math.floor(Math.random() * 10000) + 5000,
        cropYieldPrediction: Math.max(85.0, Math.min(105.0, prev.cropYieldPrediction + (Math.random() - 0.5) * 2.0)),
        lastUpdate: Date.now()
      }));

      // Update precision farming sensors
      setPrecisionFarming(prev => ({
        ...prev,
        sensor_networks: {
          ...prev.sensor_networks,
          sensors_active: Math.max(8200, Math.min(8947, prev.sensor_networks.sensors_active + Math.floor((Math.random() - 0.5) * 20))),
          stations_operational: Math.max(165, Math.min(189, prev.sensor_networks.stations_operational + Math.floor((Math.random() - 0.5) * 3)))
        }
      }));

      // Update crop management data
      setCropManagement(prev => prev.map(field => ({
        ...field,
        soil_moisture: Math.max(20.0, Math.min(90.0, field.soil_moisture + (Math.random() - 0.5) * 4.0)),
        ndvi_value: Math.max(0.3, Math.min(0.9, field.ndvi_value + (Math.random() - 0.5) * 0.04)),
        harvest_readiness: field.harvest_readiness < 95 ? field.harvest_readiness + Math.random() * 2 : field.harvest_readiness
      })));

      // Update weather data
      setWeatherData(prev => ({
        ...prev,
        current_conditions: {
          ...prev.current_conditions,
          temperature: Math.max(5.0, Math.min(45.0, prev.current_conditions.temperature + (Math.random() - 0.5) * 3.0)),
          humidity: Math.max(20.0, Math.min(95.0, prev.current_conditions.humidity + (Math.random() - 0.5) * 5.0)),
          wind_speed: Math.max(0.0, Math.min(35.0, prev.current_conditions.wind_speed + (Math.random() - 0.5) * 3.0))
        }
      }));

    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'SMART_FARMING_ACTIVE':
      case 'AUTOMATED':
      case 'AI_ENABLED':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'FUNCTIONAL':
      case 'ONLINE':
      case 'OPTIMIZED':
      case 'CONTINUOUS':
      case 'PRECISION_APPLIED':
      case 'COMPLETE':
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SCHEDULED':
      case 'MODERATE':
      case 'MONITORED':
      case 'ELEVATED':
      case 'HIGH':
      case 'HEAT_STRESS':
      case 'DROUGHT_STRESS': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL_NEEDED':
      case 'VERY_HIGH':
      case 'SEVERE_DROUGHT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'LOW':
      case 'MINIMAL':
      case 'NONE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const getCropHealthColor = (stage, stress, pest) => {
    if (stress === 'SEVERE_DROUGHT' || pest === 'VERY_HIGH') return 'text-red-400';
    if (stress === 'DROUGHT_STRESS' || stress === 'HEAT_STRESS' || pest === 'HIGH') return 'text-orange-400';
    if (stress === 'NONE' && pest === 'LOW') return 'text-green-400';
    return 'text-yellow-400';
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

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🌾 AGRICULTURAL OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(agriculturalStatus.operationalStatus)}`}>
            {agriculturalStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {agriculturalStatus.farmsConnected}/{agriculturalStatus.totalFarms} Farms
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatLargeNumber(agriculturalStatus.fieldsMonitored)} Fields
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            Yield {formatNumber(agriculturalStatus.cropYieldPrediction)}%
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Precision Farming & Smart Agriculture
          </div>
        </div>
      </div>

      {/* Agricultural Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">CROP YIELD PREDICTION</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(agriculturalStatus.cropYieldPrediction)}%
              </div>
              <div className="text-xs text-green-300">
                Expected vs planned yield
              </div>
            </div>
            <div className="text-3xl opacity-60">🌱</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">FIELDS MONITORED</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(agriculturalStatus.fieldsMonitored)}
              </div>
              <div className="text-xs text-blue-300">
                IoT-enabled precision fields
              </div>
            </div>
            <div className="text-3xl opacity-60">🚜</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">LIVESTOCK TRACKED</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatLargeNumber(agriculturalStatus.livestockTracked)}
              </div>
              <div className="text-xs text-purple-300">
                Animals with sensors
              </div>
            </div>
            <div className="text-3xl opacity-60">🐄</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">DATA POINTS/DAY</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatLargeNumber(agriculturalStatus.dailyDataPoints)}
              </div>
              <div className="text-xs text-orange-300">
                Sensor data collected
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>
      </div>

      {/* Precision Farming Networks */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📡 PRECISION FARMING & IoT SENSOR NETWORKS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Sensor Networks</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Soil Sensors:</span>
                <span className="text-blue-400">{precisionFarming.sensor_networks.sensors_active}/{precisionFarming.sensor_networks.soil_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weather Stations:</span>
                <span className="text-green-400">{precisionFarming.sensor_networks.stations_operational}/{precisionFarming.sensor_networks.weather_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Moisture Sensors:</span>
                <span className="text-purple-400">{precisionFarming.sensor_networks.moisture_active}/{precisionFarming.sensor_networks.moisture_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">pH Sensors:</span>
                <span className="text-orange-400">{precisionFarming.sensor_networks.ph_operational}/{precisionFarming.sensor_networks.ph_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Nutrient Sensors:</span>
                <span className="text-cyan-400">{precisionFarming.sensor_networks.nutrient_functional}/{precisionFarming.sensor_networks.nutrient_sensors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Temperature:</span>
                <span className="text-yellow-400">{precisionFarming.sensor_networks.temp_sensors_active}/{precisionFarming.sensor_networks.temperature_sensors}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">IoT Infrastructure</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Edge Gateways:</span>
                <span className="text-blue-400">{precisionFarming.iot_infrastructure.gateways_online}/{precisionFarming.iot_infrastructure.edge_gateways}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wireless Nodes:</span>
                <span className="text-green-400">{formatLargeNumber(precisionFarming.iot_infrastructure.nodes_connected)}/{formatLargeNumber(precisionFarming.iot_infrastructure.wireless_nodes)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Satellite Coverage:</span>
                <span className="text-purple-400">{precisionFarming.iot_infrastructure.satellite_coverage.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Connectivity:</span>
                <span className="text-orange-400">{precisionFarming.iot_infrastructure.cellular_connectivity.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Transmission:</span>
                <span className={`${getStatusColor(precisionFarming.iot_infrastructure.data_transmission)?.split(' ')[0] || 'text-green-400'}`}>
                  {precisionFarming.iot_infrastructure.data_transmission}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network Reliability:</span>
                <span className="text-cyan-400">{formatNumber(precisionFarming.iot_infrastructure.network_reliability)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Latency:</span>
                <span className="text-yellow-400">{formatNumber(precisionFarming.iot_infrastructure.latency_ms)}ms</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Field Monitoring</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">NDVI Analysis:</span>
                <span className="text-blue-400">{precisionFarming.field_monitoring.ndvi_analysis.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Crop Stress:</span>
                <span className={`${getStatusColor(precisionFarming.field_monitoring.crop_stress_detection)?.split(' ')[0] || 'text-green-400'}`}>
                  {precisionFarming.field_monitoring.crop_stress_detection.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pest Monitoring:</span>
                <span className="text-purple-400">{precisionFarming.field_monitoring.pest_monitoring.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Disease ID:</span>
                <span className="text-orange-400">{precisionFarming.field_monitoring.disease_identification.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Growth Tracking:</span>
                <span className="text-cyan-400">{precisionFarming.field_monitoring.growth_stage_tracking.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Yield Prediction:</span>
                <span className="text-yellow-400">{precisionFarming.field_monitoring.yield_prediction.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Variable Rate App:</span>
                <span className="text-pink-400">{precisionFarming.field_monitoring.variable_rate_application.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Management */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌽 CROP MANAGEMENT & FIELD OPERATIONS
        </h3>
        <div className="space-y-3">
          {cropManagement.map((field) => (
            <div key={field.field_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{field.field_id}</div>
                  <span className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {field.crop_type}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getCropHealthColor(field.growth_stage, field.weather_stress, field.pest_pressure)}`}>
                    {field.growth_stage.replace(/_/g, ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(field.irrigation_status)}`}>
                    {field.irrigation_status.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {formatNumber(field.area_hectares)} ha
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Variety: </span>
                <span className="text-cyan-400">{field.variety}</span>
                <span className="text-gray-400"> | Planted: </span>
                <span className="text-green-400">{formatDate(field.planting_date)}</span>
                <span className="text-gray-400"> | Days to Maturity: </span>
                <span className="text-purple-400">{field.days_to_maturity}</span>
                <span className="text-gray-400"> | Harvest Ready: </span>
                <span className="text-orange-400">{formatNumber(field.harvest_readiness)}%</span>
              </div>
              
              <div className="text-xs mb-2">
                <span className="text-gray-400">Soil Moisture: </span>
                <span className="text-blue-400">{formatNumber(field.soil_moisture)}%</span>
                <span className="text-gray-400"> | NDVI: </span>
                <span className="text-green-400">{formatNumber(field.ndvi_value, 2)}</span>
                <span className="text-gray-400"> | Predicted Yield: </span>
                <span className="text-purple-400">{formatNumber(field.predicted_yield)} t/ha</span>
                <span className="text-gray-400"> | Fertilizer: </span>
                <span className={`${getStatusColor(field.fertilizer_applied)?.split(' ')[0] || 'text-green-400'}`}>
                  {field.fertilizer_applied.replace(/_/g, ' ')}
                </span>
              </div>

              <div className="text-xs">
                <span className="text-gray-400">Pest Pressure: </span>
                <span className={`${getStatusColor(field.pest_pressure)?.split(' ')[0] || 'text-gray-400'}`}>
                  {field.pest_pressure}
                </span>
                <span className="text-gray-400"> | Disease Risk: </span>
                <span className={`${getStatusColor(field.disease_risk)?.split(' ')[0] || 'text-gray-400'}`}>
                  {field.disease_risk}
                </span>
                <span className="text-gray-400"> | Weather Stress: </span>
                <span className={`${getStatusColor(field.weather_stress)?.split(' ')[0] || 'text-gray-400'}`}>
                  {field.weather_stress.replace(/_/g, ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agricultural Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 AGRICULTURAL PERFORMANCE TRENDS (30 DAYS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={agriculturalHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="date" stroke="#9CA3AF" fontSize={10}/>
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
              dataKey="soil_moisture_avg"
              stroke="#06B6D4"
              fill="#06B6D4"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Soil Moisture Avg %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="crop_health_index" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Crop Health Index"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="yield_prediction" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Yield Prediction %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="irrigation_efficiency" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Irrigation Efficiency %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="livestock_health_score" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Livestock Health Score"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pest_pressure_level" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Pest Pressure Level"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="weather_stress_index" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Weather Stress Index"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Livestock Management and Smart Irrigation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Livestock Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🐄 LIVESTOCK MANAGEMENT & ANIMAL TRACKING
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Cattle Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Cattle:</span>
                  <span className="text-blue-400">{formatLargeNumber(livestockManagement.cattle_herds.total_cattle)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tracked:</span>
                  <span className="text-green-400">{formatLargeNumber(livestockManagement.cattle_herds.cattle_tracked)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Breeding Stock:</span>
                  <span className="text-purple-400">{formatLargeNumber(livestockManagement.cattle_herds.breeding_stock)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Feedlot:</span>
                  <span className="text-orange-400">{formatLargeNumber(livestockManagement.cattle_herds.feedlot_cattle)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dairy Cows:</span>
                  <span className="text-cyan-400">{formatLargeNumber(livestockManagement.cattle_herds.dairy_cows)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Health Monitoring:</span>
                  <span className="text-yellow-400">{livestockManagement.cattle_herds.health_monitoring.replace(/_/g, ' ')}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Swine Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Swine:</span>
                  <span className="text-blue-400">{formatLargeNumber(livestockManagement.swine_operations.total_swine)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monitored:</span>
                  <span className="text-green-400">{formatLargeNumber(livestockManagement.swine_operations.swine_monitored)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Breeding Sows:</span>
                  <span className="text-purple-400">{formatLargeNumber(livestockManagement.swine_operations.breeding_sows)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Feed Conversion:</span>
                  <span className="text-orange-400">{formatNumber(livestockManagement.swine_operations.feed_conversion)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mortality Rate:</span>
                  <span className="text-red-400">{formatNumber(livestockManagement.swine_operations.mortality_rate)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Poultry Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Birds:</span>
                  <span className="text-blue-400">{formatLargeNumber(livestockManagement.poultry_farms.total_birds)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tracked:</span>
                  <span className="text-green-400">{formatLargeNumber(livestockManagement.poultry_farms.birds_tracked)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Laying Hens:</span>
                  <span className="text-purple-400">{formatLargeNumber(livestockManagement.poultry_farms.laying_hens)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Feed Efficiency:</span>
                  <span className="text-orange-400">{formatNumber(livestockManagement.poultry_farms.feed_efficiency)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Irrigation */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💧 SMART IRRIGATION & WATER MANAGEMENT
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Irrigation Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Center Pivot:</span>
                  <span className="text-blue-400">{smartIrrigation.irrigation_systems.pivots_operational}/{smartIrrigation.irrigation_systems.center_pivot_systems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Drip Zones:</span>
                  <span className="text-green-400">{smartIrrigation.irrigation_systems.drip_zones_active}/{smartIrrigation.irrigation_systems.drip_irrigation_zones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sprinklers:</span>
                  <span className="text-purple-400">{smartIrrigation.irrigation_systems.sprinklers_functional}/{smartIrrigation.irrigation_systems.sprinkler_systems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Micro Irrigation:</span>
                  <span className="text-orange-400">{smartIrrigation.irrigation_systems.micro_systems_working}/{smartIrrigation.irrigation_systems.micro_irrigation}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Water Sources</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Sources:</span>
                  <span className="text-blue-400">{smartIrrigation.water_management.sources_available}/{smartIrrigation.water_management.total_water_sources}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Groundwater Wells:</span>
                  <span className="text-green-400">{smartIrrigation.water_management.wells_operational}/{smartIrrigation.water_management.groundwater_wells}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Surface Water:</span>
                  <span className="text-purple-400">{smartIrrigation.water_management.surface_sources_active}/{smartIrrigation.water_management.surface_water_access}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rainwater Collection:</span>
                  <span className="text-orange-400">{smartIrrigation.water_management.collection_systems_active}/{smartIrrigation.water_management.rainwater_collection}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Water Quality:</span>
                  <span className={`${getStatusColor(smartIrrigation.water_management.water_quality_monitoring)?.split(' ')[0] || 'text-green-400'}`}>
                    {smartIrrigation.water_management.water_quality_monitoring}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Usage Efficiency:</span>
                  <span className="text-cyan-400">{formatNumber(smartIrrigation.water_management.usage_efficiency)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Scheduling Automation</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Weather Based:</span>
                  <span className={`${getStatusColor(smartIrrigation.scheduling_automation.weather_based_scheduling)?.split(' ')[0] || 'text-green-400'}`}>
                    {smartIrrigation.scheduling_automation.weather_based_scheduling.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Soil Triggers:</span>
                  <span className="text-green-400">{smartIrrigation.scheduling_automation.soil_moisture_triggers.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Crop Adjustments:</span>
                  <span className={`${getStatusColor(smartIrrigation.scheduling_automation.crop_stage_adjustments)?.split(' ')[0] || 'text-green-400'}`}>
                    {smartIrrigation.scheduling_automation.crop_stage_adjustments}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fertigation:</span>
                  <span className="text-orange-400">{smartIrrigation.scheduling_automation.fertigation_scheduling.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Variable Rate:</span>
                  <span className="text-cyan-400">{smartIrrigation.scheduling_automation.water_application_rate.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ET Calculation:</span>
                  <span className="text-yellow-400">{smartIrrigation.scheduling_automation.evapotranspiration_calculation.replace(/_/g, ' ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Data and Farm Automation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weather Data */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌤️ WEATHER MONITORING & CLIMATE DATA
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Current Conditions</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Temperature:</span>
                  <span className="text-blue-400">{formatNumber(weatherData.current_conditions.temperature)}°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Humidity:</span>
                  <span className="text-green-400">{formatNumber(weatherData.current_conditions.humidity)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wind Speed:</span>
                  <span className="text-purple-400">{formatNumber(weatherData.current_conditions.wind_speed)} km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wind Direction:</span>
                  <span className="text-orange-400">{weatherData.current_conditions.wind_direction}°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Solar Radiation:</span>
                  <span className="text-yellow-400">{formatNumber(weatherData.current_conditions.solar_radiation)} W/m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rainfall 24h:</span>
                  <span className="text-cyan-400">{formatNumber(weatherData.current_conditions.rainfall_24h)} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pressure:</span>
                  <span className="text-pink-400">{formatNumber(weatherData.current_conditions.barometric_pressure)} hPa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Growing Degree Days:</span>
                  <span className="text-lime-400">{formatNumber(weatherData.current_conditions.growing_degree_days)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Climate Monitoring</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Microclimate Stations:</span>
                  <span className="text-blue-400">{weatherData.climate_monitoring.stations_reporting}/{weatherData.climate_monitoring.microclimate_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Canopy Temperature:</span>
                  <span className="text-green-400">{weatherData.climate_monitoring.canopy_temperature.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Leaf Wetness:</span>
                  <span className="text-purple-400">{weatherData.climate_monitoring.leaf_wetness.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Soil Temperature:</span>
                  <span className="text-orange-400">{weatherData.climate_monitoring.soil_temperature.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Evapotranspiration:</span>
                  <span className="text-cyan-400">{weatherData.climate_monitoring.evapotranspiration.replace(/_/g, ' ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Farm Automation */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 FARM AUTOMATION & AUTONOMOUS SYSTEMS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Autonomous Equipment</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Autonomous Tractors:</span>
                  <span className="text-blue-400">{farmAutomation.autonomous_equipment.tractors_operational}/{farmAutomation.autonomous_equipment.tractors_autonomous}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Auto Harvesters:</span>
                  <span className="text-green-400">{farmAutomation.autonomous_equipment.harvesters_active}/{farmAutomation.autonomous_equipment.harvesters_autonomous}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Spraying Drones:</span>
                  <span className="text-purple-400">{farmAutomation.autonomous_equipment.drones_flight_ready}/{farmAutomation.autonomous_equipment.spraying_drones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seeding Robots:</span>
                  <span className="text-orange-400">{farmAutomation.autonomous_equipment.seeding_robots_active}/{farmAutomation.autonomous_equipment.seeding_robots}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weeding Robots:</span>
                  <span className="text-cyan-400">{farmAutomation.autonomous_equipment.weed_robots_operational}/{farmAutomation.autonomous_equipment.weeding_robots}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Robotic Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Milking Robots:</span>
                  <span className="text-blue-400">{farmAutomation.robotic_systems.milking_systems_active}/{farmAutomation.robotic_systems.milking_robots}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Feeding Robots:</span>
                  <span className="text-green-400">{farmAutomation.robotic_systems.feeding_systems_online}/{farmAutomation.robotic_systems.feeding_robots}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fruit Picking:</span>
                  <span className="text-purple-400">{farmAutomation.robotic_systems.picking_robots_active}/{farmAutomation.robotic_systems.fruit_picking_robots}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Greenhouse Robots:</span>
                  <span className="text-orange-400">{farmAutomation.robotic_systems.greenhouse_systems_operational}/{farmAutomation.robotic_systems.greenhouse_robots}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">AI Decision Support</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Crop Advisory:</span>
                  <span className="text-blue-400">{farmAutomation.ai_decision_support.crop_advisory_system.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pest Prediction:</span>
                  <span className="text-green-400">{farmAutomation.ai_decision_support.pest_prediction_models.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Forecasting:</span>
                  <span className="text-purple-400">{farmAutomation.ai_decision_support.market_price_forecasting.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resource Optimization:</span>
                  <span className="text-orange-400">{farmAutomation.ai_decision_support.resource_optimization.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Yield Maximization:</span>
                  <span className="text-cyan-400">{farmAutomation.ai_decision_support.yield_maximization.replace(/_/g, ' ').substring(0, 20)}...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sustainability:</span>
                  <span className="text-yellow-400">{farmAutomation.ai_decision_support.sustainability_scoring.replace(/_/g, ' ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalOperationsCenter;