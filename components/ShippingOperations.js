// ShippingOperations.js - Shipping Operations Control Center & Maritime Logistics Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const ShippingOperations = () => {
  const [activeVessels, setActiveVessels] = useState([
    {
      id: 'vessel_001',
      name: 'MSC Oscar',
      imo: '9744505',
      mmsi: '636019825',
      callSign: 'H3RC',
      type: 'CONTAINER_SHIP',
      flag: 'Liberia',
      operator: 'Mediterranean Shipping Company',
      status: 'UNDERWAY_USING_ENGINE',
      position: {
        latitude: 37.7749,
        longitude: -122.4194,
        course: 98, // degrees
        speed: 14.2, // knots
        heading: 102, // degrees
        lastUpdate: Date.now() - 5 * 60 * 1000
      },
      dimensions: {
        length: 395.4, // meters
        beam: 59.0, // meters
        draft: 16.5, // meters
        grossTonnage: 175494,
        deadweight: 197362
      },
      voyage: {
        origin: 'Port of Los Angeles',
        destination: 'Port of Shanghai',
        eta: '2026-03-20T08:00:00Z',
        departed: '2026-03-02T14:30:00Z',
        route: 'Trans-Pacific',
        distance: 6785, // nautical miles
        progress: 23.4 // percentage
      },
      cargo: {
        capacity: 19224, // TEU
        loaded: 18456, // TEU
        utilization: 96.0, // percentage
        manifest: {
          containerCount: 18456,
          hazardousCargo: 234,
          refrigerated: 1678,
          oversize: 89
        },
        value: 890000000 // $ cargo value
      },
      crew: {
        total: 24,
        nationality: ['Filipino', 'Ukrainian', 'Romanian'],
        captain: 'Captain Lars Nielsen',
        chiefEngineer: 'Engineer Mario Santos'
      },
      technical: {
        engine: {
          type: 'MAN B&W 12K98ME-C',
          power: 59160, // kW
          fuelConsumption: 147.5, // MT/day
          status: 'NORMAL',
          temperature: 89, // celsius
          rpm: 89
        },
        navigation: {
          autopilot: 'ENGAGED',
          radar: 'OPERATIONAL',
          gps: 'ACTIVE',
          ais: 'TRANSMITTING'
        },
        machinery: {
          generators: 'ALL_OPERATIONAL',
          refrigeration: 'NORMAL',
          ballast: 'STABLE',
          anchor: 'SECURED'
        }
      },
      weather: {
        seaState: 3, // Beaufort scale
        waveHeight: 1.8, // meters
        windSpeed: 22, // knots
        windDirection: 'SW',
        visibility: 12, // nautical miles
        conditions: 'Partly Cloudy'
      },
      alerts: ['ETA delayed 2 hours due to weather'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'vessel_002',
      name: 'Seaspan Dalian',
      imo: '9778730',
      mmsi: '477995400',
      callSign: 'VRSG8',
      type: 'CONTAINER_SHIP',
      flag: 'Hong Kong',
      operator: 'Seaspan Corporation',
      status: 'AT_ANCHOR',
      position: {
        latitude: 33.7490,
        longitude: 118.2437,
        course: 0, // stationary
        speed: 0.1, // knots
        heading: 45,
        lastUpdate: Date.now() - 2 * 60 * 1000
      },
      dimensions: {
        length: 366.0,
        beam: 51.2,
        draft: 15.8,
        grossTonnage: 147791,
        deadweight: 168216
      },
      voyage: {
        origin: 'Port of Busan',
        destination: 'Port of Long Beach',
        eta: 'ARRIVED',
        departed: '2026-02-25T09:15:00Z',
        route: 'Trans-Pacific',
        distance: 5987,
        progress: 100.0
      },
      cargo: {
        capacity: 14074,
        loaded: 13289,
        utilization: 94.4,
        manifest: {
          containerCount: 13289,
          hazardousCargo: 156,
          refrigerated: 2134,
          oversize: 45
        },
        value: 670000000
      },
      crew: {
        total: 22,
        nationality: ['Korean', 'Filipino', 'Chinese'],
        captain: 'Captain Kim Sung-Ho',
        chiefEngineer: 'Engineer Li Wei'
      },
      technical: {
        engine: {
          type: 'MAN B&W 10K98ME-C',
          power: 51480,
          fuelConsumption: 0.0, // at anchor
          status: 'STANDBY',
          temperature: 45,
          rpm: 0
        },
        navigation: {
          autopilot: 'DISENGAGED',
          radar: 'OPERATIONAL',
          gps: 'ACTIVE',
          ais: 'TRANSMITTING'
        },
        machinery: {
          generators: 'AUXILIARY_ONLY',
          refrigeration: 'NORMAL',
          ballast: 'STABLE',
          anchor: 'DEPLOYED'
        }
      },
      weather: {
        seaState: 2,
        waveHeight: 0.8,
        windSpeed: 12,
        windDirection: 'NW',
        visibility: 15,
        conditions: 'Clear'
      },
      alerts: ['Awaiting berth assignment', 'Pilot boarding scheduled 08:30'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'vessel_003',
      name: 'Overseas Anacortes',
      imo: '9654321',
      mmsi: '367123456',
      callSign: 'WDH1234',
      type: 'OIL_TANKER',
      flag: 'United States',
      operator: 'Overseas Shipholding Group',
      status: 'MOORED',
      position: {
        latitude: 29.7604,
        longitude: -95.3698,
        course: 0,
        speed: 0.0,
        heading: 180,
        lastUpdate: Date.now() - 10 * 60 * 1000
      },
      dimensions: {
        length: 274.3,
        beam: 48.8,
        draft: 17.2,
        grossTonnage: 81729,
        deadweight: 157092
      },
      voyage: {
        origin: 'Port of Houston',
        destination: 'Port Arthur Refinery',
        eta: 'AT_BERTH',
        departed: '2026-03-04T16:00:00Z',
        route: 'Houston Ship Channel',
        distance: 78,
        progress: 100.0
      },
      cargo: {
        capacity: 156000, // barrels crude oil
        loaded: 142800,
        utilization: 91.5,
        manifest: {
          cargoType: 'West Texas Intermediate Crude',
          api: 39.8, // API gravity
          sulfur: 0.34, // percentage
          volume: 142800 // barrels
        },
        value: 11424000 // $ at $80/barrel
      },
      crew: {
        total: 18,
        nationality: ['American', 'Filipino', 'Romanian'],
        captain: 'Captain John Williams',
        chiefEngineer: 'Engineer Carlos Mendez'
      },
      technical: {
        engine: {
          type: 'MAN B&W 7S60ME-C',
          power: 17640,
          fuelConsumption: 0.0, // at berth
          status: 'STOPPED',
          temperature: 38,
          rpm: 0
        },
        navigation: {
          autopilot: 'DISENGAGED',
          radar: 'OPERATIONAL',
          gps: 'ACTIVE',
          ais: 'TRANSMITTING'
        },
        machinery: {
          generators: 'SHORE_POWER',
          cargoSystems: 'DISCHARGING',
          ballast: 'STABLE',
          mooringTensions: 'NORMAL'
        }
      },
      operations: {
        cargoOperation: 'DISCHARGING',
        dischargingRate: 2400, // barrels/hour
        timeRemaining: '18h 30m',
        manifold: 'CONNECTED',
        pumpingSystem: 'ACTIVE'
      },
      weather: {
        seaState: 1,
        waveHeight: 0.3,
        windSpeed: 8,
        windDirection: 'SE',
        visibility: 10,
        conditions: 'Overcast'
      },
      alerts: ['Cargo discharge operation in progress'],
      lastUpdate: Date.now() - 10 * 60 * 1000
    },
    {
      id: 'vessel_004',
      name: 'Quantum of the Seas',
      imo: '9549463',
      mmsi: '311012300',
      callSign: '3EXL2',
      type: 'PASSENGER_SHIP',
      flag: 'Bahamas',
      operator: 'Royal Caribbean International',
      status: 'UNDERWAY_USING_ENGINE',
      position: {
        latitude: 25.7617,
        longitude: -80.1918,
        course: 145,
        speed: 18.5,
        heading: 148,
        lastUpdate: Date.now() - 3 * 60 * 1000
      },
      dimensions: {
        length: 348.0,
        beam: 41.4,
        draft: 8.1,
        grossTonnage: 168666,
        passengers: 4180
      },
      voyage: {
        origin: 'Port of Miami',
        destination: 'St. Thomas, USVI',
        eta: '2026-03-06T07:00:00Z',
        departed: '2026-03-05T17:00:00Z',
        route: 'Caribbean Cruise',
        distance: 1124,
        progress: 8.7
      },
      passengers: {
        capacity: 4180,
        onboard: 3847,
        occupancy: 92.0,
        crew: 1500,
        nationalities: ['US', 'Canada', 'UK', 'Germany', 'Australia'],
        cabins: {
          total: 2090,
          occupied: 1923,
          suites: 234,
          balcony: 1234,
          interior: 622
        }
      },
      crew: {
        total: 1500,
        nationality: ['Filipino', 'Indonesian', 'Romanian', 'Ukrainian'],
        captain: 'Captain Henrik Nielsen',
        chiefEngineer: 'Engineer Paolo Rossi'
      },
      technical: {
        engine: {
          type: 'Azipod Propulsion',
          power: 92400, // kW total
          fuelConsumption: 165.8, // MT/day
          status: 'NORMAL',
          temperature: 72,
          rpm: 142
        },
        navigation: {
          autopilot: 'ENGAGED',
          radar: 'OPERATIONAL',
          gps: 'ACTIVE',
          ais: 'TRANSMITTING'
        },
        safety: {
          lifeboats: 'SECURED',
          musterStations: 'CLEAR',
          fireDetection: 'OPERATIONAL',
          stabilizers: 'ACTIVE'
        }
      },
      services: {
        dining: 'OPERATIONAL',
        entertainment: 'SCHEDULED',
        pools: 'OPEN',
        spa: 'OPERATIONAL',
        casino: 'CLOSED_AT_SEA',
        internet: 'SATELLITE_ACTIVE'
      },
      weather: {
        seaState: 3,
        waveHeight: 1.5,
        windSpeed: 18,
        windDirection: 'E',
        visibility: 14,
        conditions: 'Partly Cloudy'
      },
      alerts: ['Smooth sailing conditions', 'All passenger services operational'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    }
  ]);

  const [portOperations, setPortOperations] = useState([
    {
      id: 'port_001',
      name: 'Port of Los Angeles',
      code: 'USLAX',
      location: 'San Pedro, California',
      type: 'CONTAINER_PORT',
      status: 'OPERATIONAL',
      capacity: {
        annual: 9500000, // TEU
        berths: 25,
        cranes: 89,
        yardArea: 2968 // acres
      },
      traffic: {
        vesselArrivals: 12, // today
        vesselDepartures: 8,
        vesselsAtBerth: 18,
        vesselsAtAnchor: 6,
        averageWaitTime: 2.4, // hours
        berthUtilization: 72.0 // percentage
      },
      cargo: {
        handledToday: 23456, // TEU
        handledMTD: 456789, // TEU month-to-date
        handledYTD: 1234567, // TEU year-to-date
        imports: 13456, // TEU today
        exports: 10000, // TEU today
        averageHandlingTime: 8.5 // hours per vessel
      },
      terminal: {
        occupancy: 87.3, // percentage
        availableSlots: 2456,
        totalSlots: 19324,
        craneMoves: 4567, // today
        truckTurnaround: 32.4 // minutes average
      },
      equipment: {
        cranes: {
          operational: 82,
          maintenance: 7,
          utilization: 76.8
        },
        trucks: {
          operational: 234,
          maintenance: 18,
          utilization: 84.2
        },
        railCars: {
          operational: 156,
          loaded: 89,
          utilization: 57.1
        }
      },
      logistics: {
        railConnections: 'Union Pacific, BNSF',
        truckGates: 12,
        intermodalFacilities: 3,
        freightForwarders: 234,
        customsClearance: 4.2 // hours average
      },
      weather: {
        temperature: 22, // celsius
        windSpeed: 15, // km/h
        windDirection: 'W',
        visibility: 12, // km
        seaState: 2,
        conditions: 'Clear'
      },
      alerts: ['High container volume - expect delays', 'Terminal 6 crane maintenance'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'port_002',
      name: 'Port of Rotterdam',
      code: 'NLRTM',
      location: 'Rotterdam, Netherlands',
      type: 'MULTIPURPOSE_PORT',
      status: 'OPERATIONAL',
      capacity: {
        annual: 14800000, // TEU
        berths: 142,
        cranes: 245,
        yardArea: 12600 // hectares
      },
      traffic: {
        vesselArrivals: 18,
        vesselDepartures: 15,
        vesselsAtBerth: 89,
        vesselsAtAnchor: 12,
        averageWaitTime: 1.8,
        berthUtilization: 84.7
      },
      cargo: {
        handledToday: 45678,
        handledMTD: 789123,
        handledYTD: 3456789,
        imports: 28456,
        exports: 17222,
        averageHandlingTime: 6.8
      },
      terminal: {
        occupancy: 76.4,
        availableSlots: 8734,
        totalSlots: 37012,
        craneMoves: 12456,
        truckTurnaround: 28.7
      },
      equipment: {
        cranes: {
          operational: 234,
          maintenance: 11,
          utilization: 89.2
        },
        trucks: {
          operational: 567,
          maintenance: 34,
          utilization: 91.3
        },
        railCars: {
          operational: 234,
          loaded: 189,
          utilization: 80.8
        }
      },
      logistics: {
        railConnections: 'Deutsche Bahn, ProRail',
        truckGates: 28,
        intermodalFacilities: 12,
        freightForwarders: 456,
        customsClearance: 2.1
      },
      weather: {
        temperature: 8,
        windSpeed: 28,
        windDirection: 'NW',
        visibility: 8,
        seaState: 4,
        conditions: 'Windy, Light Rain'
      },
      alerts: ['Strong winds affecting crane operations', 'Excellent throughput performance'],
      lastUpdate: Date.now() - 12 * 60 * 1000
    },
    {
      id: 'port_003',
      name: 'Port of Singapore',
      code: 'SGSIN',
      location: 'Singapore',
      type: 'CONTAINER_HUB',
      status: 'OPERATIONAL',
      capacity: {
        annual: 37200000, // TEU
        berths: 200,
        cranes: 456,
        yardArea: 2400
      },
      traffic: {
        vesselArrivals: 34,
        vesselDepartures: 31,
        vesselsAtBerth: 145,
        vesselsAtAnchor: 23,
        averageWaitTime: 0.8,
        berthUtilization: 92.4
      },
      cargo: {
        handledToday: 89234,
        handledMTD: 1456789,
        handledYTD: 8234567,
        imports: 45234,
        exports: 44000,
        averageHandlingTime: 4.2
      },
      terminal: {
        occupancy: 89.7,
        availableSlots: 4562,
        totalSlots: 44321,
        craneMoves: 34567,
        truckTurnaround: 18.9
      },
      equipment: {
        cranes: {
          operational: 445,
          maintenance: 11,
          utilization: 94.7
        },
        trucks: {
          operational: 789,
          maintenance: 23,
          utilization: 96.8
        },
        railCars: {
          operational: 123,
          loaded: 89,
          utilization: 72.4
        }
      },
      logistics: {
        railConnections: 'Limited',
        truckGates: 45,
        intermodalFacilities: 8,
        freightForwarders: 1234,
        customsClearance: 1.2
      },
      weather: {
        temperature: 32,
        windSpeed: 12,
        windDirection: 'SE',
        visibility: 15,
        seaState: 2,
        conditions: 'Hot, Humid'
      },
      alerts: ['World-class efficiency maintained', 'Very high terminal occupancy'],
      lastUpdate: Date.now() - 6 * 60 * 1000
    }
  ]);

  const [cargoTracking, setCargoTracking] = useState([
    {
      id: 'cargo_001',
      containerId: 'MSCU4567890',
      type: 'DRY_CONTAINER',
      size: '40HC',
      owner: 'Mediterranean Shipping Company',
      vessel: 'MSC Oscar',
      voyage: 'MSC234W',
      status: 'IN_TRANSIT',
      location: {
        current: 'Vessel - Trans-Pacific Route',
        coordinates: { lat: 37.7749, lng: -122.4194 },
        lastUpdate: Date.now() - 5 * 60 * 1000
      },
      route: {
        origin: 'Port of Los Angeles',
        destination: 'Port of Shanghai',
        plannedStops: ['Honolulu', 'Yokohama'],
        currentLeg: 'LAX → Honolulu',
        eta: '2026-03-20T08:00:00Z'
      },
      cargo: {
        commodity: 'Electronics',
        weight: 24567, // kg
        value: 2340000, // $
        shipper: 'TechCorp International',
        consignee: 'Shanghai Electronics Ltd',
        billOfLading: 'MSCU123456789'
      },
      customs: {
        originClearance: 'CLEARED',
        destinationStatus: 'PENDING',
        documentation: 'COMPLETE',
        inspectionRequired: false,
        dutyPaid: false
      },
      conditions: {
        temperature: 22, // celsius
        humidity: 45, // percentage
        sealing: 'INTACT',
        lastInspection: '2026-03-02T14:30:00Z'
      },
      tracking: {
        milestones: [
          { event: 'Container loaded', time: '2026-03-02T14:30:00Z', location: 'Port of Los Angeles' },
          { event: 'Vessel departed', time: '2026-03-02T18:00:00Z', location: 'Port of Los Angeles' },
          { event: 'In transit', time: '2026-03-05T12:00:00Z', location: 'Pacific Ocean' }
        ]
      },
      alerts: ['On schedule for delivery'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'cargo_002',
      containerId: 'OOCL9876543',
      type: 'REFRIGERATED_CONTAINER',
      size: '40RF',
      owner: 'Orient Overseas Container Line',
      vessel: 'OOCL Berlin',
      voyage: 'OOCL456E',
      status: 'AT_PORT',
      location: {
        current: 'Port of Long Beach - Terminal 5',
        coordinates: { lat: 33.7490, lng: -118.2437 },
        lastUpdate: Date.now() - 1 * 60 * 1000
      },
      route: {
        origin: 'Port of Auckland',
        destination: 'Port of Long Beach',
        plannedStops: ['None'],
        currentLeg: 'Arrived',
        eta: 'ARRIVED'
      },
      cargo: {
        commodity: 'Fresh Produce - Kiwi Fruit',
        weight: 18945,
        value: 234000,
        shipper: 'New Zealand Exports Ltd',
        consignee: 'California Fresh Foods',
        billOfLading: 'OOCL987654321'
      },
      customs: {
        originClearance: 'CLEARED',
        destinationStatus: 'CLEARED',
        documentation: 'COMPLETE',
        inspectionRequired: true,
        dutyPaid: true
      },
      conditions: {
        temperature: 0.5, // set temperature for kiwi
        humidity: 90,
        sealing: 'INTACT',
        lastInspection: '2026-03-05T06:00:00Z'
      },
      refrigeration: {
        setPoint: 0.5,
        actualTemperature: 0.6,
        humidity: 90.2,
        co2Level: 0.03,
        o2Level: 20.8,
        status: 'NORMAL'
      },
      tracking: {
        milestones: [
          { event: 'Container loaded', time: '2026-02-28T09:15:00Z', location: 'Port of Auckland' },
          { event: 'Vessel departed', time: '2026-02-28T14:00:00Z', location: 'Port of Auckland' },
          { event: 'Vessel arrived', time: '2026-03-05T05:30:00Z', location: 'Port of Long Beach' },
          { event: 'Container discharged', time: '2026-03-05T08:45:00Z', location: 'Port of Long Beach' }
        ]
      },
      alerts: ['Temperature within tolerance', 'Ready for pickup'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'cargo_003',
      containerId: 'TANK123456',
      type: 'TANK_CONTAINER',
      size: '20FT',
      owner: 'Chemical Transport Inc',
      vessel: 'Chemical Pioneer',
      voyage: 'CHEM789',
      status: 'LOADING',
      location: {
        current: 'Port of Houston - Chemical Terminal',
        coordinates: { lat: 29.7604, lng: -95.3698 },
        lastUpdate: Date.now() - 15 * 60 * 1000
      },
      route: {
        origin: 'Port of Houston',
        destination: 'Port of Antwerp',
        plannedStops: ['None'],
        currentLeg: 'Loading at origin',
        eta: '2026-03-25T14:00:00Z'
      },
      cargo: {
        commodity: 'Ethylene Glycol',
        weight: 24000,
        value: 45000,
        shipper: 'PetroChemical Corp',
        consignee: 'European Chemical Suppliers',
        billOfLading: 'CHEM456789123'
      },
      customs: {
        originClearance: 'IN_PROGRESS',
        destinationStatus: 'PENDING',
        documentation: 'IN_PROGRESS',
        inspectionRequired: true,
        dutyPaid: false
      },
      conditions: {
        temperature: 18,
        pressure: 1.1, // bar
        sealing: 'INTACT',
        lastInspection: '2026-03-05T14:00:00Z'
      },
      hazmat: {
        unNumber: 'UN3082',
        properShippingName: 'Environmentally hazardous substance, liquid, n.o.s.',
        hazardClass: '9',
        packingGroup: 'III',
        marpolCategory: 'Y'
      },
      tracking: {
        milestones: [
          { event: 'Container positioned', time: '2026-03-05T12:00:00Z', location: 'Port of Houston' },
          { event: 'Loading commenced', time: '2026-03-05T14:30:00Z', location: 'Port of Houston' }
        ]
      },
      alerts: ['Hazardous material loading in progress', 'Special handling required'],
      lastUpdate: Date.now() - 15 * 60 * 1000
    }
  ]);

  const [supplyChainMetrics, setSupplyChainMetrics] = useState({
    global: {
      activePorts: 1247,
      activeVessels: 45678,
      containersInTransit: 2345678,
      averageTransitTime: 18.7, // days
      onTimeDelivery: 87.3, // percentage
      globalCapacityUtilization: 82.4 // percentage
    },
    performance: {
      portEfficiency: 89.2, // percentage
      vesselUtilization: 84.7,
      containerTurnaround: 4.8, // days average
      customsClearance: 2.7, // days average
      documentProcessing: 1.2 // days average
    },
    costs: {
      averageFreightRate: 2450, // $ per TEU
      fuelCostIndex: 112.3, // base 100
      portCharges: 890, // $ per vessel call
      demurrage: 450, // $ per day
      insuranceRate: 0.23 // percentage of cargo value
    },
    sustainability: {
      co2EmissionsPerTEU: 23.4, // kg CO2
      fuelEfficiency: 67.8, // grams per tonne-km
      emissionReduction: 8.7, // percentage vs last year
      greenFuelAdoption: 12.3, // percentage of fleet
      wasteReduction: 15.6 // percentage vs baseline
    },
    safety: {
      accidentRate: 0.12, // per 1000 vessel movements
      daysWithoutMajorIncident: 89,
      cargoLossRate: 0.03, // percentage
      securityIncidents: 2, // this month
      piracyIncidents: 0 // this quarter
    },
    lastUpdate: Date.now() - 4 * 60 * 1000
  });

  const [shippingTrends, setShippingTrends] = useState([]);

  const generateShippingTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        throughput: Math.floor(Math.random() * 10000) + 75000, // 75-85K TEU/day
        vesselMovements: Math.floor(Math.random() * 50) + 450, // 450-500 movements
        onTimeDelivery: Math.floor(Math.random() * 5) + 85, // 85-90% on-time
        portEfficiency: Math.floor(Math.random() * 8) + 86, // 86-94% efficiency
        fuelConsumption: Math.floor(Math.random() * 20) + 140, // 140-160 MT/day
        co2Emissions: Math.floor(Math.random() * 500) + 1800 // 1800-2300 tonnes CO2/day
      });
    }
    return data;
  };

  useEffect(() => {
    setShippingTrends(generateShippingTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update vessel positions
      setActiveVessels(prev => prev.map(vessel => {
        if (vessel.status === 'UNDERWAY_USING_ENGINE') {
          return {
            ...vessel,
            position: {
              ...vessel.position,
              latitude: vessel.position.latitude + (Math.random() - 0.5) * 0.01,
              longitude: vessel.position.longitude + (Math.random() - 0.5) * 0.01,
              speed: Math.max(0, Math.min(25, vessel.position.speed + (Math.random() - 0.5) * 1.5)),
              course: (vessel.position.course + (Math.random() - 0.5) * 5 + 360) % 360,
              lastUpdate: Date.now()
            },
            voyage: {
              ...vessel.voyage,
              progress: Math.min(100, vessel.voyage.progress + Math.random() * 0.8)
            },
            lastUpdate: Date.now()
          };
        }
        return { ...vessel, lastUpdate: Date.now() };
      }));

      // Update port operations
      setPortOperations(prev => prev.map(port => ({
        ...port,
        traffic: {
          ...port.traffic,
          vesselArrivals: Math.max(0, port.traffic.vesselArrivals + Math.floor((Math.random() - 0.4) * 3)),
          vesselDepartures: Math.max(0, port.traffic.vesselDepartures + Math.floor((Math.random() - 0.4) * 3)),
          averageWaitTime: Math.max(0.5, Math.min(8.0, port.traffic.averageWaitTime + (Math.random() - 0.5) * 0.5))
        },
        cargo: {
          ...port.cargo,
          handledToday: Math.max(0, port.cargo.handledToday + Math.floor(Math.random() * 1000)),
          craneMoves: Math.max(0, port.cargo.craneMoves + Math.floor(Math.random() * 200))
        },
        terminal: {
          ...port.terminal,
          occupancy: Math.max(60, Math.min(95, port.terminal.occupancy + (Math.random() - 0.5) * 2))
        },
        lastUpdate: Date.now()
      })));

      // Update cargo tracking
      setCargoTracking(prev => prev.map(cargo => {
        if (cargo.status === 'IN_TRANSIT' && cargo.conditions.temperature !== undefined) {
          return {
            ...cargo,
            conditions: {
              ...cargo.conditions,
              temperature: Math.max(0, Math.min(25, cargo.conditions.temperature + (Math.random() - 0.5) * 0.2))
            },
            refrigeration: cargo.refrigeration ? {
              ...cargo.refrigeration,
              actualTemperature: Math.max(0, Math.min(25, cargo.refrigeration.actualTemperature + (Math.random() - 0.5) * 0.1))
            } : cargo.refrigeration,
            lastUpdate: Date.now()
          };
        }
        return { ...cargo, lastUpdate: Date.now() };
      }));

      // Update supply chain metrics
      setSupplyChainMetrics(prev => ({
        ...prev,
        performance: {
          ...prev.performance,
          portEfficiency: Math.max(80, Math.min(95, prev.performance.portEfficiency + (Math.random() - 0.5) * 1.5)),
          vesselUtilization: Math.max(75, Math.min(95, prev.performance.vesselUtilization + (Math.random() - 0.5) * 2))
        },
        global: {
          ...prev.global,
          onTimeDelivery: Math.max(80, Math.min(95, prev.global.onTimeDelivery + (Math.random() - 0.5) * 1))
        },
        lastUpdate: Date.now()
      }));

    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'UNDERWAY_USING_ENGINE':
      case 'OPERATIONAL':
      case 'IN_TRANSIT':
      case 'NORMAL':
      case 'ACTIVE':
      case 'CLEARED':
      case 'INTACT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'AT_ANCHOR':
      case 'MOORED':
      case 'AT_PORT':
      case 'STANDBY':
      case 'PENDING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOADING':
      case 'DISCHARGING':
      case 'AT_BERTH':
      case 'TRANSMITTING':
      case 'ENGAGED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'ARRIVED':
      case 'COMPLETE': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'MAINTENANCE':
      case 'IN_PROGRESS': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'DELAYED':
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getUtilizationColor = (percentage) => {
    if (percentage >= 90) return 'text-green-400';
    if (percentage >= 75) return 'text-blue-400';
    if (percentage >= 60) return 'text-yellow-400';
    if (percentage >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getSeaStateColor = (state) => {
    if (state <= 2) return 'text-green-400';
    if (state <= 4) return 'text-yellow-400';
    if (state <= 6) return 'text-orange-400';
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
          🚢 SHIPPING OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {activeVessels.filter(v => v.status.includes('UNDERWAY')).length}/{activeVessels.length} Underway
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {supplyChainMetrics.global.onTimeDelivery.toFixed(1)}% OTD
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Maritime Logistics Command Center
          </div>
        </div>
      </div>

      {/* Shipping Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">VESSELS TRACKED</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(supplyChainMetrics.global.activeVessels)}
              </div>
              <div className="text-xs text-blue-300">
                Global Fleet Active
              </div>
            </div>
            <div className="text-3xl opacity-60">🚢</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">CONTAINERS IN TRANSIT</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(supplyChainMetrics.global.containersInTransit, 1)}
              </div>
              <div className="text-xs text-green-300">
                TEU Worldwide
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG TRANSIT TIME</div>
              <div className="text-2xl font-bold text-purple-100">
                {supplyChainMetrics.global.averageTransitTime.toFixed(1)}
              </div>
              <div className="text-xs text-purple-300">
                Days Door-to-Door
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-4 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-yellow-200">PORT EFFICIENCY</div>
              <div className="text-2xl font-bold text-yellow-100">
                {supplyChainMetrics.performance.portEfficiency.toFixed(1)}%
              </div>
              <div className="text-xs text-yellow-300">
                Global Average
              </div>
            </div>
            <div className="text-3xl opacity-60">🏗️</div>
          </div>
        </div>
      </div>

      {/* Active Vessels and Port Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Vessels */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛳️ ACTIVE VESSELS & FLEET TRACKING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeVessels.map((vessel) => (
              <div key={vessel.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(vessel.status)}`}>
                      {vessel.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {vessel.type.replace(/_/g, ' ')}
                    </span>
                    {vessel.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {vessel.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(vessel.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{vessel.name}</div>
                <div className="text-xs text-cyan-400 mb-2">IMO: {vessel.imo} | MMSI: {vessel.mmsi} | {vessel.flag}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {vessel.operator} | {vessel.crew.captain}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Position</div>
                    <div className="text-blue-400">{vessel.position.latitude.toFixed(4)}°N</div>
                    <div className="text-gray-500">{vessel.position.longitude.toFixed(4)}°W</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Speed</div>
                    <div className="text-green-400">{vessel.position.speed.toFixed(1)} kt</div>
                    <div className="text-gray-500">Course: {vessel.position.course}°</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Voyage Progress</div>
                    <div className="text-purple-400">{vessel.voyage.progress.toFixed(1)}%</div>
                    <div className="text-gray-500">{vessel.voyage.distance} nm</div>
                  </div>
                </div>

                {/* Route Information */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Route: </span>
                  <span className="text-blue-400">{vessel.voyage.origin}</span>
                  <span className="text-gray-400"> → </span>
                  <span className="text-green-400">{vessel.voyage.destination}</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-yellow-400">
                    {vessel.voyage.eta === 'ARRIVED' ? 'ARRIVED' : 
                     vessel.voyage.eta === 'AT_BERTH' ? 'AT BERTH' :
                     new Date(vessel.voyage.eta).toLocaleDateString()}
                  </span>
                </div>

                {/* Cargo/Passenger Information */}
                {vessel.cargo && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Cargo: </span>
                    <span className="text-green-400">{formatNumber(vessel.cargo.loaded)} TEU</span>
                    <span className="text-gray-400"> / </span>
                    <span className="text-blue-400">{formatNumber(vessel.cargo.capacity)} TEU</span>
                    <span className="text-gray-400"> | Util: </span>
                    <span className="text-purple-400">{vessel.cargo.utilization.toFixed(1)}%</span>
                    <span className="text-gray-400"> | Value: </span>
                    <span className="text-yellow-400">{formatCurrency(vessel.cargo.value)}</span>
                  </div>
                )}

                {vessel.passengers && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Passengers: </span>
                    <span className="text-green-400">{formatNumber(vessel.passengers.onboard)}</span>
                    <span className="text-gray-400"> / </span>
                    <span className="text-blue-400">{formatNumber(vessel.passengers.capacity)}</span>
                    <span className="text-gray-400"> | Occupancy: </span>
                    <span className="text-purple-400">{vessel.passengers.occupancy.toFixed(1)}%</span>
                    <span className="text-gray-400"> | Crew: </span>
                    <span className="text-cyan-400">{vessel.passengers.crew || vessel.crew.total}</span>
                  </div>
                )}

                {/* Technical Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Engine: </span>
                  <span className={getStatusColor(vessel.technical.engine.status)}>{vessel.technical.engine.status}</span>
                  <span className="text-gray-400"> | Power: </span>
                  <span className="text-orange-400">{formatNumber(vessel.technical.engine.power)} kW</span>
                  <span className="text-gray-400"> | Fuel: </span>
                  <span className="text-blue-400">{vessel.technical.engine.fuelConsumption.toFixed(1)} MT/day</span>
                </div>

                {/* Weather Conditions */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Weather: </span>
                  <span className="text-cyan-400">{vessel.weather.conditions}</span>
                  <span className="text-gray-400"> | Sea State: </span>
                  <span className={getSeaStateColor(vessel.weather.seaState)}>{vessel.weather.seaState}</span>
                  <span className="text-gray-400"> | Wind: </span>
                  <span className="text-green-400">{vessel.weather.windSpeed} kt {vessel.weather.windDirection}</span>
                </div>

                {/* Special Operations */}
                {vessel.operations && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Operations: </span>
                    <span className={getStatusColor(vessel.operations.cargoOperation)}>{vessel.operations.cargoOperation}</span>
                    <span className="text-gray-400"> | Rate: </span>
                    <span className="text-blue-400">{vessel.operations.dischargingRate} bbl/h</span>
                    <span className="text-gray-400"> | Time Remaining: </span>
                    <span className="text-yellow-400">{vessel.operations.timeRemaining}</span>
                  </div>
                )}

                {vessel.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {vessel.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🚢 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Port Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚓ PORT OPERATIONS & TERMINAL MANAGEMENT
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {portOperations.map((port) => (
              <div key={port.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(port.status)}`}>
                      {port.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {port.type.replace(/_/g, ' ')}
                    </span>
                    {port.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {port.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(port.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{port.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{port.code} | {port.location}</div>

                {/* Traffic Statistics */}
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Vessel Traffic</div>
                    <div className="text-green-400">Arrivals: {port.traffic.vesselArrivals}</div>
                    <div className="text-blue-400">Departures: {port.traffic.vesselDepartures}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Berth Status</div>
                    <div className="text-purple-400">Occupied: {port.traffic.vesselsAtBerth}</div>
                    <div className="text-orange-400">Anchor: {port.traffic.vesselsAtAnchor}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className={getUtilizationColor(port.traffic.berthUtilization)}>
                      {port.traffic.berthUtilization.toFixed(1)}% util
                    </div>
                    <div className="text-yellow-400">Wait: {port.traffic.averageWaitTime.toFixed(1)}h</div>
                  </div>
                </div>

                {/* Cargo Handling */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Cargo Handled: </span>
                  <span className="text-green-400">{formatNumber(port.cargo.handledToday)} TEU today</span>
                  <span className="text-gray-400"> | MTD: </span>
                  <span className="text-blue-400">{formatNumber(port.cargo.handledMTD)}</span>
                  <span className="text-gray-400"> | YTD: </span>
                  <span className="text-purple-400">{formatNumber(port.cargo.handledYTD)}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Import/Export: </span>
                  <span className="text-cyan-400">{formatNumber(port.cargo.imports)} in</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">{formatNumber(port.cargo.exports)} out</span>
                  <span className="text-gray-400"> | Handling Time: </span>
                  <span className="text-yellow-400">{port.cargo.averageHandlingTime.toFixed(1)}h</span>
                </div>

                {/* Terminal Operations */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Terminal: </span>
                  <span className={getUtilizationColor(port.terminal.occupancy)}>
                    {port.terminal.occupancy.toFixed(1)}% occupied
                  </span>
                  <span className="text-gray-400"> | Available: </span>
                  <span className="text-green-400">{formatNumber(port.terminal.availableSlots)}</span>
                  <span className="text-gray-400"> | Truck Time: </span>
                  <span className="text-blue-400">{port.terminal.truckTurnaround.toFixed(1)}m</span>
                </div>

                {/* Equipment Status */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Equipment Status:</div>
                  <div className="grid grid-cols-3 gap-1">
                    <div>
                      <span className="text-blue-400">Cranes:</span> <span className="text-white">{port.equipment.cranes.operational}/{port.equipment.cranes.operational + port.equipment.cranes.maintenance}</span>
                      <div className="text-gray-500">{port.equipment.cranes.utilization.toFixed(1)}% util</div>
                    </div>
                    <div>
                      <span className="text-green-400">Trucks:</span> <span className="text-white">{port.equipment.trucks.operational}/{port.equipment.trucks.operational + port.equipment.trucks.maintenance}</span>
                      <div className="text-gray-500">{port.equipment.trucks.utilization.toFixed(1)}% util</div>
                    </div>
                    <div>
                      <span className="text-purple-400">Rail:</span> <span className="text-white">{port.equipment.railCars.loaded}/{port.equipment.railCars.operational}</span>
                      <div className="text-gray-500">{port.equipment.railCars.utilization.toFixed(1)}% util</div>
                    </div>
                  </div>
                </div>

                {/* Logistics */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Logistics: </span>
                  <span className="text-blue-400">Gates: {port.logistics.truckGates}</span>
                  <span className="text-gray-400"> | Rail: </span>
                  <span className="text-green-400">{port.logistics.railConnections}</span>
                  <span className="text-gray-400"> | Customs: </span>
                  <span className="text-yellow-400">{port.logistics.customsClearance.toFixed(1)}h</span>
                </div>

                {/* Weather */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Weather: </span>
                  <span className="text-cyan-400">{port.weather.conditions}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">{port.weather.temperature}°C</span>
                  <span className="text-gray-400"> | Wind: </span>
                  <span className="text-green-400">{port.weather.windSpeed} km/h {port.weather.windDirection}</span>
                </div>

                {port.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {port.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">⚓ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cargo Tracking and Supply Chain Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cargo Tracking */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 CARGO TRACKING & CONTAINER MANAGEMENT
          </h3>
          <div className="space-y-3">
            {cargoTracking.map((cargo) => (
              <div key={cargo.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(cargo.status)}`}>
                      {cargo.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {cargo.type.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {cargo.size}
                    </span>
                    {cargo.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                        {cargo.alerts.length} updates
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(cargo.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{cargo.containerId}</div>
                <div className="text-xs text-cyan-400 mb-2">{cargo.vessel} | {cargo.voyage} | {cargo.owner}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {cargo.location.current}
                </div>

                {/* Route Information */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Route: </span>
                  <span className="text-blue-400">{cargo.route.origin}</span>
                  <span className="text-gray-400"> → </span>
                  <span className="text-green-400">{cargo.route.destination}</span>
                  <span className="text-gray-400"> | ETA: </span>
                  <span className="text-yellow-400">
                    {cargo.route.eta === 'ARRIVED' ? 'ARRIVED' : new Date(cargo.route.eta).toLocaleDateString()}
                  </span>
                </div>

                {/* Cargo Details */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Cargo: </span>
                  <span className="text-green-400">{cargo.cargo.commodity}</span>
                  <span className="text-gray-400"> | Weight: </span>
                  <span className="text-blue-400">{formatNumber(cargo.cargo.weight)} kg</span>
                  <span className="text-gray-400"> | Value: </span>
                  <span className="text-purple-400">{formatCurrency(cargo.cargo.value)}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Shipper: </span>
                  <span className="text-cyan-400">{cargo.cargo.shipper}</span>
                  <span className="text-gray-400"> | Consignee: </span>
                  <span className="text-orange-400">{cargo.cargo.consignee}</span>
                </div>

                {/* Customs Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Customs: </span>
                  <span className={getStatusColor(cargo.customs.originClearance)}>Origin: {cargo.customs.originClearance}</span>
                  <span className="text-gray-400"> | </span>
                  <span className={getStatusColor(cargo.customs.destinationStatus)}>Dest: {cargo.customs.destinationStatus}</span>
                  <span className="text-gray-400"> | Docs: </span>
                  <span className={getStatusColor(cargo.customs.documentation)}>{cargo.customs.documentation}</span>
                </div>

                {/* Conditions */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Conditions: </span>
                  <span className="text-blue-400">Temp: {cargo.conditions.temperature.toFixed(1)}°C</span>
                  {cargo.conditions.humidity && (
                    <>
                      <span className="text-gray-400"> | Humidity: </span>
                      <span className="text-green-400">{cargo.conditions.humidity}%</span>
                    </>
                  )}
                  <span className="text-gray-400"> | Seal: </span>
                  <span className={getStatusColor(cargo.conditions.sealing)}>{cargo.conditions.sealing}</span>
                </div>

                {/* Special Handling */}
                {cargo.refrigeration && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Reefer: </span>
                    <span className="text-blue-400">Set: {cargo.refrigeration.setPoint}°C</span>
                    <span className="text-gray-400"> | Actual: </span>
                    <span className="text-cyan-400">{cargo.refrigeration.actualTemperature.toFixed(1)}°C</span>
                    <span className="text-gray-400"> | Status: </span>
                    <span className={getStatusColor(cargo.refrigeration.status)}>{cargo.refrigeration.status}</span>
                  </div>
                )}

                {cargo.hazmat && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">HAZMAT: </span>
                    <span className="text-red-400">UN {cargo.hazmat.unNumber}</span>
                    <span className="text-gray-400"> | Class: </span>
                    <span className="text-orange-400">{cargo.hazmat.hazardClass}</span>
                    <span className="text-gray-400"> | Group: </span>
                    <span className="text-yellow-400">{cargo.hazmat.packingGroup}</span>
                  </div>
                )}

                {/* Tracking Milestones */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Latest Milestones:</div>
                  {cargo.tracking.milestones.slice(-2).map((milestone, index) => (
                    <div key={index} className="text-blue-400">
                      • {milestone.event} - {new Date(milestone.time).toLocaleString()} - {milestone.location}
                    </div>
                  ))}
                </div>

                {cargo.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Status:</div>
                    {cargo.alerts.map((alert, index) => (
                      <div key={index} className="text-blue-400">📦 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 SUPPLY CHAIN METRICS & PERFORMANCE
          </h3>
          
          {/* Global Statistics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Global Maritime Statistics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Active Ports</div>
                <div className="text-blue-400">{formatNumber(supplyChainMetrics.global.activePorts)}</div>
              </div>
              <div>
                <div className="text-gray-400">Active Vessels</div>
                <div className="text-green-400">{formatNumber(supplyChainMetrics.global.activeVessels)}</div>
              </div>
              <div>
                <div className="text-gray-400">TEU in Transit</div>
                <div className="text-purple-400">{formatNumber(supplyChainMetrics.global.containersInTransit, 1)}</div>
              </div>
              <div>
                <div className="text-gray-400">Capacity Utilization</div>
                <div className={getUtilizationColor(supplyChainMetrics.global.globalCapacityUtilization)}>
                  {supplyChainMetrics.global.globalCapacityUtilization.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Performance Indicators</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">On-Time Delivery:</span>
                <span className={getUtilizationColor(supplyChainMetrics.global.onTimeDelivery)}>
                  {supplyChainMetrics.global.onTimeDelivery.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Port Efficiency:</span>
                <span className={getUtilizationColor(supplyChainMetrics.performance.portEfficiency)}>
                  {supplyChainMetrics.performance.portEfficiency.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vessel Utilization:</span>
                <span className={getUtilizationColor(supplyChainMetrics.performance.vesselUtilization)}>
                  {supplyChainMetrics.performance.vesselUtilization.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Container Turnaround:</span>
                <span className="text-yellow-400">{supplyChainMetrics.performance.containerTurnaround.toFixed(1)} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Customs Clearance:</span>
                <span className="text-cyan-400">{supplyChainMetrics.performance.customsClearance.toFixed(1)} days</span>
              </div>
            </div>
          </div>

          {/* Cost Analysis */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Cost Analysis</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Freight Rate:</span>
                <span className="text-green-400">${supplyChainMetrics.costs.averageFreightRate}/TEU</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fuel Cost Index:</span>
                <span className="text-orange-400">{supplyChainMetrics.costs.fuelCostIndex.toFixed(1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Port Charges:</span>
                <span className="text-blue-400">${supplyChainMetrics.costs.portCharges}/call</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Demurrage Rate:</span>
                <span className="text-red-400">${supplyChainMetrics.costs.demurrage}/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Insurance Rate:</span>
                <span className="text-purple-400">{supplyChainMetrics.costs.insuranceRate.toFixed(2)}%</span>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Sustainability Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">CO2 Emissions/TEU:</span>
                <span className="text-red-400">{supplyChainMetrics.sustainability.co2EmissionsPerTEU.toFixed(1)} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fuel Efficiency:</span>
                <span className="text-blue-400">{supplyChainMetrics.sustainability.fuelEfficiency.toFixed(1)} g/tonne-km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emission Reduction:</span>
                <span className="text-green-400">{supplyChainMetrics.sustainability.emissionReduction.toFixed(1)}% YoY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Green Fuel Adoption:</span>
                <span className="text-cyan-400">{supplyChainMetrics.sustainability.greenFuelAdoption.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Safety & Security */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Safety & Security</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Accident Rate:</span>
                <span className="text-yellow-400">{supplyChainMetrics.safety.accidentRate.toFixed(2)}/1000 movements</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Days Without Major Incident:</span>
                <span className="text-green-400">{supplyChainMetrics.safety.daysWithoutMajorIncident}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cargo Loss Rate:</span>
                <span className="text-blue-400">{supplyChainMetrics.safety.cargoLossRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security Incidents (MTD):</span>
                <span className="text-orange-400">{supplyChainMetrics.safety.securityIncidents}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Piracy Incidents (QTD):</span>
                <span className="text-red-400">{supplyChainMetrics.safety.piracyIncidents}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 MARITIME SHIPPING TRENDS (30 DAYS)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={shippingTrends}>
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
              dataKey="throughput"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.1}
              strokeWidth={3}
              name="Daily Throughput (TEU)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="vesselMovements" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Vessel Movements"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="onTimeDelivery" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="On-Time Delivery (%)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="portEfficiency" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Port Efficiency (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Shipping Operations KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 SHIPPING OPERATIONS KPIs & MARITIME PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Global Fleet Utilization</div>
            <div className="text-white font-bold text-lg">
              {supplyChainMetrics.performance.vesselUtilization.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">capacity optimization</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Average Transit Time</div>
            <div className="text-white font-bold text-lg">
              {supplyChainMetrics.global.averageTransitTime.toFixed(1)}
            </div>
            <div className="text-blue-400 text-xs">days door-to-door</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Container Turnaround</div>
            <div className="text-white font-bold text-lg">
              {supplyChainMetrics.performance.containerTurnaround.toFixed(1)}
            </div>
            <div className="text-purple-400 text-xs">days average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Fuel Efficiency</div>
            <div className="text-white font-bold text-lg">
              {supplyChainMetrics.sustainability.fuelEfficiency.toFixed(1)}
            </div>
            <div className="text-orange-400 text-xs">g/tonne-km</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Cargo Loss Rate</div>
            <div className="text-white font-bold text-lg">
              {supplyChainMetrics.safety.cargoLossRate.toFixed(2)}%
            </div>
            <div className="text-cyan-400 text-xs">industry leading</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Active Vessels Tracked</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(supplyChainMetrics.global.activeVessels / 1000, 0)}K
            </div>
            <div className="text-yellow-400 text-xs">real-time AIS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingOperations;