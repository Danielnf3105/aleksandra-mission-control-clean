// AirTrafficControlATC.js - Air Traffic Control Tower (ATC) Command Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const AirTrafficControlATC = () => {
  const [activeFlights, setActiveFlights] = useState([
    {
      id: 'flight_001',
      callSign: 'UAL1234',
      aircraft: 'Boeing 737-800',
      airline: 'United Airlines',
      flightType: 'COMMERCIAL',
      status: 'AIRBORNE',
      phase: 'APPROACH',
      altitude: 8500, // feet
      speed: 245, // knots
      heading: 270, // degrees
      squawk: '2345',
      origin: 'KSFO',
      destination: 'KLAX',
      runway: '24L',
      estimatedTime: Date.now() + 12 * 60 * 1000,
      actualTime: null,
      controller: 'APP-East',
      frequency: '124.900',
      position: { lat: 34.0522, lon: -118.2437 },
      flightPlan: 'IFR',
      priority: 'NORMAL',
      weatherMinimums: 'CAT-I',
      fuelRemaining: 4200, // lbs
      souls: 156
    },
    {
      id: 'flight_002',
      callSign: 'AAL567',
      aircraft: 'Airbus A320',
      airline: 'American Airlines',
      flightType: 'COMMERCIAL',
      status: 'TAXIING',
      phase: 'GROUND',
      altitude: 0,
      speed: 15,
      heading: 180,
      squawk: '1200',
      origin: 'KLAX',
      destination: 'KORD',
      runway: '25R',
      estimatedTime: Date.now() + 8 * 60 * 1000,
      actualTime: null,
      controller: 'GND-West',
      frequency: '121.750',
      position: { lat: 34.0622, lon: -118.2537 },
      flightPlan: 'IFR',
      priority: 'NORMAL',
      weatherMinimums: 'CAT-I',
      fuelRemaining: 8900,
      souls: 134
    },
    {
      id: 'flight_003',
      callSign: 'SWA2890',
      aircraft: 'Boeing 737-700',
      airline: 'Southwest Airlines',
      flightType: 'COMMERCIAL',
      status: 'AIRBORNE',
      phase: 'DEPARTURE',
      altitude: 12000,
      speed: 280,
      heading: 45,
      squawk: '4523',
      origin: 'KLAX',
      destination: 'KPHX',
      runway: '25R',
      estimatedTime: null,
      actualTime: Date.now() - 5 * 60 * 1000,
      controller: 'DEP-North',
      frequency: '125.200',
      position: { lat: 34.1022, lon: -118.1937 },
      flightPlan: 'IFR',
      priority: 'NORMAL',
      weatherMinimums: 'CAT-I',
      fuelRemaining: 6700,
      souls: 143
    },
    {
      id: 'flight_004',
      callSign: 'N456TA',
      aircraft: 'Cessna Citation',
      airline: 'Private',
      flightType: 'GENERAL_AVIATION',
      status: 'HOLDING',
      phase: 'PATTERN',
      altitude: 4500,
      speed: 180,
      heading: 90,
      squawk: '7000',
      origin: 'KVNY',
      destination: 'KLAX',
      runway: 'TBD',
      estimatedTime: Date.now() + 20 * 60 * 1000,
      actualTime: null,
      controller: 'APP-West',
      frequency: '119.400',
      position: { lat: 34.0822, lon: -118.2737 },
      flightPlan: 'IFR',
      priority: 'LOW',
      weatherMinimums: 'VFR',
      fuelRemaining: 850,
      souls: 6
    },
    {
      id: 'flight_005',
      callSign: 'COAST01',
      aircraft: 'Bell 412',
      airline: 'US Coast Guard',
      flightType: 'EMERGENCY',
      status: 'AIRBORNE',
      phase: 'EMERGENCY',
      altitude: 1200,
      speed: 120,
      heading: 225,
      squawk: '7700',
      origin: 'USCG Base',
      destination: 'KLAX',
      runway: 'ANY',
      estimatedTime: Date.now() + 6 * 60 * 1000,
      actualTime: null,
      controller: 'TWR-Main',
      frequency: '120.950',
      position: { lat: 34.0422, lon: -118.2637 },
      flightPlan: 'EMERGENCY',
      priority: 'EMERGENCY',
      weatherMinimums: 'VFR',
      fuelRemaining: 400,
      souls: 4
    }
  ]);

  const [atcControllers, setAtcControllers] = useState([
    {
      id: 'ctrl_001',
      position: 'Tower',
      callSign: 'LAX Tower',
      controller: 'John Mitchell',
      frequency: '120.950',
      sector: 'Local Control',
      status: 'ACTIVE',
      workload: 'MODERATE',
      aircraft: 8,
      movements: 23,
      shift: 'DAY',
      certification: 'CTO',
      experience: '12 years',
      lastBreak: Date.now() - 2 * 60 * 60 * 1000
    },
    {
      id: 'ctrl_002',
      position: 'Ground Control',
      callSign: 'LAX Ground',
      controller: 'Sarah Davis',
      frequency: '121.750',
      sector: 'Ground Movement',
      status: 'ACTIVE',
      workload: 'HIGH',
      aircraft: 12,
      movements: 34,
      shift: 'DAY',
      certification: 'CTO',
      experience: '8 years',
      lastBreak: Date.now() - 1.5 * 60 * 60 * 1000
    },
    {
      id: 'ctrl_003',
      position: 'Approach East',
      callSign: 'SoCal Approach',
      controller: 'Mike Rodriguez',
      frequency: '124.900',
      sector: 'Final Approach',
      status: 'ACTIVE',
      workload: 'MODERATE',
      aircraft: 15,
      movements: 18,
      shift: 'DAY',
      certification: 'R-Side',
      experience: '15 years',
      lastBreak: Date.now() - 3 * 60 * 60 * 1000
    },
    {
      id: 'ctrl_004',
      position: 'Departure North',
      callSign: 'SoCal Departure',
      controller: 'Lisa Chen',
      frequency: '125.200',
      sector: 'Initial Departure',
      status: 'ACTIVE',
      workload: 'LOW',
      aircraft: 6,
      movements: 12,
      shift: 'DAY',
      certification: 'D-Side',
      experience: '6 years',
      lastBreak: Date.now() - 1 * 60 * 60 * 1000
    },
    {
      id: 'ctrl_005',
      position: 'Approach West',
      callSign: 'SoCal Approach',
      controller: 'David Wilson',
      frequency: '119.400',
      sector: 'Vectors/Sequencing',
      status: 'BREAK',
      workload: 'NONE',
      aircraft: 0,
      movements: 8,
      shift: 'DAY',
      certification: 'R-Side',
      experience: '10 years',
      lastBreak: Date.now()
    }
  ]);

  const [runwayStatus, setRunwayStatus] = useState([
    {
      id: 'rwy_001',
      designation: '24L',
      length: 12091, // feet
      width: 150,
      surface: 'Asphalt',
      status: 'ACTIVE',
      usage: 'ARRIVALS',
      windComponent: '+8 knots',
      visibility: '10+ miles',
      ceiling: 'Unlimited',
      currentFlight: 'UAL1234',
      nextFlight: 'DAL789',
      movements: 47,
      capacity: 60
    },
    {
      id: 'rwy_002',
      designation: '24R',
      length: 10285,
      width: 150,
      surface: 'Asphalt',
      status: 'ACTIVE',
      usage: 'DEPARTURES',
      windComponent: '+12 knots',
      visibility: '10+ miles',
      ceiling: 'Unlimited',
      currentFlight: null,
      nextFlight: 'AAL567',
      movements: 52,
      capacity: 65
    },
    {
      id: 'rwy_003',
      designation: '25L',
      length: 8926,
      width: 150,
      surface: 'Asphalt',
      status: 'ACTIVE',
      usage: 'MIXED',
      windComponent: '+5 knots',
      visibility: '10+ miles',
      ceiling: 'Unlimited',
      currentFlight: null,
      nextFlight: 'SWA2890',
      movements: 31,
      capacity: 45
    },
    {
      id: 'rwy_004',
      designation: '25R',
      length: 11095,
      width: 150,
      surface: 'Asphalt',
      status: 'MAINTENANCE',
      usage: 'CLOSED',
      windComponent: 'N/A',
      visibility: 'N/A',
      ceiling: 'N/A',
      currentFlight: null,
      nextFlight: null,
      movements: 0,
      capacity: 0
    }
  ]);

  const [weatherConditions, setWeatherConditions] = useState({
    timestamp: Date.now(),
    visibility: '10+ miles',
    ceiling: 'Unlimited',
    wind: {
      direction: 250,
      speed: 12,
      gusts: 18,
      variability: '240V280'
    },
    pressure: '30.15',
    temperature: 22,
    dewPoint: 14,
    precipitation: 'None',
    cloudCoverage: 'Few at 2500',
    rvr: 'N/A',
    weatherPhenomena: 'None',
    altimeter: '30.15',
    flightCategory: 'VFR',
    remarks: 'Automated weather observation'
  });

  const [airspaceMetrics, setAirspaceMetrics] = useState({
    totalFlights: activeFlights.length,
    arrivalsToday: 156,
    departuresToday: 143,
    currentOperations: 18,
    delaysAverage: 12.3, // minutes
    onTimePerformance: 87.4, // percentage
    weatherDelays: 3,
    trafficDelays: 8,
    maintenanceDelays: 1,
    fuelEmergencies: 0,
    medicalEmergencies: 0,
    securityIncidents: 0,
    goArounds: 2,
    diversions: 1
  });

  const [flightStrips, setFlightStrips] = useState([
    {
      id: 'strip_001',
      callSign: 'UAL1234',
      type: 'ARRIVAL',
      runway: '24L',
      approach: 'ILS',
      status: 'ACTIVE',
      sequence: 1,
      estimatedTime: '15:35',
      actualTime: null,
      remarks: 'Heavy, Cat-I'
    },
    {
      id: 'strip_002',
      callSign: 'AAL567',
      type: 'DEPARTURE',
      runway: '25R',
      sid: 'LAXX6',
      status: 'READY',
      sequence: 2,
      estimatedTime: '15:31',
      actualTime: null,
      remarks: 'Ready for takeoff'
    },
    {
      id: 'strip_003',
      callSign: 'COAST01',
      type: 'EMERGENCY',
      runway: 'ANY',
      approach: 'STRAIGHT-IN',
      status: 'PRIORITY',
      sequence: 1,
      estimatedTime: '15:29',
      actualTime: null,
      remarks: 'EMERGENCY - Medical'
    }
  ]);

  const [trafficMetrics, setTrafficMetrics] = useState([]);
  const [operationalTrends, setOperationalTrends] = useState([]);

  const generateTrafficMetrics = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        arrivals: Math.floor(Math.random() * 15) + 5,
        departures: Math.floor(Math.random() * 12) + 4,
        total_movements: Math.floor(Math.random() * 25) + 10,
        delays: Math.floor(Math.random() * 8) + 2,
        go_arounds: Math.floor(Math.random() * 3),
        avg_delay: Math.random() * 20 + 5 // 5-25 minutes
      });
    }
    return data;
  };

  const generateOperationalTrends = () => {
    return [
      { category: 'Commercial', count: 234, percentage: 78.5 },
      { category: 'General Aviation', count: 45, percentage: 15.1 },
      { category: 'Cargo', count: 12, percentage: 4.0 },
      { category: 'Military', count: 5, percentage: 1.7 },
      { category: 'Emergency', count: 2, percentage: 0.7 }
    ];
  };

  useEffect(() => {
    setTrafficMetrics(generateTrafficMetrics());
    setOperationalTrends(generateOperationalTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update flight positions and status
      setActiveFlights(prev => prev.map(flight => {
        let newAltitude = flight.altitude;
        let newSpeed = flight.speed;
        let newStatus = flight.status;
        let newPhase = flight.phase;
        
        if (flight.phase === 'APPROACH' && flight.status === 'AIRBORNE') {
          newAltitude = Math.max(0, flight.altitude - Math.random() * 500);
          newSpeed = Math.max(140, flight.speed - Math.random() * 10);
          if (newAltitude < 500) {
            newStatus = 'LANDED';
            newPhase = 'GROUND';
            newSpeed = 0;
            newAltitude = 0;
          }
        }
        
        if (flight.phase === 'DEPARTURE' && flight.status === 'AIRBORNE') {
          newAltitude = Math.min(35000, flight.altitude + Math.random() * 1000);
          newSpeed = Math.min(450, flight.speed + Math.random() * 20);
        }
        
        if (flight.phase === 'GROUND' && flight.status === 'TAXIING') {
          if (Math.random() > 0.8) {
            newStatus = 'AIRBORNE';
            newPhase = 'DEPARTURE';
            newSpeed = 180;
            newAltitude = 1000;
          }
        }

        return {
          ...flight,
          altitude: newAltitude,
          speed: newSpeed,
          status: newStatus,
          phase: newPhase,
          fuelRemaining: Math.max(0, flight.fuelRemaining - Math.random() * 50)
        };
      }));

      // Update controller workloads
      setAtcControllers(prev => prev.map(controller => {
        if (controller.status === 'BREAK' && Math.random() > 0.9) {
          return { ...controller, status: 'ACTIVE', workload: 'LOW', aircraft: Math.floor(Math.random() * 8) + 2 };
        }
        if (controller.status === 'ACTIVE') {
          const workloads = ['LOW', 'MODERATE', 'HIGH'];
          return {
            ...controller,
            workload: workloads[Math.floor(Math.random() * workloads.length)],
            aircraft: Math.max(0, controller.aircraft + Math.floor((Math.random() - 0.5) * 4)),
            movements: controller.movements + Math.floor(Math.random() * 3)
          };
        }
        return controller;
      }));

      // Update weather slightly
      setWeatherConditions(prev => ({
        ...prev,
        wind: {
          ...prev.wind,
          speed: Math.max(5, Math.min(25, prev.wind.speed + (Math.random() - 0.5) * 3)),
          direction: (prev.wind.direction + Math.floor((Math.random() - 0.5) * 10) + 360) % 360
        },
        temperature: Math.max(15, Math.min(30, prev.temperature + (Math.random() - 0.5) * 2))
      }));

      // Update airspace metrics
      setAirspaceMetrics(prev => ({
        ...prev,
        currentOperations: Math.max(5, Math.min(25, prev.currentOperations + Math.floor((Math.random() - 0.5) * 3))),
        delaysAverage: Math.max(5, Math.min(30, prev.delaysAverage + (Math.random() - 0.5) * 2)),
        onTimePerformance: Math.max(75, Math.min(95, prev.onTimePerformance + (Math.random() - 0.5) * 1))
      }));

      // Occasionally add new flights or update strips
      if (Math.random() > 0.95) {
        const newCallSigns = ['DLH456', 'BAW789', 'AFR123', 'JAL890', 'QFA345'];
        const newCallSign = newCallSigns[Math.floor(Math.random() * newCallSigns.length)];
        
        if (!activeFlights.some(f => f.callSign === newCallSign)) {
          const newFlight = {
            id: `flight_${Date.now()}`,
            callSign: newCallSign,
            aircraft: 'Boeing 777-200',
            airline: 'International',
            flightType: 'COMMERCIAL',
            status: 'AIRBORNE',
            phase: 'APPROACH',
            altitude: Math.floor(Math.random() * 10000) + 5000,
            speed: Math.floor(Math.random() * 100) + 200,
            heading: Math.floor(Math.random() * 360),
            squawk: Math.floor(Math.random() * 7000) + 1000,
            origin: 'INTL',
            destination: 'KLAX',
            runway: 'TBD',
            estimatedTime: Date.now() + Math.floor(Math.random() * 30) * 60 * 1000,
            actualTime: null,
            controller: 'APP-East',
            frequency: '124.900',
            position: { lat: 34.0522 + (Math.random() - 0.5) * 0.1, lon: -118.2437 + (Math.random() - 0.5) * 0.1 },
            flightPlan: 'IFR',
            priority: 'NORMAL',
            weatherMinimums: 'CAT-I',
            fuelRemaining: Math.floor(Math.random() * 5000) + 3000,
            souls: Math.floor(Math.random() * 200) + 100
          };
          
          setActiveFlights(prev => [newFlight, ...prev.slice(0, 9)]);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeFlights]);

  const getFlightStatusColor = (status) => {
    switch (status) {
      case 'AIRBORNE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'TAXIING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'HOLDING': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'LANDED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'APPROACH': return 'text-cyan-400';
      case 'DEPARTURE': return 'text-purple-400';
      case 'GROUND': return 'text-gray-400';
      case 'PATTERN': return 'text-yellow-400';
      case 'EMERGENCY': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'EMERGENCY': return 'text-red-400 animate-pulse';
      case 'HIGH': return 'text-orange-400';
      case 'NORMAL': return 'text-green-400';
      case 'LOW': return 'text-gray-400';
      default: return 'text-white';
    }
  };

  const getWorkloadColor = (workload) => {
    switch (workload) {
      case 'HIGH': return 'text-red-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      case 'NONE': return 'text-gray-400';
      default: return 'text-white';
    }
  };

  const getRunwayStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MAINTENANCE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'CLOSED': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  const formatAltitude = (altitude) => {
    if (altitude >= 1000) return `FL${Math.floor(altitude / 100)}`;
    return `${altitude}ft`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ✈️ AIR TRAFFIC CONTROL TOWER (ATC)
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${
            weatherConditions.flightCategory === 'VFR' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
            weatherConditions.flightCategory === 'MVFR' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            {weatherConditions.flightCategory}
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {airspaceMetrics.currentOperations} OPS
          </div>
          <div className="text-sm text-gray-400 font-mono">
            FAA terminal flight data manager
          </div>
        </div>
      </div>

      {/* ATC Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ACTIVE FLIGHTS</div>
              <div className="text-2xl font-bold text-green-100">
                {airspaceMetrics.totalFlights}
              </div>
              <div className="text-xs text-green-300">
                {airspaceMetrics.currentOperations} operations
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
                {airspaceMetrics.onTimePerformance.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                {airspaceMetrics.delaysAverage.toFixed(1)}min avg delay
              </div>
            </div>
            <div className="text-3xl opacity-60">⏰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">MOVEMENTS TODAY</div>
              <div className="text-2xl font-bold text-purple-100">
                {airspaceMetrics.arrivalsToday + airspaceMetrics.departuresToday}
              </div>
              <div className="text-xs text-purple-300">
                {airspaceMetrics.arrivalsToday} arr / {airspaceMetrics.departuresToday} dep
              </div>
            </div>
            <div className="text-3xl opacity-60">🛬</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">WEATHER</div>
              <div className="text-2xl font-bold text-orange-100">
                {weatherConditions.wind.speed}kts
              </div>
              <div className="text-xs text-orange-300">
                {weatherConditions.wind.direction}° {weatherConditions.temperature}°C
              </div>
            </div>
            <div className="text-3xl opacity-60">🌤️</div>
          </div>
        </div>
      </div>

      {/* Active Flights and Flight Strips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Flights */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ✈️ ACTIVE FLIGHTS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeFlights.map((flight) => (
              <div key={flight.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{flight.callSign}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getFlightStatusColor(flight.status)}`}>
                      {flight.status}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getPhaseColor(flight.phase)}`}>
                      {flight.phase}
                    </span>
                    <span className={`text-xs ${getPriorityColor(flight.priority)}`}>
                      {flight.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {flight.squawk}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{flight.aircraft} - {flight.airline}</div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Altitude</div>
                    <div className="text-cyan-400">{formatAltitude(flight.altitude)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Speed</div>
                    <div className="text-green-400">{flight.speed}kts</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Heading</div>
                    <div className="text-purple-400">{flight.heading.toString().padStart(3, '0')}°</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Route</div>
                    <div className="text-yellow-400">{flight.origin}→{flight.destination}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Runway</div>
                    <div className="text-orange-400">{flight.runway}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Controller</div>
                    <div className="text-blue-400">{flight.controller}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Frequency</div>
                    <div className="text-pink-400">{flight.frequency}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Fuel</div>
                    <div className="text-red-400">{flight.fuelRemaining.toLocaleString()}lbs</div>
                  </div>
                  <div>
                    <div className="text-gray-400">SOB</div>
                    <div className="text-indigo-400">{flight.souls}</div>
                  </div>
                </div>

                {flight.estimatedTime && (
                  <div className="text-xs">
                    <span className="text-gray-400">ETA: </span>
                    <span className="text-green-400">{formatTime(flight.estimatedTime)}</span>
                  </div>
                )}

                {flight.actualTime && (
                  <div className="text-xs">
                    <span className="text-gray-400">Actual: </span>
                    <span className="text-cyan-400">{formatTime(flight.actualTime)}</span>
                  </div>
                )}

                {flight.priority === 'EMERGENCY' && (
                  <div className="mt-2 text-xs">
                    <span className="text-red-400 animate-pulse">
                      🚨 EMERGENCY AIRCRAFT
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Digital Flight Strips */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 DIGITAL FLIGHT STRIPS
          </h3>
          <div className="space-y-3">
            {flightStrips.map((strip) => (
              <div key={strip.id} className={`rounded-lg p-4 border-l-4 ${
                strip.status === 'PRIORITY' ? 'bg-red-900/30 border-red-400' :
                strip.status === 'ACTIVE' ? 'bg-green-900/30 border-green-400' :
                'bg-blue-900/30 border-blue-400'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-lg">{strip.callSign}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono ${
                      strip.type === 'EMERGENCY' ? 'bg-red-500 text-white' :
                      strip.type === 'ARRIVAL' ? 'bg-green-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {strip.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      SEQ {strip.sequence}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Runway</div>
                    <div className="text-white font-mono text-lg">{strip.runway}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">{strip.type === 'ARRIVAL' ? 'Approach' : 'SID'}</div>
                    <div className="text-cyan-400">{strip.approach || strip.sid}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Time</div>
                    <div className="text-yellow-400 font-mono">{strip.estimatedTime}</div>
                  </div>
                </div>
                
                {strip.remarks && (
                  <div className="mt-2 text-xs text-orange-400">
                    📝 {strip.remarks}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controllers and Runway Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ATC Controllers */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎧 ATC CONTROLLERS
          </h3>
          <div className="space-y-3">
            {atcControllers.map((controller) => (
              <div key={controller.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{controller.position}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                      controller.status === 'ACTIVE' ? 'text-green-400 bg-green-400/20 border-green-400/30' :
                      'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
                    }`}>
                      {controller.status}
                    </span>
                    <span className={`text-xs ${getWorkloadColor(controller.workload)}`}>
                      {controller.workload}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{controller.callSign}</div>
                <div className="text-xs text-purple-400 mb-3">{controller.controller}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Frequency</div>
                    <div className="text-cyan-400">{controller.frequency}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Aircraft</div>
                    <div className="text-yellow-400">{controller.aircraft}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Movements</div>
                    <div className="text-green-400">{controller.movements}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Sector</div>
                    <div className="text-blue-400">{controller.sector}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cert</div>
                    <div className="text-orange-400">{controller.certification}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Experience</div>
                    <div className="text-indigo-400">{controller.experience}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Runway Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛬 RUNWAY STATUS
          </h3>
          <div className="space-y-3">
            {runwayStatus.map((runway) => (
              <div key={runway.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-lg">{runway.designation}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getRunwayStatusColor(runway.status)}`}>
                      {runway.status}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      runway.usage === 'ARRIVALS' ? 'bg-green-500 text-white' :
                      runway.usage === 'DEPARTURES' ? 'bg-blue-500 text-white' :
                      runway.usage === 'MIXED' ? 'bg-purple-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {runway.usage}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {runway.movements}/{runway.capacity}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Length</div>
                    <div className="text-cyan-400">{runway.length.toLocaleString()}ft</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Width</div>
                    <div className="text-yellow-400">{runway.width}ft</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Surface</div>
                    <div className="text-green-400">{runway.surface}</div>
                  </div>
                </div>

                {runway.status === 'ACTIVE' && (
                  <>
                    <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                      <div>
                        <div className="text-gray-400">Wind Component</div>
                        <div className="text-blue-400">{runway.windComponent}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Visibility</div>
                        <div className="text-purple-400">{runway.visibility}</div>
                      </div>
                    </div>

                    {runway.currentFlight && (
                      <div className="text-xs mb-1">
                        <span className="text-gray-400">Current: </span>
                        <span className="text-red-400">{runway.currentFlight}</span>
                      </div>
                    )}

                    {runway.nextFlight && (
                      <div className="text-xs">
                        <span className="text-gray-400">Next: </span>
                        <span className="text-orange-400">{runway.nextFlight}</span>
                      </div>
                    )}
                  </>
                )}

                {runway.status === 'MAINTENANCE' && (
                  <div className="text-xs text-red-400">
                    🚧 Runway closed for maintenance
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Metrics and Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 TRAFFIC METRICS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficMetrics}>
              <defs>
                <linearGradient id="arrivalsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="departuresGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
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
                dataKey="arrivals" 
                stackId="1"
                stroke="#10B981" 
                fill="url(#arrivalsGradient)" 
                name="Arrivals"
              />
              <Area 
                type="monotone" 
                dataKey="departures" 
                stackId="2"
                stroke="#3B82F6" 
                fill="url(#departuresGradient)" 
                name="Departures"
              />
              <Line 
                type="monotone" 
                dataKey="delays" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Delays"
              />
              <Line 
                type="monotone" 
                dataKey="avg_delay" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Avg Delay (min)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Weather and Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌤️ WEATHER & OPERATIONS
          </h3>
          
          <div className="space-y-4">
            {/* Current Weather */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Current Weather</h4>
              <div className="bg-gray-700 rounded p-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Visibility:</span>
                    <span className="text-green-400">{weatherConditions.visibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ceiling:</span>
                    <span className="text-blue-400">{weatherConditions.ceiling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wind:</span>
                    <span className="text-yellow-400">{weatherConditions.wind.direction}°@{weatherConditions.wind.speed}kts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temperature:</span>
                    <span className="text-orange-400">{weatherConditions.temperature}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Altimeter:</span>
                    <span className="text-purple-400">{weatherConditions.pressure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className={
                      weatherConditions.flightCategory === 'VFR' ? 'text-green-400' :
                      weatherConditions.flightCategory === 'MVFR' ? 'text-yellow-400' :
                      'text-red-400'
                    }>
                      {weatherConditions.flightCategory}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aircraft Mix */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Aircraft Mix Today</h4>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={operationalTrends}
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                    dataKey="count"
                    label={({name, percentage}) => `${name}: ${percentage}%`}
                  >
                    {operationalTrends.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={
                        ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'][index % 5]
                      } />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Operational Metrics */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Today's Operations</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Go-Arounds</div>
                  <div className="text-red-400 font-bold">{airspaceMetrics.goArounds}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Diversions</div>
                  <div className="text-orange-400 font-bold">{airspaceMetrics.diversions}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Weather Delays</div>
                  <div className="text-yellow-400 font-bold">{airspaceMetrics.weatherDelays}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Traffic Delays</div>
                  <div className="text-blue-400 font-bold">{airspaceMetrics.trafficDelays}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTrafficControlATC;