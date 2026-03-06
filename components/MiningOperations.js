// MiningOperations.js - Mining Operations Control Center & Equipment Monitoring Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const MiningOperations = () => {
  const [miningEquipment, setMiningEquipment] = useState([
    {
      id: 'excavator_001',
      name: 'CAT 6090 FS',
      type: 'HYDRAULIC_EXCAVATOR',
      location: 'Pit A - Level 2',
      operator: 'Mike Thompson',
      shift: 'Day Shift A',
      status: 'OPERATIONAL',
      mode: 'PRODUCTION',
      coordinates: { x: 245.6, y: 1234.8, elevation: -45 },
      specifications: {
        bucketCapacity: 34.0, // cubic meters
        operatingWeight: 544000, // kg
        engine: 'Cat C32 ACERT',
        enginePower: 1194, // kW
        maxDigDepth: 8.7, // meters
        maxReach: 15.2 // meters
      },
      performance: {
        cycleTime: 28.5, // seconds
        efficiency: 87.3, // percentage
        bucketFill: 92.1, // percentage
        fuelConsumption: 156.8, // liters/hour
        productivity: 2890, // tons/hour
        utilization: 94.2 // percentage
      },
      maintenance: {
        lastService: '2026-03-01',
        nextService: '2026-03-08',
        serviceHours: 8234.5,
        nextServiceHours: 8500,
        hoursRemaining: 265.5,
        maintenanceStatus: 'SCHEDULED'
      },
      systems: {
        hydraulics: { pressure: 380, // bar
                     temperature: 62, // celsius
                     flow: 785, // liters/min
                     status: 'NORMAL' },
        engine: { rpm: 1850,
                 temperature: 89, // celsius
                 pressure: 4.2, // bar
                 status: 'NORMAL' },
        tracks: { tension: 'OPTIMAL',
                 wear: 'MODERATE',
                 status: 'SERVICEABLE' }
      },
      alerts: ['High fuel consumption detected', 'Service due in 265 hours'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'haul_truck_001',
      name: 'CAT 797F',
      type: 'HAUL_TRUCK',
      location: 'Haul Road 3 - Ascending',
      operator: 'Sarah Johnson',
      shift: 'Day Shift A',
      status: 'OPERATIONAL',
      mode: 'LOADED',
      coordinates: { x: 567.2, y: 2145.7, elevation: -28 },
      specifications: {
        payloadCapacity: 363000, // kg
        grossWeight: 687500, // kg
        engine: 'Cat C175-20',
        enginePower: 2610, // kW
        fuelCapacity: 4730, // liters
        maxSpeed: 64 // km/h
      },
      performance: {
        currentLoad: 342000, // kg
        loadFactor: 94.2, // percentage
        fuelConsumption: 287.5, // liters/hour
        averageSpeed: 28.4, // km/h
        cycleTime: 52.3, // minutes
        productivity: 14500 // tons/shift
      },
      maintenance: {
        lastService: '2026-02-28',
        nextService: '2026-03-14',
        serviceHours: 12567.8,
        nextServiceHours: 13000,
        hoursRemaining: 432.2,
        maintenanceStatus: 'CURRENT'
      },
      systems: {
        transmission: { temperature: 78, // celsius
                       pressure: 2.8, // bar
                       gear: 3,
                       status: 'NORMAL' },
        brakes: { temperature: 145, // celsius
                 pressure: 8.5, // bar
                 wear: 'GOOD',
                 status: 'OPTIMAL' },
        tires: { pressure: { front: 5.2, rear: 5.1 }, // bar
                temperature: 45, // celsius
                wear: 'MODERATE',
                status: 'SERVICEABLE' }
      },
      alerts: ['Brake temperature elevated but within limits'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'drill_001',
      name: 'Atlas Copco PIT VIPER 271',
      type: 'BLAST_HOLE_DRILL',
      location: 'Pit B - Bench 15',
      operator: 'Carlos Rodriguez',
      shift: 'Day Shift B',
      status: 'OPERATIONAL',
      mode: 'DRILLING',
      coordinates: { x: 789.4, y: 3567.2, elevation: -67 },
      specifications: {
        holeDepth: 15.2, // meters maximum
        holeDiameter: 311, // mm
        penetrationRate: 35, // meters/hour
        engine: 'Cat C18 ACERT',
        enginePower: 390, // kW
        compressorPressure: 24.5 // bar
      },
      performance: {
        currentDepth: 8.7, // meters
        penetrationRate: 28.3, // meters/hour current
        holesCompleted: 23,
        holesPlanned: 45,
        completion: 51.1, // percentage
        efficiency: 89.4 // percentage
      },
      maintenance: {
        lastService: '2026-03-03',
        nextService: '2026-03-17',
        serviceHours: 3456.2,
        nextServiceHours: 3750,
        hoursRemaining: 293.8,
        maintenanceStatus: 'CURRENT'
      },
      systems: {
        compressor: { pressure: 24.1, // bar
                     temperature: 95, // celsius
                     flow: 850, // cfm
                     status: 'NORMAL' },
        rotaryHead: { rpm: 120,
                     torque: 32500, // Nm
                     downPressure: 178, // kN
                     status: 'NORMAL' },
        mast: { angle: 90, // degrees
               height: 12.3, // meters
               status: 'POSITIONED' }
      },
      alerts: ['Target completion 72% for shift'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'shovel_001',
      name: 'P&H 4100XPC',
      type: 'ELECTRIC_SHOVEL',
      location: 'Pit A - Loading Area 3',
      operator: 'Jennifer Chen',
      shift: 'Day Shift A',
      status: 'OPERATIONAL',
      mode: 'LOADING',
      coordinates: { x: 456.8, y: 1876.5, elevation: -52 },
      specifications: {
        bucketCapacity: 45.0, // cubic meters
        operatingWeight: 980000, // kg
        powerSupply: '7200V Electric',
        maxDigDepth: 17.4, // meters
        maxReach: 18.3, // meters
        maxDumpHeight: 15.8 // meters
      },
      performance: {
        cycleTime: 32.1, // seconds
        efficiency: 91.7, // percentage
        bucketFill: 94.8, // percentage
        powerConsumption: 2840, // kW
        productivity: 3650, // tons/hour
        utilization: 96.8 // percentage
      },
      maintenance: {
        lastService: '2026-02-25',
        nextService: '2026-03-11',
        serviceHours: 15678.9,
        nextServiceHours: 16000,
        hoursRemaining: 321.1,
        maintenanceStatus: 'CURRENT'
      },
      systems: {
        electrical: { voltage: 7180, // volts
                     current: 395, // amps
                     power: 2840, // kW
                     status: 'NORMAL' },
        hoist: { load: 87500, // kg
                motorTemperature: 78, // celsius
                cableWear: 'GOOD',
                status: 'OPTIMAL' },
        crowd: { force: 1450, // kN
                motorTemperature: 82, // celsius
                status: 'NORMAL' }
      },
      alerts: ['Excellent productivity - 104% of target'],
      lastUpdate: Date.now() - 90 * 1000
    }
  ]);

  const [miningSites, setMiningSites] = useState([
    {
      id: 'copper_ridge',
      name: 'Copper Ridge Mine',
      type: 'OPEN_PIT',
      commodity: 'COPPER',
      location: 'Nevada, USA',
      status: 'OPERATIONAL',
      shift: 'Day Shift (06:00-18:00)',
      shiftCrew: 147,
      manager: 'David Park',
      production: {
        daily: { target: 45000, actual: 42300, percentage: 94.0 }, // tonnes
        monthly: { target: 1200000, actual: 1134500, percentage: 94.5 },
        ytd: { target: 2850000, actual: 2723400, percentage: 95.6 }
      },
      equipment: {
        operational: 23,
        maintenance: 4,
        standby: 2,
        utilization: 85.2, // percentage
        availability: 89.7
      },
      safety: {
        daysWithoutIncident: 89,
        incidentsThisYear: 2,
        safetyScore: 94.7,
        lastIncident: '2025-12-05',
        hazardReports: 15 // this month
      },
      environmental: {
        dustLevel: 0.8, // mg/m³
        noiseLevel: 78, // dB
        waterUsage: 2340, // m³/day
        wasteGenerated: 156000, // tonnes/month
        rehabilitation: 67.3 // percentage complete
      },
      geology: {
        oreGrade: 0.78, // percentage copper
        stripRatio: 2.3, // waste:ore
        pitDepth: 187, // meters
        benchHeight: 12, // meters
        slopeAngle: 45 // degrees
      },
      weather: {
        temperature: 18, // celsius
        windSpeed: 12, // km/h
        windDirection: 'NW',
        visibility: 15, // km
        conditions: 'Clear'
      },
      alerts: ['Production 6% below target', 'Equipment utilization below 90%'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'goldfield_underground',
      name: 'Goldfield Underground',
      type: 'UNDERGROUND',
      commodity: 'GOLD',
      location: 'Western Australia',
      status: 'OPERATIONAL',
      shift: 'Night Shift (18:00-06:00)',
      shiftCrew: 89,
      manager: 'Emma Wilson',
      production: {
        daily: { target: 8500, actual: 9200, percentage: 108.2 }, // tonnes
        monthly: { target: 245000, actual: 267800, percentage: 109.3 },
        ytd: { target: 720000, actual: 789400, percentage: 109.6 }
      },
      equipment: {
        operational: 18,
        maintenance: 2,
        standby: 1,
        utilization: 92.7,
        availability: 94.3
      },
      safety: {
        daysWithoutIncident: 156,
        incidentsThisYear: 0,
        safetyScore: 98.9,
        lastIncident: '2025-09-30',
        hazardReports: 8
      },
      environmental: {
        airQuality: 'GOOD', // underground air monitoring
        ventilationRate: 450, // m³/s
        co2Level: 0.03, // percentage
        temperature: 28, // celsius underground
        humidity: 85 // percentage
      },
      geology: {
        oreGrade: 12.4, // g/t gold
        stope: {
          current: 'Stope 15-A',
          depth: 245, // meters
          tonnage: 15600, // tonnes planned
          recovery: 94.8 // percentage
        },
        geology: 'Quartz vein hosted gold'
      },
      mining: {
        method: 'Cut and Fill',
        advance: 3.4, // meters/day
        dilution: 8.7, // percentage
        recovery: 94.8, // percentage
        backfill: 'Cemented aggregate'
      },
      alerts: ['Exceeding production target by 8.2%', 'Outstanding safety record'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'iron_valley',
      name: 'Iron Valley',
      type: 'OPEN_PIT',
      commodity: 'IRON_ORE',
      location: 'Pilbara, Australia',
      status: 'OPERATIONAL',
      shift: 'Day Shift (05:00-17:00)',
      shiftCrew: 203,
      manager: 'Robert Kim',
      production: {
        daily: { target: 125000, actual: 118600, percentage: 94.9 },
        monthly: { target: 3600000, actual: 3445200, percentage: 95.7 },
        ytd: { target: 11200000, actual: 10734800, percentage: 95.8 }
      },
      equipment: {
        operational: 45,
        maintenance: 8,
        standby: 3,
        utilization: 87.4,
        availability: 91.2
      },
      safety: {
        daysWithoutIncident: 67,
        incidentsThisYear: 3,
        safetyScore: 91.5,
        lastIncident: '2025-12-28',
        hazardReports: 22
      },
      environmental: {
        dustLevel: 1.2,
        noiseLevel: 82,
        waterUsage: 5670,
        wasteGenerated: 485000,
        rehabilitation: 23.8
      },
      geology: {
        oreGrade: 62.4, // percentage Fe
        stripRatio: 1.8,
        pitDepth: 234,
        benchHeight: 15,
        slopeAngle: 50
      },
      weather: {
        temperature: 34,
        windSpeed: 18,
        windDirection: 'SW',
        visibility: 12,
        conditions: 'Dusty'
      },
      alerts: ['Dust levels elevated', 'High ambient temperature affecting equipment'],
      lastUpdate: Date.now() - 7 * 60 * 1000
    }
  ]);

  const [personnelSafety, setPersonnelSafety] = useState([
    {
      id: 'safety_001',
      employeeId: 'EMP2341',
      name: 'Mike Thompson',
      position: 'Heavy Equipment Operator',
      shift: 'Day Shift A',
      location: 'Pit A - Level 2',
      equipment: 'CAT 6090 FS',
      status: 'ON_DUTY',
      checkIn: '05:45',
      lastActivity: Date.now() - 15 * 60 * 1000,
      safety: {
        certification: {
          heavyEquipment: '2026-12-15',
          safetyTraining: '2026-06-30',
          firstAid: '2026-08-22',
          highRisk: '2026-04-15'
        },
        ppe: {
          helmet: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          gloves: 'ACTIVE',
          glasses: 'ACTIVE'
        },
        vitals: {
          heartRate: 78, // bpm
          bodyTemp: 36.8, // celsius
          hydration: 'NORMAL',
          fatigue: 'LOW',
          alertness: 'HIGH'
        },
        gasDetection: {
          co: 0.01, // ppm
          h2s: 0.0, // ppm
          o2: 20.9, // percentage
          lel: 0.0, // percentage LEL
          status: 'SAFE'
        }
      },
      emergency: {
        contactName: 'Lisa Thompson',
        contactPhone: '+1-555-0123',
        medicalConditions: 'None',
        emergencyEvacuation: 'Route A to Assembly Point 1'
      },
      alerts: ['All safety systems normal'],
      lastUpdate: Date.now() - 15 * 60 * 1000
    },
    {
      id: 'safety_002',
      employeeId: 'EMP4567',
      name: 'Sarah Johnson',
      position: 'Haul Truck Driver',
      shift: 'Day Shift A',
      location: 'Haul Road 3',
      equipment: 'CAT 797F',
      status: 'ON_DUTY',
      checkIn: '05:30',
      lastActivity: Date.now() - 8 * 60 * 1000,
      safety: {
        certification: {
          heavyEquipment: '2026-11-20',
          safetyTraining: '2026-05-15',
          firstAid: '2026-07-10',
          highRisk: '2026-03-25'
        },
        ppe: {
          helmet: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          gloves: 'ACTIVE',
          glasses: 'ACTIVE'
        },
        vitals: {
          heartRate: 82,
          bodyTemp: 37.1,
          hydration: 'SLIGHTLY_LOW',
          fatigue: 'MODERATE',
          alertness: 'NORMAL'
        },
        gasDetection: {
          co: 0.02,
          h2s: 0.0,
          o2: 20.8,
          lel: 0.0,
          status: 'SAFE'
        }
      },
      emergency: {
        contactName: 'Tom Johnson',
        contactPhone: '+1-555-0456',
        medicalConditions: 'None',
        emergencyEvacuation: 'Route B to Assembly Point 2'
      },
      alerts: ['Hydration reminder - drink water', 'Fatigue monitoring - moderate level'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'safety_003',
      employeeId: 'UG1234',
      name: 'James Mitchell',
      position: 'Underground Miner',
      shift: 'Night Shift',
      location: 'Level 8 - Stope 15-A',
      equipment: 'Jumbo Drill',
      status: 'ON_DUTY',
      checkIn: '17:45',
      lastActivity: Date.now() - 5 * 60 * 1000,
      safety: {
        certification: {
          underground: '2026-09-30',
          explosives: '2026-10-15',
          rescue: '2026-06-20',
          confined: '2026-08-05'
        },
        ppe: {
          helmet: 'ACTIVE',
          vest: 'ACTIVE',
          boots: 'ACTIVE',
          gloves: 'ACTIVE',
          selfRescuer: 'ACTIVE'
        },
        vitals: {
          heartRate: 74,
          bodyTemp: 36.9,
          hydration: 'NORMAL',
          fatigue: 'LOW',
          alertness: 'HIGH'
        },
        gasDetection: {
          co: 0.01,
          h2s: 0.0,
          o2: 20.7,
          ch4: 0.0, // methane
          status: 'SAFE'
        }
      },
      underground: {
        depth: 245, // meters
        ventilation: 'ACTIVE',
        communication: 'LEAKY_FEEDER',
        escape: 'Shaft A - 15 minutes',
        airflow: 4.2 // m/s
      },
      emergency: {
        contactName: 'Mary Mitchell',
        contactPhone: '+61-555-7890',
        medicalConditions: 'None',
        emergencyEvacuation: 'Shaft A to Surface'
      },
      alerts: ['Underground safety systems all green'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    }
  ]);

  const [environmentalMonitoring, setEnvironmentalMonitoring] = useState([
    {
      id: 'env_001',
      station: 'Air Quality Station 1',
      location: 'Downwind of Pit Operations',
      type: 'AIR_QUALITY',
      coordinates: { latitude: 39.7456, longitude: -116.2389 },
      status: 'OPERATIONAL',
      measurements: {
        pm10: { value: 0.085, unit: 'mg/m³', limit: 0.150, status: 'NORMAL' },
        pm25: { value: 0.042, unit: 'mg/m³', limit: 0.065, status: 'NORMAL' },
        no2: { value: 0.023, unit: 'mg/m³', limit: 0.200, status: 'NORMAL' },
        so2: { value: 0.015, unit: 'mg/m³', limit: 0.125, status: 'NORMAL' },
        visibility: { value: 12.5, unit: 'km', limit: 5.0, status: 'GOOD' }
      },
      meteorology: {
        windSpeed: 12.3, // km/h
        windDirection: 245, // degrees
        temperature: 18.7, // celsius
        humidity: 45.2, // percentage
        pressure: 1013.2 // hPa
      },
      alerts: ['All air quality parameters within limits'],
      lastUpdate: Date.now() - 10 * 60 * 1000
    },
    {
      id: 'env_002',
      station: 'Water Quality Monitor',
      location: 'Settling Pond Outlet',
      type: 'WATER_QUALITY',
      coordinates: { latitude: 39.7234, longitude: -116.2567 },
      status: 'OPERATIONAL',
      measurements: {
        ph: { value: 7.2, unit: 'pH', range: '6.5-8.5', status: 'NORMAL' },
        turbidity: { value: 12.5, unit: 'NTU', limit: 50.0, status: 'NORMAL' },
        tss: { value: 28.7, unit: 'mg/L', limit: 100.0, status: 'NORMAL' },
        metals: { 
          copper: { value: 0.12, unit: 'mg/L', limit: 1.0, status: 'NORMAL' },
          iron: { value: 0.85, unit: 'mg/L', limit: 5.0, status: 'NORMAL' }
        },
        flow: { value: 245.8, unit: 'L/min', status: 'STEADY' }
      },
      treatment: {
        flocculant: 'ACTIVE',
        settling: 'OPTIMAL',
        filtration: 'OPERATING',
        ph_adjustment: 'AUTOMATIC'
      },
      alerts: ['Water treatment systems operating normally'],
      lastUpdate: Date.now() - 12 * 60 * 1000
    },
    {
      id: 'env_003',
      station: 'Noise Monitor - Boundary',
      location: 'East Property Boundary',
      type: 'NOISE',
      coordinates: { latitude: 39.7123, longitude: -116.2445 },
      status: 'OPERATIONAL',
      measurements: {
        laeq: { value: 52.3, unit: 'dB(A)', limit: 55.0, status: 'NORMAL' },
        la10: { value: 58.7, unit: 'dB(A)', limit: 65.0, status: 'NORMAL' },
        la90: { value: 45.2, unit: 'dB(A)', status: 'BACKGROUND' },
        peak: { value: 78.9, unit: 'dB(A)', time: '14:23', status: 'NOTED' }
      },
      sources: {
        equipment: 45.6, // dB contribution
        blasting: 0.0, // not active
        hauling: 38.2, // dB contribution
        processing: 23.4 // dB contribution
      },
      compliance: {
        dayTime: 'COMPLIANT', // 07:00-18:00
        eveningTime: 'COMPLIANT', // 18:00-22:00
        nightTime: 'N/A' // 22:00-07:00
      },
      alerts: ['Noise levels within regulatory limits'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'env_004',
      station: 'Geotechnical Monitor',
      location: 'Pit Slope - East Wall',
      type: 'GROUND_STABILITY',
      coordinates: { latitude: 39.7345, longitude: -116.2234 },
      status: 'OPERATIONAL',
      measurements: {
        displacement: { 
          horizontal: { value: 0.8, unit: 'mm/month', threshold: 50.0, status: 'STABLE' },
          vertical: { value: -1.2, unit: 'mm/month', threshold: 25.0, status: 'STABLE' }
        },
        groundwater: {
          level: { value: 45.6, unit: 'm below surface', status: 'MONITORED' },
          pressure: { value: 2.3, unit: 'bar', status: 'NORMAL' }
        },
        slope: {
          angle: 48.5, // degrees
          design: 50.0, // degrees design
          stability: 'STABLE',
          factorOfSafety: 1.8
        }
      },
      instrumentation: {
        inclinometers: 12,
        piezometers: 8,
        extensometers: 6,
        surveyPrisms: 24
      },
      alerts: ['All geotechnical parameters within acceptable range'],
      lastUpdate: Date.now() - 15 * 60 * 1000
    }
  ]);

  const [productionMetrics, setProductionMetrics] = useState({
    overallProduction: {
      daily: { target: 178500, actual: 170100, percentage: 95.3 },
      weekly: { target: 1249500, actual: 1189700, percentage: 95.2 },
      monthly: { target: 5045000, actual: 4847300, percentage: 96.1 },
      ytd: { target: 14770000, actual: 14247600, percentage: 96.5 }
    },
    efficiency: {
      equipment: 89.1, // percentage
      labor: 92.6,
      energy: 87.4,
      overall: 89.7
    },
    costs: {
      perTonne: 28.45, // $ per tonne
      fuel: 4.67, // $ per tonne
      labor: 12.34,
      maintenance: 6.78,
      other: 4.66
    },
    quality: {
      gradeControl: 94.7, // percentage within spec
      contamination: 2.1, // percentage
      recovery: 91.8, // percentage
      wasteDilution: 8.3 // percentage
    },
    sustainability: {
      energyIntensity: 45.6, // kWh per tonne
      waterRecycling: 87.3, // percentage
      wasteToLandfill: 12.4, // percentage
      carbonFootprint: 0.89 // tonnes CO2e per tonne
    },
    lastUpdate: Date.now() - 6 * 60 * 1000
  });

  const [productionTrends, setProductionTrends] = useState([]);

  const generateProductionTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        production: Math.floor(Math.random() * 20000) + 160000, // 160-180k tonnes/day
        efficiency: Math.floor(Math.random() * 10) + 85, // 85-95% efficiency
        safety: Math.floor(Math.random() * 5) + 95, // 95-100% safety score
        cost: Math.floor(Math.random() * 5) + 26, // $26-31 per tonne
        equipment: Math.floor(Math.random() * 8) + 85, // 85-93% availability
        environmental: Math.floor(Math.random() * 5) + 92 // 92-97% compliance
      });
    }
    return data;
  };

  useEffect(() => {
    setProductionTrends(generateProductionTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update mining equipment
      setMiningEquipment(prev => prev.map(equipment => ({
        ...equipment,
        performance: {
          ...equipment.performance,
          efficiency: Math.max(80, Math.min(98, equipment.performance.efficiency + (Math.random() - 0.5) * 2)),
          utilization: Math.max(85, Math.min(99, equipment.performance.utilization + (Math.random() - 0.5) * 1.5)),
          productivity: Math.max(equipment.specifications.bucketCapacity * 50, 
                                equipment.performance.productivity + (Math.random() - 0.5) * 200)
        },
        systems: equipment.type === 'HYDRAULIC_EXCAVATOR' ? {
          ...equipment.systems,
          hydraulics: {
            ...equipment.systems.hydraulics,
            pressure: Math.max(350, Math.min(420, equipment.systems.hydraulics.pressure + (Math.random() - 0.5) * 10)),
            temperature: Math.max(50, Math.min(80, equipment.systems.hydraulics.temperature + (Math.random() - 0.5) * 3))
          }
        } : equipment.systems,
        lastUpdate: Date.now()
      })));

      // Update mining sites
      setMiningSites(prev => prev.map(site => ({
        ...site,
        production: {
          ...site.production,
          daily: {
            ...site.production.daily,
            actual: Math.max(site.production.daily.target * 0.85, 
                           Math.min(site.production.daily.target * 1.15, 
                           site.production.daily.actual + (Math.random() - 0.5) * 2000)),
            percentage: 0 // will be calculated
          }
        },
        equipment: {
          ...site.equipment,
          utilization: Math.max(80, Math.min(95, site.equipment.utilization + (Math.random() - 0.5) * 2))
        },
        lastUpdate: Date.now()
      })).map(site => ({
        ...site,
        production: {
          ...site.production,
          daily: {
            ...site.production.daily,
            percentage: (site.production.daily.actual / site.production.daily.target * 100)
          }
        }
      })));

      // Update personnel safety
      setPersonnelSafety(prev => prev.map(person => ({
        ...person,
        safety: {
          ...person.safety,
          vitals: {
            ...person.safety.vitals,
            heartRate: Math.max(60, Math.min(120, person.safety.vitals.heartRate + (Math.random() - 0.5) * 5)),
            bodyTemp: Math.max(36.0, Math.min(38.0, person.safety.vitals.bodyTemp + (Math.random() - 0.5) * 0.2))
          }
        },
        lastActivity: Date.now() - Math.floor(Math.random() * 600000), // within last 10 minutes
        lastUpdate: Date.now()
      })));

      // Update environmental monitoring
      setEnvironmentalMonitoring(prev => prev.map(env => {
        if (env.type === 'AIR_QUALITY') {
          return {
            ...env,
            measurements: {
              ...env.measurements,
              pm10: {
                ...env.measurements.pm10,
                value: Math.max(0.02, Math.min(0.12, env.measurements.pm10.value + (Math.random() - 0.5) * 0.01))
              },
              visibility: {
                ...env.measurements.visibility,
                value: Math.max(8, Math.min(20, env.measurements.visibility.value + (Math.random() - 0.5) * 1))
              }
            },
            lastUpdate: Date.now()
          };
        }
        return { ...env, lastUpdate: Date.now() };
      }));

      // Update production metrics
      setProductionMetrics(prev => ({
        ...prev,
        overallProduction: {
          ...prev.overallProduction,
          daily: {
            ...prev.overallProduction.daily,
            actual: Math.max(150000, Math.min(185000, prev.overallProduction.daily.actual + (Math.random() - 0.5) * 3000)),
            percentage: 0 // will be calculated
          }
        },
        efficiency: {
          ...prev.efficiency,
          equipment: Math.max(85, Math.min(95, prev.efficiency.equipment + (Math.random() - 0.5) * 1.5))
        },
        lastUpdate: Date.now()
      }));

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Recalculate percentages
  useEffect(() => {
    setProductionMetrics(prev => ({
      ...prev,
      overallProduction: {
        ...prev.overallProduction,
        daily: {
          ...prev.overallProduction.daily,
          percentage: (prev.overallProduction.daily.actual / prev.overallProduction.daily.target * 100)
        }
      }
    }));
  }, [productionMetrics.overallProduction.daily.actual]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'ON_DUTY':
      case 'ACTIVE':
      case 'NORMAL':
      case 'OPTIMAL':
      case 'STABLE':
      case 'GOOD':
      case 'SAFE':
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY':
      case 'SCHEDULED':
      case 'CURRENT':
      case 'MONITORED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOADING':
      case 'DRILLING':
      case 'PRODUCTION': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'LOADED':
      case 'MODE': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'MAINTENANCE':
      case 'SLIGHTLY_LOW':
      case 'MODERATE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'DOWN':
      case 'FAILED':
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getProductionColor = (percentage) => {
    if (percentage >= 100) return 'text-green-400';
    if (percentage >= 95) return 'text-yellow-400';
    if (percentage >= 90) return 'text-orange-400';
    return 'text-red-400';
  };

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 95) return 'text-green-400';
    if (efficiency >= 90) return 'text-yellow-400';
    if (efficiency >= 85) return 'text-orange-400';
    return 'text-red-400';
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
    return `$${amount.toFixed(2)}`;
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
          ⛏️ MINING OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {miningEquipment.filter(e => e.status === 'OPERATIONAL').length}/{miningEquipment.length} Online
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {productionMetrics.overallProduction.daily.percentage.toFixed(1)}% Target
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Centralized Mining Operations Center
          </div>
        </div>
      </div>

      {/* Mining Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">DAILY PRODUCTION</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(productionMetrics.overallProduction.daily.actual)} t
              </div>
              <div className="text-xs text-orange-300">
                Target: {formatNumber(productionMetrics.overallProduction.daily.target)} t
              </div>
            </div>
            <div className="text-3xl opacity-60">⛏️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">EQUIPMENT EFFICIENCY</div>
              <div className="text-2xl font-bold text-green-100">
                {productionMetrics.efficiency.equipment.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                Overall: {productionMetrics.efficiency.overall.toFixed(1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">🚛</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">SAFETY RECORD</div>
              <div className="text-2xl font-bold text-blue-100">
                {Math.min(...miningSites.map(s => s.safety.daysWithoutIncident))}
              </div>
              <div className="text-xs text-blue-300">
                Days Without Incident
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">COST PER TONNE</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatCurrency(productionMetrics.costs.perTonne)}
              </div>
              <div className="text-xs text-purple-300">
                YTD Average
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* Mining Equipment and Mining Sites */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mining Equipment */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚛 HEAVY MINING EQUIPMENT & MACHINERY STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {miningEquipment.map((equipment) => (
              <div key={equipment.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(equipment.status)}`}>
                      {equipment.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {equipment.type.replace(/_/g, ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(equipment.mode)}`}>
                      {equipment.mode}
                    </span>
                    {equipment.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {equipment.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(equipment.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{equipment.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{equipment.location} | {equipment.operator}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {equipment.shift} | Coordinates: ({equipment.coordinates.x.toFixed(1)}, {equipment.coordinates.y.toFixed(1)}, {equipment.coordinates.elevation}m)
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className={getEfficiencyColor(equipment.performance.efficiency)}>
                      {equipment.performance.efficiency.toFixed(1)}%
                    </div>
                    <div className="text-gray-500">Util: {equipment.performance.utilization.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Productivity</div>
                    <div className="text-green-400">{formatNumber(equipment.performance.productivity)} t/h</div>
                    {equipment.performance.cycleTime && (
                      <div className="text-gray-500">Cycle: {equipment.performance.cycleTime.toFixed(1)}s</div>
                    )}
                  </div>
                  <div>
                    <div className="text-gray-400">Fuel/Power</div>
                    {equipment.performance.fuelConsumption ? (
                      <div className="text-orange-400">{equipment.performance.fuelConsumption.toFixed(1)} L/h</div>
                    ) : (
                      <div className="text-orange-400">{equipment.performance.powerConsumption} kW</div>
                    )}
                  </div>
                </div>

                {/* Specifications */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Specifications: </span>
                  {equipment.specifications.bucketCapacity && (
                    <span className="text-blue-400">Bucket: {equipment.specifications.bucketCapacity}m³ </span>
                  )}
                  {equipment.specifications.payloadCapacity && (
                    <span className="text-blue-400">Payload: {formatNumber(equipment.specifications.payloadCapacity)}kg </span>
                  )}
                  <span className="text-green-400">Weight: {formatNumber(equipment.specifications.operatingWeight)}kg </span>
                  <span className="text-purple-400">Power: {equipment.specifications.enginePower}kW</span>
                </div>

                {/* Maintenance */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Maintenance: </span>
                  <span className={getStatusColor(equipment.maintenance.maintenanceStatus)}>
                    {equipment.maintenance.maintenanceStatus}
                  </span>
                  <span className="text-gray-400"> | Hours: </span>
                  <span className="text-yellow-400">{equipment.maintenance.serviceHours.toFixed(1)}</span>
                  <span className="text-gray-400"> | Next Service: </span>
                  <span className="text-cyan-400">{equipment.maintenance.hoursRemaining.toFixed(1)}h</span>
                </div>

                {/* Systems Status */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Systems Status:</div>
                  {Object.entries(equipment.systems).map(([system, data]) => (
                    <div key={system} className="grid grid-cols-3 gap-1">
                      <span className="text-indigo-400 capitalize">{system}:</span>
                      <span className={getStatusColor(data.status)}>{data.status}</span>
                      {data.pressure && (
                        <span className="text-cyan-400">{data.pressure} bar</span>
                      )}
                      {data.temperature && (
                        <span className="text-orange-400">{data.temperature}°C</span>
                      )}
                    </div>
                  ))}
                </div>

                {equipment.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {equipment.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🚛 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mining Sites */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏔️ MINING SITES & OPERATIONS OVERVIEW
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {miningSites.map((site) => (
              <div key={site.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(site.status)}`}>
                      {site.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {site.type.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {site.commodity}
                    </span>
                    {site.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {site.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(site.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{site.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{site.location} | Manager: {site.manager}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {site.shift} | Crew: {site.shiftCrew} personnel
                </div>

                {/* Production */}
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Daily Production</div>
                    <div className={getProductionColor(site.production.daily.percentage)}>
                      {formatNumber(site.production.daily.actual)} t
                    </div>
                    <div className="text-gray-500">{site.production.daily.percentage.toFixed(1)}% of target</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Monthly</div>
                    <div className={getProductionColor(site.production.monthly.percentage)}>
                      {formatNumber(site.production.monthly.actual)} t
                    </div>
                    <div className="text-gray-500">{site.production.monthly.percentage.toFixed(1)}% of target</div>
                  </div>
                  <div>
                    <div className="text-gray-400">YTD</div>
                    <div className={getProductionColor(site.production.ytd.percentage)}>
                      {formatNumber(site.production.ytd.actual)} t
                    </div>
                    <div className="text-gray-500">{site.production.ytd.percentage.toFixed(1)}% of target</div>
                  </div>
                </div>

                {/* Equipment */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Equipment: </span>
                  <span className="text-green-400">{site.equipment.operational} operational</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">{site.equipment.maintenance} maintenance</span>
                  <span className="text-gray-400"> | Util: </span>
                  <span className="text-blue-400">{site.equipment.utilization.toFixed(1)}%</span>
                </div>

                {/* Safety */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Safety: </span>
                  <span className="text-green-400">{site.safety.daysWithoutIncident} days</span>
                  <span className="text-gray-400"> | Score: </span>
                  <span className="text-blue-400">{site.safety.safetyScore.toFixed(1)}</span>
                  <span className="text-gray-400"> | Incidents YTD: </span>
                  <span className="text-orange-400">{site.safety.incidentsThisYear}</span>
                </div>

                {/* Geology/Mining Info */}
                {site.geology.oreGrade && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Geology: </span>
                    {site.commodity === 'GOLD' ? (
                      <span className="text-yellow-400">Grade: {site.geology.oreGrade} g/t</span>
                    ) : (
                      <span className="text-yellow-400">Grade: {site.geology.oreGrade}% {site.commodity}</span>
                    )}
                    {site.geology.stripRatio && (
                      <>
                        <span className="text-gray-400"> | Strip Ratio: </span>
                        <span className="text-cyan-400">{site.geology.stripRatio}:1</span>
                      </>
                    )}
                    {site.geology.pitDepth && (
                      <>
                        <span className="text-gray-400"> | Depth: </span>
                        <span className="text-purple-400">{site.geology.pitDepth}m</span>
                      </>
                    )}
                  </div>
                )}

                {/* Environmental/Weather */}
                {site.weather ? (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Weather: </span>
                    <span className="text-blue-400">{site.weather.temperature}°C</span>
                    <span className="text-gray-400"> | Wind: </span>
                    <span className="text-green-400">{site.weather.windSpeed} km/h {site.weather.windDirection}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-cyan-400">{site.weather.conditions}</span>
                  </div>
                ) : (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Underground: </span>
                    <span className="text-blue-400">{site.environmental.temperature}°C</span>
                    <span className="text-gray-400"> | Humidity: </span>
                    <span className="text-green-400">{site.environmental.humidity}%</span>
                    <span className="text-gray-400"> | Ventilation: </span>
                    <span className="text-cyan-400">{site.environmental.ventilationRate} m³/s</span>
                  </div>
                )}

                {site.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {site.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🏔️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personnel Safety and Environmental Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personnel Safety */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👷 PERSONNEL SAFETY & HEALTH MONITORING
          </h3>
          <div className="space-y-3">
            {personnelSafety.map((person) => (
              <div key={person.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(person.status)}`}>
                      {person.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {person.position}
                    </span>
                    {person.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {person.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(person.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{person.name} ({person.employeeId})</div>
                <div className="text-xs text-cyan-400 mb-2">{person.shift} | {person.location}</div>
                <div className="text-xs text-purple-400 mb-3">
                  Equipment: {person.equipment} | Check-in: {person.checkIn} | Last Activity: {formatTime(person.lastActivity)}
                </div>

                {/* PPE Status */}
                <div className="text-xs mb-3 bg-gray-600 rounded p-2">
                  <div className="text-gray-400">PPE Status:</div>
                  <div className="grid grid-cols-5 gap-1">
                    {Object.entries(person.safety.ppe).map(([item, status]) => (
                      <div key={item} className="text-center">
                        <div className={getStatusColor(status).split(' ')[0]}>{item}</div>
                        <div className="text-xs">{status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vital Signs */}
                <div className="grid grid-cols-4 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Heart Rate</div>
                    <div className="text-red-400">{person.safety.vitals.heartRate} bpm</div>
                    <div className="text-gray-500">Body: {person.safety.vitals.bodyTemp}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Hydration</div>
                    <div className={getStatusColor(person.safety.vitals.hydration)}>
                      {person.safety.vitals.hydration.replace(/_/g, ' ')}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Fatigue</div>
                    <div className={getStatusColor(person.safety.vitals.fatigue)}>
                      {person.safety.vitals.fatigue}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Alertness</div>
                    <div className={getStatusColor(person.safety.vitals.alertness)}>
                      {person.safety.vitals.alertness}
                    </div>
                  </div>
                </div>

                {/* Gas Detection */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Gas Detection:</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <span className="text-orange-400">CO:</span> <span className="text-white">{person.safety.gasDetection.co} ppm</span>
                    </div>
                    <div>
                      <span className="text-red-400">H₂S:</span> <span className="text-white">{person.safety.gasDetection.h2s} ppm</span>
                    </div>
                    <div>
                      <span className="text-blue-400">O₂:</span> <span className="text-white">{person.safety.gasDetection.o2}%</span>
                    </div>
                    <div>
                      <span className="text-purple-400">LEL:</span> <span className="text-white">{person.safety.gasDetection.lel}%</span>
                    </div>
                  </div>
                  <div className={`text-xs mt-1 ${getStatusColor(person.safety.gasDetection.status).split(' ')[0]}`}>
                    Status: {person.safety.gasDetection.status}
                  </div>
                </div>

                {/* Underground specific */}
                {person.underground && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Underground: </span>
                    <span className="text-purple-400">Depth: {person.underground.depth}m</span>
                    <span className="text-gray-400"> | Ventilation: </span>
                    <span className={getStatusColor(person.underground.ventilation)}>{person.underground.ventilation}</span>
                    <span className="text-gray-400"> | Escape: </span>
                    <span className="text-cyan-400">{person.underground.escape}</span>
                  </div>
                )}

                {/* Emergency Contact */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Emergency: </span>
                  <span className="text-blue-400">{person.emergency.contactName}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">{person.emergency.contactPhone}</span>
                </div>

                {person.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {person.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">👷 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌍 ENVIRONMENTAL MONITORING & COMPLIANCE
          </h3>
          <div className="space-y-3">
            {environmentalMonitoring.map((env) => (
              <div key={env.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(env.status)}`}>
                      {env.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {env.type.replace(/_/g, ' ')}
                    </span>
                    {env.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-green-500 text-white">
                        Normal
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(env.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{env.station}</div>
                <div className="text-xs text-cyan-400 mb-3">{env.location}</div>

                {/* Measurements */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Measurements:</div>
                  {env.type === 'AIR_QUALITY' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-orange-400">PM10:</span> <span className="text-white">{env.measurements.pm10.value.toFixed(3)} {env.measurements.pm10.unit}</span>
                        <div className={getStatusColor(env.measurements.pm10.status)}>{env.measurements.pm10.status}</div>
                      </div>
                      <div>
                        <span className="text-red-400">PM2.5:</span> <span className="text-white">{env.measurements.pm25.value.toFixed(3)} {env.measurements.pm25.unit}</span>
                        <div className={getStatusColor(env.measurements.pm25.status)}>{env.measurements.pm25.status}</div>
                      </div>
                      <div>
                        <span className="text-blue-400">Visibility:</span> <span className="text-white">{env.measurements.visibility.value.toFixed(1)} {env.measurements.visibility.unit}</span>
                        <div className={getStatusColor(env.measurements.visibility.status)}>{env.measurements.visibility.status}</div>
                      </div>
                      <div>
                        <span className="text-purple-400">Wind:</span> <span className="text-white">{env.meteorology.windSpeed.toFixed(1)} km/h @ {env.meteorology.windDirection}°</span>
                      </div>
                    </div>
                  )}
                  
                  {env.type === 'WATER_QUALITY' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-blue-400">pH:</span> <span className="text-white">{env.measurements.ph.value.toFixed(1)}</span>
                        <div className={getStatusColor(env.measurements.ph.status)}>{env.measurements.ph.status}</div>
                      </div>
                      <div>
                        <span className="text-orange-400">Turbidity:</span> <span className="text-white">{env.measurements.turbidity.value.toFixed(1)} {env.measurements.turbidity.unit}</span>
                        <div className={getStatusColor(env.measurements.turbidity.status)}>{env.measurements.turbidity.status}</div>
                      </div>
                      <div>
                        <span className="text-green-400">Copper:</span> <span className="text-white">{env.measurements.metals.copper.value.toFixed(2)} {env.measurements.metals.copper.unit}</span>
                        <div className={getStatusColor(env.measurements.metals.copper.status)}>{env.measurements.metals.copper.status}</div>
                      </div>
                      <div>
                        <span className="text-cyan-400">Flow:</span> <span className="text-white">{env.measurements.flow.value.toFixed(1)} {env.measurements.flow.unit}</span>
                        <div className={getStatusColor(env.measurements.flow.status)}>{env.measurements.flow.status}</div>
                      </div>
                    </div>
                  )}
                  
                  {env.type === 'NOISE' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-yellow-400">LAeq:</span> <span className="text-white">{env.measurements.laeq.value.toFixed(1)} {env.measurements.laeq.unit}</span>
                        <div className={getStatusColor(env.measurements.laeq.status)}>{env.measurements.laeq.status}</div>
                      </div>
                      <div>
                        <span className="text-orange-400">LA10:</span> <span className="text-white">{env.measurements.la10.value.toFixed(1)} {env.measurements.la10.unit}</span>
                        <div className={getStatusColor(env.measurements.la10.status)}>{env.measurements.la10.status}</div>
                      </div>
                      <div>
                        <span className="text-red-400">Peak:</span> <span className="text-white">{env.measurements.peak.value.toFixed(1)} {env.measurements.peak.unit} @ {env.measurements.peak.time}</span>
                      </div>
                      <div>
                        <span className="text-green-400">Compliance:</span> <span className={getStatusColor(env.compliance.dayTime)}>{env.compliance.dayTime}</span>
                      </div>
                    </div>
                  )}
                  
                  {env.type === 'GROUND_STABILITY' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-purple-400">H. Disp:</span> <span className="text-white">{env.measurements.displacement.horizontal.value.toFixed(1)} {env.measurements.displacement.horizontal.unit}</span>
                        <div className={getStatusColor(env.measurements.displacement.horizontal.status)}>{env.measurements.displacement.horizontal.status}</div>
                      </div>
                      <div>
                        <span className="text-blue-400">V. Disp:</span> <span className="text-white">{env.measurements.displacement.vertical.value.toFixed(1)} {env.measurements.displacement.vertical.unit}</span>
                        <div className={getStatusColor(env.measurements.displacement.vertical.status)}>{env.measurements.displacement.vertical.status}</div>
                      </div>
                      <div>
                        <span className="text-green-400">Slope Angle:</span> <span className="text-white">{env.measurements.slope.angle.toFixed(1)}° (design: {env.measurements.slope.design.toFixed(1)}°)</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">Factor of Safety:</span> <span className="text-white">{env.measurements.slope.factorOfSafety.toFixed(1)}</span>
                        <div className={getStatusColor(env.measurements.slope.stability)}>{env.measurements.slope.stability}</div>
                      </div>
                    </div>
                  )}
                </div>

                {env.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Status:</div>
                    {env.alerts.map((alert, index) => (
                      <div key={index} className="text-green-400">🌍 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 MINING PRODUCTION TRENDS (30 DAYS)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={productionTrends}>
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
              dataKey="production"
              stroke="#F97316"
              fill="#F97316"
              fillOpacity={0.1}
              strokeWidth={3}
              name="Production (tonnes)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="efficiency" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Efficiency (%)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="safety" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Safety Score (%)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="cost" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Cost ($/tonne)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Mining Operations KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 MINING OPERATIONS KPIs & PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Overall Equipment Effectiveness</div>
            <div className="text-white font-bold text-lg">
              {productionMetrics.efficiency.equipment.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">above industry avg</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Recovery Rate</div>
            <div className="text-white font-bold text-lg">
              {productionMetrics.quality.recovery.toFixed(1)}%
            </div>
            <div className="text-blue-400 text-xs">ore recovery</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Energy Intensity</div>
            <div className="text-white font-bold text-lg">
              {productionMetrics.sustainability.energyIntensity.toFixed(1)}
            </div>
            <div className="text-purple-400 text-xs">kWh per tonne</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Water Recycling</div>
            <div className="text-white font-bold text-lg">
              {productionMetrics.sustainability.waterRecycling.toFixed(1)}%
            </div>
            <div className="text-cyan-400 text-xs">sustainability target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Grade Control</div>
            <div className="text-white font-bold text-lg">
              {productionMetrics.quality.gradeControl.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">within specification</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Personnel on Site</div>
            <div className="text-white font-bold text-lg">
              {miningSites.reduce((sum, site) => sum + site.shiftCrew, 0)}
            </div>
            <div className="text-yellow-400 text-xs">all shifts combined</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningOperations;