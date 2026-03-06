// AviationOperations.js - Aviation Operations Center & Flight Operations Control Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const AviationOperations = () => {
  const [activeFlights, setActiveFlights] = useState([
    {
      id: 'DL1234',
      callSign: 'DELTA1234',
      aircraft: 'Boeing 737-800',
      registration: 'N123DL',
      airline: 'Delta Airlines',
      route: 'JFK → LAX',
      departure: {
        airport: 'JFK',
        name: 'John F. Kennedy International',
        city: 'New York, NY',
        scheduledTime: '08:30',
        actualTime: '08:42',
        delay: 12, // minutes
        gate: 'A12',
        terminal: '4'
      },
      arrival: {
        airport: 'LAX',
        name: 'Los Angeles International',
        city: 'Los Angeles, CA',
        scheduledTime: '11:45',
        estimatedTime: '11:57',
        gate: 'B23',
        terminal: '5'
      },
      status: 'IN_FLIGHT',
      phase: 'CRUISE',
      position: {
        latitude: 39.1234,
        longitude: -98.5678,
        altitude: 37000, // feet
        groundSpeed: 487, // knots
        heading: 245,
        verticalSpeed: 0
      },
      fuel: {
        remaining: 12500, // pounds
        burnRate: 4.2, // pounds per minute
        endurance: 185, // minutes
        reserve: 3200
      },
      weather: {
        departureConditions: 'Clear, 22°C, 10kt winds',
        arrivalConditions: 'Partly Cloudy, 28°C, 5kt winds',
        enrouteWeather: 'Smooth air, light turbulence over Denver'
      },
      crew: {
        captain: 'John Mitchell',
        firstOfficer: 'Sarah Chen',
        cabinCrew: 4,
        flightTime: 165, // minutes
        dutyTime: 245
      },
      maintenance: {
        lastCheck: '2026-03-01',
        nextDue: '2026-03-15',
        deferredItems: 1,
        status: 'AIRWORTHY',
        cycles: 1234
      },
      passengers: {
        onboard: 156,
        capacity: 180,
        loadFactor: 86.7, // percentage
        checkedIn: 156,
        specialNeeds: 3
      },
      dispatch: {
        dispatcher: 'Mike Rodriguez',
        releaseTime: '08:15',
        fuel: 15800, // pounds loaded
        payload: 18500, // pounds
        zfw: 89200, // zero fuel weight
        tow: 105000 // takeoff weight
      },
      communication: {
        lastContact: Date.now() - 3 * 60 * 1000,
        frequency: '124.35',
        transponder: '2341',
        datalink: 'ACTIVE'
      },
      alerts: ['Light turbulence reported ahead', 'Runway 25L available for arrival'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'AA9876',
      callSign: 'AMERICAN9876',
      aircraft: 'Airbus A321',
      registration: 'N987AA',
      airline: 'American Airlines',
      route: 'MIA → ORD',
      departure: {
        airport: 'MIA',
        name: 'Miami International',
        city: 'Miami, FL',
        scheduledTime: '12:15',
        actualTime: '12:15',
        delay: 0,
        gate: 'D8',
        terminal: 'North'
      },
      arrival: {
        airport: 'ORD',
        name: 'O\'Hare International',
        city: 'Chicago, IL',
        scheduledTime: '15:30',
        estimatedTime: '15:25',
        gate: 'C14',
        terminal: '3'
      },
      status: 'IN_FLIGHT',
      phase: 'DESCENT',
      position: {
        latitude: 41.8789,
        longitude: -87.6234,
        altitude: 15000,
        groundSpeed: 312,
        heading: 340,
        verticalSpeed: -1800
      },
      fuel: {
        remaining: 4200,
        burnRate: 3.8,
        endurance: 68,
        reserve: 2800
      },
      weather: {
        departureConditions: 'Clear, 26°C, 8kt winds',
        arrivalConditions: 'Overcast, 15°C, 18kt winds, gusting 25kt',
        enrouteWeather: 'Light icing reported FL180-FL220'
      },
      crew: {
        captain: 'Lisa Thompson',
        firstOfficer: 'David Park',
        cabinCrew: 5,
        flightTime: 178,
        dutyTime: 289
      },
      maintenance: {
        lastCheck: '2026-02-28',
        nextDue: '2026-03-20',
        deferredItems: 0,
        status: 'AIRWORTHY',
        cycles: 2156
      },
      passengers: {
        onboard: 189,
        capacity: 196,
        loadFactor: 96.4,
        checkedIn: 189,
        specialNeeds: 2
      },
      dispatch: {
        dispatcher: 'Amanda Foster',
        releaseTime: '12:00',
        fuel: 12400,
        payload: 21300,
        zfw: 95600,
        tow: 108000
      },
      communication: {
        lastContact: Date.now() - 1 * 60 * 1000,
        frequency: '119.85',
        transponder: '4521',
        datalink: 'ACTIVE'
      },
      alerts: ['Approach control - expect vectors for ILS 10L', 'Gate hold at ORD due traffic'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'UA5432',
      callSign: 'UNITED5432',
      aircraft: 'Boeing 777-300ER',
      registration: 'N543UA',
      airline: 'United Airlines',
      route: 'SFO → NRT',
      departure: {
        airport: 'SFO',
        name: 'San Francisco International',
        city: 'San Francisco, CA',
        scheduledTime: '14:45',
        actualTime: null,
        delay: 0,
        gate: 'G7',
        terminal: 'International'
      },
      arrival: {
        airport: 'NRT',
        name: 'Tokyo Narita International',
        city: 'Tokyo, Japan',
        scheduledTime: '18:30+1',
        estimatedTime: '18:30+1',
        gate: 'TBD',
        terminal: '1'
      },
      status: 'BOARDING',
      phase: 'GROUND',
      position: {
        latitude: 37.6213,
        longitude: -122.3790,
        altitude: 13,
        groundSpeed: 0,
        heading: 0,
        verticalSpeed: 0
      },
      fuel: {
        remaining: 165000, // long-haul fuel load
        burnRate: 0, // not yet started
        endurance: 720, // minutes
        reserve: 35000
      },
      weather: {
        departureConditions: 'Fog, 16°C, 5kt winds',
        arrivalConditions: 'Clear, 8°C, 12kt winds',
        enrouteWeather: 'Pacific route - smooth flight conditions expected'
      },
      crew: {
        captain: 'Robert Kim',
        firstOfficer: 'Jennifer Walsh',
        cabinCrew: 12, // long-haul crew
        flightTime: 0,
        dutyTime: 45
      },
      maintenance: {
        lastCheck: '2026-03-04',
        nextDue: '2026-03-18',
        deferredItems: 0,
        status: 'AIRWORTHY',
        cycles: 876
      },
      passengers: {
        onboard: 0, // still boarding
        capacity: 364,
        loadFactor: 92.3,
        checkedIn: 336,
        specialNeeds: 8
      },
      dispatch: {
        dispatcher: 'Carlos Mendez',
        releaseTime: '14:30',
        fuel: 165000,
        payload: 45600,
        zfw: 267800,
        tow: 432800
      },
      communication: {
        lastContact: Date.now() - 30 * 1000,
        frequency: 'Ground Control',
        transponder: '7654',
        datalink: 'STANDBY'
      },
      alerts: ['Boarding in progress', 'Ground hold - ATC flow control'],
      lastUpdate: Date.now() - 30 * 1000
    },
    {
      id: 'SW7890',
      callSign: 'SOUTHWEST7890',
      aircraft: 'Boeing 737 MAX 8',
      registration: 'N789SW',
      airline: 'Southwest Airlines',
      route: 'MDW → DEN',
      departure: {
        airport: 'MDW',
        name: 'Chicago Midway International',
        city: 'Chicago, IL',
        scheduledTime: '16:20',
        actualTime: null,
        delay: 0,
        gate: 'A15',
        terminal: 'Concourse A'
      },
      arrival: {
        airport: 'DEN',
        name: 'Denver International',
        city: 'Denver, CO',
        scheduledTime: '17:55',
        estimatedTime: '17:55',
        gate: 'B32',
        terminal: 'Concourse B'
      },
      status: 'PRE_FLIGHT',
      phase: 'GROUND',
      position: {
        latitude: 41.7868,
        longitude: -87.7522,
        altitude: 620,
        groundSpeed: 0,
        heading: 0,
        verticalSpeed: 0
      },
      fuel: {
        remaining: 22500,
        burnRate: 0,
        endurance: 280,
        reserve: 4500
      },
      weather: {
        departureConditions: 'Light Snow, -2°C, 15kt winds',
        arrivalConditions: 'Clear, 12°C, 8kt winds',
        enrouteWeather: 'Smooth conditions, light snow showers over Kansas'
      },
      crew: {
        captain: 'Nancy Williams',
        firstOfficer: 'Tony Garcia',
        cabinCrew: 4,
        flightTime: 0,
        dutyTime: 15
      },
      maintenance: {
        lastCheck: '2026-03-03',
        nextDue: '2026-03-17',
        deferredItems: 2,
        status: 'AIRWORTHY',
        cycles: 543
      },
      passengers: {
        onboard: 0,
        capacity: 175,
        loadFactor: 83.4,
        checkedIn: 146,
        specialNeeds: 4
      },
      dispatch: {
        dispatcher: 'Rachel Brown',
        releaseTime: 'Pending',
        fuel: 22500,
        payload: 16800,
        zfw: 78200,
        tow: 100700
      },
      communication: {
        lastContact: Date.now() - 5 * 60 * 1000,
        frequency: 'Ground Control',
        transponder: '1234',
        datalink: 'STANDBY'
      },
      alerts: ['Pre-flight inspection in progress', 'De-icing required due to snow'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    }
  ]);

  const [airportOperations, setAirportOperations] = useState([
    {
      id: 'JFK',
      icao: 'KJFK',
      name: 'John F. Kennedy International',
      city: 'New York, NY',
      category: 'INTERNATIONAL_HUB',
      status: 'OPERATIONAL',
      runways: [
        { name: '04L/22R', length: 12079, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' },
        { name: '04R/22L', length: 11351, surface: 'Asphalt', status: 'OPEN', traffic: 'Moderate' },
        { name: '08L/26R', length: 10000, surface: 'Asphalt', status: 'OPEN', traffic: 'Light' },
        { name: '08R/26L', length: 8400, surface: 'Asphalt', status: 'MAINTENANCE', traffic: 'Closed' }
      ],
      weather: {
        temperature: 22, // Celsius
        windDirection: 240,
        windSpeed: 10, // knots
        visibility: 10, // statute miles
        ceiling: 25000, // feet
        conditions: 'Clear',
        pressure: 30.12, // inches Hg
        dewPoint: 15
      },
      traffic: {
        arrivals: { current: 45, peak: 67, capacity: 80 },
        departures: { current: 42, peak: 73, capacity: 80 },
        total: { current: 87, daily: 1205, capacity: 160 },
        delays: { departure: 8.5, arrival: 6.2 }, // average minutes
        airborne: 23, // holding pattern aircraft
        ground: 156 // aircraft on ground
      },
      gates: {
        total: 130,
        occupied: 98,
        available: 32,
        maintenance: 0,
        utilization: 75.4 // percentage
      },
      airspace: {
        class: 'Bravo',
        altitude: 'Surface to 7000',
        trafficDensity: 'High',
        activeControllers: 12,
        frequency: {
          tower: '119.1',
          ground: '121.9',
          approach: '125.25',
          departure: '120.8'
        }
      },
      services: {
        fuelAvailable: true,
        deIcing: true,
        maintenance: true,
        customs: true,
        cargo: true,
        catering: true
      },
      alerts: ['Runway 08R/26L closed for maintenance', 'Moderate to heavy traffic'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'LAX',
      icao: 'KLAX',
      name: 'Los Angeles International',
      city: 'Los Angeles, CA',
      category: 'INTERNATIONAL_HUB',
      status: 'OPERATIONAL',
      runways: [
        { name: '06L/24R', length: 10285, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' },
        { name: '06R/24L', length: 8925, surface: 'Asphalt', status: 'OPEN', traffic: 'Moderate' },
        { name: '07L/25R', length: 12091, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' },
        { name: '07R/25L', length: 11095, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' }
      ],
      weather: {
        temperature: 28,
        windDirection: 250,
        windSpeed: 5,
        visibility: 10,
        ceiling: 3000,
        conditions: 'Partly Cloudy',
        pressure: 29.92,
        dewPoint: 18
      },
      traffic: {
        arrivals: { current: 52, peak: 89, capacity: 90 },
        departures: { current: 48, peak: 86, capacity: 90 },
        total: { current: 100, daily: 1432, capacity: 180 },
        delays: { departure: 12.3, arrival: 9.8 },
        airborne: 18,
        ground: 203
      },
      gates: {
        total: 146,
        occupied: 124,
        available: 22,
        maintenance: 0,
        utilization: 84.9
      },
      airspace: {
        class: 'Bravo',
        altitude: 'Surface to 10000',
        trafficDensity: 'Very High',
        activeControllers: 16,
        frequency: {
          tower: '120.95',
          ground: '121.65',
          approach: '124.5',
          departure: '125.2'
        }
      },
      services: {
        fuelAvailable: true,
        deIcing: false,
        maintenance: true,
        customs: true,
        cargo: true,
        catering: true
      },
      alerts: ['Marine layer expected - potential visibility impact', 'Very heavy traffic - expect delays'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    },
    {
      id: 'ORD',
      icao: 'KORD',
      name: 'O\'Hare International',
      city: 'Chicago, IL',
      category: 'INTERNATIONAL_HUB',
      status: 'OPERATIONAL',
      runways: [
        { name: '04L/22R', length: 7500, surface: 'Asphalt', status: 'OPEN', traffic: 'Moderate' },
        { name: '04R/22L', length: 7500, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' },
        { name: '09L/27R', length: 7967, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' },
        { name: '09R/27L', length: 7967, surface: 'Asphalt', status: 'OPEN', traffic: 'Moderate' },
        { name: '10L/28R', length: 13000, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' },
        { name: '10R/28L', length: 10801, surface: 'Asphalt', status: 'OPEN', traffic: 'Heavy' }
      ],
      weather: {
        temperature: 15,
        windDirection: 280,
        windSpeed: 18,
        visibility: 7,
        ceiling: 2500,
        conditions: 'Overcast, Gusting to 25kt',
        pressure: 30.08,
        dewPoint: 8
      },
      traffic: {
        arrivals: { current: 67, peak: 95, capacity: 100 },
        departures: { current: 63, peak: 98, capacity: 100 },
        total: { current: 130, daily: 2145, capacity: 200 },
        delays: { departure: 15.8, arrival: 18.4 },
        airborne: 34,
        ground: 289
      },
      gates: {
        total: 191,
        occupied: 156,
        available: 35,
        maintenance: 0,
        utilization: 81.7
      },
      airspace: {
        class: 'Bravo',
        altitude: 'Surface to 10000',
        trafficDensity: 'Very High',
        activeControllers: 18,
        frequency: {
          tower: '120.15',
          ground: '121.67',
          approach: '119.65',
          departure: '121.0'
        }
      },
      services: {
        fuelAvailable: true,
        deIcing: true,
        maintenance: true,
        customs: true,
        cargo: true,
        catering: true
      },
      alerts: ['Strong gusty winds - crosswind landings', 'Ground stop in effect - ATC flow control'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    }
  ]);

  const [flightCrewScheduling, setFlightCrewScheduling] = useState([
    {
      id: 'crew_001',
      employeeId: 'CP1234',
      name: 'John Mitchell',
      position: 'Captain',
      airline: 'Delta Airlines',
      aircraft: ['Boeing 737-800', 'Boeing 737-900'],
      base: 'JFK',
      status: 'ON_DUTY',
      currentFlight: 'DL1234',
      schedule: {
        dutyStart: '07:30',
        dutyEnd: '17:45',
        flightTime: 165, // minutes today
        dutyTime: 245,
        restRequired: 10, // hours
        nextDuty: '2026-03-06 08:00'
      },
      limits: {
        dailyFlightTime: 8, // hours
        dailyDutyTime: 14,
        weeklyFlightTime: 30,
        weeklyDutyTime: 60,
        monthlyFlightTime: 100,
        monthlyDutyTime: 280
      },
      current: {
        dailyFlightTime: 2.75,
        dailyDutyTime: 4.08,
        weeklyFlightTime: 18.5,
        weeklyDutyTime: 42.3,
        monthlyFlightTime: 67.8,
        monthlyDutyTime: 198.6
      },
      qualifications: {
        type: ['B737-800', 'B737-900'],
        medical: { class: '1st Class', expires: '2026-09-15' },
        recurrent: { completed: '2026-02-15', expires: '2027-02-15' },
        checkride: { completed: '2026-01-20', expires: '2027-01-20' }
      },
      contact: {
        phone: '+1-555-0123',
        emergency: '+1-555-0124',
        hotel: 'Marriott LAX - Room 1205',
        location: 'In Flight - DL1234'
      },
      alerts: ['Approaching weekly flight time limit', 'Medical renewal due in 6 months'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'crew_002',
      employeeId: 'FO5678',
      name: 'Sarah Chen',
      position: 'First Officer',
      airline: 'Delta Airlines',
      aircraft: ['Boeing 737-800'],
      base: 'JFK',
      status: 'ON_DUTY',
      currentFlight: 'DL1234',
      schedule: {
        dutyStart: '07:30',
        dutyEnd: '17:45',
        flightTime: 165,
        dutyTime: 245,
        restRequired: 10,
        nextDuty: '2026-03-06 09:15'
      },
      limits: {
        dailyFlightTime: 8,
        dailyDutyTime: 14,
        weeklyFlightTime: 30,
        weeklyDutyTime: 60,
        monthlyFlightTime: 100,
        monthlyDutyTime: 280
      },
      current: {
        dailyFlightTime: 2.75,
        dailyDutyTime: 4.08,
        weeklyFlightTime: 22.1,
        weeklyDutyTime: 48.7,
        monthlyFlightTime: 89.3,
        monthlyDutyTime: 234.5
      },
      qualifications: {
        type: ['B737-800'],
        medical: { class: '1st Class', expires: '2026-11-30' },
        recurrent: { completed: '2026-01-28', expires: '2027-01-28' },
        checkride: { completed: '2026-02-05', expires: '2027-02-05' }
      },
      contact: {
        phone: '+1-555-0234',
        emergency: '+1-555-0235',
        hotel: 'Marriott LAX - Room 1207',
        location: 'In Flight - DL1234'
      },
      alerts: ['Type rating checkride due in 11 months'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'crew_003',
      employeeId: 'CA3456',
      name: 'Maria Santos',
      position: 'Cabin Crew',
      airline: 'Delta Airlines',
      aircraft: ['All Narrow Body'],
      base: 'JFK',
      status: 'STANDBY',
      currentFlight: null,
      schedule: {
        dutyStart: '10:00',
        dutyEnd: '20:00',
        flightTime: 0,
        dutyTime: 120, // minutes on standby
        restRequired: 9,
        nextDuty: '2026-03-06 11:30'
      },
      limits: {
        dailyFlightTime: 8,
        dailyDutyTime: 14,
        weeklyFlightTime: 30,
        weeklyDutyTime: 60,
        monthlyFlightTime: 100,
        monthlyDutyTime: 280
      },
      current: {
        dailyFlightTime: 0,
        dailyDutyTime: 2.0,
        weeklyFlightTime: 15.2,
        weeklyDutyTime: 38.5,
        monthlyFlightTime: 71.8,
        monthlyDutyTime: 189.3
      },
      qualifications: {
        type: ['General Cabin Safety'],
        medical: { class: '2nd Class', expires: '2026-08-20' },
        recurrent: { completed: '2026-03-01', expires: '2027-03-01' },
        checkride: { completed: '2026-02-28', expires: '2027-02-28' }
      },
      contact: {
        phone: '+1-555-0345',
        emergency: '+1-555-0346',
        hotel: null,
        location: 'JFK Terminal 4 - Crew Lounge'
      },
      alerts: ['Available for immediate assignment'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'crew_004',
      employeeId: 'DX8901',
      name: 'Mike Rodriguez',
      position: 'Flight Dispatcher',
      airline: 'Delta Airlines',
      aircraft: ['All Fleet'],
      base: 'ATL',
      status: 'ON_DUTY',
      currentFlight: 'Multiple',
      schedule: {
        dutyStart: '06:00',
        dutyEnd: '18:00',
        flightTime: 0, // dispatchers don't log flight time
        dutyTime: 485, // minutes
        restRequired: 8,
        nextDuty: '2026-03-06 06:00'
      },
      flightsManaged: [
        'DL1234', 'DL5678', 'DL9012', 'DL3456', 'DL7890',
        'DL2345', 'DL6789', 'DL1357', 'DL2468', 'DL8024'
      ],
      qualifications: {
        type: ['Flight Dispatcher License'],
        medical: { class: 'Not Required', expires: 'N/A' },
        recurrent: { completed: '2026-02-10', expires: '2027-02-10' },
        checkride: { completed: '2026-01-15', expires: '2027-01-15' }
      },
      contact: {
        phone: '+1-555-0456',
        emergency: '+1-555-0457',
        hotel: null,
        location: 'ATL Operations Center'
      },
      alerts: ['Managing 10 active flights', 'Weather monitoring for Eastern US'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    }
  ]);

  const [maintenanceOperations, setMaintenanceOperations] = useState([
    {
      id: 'mx_001',
      aircraft: 'N123DL',
      type: 'Boeing 737-800',
      tailNumber: 'N123DL',
      airline: 'Delta Airlines',
      status: 'IN_SERVICE',
      location: 'En Route JFK-LAX',
      currentFlight: 'DL1234',
      cycles: 1234,
      flightHours: 15678.5,
      maintenance: {
        aCheck: { lastDone: '2026-02-28', nextDue: '2026-03-28', hoursRemaining: 78.5 },
        bCheck: { lastDone: '2026-01-15', nextDue: '2026-07-15', hoursRemaining: 2234.3 },
        cCheck: { lastDone: '2025-11-20', nextDue: '2027-02-20', hoursRemaining: 8945.7 },
        dCheck: { lastDone: '2024-06-10', nextDue: '2028-06-10', hoursRemaining: 15234.8 }
      },
      components: {
        engines: {
          left: { model: 'CFM56-7B27', serialNumber: 'L789456', cycles: 1156, tso: 234 },
          right: { model: 'CFM56-7B27', serialNumber: 'R654321', cycles: 1298, tso: 189 }
        },
        apu: { model: 'GTCP85-129', serialNumber: 'A123789', hours: 4567, status: 'SERVICEABLE' },
        landing_gear: { lastOverhaul: '2025-08-15', cyclesRemaining: 2156, status: 'SERVICEABLE' }
      },
      deferredItems: [
        {
          item: 'Cabin Light 12A',
          mel: 'MEL 33-41-01',
          dateDeferred: '2026-03-04',
          category: 'C',
          extension: 10, // days
          action: 'Replace at next maintenance'
        }
      ],
      serviceBulletins: [
        { number: 'SB737-32-1234', status: 'ACCOMPLISHED', date: '2026-02-20' },
        { number: 'SB737-57-5678', status: 'DUE', dueDate: '2026-03-15' }
      ],
      alerts: ['A-Check due in 78.5 flight hours', 'Service Bulletin SB737-57-5678 due'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'mx_002',
      aircraft: 'N987AA',
      type: 'Airbus A321',
      tailNumber: 'N987AA',
      airline: 'American Airlines',
      status: 'IN_SERVICE',
      location: 'Approaching ORD',
      currentFlight: 'AA9876',
      cycles: 2156,
      flightHours: 23456.8,
      maintenance: {
        aCheck: { lastDone: '2026-03-02', nextDue: '2026-04-02', hoursRemaining: 156.2 },
        bCheck: { lastDone: '2026-02-10', nextDue: '2026-08-10', hoursRemaining: 1876.4 },
        cCheck: { lastDone: '2025-09-15', nextDue: '2027-03-15', hoursRemaining: 6789.1 },
        dCheck: { lastDone: '2023-12-05', nextDue: '2028-12-05', hoursRemaining: 18956.3 }
      },
      components: {
        engines: {
          left: { model: 'V2533-A5', serialNumber: 'L987654', cycles: 2089, tso: 89 },
          right: { model: 'V2533-A5', serialNumber: 'R321987', cycles: 2134, tso: 45 }
        },
        apu: { model: 'APS3200', serialNumber: 'A789123', hours: 6789, status: 'SERVICEABLE' },
        landing_gear: { lastOverhaul: '2025-11-20', cyclesRemaining: 1876, status: 'SERVICEABLE' }
      },
      deferredItems: [],
      serviceBulletins: [
        { number: 'SBA321-28-9876', status: 'ACCOMPLISHED', date: '2026-02-28' },
        { number: 'SBA321-34-5432', status: 'ACCOMPLISHED', date: '2026-03-01' }
      ],
      alerts: ['All maintenance current'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'mx_003',
      aircraft: 'N543UA',
      type: 'Boeing 777-300ER',
      tailNumber: 'N543UA',
      airline: 'United Airlines',
      status: 'ON_GROUND',
      location: 'SFO Gate G7',
      currentFlight: 'UA5432',
      cycles: 876,
      flightHours: 12345.2,
      maintenance: {
        aCheck: { lastDone: '2026-02-25', nextDue: '2026-03-25', hoursRemaining: 234.8 },
        bCheck: { lastDone: '2026-01-20', nextDue: '2026-07-20', hoursRemaining: 2145.7 },
        cCheck: { lastDone: '2025-10-10', nextDue: '2027-04-10', hoursRemaining: 7856.3 },
        dCheck: { lastDone: '2024-03-15', nextDue: '2029-03-15', hoursRemaining: 23456.8 }
      },
      components: {
        engines: {
          left: { model: 'GE90-115B', serialNumber: 'L456789', cycles: 834, tso: 445 },
          right: { model: 'GE90-115B', serialNumber: 'R789456', cycles: 856, tso: 423 }
        },
        apu: { model: 'PW4077', serialNumber: 'A456789', hours: 3456, status: 'SERVICEABLE' },
        landing_gear: { lastOverhaul: '2025-06-30', cyclesRemaining: 3245, status: 'SERVICEABLE' }
      },
      deferredItems: [],
      serviceBulletins: [
        { number: 'SB777-25-3456', status: 'DUE', dueDate: '2026-03-10' },
        { number: 'SB777-49-7890', status: 'ACCOMPLISHED', date: '2026-02-15' }
      ],
      alerts: ['Service Bulletin SB777-25-3456 due', 'Pre-flight inspection in progress'],
      lastUpdate: Date.now() - 30 * 1000
    }
  ]);

  const [weatherSystems, setWeatherSystems] = useState([
    {
      id: 'wx_001',
      region: 'Eastern United States',
      type: 'WINTER_STORM',
      severity: 'MODERATE',
      status: 'ACTIVE',
      affectedAirports: ['ORD', 'MDW', 'DTW', 'CVG', 'IND'],
      conditions: {
        precipitation: 'Light to Moderate Snow',
        visibility: '3-6 SM',
        winds: '15-25 kt, gusting to 35 kt',
        icing: 'Light to Moderate below FL200',
        turbulence: 'Moderate'
      },
      movement: 'Northeast at 25 knots',
      forecast: {
        next6Hours: 'Continuing snow, decreasing intensity',
        next12Hours: 'Snow ending, winds decreasing',
        next24Hours: 'Clearing skies, improving conditions'
      },
      flightImpact: {
        delays: 'Moderate to Major',
        cancellations: 'Some',
        alternatives: 'Consider southern routes',
        deicing: 'Required at affected airports'
      },
      alerts: ['Ground stop at ORD', 'De-icing delays expected', 'Crosswind landings'],
      lastUpdate: Date.now() - 15 * 60 * 1000
    },
    {
      id: 'wx_002',
      region: 'Pacific Coast',
      type: 'MARINE_LAYER',
      severity: 'MINOR',
      status: 'ACTIVE',
      affectedAirports: ['LAX', 'SFO', 'SAN', 'PDX', 'SEA'],
      conditions: {
        precipitation: 'None',
        visibility: '1-3 SM in fog',
        winds: 'Light and Variable',
        icing: 'None',
        turbulence: 'Light'
      },
      movement: 'Stationary',
      forecast: {
        next6Hours: 'Fog persisting, slow improvement',
        next12Hours: 'Fog lifting to overcast',
        next24Hours: 'Partly cloudy, good visibility'
      },
      flightImpact: {
        delays: 'Minor to Moderate',
        cancellations: 'Few',
        alternatives: 'IFR approaches required',
        deicing: 'Not required'
      },
      alerts: ['IFR conditions at SFO', 'Expect approach delays'],
      lastUpdate: Date.now() - 10 * 60 * 1000
    },
    {
      id: 'wx_003',
      region: 'Rocky Mountain Region',
      type: 'MOUNTAIN_WAVE',
      severity: 'MODERATE',
      status: 'ACTIVE',
      affectedAirports: ['DEN', 'COS', 'ABQ', 'SLC', 'BOI'],
      conditions: {
        precipitation: 'None',
        visibility: '10+ SM',
        winds: '40-60 kt above FL300',
        icing: 'None',
        turbulence: 'Severe in mountain wave'
      },
      movement: 'Stationary',
      forecast: {
        next6Hours: 'Continuing strong winds aloft',
        next12Hours: 'Winds weakening slightly',
        next24Hours: 'Mountain wave diminishing'
      },
      flightImpact: {
        delays: 'Minor',
        cancellations: 'None',
        alternatives: 'Avoid FL300-FL450 eastbound',
        deicing: 'Not required'
      },
      alerts: ['Severe turbulence FL300-FL450', 'Request altitude changes'],
      lastUpdate: Date.now() - 20 * 60 * 1000
    }
  ]);

  const [operationsMetrics, setOperationsMetrics] = useState({
    onTimePerformance: {
      arrivals: 78.5, // percentage
      departures: 82.3,
      overall: 80.4,
      target: 85.0
    },
    delays: {
      weather: 35.2, // percentage of delays
      air_traffic: 28.7,
      mechanical: 15.6,
      crew: 8.9,
      other: 11.6
    },
    safety: {
      incidents: 0,
      daysWithoutIncident: 127,
      safetyScore: 98.7,
      reportableEvents: 3,
      resolved: 3
    },
    fuel: {
      efficiency: 96.2, // percentage of planned
      savings: 234000, // gallons this month
      cost: 2.85, // $ per gallon
      total: 12500000 // gallons used this month
    },
    fleet: {
      available: 156,
      inService: 134,
      maintenance: 18,
      utilization: 85.9, // percentage
      dispatch: 98.7 // dispatch reliability
    },
    revenue: {
      passengerRevenue: 45600000, // monthly
      cargoRevenue: 8900000,
      totalRevenue: 54500000,
      loadFactor: 84.7, // percentage
      rasm: 12.45 // revenue per available seat mile
    },
    lastUpdate: Date.now() - 5 * 60 * 1000
  });

  const [trafficTrends, setTrafficTrends] = useState([]);

  const generateTrafficTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        arrivals: Math.floor(Math.random() * 40) + 30, // 30-70 arrivals per hour
        departures: Math.floor(Math.random() * 40) + 25, // 25-65 departures per hour
        total: 0, // will be calculated
        delays: Math.floor(Math.random() * 25) + 5, // 5-30 minute average delay
        weather: Math.floor(Math.random() * 20) + 5, // 5-25% weather delays
        atc: Math.floor(Math.random() * 15) + 10 // 10-25% ATC delays
      });
      data[data.length - 1].total = data[data.length - 1].arrivals + data[data.length - 1].departures;
    }
    return data;
  };

  useEffect(() => {
    setTrafficTrends(generateTrafficTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update active flights
      setActiveFlights(prev => prev.map(flight => {
        if (flight.status === 'IN_FLIGHT') {
          return {
            ...flight,
            position: {
              ...flight.position,
              altitude: Math.max(1000, Math.min(42000, flight.position.altitude + (Math.random() - 0.5) * 2000)),
              groundSpeed: Math.max(200, Math.min(600, flight.position.groundSpeed + (Math.random() - 0.5) * 20)),
              heading: (flight.position.heading + (Math.random() - 0.5) * 10 + 360) % 360
            },
            fuel: {
              ...flight.fuel,
              remaining: Math.max(flight.fuel.reserve, flight.fuel.remaining - flight.fuel.burnRate * 4),
              endurance: Math.max(30, flight.fuel.endurance - 4)
            },
            lastUpdate: Date.now()
          };
        }
        return flight;
      }));

      // Update airport traffic
      setAirportOperations(prev => prev.map(airport => ({
        ...airport,
        traffic: {
          ...airport.traffic,
          arrivals: {
            ...airport.traffic.arrivals,
            current: Math.max(0, Math.min(airport.traffic.arrivals.capacity, 
              airport.traffic.arrivals.current + (Math.random() - 0.5) * 10))
          },
          departures: {
            ...airport.traffic.departures,
            current: Math.max(0, Math.min(airport.traffic.departures.capacity, 
              airport.traffic.departures.current + (Math.random() - 0.5) * 8))
          },
          delays: {
            departure: Math.max(0, airport.traffic.delays.departure + (Math.random() - 0.5) * 2),
            arrival: Math.max(0, airport.traffic.delays.arrival + (Math.random() - 0.5) * 2)
          }
        },
        gates: {
          ...airport.gates,
          occupied: Math.max(0, Math.min(airport.gates.total, 
            airport.gates.occupied + (Math.random() - 0.5) * 5)),
          available: 0 // will be recalculated
        },
        lastUpdate: Date.now()
      })).map(airport => ({
        ...airport,
        gates: {
          ...airport.gates,
          available: airport.gates.total - airport.gates.occupied - airport.gates.maintenance,
          utilization: ((airport.gates.occupied / airport.gates.total) * 100)
        },
        traffic: {
          ...airport.traffic,
          total: {
            ...airport.traffic.total,
            current: airport.traffic.arrivals.current + airport.traffic.departures.current
          }
        }
      })));

      // Update operations metrics
      setOperationsMetrics(prev => ({
        ...prev,
        onTimePerformance: {
          ...prev.onTimePerformance,
          arrivals: Math.max(70, Math.min(95, prev.onTimePerformance.arrivals + (Math.random() - 0.5) * 2)),
          departures: Math.max(70, Math.min(95, prev.onTimePerformance.departures + (Math.random() - 0.5) * 2))
        },
        fleet: {
          ...prev.fleet,
          inService: Math.max(120, Math.min(150, prev.fleet.inService + (Math.random() - 0.5) * 3))
        },
        lastUpdate: Date.now()
      }));

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'IN_FLIGHT':
      case 'OPERATIONAL':
      case 'ON_DUTY':
      case 'IN_SERVICE':
      case 'OPEN':
      case 'AIRWORTHY':
      case 'SERVICEABLE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BOARDING':
      case 'PRE_FLIGHT':
      case 'STANDBY':
      case 'ON_GROUND': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'DESCENT':
      case 'APPROACH':
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'CRUISE': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'MAINTENANCE':
      case 'OFF_DUTY': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'DELAYED':
      case 'CANCELED':
      case 'CLOSED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getDelayColor = (delay) => {
    if (delay <= 5) return 'text-green-400';
    if (delay <= 15) return 'text-yellow-400';
    if (delay <= 30) return 'text-orange-400';
    return 'text-red-400';
  };

  const getAltitudeColor = (altitude) => {
    if (altitude < 10000) return 'text-yellow-400';
    if (altitude < 30000) return 'text-blue-400';
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

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ✈️ AVIATION OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {activeFlights.filter(f => f.status === 'IN_FLIGHT').length} Airborne
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {operationsMetrics.onTimePerformance.overall.toFixed(1)}% OTP
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Flight Operations Command Center
          </div>
        </div>
      </div>

      {/* Aviation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">FLIGHTS IN SERVICE</div>
              <div className="text-2xl font-bold text-green-100">
                {operationsMetrics.fleet.inService}
              </div>
              <div className="text-xs text-green-300">
                Utilization: {operationsMetrics.fleet.utilization.toFixed(1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">✈️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ON-TIME PERFORMANCE</div>
              <div className="text-2xl font-bold text-blue-100">
                {operationsMetrics.onTimePerformance.overall.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                Target: {operationsMetrics.onTimePerformance.target.toFixed(1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">SAFETY RECORD</div>
              <div className="text-2xl font-bold text-purple-100">
                {operationsMetrics.safety.daysWithoutIncident}
              </div>
              <div className="text-xs text-purple-300">
                Days Without Incident
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-4 border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-yellow-200">MONTHLY REVENUE</div>
              <div className="text-2xl font-bold text-yellow-100">
                {formatCurrency(operationsMetrics.revenue.totalRevenue)}
              </div>
              <div className="text-xs text-yellow-300">
                Load Factor: {operationsMetrics.revenue.loadFactor.toFixed(1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* Active Flights and Airport Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Flights */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛫 ACTIVE FLIGHTS & FLIGHT TRACKING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeFlights.map((flight) => (
              <div key={flight.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(flight.status)}`}>
                      {flight.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {flight.phase}
                    </span>
                    {flight.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {flight.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(flight.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{flight.id} ({flight.callSign})</div>
                <div className="text-xs text-cyan-400 mb-2">{flight.aircraft} | {flight.registration} | {flight.airline}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {flight.route} | {flight.departure.scheduledTime} - {flight.arrival.scheduledTime}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Position</div>
                    <div className={getAltitudeColor(flight.position.altitude)}>FL{Math.floor(flight.position.altitude / 100)}</div>
                    <div className="text-gray-500">{flight.position.groundSpeed} kt</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Fuel Remaining</div>
                    <div className="text-orange-400">{formatNumber(flight.fuel.remaining)} lbs</div>
                    <div className="text-gray-500">{formatDuration(flight.fuel.endurance)} endurance</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Passengers</div>
                    <div className="text-green-400">{flight.passengers.onboard}/{flight.passengers.capacity}</div>
                    <div className="text-gray-500">{flight.passengers.loadFactor.toFixed(1)}% load</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Departure: </span>
                  <span className="text-blue-400">{flight.departure.airport}</span>
                  {flight.departure.delay > 0 && (
                    <span className={`ml-2 ${getDelayColor(flight.departure.delay)}`}>
                      +{flight.departure.delay}min delay
                    </span>
                  )}
                  <span className="text-gray-400"> | Gate: </span>
                  <span className="text-cyan-400">{flight.departure.gate}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Arrival: </span>
                  <span className="text-green-400">{flight.arrival.airport}</span>
                  <span className="text-gray-400"> ETA: </span>
                  <span className="text-yellow-400">{flight.arrival.estimatedTime}</span>
                  <span className="text-gray-400"> | Gate: </span>
                  <span className="text-cyan-400">{flight.arrival.gate}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Crew: </span>
                  <span className="text-purple-400">{flight.crew.captain}</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-indigo-400">{flight.crew.firstOfficer}</span>
                  <span className="text-gray-400"> | Cabin: </span>
                  <span className="text-pink-400">{flight.crew.cabinCrew}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Dispatcher: </span>
                  <span className="text-orange-400">{flight.dispatch.dispatcher}</span>
                  <span className="text-gray-400"> | TOW: </span>
                  <span className="text-blue-400">{formatNumber(flight.dispatch.tow)} lbs</span>
                  <span className="text-gray-400"> | ZFW: </span>
                  <span className="text-green-400">{formatNumber(flight.dispatch.zfw)} lbs</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Communication: </span>
                  <span className="text-cyan-400">{flight.communication.frequency}</span>
                  <span className="text-gray-400"> | Transponder: </span>
                  <span className="text-yellow-400">{flight.communication.transponder}</span>
                  <span className="text-gray-400"> | Datalink: </span>
                  <span className="text-green-400">{flight.communication.datalink}</span>
                </div>

                {flight.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {flight.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">✈️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Airport Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏢 AIRPORT OPERATIONS & TRAFFIC CONTROL
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {airportOperations.map((airport) => (
              <div key={airport.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(airport.status)}`}>
                      {airport.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {airport.category.replace(/_/g, ' ')}
                    </span>
                    {airport.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {airport.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(airport.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{airport.name} ({airport.id})</div>
                <div className="text-xs text-cyan-400 mb-3">{airport.city} | {airport.icao}</div>

                {/* Weather */}
                <div className="text-xs mb-3 bg-gray-600 rounded p-2">
                  <div className="text-gray-400">Current Weather:</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-blue-400">{airport.weather.temperature}°C</span>
                    </div>
                    <div>
                      <span className="text-green-400">Wind: {airport.weather.windDirection}° {airport.weather.windSpeed}kt</span>
                    </div>
                    <div>
                      <span className="text-purple-400">Vis: {airport.weather.visibility} SM</span>
                    </div>
                  </div>
                  <div className="text-yellow-400">{airport.weather.conditions}</div>
                </div>

                {/* Traffic */}
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Arrivals</div>
                    <div className="text-green-400">{airport.traffic.arrivals.current}</div>
                    <div className="text-gray-500">Cap: {airport.traffic.arrivals.capacity}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Departures</div>
                    <div className="text-blue-400">{airport.traffic.departures.current}</div>
                    <div className="text-gray-500">Cap: {airport.traffic.departures.capacity}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Total Traffic</div>
                    <div className="text-purple-400">{airport.traffic.total.current}</div>
                    <div className="text-gray-500">Daily: {airport.traffic.total.daily}</div>
                  </div>
                </div>

                {/* Delays */}
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Departure Delays</div>
                    <div className={getDelayColor(airport.traffic.delays.departure)}>
                      {airport.traffic.delays.departure.toFixed(1)} min avg
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Arrival Delays</div>
                    <div className={getDelayColor(airport.traffic.delays.arrival)}>
                      {airport.traffic.delays.arrival.toFixed(1)} min avg
                    </div>
                  </div>
                </div>

                {/* Gates */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Gates: </span>
                  <span className="text-green-400">{airport.gates.available} available</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{airport.gates.occupied} occupied</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-purple-400">{airport.gates.total} total</span>
                  <span className="text-gray-400"> | Utilization: </span>
                  <span className="text-yellow-400">{airport.gates.utilization.toFixed(1)}%</span>
                </div>

                {/* Runways */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Runway Status:</div>
                  {airport.runways.slice(0, 3).map((runway, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2">
                      <span className="text-white">{runway.name}</span>
                      <span className={getStatusColor(runway.status).split(' ')[0]}>{runway.status}</span>
                      <span className="text-cyan-400">{runway.traffic}</span>
                    </div>
                  ))}
                </div>

                {/* Airspace */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Airspace: </span>
                  <span className="text-indigo-400">Class {airport.airspace.class}</span>
                  <span className="text-gray-400"> | Density: </span>
                  <span className="text-orange-400">{airport.airspace.trafficDensity}</span>
                  <span className="text-gray-400"> | Controllers: </span>
                  <span className="text-green-400">{airport.airspace.activeControllers}</span>
                </div>

                {/* Services */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Services: </span>
                  {airport.services.fuelAvailable && <span className="text-blue-400">Fuel </span>}
                  {airport.services.deIcing && <span className="text-cyan-400">De-ice </span>}
                  {airport.services.maintenance && <span className="text-green-400">Maint </span>}
                  {airport.services.customs && <span className="text-purple-400">Customs </span>}
                  {airport.services.cargo && <span className="text-orange-400">Cargo </span>}
                </div>

                {airport.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {airport.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🏢 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flight Crew Scheduling and Maintenance Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Flight Crew Scheduling */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👨‍✈️ FLIGHT CREW SCHEDULING & DUTY TIME MANAGEMENT
          </h3>
          <div className="space-y-3">
            {flightCrewScheduling.map((crew) => (
              <div key={crew.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(crew.status)}`}>
                      {crew.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {crew.position}
                    </span>
                    {crew.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {crew.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(crew.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{crew.name} ({crew.employeeId})</div>
                <div className="text-xs text-cyan-400 mb-2">{crew.airline} | Base: {crew.base}</div>
                
                {crew.currentFlight && (
                  <div className="text-xs text-purple-400 mb-3">
                    Current Assignment: {crew.currentFlight}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Daily Duty Time</div>
                    <div className="text-orange-400">{crew.current.dailyDutyTime.toFixed(1)}h</div>
                    <div className="text-gray-500">Limit: {crew.limits.dailyDutyTime}h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Daily Flight Time</div>
                    <div className="text-blue-400">{crew.current.dailyFlightTime.toFixed(1)}h</div>
                    <div className="text-gray-500">Limit: {crew.limits.dailyFlightTime}h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Weekly Flight Time</div>
                    <div className="text-green-400">{crew.current.weeklyFlightTime.toFixed(1)}h</div>
                    <div className="text-gray-500">Limit: {crew.limits.weeklyFlightTime}h</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Monthly Flight Time</div>
                    <div className="text-purple-400">{crew.current.monthlyFlightTime.toFixed(1)}h</div>
                    <div className="text-gray-500">Limit: {crew.limits.monthlyFlightTime}h</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Rest Required</div>
                    <div className="text-cyan-400">{crew.schedule.restRequired}h</div>
                    <div className="text-gray-500">Next Duty: {crew.schedule.nextDuty.substring(11)}</div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Aircraft Types: </span>
                  <span className="text-indigo-400">{crew.qualifications.type.join(', ')}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Medical: </span>
                  <span className="text-green-400">{crew.qualifications.medical.class}</span>
                  <span className="text-gray-400"> | Expires: </span>
                  <span className="text-yellow-400">{crew.qualifications.medical.expires}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Location: </span>
                  <span className="text-cyan-400">{crew.contact.location}</span>
                  <span className="text-gray-400"> | Phone: </span>
                  <span className="text-blue-400">{crew.contact.phone}</span>
                </div>

                {crew.flightsManaged && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Managing Flights: </span>
                    <span className="text-purple-400">{crew.flightsManaged.length} active</span>
                  </div>
                )}

                {crew.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {crew.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">👨‍✈️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔧 MAINTENANCE OPERATIONS & AIRCRAFT STATUS
          </h3>
          <div className="space-y-3">
            {maintenanceOperations.map((aircraft) => (
              <div key={aircraft.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(aircraft.status)}`}>
                      {aircraft.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {aircraft.type}
                    </span>
                    {aircraft.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {aircraft.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(aircraft.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{aircraft.tailNumber} ({aircraft.type})</div>
                <div className="text-xs text-cyan-400 mb-2">{aircraft.airline} | {aircraft.location}</div>
                
                {aircraft.currentFlight && (
                  <div className="text-xs text-purple-400 mb-3">
                    Current Flight: {aircraft.currentFlight}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Cycles</div>
                    <div className="text-blue-400">{aircraft.cycles}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Flight Hours</div>
                    <div className="text-green-400">{aircraft.flightHours.toFixed(1)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div className={getStatusColor(aircraft.status).split(' ')[0]}>
                      {aircraft.status.replace(/_/g, ' ')}
                    </div>
                  </div>
                </div>

                {/* Maintenance Checks */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Maintenance Checks:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-yellow-400">A-Check:</span>
                      <span className="text-white ml-1">{aircraft.maintenance.aCheck.hoursRemaining.toFixed(1)}h</span>
                    </div>
                    <div>
                      <span className="text-blue-400">B-Check:</span>
                      <span className="text-white ml-1">{aircraft.maintenance.bCheck.hoursRemaining.toFixed(1)}h</span>
                    </div>
                    <div>
                      <span className="text-green-400">C-Check:</span>
                      <span className="text-white ml-1">{aircraft.maintenance.cCheck.hoursRemaining.toFixed(1)}h</span>
                    </div>
                    <div>
                      <span className="text-purple-400">D-Check:</span>
                      <span className="text-white ml-1">{aircraft.maintenance.dCheck.hoursRemaining.toFixed(1)}h</span>
                    </div>
                  </div>
                </div>

                {/* Engines */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Engines:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-orange-400">Left:</span>
                      <span className="text-white ml-1">{aircraft.components.engines.left.model}</span>
                      <div className="text-gray-500">Cycles: {aircraft.components.engines.left.cycles}</div>
                    </div>
                    <div>
                      <span className="text-orange-400">Right:</span>
                      <span className="text-white ml-1">{aircraft.components.engines.right.model}</span>
                      <div className="text-gray-500">Cycles: {aircraft.components.engines.right.cycles}</div>
                    </div>
                  </div>
                </div>

                {/* APU */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">APU: </span>
                  <span className="text-cyan-400">{aircraft.components.apu.model}</span>
                  <span className="text-gray-400"> | Hours: </span>
                  <span className="text-yellow-400">{aircraft.components.apu.hours}</span>
                  <span className="text-gray-400"> | Status: </span>
                  <span className="text-green-400">{aircraft.components.apu.status}</span>
                </div>

                {/* Deferred Items */}
                {aircraft.deferredItems.length > 0 && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Deferred Items:</div>
                    {aircraft.deferredItems.map((item, index) => (
                      <div key={index} className="text-orange-400">
                        {item.item} (MEL {item.mel}) - Cat {item.category}
                      </div>
                    ))}
                  </div>
                )}

                {/* Service Bulletins */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Service Bulletins: </span>
                  {aircraft.serviceBulletins.filter(sb => sb.status === 'DUE').length > 0 ? (
                    <span className="text-orange-400">
                      {aircraft.serviceBulletins.filter(sb => sb.status === 'DUE').length} due
                    </span>
                  ) : (
                    <span className="text-green-400">All current</span>
                  )}
                </div>

                {aircraft.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {aircraft.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🔧 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Systems and Operations Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weather Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌦️ WEATHER SYSTEMS & METEOROLOGICAL CONDITIONS
          </h3>
          <div className="space-y-3">
            {weatherSystems.map((weather) => (
              <div key={weather.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(weather.status)}`}>
                      {weather.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {weather.type.replace(/_/g, ' ')}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      weather.severity === 'SEVERE' ? 'bg-red-500 text-white' :
                      weather.severity === 'MODERATE' ? 'bg-orange-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {weather.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(weather.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{weather.region}</div>
                <div className="text-xs text-cyan-400 mb-3">Movement: {weather.movement}</div>

                {/* Current Conditions */}
                <div className="text-xs mb-3 bg-gray-600 rounded p-2">
                  <div className="text-gray-400">Current Conditions:</div>
                  <div className="text-yellow-400">{weather.conditions.precipitation}</div>
                  <div className="text-blue-400">Visibility: {weather.conditions.visibility}</div>
                  <div className="text-green-400">Winds: {weather.conditions.winds}</div>
                  {weather.conditions.icing !== 'None' && (
                    <div className="text-purple-400">Icing: {weather.conditions.icing}</div>
                  )}
                  {weather.conditions.turbulence !== 'Light' && (
                    <div className="text-orange-400">Turbulence: {weather.conditions.turbulence}</div>
                  )}
                </div>

                {/* Affected Airports */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Affected Airports: </span>
                  <span className="text-red-400">{weather.affectedAirports.join(', ')}</span>
                </div>

                {/* Forecast */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Forecast:</div>
                  <div className="text-cyan-400">6h: {weather.forecast.next6Hours}</div>
                  <div className="text-blue-400">12h: {weather.forecast.next12Hours}</div>
                  <div className="text-green-400">24h: {weather.forecast.next24Hours}</div>
                </div>

                {/* Flight Impact */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Flight Impact: </span>
                  <span className="text-orange-400">Delays: {weather.flightImpact.delays}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-red-400">Cancellations: {weather.flightImpact.cancellations}</span>
                </div>

                {weather.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {weather.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🌦️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Operations Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 OPERATIONS METRICS & PERFORMANCE INDICATORS
          </h3>
          
          {/* On-Time Performance */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">On-Time Performance</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Arrivals</div>
                <div className="text-green-400 font-bold">{operationsMetrics.onTimePerformance.arrivals.toFixed(1)}%</div>
              </div>
              <div>
                <div className="text-gray-400">Departures</div>
                <div className="text-blue-400 font-bold">{operationsMetrics.onTimePerformance.departures.toFixed(1)}%</div>
              </div>
              <div>
                <div className="text-gray-400">Overall</div>
                <div className="text-purple-400 font-bold">{operationsMetrics.onTimePerformance.overall.toFixed(1)}%</div>
              </div>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-400">Target: </span>
              <span className="text-yellow-400">{operationsMetrics.onTimePerformance.target.toFixed(1)}%</span>
            </div>
          </div>

          {/* Delay Causes */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Delay Causes (% of Total)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-blue-400">Weather:</span>
                <span className="text-white">{operationsMetrics.delays.weather.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-400">Air Traffic:</span>
                <span className="text-white">{operationsMetrics.delays.air_traffic.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-400">Mechanical:</span>
                <span className="text-white">{operationsMetrics.delays.mechanical.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400">Crew:</span>
                <span className="text-white">{operationsMetrics.delays.crew.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Other:</span>
                <span className="text-white">{operationsMetrics.delays.other.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Safety Record */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Safety Record</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Days Without Incident</div>
                <div className="text-green-400 font-bold">{operationsMetrics.safety.daysWithoutIncident}</div>
              </div>
              <div>
                <div className="text-gray-400">Safety Score</div>
                <div className="text-blue-400 font-bold">{operationsMetrics.safety.safetyScore.toFixed(1)}</div>
              </div>
              <div>
                <div className="text-gray-400">Incidents</div>
                <div className="text-yellow-400 font-bold">{operationsMetrics.safety.incidents}</div>
              </div>
              <div>
                <div className="text-gray-400">Events Resolved</div>
                <div className="text-purple-400 font-bold">{operationsMetrics.safety.resolved}/{operationsMetrics.safety.reportableEvents}</div>
              </div>
            </div>
          </div>

          {/* Fleet Status */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Fleet Status</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Available</div>
                <div className="text-green-400 font-bold">{operationsMetrics.fleet.available}</div>
              </div>
              <div>
                <div className="text-gray-400">In Service</div>
                <div className="text-blue-400 font-bold">{operationsMetrics.fleet.inService}</div>
              </div>
              <div>
                <div className="text-gray-400">Maintenance</div>
                <div className="text-orange-400 font-bold">{operationsMetrics.fleet.maintenance}</div>
              </div>
              <div>
                <div className="text-gray-400">Utilization</div>
                <div className="text-purple-400 font-bold">{operationsMetrics.fleet.utilization.toFixed(1)}%</div>
              </div>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-400">Dispatch Reliability: </span>
              <span className="text-green-400">{operationsMetrics.fleet.dispatch.toFixed(1)}%</span>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Revenue (Monthly)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-blue-400">Passenger:</span>
                <span className="text-white">{formatCurrency(operationsMetrics.revenue.passengerRevenue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-400">Cargo:</span>
                <span className="text-white">{formatCurrency(operationsMetrics.revenue.cargoRevenue)}</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-600 pt-2">
                <span className="text-green-400">Total:</span>
                <span className="text-white">{formatCurrency(operationsMetrics.revenue.totalRevenue)}</span>
              </div>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-400">Load Factor: </span>
              <span className="text-yellow-400">{operationsMetrics.revenue.loadFactor.toFixed(1)}%</span>
              <span className="text-gray-400"> | RASM: </span>
              <span className="text-cyan-400">¢{operationsMetrics.revenue.rasm.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 AVIATION TRAFFIC TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={trafficTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12}/>
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
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="arrivals" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Arrivals/hr"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="departures" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Departures/hr"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="total" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              name="Total Traffic/hr"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="delays" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Avg Delay (min)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Aviation Operations KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 AVIATION OPERATIONS KPIs & PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Fleet Dispatch Rate</div>
            <div className="text-white font-bold text-lg">
              {operationsMetrics.fleet.dispatch.toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">industry leading</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Fuel Efficiency</div>
            <div className="text-white font-bold text-lg">
              {operationsMetrics.fuel.efficiency.toFixed(1)}%
            </div>
            <div className="text-blue-400 text-xs">of planned burn</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Active Flights</div>
            <div className="text-white font-bold text-lg">
              {activeFlights.filter(f => f.status === 'IN_FLIGHT').length}
            </div>
            <div className="text-purple-400 text-xs">currently airborne</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Flight Delay</div>
            <div className="text-white font-bold text-lg">
              {((airportOperations.reduce((sum, a) => sum + a.traffic.delays.departure, 0) / airportOperations.length)).toFixed(1)}m
            </div>
            <div className="text-orange-400 text-xs">departure average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Weather Impact</div>
            <div className="text-white font-bold text-lg">
              {weatherSystems.filter(w => w.severity !== 'MINOR').length}
            </div>
            <div className="text-yellow-400 text-xs">active systems</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Total Revenue/Day</div>
            <div className="text-white font-bold text-lg">
              ${(operationsMetrics.revenue.totalRevenue / 30 / 1000000).toFixed(1)}M
            </div>
            <div className="text-green-400 text-xs">daily average</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationOperations;