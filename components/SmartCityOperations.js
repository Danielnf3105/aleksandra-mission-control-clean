// SmartCityOperations.js - Smart City Operations Control Center & Urban Infrastructure Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const SmartCityOperations = () => {
  const [trafficIntersections, setTrafficIntersections] = useState([
    {
      id: 'int_001',
      name: 'Main St & Oak Ave',
      location: 'Downtown District',
      status: 'OPERATIONAL',
      trafficFlow: 2847, // vehicles per hour
      congestionLevel: 'MODERATE',
      signalTiming: 'ADAPTIVE',
      averageWaitTime: 45, // seconds
      throughput: 94.2, // percentage of capacity
      incidents: 0,
      emergencyOverride: false,
      pedestrianCrossings: 4,
      pedestriansDetected: 23,
      airQuality: 'GOOD',
      noiseLevel: 65, // dB
      lastUpdate: Date.now() - 30 * 1000,
      lanes: {
        northbound: { vehicles: 12, speed: 35, capacity: 85.2 },
        southbound: { vehicles: 8, speed: 42, capacity: 67.8 },
        eastbound: { vehicles: 15, speed: 28, capacity: 93.1 },
        westbound: { vehicles: 6, speed: 38, capacity: 56.4 }
      },
      smartFeatures: ['Adaptive Signals', 'Pedestrian Detection', 'Emergency Preemption']
    },
    {
      id: 'int_002', 
      name: 'Highway 101 & Central Blvd',
      location: 'Commercial District',
      status: 'CONGESTED',
      trafficFlow: 4523,
      congestionLevel: 'HIGH',
      signalTiming: 'OPTIMIZED',
      averageWaitTime: 78,
      throughput: 112.5,
      incidents: 1,
      emergencyOverride: false,
      pedestrianCrossings: 2,
      pedestriansDetected: 6,
      airQuality: 'MODERATE',
      noiseLevel: 78,
      lastUpdate: Date.now() - 15 * 1000,
      lanes: {
        northbound: { vehicles: 24, speed: 18, capacity: 125.7 },
        southbound: { vehicles: 31, speed: 22, capacity: 134.2 },
        eastbound: { vehicles: 19, speed: 25, capacity: 98.6 },
        westbound: { vehicles: 28, speed: 15, capacity: 118.9 }
      },
      smartFeatures: ['Dynamic Timing', 'Queue Detection', 'Pollution Monitoring']
    },
    {
      id: 'int_003',
      name: 'University Dr & Research Pkwy',
      location: 'University District',
      status: 'MAINTENANCE',
      trafficFlow: 0,
      congestionLevel: 'UNKNOWN',
      signalTiming: 'MANUAL',
      averageWaitTime: 120,
      throughput: 0,
      incidents: 0,
      emergencyOverride: true,
      pedestrianCrossings: 6,
      pedestriansDetected: 45,
      airQuality: 'GOOD',
      noiseLevel: 55,
      lastUpdate: Date.now() - 2 * 60 * 60 * 1000,
      lanes: {
        northbound: { vehicles: 0, speed: 0, capacity: 0 },
        southbound: { vehicles: 0, speed: 0, capacity: 0 },
        eastbound: { vehicles: 0, speed: 0, capacity: 0 },
        westbound: { vehicles: 0, speed: 0, capacity: 0 }
      },
      smartFeatures: ['Manual Override', 'Emergency Coordination', 'Maintenance Mode']
    },
    {
      id: 'int_004',
      name: 'Industrial Way & Port Access',
      location: 'Industrial Zone',
      status: 'OPTIMAL',
      trafficFlow: 1623,
      congestionLevel: 'LOW',
      signalTiming: 'STANDARD',
      averageWaitTime: 25,
      throughput: 67.8,
      incidents: 0,
      emergencyOverride: false,
      pedestrianCrossings: 1,
      pedestriansDetected: 2,
      airQuality: 'POOR',
      noiseLevel: 85,
      lastUpdate: Date.now() - 45 * 1000,
      lanes: {
        northbound: { vehicles: 8, speed: 45, capacity: 62.3 },
        southbound: { vehicles: 5, speed: 50, capacity: 45.7 },
        eastbound: { vehicles: 12, speed: 40, capacity: 78.9 },
        westbound: { vehicles: 7, speed: 48, capacity: 58.2 }
      },
      smartFeatures: ['Heavy Vehicle Detection', 'Port Coordination', 'Freight Priority']
    }
  ]);

  const [publicTransport, setPublicTransport] = useState([
    {
      id: 'bus_001',
      route: 'Line 42 - Downtown Express',
      vehicleNumber: 'BUS-4207',
      type: 'Electric Bus',
      status: 'ON_SCHEDULE',
      currentLocation: 'Main St Station',
      nextStop: 'City Hall',
      passengers: 34,
      capacity: 50,
      occupancy: 68.0,
      delay: 0,
      speed: 25, // km/h
      batteryLevel: 87.5, // percentage
      airConditioning: 'ON',
      temperature: 21.5,
      accessibility: true,
      wifiEnabled: true,
      lastUpdate: Date.now() - 20 * 1000,
      schedule: {
        departureTime: '14:35',
        arrivalTime: '14:42',
        nextDeparture: '15:05'
      },
      route_stops: ['Downtown Terminal', 'Main St Station', 'City Hall', 'University Campus', 'Shopping Center']
    },
    {
      id: 'bus_002',
      route: 'Line 18 - North Circular',
      vehicleNumber: 'BUS-1834',
      type: 'Hybrid Bus',
      status: 'DELAYED',
      currentLocation: 'Residential District',
      nextStop: 'Community Center',
      passengers: 28,
      capacity: 45,
      occupancy: 62.2,
      delay: 8, // minutes
      speed: 15,
      batteryLevel: null,
      fuelLevel: 67.3,
      airConditioning: 'ON',
      temperature: 22.1,
      accessibility: true,
      wifiEnabled: true,
      lastUpdate: Date.now() - 35 * 1000,
      schedule: {
        departureTime: '14:20',
        arrivalTime: '14:38',
        nextDeparture: '15:00'
      },
      route_stops: ['North Terminal', 'Residential District', 'Community Center', 'Park Avenue', 'Medical Center']
    },
    {
      id: 'metro_001',
      route: 'Metro Red Line',
      vehicleNumber: 'MET-R-05',
      type: 'Metro Train',
      status: 'ON_SCHEDULE',
      currentLocation: 'Between Central & Union',
      nextStop: 'Union Station',
      passengers: 245,
      capacity: 300,
      occupancy: 81.7,
      delay: 0,
      speed: 65,
      batteryLevel: null,
      powerSource: 'Electric Grid',
      airConditioning: 'ON',
      temperature: 20.8,
      accessibility: true,
      wifiEnabled: true,
      lastUpdate: Date.now() - 10 * 1000,
      schedule: {
        departureTime: '14:33',
        arrivalTime: '14:37',
        nextDeparture: '14:43'
      },
      route_stops: ['Red Terminal', 'Central Station', 'Union Station', 'Business District', 'Airport']
    },
    {
      id: 'tram_001',
      route: 'Tram Line 7 - Waterfront',
      vehicleNumber: 'TRM-W-12',
      type: 'Modern Tram',
      status: 'BREAKDOWN',
      currentLocation: 'Waterfront Station',
      nextStop: 'Repair Depot',
      passengers: 0,
      capacity: 80,
      occupancy: 0,
      delay: 45,
      speed: 0,
      batteryLevel: null,
      powerSource: 'Overhead Lines',
      airConditioning: 'OFF',
      temperature: 18.2,
      accessibility: true,
      wifiEnabled: false,
      lastUpdate: Date.now() - 45 * 60 * 1000,
      schedule: {
        departureTime: '14:15',
        arrivalTime: 'DELAYED',
        nextDeparture: 'SUSPENDED'
      },
      route_stops: ['Waterfront Station', 'Marina', 'Pier District', 'Convention Center', 'Hotel Zone']
    }
  ]);

  const [emergencyServices, setEmergencyServices] = useState([
    {
      id: 'ems_001',
      unit: 'Fire-Engine-07',
      type: 'Fire Department',
      status: 'EN_ROUTE',
      location: 'Oak Avenue (Responding)',
      incident: 'Structure Fire',
      priority: 'HIGH',
      responseTime: 4.2, // minutes elapsed
      eta: 2.3, // minutes remaining
      crew: 4,
      equipment: ['Ladder Truck', 'Water Tank 3000L', 'Rescue Equipment'],
      dispatchTime: Date.now() - 4.2 * 60 * 1000,
      lastUpdate: Date.now() - 15 * 1000,
      coordinates: { lat: 40.7589, lng: -73.9851 },
      trafficOverride: true,
      signalsPreempted: 3
    },
    {
      id: 'ems_002',
      unit: 'Ambulance-A12',
      type: 'Emergency Medical',
      status: 'ON_SCENE',
      location: 'University Hospital',
      incident: 'Medical Emergency',
      priority: 'CRITICAL',
      responseTime: 6.8,
      eta: 0,
      crew: 3,
      equipment: ['Advanced Life Support', 'Cardiac Monitor', 'Emergency Medications'],
      dispatchTime: Date.now() - 15 * 60 * 1000,
      lastUpdate: Date.now() - 8 * 1000,
      coordinates: { lat: 40.7505, lng: -73.9934 },
      trafficOverride: false,
      signalsPreempted: 0,
      patient: { age: 67, condition: 'Cardiac Event', vitals: 'Stable' }
    },
    {
      id: 'ems_003',
      unit: 'Police-Unit-23',
      type: 'Police Department',
      status: 'AVAILABLE',
      location: 'Downtown Patrol',
      incident: null,
      priority: null,
      responseTime: null,
      eta: null,
      crew: 2,
      equipment: ['Standard Patrol Equipment', 'Traffic Enforcement Tools'],
      dispatchTime: null,
      lastUpdate: Date.now() - 5 * 60 * 1000,
      coordinates: { lat: 40.7614, lng: -73.9776 },
      trafficOverride: false,
      signalsPreempted: 0,
      sector: 'Downtown Business District'
    },
    {
      id: 'ems_004',
      unit: 'Rescue-R04',
      type: 'Technical Rescue',
      status: 'RESPONDING',
      location: 'Construction Site Incident',
      incident: 'Industrial Accident',
      priority: 'HIGH',
      responseTime: 8.5,
      eta: 5.2,
      crew: 6,
      equipment: ['Heavy Rescue', 'Crane Equipment', 'Technical Rescue Gear'],
      dispatchTime: Date.now() - 8.5 * 60 * 1000,
      lastUpdate: Date.now() - 30 * 1000,
      coordinates: { lat: 40.7282, lng: -73.9942 },
      trafficOverride: true,
      signalsPreempted: 5,
      specialEquipment: 'Heavy Machinery Required'
    }
  ]);

  const [environmentalSensors, setEnvironmentalSensors] = useState([
    {
      id: 'env_001',
      location: 'Downtown Air Quality Station',
      type: 'Air Quality Monitor',
      status: 'OPERATIONAL',
      measurements: {
        pm25: 12.4, // μg/m³
        pm10: 18.7,
        no2: 25.3, // ppb
        o3: 45.8,
        co: 0.8, // ppm
        so2: 3.2 // ppb
      },
      airQualityIndex: 52,
      airQualityLevel: 'MODERATE',
      temperature: 22.5,
      humidity: 58.3,
      windSpeed: 12.5, // km/h
      windDirection: 'NW',
      lastUpdate: Date.now() - 5 * 60 * 1000,
      alerts: []
    },
    {
      id: 'env_002',
      location: 'Industrial Zone Monitor',
      type: 'Pollution Sensor',
      status: 'OPERATIONAL',
      measurements: {
        pm25: 35.8,
        pm10: 52.3,
        no2: 78.4,
        o3: 89.2,
        co: 2.1,
        so2: 12.7
      },
      airQualityIndex: 112,
      airQualityLevel: 'UNHEALTHY_SENSITIVE',
      temperature: 24.8,
      humidity: 45.2,
      windSpeed: 8.3,
      windDirection: 'SW',
      lastUpdate: Date.now() - 3 * 60 * 1000,
      alerts: ['High PM2.5 levels detected']
    },
    {
      id: 'env_003',
      location: 'Park District Weather',
      type: 'Weather Station',
      status: 'OPERATIONAL',
      measurements: {
        pm25: 8.2,
        pm10: 11.6,
        no2: 15.7,
        o3: 32.4,
        co: 0.4,
        so2: 1.8
      },
      airQualityIndex: 38,
      airQualityLevel: 'GOOD',
      temperature: 21.2,
      humidity: 62.8,
      windSpeed: 15.7,
      windDirection: 'N',
      lastUpdate: Date.now() - 2 * 60 * 1000,
      alerts: [],
      rainfall: 0.0, // mm/h
      pressure: 1013.2 // hPa
    },
    {
      id: 'env_004',
      location: 'Waterfront Noise Monitor',
      type: 'Noise Sensor',
      status: 'WARNING',
      noiseLevel: 78.5, // dB
      noiseCategory: 'MODERATE',
      peakLevel: 85.2,
      averageLevel: 68.7,
      measurements: {
        pm25: 15.3,
        pm10: 22.1,
        no2: 28.9,
        o3: 41.6,
        co: 1.2,
        so2: 5.4
      },
      airQualityIndex: 67,
      airQualityLevel: 'MODERATE',
      temperature: 20.8,
      humidity: 71.2,
      windSpeed: 18.2,
      windDirection: 'SE',
      lastUpdate: Date.now() - 8 * 60 * 1000,
      alerts: ['Noise levels approaching residential limits']
    }
  ]);

  const [infrastructure, setInfrastructure] = useState([
    {
      id: 'inf_001',
      name: 'Downtown Power Grid',
      type: 'Electrical Distribution',
      status: 'OPERATIONAL',
      capacity: 150, // MW
      currentLoad: 127.5,
      utilization: 85.0,
      voltage: 11.8, // kV
      frequency: 50.02, // Hz
      powerFactor: 0.95,
      faults: 0,
      maintenance: 'SCHEDULED_NEXT_WEEK',
      lastUpdate: Date.now() - 1 * 60 * 1000,
      substations: 3,
      feeders: 12,
      smartMeters: 15678,
      renewablePercentage: 35.2
    },
    {
      id: 'inf_002',
      name: 'Central Water Treatment',
      type: 'Water Management',
      status: 'OPERATIONAL',
      capacity: 250000, // m³/day
      currentFlow: 187500,
      utilization: 75.0,
      pressure: 4.2, // bar
      quality: 'EXCELLENT',
      turbidity: 0.15, // NTU
      chlorineLevel: 0.8, // mg/L
      phLevel: 7.2,
      faults: 0,
      maintenance: 'COMPLETED',
      lastUpdate: Date.now() - 3 * 60 * 1000,
      reservoirs: 5,
      pumpStations: 8,
      distributionNetwork: '98% coverage',
      leakageRate: 8.5 // percentage
    },
    {
      id: 'inf_003',
      name: 'Fiber Network Backbone',
      type: 'Telecommunications',
      status: 'OPERATIONAL',
      capacity: 100, // Gbps
      currentUtilization: 67.8,
      latency: 2.3, // ms
      packetLoss: 0.01, // percentage
      uptime: 99.97,
      bandwidth: 85.2, // Gbps active
      faults: 0,
      maintenance: 'NONE',
      lastUpdate: Date.now() - 30 * 1000,
      nodes: 47,
      fiberKilometers: 1850,
      connectedBuildings: 2340,
      redundancy: 'N+1'
    },
    {
      id: 'inf_004',
      name: 'Waste Management System',
      type: 'Sanitation',
      status: 'PEAK_LOAD',
      capacity: 1200, // tons/day
      currentLoad: 1087,
      utilization: 90.6,
      collections: 2847, // today
      recyclingRate: 67.8, // percentage
      organicWaste: 32.1,
      plasticWaste: 18.5,
      paperWaste: 25.7,
      faults: 1,
      maintenance: 'MINOR_REPAIRS',
      lastUpdate: Date.now() - 15 * 60 * 1000,
      trucks: 45,
      routes: 23,
      processedToday: 856, // tons
      landfillDiversion: 73.2 // percentage
    }
  ]);

  const [cityAlerts, setCityAlerts] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 25 * 60 * 1000,
      severity: 'HIGH',
      type: 'TRAFFIC_INCIDENT',
      location: 'Highway 101 & Central Blvd',
      description: 'Multi-vehicle accident blocking eastbound lanes',
      impact: 'Severe traffic delays, emergency response required',
      estimatedDuration: '45 minutes',
      status: 'ACTIVE',
      assignedUnits: ['Police-Unit-23', 'Tow-Truck-15'],
      affectedServices: ['Bus Line 42', 'Emergency Route A'],
      mitigationActions: ['Alternate route activation', 'Signal timing adjustment']
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'CRITICAL',
      type: 'INFRASTRUCTURE_FAILURE',
      location: 'Waterfront Tram Line',
      description: 'Tram breakdown at Waterfront Station, service suspended',
      impact: 'Complete service disruption on Line 7, passenger stranding',
      estimatedDuration: '2 hours',
      status: 'IN_PROGRESS',
      assignedUnits: ['Maintenance-Team-3', 'Replacement-Bus-Service'],
      affectedServices: ['Tram Line 7', 'Connecting Bus Routes'],
      mitigationActions: ['Emergency bus deployment', 'Passenger information updates']
    },
    {
      id: 'alert_003',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'MEDIUM',
      type: 'ENVIRONMENTAL_ALERT',
      location: 'Industrial Zone',
      description: 'Air quality index elevated to unhealthy levels for sensitive groups',
      impact: 'Health advisory for vulnerable populations',
      estimatedDuration: '4 hours',
      status: 'MONITORING',
      assignedUnits: ['Environmental-Response-Team'],
      affectedServices: ['Outdoor activities', 'School sports'],
      mitigationActions: ['Public health advisory', 'Source investigation']
    },
    {
      id: 'alert_004',
      timestamp: Date.now() - 1 * 60 * 60 * 1000,
      severity: 'LOW',
      type: 'MAINTENANCE_NOTICE',
      location: 'University Dr & Research Pkwy',
      description: 'Scheduled traffic signal maintenance causing delays',
      impact: 'Increased wait times, manual traffic control',
      estimatedDuration: '30 minutes',
      status: 'SCHEDULED',
      assignedUnits: ['Signal-Maintenance-Team-2'],
      affectedServices: ['University shuttle service'],
      mitigationActions: ['Manual signal operation', 'Traffic officer deployment']
    }
  ]);

  const [performanceTrends, setPerformanceTrends] = useState([]);
  const [mobilityTrends, setMobilityTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        trafficFlow: Math.floor(Math.random() * 1000) + 2000, // 2000-3000 vehicles/h
        airQuality: Math.floor(Math.random() * 30) + 40, // AQI 40-70
        emergencyResponse: Math.floor(Math.random() * 3) + 6, // 6-9 minutes
        publicTransitOnTime: Math.floor(Math.random() * 10) + 90, // 90-100%
        energyConsumption: Math.floor(Math.random() * 20) + 120, // 120-140 MW
        waterUsage: Math.floor(Math.random() * 50000) + 150000, // 150-200k m³
        noiseLevel: Math.floor(Math.random() * 15) + 60 // 60-75 dB
      });
    }
    return data;
  };

  const generateMobilityTrends = () => {
    return [
      { mode: 'Private Vehicle', usage: 45.8, onTime: 78.2, co2: 120.5 },
      { mode: 'Public Bus', usage: 28.3, onTime: 94.1, co2: 45.2 },
      { mode: 'Metro/Train', usage: 15.7, onTime: 97.8, co2: 25.1 },
      { mode: 'Cycling', usage: 6.2, onTime: 99.0, co2: 0 },
      { mode: 'Walking', usage: 3.1, onTime: 100.0, co2: 0 },
      { mode: 'E-Scooter', usage: 0.9, onTime: 95.5, co2: 5.2 }
    ];
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
    setMobilityTrends(generateMobilityTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update traffic intersections
      setTrafficIntersections(prev => prev.map(intersection => {
        if (intersection.status === 'MAINTENANCE') return intersection;
        
        let newTrafficFlow = intersection.trafficFlow;
        let newCongestionLevel = intersection.congestionLevel;
        
        if (intersection.status === 'CONGESTED') {
          newTrafficFlow = Math.max(3000, intersection.trafficFlow + (Math.random() - 0.6) * 200);
        } else {
          newTrafficFlow = Math.max(500, intersection.trafficFlow + (Math.random() - 0.5) * 150);
        }
        
        // Update congestion level based on traffic flow
        if (newTrafficFlow > 4000) newCongestionLevel = 'HIGH';
        else if (newTrafficFlow > 3000) newCongestionLevel = 'MODERATE';
        else newCongestionLevel = 'LOW';
        
        const newThroughput = (newTrafficFlow / 4000) * 100;
        const newWaitTime = Math.max(20, Math.min(120, 30 + (newTrafficFlow / 100)));

        return {
          ...intersection,
          trafficFlow: newTrafficFlow,
          congestionLevel: newCongestionLevel,
          throughput: newThroughput,
          averageWaitTime: newWaitTime,
          pedestriansDetected: Math.max(0, intersection.pedestriansDetected + Math.floor((Math.random() - 0.5) * 5)),
          noiseLevel: Math.max(45, Math.min(90, intersection.noiseLevel + (Math.random() - 0.5) * 5)),
          lastUpdate: Date.now(),
          lanes: Object.fromEntries(
            Object.entries(intersection.lanes).map(([direction, lane]) => [
              direction,
              {
                ...lane,
                vehicles: Math.max(0, Math.min(35, lane.vehicles + Math.floor((Math.random() - 0.5) * 6))),
                speed: Math.max(10, Math.min(60, lane.speed + (Math.random() - 0.5) * 8)),
                capacity: Math.max(20, Math.min(150, lane.capacity + (Math.random() - 0.5) * 10))
              }
            ])
          )
        };
      }));

      // Update public transport
      setPublicTransport(prev => prev.map(vehicle => {
        if (vehicle.status === 'BREAKDOWN') return vehicle;
        
        let newDelay = vehicle.delay;
        let newOccupancy = vehicle.occupancy;
        let newSpeed = vehicle.speed;
        
        if (vehicle.status === 'DELAYED') {
          newDelay = Math.max(0, vehicle.delay + (Math.random() - 0.7) * 2);
          if (newDelay <= 2) vehicle.status = 'ON_SCHEDULE';
        } else {
          newDelay = Math.max(0, vehicle.delay + (Math.random() - 0.8) * 1);
          if (newDelay > 5) vehicle.status = 'DELAYED';
        }
        
        newOccupancy = Math.max(0, Math.min(100, vehicle.occupancy + (Math.random() - 0.5) * 10));
        newSpeed = Math.max(0, Math.min(70, vehicle.speed + (Math.random() - 0.5) * 8));
        
        const newPassengers = Math.floor((newOccupancy / 100) * vehicle.capacity);

        return {
          ...vehicle,
          delay: newDelay,
          occupancy: newOccupancy,
          speed: newSpeed,
          passengers: newPassengers,
          batteryLevel: vehicle.batteryLevel ? Math.max(20, Math.min(100, vehicle.batteryLevel + (Math.random() - 0.5) * 3)) : null,
          fuelLevel: vehicle.fuelLevel ? Math.max(20, Math.min(100, vehicle.fuelLevel + (Math.random() - 0.5) * 2)) : undefined,
          temperature: Math.max(18, Math.min(26, vehicle.temperature + (Math.random() - 0.5) * 1)),
          lastUpdate: Date.now()
        };
      }));

      // Update emergency services
      setEmergencyServices(prev => prev.map(service => {
        if (service.status === 'AVAILABLE') return service;
        
        let newResponseTime = service.responseTime;
        let newEta = service.eta;
        
        if (service.status === 'EN_ROUTE' || service.status === 'RESPONDING') {
          newResponseTime = service.responseTime + 0.1; // add 6 seconds
          newEta = Math.max(0, service.eta - 0.1);
          
          if (newEta <= 0) {
            service.status = 'ON_SCENE';
            newEta = 0;
          }
        }
        
        return {
          ...service,
          responseTime: newResponseTime,
          eta: newEta,
          lastUpdate: Date.now()
        };
      }));

      // Update environmental sensors
      setEnvironmentalSensors(prev => prev.map(sensor => ({
        ...sensor,
        measurements: {
          pm25: Math.max(5, Math.min(100, sensor.measurements.pm25 + (Math.random() - 0.5) * 3)),
          pm10: Math.max(8, Math.min(150, sensor.measurements.pm10 + (Math.random() - 0.5) * 4)),
          no2: Math.max(10, Math.min(100, sensor.measurements.no2 + (Math.random() - 0.5) * 5)),
          o3: Math.max(20, Math.min(150, sensor.measurements.o3 + (Math.random() - 0.5) * 6)),
          co: Math.max(0.1, Math.min(5, sensor.measurements.co + (Math.random() - 0.5) * 0.2)),
          so2: Math.max(1, Math.min(50, sensor.measurements.so2 + (Math.random() - 0.5) * 2))
        },
        temperature: Math.max(15, Math.min(35, sensor.temperature + (Math.random() - 0.5) * 2)),
        humidity: Math.max(30, Math.min(90, sensor.humidity + (Math.random() - 0.5) * 5)),
        windSpeed: Math.max(0, Math.min(40, sensor.windSpeed + (Math.random() - 0.5) * 3)),
        noiseLevel: sensor.noiseLevel ? Math.max(40, Math.min(100, sensor.noiseLevel + (Math.random() - 0.5) * 4)) : undefined,
        lastUpdate: Date.now()
      })));

      // Update infrastructure
      setInfrastructure(prev => prev.map(inf => ({
        ...inf,
        currentLoad: inf.type === 'Electrical Distribution' ? 
          Math.max(100, Math.min(inf.capacity, inf.currentLoad + (Math.random() - 0.5) * 10)) :
          inf.type === 'Water Management' ?
          Math.max(120000, Math.min(inf.capacity, inf.currentLoad + (Math.random() - 0.5) * 15000)) :
          inf.type === 'Telecommunications' ?
          Math.max(50, Math.min(inf.capacity, inf.currentUtilization + (Math.random() - 0.5) * 5)) :
          Math.max(800, Math.min(inf.capacity, inf.currentLoad + (Math.random() - 0.5) * 50)),
        utilization: inf.type === 'Telecommunications' ? 
          Math.max(50, Math.min(95, inf.currentUtilization + (Math.random() - 0.5) * 3)) :
          (inf.currentLoad / inf.capacity) * 100,
        lastUpdate: Date.now()
      })));

      // Occasionally generate new city alerts
      if (Math.random() > 0.99) {
        const alertTypes = ['UTILITY_OUTAGE', 'WEATHER_WARNING', 'ROAD_CLOSURE', 'PUBLIC_EVENT'];
        const severities = ['LOW', 'MEDIUM', 'HIGH'];
        const locations = ['Downtown District', 'University Area', 'Industrial Zone', 'Waterfront'];
        
        const newAlert = {
          id: `alert_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          location: locations[Math.floor(Math.random() * locations.length)],
          description: 'Automated city monitoring alert generated',
          impact: 'Service disruption possible',
          estimatedDuration: '1 hour',
          status: 'NEW',
          assignedUnits: ['Response Team'],
          affectedServices: ['Multiple services'],
          mitigationActions: ['Assessment in progress']
        };
        
        setCityAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'OPTIMAL':
      case 'ON_SCHEDULE': 
      case 'AVAILABLE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'CONGESTED':
      case 'DELAYED':
      case 'WARNING':
      case 'PEAK_LOAD': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'BREAKDOWN':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'EN_ROUTE':
      case 'ON_SCENE':
      case 'RESPONDING': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCongestionColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAirQualityColor = (level) => {
    switch (level) {
      case 'GOOD': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'UNHEALTHY_SENSITIVE': return 'text-orange-400';
      case 'UNHEALTHY': return 'text-red-400';
      case 'POOR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatCapacity = (current, total) => {
    return `${((current / total) * 100).toFixed(1)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏙️ SMART CITY OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {trafficIntersections.filter(t => t.status === 'OPERATIONAL' || t.status === 'OPTIMAL').length}/{trafficIntersections.length} Traffic Normal
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {publicTransport.filter(p => p.status === 'ON_SCHEDULE').length}/{publicTransport.length} On Schedule
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Snap4City Urban Intelligence
          </div>
        </div>
      </div>

      {/* Smart City Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TRAFFIC FLOW</div>
              <div className="text-2xl font-bold text-green-100">
                {Math.floor(trafficIntersections.reduce((sum, t) => sum + t.trafficFlow, 0) / 1000)}K veh/h
              </div>
              <div className="text-xs text-green-300">
                Avg wait: {Math.floor(trafficIntersections.reduce((sum, t) => sum + t.averageWaitTime, 0) / trafficIntersections.length)}s
              </div>
            </div>
            <div className="text-3xl opacity-60">🚦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">PUBLIC TRANSPORT</div>
              <div className="text-2xl font-bold text-blue-100">
                {Math.floor(publicTransport.reduce((sum, p) => sum + p.passengers, 0))}
              </div>
              <div className="text-xs text-blue-300">
                passengers | {Math.floor(publicTransport.reduce((sum, p) => sum + p.occupancy, 0) / publicTransport.length)}% capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">🚌</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AIR QUALITY</div>
              <div className="text-2xl font-bold text-purple-100">
                {Math.floor(environmentalSensors.reduce((sum, e) => sum + e.airQualityIndex, 0) / environmentalSensors.length)}
              </div>
              <div className="text-xs text-purple-300">
                AQI average
              </div>
            </div>
            <div className="text-3xl opacity-60">🌬️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">EMERGENCY RESPONSE</div>
              <div className="text-2xl font-bold text-orange-100">
                {emergencyServices.filter(e => e.responseTime).length}
              </div>
              <div className="text-xs text-orange-300">
                active incidents | {emergencyServices.filter(e => e.status === 'AVAILABLE').length} units available
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>
      </div>

      {/* Traffic Management and Public Transport */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚦 INTELLIGENT TRAFFIC MANAGEMENT
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {trafficIntersections.map((intersection) => (
              <div key={intersection.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(intersection.status)}`}>
                      {intersection.status}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getCongestionColor(intersection.congestionLevel)} bg-gray-600`}>
                      {intersection.congestionLevel}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getAirQualityColor(intersection.airQuality)} bg-gray-600`}>
                      {intersection.airQuality}
                    </span>
                    {intersection.emergencyOverride && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        EMERGENCY
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(intersection.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{intersection.name}</div>
                <div className="text-xs text-purple-400 mb-3">{intersection.location}</div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Traffic Flow</div>
                    <div className="text-blue-400">{intersection.trafficFlow.toLocaleString()} veh/h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Avg Wait</div>
                    <div className="text-yellow-400">{intersection.averageWaitTime}s</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className={intersection.throughput > 100 ? 'text-red-400' : intersection.throughput > 85 ? 'text-yellow-400' : 'text-green-400'}>
                      {intersection.throughput.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Signal Timing</div>
                    <div className="text-green-400">{intersection.signalTiming}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pedestrians</div>
                    <div className="text-indigo-400">{intersection.pedestriansDetected}</div>
                  </div>
                </div>

                {/* Lane Status */}
                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Lane Status:</div>
                  <div className="grid grid-cols-4 gap-1">
                    {Object.entries(intersection.lanes).map(([direction, lane]) => (
                      <div key={direction} className="text-center">
                        <div className="text-gray-300">{direction.substring(0, 2).toUpperCase()}</div>
                        <div className="text-cyan-400">{lane.vehicles}v</div>
                        <div className="text-orange-400">{lane.speed}km/h</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smart Features */}
                <div className="text-xs mt-2">
                  <div className="text-gray-400">Smart Features:</div>
                  <div className="text-pink-400">{intersection.smartFeatures.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public Transport */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚌 PUBLIC TRANSPORT COORDINATION
          </h3>
          <div className="space-y-3">
            {publicTransport.map((vehicle) => (
              <div key={vehicle.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {vehicle.type}
                    </span>
                    {vehicle.delay > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        +{vehicle.delay}m delay
                      </span>
                    )}
                    {vehicle.accessibility && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                        ♿
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(vehicle.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{vehicle.route}</div>
                <div className="text-xs text-cyan-400 mb-2">{vehicle.vehicleNumber}</div>
                <div className="text-xs text-purple-400 mb-3">
                  📍 {vehicle.currentLocation} → {vehicle.nextStop}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Occupancy</div>
                    <div className={vehicle.occupancy > 85 ? 'text-red-400' : vehicle.occupancy > 70 ? 'text-yellow-400' : 'text-green-400'}>
                      {vehicle.passengers}/{vehicle.capacity} ({vehicle.occupancy.toFixed(1)}%)
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Speed</div>
                    <div className="text-blue-400">{vehicle.speed} km/h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-orange-400">{vehicle.temperature}°C</div>
                  </div>
                </div>

                {vehicle.batteryLevel && (
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Battery Level</div>
                      <div className={vehicle.batteryLevel < 30 ? 'text-red-400' : vehicle.batteryLevel < 50 ? 'text-yellow-400' : 'text-green-400'}>
                        {vehicle.batteryLevel.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">A/C Status</div>
                      <div className="text-indigo-400">{vehicle.airConditioning}</div>
                    </div>
                  </div>
                )}

                {vehicle.fuelLevel && (
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Fuel Level</div>
                      <div className={vehicle.fuelLevel < 30 ? 'text-red-400' : vehicle.fuelLevel < 50 ? 'text-yellow-400' : 'text-green-400'}>
                        {vehicle.fuelLevel.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Power Source</div>
                      <div className="text-purple-400">{vehicle.powerSource || 'Hybrid'}</div>
                    </div>
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Schedule: </span>
                  <span className="text-green-400">
                    {vehicle.schedule.departureTime} → {vehicle.schedule.arrivalTime} (Next: {vehicle.schedule.nextDeparture})
                  </span>
                </div>

                {vehicle.wifiEnabled && (
                  <div className="text-xs mt-1">
                    <span className="text-blue-400">📶 Wi-Fi Available</span>
                  </div>
                )}

                {/* Occupancy bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        vehicle.occupancy > 85 ? 'bg-red-400' :
                        vehicle.occupancy > 70 ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}
                      style={{ width: `${Math.min(100, vehicle.occupancy)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Services and Environmental Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Services */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 EMERGENCY SERVICES COORDINATION
          </h3>
          <div className="space-y-3">
            {emergencyServices.map((service) => (
              <div key={service.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(service.status)}`}>
                      {service.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {service.type}
                    </span>
                    {service.priority && (
                      <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(service.priority)} bg-gray-600`}>
                        {service.priority}
                      </span>
                    )}
                    {service.trafficOverride && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        TRAFFIC OVERRIDE
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(service.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{service.unit}</div>
                <div className="text-xs text-cyan-400 mb-2">📍 {service.location}</div>
                {service.incident && (
                  <div className="text-xs text-purple-400 mb-3">🚨 {service.incident}</div>
                )}

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Response Time</div>
                    <div className="text-blue-400">
                      {service.responseTime ? `${service.responseTime.toFixed(1)}m` : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">ETA</div>
                    <div className="text-green-400">
                      {service.eta ? `${service.eta.toFixed(1)}m` : service.status === 'ON_SCENE' ? 'On scene' : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Crew Size</div>
                    <div className="text-yellow-400">{service.crew}</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <div className="text-gray-400">Equipment:</div>
                  <div className="text-indigo-400">{service.equipment.join(', ')}</div>
                </div>

                {service.signalsPreempted > 0 && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Signals Preempted: </span>
                    <span className="text-orange-400">{service.signalsPreempted}</span>
                  </div>
                )}

                {service.patient && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Patient Info:</div>
                    <div className="text-pink-400">
                      Age {service.patient.age}, {service.patient.condition}, Vitals: {service.patient.vitals}
                    </div>
                  </div>
                )}

                {service.sector && (
                  <div className="text-xs">
                    <span className="text-gray-400">Patrol Sector: </span>
                    <span className="text-green-400">{service.sector}</span>
                  </div>
                )}

                {service.specialEquipment && (
                  <div className="text-xs mt-1">
                    <span className="text-gray-400">Special Equipment: </span>
                    <span className="text-red-400">{service.specialEquipment}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌬️ ENVIRONMENTAL MONITORING
          </h3>
          <div className="space-y-3">
            {environmentalSensors.map((sensor) => (
              <div key={sensor.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(sensor.status)}`}>
                      {sensor.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {sensor.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getAirQualityColor(sensor.airQualityLevel)} bg-gray-600`}>
                      AQI {sensor.airQualityIndex}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(sensor.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{sensor.location}</div>
                <div className="text-xs text-cyan-400 mb-3">Air Quality: {sensor.airQualityLevel.replace('_', ' ')}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">PM2.5</div>
                    <div className="text-red-400">{sensor.measurements.pm25.toFixed(1)} μg/m³</div>
                  </div>
                  <div>
                    <div className="text-gray-400">PM10</div>
                    <div className="text-orange-400">{sensor.measurements.pm10.toFixed(1)} μg/m³</div>
                  </div>
                  <div>
                    <div className="text-gray-400">NO₂</div>
                    <div className="text-yellow-400">{sensor.measurements.no2.toFixed(1)} ppb</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">O₃</div>
                    <div className="text-blue-400">{sensor.measurements.o3.toFixed(1)} ppb</div>
                  </div>
                  <div>
                    <div className="text-gray-400">CO</div>
                    <div className="text-purple-400">{sensor.measurements.co.toFixed(1)} ppm</div>
                  </div>
                  <div>
                    <div className="text-gray-400">SO₂</div>
                    <div className="text-green-400">{sensor.measurements.so2.toFixed(1)} ppb</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-indigo-400">{sensor.temperature.toFixed(1)}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Humidity</div>
                    <div className="text-pink-400">{sensor.humidity.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Wind</div>
                    <div className="text-cyan-400">{sensor.windSpeed.toFixed(1)} km/h {sensor.windDirection}</div>
                  </div>
                </div>

                {sensor.noiseLevel && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Noise Level: </span>
                    <span className={sensor.noiseLevel > 75 ? 'text-red-400' : sensor.noiseLevel > 65 ? 'text-yellow-400' : 'text-green-400'}>
                      {sensor.noiseLevel.toFixed(1)} dB
                    </span>
                    {sensor.noiseCategory && (
                      <span className="text-gray-400"> ({sensor.noiseCategory})</span>
                    )}
                  </div>
                )}

                {sensor.alerts && sensor.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {sensor.alerts.map((alert, index) => (
                      <div key={index} className="text-red-400">• {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure Status and City Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Infrastructure Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏗️ URBAN INFRASTRUCTURE STATUS
          </h3>
          <div className="space-y-3">
            {infrastructure.map((inf) => (
              <div key={inf.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(inf.status)}`}>
                      {inf.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {inf.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(inf.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{inf.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{inf.type}</div>

                {/* Different metrics based on infrastructure type */}
                {inf.type === 'Electrical Distribution' && (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                      <div>
                        <div className="text-gray-400">Load</div>
                        <div className="text-blue-400">{inf.currentLoad.toFixed(1)} MW</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Capacity</div>
                        <div className="text-green-400">{inf.capacity} MW</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Utilization</div>
                        <div className={inf.utilization > 90 ? 'text-red-400' : inf.utilization > 75 ? 'text-yellow-400' : 'text-green-400'}>
                          {inf.utilization.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <div className="text-gray-400">Voltage</div>
                        <div className="text-yellow-400">{inf.voltage} kV</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Frequency</div>
                        <div className="text-purple-400">{inf.frequency} Hz</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Renewable</div>
                        <div className="text-green-400">{inf.renewablePercentage}%</div>
                      </div>
                    </div>
                  </>
                )}

                {inf.type === 'Water Management' && (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                      <div>
                        <div className="text-gray-400">Flow</div>
                        <div className="text-blue-400">{(inf.currentFlow / 1000).toFixed(0)}K m³/day</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Capacity</div>
                        <div className="text-green-400">{(inf.capacity / 1000).toFixed(0)}K m³/day</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Pressure</div>
                        <div className="text-indigo-400">{inf.pressure} bar</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <div className="text-gray-400">Quality</div>
                        <div className="text-green-400">{inf.quality}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">pH Level</div>
                        <div className="text-yellow-400">{inf.phLevel}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Leakage</div>
                        <div className="text-orange-400">{inf.leakageRate}%</div>
                      </div>
                    </div>
                  </>
                )}

                {inf.type === 'Telecommunications' && (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                      <div>
                        <div className="text-gray-400">Bandwidth</div>
                        <div className="text-blue-400">{inf.bandwidth.toFixed(1)} Gbps</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Capacity</div>
                        <div className="text-green-400">{inf.capacity} Gbps</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Latency</div>
                        <div className="text-purple-400">{inf.latency} ms</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <div className="text-gray-400">Uptime</div>
                        <div className="text-green-400">{inf.uptime}%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Nodes</div>
                        <div className="text-yellow-400">{inf.nodes}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Buildings</div>
                        <div className="text-indigo-400">{inf.connectedBuildings.toLocaleString()}</div>
                      </div>
                    </div>
                  </>
                )}

                {inf.type === 'Sanitation' && (
                  <>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                      <div>
                        <div className="text-gray-400">Collections</div>
                        <div className="text-blue-400">{inf.collections.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Processed</div>
                        <div className="text-green-400">{inf.processedToday} tons</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Recycling</div>
                        <div className="text-yellow-400">{inf.recyclingRate}%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <div className="text-gray-400">Trucks</div>
                        <div className="text-purple-400">{inf.trucks}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Routes</div>
                        <div className="text-indigo-400">{inf.routes}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Diversion</div>
                        <div className="text-green-400">{inf.landfillDiversion}%</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* City Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 CITY-WIDE ALERTS & INCIDENTS
          </h3>
          
          {cityAlerts.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg mb-2">✅</div>
              <div className="text-green-400 font-bold">NO ACTIVE ALERTS</div>
              <div className="text-gray-400 text-sm mt-2">All city systems operational</div>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {cityAlerts.map((alert) => (
                <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getAlertSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                        {alert.type.replace(/_/g, ' ')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        alert.status === 'CRITICAL' ? 'bg-red-500 text-white' :
                        alert.status === 'ACTIVE' ? 'bg-orange-500 text-white' :
                        alert.status === 'IN_PROGRESS' ? 'bg-blue-500 text-white' :
                        alert.status === 'MONITORING' ? 'bg-yellow-500 text-black' :
                        'bg-gray-500 text-white'
                      }`}>
                        {alert.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(alert.timestamp)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white mb-2">{alert.description}</div>
                  <div className="text-xs text-cyan-400 mb-1">📍 {alert.location}</div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Impact</div>
                      <div className="text-orange-400">{alert.impact}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Duration Est.</div>
                      <div className="text-green-400">{alert.estimatedDuration}</div>
                    </div>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Assigned Units: </span>
                    <span className="text-yellow-400">{alert.assignedUnits.join(', ')}</span>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Affected Services: </span>
                    <span className="text-red-400">{alert.affectedServices.join(', ')}</span>
                  </div>
                  
                  <div className="text-xs">
                    <span className="text-gray-400">Mitigation: </span>
                    <span className="text-blue-400">{alert.mitigationActions.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Performance Analytics and Mobility Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 SMART CITY PERFORMANCE (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrends}>
              <defs>
                <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="airGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
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
              <Area 
                type="monotone" 
                dataKey="trafficFlow" 
                stroke="#3B82F6" 
                fill="url(#trafficGradient)" 
                name="Traffic Flow (veh/h)"
              />
              <Line 
                type="monotone" 
                dataKey="airQuality" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Air Quality Index"
              />
              <Line 
                type="monotone" 
                dataKey="emergencyResponse" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Emergency Response (min)"
              />
              <Line 
                type="monotone" 
                dataKey="publicTransitOnTime" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Transit On-Time %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Urban Mobility Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚇 URBAN MOBILITY & SUSTAINABILITY
          </h3>
          
          <div className="space-y-4">
            {/* Mobility Mode Analysis */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Transportation Mode Distribution</h4>
              <div className="space-y-2">
                {mobilityTrends.map((mode, index) => (
                  <div key={index} className="bg-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{mode.mode}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">Usage:</span>
                        <span className="text-sm font-bold text-blue-400">
                          {mode.usage.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full ${
                          mode.mode === 'Private Vehicle' ? 'bg-red-400' :
                          mode.mode === 'Public Bus' ? 'bg-blue-400' :
                          mode.mode === 'Metro/Train' ? 'bg-green-400' :
                          mode.mode === 'Cycling' ? 'bg-yellow-400' :
                          mode.mode === 'Walking' ? 'bg-purple-400' :
                          'bg-cyan-400'
                        }`}
                        style={{ width: `${mode.usage}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400">Usage: </span>
                        <span className="text-blue-400">{mode.usage.toFixed(1)}%</span>
                      </div>
                      <div>
                        <span className="text-gray-400">On-Time: </span>
                        <span className="text-green-400">{mode.onTime.toFixed(1)}%</span>
                      </div>
                      <div>
                        <span className="text-gray-400">CO₂: </span>
                        <span className={mode.co2 === 0 ? 'text-green-400' : mode.co2 < 50 ? 'text-yellow-400' : 'text-red-400'}>
                          {mode.co2.toFixed(1)} g/km
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart City KPIs */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Smart City KPIs</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Traffic Efficiency</div>
                  <div className="text-white font-bold text-lg">87.3%</div>
                  <div className="text-green-400">Optimal flow</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Energy Consumption</div>
                  <div className="text-white font-bold text-lg">127 MW</div>
                  <div className="text-blue-400">Current load</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Water Usage</div>
                  <div className="text-white font-bold text-lg">187K m³</div>
                  <div className="text-cyan-400">Daily consumption</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Waste Recycling</div>
                  <div className="text-white font-bold text-lg">67.8%</div>
                  <div className="text-green-400">Diversion rate</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Emergency Response</div>
                  <div className="text-white font-bold text-lg">7.2 min</div>
                  <div className="text-orange-400">Average time</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Citizen Satisfaction</div>
                  <div className="text-white font-bold text-lg">8.4/10</div>
                  <div className="text-purple-400">Quality of life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCityOperations;