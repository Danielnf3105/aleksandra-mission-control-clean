// SmartBuildingOperations.js - Smart Building Operations Center & Building Management System Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SmartBuildingOperations = () => {
  const [buildingStatus, setBuildingStatus] = useState({
    operationalStatus: 'OPTIMAL',
    totalFloors: 45,
    totalZones: 234,
    activeZones: 228,
    maintenanceZones: 6,
    totalOccupants: 1847,
    peakOccupancy: 2340,
    energyConsumption: 2847.5, // kWh today
    energyEfficiency: 94.2, // percentage
    waterUsage: 15678, // liters today
    wasteManagement: 89.7, // percentage recycled
    airQualityIndex: 42, // good quality
    averageTemperature: 22.4, // celsius
    averageHumidity: 45.8, // percentage
    securityLevel: 'NORMAL',
    lastUpdate: Date.now()
  });

  const [floorStatus, setFloorStatus] = useState([
    {
      floor_id: 'F001_GROUND',
      name: 'Ground Floor',
      level: 'Ground',
      type: 'LOBBY_RETAIL',
      status: 'OPERATIONAL',
      occupancy_current: 234,
      occupancy_capacity: 400,
      temperature: 23.1,
      humidity: 44.2,
      air_quality: 38, // AQI
      lighting_level: 87.3, // percentage
      energy_usage: 127.8, // kWh today
      zones: [
        {
          zone_id: 'Z001_MAIN_LOBBY',
          name: 'Main Lobby',
          type: 'RECEPTION',
          occupancy: 67,
          capacity: 120,
          temperature: 22.8,
          lighting: 'AUTO',
          hvac_mode: 'COOLING',
          access_control: 'PUBLIC'
        },
        {
          zone_id: 'Z002_RETAIL_AREA',
          name: 'Retail Area',
          type: 'COMMERCIAL',
          occupancy: 89,
          capacity: 150,
          temperature: 23.4,
          lighting: 'FULL',
          hvac_mode: 'COOLING',
          access_control: 'PUBLIC'
        },
        {
          zone_id: 'Z003_SECURITY_DESK',
          name: 'Security Desk',
          type: 'SECURITY',
          occupancy: 3,
          capacity: 8,
          temperature: 22.1,
          lighting: 'FULL',
          hvac_mode: 'COOLING',
          access_control: 'RESTRICTED'
        }
      ],
      hvac_systems: 4,
      hvac_operational: 4,
      fire_safety: 'ARMED',
      security_cameras: 12,
      access_points: 8
    },
    {
      floor_id: 'F015_OFFICE',
      name: 'Floor 15 - Executive Offices',
      level: '15',
      type: 'OFFICE',
      status: 'OPERATIONAL',
      occupancy_current: 67,
      occupancy_capacity: 120,
      temperature: 21.8,
      humidity: 43.7,
      air_quality: 41,
      lighting_level: 78.4,
      energy_usage: 89.3,
      zones: [
        {
          zone_id: 'Z045_EXEC_OFFICE_A',
          name: 'Executive Office A',
          type: 'PRIVATE_OFFICE',
          occupancy: 2,
          capacity: 6,
          temperature: 21.5,
          lighting: 'DIMMED',
          hvac_mode: 'AUTO',
          access_control: 'KEY_CARD'
        },
        {
          zone_id: 'Z046_CONFERENCE_ROOM',
          name: 'Executive Conference Room',
          type: 'MEETING',
          occupancy: 8,
          capacity: 16,
          temperature: 22.1,
          lighting: 'PRESENTATION',
          hvac_mode: 'COOLING',
          access_control: 'BIOMETRIC',
          av_system: 'ACTIVE'
        },
        {
          zone_id: 'Z047_OPEN_WORKSPACE',
          name: 'Open Workspace',
          type: 'COLLABORATIVE',
          occupancy: 23,
          capacity: 45,
          temperature: 21.9,
          lighting: 'TASK',
          hvac_mode: 'AUTO',
          access_control: 'KEY_CARD'
        }
      ],
      hvac_systems: 2,
      hvac_operational: 2,
      fire_safety: 'ARMED',
      security_cameras: 8,
      access_points: 4
    },
    {
      floor_id: 'F032_DATA_CENTER',
      name: 'Floor 32 - Data Center',
      level: '32',
      type: 'TECHNICAL',
      status: 'CRITICAL',
      occupancy_current: 8,
      occupancy_capacity: 20,
      temperature: 18.2,
      humidity: 42.1,
      air_quality: 35,
      lighting_level: 95.0,
      energy_usage: 1247.6,
      zones: [
        {
          zone_id: 'Z098_SERVER_ROOM_A',
          name: 'Server Room A',
          type: 'DATA_CENTER',
          occupancy: 3,
          capacity: 8,
          temperature: 17.8,
          lighting: 'FULL',
          hvac_mode: 'PRECISION_COOLING',
          access_control: 'BIOMETRIC_DUAL',
          power_usage: 892.3 // kW
        },
        {
          zone_id: 'Z099_UPS_ROOM',
          name: 'UPS Room',
          type: 'POWER',
          occupancy: 1,
          capacity: 4,
          temperature: 19.1,
          lighting: 'EMERGENCY',
          hvac_mode: 'VENTILATION',
          access_control: 'BIOMETRIC_DUAL',
          power_usage: 156.7
        }
      ],
      hvac_systems: 3,
      hvac_operational: 3,
      fire_safety: 'SUPPRESSION_READY',
      security_cameras: 16,
      access_points: 2,
      environmental_monitoring: 'CRITICAL'
    },
    {
      floor_id: 'F043_MAINTENANCE',
      name: 'Floor 43 - Mechanical',
      level: '43',
      type: 'MECHANICAL',
      status: 'MAINTENANCE',
      occupancy_current: 12,
      occupancy_capacity: 24,
      temperature: 26.8,
      humidity: 52.3,
      air_quality: 67, // moderate due to mechanical operations
      lighting_level: 100.0,
      energy_usage: 234.8,
      maintenance_crew: 'HVAC Team Alpha',
      maintenance_type: 'CHILLER_SERVICING',
      eta_completion: Date.now() + 4 * 60 * 60 * 1000,
      hvac_systems: 8,
      hvac_operational: 6,
      fire_safety: 'ARMED',
      security_cameras: 6,
      access_points: 3
    }
  ]);

  const [buildingSystems, setBuildingSystems] = useState({
    hvac_systems: {
      total_units: 45,
      operational: 42,
      maintenance: 2,
      offline: 1,
      central_chiller: {
        status: 'OPERATIONAL',
        capacity: 2400, // tons
        current_load: 1847, // tons
        efficiency: 94.2, // percentage
        temperature_supply: 7.2, // celsius
        temperature_return: 12.8
      },
      air_handlers: [
        {
          id: 'AHU_01_MAIN',
          location: 'Floor 43 - North',
          status: 'OPERATIONAL',
          airflow: 15420, // CFM
          supply_temp: 13.5,
          return_temp: 24.1,
          filter_status: 'GOOD',
          fan_speed: 78.3 // percentage
        },
        {
          id: 'AHU_02_SOUTH',
          location: 'Floor 43 - South',
          status: 'OPERATIONAL',
          airflow: 14780,
          supply_temp: 14.1,
          return_temp: 23.8,
          filter_status: 'NEEDS_REPLACEMENT',
          fan_speed: 82.7
        },
        {
          id: 'AHU_03_DATA_CENTER',
          location: 'Floor 32 - Data Center',
          status: 'OPERATIONAL',
          airflow: 8940,
          supply_temp: 18.0,
          return_temp: 22.4,
          filter_status: 'GOOD',
          fan_speed: 95.2,
          redundancy: 'N+1'
        }
      ]
    },
    lighting_systems: {
      total_zones: 234,
      smart_zones: 228,
      manual_zones: 6,
      energy_savings: 34.7, // percentage vs traditional
      occupancy_sensors: 456,
      daylight_sensors: 89,
      led_fixtures: 8947,
      led_operational: 8834,
      led_maintenance: 113,
      brightness_avg: 82.4, // percentage
      color_temperature: 'AUTO'
    },
    security_systems: {
      access_control: {
        total_readers: 234,
        operational: 231,
        offline: 3,
        active_badges: 1847,
        failed_attempts: 12,
        tailgating_events: 3,
        visitor_badges: 67
      },
      surveillance: {
        total_cameras: 456,
        operational: 447,
        maintenance: 6,
        offline: 3,
        recording_capacity: 94.7, // percentage
        analytics_enabled: true,
        motion_detection: 'ACTIVE',
        facial_recognition: 'ENABLED'
      },
      intrusion_detection: {
        sensors_total: 189,
        sensors_armed: 189,
        false_alarms: 2,
        security_level: 'NORMAL',
        patrol_status: 'ON_SCHEDULE'
      }
    },
    fire_safety: {
      smoke_detectors: 789,
      heat_detectors: 234,
      sprinkler_zones: 45,
      suppression_zones: 3, // data center areas
      fire_alarm_panel: 'NORMAL',
      emergency_lighting: 'TESTED',
      exit_signs: 'ILLUMINATED',
      fire_pumps: 'STANDBY',
      last_test: Date.now() - 7 * 24 * 60 * 60 * 1000
    }
  });

  const [iotSensors, setIotSensors] = useState([
    {
      sensor_id: 'TEMP_001_F15_Z045',
      type: 'TEMPERATURE',
      location: 'Floor 15 - Executive Office A',
      status: 'ONLINE',
      value: 21.5,
      unit: '°C',
      range: { min: 18.0, max: 26.0 },
      last_reading: Date.now() - 2 * 60 * 1000,
      battery_level: 87,
      signal_strength: 'STRONG'
    },
    {
      sensor_id: 'HUMID_002_F32_Z098',
      type: 'HUMIDITY',
      location: 'Floor 32 - Server Room A',
      status: 'ONLINE',
      value: 42.1,
      unit: '%RH',
      range: { min: 40.0, max: 60.0 },
      last_reading: Date.now() - 1 * 60 * 1000,
      battery_level: 92,
      signal_strength: 'STRONG'
    },
    {
      sensor_id: 'OCCUP_003_F01_Z001',
      type: 'OCCUPANCY',
      location: 'Ground Floor - Main Lobby',
      status: 'ONLINE',
      value: 67,
      unit: 'people',
      capacity: 120,
      last_reading: Date.now() - 30 * 1000,
      battery_level: 73,
      signal_strength: 'GOOD'
    },
    {
      sensor_id: 'AIR_QUAL_004_F15_Z047',
      type: 'AIR_QUALITY',
      location: 'Floor 15 - Open Workspace',
      status: 'ONLINE',
      value: 41,
      unit: 'AQI',
      range: { min: 0, max: 50 },
      last_reading: Date.now() - 3 * 60 * 1000,
      battery_level: 89,
      signal_strength: 'STRONG'
    },
    {
      sensor_id: 'POWER_005_F32_Z098',
      type: 'POWER_METER',
      location: 'Floor 32 - Server Room A',
      status: 'ONLINE',
      value: 892.3,
      unit: 'kW',
      daily_consumption: 21415.2,
      last_reading: Date.now() - 1 * 60 * 1000,
      battery_level: 'WIRED',
      signal_strength: 'STRONG'
    },
    {
      sensor_id: 'WATER_006_F43_MECH',
      type: 'WATER_FLOW',
      location: 'Floor 43 - Mechanical Room',
      status: 'WARNING',
      value: 127.8,
      unit: 'L/min',
      range: { min: 100.0, max: 150.0 },
      alert: 'FLOW_RATE_HIGH',
      last_reading: Date.now() - 5 * 60 * 1000,
      battery_level: 56,
      signal_strength: 'WEAK'
    }
  ]);

  const [sustainabilityMetrics, setSustainabilityMetrics] = useState({
    energy_management: {
      total_consumption: 2847.5, // kWh today
      renewable_percentage: 34.8,
      peak_demand: 1247.8, // kW
      off_peak_usage: 67.3, // percentage
      energy_star_rating: 89,
      carbon_footprint: 1.247, // tons CO2 today
      cost_savings: 8947.23, // USD this month
      efficiency_improvement: 12.4 // percentage vs last year
    },
    water_conservation: {
      consumption_today: 15678, // liters
      recycled_water: 23.4, // percentage
      rainwater_harvested: 2340, // liters today
      leak_detection: 'ACTIVE',
      efficiency_rating: 'A+',
      cost_savings: 1247.89 // USD this month
    },
    waste_management: {
      recycling_rate: 89.7, // percentage
      compost_rate: 67.8,
      landfill_diversion: 94.2,
      electronic_waste: 'CERTIFIED_DISPOSAL',
      hazardous_waste: 'COMPLIANT',
      cost_savings: 2847.34 // USD this month
    },
    indoor_environment: {
      air_quality_avg: 42, // AQI
      natural_light: 78.4, // percentage utilization
      acoustic_comfort: 'OPTIMAL',
      thermal_comfort: 94.7, // percentage satisfied
      biophilic_elements: 'INTEGRATED',
      wellness_score: 87.3
    }
  });

  const [buildingTrends, setBuildingTrends] = useState([]);

  const generateBuildingTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        occupancy: Math.floor(1200 + Math.random() * 800),
        energy_consumption: 200 + Math.random() * 150,
        temperature: 20 + Math.random() * 6,
        air_quality: 30 + Math.random() * 25,
        humidity: 40 + Math.random() * 15,
        lighting_efficiency: 80 + Math.random() * 15
      });
    }
    return data;
  };

  useEffect(() => {
    setBuildingTrends(generateBuildingTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update building status
      setBuildingStatus(prev => ({
        ...prev,
        totalOccupants: Math.max(1500, Math.min(2200, prev.totalOccupants + Math.floor((Math.random() - 0.5) * 50))),
        energyConsumption: prev.energyConsumption + Math.random() * 50,
        averageTemperature: Math.max(20.0, Math.min(25.0, prev.averageTemperature + (Math.random() - 0.5) * 0.5)),
        averageHumidity: Math.max(40.0, Math.min(55.0, prev.averageHumidity + (Math.random() - 0.5) * 2.0)),
        airQualityIndex: Math.max(25, Math.min(60, prev.airQualityIndex + Math.floor((Math.random() - 0.5) * 5))),
        lastUpdate: Date.now()
      }));

      // Update IoT sensors
      setIotSensors(prev => prev.map(sensor => {
        if (sensor.type === 'TEMPERATURE') {
          return {
            ...sensor,
            value: Math.max(sensor.range.min, Math.min(sensor.range.max, 
              sensor.value + (Math.random() - 0.5) * 0.5)),
            last_reading: Date.now()
          };
        }
        if (sensor.type === 'OCCUPANCY') {
          return {
            ...sensor,
            value: Math.max(0, Math.min(sensor.capacity, 
              sensor.value + Math.floor((Math.random() - 0.5) * 8))),
            last_reading: Date.now()
          };
        }
        return sensor;
      }));

    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL':
      case 'OPERATIONAL':
      case 'ONLINE':
      case 'ARMED':
      case 'NORMAL':
      case 'ACTIVE':
      case 'GOOD':
      case 'STRONG':
      case 'ENABLED':
      case 'AUTO': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'CRITICAL':
      case 'DIMMED':
      case 'PRESENTATION':
      case 'TASK':
      case 'FULL': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'WARNING':
      case 'NEEDS_REPLACEMENT':
      case 'WEAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFFLINE':
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAirQualityColor = (aqi) => {
    if (aqi <= 50) return 'text-green-400';
    if (aqi <= 100) return 'text-yellow-400';
    if (aqi <= 150) return 'text-orange-400';
    return 'text-red-400';
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
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatTimeAhead = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
    return `in ${Math.floor(diff / 3600000)}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏢 SMART BUILDING OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {buildingStatus.totalOccupants} Occupants
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(buildingStatus.energyEfficiency, 1)}% Efficient
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            AQI {buildingStatus.airQualityIndex}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            BMS & IoT Systems
          </div>
        </div>
      </div>

      {/* Building Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ENERGY CONSUMPTION</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(buildingStatus.energyConsumption)}
              </div>
              <div className="text-xs text-blue-300">
                kWh Today ({formatNumber(buildingStatus.energyEfficiency, 1)}% efficient)
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">BUILDING OCCUPANCY</div>
              <div className="text-2xl font-bold text-green-100">
                {buildingStatus.totalOccupants}
              </div>
              <div className="text-xs text-green-300">
                of {buildingStatus.peakOccupancy} capacity ({formatNumber((buildingStatus.totalOccupants / buildingStatus.peakOccupancy) * 100, 1)}%)
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AIR QUALITY INDEX</div>
              <div className="text-2xl font-bold text-purple-100">
                {buildingStatus.airQualityIndex}
              </div>
              <div className="text-xs text-purple-300">
                Good Quality (0-50)
              </div>
            </div>
            <div className="text-3xl opacity-60">🌬️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CLIMATE CONTROL</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(buildingStatus.averageTemperature, 1)}°C
              </div>
              <div className="text-xs text-orange-300">
                {formatNumber(buildingStatus.averageHumidity, 1)}% humidity
              </div>
            </div>
            <div className="text-3xl opacity-60">🌡️</div>
          </div>
        </div>
      </div>

      {/* Floor Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏢 FLOOR STATUS & ZONE MANAGEMENT
        </h3>
        <div className="space-y-3">
          {floorStatus.map((floor) => (
            <div key={floor.floor_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{floor.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(floor.status)}`}>
                    {floor.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {floor.type.replace(/_/g, ' ')}
                  </span>
                  {floor.environmental_monitoring && (
                    <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                      {floor.environmental_monitoring}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Occupancy: </span>
                <span className="text-green-400">{floor.occupancy_current}</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{floor.occupancy_capacity}</span>
                <span className="text-gray-400"> ({formatNumber((floor.occupancy_current / floor.occupancy_capacity) * 100, 1)}%)</span>
                <span className="text-gray-400"> | Temp: </span>
                <span className="text-orange-400">{formatNumber(floor.temperature, 1)}°C</span>
                <span className="text-gray-400"> | Humidity: </span>
                <span className="text-cyan-400">{formatNumber(floor.humidity, 1)}%</span>
                <span className="text-gray-400"> | AQI: </span>
                <span className={getAirQualityColor(floor.air_quality)}>
                  {floor.air_quality}
                </span>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Energy: </span>
                <span className="text-yellow-400">{formatNumber(floor.energy_usage, 1)} kWh</span>
                <span className="text-gray-400"> | Lighting: </span>
                <span className="text-purple-400">{formatNumber(floor.lighting_level, 1)}%</span>
                <span className="text-gray-400"> | HVAC: </span>
                <span className="text-green-400">{floor.hvac_operational}</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{floor.hvac_systems}</span>
                <span className="text-gray-400"> | Cameras: </span>
                <span className="text-cyan-400">{floor.security_cameras}</span>
              </div>

              {floor.maintenance_crew && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Maintenance: </span>
                  <span className="text-orange-400">{floor.maintenance_type.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> by </span>
                  <span className="text-cyan-400">{floor.maintenance_crew}</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-yellow-400">{formatTimeAhead(floor.eta_completion)}</span>
                </div>
              )}

              {floor.zones && (
                <div className="text-xs">
                  <div className="text-gray-400 mb-2">Active Zones:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {floor.zones.map((zone) => (
                      <div key={zone.zone_id} className="bg-gray-600 rounded p-2">
                        <div className="font-bold text-white text-xs mb-1">{zone.name}</div>
                        <div className="text-xs">
                          <span className="text-gray-400">Occupancy: </span>
                          <span className="text-green-400">{zone.occupancy}</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-blue-400">{zone.capacity}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-400">Temp: </span>
                          <span className="text-orange-400">{formatNumber(zone.temperature, 1)}°C</span>
                          <span className="text-gray-400"> | Light: </span>
                          <span className={`${getStatusColor(zone.lighting).split(' ')[0]}`}>
                            {zone.lighting}
                          </span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-400">HVAC: </span>
                          <span className="text-cyan-400">{zone.hvac_mode.replace(/_/g, ' ')}</span>
                          <span className="text-gray-400"> | Access: </span>
                          <span className="text-purple-400">{zone.access_control.replace(/_/g, ' ')}</span>
                        </div>
                        {zone.power_usage && (
                          <div className="text-xs">
                            <span className="text-gray-400">Power: </span>
                            <span className="text-red-400">{formatNumber(zone.power_usage, 1)} kW</span>
                          </div>
                        )}
                        {zone.av_system && (
                          <div className="text-xs">
                            <span className="text-gray-400">A/V: </span>
                            <span className="text-blue-400">{zone.av_system}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Building Systems and IoT Sensors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Building Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚙️ BUILDING SYSTEMS & AUTOMATION
          </h3>
          
          {/* HVAC Systems */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">HVAC Systems</h4>
            <div className="text-xs mb-3">
              <span className="text-gray-400">Units: </span>
              <span className="text-green-400">{buildingSystems.hvac_systems.operational}</span>
              <span className="text-gray-400">/</span>
              <span className="text-blue-400">{buildingSystems.hvac_systems.total_units}</span>
              <span className="text-gray-400"> operational</span>
              <span className="text-gray-400"> | Chiller Load: </span>
              <span className="text-purple-400">{buildingSystems.hvac_systems.central_chiller.current_load}</span>
              <span className="text-gray-400">/</span>
              <span className="text-orange-400">{buildingSystems.hvac_systems.central_chiller.capacity} tons</span>
            </div>
            <div className="space-y-2">
              {buildingSystems.hvac_systems.air_handlers.map((ahu) => (
                <div key={ahu.id} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{ahu.id}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(ahu.status)}`}>
                      {ahu.status}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Airflow: </span>
                    <span className="text-cyan-400">{formatLargeNumber(ahu.airflow)} CFM</span>
                    <span className="text-gray-400"> | Supply: </span>
                    <span className="text-blue-400">{formatNumber(ahu.supply_temp, 1)}°C</span>
                    <span className="text-gray-400"> | Filter: </span>
                    <span className={ahu.filter_status === 'GOOD' ? 'text-green-400' : 'text-yellow-400'}>
                      {ahu.filter_status.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Systems */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Security Systems</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Access Readers:</span>
                <span className="text-green-400">{buildingSystems.security_systems.access_control.operational}/{buildingSystems.security_systems.access_control.total_readers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Badges:</span>
                <span className="text-blue-400">{buildingSystems.security_systems.access_control.active_badges}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Surveillance Cameras:</span>
                <span className="text-cyan-400">{buildingSystems.security_systems.surveillance.operational}/{buildingSystems.security_systems.surveillance.total_cameras}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Intrusion Sensors:</span>
                <span className="text-purple-400">{buildingSystems.security_systems.intrusion_detection.sensors_armed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Failed Access Attempts:</span>
                <span className="text-yellow-400">{buildingSystems.security_systems.access_control.failed_attempts}</span>
              </div>
            </div>
          </div>
        </div>

        {/* IoT Sensors */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 IoT SENSORS & REAL-TIME MONITORING
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {iotSensors.map((sensor) => (
              <div key={sensor.sensor_id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{sensor.sensor_id}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(sensor.status)}`}>
                      {sensor.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {sensor.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Location: </span>
                  <span className="text-cyan-400">{sensor.location}</span>
                  <span className="text-gray-400"> | Last Reading: </span>
                  <span className="text-green-400">{formatTime(sensor.last_reading)}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Value: </span>
                  <span className={sensor.alert ? 'text-yellow-400' : 'text-blue-400'}>
                    {formatNumber(sensor.value, sensor.type === 'TEMPERATURE' ? 1 : 0)} {sensor.unit}
                  </span>
                  {sensor.capacity && (
                    <>
                      <span className="text-gray-400">/</span>
                      <span className="text-purple-400">{sensor.capacity}</span>
                    </>
                  )}
                  {sensor.range && (
                    <>
                      <span className="text-gray-400"> (Range: </span>
                      <span className="text-orange-400">{formatNumber(sensor.range.min, 1)}-{formatNumber(sensor.range.max, 1)}</span>
                      <span className="text-gray-400">)</span>
                    </>
                  )}
                </div>

                <div className="text-xs">
                  {sensor.battery_level !== 'WIRED' && (
                    <>
                      <span className="text-gray-400">Battery: </span>
                      <span className={sensor.battery_level > 60 ? 'text-green-400' : 
                                       sensor.battery_level > 30 ? 'text-yellow-400' : 'text-red-400'}>
                        {sensor.battery_level}%
                      </span>
                      <span className="text-gray-400"> | </span>
                    </>
                  )}
                  <span className="text-gray-400">Signal: </span>
                  <span className={`${getStatusColor(sensor.signal_strength).split(' ')[0]}`}>
                    {sensor.signal_strength}
                  </span>
                  {sensor.daily_consumption && (
                    <>
                      <span className="text-gray-400"> | Daily: </span>
                      <span className="text-purple-400">{formatNumber(sensor.daily_consumption, 1)} kWh</span>
                    </>
                  )}
                </div>

                {sensor.alert && (
                  <div className="text-xs mt-2">
                    <span className="text-red-400">⚠️ {sensor.alert.replace(/_/g, ' ')}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Building Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 BUILDING OPERATIONS TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={buildingTrends}>
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
              dataKey="occupancy"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Occupancy"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="energy_consumption" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Energy (kWh/hr)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="temperature" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Avg Temperature (°C)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="air_quality" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Air Quality Index"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="humidity" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Humidity %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="lighting_efficiency" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Lighting Efficiency %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sustainability Metrics and Performance KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sustainability Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌱 SUSTAINABILITY & ENVIRONMENTAL PERFORMANCE
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Energy Management</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Renewable Energy:</span>
                <span className="text-green-400">{formatNumber(sustainabilityMetrics.energy_management.renewable_percentage, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Energy Star Rating:</span>
                <span className="text-blue-400">{sustainabilityMetrics.energy_management.energy_star_rating}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Carbon Footprint:</span>
                <span className="text-orange-400">{formatNumber(sustainabilityMetrics.energy_management.carbon_footprint, 3)} tons CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cost Savings:</span>
                <span className="text-green-400">{formatCurrency(sustainabilityMetrics.energy_management.cost_savings)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Water Conservation</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Recycled Water:</span>
                <span className="text-cyan-400">{formatNumber(sustainabilityMetrics.water_conservation.recycled_water, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rainwater Harvested:</span>
                <span className="text-blue-400">{formatLargeNumber(sustainabilityMetrics.water_conservation.rainwater_harvested)}L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Efficiency Rating:</span>
                <span className="text-green-400">{sustainabilityMetrics.water_conservation.efficiency_rating}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Waste Management</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Recycling Rate:</span>
                <span className="text-green-400">{formatNumber(sustainabilityMetrics.waste_management.recycling_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Landfill Diversion:</span>
                <span className="text-purple-400">{formatNumber(sustainabilityMetrics.waste_management.landfill_diversion, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">E-Waste Disposal:</span>
                <span className="text-orange-400">{sustainabilityMetrics.waste_management.electronic_waste}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance KPIs */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 SMART BUILDING PERFORMANCE KPIs
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Zone Utilization</div>
              <div className="text-white font-bold text-lg">
                {formatNumber((buildingStatus.activeZones / buildingStatus.totalZones) * 100, 1)}%
              </div>
              <div className="text-green-400 text-xs">{buildingStatus.activeZones}/{buildingStatus.totalZones} zones</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Energy Efficiency</div>
              <div className="text-white font-bold text-lg">
                {formatNumber(buildingStatus.energyEfficiency, 1)}%
              </div>
              <div className="text-blue-400 text-xs">optimization rate</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Occupancy Rate</div>
              <div className="text-white font-bold text-lg">
                {formatNumber((buildingStatus.totalOccupants / buildingStatus.peakOccupancy) * 100, 1)}%
              </div>
              <div className="text-purple-400 text-xs">of capacity</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Thermal Comfort</div>
              <div className="text-white font-bold text-lg">
                {formatNumber(sustainabilityMetrics.indoor_environment.thermal_comfort, 1)}%
              </div>
              <div className="text-orange-400 text-xs">satisfaction</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Security Level</div>
              <div className="text-white font-bold text-lg">
                {buildingStatus.securityLevel}
              </div>
              <div className="text-cyan-400 text-xs">status</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Wellness Score</div>
              <div className="text-white font-bold text-lg">
                {formatNumber(sustainabilityMetrics.indoor_environment.wellness_score, 1)}
              </div>
              <div className="text-yellow-400 text-xs">overall rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartBuildingOperations;