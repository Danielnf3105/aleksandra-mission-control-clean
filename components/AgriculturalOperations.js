// AgriculturalOperations.js - Agricultural Operations Control Center & Precision Farming Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const AgriculturalOperations = () => {
  const [fields, setFields] = useState([
    {
      id: 'field_001',
      name: 'North Corn Field',
      crop: 'Corn',
      variety: 'Pioneer P1197AM',
      acreage: 245.7,
      zone: 'Zone A',
      plantingDate: Date.now() - 85 * 24 * 60 * 60 * 1000, // 85 days ago
      expectedHarvest: Date.now() + 45 * 24 * 60 * 60 * 1000, // 45 days from now
      growthStage: 'R3 - Grain Filling',
      healthScore: 8.2, // out of 10
      irrigationStatus: 'ACTIVE',
      soilMoisture: 67.3, // percentage
      soilTemperature: 22.4, // Celsius
      soilPH: 6.8,
      soilNitrogen: 85.2, // ppm
      soilPhosphorus: 42.1, // ppm
      soilPotassium: 178.5, // ppm
      ndvi: 0.78, // Normalized Difference Vegetation Index
      lastDroneInspection: Date.now() - 2 * 24 * 60 * 60 * 1000,
      pestAlerts: ['European Corn Borer detected'],
      diseaseAlerts: [],
      equipmentDeployed: ['Pivot Irrigation System A', 'Soil Sensor Array'],
      yieldEstimate: 185.3, // bushels per acre
      marketValue: 1247850, // USD estimated
      lastUpdate: Date.now() - 15 * 60 * 1000,
      coordinates: { lat: 42.3601, lng: -93.9383 }
    },
    {
      id: 'field_002',
      name: 'South Soybean Field',
      crop: 'Soybeans',
      variety: 'Asgrow AG2834',
      acreage: 187.4,
      zone: 'Zone B',
      plantingDate: Date.now() - 78 * 24 * 60 * 60 * 1000,
      expectedHarvest: Date.now() + 52 * 24 * 60 * 60 * 1000,
      growthStage: 'R5 - Seed Filling',
      healthScore: 7.9,
      irrigationStatus: 'SCHEDULED',
      soilMoisture: 45.8,
      soilTemperature: 21.7,
      soilPH: 7.1,
      soilNitrogen: 62.4,
      soilPhosphorus: 38.9,
      soilPotassium: 165.2,
      ndvi: 0.73,
      lastDroneInspection: Date.now() - 1 * 24 * 60 * 60 * 1000,
      pestAlerts: [],
      diseaseAlerts: ['White Mold risk - monitor closely'],
      equipmentDeployed: ['Sprinkler System B', 'Weather Station'],
      yieldEstimate: 58.7, // bushels per acre
      marketValue: 1689420,
      lastUpdate: Date.now() - 8 * 60 * 1000,
      coordinates: { lat: 42.3401, lng: -93.9583 }
    },
    {
      id: 'field_003',
      name: 'East Wheat Field',
      crop: 'Winter Wheat',
      variety: 'WB-Grainfield',
      acreage: 134.2,
      zone: 'Zone C',
      plantingDate: Date.now() - 198 * 24 * 60 * 60 * 1000, // Fall planting
      expectedHarvest: Date.now() + 28 * 24 * 60 * 60 * 1000,
      growthStage: 'Grain Filling',
      healthScore: 9.1,
      irrigationStatus: 'OFF',
      soilMoisture: 52.1,
      soilTemperature: 23.1,
      soilPH: 6.9,
      soilNitrogen: 78.6,
      soilPhosphorus: 45.3,
      soilPotassium: 189.7,
      ndvi: 0.81,
      lastDroneInspection: Date.now() - 3 * 24 * 60 * 60 * 1000,
      pestAlerts: [],
      diseaseAlerts: [],
      equipmentDeployed: ['Soil Sensor Grid', 'Bird Deterrent System'],
      yieldEstimate: 72.4, // bushels per acre
      marketValue: 685320,
      lastUpdate: Date.now() - 12 * 60 * 1000,
      coordinates: { lat: 42.3701, lng: -93.9183 }
    },
    {
      id: 'field_004',
      name: 'West Pasture',
      crop: 'Alfalfa',
      variety: 'WL 363HQ',
      acreage: 89.6,
      zone: 'Zone D',
      plantingDate: Date.now() - 365 * 24 * 60 * 60 * 1000, // Perennial
      expectedHarvest: Date.now() + 14 * 24 * 60 * 60 * 1000, // 3rd cutting
      growthStage: 'Pre-Bloom',
      healthScore: 8.7,
      irrigationStatus: 'ACTIVE',
      soilMoisture: 71.2,
      soilTemperature: 20.8,
      soilPH: 7.3,
      soilNitrogen: 125.4,
      soilPhosphorus: 52.7,
      soilPotassium: 245.1,
      ndvi: 0.76,
      lastDroneInspection: Date.now() - 4 * 24 * 60 * 60 * 1000,
      pestAlerts: ['Alfalfa Weevil larvae spotted'],
      diseaseAlerts: [],
      equipmentDeployed: ['Sprinkler Array', 'Cattle Exclusion Fence'],
      yieldEstimate: 6.8, // tons per acre
      marketValue: 183680,
      lastUpdate: Date.now() - 22 * 60 * 1000,
      coordinates: { lat: 42.3501, lng: -93.9783 }
    },
    {
      id: 'field_005',
      name: 'Vegetable Plot',
      crop: 'Mixed Vegetables',
      variety: 'Tomatoes, Peppers, Onions',
      acreage: 12.8,
      zone: 'Zone E',
      plantingDate: Date.now() - 65 * 24 * 60 * 60 * 1000,
      expectedHarvest: Date.now() + 15 * 24 * 60 * 60 * 1000,
      growthStage: 'Fruit Development',
      healthScore: 8.9,
      irrigationStatus: 'DRIP_ACTIVE',
      soilMoisture: 78.4,
      soilTemperature: 24.2,
      soilPH: 6.5,
      soilNitrogen: 145.8,
      soilPhosphorus: 67.3,
      soilPotassium: 198.4,
      ndvi: 0.83,
      lastDroneInspection: Date.now() - 1 * 24 * 60 * 60 * 1000,
      pestAlerts: [],
      diseaseAlerts: ['Tomato Late Blight watch'],
      equipmentDeployed: ['Drip Irrigation', 'Greenhouse Control'],
      yieldEstimate: 28.5, // tons per acre
      marketValue: 456800,
      lastUpdate: Date.now() - 5 * 60 * 1000,
      coordinates: { lat: 42.3601, lng: -93.9283 }
    }
  ]);

  const [livestock, setLivestock] = useState([
    {
      id: 'livestock_001',
      type: 'Cattle',
      breed: 'Angus',
      count: 247,
      area: 'North Pasture',
      healthStatus: 'GOOD',
      averageWeight: 1245, // pounds
      feedConsumption: 8750, // pounds per day
      waterConsumption: 3420, // gallons per day
      reproductiveStatus: {
        pregnant: 38,
        nursing: 25,
        breeding: 12
      },
      vaccinations: {
        current: 247,
        upcoming: 0,
        overdue: 0
      },
      alerts: ['Breeding season monitoring'],
      gps: {
        tracked: 247,
        geofenced: true,
        alertsActive: 2
      },
      lastVetVisit: Date.now() - 14 * 24 * 60 * 60 * 1000,
      nextVetScheduled: Date.now() + 77 * 24 * 60 * 60 * 1000,
      marketValue: 1481250, // USD
      lastUpdate: Date.now() - 18 * 60 * 1000
    },
    {
      id: 'livestock_002',
      type: 'Pigs',
      breed: 'Yorkshire-Duroc Cross',
      count: 485,
      area: 'East Barn Complex',
      healthStatus: 'EXCELLENT',
      averageWeight: 245, // pounds
      feedConsumption: 4365, // pounds per day
      waterConsumption: 970, // gallons per day
      reproductiveStatus: {
        pregnant: 45,
        nursing: 38,
        breeding: 15
      },
      vaccinations: {
        current: 485,
        upcoming: 25,
        overdue: 0
      },
      alerts: ['Weaning scheduled for 35 piglets'],
      gps: {
        tracked: 0, // Indoor facility
        geofenced: false,
        alertsActive: 0
      },
      lastVetVisit: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextVetScheduled: Date.now() + 23 * 24 * 60 * 60 * 1000,
      marketValue: 364875,
      lastUpdate: Date.now() - 25 * 60 * 1000
    },
    {
      id: 'livestock_003',
      type: 'Poultry',
      breed: 'Rhode Island Red',
      count: 2847,
      area: 'Chicken Houses A-D',
      healthStatus: 'GOOD',
      averageWeight: 4.8, // pounds
      feedConsumption: 710, // pounds per day
      waterConsumption: 142, // gallons per day
      reproductiveStatus: {
        laying: 1847,
        brooding: 0,
        breeding: 0
      },
      vaccinations: {
        current: 2847,
        upcoming: 0,
        overdue: 0
      },
      alerts: ['Egg production 7% below target'],
      gps: {
        tracked: 0, // Indoor/fenced facility
        geofenced: true,
        alertsActive: 1
      },
      eggProduction: {
        daily: 1642, // eggs per day
        weekly: 11494,
        monthlyTarget: 49500
      },
      lastVetVisit: Date.now() - 3 * 24 * 60 * 60 * 1000,
      nextVetScheduled: Date.now() + 27 * 24 * 60 * 60 * 1000,
      marketValue: 42705,
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'livestock_004',
      type: 'Sheep',
      breed: 'Suffolk',
      count: 156,
      area: 'South Hillside',
      healthStatus: 'FAIR',
      averageWeight: 185, // pounds
      feedConsumption: 468, // pounds per day
      waterConsumption: 234, // gallons per day
      reproductiveStatus: {
        pregnant: 0, // Wrong season
        nursing: 15,
        breeding: 0
      },
      vaccinations: {
        current: 142,
        upcoming: 14,
        overdue: 0
      },
      alerts: ['Shearing scheduled next week', '12 lambs need weaning'],
      gps: {
        tracked: 156,
        geofenced: true,
        alertsActive: 3
      },
      lastVetVisit: Date.now() - 21 * 24 * 60 * 60 * 1000,
      nextVetScheduled: Date.now() + 39 * 24 * 60 * 60 * 1000,
      marketValue: 93600,
      lastUpdate: Date.now() - 35 * 60 * 1000
    }
  ]);

  const [equipment, setEquipment] = useState([
    {
      id: 'equip_001',
      name: 'John Deere 9620R Tractor',
      type: 'Tractor',
      category: 'Primary Equipment',
      status: 'IN_FIELD',
      location: 'North Corn Field - Section 4',
      operation: 'Side-dressing (Nitrogen Application)',
      operator: 'Mike Johnson',
      fuelLevel: 78.3, // percentage
      engineHours: 3247.5,
      maintenanceDue: 'Oil Change - 53 hours',
      gps: { lat: 42.3587, lng: -93.9401 },
      speed: 8.2, // mph
      workRate: 12.8, // acres per hour
      implement: 'Anhydrous Ammonia Applicator',
      dailyProgress: 67.4, // acres completed today
      targetCompletion: Date.now() + 4.5 * 60 * 60 * 1000, // 4.5 hours
      alerts: ['Fuel level low - refuel in 2 hours'],
      lastUpdate: Date.now() - 3 * 60 * 1000,
      specifications: {
        horsepower: 620,
        fuelCapacity: 350, // gallons
        workingWidth: 45 // feet
      }
    },
    {
      id: 'equip_002',
      name: 'Case IH Combine 8250',
      type: 'Combine Harvester',
      category: 'Harvest Equipment',
      status: 'MAINTENANCE',
      location: 'Equipment Shed B',
      operation: 'Scheduled Service',
      operator: 'Equipment Technician',
      fuelLevel: 15.2,
      engineHours: 1847.2,
      maintenanceDue: 'In Progress - Concave Replacement',
      gps: { lat: 42.3521, lng: -93.9645 },
      speed: 0,
      workRate: 0,
      implement: 'Corn Head 8-row',
      dailyProgress: 0,
      targetCompletion: Date.now() + 6 * 60 * 60 * 1000,
      alerts: ['Ready for harvest season in 25 days'],
      lastUpdate: Date.now() - 45 * 60 * 1000,
      specifications: {
        horsepower: 475,
        tankCapacity: 350, // bushels
        workingWidth: 30 // feet
      }
    },
    {
      id: 'equip_003',
      name: 'Valley Pivot System A',
      type: 'Irrigation System',
      category: 'Water Management',
      status: 'IRRIGATING',
      location: 'North Corn Field',
      operation: 'Auto Irrigation Cycle 3',
      operator: 'Automated System',
      waterFlowRate: 850, // gallons per minute
      pressureLevel: 42.8, // PSI
      powerConsumption: 47.5, // kW
      gps: { lat: 42.3601, lng: -93.9383 },
      coverage: 245.7, // acres
      currentPosition: 67, // percentage of full circle
      applicationRate: 0.75, // inches per hour
      totalWaterApplied: 12450, // gallons today
      targetCompletion: Date.now() + 3.2 * 60 * 60 * 1000,
      alerts: ['Optimal soil moisture achieved in 3.2 hours'],
      lastUpdate: Date.now() - 12 * 60 * 1000,
      specifications: {
        radius: 1680, // feet
        flowCapacity: 1200, // GPM max
        coverage: 245.7 // acres
      }
    },
    {
      id: 'equip_004',
      name: 'DJI Agras T40 Drone',
      type: 'Agricultural Drone',
      category: 'Precision Agriculture',
      status: 'SURVEY_FLIGHT',
      location: 'South Soybean Field',
      operation: 'NDVI Imaging & Plant Health Assessment',
      operator: 'Sarah Chen (Remote)',
      batteryLevel: 67.2, // percentage
      flightTime: 18.5, // minutes current flight
      altitude: 125, // feet AGL
      gps: { lat: 42.3425, lng: -93.9567 },
      speed: 15.2, // mph
      coverageProgress: 78.4, // percentage of planned area
      payload: 'Multispectral Camera',
      dataCollected: '1,247 high-res images',
      targetCompletion: Date.now() + 22 * 60 * 1000,
      alerts: ['Landing for battery swap in 8 minutes'],
      lastUpdate: Date.now() - 1 * 60 * 1000,
      specifications: {
        flightTime: 55, // minutes max
        payloadCapacity: 88, // pounds
        operatingRange: 4.35 // miles
      }
    },
    {
      id: 'equip_005',
      name: 'Claas Lexion 8900',
      type: 'Combine Harvester',
      category: 'Harvest Equipment',
      status: 'STANDBY',
      location: 'West Equipment Yard',
      operation: 'Pre-Season Preparation',
      operator: 'Tom Wilson',
      fuelLevel: 92.1,
      engineHours: 2156.8,
      maintenanceDue: 'Clean - 2 weeks',
      gps: { lat: 42.3456, lng: -93.9712 },
      speed: 0,
      workRate: 0,
      implement: 'Wheat Header 35ft',
      dailyProgress: 0,
      targetCompletion: null,
      alerts: ['Ready for wheat harvest in 28 days'],
      lastUpdate: Date.now() - 2 * 60 * 60 * 1000,
      specifications: {
        horsepower: 544,
        tankCapacity: 450, // bushels
        workingWidth: 35 // feet
      }
    }
  ]);

  const [weatherData, setWeatherData] = useState({
    current: {
      temperature: 24.5, // Celsius
      humidity: 68.2, // percentage
      windSpeed: 8.7, // mph
      windDirection: 'SW',
      pressure: 1013.2, // hPa
      visibility: 16.1, // km
      uvIndex: 6.8,
      precipitation: 0.0, // mm today
      dewPoint: 18.1, // Celsius
      feelsLike: 26.2,
      conditions: 'Partly Cloudy'
    },
    forecast: [
      { day: 'Today', high: 28, low: 17, condition: 'Partly Cloudy', precipitation: 10, humidity: 68 },
      { day: 'Tomorrow', high: 31, low: 19, condition: 'Sunny', precipitation: 0, humidity: 62 },
      { day: 'Day 3', high: 29, low: 18, condition: 'Thunderstorms', precipitation: 85, humidity: 78 },
      { day: 'Day 4', high: 25, low: 14, condition: 'Partly Cloudy', precipitation: 20, humidity: 65 },
      { day: 'Day 5', high: 27, low: 16, condition: 'Sunny', precipitation: 5, humidity: 58 }
    ],
    alerts: [
      {
        type: 'THUNDERSTORM_WATCH',
        severity: 'MODERATE',
        message: 'Severe thunderstorms possible Day 3 - secure equipment',
        startTime: Date.now() + 48 * 60 * 60 * 1000,
        duration: '6 hours'
      }
    ],
    soilTemperatures: {
      zone_a: 22.4,
      zone_b: 21.7,
      zone_c: 23.1,
      zone_d: 20.8,
      zone_e: 24.2
    },
    evapotranspiration: 5.2, // mm/day
    growingDegreeDays: {
      accumulated: 1847,
      target: 2450,
      daysToTarget: 42
    }
  });

  const [marketData, setMarketData] = useState({
    commodityPrices: [
      { commodity: 'Corn', currentPrice: 6.75, change: +0.15, unit: '$/bushel', trend: 'UP' },
      { commodity: 'Soybeans', currentPrice: 15.20, change: -0.35, unit: '$/bushel', trend: 'DOWN' },
      { commodity: 'Wheat', currentPrice: 8.90, change: +0.05, unit: '$/bushel', trend: 'STABLE' },
      { commodity: 'Alfalfa Hay', currentPrice: 245.00, change: +12.50, unit: '$/ton', trend: 'UP' },
      { commodity: 'Cattle (Live)', currentPrice: 175.25, change: +3.80, unit: '$/cwt', trend: 'UP' }
    ],
    contractOpportunities: [
      { crop: 'Corn', buyer: 'ADM Grain', price: 6.95, quantity: '50,000 bu', delivery: 'Oct 2026' },
      { crop: 'Soybeans', buyer: 'Cargill', price: 15.75, quantity: '25,000 bu', delivery: 'Nov 2026' }
    ],
    totalPortfolioValue: 6847890, // USD
    projectedRevenue: 7235450, // USD for this season
    lastUpdate: Date.now() - 15 * 60 * 1000
  });

  const [performanceTrends, setPerformanceTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        yieldForecast: Math.floor(Math.random() * 15) + 170, // bushels/acre
        soilMoisture: Math.floor(Math.random() * 25) + 45, // percentage
        equipmentUptime: Math.floor(Math.random() * 10) + 88, // percentage
        weatherIndex: Math.floor(Math.random() * 20) + 70, // weather favorability
        cropHealth: Math.floor(Math.random() * 15) + 75, // health score
        operationCost: Math.floor(Math.random() * 50) + 125, // $/acre
        marketPrice: Math.floor(Math.random() * 100) + 650 // cents/bushel
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update field conditions
      setFields(prev => prev.map(field => ({
        ...field,
        soilMoisture: Math.max(30, Math.min(90, field.soilMoisture + (Math.random() - 0.5) * 3)),
        soilTemperature: Math.max(15, Math.min(35, field.soilTemperature + (Math.random() - 0.5) * 1)),
        ndvi: Math.max(0.2, Math.min(0.95, field.ndvi + (Math.random() - 0.5) * 0.05)),
        healthScore: Math.max(5, Math.min(10, field.healthScore + (Math.random() - 0.5) * 0.3)),
        lastUpdate: Date.now()
      })));

      // Update equipment positions and status
      setEquipment(prev => prev.map(equip => {
        let updates = { lastUpdate: Date.now() };
        
        if (equip.status === 'IN_FIELD') {
          updates.fuelLevel = Math.max(10, equip.fuelLevel - 0.8);
          updates.engineHours = equip.engineHours + 0.02;
          updates.dailyProgress = Math.min(equip.dailyProgress + 0.5, 300);
        }
        
        if (equip.type === 'Irrigation System' && equip.status === 'IRRIGATING') {
          updates.currentPosition = Math.min(100, equip.currentPosition + 1.2);
          updates.totalWaterApplied = equip.totalWaterApplied + 50;
        }
        
        if (equip.type === 'Agricultural Drone' && equip.status === 'SURVEY_FLIGHT') {
          updates.batteryLevel = Math.max(15, equip.batteryLevel - 1.5);
          updates.flightTime = equip.flightTime + 0.3;
          updates.coverageProgress = Math.min(100, equip.coverageProgress + 2.1);
        }
        
        return { ...equip, ...updates };
      }));

      // Update weather conditions
      setWeatherData(prev => ({
        ...prev,
        current: {
          ...prev.current,
          temperature: Math.max(5, Math.min(45, prev.current.temperature + (Math.random() - 0.5) * 2)),
          humidity: Math.max(30, Math.min(95, prev.current.humidity + (Math.random() - 0.5) * 3)),
          windSpeed: Math.max(0, Math.min(25, prev.current.windSpeed + (Math.random() - 0.5) * 2)),
          pressure: Math.max(990, Math.min(1040, prev.current.pressure + (Math.random() - 0.5) * 2))
        }
      }));

      // Update livestock status
      setLivestock(prev => prev.map(animal => ({
        ...animal,
        feedConsumption: Math.max(animal.feedConsumption * 0.8, animal.feedConsumption + (Math.random() - 0.5) * 100),
        waterConsumption: Math.max(animal.waterConsumption * 0.7, animal.waterConsumption + (Math.random() - 0.5) * 50),
        lastUpdate: Date.now()
      })));

    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (score) => {
    if (score >= 8.5) return 'text-green-400';
    if (score >= 7.0) return 'text-yellow-400';
    if (score >= 6.0) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
      case 'IN_FIELD':
      case 'IRRIGATING':
      case 'SURVEY_FLIGHT':
      case 'EXCELLENT':
      case 'GOOD': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SCHEDULED':
      case 'STANDBY':
      case 'DRIP_ACTIVE':
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'OFF': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'ALERT':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSoilMoistureColor = (moisture) => {
    if (moisture >= 60 && moisture <= 80) return 'text-green-400'; // Optimal
    if (moisture >= 45 && moisture <= 85) return 'text-yellow-400'; // Good
    return 'text-red-400'; // Needs attention
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚜 AGRICULTURAL OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {fields.filter(f => f.healthScore >= 8.0).length}/{fields.length} Fields Healthy
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {equipment.filter(e => e.status === 'IN_FIELD' || e.status === 'IRRIGATING' || e.status === 'SURVEY_FLIGHT').length}/{equipment.length} Active
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Precision Farming Command Center
          </div>
        </div>
      </div>

      {/* Farm Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL ACREAGE</div>
              <div className="text-2xl font-bold text-green-100">
                {fields.reduce((sum, f) => sum + f.acreage, 0).toFixed(1)}
              </div>
              <div className="text-xs text-green-300">
                Active: {fields.filter(f => f.irrigationStatus !== 'OFF').length} fields
              </div>
            </div>
            <div className="text-3xl opacity-60">🌾</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">LIVESTOCK HEAD</div>
              <div className="text-2xl font-bold text-blue-100">
                {livestock.reduce((sum, l) => sum + l.count, 0).toLocaleString()}
              </div>
              <div className="text-xs text-blue-300">
                {livestock.filter(l => l.healthStatus === 'EXCELLENT' || l.healthStatus === 'GOOD').length}/{livestock.length} healthy herds
              </div>
            </div>
            <div className="text-3xl opacity-60">🐄</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">EQUIPMENT ACTIVE</div>
              <div className="text-2xl font-bold text-purple-100">
                {equipment.filter(e => e.status === 'IN_FIELD' || e.status === 'IRRIGATING' || e.status === 'SURVEY_FLIGHT').length}
              </div>
              <div className="text-xs text-purple-300">
                {equipment.length} total units
              </div>
            </div>
            <div className="text-3xl opacity-60">🚜</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-4 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-yellow-200">PORTFOLIO VALUE</div>
              <div className="text-2xl font-bold text-yellow-100">
                {formatCurrency(marketData.totalPortfolioValue)}
              </div>
              <div className="text-xs text-yellow-300">
                Proj: {formatCurrency(marketData.projectedRevenue)}
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* Fields and Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Field Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌾 FIELD MONITORING & CROP STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {fields.map((field) => (
              <div key={field.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(field.irrigationStatus)}`}>
                      {field.irrigationStatus.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {field.zone}
                    </span>
                    {field.pestAlerts.length > 0 || field.diseaseAlerts.length > 0 ? (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        ALERTS
                      </span>
                    ) : null}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(field.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{field.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{field.crop} - {field.variety} | {field.acreage.toFixed(1)} acres</div>
                <div className="text-xs text-purple-400 mb-3">{field.growthStage}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Health Score</div>
                    <div className={getHealthColor(field.healthScore)}>
                      {field.healthScore.toFixed(1)}/10
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">NDVI Index</div>
                    <div className="text-green-400">{field.ndvi.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Yield Est.</div>
                    <div className="text-blue-400">{field.yieldEstimate} {field.crop === 'Mixed Vegetables' || field.crop === 'Alfalfa' ? 'tons' : 'bu'}/acre</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Soil Moisture</div>
                    <div className={getSoilMoistureColor(field.soilMoisture)}>
                      {field.soilMoisture.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Soil Temp</div>
                    <div className="text-orange-400">{field.soilTemperature.toFixed(1)}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">pH Level</div>
                    <div className="text-purple-400">{field.soilPH}</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">NPK: </span>
                  <span className="text-yellow-400">N:{field.soilNitrogen.toFixed(0)}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-red-400">P:{field.soilPhosphorus.toFixed(0)}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">K:{field.soilPotassium.toFixed(0)} ppm</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Market Value: </span>
                  <span className="text-green-400">{formatCurrency(field.marketValue)}</span>
                  <span className="text-gray-400"> | Planted: </span>
                  <span className="text-cyan-400">{Math.floor((Date.now() - field.plantingDate) / (24 * 60 * 60 * 1000))}d ago</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Equipment: </span>
                  <span className="text-indigo-400">{field.equipmentDeployed.join(', ')}</span>
                </div>

                {field.pestAlerts.length > 0 && (
                  <div className="text-xs mb-1">
                    <div className="text-gray-400">Pest Alerts:</div>
                    {field.pestAlerts.map((alert, index) => (
                      <div key={index} className="text-red-400">🐛 {alert}</div>
                    ))}
                  </div>
                )}

                {field.diseaseAlerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Disease Alerts:</div>
                    {field.diseaseAlerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🦠 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Weather & Environmental */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌤️ WEATHER & ENVIRONMENTAL CONDITIONS
          </h3>
          
          {/* Current Weather */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="text-sm font-bold text-white mb-3">Current Conditions</div>
            
            <div className="grid grid-cols-3 gap-3 text-xs mb-3">
              <div>
                <div className="text-gray-400">Temperature</div>
                <div className="text-blue-400">{weatherData.current.temperature.toFixed(1)}°C</div>
                <div className="text-gray-500">Feels: {weatherData.current.feelsLike.toFixed(1)}°C</div>
              </div>
              <div>
                <div className="text-gray-400">Humidity</div>
                <div className="text-cyan-400">{weatherData.current.humidity.toFixed(1)}%</div>
                <div className="text-gray-500">Dew: {weatherData.current.dewPoint.toFixed(1)}°C</div>
              </div>
              <div>
                <div className="text-gray-400">Wind</div>
                <div className="text-green-400">{weatherData.current.windSpeed.toFixed(1)} mph</div>
                <div className="text-gray-500">{weatherData.current.windDirection}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs mb-3">
              <div>
                <div className="text-gray-400">Pressure</div>
                <div className="text-purple-400">{weatherData.current.pressure.toFixed(1)} hPa</div>
              </div>
              <div>
                <div className="text-gray-400">UV Index</div>
                <div className="text-orange-400">{weatherData.current.uvIndex.toFixed(1)}</div>
              </div>
              <div>
                <div className="text-gray-400">Visibility</div>
                <div className="text-yellow-400">{weatherData.current.visibility.toFixed(1)} km</div>
              </div>
            </div>

            <div className="text-xs">
              <span className="text-gray-400">Conditions: </span>
              <span className="text-white">{weatherData.current.conditions}</span>
              <span className="text-gray-400"> | Precipitation: </span>
              <span className="text-blue-400">{weatherData.current.precipitation.toFixed(1)} mm today</span>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="text-sm font-bold text-white mb-3">5-Day Forecast</div>
            <div className="space-y-2">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="grid grid-cols-5 gap-2 text-xs">
                  <div className="text-gray-300">{day.day}</div>
                  <div className="text-center">
                    <span className="text-red-400">{day.high}°</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{day.low}°</span>
                  </div>
                  <div className="text-center text-gray-300">{day.condition}</div>
                  <div className="text-center text-cyan-400">{day.precipitation}%</div>
                  <div className="text-center text-purple-400">{day.humidity}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Alerts */}
          {weatherData.alerts.length > 0 && (
            <div className="bg-orange-900/50 border border-orange-500/30 rounded-lg p-3 mb-4">
              <div className="text-sm font-bold text-orange-400 mb-2">🌩️ Weather Alerts</div>
              {weatherData.alerts.map((alert, index) => (
                <div key={index} className="text-xs">
                  <div className="text-orange-300">{alert.type.replace('_', ' ')}</div>
                  <div className="text-gray-300">{alert.message}</div>
                  <div className="text-gray-400">Duration: {alert.duration}</div>
                </div>
              ))}
            </div>
          )}

          {/* Growing Degree Days */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-3">Growing Season Progress</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Growing Degree Days</div>
                <div className="text-green-400">{weatherData.growingDegreeDays.accumulated}</div>
                <div className="text-gray-500">Target: {weatherData.growingDegreeDays.target}</div>
              </div>
              <div>
                <div className="text-gray-400">Days to Target</div>
                <div className="text-yellow-400">{weatherData.growingDegreeDays.daysToTarget}</div>
                <div className="text-gray-500">ET: {weatherData.evapotranspiration} mm/day</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Livestock and Equipment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Livestock Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🐄 LIVESTOCK MANAGEMENT
          </h3>
          <div className="space-y-3">
            {livestock.map((animal) => (
              <div key={animal.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(animal.healthStatus)}`}>
                      {animal.healthStatus}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {animal.type}
                    </span>
                    {animal.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {animal.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(animal.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{animal.breed} {animal.type}</div>
                <div className="text-xs text-cyan-400 mb-3">{animal.area} | {animal.count.toLocaleString()} head</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Avg Weight</div>
                    <div className="text-blue-400">{animal.averageWeight} lbs</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Market Value</div>
                    <div className="text-green-400">{formatCurrency(animal.marketValue)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Feed/Day</div>
                    <div className="text-orange-400">{animal.feedConsumption.toLocaleString()} lbs</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Water/Day</div>
                    <div className="text-cyan-400">{animal.waterConsumption.toLocaleString()} gal</div>
                  </div>
                  <div>
                    <div className="text-gray-400">GPS Tracked</div>
                    <div className="text-purple-400">{animal.gps.tracked || 'N/A'}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Vaccination</div>
                    <div className={animal.vaccinations.overdue > 0 ? 'text-red-400' : 'text-green-400'}>
                      {animal.vaccinations.current}/{animal.count}
                    </div>
                  </div>
                </div>

                {/* Reproductive Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Reproductive: </span>
                  {Object.entries(animal.reproductiveStatus).map(([status, count]) => (
                    <span key={status} className="mr-2">
                      <span className="text-pink-400">{status}:</span>
                      <span className="text-white"> {count}</span>
                    </span>
                  ))}
                </div>

                {/* Special metrics for poultry */}
                {animal.eggProduction && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Egg Production: </span>
                    <span className="text-yellow-400">{animal.eggProduction.daily}/day</span>
                    <span className="text-gray-400"> | Weekly: </span>
                    <span className="text-orange-400">{animal.eggProduction.weekly}</span>
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Last Vet: </span>
                  <span className="text-indigo-400">{Math.floor((Date.now() - animal.lastVetVisit) / (24 * 60 * 60 * 1000))}d ago</span>
                  <span className="text-gray-400"> | Next: </span>
                  <span className="text-green-400">{Math.floor((animal.nextVetScheduled - Date.now()) / (24 * 60 * 60 * 1000))}d</span>
                </div>

                {animal.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {animal.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">📋 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Fleet */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚜 EQUIPMENT FLEET MANAGEMENT
          </h3>
          <div className="space-y-3">
            {equipment.map((equip) => (
              <div key={equip.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(equip.status)}`}>
                      {equip.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {equip.type}
                    </span>
                    {equip.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {equip.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(equip.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{equip.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{equip.location}</div>
                <div className="text-xs text-purple-400 mb-3">{equip.operation}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  {equip.fuelLevel !== undefined && (
                    <div>
                      <div className="text-gray-400">Fuel Level</div>
                      <div className={equip.fuelLevel < 25 ? 'text-red-400' : equip.fuelLevel < 50 ? 'text-yellow-400' : 'text-green-400'}>
                        {equip.fuelLevel.toFixed(1)}%
                      </div>
                    </div>
                  )}
                  
                  {equip.engineHours !== undefined && (
                    <div>
                      <div className="text-gray-400">Engine Hours</div>
                      <div className="text-blue-400">{equip.engineHours.toFixed(1)}h</div>
                    </div>
                  )}
                  
                  {equip.waterFlowRate !== undefined && (
                    <div>
                      <div className="text-gray-400">Flow Rate</div>
                      <div className="text-cyan-400">{equip.waterFlowRate} GPM</div>
                    </div>
                  )}
                  
                  {equip.batteryLevel !== undefined && (
                    <div>
                      <div className="text-gray-400">Battery</div>
                      <div className={equip.batteryLevel < 25 ? 'text-red-400' : 'text-green-400'}>
                        {equip.batteryLevel.toFixed(1)}%
                      </div>
                    </div>
                  )}
                  
                  {equip.speed !== undefined && (
                    <div>
                      <div className="text-gray-400">Speed</div>
                      <div className="text-orange-400">{equip.speed.toFixed(1)} mph</div>
                    </div>
                  )}
                  
                  {equip.workRate !== undefined && equip.workRate > 0 && (
                    <div>
                      <div className="text-gray-400">Work Rate</div>
                      <div className="text-purple-400">{equip.workRate.toFixed(1)} ac/hr</div>
                    </div>
                  )}
                </div>

                {equip.operator && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Operator: </span>
                    <span className="text-green-400">{equip.operator}</span>
                    {equip.implement && (
                      <>
                        <span className="text-gray-400"> | Implement: </span>
                        <span className="text-indigo-400">{equip.implement}</span>
                      </>
                    )}
                  </div>
                )}

                {equip.dailyProgress > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Progress: </span>
                    <span className="text-yellow-400">{equip.dailyProgress.toFixed(1)} acres today</span>
                    {equip.targetCompletion && (
                      <>
                        <span className="text-gray-400"> | ETA: </span>
                        <span className="text-cyan-400">{Math.ceil((equip.targetCompletion - Date.now()) / (60 * 1000))}min</span>
                      </>
                    )}
                  </div>
                )}

                {equip.payload && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Payload: </span>
                    <span className="text-pink-400">{equip.payload}</span>
                    {equip.dataCollected && (
                      <>
                        <span className="text-gray-400"> | Data: </span>
                        <span className="text-cyan-400">{equip.dataCollected}</span>
                      </>
                    )}
                  </div>
                )}

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Specs: </span>
                  {Object.entries(equip.specifications).map(([key, value]) => (
                    <span key={key} className="mr-2">
                      <span className="text-gray-500">{key.replace(/([A-Z])/g, ' $1')}: </span>
                      <span className="text-blue-400">{value}{key.includes('capacity') || key.includes('Capacity') ? key.includes('fuel') || key.includes('Fuel') ? 'gal' : key.includes('tank') || key.includes('Tank') ? 'bu' : '' : key.includes('power') || key.includes('Power') ? 'hp' : key.includes('width') || key.includes('Width') || key.includes('radius') ? 'ft' : key.includes('range') ? 'mi' : key.includes('time') || key.includes('Time') ? 'min' : ''}</span>
                    </span>
                  ))}
                </div>

                {equip.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {equip.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">⚠️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Data and Performance Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Intelligence */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 MARKET INTELLIGENCE & COMMODITY PRICES
          </h3>
          
          {/* Current Commodity Prices */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-2">Current Commodity Prices</h4>
            <div className="space-y-2">
              {marketData.commodityPrices.map((commodity, index) => (
                <div key={index} className="grid grid-cols-4 gap-2 text-xs">
                  <div className="text-white font-medium">{commodity.commodity}</div>
                  <div className="text-center text-green-400">{commodity.unit === '$/cwt' ? formatCurrency(commodity.currentPrice) : `$${commodity.currentPrice.toFixed(2)}`}</div>
                  <div className={`text-center ${commodity.change > 0 ? 'text-green-400' : commodity.change < 0 ? 'text-red-400' : 'text-gray-400'}`}>
                    {commodity.change > 0 ? '+' : ''}{commodity.change.toFixed(2)}
                  </div>
                  <div className="text-center">
                    <span className={`px-1 rounded text-xs ${
                      commodity.trend === 'UP' ? 'bg-green-500/20 text-green-400' :
                      commodity.trend === 'DOWN' ? 'bg-red-500/20 text-red-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {commodity.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Opportunities */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-2">Active Contract Opportunities</h4>
            <div className="space-y-2">
              {marketData.contractOpportunities.map((contract, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="text-sm text-white">{contract.crop} - {contract.buyer}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mt-1">
                    <div>
                      <span className="text-gray-400">Price: </span>
                      <span className="text-green-400">${contract.price}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Qty: </span>
                      <span className="text-blue-400">{contract.quantity}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Delivery: </span>
                      <span className="text-purple-400">{contract.delivery}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Summary */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-2">Portfolio Summary</h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="text-gray-400">Current Value</div>
                <div className="text-green-400 text-lg font-bold">{formatCurrency(marketData.totalPortfolioValue)}</div>
              </div>
              <div>
                <div className="text-gray-400">Projected Revenue</div>
                <div className="text-blue-400 text-lg font-bold">{formatCurrency(marketData.projectedRevenue)}</div>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Last updated: {formatTime(marketData.lastUpdate)}
            </div>
          </div>
        </div>

        {/* Farm Performance Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 FARM PERFORMANCE ANALYTICS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
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
                dataKey="yieldForecast" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Yield Forecast (bu/ac)"
              />
              <Line 
                type="monotone" 
                dataKey="cropHealth" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Crop Health Score"
              />
              <Line 
                type="monotone" 
                dataKey="soilMoisture" 
                stroke="#06B6D4" 
                strokeWidth={2}
                name="Avg Soil Moisture %"
              />
              <Line 
                type="monotone" 
                dataKey="equipmentUptime" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Equipment Uptime %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Farm KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📋 FARM OPERATIONS KPIs & EFFICIENCY METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Yield Potential</div>
            <div className="text-white font-bold text-lg">
              {(fields.reduce((sum, f) => sum + f.yieldEstimate, 0) / fields.length).toFixed(1)}
            </div>
            <div className="text-green-400 text-xs">bu/acre</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Field Health</div>
            <div className="text-white font-bold text-lg">
              {(fields.reduce((sum, f) => sum + f.healthScore, 0) / fields.length).toFixed(1)}
            </div>
            <div className="text-blue-400 text-xs">out of 10</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Equipment Uptime</div>
            <div className="text-white font-bold text-lg">
              {Math.floor((equipment.filter(e => e.status !== 'MAINTENANCE').length / equipment.length) * 100)}%
            </div>
            <div className="text-purple-400 text-xs">{equipment.length} total units</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Soil Moisture Avg</div>
            <div className="text-white font-bold text-lg">
              {(fields.reduce((sum, f) => sum + f.soilMoisture, 0) / fields.length).toFixed(1)}%
            </div>
            <div className="text-cyan-400 text-xs">optimal range</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Active Operations</div>
            <div className="text-white font-bold text-lg">
              {equipment.filter(e => e.status === 'IN_FIELD' || e.status === 'IRRIGATING' || e.status === 'SURVEY_FLIGHT').length}
            </div>
            <div className="text-orange-400 text-xs">in progress</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Weather Index</div>
            <div className="text-white font-bold text-lg">85.2</div>
            <div className="text-yellow-400 text-xs">favorable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalOperations;