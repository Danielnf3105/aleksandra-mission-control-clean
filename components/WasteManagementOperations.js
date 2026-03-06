// WasteManagementOperations.js - Waste Management Operations Control Center & Environmental Monitoring Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const WasteManagementOperations = () => {
  const [collectionFleet, setCollectionFleet] = useState([
    {
      id: 'truck_001',
      vehicleId: 'WM-2401',
      type: 'REAR_LOADER',
      route: 'Downtown Commercial',
      driver: 'Carlos Martinez',
      status: 'COLLECTING',
      location: {
        latitude: 40.7589,
        longitude: -73.9851,
        address: '5th Avenue & 42nd Street',
        lastUpdate: Date.now() - 3 * 60 * 1000
      },
      capacity: {
        total: 32, // cubic yards
        current: 18.4,
        utilizationRate: 57.5,
        weight: 8420 // pounds
      },
      route_progress: {
        totalStops: 45,
        completedStops: 26,
        remainingStops: 19,
        progressPercent: 57.8,
        estimatedCompletion: '2026-03-05T19:30:00Z'
      },
      performance: {
        avgStopTime: 4.2, // minutes
        fuelEfficiency: 6.8, // mpg
        dailyMiles: 67.3,
        co2Emissions: 142.7, // kg
        pickupsPerHour: 12.4
      },
      waste_types: {
        municipal: 12.8, // cubic yards
        recyclables: 4.2,
        organics: 1.4,
        hazardous: 0.0
      },
      equipment: {
        hydraulics: 'OPERATIONAL',
        compaction: 'OPTIMAL',
        scales: 'CALIBRATED',
        gps: 'ACTIVE',
        camera: 'RECORDING'
      },
      environmental: {
        emissionLevel: 'COMPLIANT',
        noiseLevel: 68, // decibels
        fuelType: 'DIESEL',
        inspectionDue: '2026-03-15'
      },
      alerts: ['Route running 15 minutes ahead of schedule'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'truck_002',
      vehicleId: 'WM-2402',
      type: 'SIDE_LOADER',
      route: 'Residential North',
      driver: 'Jennifer Wu',
      status: 'EN_ROUTE',
      location: {
        latitude: 40.7831,
        longitude: -73.9712,
        address: 'Central Park West',
        lastUpdate: Date.now() - 1 * 60 * 1000
      },
      capacity: {
        total: 28,
        current: 22.1,
        utilizationRate: 78.9,
        weight: 6890
      },
      route_progress: {
        totalStops: 52,
        completedStops: 41,
        remainingStops: 11,
        progressPercent: 78.8,
        estimatedCompletion: '2026-03-05T18:45:00Z'
      },
      performance: {
        avgStopTime: 3.8,
        fuelEfficiency: 7.2,
        dailyMiles: 54.7,
        co2Emissions: 118.3,
        pickupsPerHour: 14.1
      },
      waste_types: {
        municipal: 16.2,
        recyclables: 5.1,
        organics: 0.8,
        hazardous: 0.0
      },
      equipment: {
        hydraulics: 'OPERATIONAL',
        compaction: 'OPTIMAL',
        scales: 'CALIBRATED',
        gps: 'ACTIVE',
        camera: 'RECORDING'
      },
      environmental: {
        emissionLevel: 'COMPLIANT',
        noiseLevel: 65,
        fuelType: 'CNG',
        inspectionDue: '2026-03-22'
      },
      alerts: ['Near capacity - return to facility after next 2 stops'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'truck_003',
      vehicleId: 'WM-2403',
      type: 'RECYCLING_TRUCK',
      route: 'Industrial District',
      driver: 'Michael Chen',
      status: 'UNLOADING',
      location: {
        latitude: 40.7505,
        longitude: -74.0134,
        address: 'Recycling Processing Center',
        lastUpdate: Date.now() - 8 * 60 * 1000
      },
      capacity: {
        total: 35,
        current: 31.2,
        utilizationRate: 89.1,
        weight: 9240
      },
      route_progress: {
        totalStops: 28,
        completedStops: 28,
        remainingStops: 0,
        progressPercent: 100.0,
        estimatedCompletion: 'COMPLETED'
      },
      performance: {
        avgStopTime: 6.1,
        fuelEfficiency: 6.2,
        dailyMiles: 78.4,
        co2Emissions: 167.8,
        pickupsPerHour: 8.7
      },
      waste_types: {
        municipal: 0.0,
        recyclables: 28.6,
        organics: 0.0,
        hazardous: 2.6
      },
      equipment: {
        hydraulics: 'OPERATIONAL',
        compaction: 'DISABLED',
        scales: 'CALIBRATED',
        gps: 'ACTIVE',
        camera: 'RECORDING'
      },
      environmental: {
        emissionLevel: 'COMPLIANT',
        noiseLevel: 72,
        fuelType: 'ELECTRIC',
        inspectionDue: '2026-04-01'
      },
      alerts: ['Unloading in progress - high contamination detected'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'truck_004',
      vehicleId: 'WM-2404',
      type: 'FRONT_LOADER',
      route: 'Commercial South',
      driver: 'David Rodriguez',
      status: 'MAINTENANCE',
      location: {
        latitude: 40.7282,
        longitude: -74.0776,
        address: 'Fleet Maintenance Yard',
        lastUpdate: Date.now() - 45 * 60 * 1000
      },
      capacity: {
        total: 40,
        current: 0.0,
        utilizationRate: 0.0,
        weight: 0
      },
      route_progress: {
        totalStops: 0,
        completedStops: 0,
        remainingStops: 0,
        progressPercent: 0.0,
        estimatedCompletion: null
      },
      performance: {
        avgStopTime: 0.0,
        fuelEfficiency: 0.0,
        dailyMiles: 0.0,
        co2Emissions: 0.0,
        pickupsPerHour: 0.0
      },
      waste_types: {
        municipal: 0.0,
        recyclables: 0.0,
        organics: 0.0,
        hazardous: 0.0
      },
      equipment: {
        hydraulics: 'MAINTENANCE',
        compaction: 'MAINTENANCE',
        scales: 'OFFLINE',
        gps: 'ACTIVE',
        camera: 'OFFLINE'
      },
      environmental: {
        emissionLevel: 'N/A',
        noiseLevel: 0,
        fuelType: 'DIESEL',
        inspectionDue: '2026-03-08'
      },
      alerts: ['Scheduled hydraulic system repair - ETA 2 hours'],
      lastUpdate: Date.now() - 45 * 60 * 1000
    }
  ]);

  const [recyclingFacilities, setRecyclingFacilities] = useState([
    {
      id: 'facility_001',
      name: 'Manhattan Recycling Center',
      type: 'MRF', // Materials Recovery Facility
      location: 'New York, NY',
      manager: 'Lisa Chen',
      status: 'OPERATIONAL',
      capacity: {
        dailyThroughput: 450, // tons
        currentThroughput: 387,
        utilizationRate: 86.0
      },
      processing: {
        incomingMaterial: 43.2, // tons/hour
        sortingRate: 41.8, // tons/hour
        contaminationRate: 12.4, // percentage
        recovery: {
          paper: 156.7, // tons today
          plastic: 78.3,
          metal: 34.9,
          glass: 45.2,
          organics: 67.8,
          residue: 23.4
        }
      },
      equipment: {
        conveyorBelts: {
          total: 8,
          operational: 7,
          maintenance: 1,
          efficiency: 92.3
        },
        opticalSorters: {
          total: 6,
          operational: 6,
          accuracy: 94.7,
          rejectRate: 5.3
        },
        balers: {
          total: 4,
          operational: 4,
          balesProduced: 89, // today
          avgBaleWeight: 1247 // pounds
        },
        aiSorting: {
          active: true,
          confidence: 97.1,
          itemsProcessed: 45672, // today
          learningRate: 'IMPROVING'
        }
      },
      quality: {
        contaminationLevels: {
          paper: 2.1, // percentage
          plastic: 4.7,
          metal: 1.3,
          glass: 8.9,
          overall: 4.3
        },
        marketValue: {
          paper: 120, // $/ton
          plastic: 340,
          metal: 1240,
          glass: 45
        }
      },
      environmental: {
        energyConsumption: 234.7, // kWh/hour
        waterUsage: 1247, // gallons/hour
        emissions: 23.4, // kg CO2/hour
        wasteToLandfill: 5.2 // percentage
      },
      alerts: ['Conveyor Belt 3 scheduled for maintenance tonight', 'High contamination in plastic stream'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'facility_002',
      name: 'Brooklyn Composting Facility',
      type: 'COMPOSTING',
      location: 'Brooklyn, NY',
      manager: 'Robert Kim',
      status: 'OPERATIONAL',
      capacity: {
        dailyThroughput: 200,
        currentThroughput: 167,
        utilizationRate: 83.5
      },
      processing: {
        incomingMaterial: 18.6,
        sortingRate: 17.2,
        contaminationRate: 8.7,
        recovery: {
          organics: 145.3,
          compost: 52.1,
          residue: 12.6,
          biogas: 234 // cubic meters
        }
      },
      composting: {
        activePiles: 12,
        temperatureAvg: 58.4, // celsius
        moistureLevel: 52.3, // percentage
        pHLevel: 7.2,
        oxygenLevel: 12.7, // percentage
        compostGrade: 'GRADE_A'
      },
      equipment: {
        turners: {
          total: 3,
          operational: 3,
          turningCycles: 2.3 // per day
        },
        screeners: {
          total: 2,
          operational: 2,
          efficiency: 91.4
        },
        aerationSystems: {
          total: 6,
          operational: 6,
          airflow: 1247 // CFM
        }
      },
      quality: {
        compostQuality: {
          organicContent: 89.4, // percentage
          nitrogenContent: 1.8,
          phosphorusContent: 0.7,
          potassiumContent: 1.2,
          pathogenLevels: 'BELOW_DETECTION'
        }
      },
      environmental: {
        energyConsumption: 87.3,
        waterUsage: 456,
        emissions: -45.7, // negative = carbon sequestration
        methaneCaptured: 156.7 // cubic meters
      },
      alerts: ['Compost piles reaching optimal temperature', 'Excellent pathogen test results'],
      lastUpdate: Date.now() - 7 * 60 * 1000
    },
    {
      id: 'facility_003',
      name: 'Queens Waste-to-Energy Plant',
      type: 'WTE', // Waste-to-Energy
      location: 'Queens, NY',
      manager: 'Maria Gonzalez',
      status: 'OPERATIONAL',
      capacity: {
        dailyThroughput: 800,
        currentThroughput: 672,
        utilizationRate: 84.0
      },
      processing: {
        incomingMaterial: 78.4,
        burnRate: 75.6,
        contaminationRate: 3.2,
        recovery: {
          ash: 15.1, // tons
          metals: 3.4,
          energy: 24567 // MWh
        }
      },
      energy: {
        electricityGenerated: 24567, // MWh today
        steamProduced: 156789, // pounds
        efficiency: 87.2, // percentage
        gridConnection: 'ACTIVE',
        powerSold: 18234 // MWh
      },
      emissions: {
        monitoring: 'CONTINUOUS',
        co2: 234.7, // tons/day
        sox: 0.23, // tons/day
        nox: 0.45, // tons/day
        particulates: 0.067, // tons/day
        complianceStatus: 'COMPLIANT'
      },
      equipment: {
        boilers: {
          total: 3,
          operational: 3,
          temperature: 1250, // celsius
          pressure: 450 // psi
        },
        turbines: {
          total: 2,
          operational: 2,
          rpm: 3600,
          efficiency: 89.4
        },
        bagFilters: {
          total: 16,
          operational: 16,
          efficiency: 99.7
        }
      },
      environmental: {
        energyConsumption: 5634, // kWh/hour (parasitic load)
        waterUsage: 3456,
        netEnergyProduction: 18933, // kWh/hour net
        carbonOffset: 1247 // tons CO2 equivalent
      },
      alerts: ['Boiler 2 efficiency slightly below optimal', 'Excellent emissions compliance'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    }
  ]);

  const [smartBins, setSmartBins] = useState([
    {
      id: 'bin_001',
      location: 'Times Square - 7th Ave & 42nd St',
      type: 'SMART_COMPACTING',
      status: 'OPERATIONAL',
      fillLevel: 78.4, // percentage
      capacity: 120, // gallons
      lastCollection: '2026-03-04T14:30:00Z',
      nextCollection: '2026-03-06T08:00:00Z',
      sensorData: {
        weight: 89.3, // pounds
        temperature: 18.4, // celsius
        humidity: 45.2, // percentage
        tiltAngle: 0.2, // degrees
        vibration: 'LOW'
      },
      ai_detection: {
        wasteType: 'MIXED_MUNICIPAL',
        contamination: 'LOW',
        recyclables: 12.4, // percentage
        organics: 8.7,
        hazardous: 0.0
      },
      performance: {
        compactionRatio: 4.2,
        collectionFrequency: 2.1, // days average
        overflowEvents: 0,
        maintenanceScore: 94.7
      },
      environmental: {
        solarPowerLevel: 87.3, // percentage
        batteryLevel: 92.1,
        co2Savings: 2.3 // kg per week
      },
      alerts: ['Approaching 80% capacity - schedule collection'],
      lastUpdate: Date.now() - 12 * 60 * 1000
    },
    {
      id: 'bin_002',
      location: 'Central Park - Bethesda Fountain',
      type: 'SOLAR_COMPACTING',
      status: 'OPERATIONAL',
      fillLevel: 34.7,
      capacity: 150,
      lastCollection: '2026-03-05T09:15:00Z',
      nextCollection: '2026-03-07T10:00:00Z',
      sensorData: {
        weight: 52.1,
        temperature: 16.8,
        humidity: 52.3,
        tiltAngle: 0.0,
        vibration: 'NONE'
      },
      ai_detection: {
        wasteType: 'MIXED_MUNICIPAL',
        contamination: 'MEDIUM',
        recyclables: 23.4,
        organics: 15.7,
        hazardous: 0.0
      },
      performance: {
        compactionRatio: 3.8,
        collectionFrequency: 3.4,
        overflowEvents: 0,
        maintenanceScore: 98.2
      },
      environmental: {
        solarPowerLevel: 76.4,
        batteryLevel: 84.3,
        co2Savings: 1.8
      },
      alerts: ['Excellent performance - low contamination'],
      lastUpdate: Date.now() - 6 * 60 * 1000
    },
    {
      id: 'bin_003',
      location: 'Financial District - Wall St & Broadway',
      type: 'RECYCLING_SMART',
      status: 'OPERATIONAL',
      fillLevel: 91.2,
      capacity: 100,
      lastCollection: '2026-03-03T16:45:00Z',
      nextCollection: '2026-03-05T19:00:00Z',
      sensorData: {
        weight: 91.4,
        temperature: 19.7,
        humidity: 38.9,
        tiltAngle: 0.1,
        vibration: 'LOW'
      },
      ai_detection: {
        wasteType: 'RECYCLABLES',
        contamination: 'HIGH',
        recyclables: 76.3,
        organics: 3.2,
        hazardous: 0.0
      },
      performance: {
        compactionRatio: 5.1,
        collectionFrequency: 1.8,
        overflowEvents: 2,
        maintenanceScore: 87.3
      },
      environmental: {
        solarPowerLevel: 92.7,
        batteryLevel: 88.9,
        co2Savings: 3.1
      },
      alerts: ['URGENT: High fill level - collect immediately', 'High contamination detected'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    }
  ]);

  const [operationalMetrics, setOperationalMetrics] = useState({
    dailyCollection: {
      totalWaste: 2847.3, // tons
      municipal: 1923.4,
      recyclables: 567.8,
      organics: 234.6,
      hazardous: 121.5
    },
    recyclingPerformance: {
      diversionRate: 68.4, // percentage
      contaminationRate: 8.7,
      recoveryRate: 91.3,
      marketValue: 234567, // $ today
      co2Avoided: 1247.8 // tons CO2 equivalent
    },
    fleetPerformance: {
      vehiclesActive: 3,
      vehiclesMaintenance: 1,
      totalMiles: 234.7,
      fuelEfficiency: 6.8, // mpg average
      routeOptimization: 94.2, // percentage
      onTimePerformance: 87.9
    },
    environmental: {
      totalEmissions: 567.8, // tons CO2
      energyGenerated: 24567, // MWh
      waterConserved: 12847, // gallons
      landfillDiverted: 1923.4, // tons
      carbonFootprintReduction: 15.7 // percentage
    },
    compliance: {
      epaCompliance: 98.7, // percentage
      permitCompliance: 96.4,
      safetyIncidents: 0,
      regulatoryViolations: 0,
      auditScore: 94.8
    },
    financial: {
      operatingCost: 234567, // $ today
      revenue: 345678,
      profitMargin: 32.1, // percentage
      costPerTon: 89.4,
      energyRevenue: 123456
    }
  });

  const [wasteTrends, setWasteTrends] = useState([]);

  const generateWasteTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        totalWaste: Math.floor(Math.random() * 500) + 2500, // 2500-3000 tons
        recycling: Math.floor(Math.random() * 200) + 500, // 500-700 tons
        organics: Math.floor(Math.random() * 100) + 200, // 200-300 tons
        diversionRate: Math.floor(Math.random() * 10) + 65, // 65-75%
        energyGenerated: Math.floor(Math.random() * 5000) + 20000, // 20-25 MWh
        co2Avoided: Math.floor(Math.random() * 300) + 1000 // 1000-1300 tons
      });
    }
    return data;
  };

  useEffect(() => {
    setWasteTrends(generateWasteTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update fleet positions and capacity
      setCollectionFleet(prev => prev.map(truck => {
        if (truck.status === 'COLLECTING' || truck.status === 'EN_ROUTE') {
          return {
            ...truck,
            capacity: {
              ...truck.capacity,
              current: Math.min(truck.capacity.total, Math.max(0, truck.capacity.current + (Math.random() - 0.3) * 2)),
              weight: Math.min(12000, Math.max(0, truck.capacity.weight + (Math.random() - 0.3) * 200))
            },
            location: {
              ...truck.location,
              latitude: truck.location.latitude + (Math.random() - 0.5) * 0.003,
              longitude: truck.location.longitude + (Math.random() - 0.5) * 0.003,
              lastUpdate: Date.now()
            },
            performance: {
              ...truck.performance,
              fuelEfficiency: Math.max(5, Math.min(8, truck.performance.fuelEfficiency + (Math.random() - 0.5) * 0.2)),
              pickupsPerHour: Math.max(8, Math.min(16, truck.performance.pickupsPerHour + (Math.random() - 0.5) * 0.5))
            },
            lastUpdate: Date.now()
          };
        }
        return { ...truck, lastUpdate: Date.now() };
      }));

      // Update smart bins
      setSmartBins(prev => prev.map(bin => ({
        ...bin,
        fillLevel: Math.min(100, Math.max(0, bin.fillLevel + (Math.random() - 0.8) * 2)),
        sensorData: {
          ...bin.sensorData,
          weight: Math.min(150, Math.max(0, bin.sensorData.weight + (Math.random() - 0.8) * 3)),
          temperature: Math.max(10, Math.min(25, bin.sensorData.temperature + (Math.random() - 0.5) * 1))
        },
        environmental: {
          ...bin.environmental,
          solarPowerLevel: Math.max(60, Math.min(100, bin.environmental.solarPowerLevel + (Math.random() - 0.5) * 5)),
          batteryLevel: Math.max(70, Math.min(100, bin.environmental.batteryLevel + (Math.random() - 0.3) * 3))
        },
        lastUpdate: Date.now()
      })));

      // Update facility metrics
      setRecyclingFacilities(prev => prev.map(facility => ({
        ...facility,
        processing: {
          ...facility.processing,
          incomingMaterial: Math.max(0, Math.min(100, facility.processing.incomingMaterial + (Math.random() - 0.5) * 5)),
          contaminationRate: Math.max(2, Math.min(20, facility.processing.contaminationRate + (Math.random() - 0.5) * 1))
        },
        capacity: {
          ...facility.capacity,
          currentThroughput: Math.max(0, Math.min(facility.capacity.dailyThroughput, 
            facility.capacity.currentThroughput + (Math.random() - 0.5) * 20))
        },
        lastUpdate: Date.now()
      })));

      // Update operational metrics
      setOperationalMetrics(prev => ({
        ...prev,
        recyclingPerformance: {
          ...prev.recyclingPerformance,
          diversionRate: Math.max(60, Math.min(75, prev.recyclingPerformance.diversionRate + (Math.random() - 0.5) * 1)),
          contaminationRate: Math.max(5, Math.min(15, prev.recyclingPerformance.contaminationRate + (Math.random() - 0.5) * 0.5))
        },
        fleetPerformance: {
          ...prev.fleetPerformance,
          fuelEfficiency: Math.max(6, Math.min(8, prev.fleetPerformance.fuelEfficiency + (Math.random() - 0.5) * 0.1)),
          onTimePerformance: Math.max(80, Math.min(95, prev.fleetPerformance.onTimePerformance + (Math.random() - 0.5) * 2))
        }
      }));

    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'COLLECTING':
      case 'COMPLIANT':
      case 'ACTIVE':
      case 'OPTIMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'EN_ROUTE':
      case 'UNLOADING':
      case 'IMPROVING':
      case 'CALIBRATED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE':
      case 'OFFLINE':
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL':
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'LOW':
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPerformanceColor = (percentage) => {
    if (percentage >= 95) return 'text-green-400';
    if (percentage >= 85) return 'text-blue-400';
    if (percentage >= 75) return 'text-yellow-400';
    if (percentage >= 65) return 'text-orange-400';
    return 'text-red-400';
  };

  const getFillLevelColor = (level) => {
    if (level >= 90) return 'text-red-400';
    if (level >= 75) return 'text-orange-400';
    if (level >= 50) return 'text-yellow-400';
    return 'text-green-400';
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🗑️ WASTE MANAGEMENT OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {operationalMetrics.recyclingPerformance.diversionRate.toFixed(1)}% Diversion Rate
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {operationalMetrics.fleetPerformance.vehiclesActive}/{operationalMetrics.fleetPerformance.vehiclesActive + operationalMetrics.fleetPerformance.vehiclesMaintenance} Vehicles Active
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Smart Waste & Environmental Management
          </div>
        </div>
      </div>

      {/* Waste Management Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">DAILY COLLECTION</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(operationalMetrics.dailyCollection.totalWaste, 1)}
              </div>
              <div className="text-xs text-green-300">
                Tons Collected Today
              </div>
            </div>
            <div className="text-3xl opacity-60">🚛</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">RECYCLING RATE</div>
              <div className="text-2xl font-bold text-blue-100">
                {operationalMetrics.recyclingPerformance.diversionRate.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                Waste Diverted from Landfill
              </div>
            </div>
            <div className="text-3xl opacity-60">♻️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ENERGY GENERATED</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(operationalMetrics.environmental.energyGenerated / 1000, 1)}
              </div>
              <div className="text-xs text-purple-300">
                MWh from Waste-to-Energy
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CO₂ AVOIDED</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(operationalMetrics.recyclingPerformance.co2Avoided, 1)}
              </div>
              <div className="text-xs text-orange-300">
                Tons CO₂ Equivalent
              </div>
            </div>
            <div className="text-3xl opacity-60">🌱</div>
          </div>
        </div>
      </div>

      {/* Collection Fleet and Smart Bins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Collection Fleet Tracking */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚚 COLLECTION FLEET TRACKING & ROUTE OPTIMIZATION
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {collectionFleet.map((truck) => (
              <div key={truck.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(truck.status)}`}>
                      {truck.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {truck.type.replace(/_/g, ' ')}
                    </span>
                    {truck.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {truck.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(truck.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{truck.vehicleId}</div>
                <div className="text-xs text-cyan-400 mb-2">{truck.route} | Driver: {truck.driver}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {truck.location.address}
                </div>

                {/* Capacity and Load */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Load: </span>
                  <span className="text-green-400">{truck.capacity.current.toFixed(1)} cy</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{truck.capacity.total} cy</span>
                  <span className="text-gray-400"> | Utilization: </span>
                  <span className={getPerformanceColor(truck.capacity.utilizationRate)}>
                    {truck.capacity.utilizationRate.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | Weight: </span>
                  <span className="text-orange-400">{formatNumber(truck.capacity.weight)} lbs</span>
                </div>

                {/* Route Progress */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Progress: </span>
                  <span className="text-green-400">{truck.route_progress.completedStops}</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{truck.route_progress.totalStops} stops</span>
                  <span className="text-gray-400"> | </span>
                  <span className={getPerformanceColor(truck.route_progress.progressPercent)}>
                    {truck.route_progress.progressPercent.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-yellow-400">
                    {truck.route_progress.estimatedCompletion === 'COMPLETED' ? 'COMPLETED' :
                     truck.route_progress.estimatedCompletion ? 
                     new Date(truck.route_progress.estimatedCompletion).toLocaleTimeString() : 'N/A'}
                  </span>
                </div>

                {/* Performance Metrics */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Performance: </span>
                  <span className="text-cyan-400">{truck.performance.pickupsPerHour.toFixed(1)} pickups/hr</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">{truck.performance.fuelEfficiency.toFixed(1)} mpg</span>
                  <span className="text-gray-400"> | Stop Time: </span>
                  <span className="text-blue-400">{truck.performance.avgStopTime.toFixed(1)} min</span>
                </div>

                {/* Waste Types */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Waste Types:</div>
                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      <span className="text-blue-400">Municipal:</span> <span className="text-white">{truck.waste_types.municipal.toFixed(1)} cy</span>
                    </div>
                    <div>
                      <span className="text-green-400">Recyclables:</span> <span className="text-white">{truck.waste_types.recyclables.toFixed(1)} cy</span>
                    </div>
                    <div>
                      <span className="text-orange-400">Organics:</span> <span className="text-white">{truck.waste_types.organics.toFixed(1)} cy</span>
                    </div>
                    <div>
                      <span className="text-red-400">Hazardous:</span> <span className="text-white">{truck.waste_types.hazardous.toFixed(1)} cy</span>
                    </div>
                  </div>
                </div>

                {/* Equipment Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Equipment: </span>
                  <span className={getStatusColor(truck.equipment.hydraulics)}>H</span>
                  <span className="text-gray-400">/</span>
                  <span className={getStatusColor(truck.equipment.compaction)}>C</span>
                  <span className="text-gray-400">/</span>
                  <span className={getStatusColor(truck.equipment.scales)}>S</span>
                  <span className="text-gray-400">/</span>
                  <span className={getStatusColor(truck.equipment.gps)}>G</span>
                  <span className="text-gray-400"> | Fuel: </span>
                  <span className="text-purple-400">{truck.environmental.fuelType}</span>
                  <span className="text-gray-400"> | Emissions: </span>
                  <span className={getStatusColor(truck.environmental.emissionLevel)}>
                    {truck.environmental.emissionLevel}
                  </span>
                </div>

                {/* Environmental Impact */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">CO₂: </span>
                  <span className="text-orange-400">{truck.performance.co2Emissions.toFixed(1)} kg</span>
                  <span className="text-gray-400"> | Miles: </span>
                  <span className="text-blue-400">{truck.performance.dailyMiles.toFixed(1)}</span>
                  <span className="text-gray-400"> | Noise: </span>
                  <span className="text-cyan-400">{truck.environmental.noiseLevel} dB</span>
                </div>

                {truck.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {truck.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🚚 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Smart Bins Network */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🗂️ SMART BINS NETWORK & IoT MONITORING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {smartBins.map((bin) => (
              <div key={bin.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(bin.status)}`}>
                      {bin.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {bin.type.replace(/_/g, ' ')}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded font-mono border ${getFillLevelColor(bin.fillLevel)}`}>
                      {bin.fillLevel.toFixed(1)}% Full
                    </span>
                    {bin.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {bin.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(bin.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{bin.location}</div>

                {/* Fill Level and Capacity */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Fill Level: </span>
                  <span className={getFillLevelColor(bin.fillLevel)}>
                    {bin.fillLevel.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | Capacity: </span>
                  <span className="text-blue-400">{bin.capacity} gal</span>
                  <span className="text-gray-400"> | Weight: </span>
                  <span className="text-orange-400">{bin.sensorData.weight.toFixed(1)} lbs</span>
                </div>

                {/* Collection Schedule */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Last Collection: </span>
                  <span className="text-green-400">{new Date(bin.lastCollection).toLocaleDateString()}</span>
                  <span className="text-gray-400"> | Next: </span>
                  <span className="text-yellow-400">{new Date(bin.nextCollection).toLocaleDateString()}</span>
                </div>

                {/* AI Detection Results */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">AI Waste Analysis:</div>
                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      <span className="text-blue-400">Type:</span> <span className="text-white">{bin.ai_detection.wasteType.replace(/_/g, ' ')}</span>
                    </div>
                    <div>
                      <span className={`${getStatusColor(bin.ai_detection.contamination)}`}>
                        Contamination: {bin.ai_detection.contamination}
                      </span>
                    </div>
                    <div>
                      <span className="text-green-400">Recyclables:</span> <span className="text-white">{bin.ai_detection.recyclables.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-orange-400">Organics:</span> <span className="text-white">{bin.ai_detection.organics.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Performance: </span>
                  <span className="text-cyan-400">{bin.performance.compactionRatio.toFixed(1)}:1 ratio</span>
                  <span className="text-gray-400"> | Collection: </span>
                  <span className="text-blue-400">{bin.performance.collectionFrequency.toFixed(1)} days</span>
                  <span className="text-gray-400"> | Score: </span>
                  <span className={getPerformanceColor(bin.performance.maintenanceScore)}>
                    {bin.performance.maintenanceScore.toFixed(1)}%
                  </span>
                </div>

                {/* Environmental Sensors */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Environment: </span>
                  <span className="text-blue-400">{bin.sensorData.temperature.toFixed(1)}°C</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">{bin.sensorData.humidity.toFixed(1)}% RH</span>
                  <span className="text-gray-400"> | Vibration: </span>
                  <span className={getStatusColor(bin.sensorData.vibration)}>{bin.sensorData.vibration}</span>
                </div>

                {/* Solar Power & Battery */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Power: </span>
                  <span className="text-yellow-400">Solar {bin.environmental.solarPowerLevel.toFixed(1)}%</span>
                  <span className="text-gray-400"> | Battery: </span>
                  <span className={getPerformanceColor(bin.environmental.batteryLevel)}>
                    {bin.environmental.batteryLevel.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | CO₂ Saved: </span>
                  <span className="text-green-400">{bin.environmental.co2Savings.toFixed(1)} kg/week</span>
                </div>

                {bin.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {bin.alerts.map((alert, index) => (
                      <div key={index} className={`${alert.includes('URGENT') ? 'text-red-400' : 'text-orange-400'}`}>
                        🗂️ {alert}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Processing Facilities and Waste Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Processing Facilities */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 PROCESSING FACILITIES & RECOVERY OPERATIONS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {recyclingFacilities.map((facility) => (
              <div key={facility.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(facility.status)}`}>
                      {facility.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {facility.type}
                    </span>
                    {facility.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {facility.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(facility.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{facility.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{facility.location} | Manager: {facility.manager}</div>

                {/* Throughput and Capacity */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Throughput: </span>
                  <span className="text-green-400">{facility.capacity.currentThroughput.toFixed(0)} tons</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{facility.capacity.dailyThroughput} tons/day</span>
                  <span className="text-gray-400"> | Utilization: </span>
                  <span className={getPerformanceColor(facility.capacity.utilizationRate)}>
                    {facility.capacity.utilizationRate.toFixed(1)}%
                  </span>
                </div>

                {/* Processing Metrics */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Processing: </span>
                  <span className="text-cyan-400">{facility.processing.incomingMaterial.toFixed(1)} t/h incoming</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">{facility.processing.sortingRate.toFixed(1)} t/h sorting</span>
                  <span className="text-gray-400"> | Contamination: </span>
                  <span className={facility.processing.contaminationRate > 10 ? 'text-red-400' : 
                                 facility.processing.contaminationRate > 5 ? 'text-yellow-400' : 'text-green-400'}>
                    {facility.processing.contaminationRate.toFixed(1)}%
                  </span>
                </div>

                {/* Material Recovery */}
                {facility.processing.recovery && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Recovery (tons today):</div>
                    <div className="grid grid-cols-2 gap-1">
                      {Object.entries(facility.processing.recovery).map(([material, amount]) => (
                        <div key={material}>
                          <span className="text-purple-400">{material.charAt(0).toUpperCase() + material.slice(1)}:</span> 
                          <span className="text-white"> {typeof amount === 'number' ? amount.toFixed(1) : amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Equipment Status */}
                {facility.equipment && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Equipment Status:</div>
                    {Object.entries(facility.equipment).map(([equipType, details]) => {
                      if (typeof details === 'object' && details.total !== undefined) {
                        return (
                          <div key={equipType}>
                            <span className="text-blue-400">{equipType.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="text-white"> {details.operational}/{details.total}</span>
                            {details.efficiency && (
                              <span className={getPerformanceColor(details.efficiency)}> ({details.efficiency.toFixed(1)}%)</span>
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

                {/* Specialized Metrics */}
                {facility.type === 'COMPOSTING' && facility.composting && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Composting: </span>
                    <span className="text-orange-400">{facility.composting.temperatureAvg.toFixed(1)}°C</span>
                    <span className="text-gray-400"> | pH: </span>
                    <span className="text-blue-400">{facility.composting.pHLevel.toFixed(1)}</span>
                    <span className="text-gray-400"> | Grade: </span>
                    <span className="text-green-400">{facility.composting.compostGrade}</span>
                  </div>
                )}

                {facility.type === 'WTE' && facility.energy && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Energy: </span>
                    <span className="text-yellow-400">{formatNumber(facility.energy.electricityGenerated)} MWh</span>
                    <span className="text-gray-400"> | Efficiency: </span>
                    <span className={getPerformanceColor(facility.energy.efficiency)}>
                      {facility.energy.efficiency.toFixed(1)}%
                    </span>
                    <span className="text-gray-400"> | Steam: </span>
                    <span className="text-cyan-400">{formatNumber(facility.energy.steamProduced)} lbs</span>
                  </div>
                )}

                {/* Environmental Impact */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Environmental: </span>
                  <span className="text-blue-400">{facility.environmental.energyConsumption.toFixed(1)} kWh/h</span>
                  <span className="text-gray-400"> | Water: </span>
                  <span className="text-cyan-400">{formatNumber(facility.environmental.waterUsage)} gal/h</span>
                  <span className="text-gray-400"> | Emissions: </span>
                  <span className={facility.environmental.emissions < 0 ? 'text-green-400' : 'text-orange-400'}>
                    {facility.environmental.emissions.toFixed(1)} kg CO₂/h
                  </span>
                </div>

                {facility.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {facility.alerts.slice(0, 2).map((alert, index) => (
                      <div key={index} className="text-orange-400">🏭 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Waste Management Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 WASTE MANAGEMENT TRENDS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={wasteTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
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
                dataKey="totalWaste"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.1}
                strokeWidth={3}
                name="Total Waste (tons)"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="recycling" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Recycling (tons)"
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="organics" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Organics (tons)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="diversionRate" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Diversion Rate (%)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="co2Avoided" 
                stroke="#06B6D4" 
                strokeWidth={2}
                name="CO₂ Avoided (tons)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Waste Management KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 WASTE MANAGEMENT KPIs & ENVIRONMENTAL PERFORMANCE
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Diversion Rate</div>
            <div className="text-white font-bold text-lg">
              {operationalMetrics.recyclingPerformance.diversionRate.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">landfill avoidance</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Fleet Efficiency</div>
            <div className="text-white font-bold text-lg">
              {operationalMetrics.fleetPerformance.fuelEfficiency.toFixed(1)}
            </div>
            <div className="text-blue-400 text-xs">mpg average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Energy Generated</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(operationalMetrics.environmental.energyGenerated / 1000, 1)}
            </div>
            <div className="text-purple-400 text-xs">GWh from waste</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Route Optimization</div>
            <div className="text-white font-bold text-lg">
              {operationalMetrics.fleetPerformance.routeOptimization.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">efficiency</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">EPA Compliance</div>
            <div className="text-white font-bold text-lg">
              {operationalMetrics.compliance.epaCompliance.toFixed(1)}%
            </div>
            <div className="text-cyan-400 text-xs">regulatory score</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Profit Margin</div>
            <div className="text-white font-bold text-lg">
              {operationalMetrics.financial.profitMargin.toFixed(1)}%
            </div>
            <div className="text-yellow-400 text-xs">operational ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteManagementOperations;