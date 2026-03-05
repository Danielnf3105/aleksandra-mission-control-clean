// RailwayTrafficControl.js - Railway Traffic Control Center & Train Dispatch System Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const RailwayTrafficControl = () => {
  const [activeTrains, setActiveTrains] = useState([
    {
      id: 'train_001',
      number: 'AMTK 163',
      service: 'Acela Express',
      type: 'PASSENGER',
      status: 'ON_TIME',
      speed: 125, // mph
      maxSpeed: 150,
      direction: 'NORTHBOUND',
      origin: 'New York Penn',
      destination: 'Boston South',
      currentLocation: 'Mile 156.2 - New Haven',
      nextStation: 'Hartford',
      etaNextStation: Date.now() + 23 * 60 * 1000,
      scheduledArrival: Date.now() + 25 * 60 * 1000,
      delay: 0, // minutes
      passengers: 287,
      capacity: 304,
      crew: 6,
      consist: '8 cars',
      engineer: 'J. Smith',
      conductor: 'M. Johnson',
      trackNumber: 'Track 1',
      signal: 'GREEN',
      lastUpdate: Date.now() - 1 * 60 * 1000,
      dispatcher: 'Boston Division',
      priority: 'HIGH'
    },
    {
      id: 'train_002',
      number: 'CSX Q100',
      service: 'Freight - Intermodal',
      type: 'FREIGHT',
      status: 'DELAYED',
      speed: 45,
      maxSpeed: 60,
      direction: 'WESTBOUND',
      origin: 'Port Elizabeth',
      destination: 'Chicago Yard',
      currentLocation: 'Mile 89.7 - Cleveland East',
      nextStation: 'Toledo Junction',
      etaNextStation: Date.now() + 2 * 60 * 60 * 1000,
      scheduledArrival: Date.now() + 90 * 60 * 1000,
      delay: 35,
      passengers: 0,
      capacity: 0,
      crew: 2,
      consist: '125 cars',
      engineer: 'R. Wilson',
      conductor: 'A. Davis',
      trackNumber: 'Main 2',
      signal: 'YELLOW',
      lastUpdate: Date.now() - 3 * 60 * 1000,
      dispatcher: 'Midwest Division',
      priority: 'MEDIUM',
      cargoType: 'Containers',
      tonnage: 8750
    },
    {
      id: 'train_003',
      number: 'BNSF 7394',
      service: 'Coal Unit Train',
      type: 'FREIGHT',
      status: 'STOPPED',
      speed: 0,
      maxSpeed: 70,
      direction: 'SOUTHBOUND',
      origin: 'Powder River Basin',
      destination: 'Houston Terminal',
      currentLocation: 'Mile 234.8 - Siding 12',
      nextStation: 'Junction City',
      etaNextStation: Date.now() + 45 * 60 * 1000,
      scheduledArrival: Date.now() + 30 * 60 * 1000,
      delay: 15,
      passengers: 0,
      capacity: 0,
      crew: 3,
      consist: '135 cars',
      engineer: 'T. Brown',
      conductor: 'L. Garcia',
      trackNumber: 'Siding 12',
      signal: 'RED',
      lastUpdate: Date.now() - 2 * 60 * 1000,
      dispatcher: 'Central Division',
      priority: 'LOW',
      cargoType: 'Coal',
      tonnage: 15420
    },
    {
      id: 'train_004',
      number: 'METRA 1247',
      service: 'Union Pacific North',
      type: 'COMMUTER',
      status: 'ON_TIME',
      speed: 65,
      maxSpeed: 79,
      direction: 'INBOUND',
      origin: 'Kenosha',
      destination: 'Chicago Union',
      currentLocation: 'Mile 12.4 - Evanston',
      nextStation: 'Rogers Park',
      etaNextStation: Date.now() + 8 * 60 * 1000,
      scheduledArrival: Date.now() + 8 * 60 * 1000,
      delay: 0,
      passengers: 156,
      capacity: 180,
      crew: 2,
      consist: '6 cars',
      engineer: 'K. Martinez',
      conductor: 'D. Thompson',
      trackNumber: 'Track 2',
      signal: 'GREEN',
      lastUpdate: Date.now() - 30 * 1000,
      dispatcher: 'Chicago Metro',
      priority: 'HIGH'
    },
    {
      id: 'train_005',
      number: 'UP 5847',
      service: 'Autorack Express',
      type: 'FREIGHT',
      status: 'ON_TIME',
      speed: 55,
      maxSpeed: 70,
      direction: 'EASTBOUND',
      origin: 'Los Angeles',
      destination: 'Detroit Yard',
      currentLocation: 'Mile 567.3 - Kansas City West',
      nextStation: 'Topeka Junction',
      etaNextStation: Date.now() + 75 * 60 * 1000,
      scheduledArrival: Date.now() + 72 * 60 * 1000,
      delay: -3,
      passengers: 0,
      capacity: 0,
      crew: 2,
      consist: '89 cars',
      engineer: 'C. Lee',
      conductor: 'P. Anderson',
      trackNumber: 'Main 1',
      signal: 'GREEN',
      lastUpdate: Date.now() - 45 * 1000,
      dispatcher: 'Western Division',
      priority: 'MEDIUM',
      cargoType: 'Automobiles',
      tonnage: 6890
    }
  ]);

  const [dispatchers, setDispatchers] = useState([
    {
      id: 'disp_001',
      name: 'Sarah Mitchell',
      territory: 'Northeast Corridor',
      shift: 'DAY_SHIFT',
      status: 'ACTIVE',
      trainsControlled: 12,
      milesControlled: 234.7,
      experience: '8 years',
      certification: 'Chief Dispatcher',
      lastBreak: Date.now() - 2.5 * 60 * 60 * 1000,
      movementsToday: 47,
      delaysHandled: 3,
      emergencyStops: 0
    },
    {
      id: 'disp_002',
      name: 'Michael Rodriguez',
      territory: 'Midwest Division',
      shift: 'DAY_SHIFT',
      status: 'ACTIVE',
      trainsControlled: 18,
      milesControlled: 456.2,
      experience: '12 years',
      certification: 'Senior Dispatcher',
      lastBreak: Date.now() - 1.8 * 60 * 60 * 1000,
      movementsToday: 62,
      delaysHandled: 7,
      emergencyStops: 1
    },
    {
      id: 'disp_003',
      name: 'Jennifer Park',
      territory: 'Western Division',
      shift: 'DAY_SHIFT',
      status: 'BREAK',
      trainsControlled: 0,
      milesControlled: 678.5,
      experience: '6 years',
      certification: 'Dispatcher',
      lastBreak: Date.now(),
      movementsToday: 38,
      delaysHandled: 2,
      emergencyStops: 0
    },
    {
      id: 'disp_004',
      name: 'Robert Chen',
      territory: 'Chicago Metro',
      shift: 'DAY_SHIFT',
      status: 'ACTIVE',
      trainsControlled: 24,
      milesControlled: 89.3,
      experience: '15 years',
      certification: 'Chief Dispatcher',
      lastBreak: Date.now() - 3.2 * 60 * 60 * 1000,
      movementsToday: 78,
      delaysHandled: 5,
      emergencyStops: 0
    }
  ]);

  const [trackSections, setTrackSections] = useState([
    {
      id: 'track_001',
      name: 'Main Line East',
      milepost: '125.0 - 167.5',
      status: 'CLEAR',
      occupancy: 'VACANT',
      speed_limit: 110,
      signalStatus: 'GREEN',
      maintenance: false,
      weather: 'CLEAR',
      temperature: 68,
      trackCondition: 'GOOD',
      lastInspection: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 23 * 24 * 60 * 60 * 1000,
      trafficDensity: 'MODERATE'
    },
    {
      id: 'track_002',
      name: 'Freight Corridor West',
      milepost: '456.2 - 523.8',
      status: 'OCCUPIED',
      occupancy: 'CSX Q100',
      speed_limit: 60,
      signalStatus: 'YELLOW',
      maintenance: false,
      weather: 'LIGHT_RAIN',
      temperature: 54,
      trackCondition: 'FAIR',
      lastInspection: Date.now() - 12 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 18 * 24 * 60 * 60 * 1000,
      trafficDensity: 'HIGH'
    },
    {
      id: 'track_003',
      name: 'Siding Complex 12',
      milepost: '234.5 - 235.2',
      status: 'OCCUPIED',
      occupancy: 'BNSF 7394',
      speed_limit: 25,
      signalStatus: 'RED',
      maintenance: false,
      weather: 'CLEAR',
      temperature: 72,
      trackCondition: 'EXCELLENT',
      lastInspection: Date.now() - 3 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 27 * 24 * 60 * 60 * 1000,
      trafficDensity: 'LOW'
    },
    {
      id: 'track_004',
      name: 'Commuter Line North',
      milepost: '0.0 - 25.7',
      status: 'CLEAR',
      occupancy: 'VACANT',
      speed_limit: 79,
      signalStatus: 'GREEN',
      maintenance: true,
      weather: 'CLEAR',
      temperature: 65,
      trackCondition: 'GOOD',
      lastInspection: Date.now() - 2 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 2 * 24 * 60 * 60 * 1000,
      trafficDensity: 'HIGH'
    }
  ]);

  const [railOperations, setRailOperations] = useState({
    totalTrains: activeTrains.length,
    onTimePerformance: 78.4, // percentage
    averageDelay: 12.7, // minutes
    totalPassengers: 2847,
    totalCargo: 156789, // tons
    fuelEfficiency: 92.3, // percentage
    safetyIncidents: 0,
    emergencyStops: 1,
    maintenanceWindows: 3,
    weatherDelays: 2,
    mechanicalDelays: 4,
    trafficDensity: 'MODERATE',
    systemCapacity: 87.2, // percentage
    crewAvailability: 94.8,
    equipmentAvailability: 91.5
  });

  const [signals, setSignals] = useState([
    {
      id: 'signal_001',
      location: 'MP 156.3 East',
      aspect: 'GREEN',
      indication: 'CLEAR',
      nextSignal: 'MP 159.7',
      speed: 'TRACK_SPEED',
      type: 'AUTOMATIC',
      lastChange: Date.now() - 5 * 60 * 1000,
      status: 'NORMAL',
      maintenance: false
    },
    {
      id: 'signal_002',
      location: 'MP 89.4 West',
      aspect: 'YELLOW',
      indication: 'APPROACH',
      nextSignal: 'MP 91.8',
      speed: '30 MPH',
      type: 'AUTOMATIC',
      lastChange: Date.now() - 12 * 60 * 1000,
      status: 'NORMAL',
      maintenance: false
    },
    {
      id: 'signal_003',
      location: 'MP 234.8 Siding',
      aspect: 'RED',
      indication: 'STOP',
      nextSignal: 'MP 236.1',
      speed: 'STOP',
      type: 'CONTROLLED',
      lastChange: Date.now() - 18 * 60 * 1000,
      status: 'NORMAL',
      maintenance: false
    },
    {
      id: 'signal_004',
      location: 'MP 12.6 North',
      aspect: 'GREEN',
      indication: 'CLEAR',
      nextSignal: 'MP 15.2',
      speed: 'TRACK_SPEED',
      type: 'AUTOMATIC',
      lastChange: Date.now() - 2 * 60 * 1000,
      status: 'NORMAL',
      maintenance: false
    }
  ]);

  const [trafficTrends, setTrafficTrends] = useState([]);
  const [performanceMetrics, setPerformanceMetrics] = useState([]);

  const generateTrafficTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        passenger_trains: Math.floor(Math.random() * 8) + 2,
        freight_trains: Math.floor(Math.random() * 15) + 5,
        commuter_trains: Math.floor(Math.random() * 12) + 3,
        on_time_percentage: Math.random() * 20 + 75, // 75-95%
        average_delay: Math.random() * 15 + 5, // 5-20 minutes
        total_passengers: Math.floor(Math.random() * 2000) + 1000
      });
    }
    return data;
  };

  const generatePerformanceMetrics = () => {
    return [
      { category: 'Passenger', count: 8, onTime: 87.5, avgDelay: 8.2 },
      { category: 'Freight', count: 23, onTime: 72.4, avgDelay: 15.7 },
      { category: 'Commuter', count: 15, onTime: 89.3, avgDelay: 4.1 },
      { category: 'High Speed', count: 4, onTime: 94.2, avgDelay: 2.8 }
    ];
  };

  useEffect(() => {
    setTrafficTrends(generateTrafficTrends());
    setPerformanceMetrics(generatePerformanceMetrics());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update train positions and status
      setActiveTrains(prev => prev.map(train => {
        let newSpeed = train.speed;
        let newDelay = train.delay;
        let newStatus = train.status;
        let newSignal = train.signal;
        
        if (train.status !== 'STOPPED') {
          newSpeed = Math.max(0, Math.min(train.maxSpeed, train.speed + (Math.random() - 0.5) * 10));
          
          if (train.status === 'DELAYED') {
            newDelay = Math.max(0, train.delay + (Math.random() - 0.7) * 5);
            if (newDelay < 5) {
              newStatus = 'ON_TIME';
            }
          }
        } else {
          if (Math.random() > 0.8) {
            newStatus = 'DELAYED';
            newSpeed = Math.random() * 30 + 10;
            newSignal = 'YELLOW';
          }
        }

        // Randomly change signals
        if (Math.random() > 0.9) {
          const signals = ['GREEN', 'YELLOW', 'RED'];
          newSignal = signals[Math.floor(Math.random() * signals.length)];
        }

        return {
          ...train,
          speed: newSpeed,
          delay: newDelay,
          status: newStatus,
          signal: newSignal,
          lastUpdate: Date.now()
        };
      }));

      // Update dispatchers
      setDispatchers(prev => prev.map(dispatcher => ({
        ...dispatcher,
        trainsControlled: dispatcher.status === 'ACTIVE' ? 
          Math.max(0, dispatcher.trainsControlled + Math.floor((Math.random() - 0.5) * 4)) : 0,
        movementsToday: dispatcher.movementsToday + Math.floor(Math.random() * 2)
      })));

      // Update track sections
      setTrackSections(prev => prev.map(track => {
        let newStatus = track.status;
        let newOccupancy = track.occupancy;
        let newSignal = track.signalStatus;
        
        if (track.status === 'OCCUPIED' && Math.random() > 0.85) {
          newStatus = 'CLEAR';
          newOccupancy = 'VACANT';
          newSignal = 'GREEN';
        } else if (track.status === 'CLEAR' && Math.random() > 0.9) {
          newStatus = 'OCCUPIED';
          newOccupancy = 'Train Present';
          newSignal = 'RED';
        }

        return {
          ...track,
          status: newStatus,
          occupancy: newOccupancy,
          signalStatus: newSignal,
          temperature: Math.max(32, Math.min(95, track.temperature + (Math.random() - 0.5) * 4))
        };
      }));

      // Update rail operations metrics
      setRailOperations(prev => ({
        ...prev,
        onTimePerformance: Math.max(70, Math.min(95, prev.onTimePerformance + (Math.random() - 0.5) * 2)),
        averageDelay: Math.max(5, Math.min(25, prev.averageDelay + (Math.random() - 0.5) * 1.5)),
        systemCapacity: Math.max(70, Math.min(100, prev.systemCapacity + (Math.random() - 0.5) * 3)),
        crewAvailability: Math.max(85, Math.min(100, prev.crewAvailability + (Math.random() - 0.5) * 1))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTrainStatusColor = (status) => {
    switch (status) {
      case 'ON_TIME': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'DELAYED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'EARLY': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'STOPPED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CANCELLED': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSignalColor = (aspect) => {
    switch (aspect) {
      case 'GREEN': return 'text-green-400';
      case 'YELLOW': return 'text-yellow-400';
      case 'RED': return 'text-red-400';
      case 'DARK': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getDispatcherStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BREAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFF_DUTY': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTrackStatusColor = (status) => {
    switch (status) {
      case 'CLEAR': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'OCCUPIED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OUT_OF_SERVICE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatETA = (eta) => {
    if (!eta) return 'N/A';
    const diff = eta - Date.now();
    if (diff < 0) return 'Overdue';
    if (diff < 60000) return '<1m';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    return `${Math.floor(diff / 3600000)}h ${Math.floor((diff % 3600000) / 60000)}m`;
  };

  const formatDelay = (delay) => {
    if (delay === 0) return 'On Time';
    if (delay > 0) return `+${delay}m`;
    return `${delay}m Early`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚂 RAILWAY TRAFFIC CONTROL CENTER (CTC)
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${
            railOperations.onTimePerformance >= 85 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
            railOperations.onTimePerformance >= 75 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            {railOperations.onTimePerformance.toFixed(1)}% OTP
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {railOperations.totalTrains} TRAINS
          </div>
          <div className="text-sm text-gray-400 font-mono">
            IVU.rail integrated control centre
          </div>
        </div>
      </div>

      {/* Railway Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ON TIME PERFORMANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {railOperations.onTimePerformance.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                {railOperations.averageDelay.toFixed(1)}m avg delay
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ACTIVE TRAINS</div>
              <div className="text-2xl font-bold text-blue-100">
                {railOperations.totalTrains}
              </div>
              <div className="text-xs text-blue-300">
                {railOperations.systemCapacity.toFixed(1)}% capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">🚂</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">PASSENGERS TODAY</div>
              <div className="text-2xl font-bold text-purple-100">
                {(railOperations.totalPassengers / 1000).toFixed(1)}K
              </div>
              <div className="text-xs text-purple-300">
                {(railOperations.totalCargo / 1000).toFixed(0)}K tons cargo
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SAFETY</div>
              <div className="text-2xl font-bold text-orange-100">
                {railOperations.safetyIncidents}
              </div>
              <div className="text-xs text-orange-300">
                incidents today
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>
      </div>

      {/* Active Trains and Dispatchers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Trains */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚂 ACTIVE TRAINS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeTrains.map((train) => (
              <div key={train.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{train.number}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getTrainStatusColor(train.status)}`}>
                      {train.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {train.type}
                    </span>
                    <span className={`text-lg ${getSignalColor(train.signal)}`}>
                      ●
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(train.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">{train.service}</div>
                <div className="text-xs text-cyan-400 mb-3">
                  {train.origin} → {train.destination}
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Speed</div>
                    <div className="text-green-400">{train.speed} mph</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Direction</div>
                    <div className="text-yellow-400">{train.direction}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Track</div>
                    <div className="text-orange-400">{train.trackNumber}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Location</div>
                    <div className="text-blue-400">{train.currentLocation}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Next Station</div>
                    <div className="text-pink-400">{train.nextStation}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">ETA</div>
                    <div className="text-indigo-400">{formatETA(train.etaNextStation)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Delay</div>
                    <div className={train.delay > 0 ? 'text-red-400' : train.delay < 0 ? 'text-green-400' : 'text-gray-400'}>
                      {formatDelay(train.delay)}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Priority</div>
                    <div className={train.priority === 'HIGH' ? 'text-red-400' : train.priority === 'MEDIUM' ? 'text-yellow-400' : 'text-green-400'}>
                      {train.priority}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Consist</div>
                    <div className="text-cyan-400">{train.consist}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Engineer</div>
                    <div className="text-purple-400">{train.engineer}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Dispatcher</div>
                    <div className="text-yellow-400">{train.dispatcher}</div>
                  </div>
                </div>

                {train.type === 'PASSENGER' || train.type === 'COMMUTER' ? (
                  <div className="text-xs">
                    <span className="text-gray-400">Passengers: </span>
                    <span className="text-green-400">{train.passengers}/{train.capacity}</span>
                  </div>
                ) : (
                  <div className="text-xs">
                    <span className="text-gray-400">Cargo: </span>
                    <span className="text-orange-400">{train.cargoType} ({train.tonnage?.toLocaleString()} tons)</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Train Dispatchers */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📻 TRAIN DISPATCHERS
          </h3>
          <div className="space-y-3">
            {dispatchers.map((dispatcher) => (
              <div key={dispatcher.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{dispatcher.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getDispatcherStatusColor(dispatcher.status)}`}>
                      {dispatcher.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {dispatcher.shift}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">{dispatcher.territory}</div>
                <div className="text-xs text-cyan-400 mb-3">{dispatcher.certification}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Trains Controlled</div>
                    <div className="text-green-400">{dispatcher.trainsControlled}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Miles</div>
                    <div className="text-yellow-400">{dispatcher.milesControlled}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Experience</div>
                    <div className="text-orange-400">{dispatcher.experience}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Movements Today</div>
                    <div className="text-blue-400">{dispatcher.movementsToday}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Delays Handled</div>
                    <div className="text-red-400">{dispatcher.delaysHandled}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Emergency Stops</div>
                    <div className="text-purple-400">{dispatcher.emergencyStops}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Last Break: </span>
                  <span className="text-indigo-400">{formatTime(dispatcher.lastBreak)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Track Sections and Signals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Track Sections */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛤️ TRACK SECTIONS
          </h3>
          <div className="space-y-3">
            {trackSections.map((track) => (
              <div key={track.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{track.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getTrackStatusColor(track.status)}`}>
                      {track.status}
                    </span>
                    <span className={`text-lg ${getSignalColor(track.signalStatus)}`}>
                      ●
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-3">MP {track.milepost}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Speed Limit</div>
                    <div className="text-green-400">{track.speed_limit} mph</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Occupancy</div>
                    <div className="text-yellow-400">{track.occupancy}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Condition</div>
                    <div className="text-orange-400">{track.trackCondition}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Weather</div>
                    <div className="text-blue-400">{track.weather.replace('_', ' ')}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-pink-400">{track.temperature}°F</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Traffic</div>
                    <div className="text-indigo-400">{track.trafficDensity}</div>
                  </div>
                </div>

                {track.maintenance && (
                  <div className="text-xs text-yellow-400">
                    🔧 MAINTENANCE SCHEDULED
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Signal Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚥 SIGNAL STATUS
          </h3>
          <div className="space-y-3">
            {signals.map((signal) => (
              <div key={signal.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{signal.location}</h4>
                    <span className={`text-2xl ${getSignalColor(signal.aspect)}`}>
                      ●
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {signal.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(signal.lastChange)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Aspect</div>
                    <div className={getSignalColor(signal.aspect).replace('text-', 'text-')}>
                      {signal.aspect}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Indication</div>
                    <div className="text-yellow-400">{signal.indication}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Speed</div>
                    <div className="text-orange-400">{signal.speed}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Next Signal</div>
                    <div className="text-blue-400">{signal.nextSignal}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Status: </span>
                  <span className={signal.status === 'NORMAL' ? 'text-green-400' : 'text-red-400'}>
                    {signal.status}
                  </span>
                </div>

                {signal.maintenance && (
                  <div className="text-xs text-yellow-400 mt-1">
                    🔧 MAINTENANCE REQUIRED
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Trends and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 RAILWAY TRAFFIC TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficTrends}>
              <defs>
                <linearGradient id="passengerGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="freightGradient" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="passenger_trains" 
                stackId="1"
                stroke="#10B981" 
                fill="url(#passengerGradient)" 
                name="Passenger Trains"
              />
              <Area 
                type="monotone" 
                dataKey="freight_trains" 
                stackId="2"
                stroke="#3B82F6" 
                fill="url(#freightGradient)" 
                name="Freight Trains"
              />
              <Line 
                type="monotone" 
                dataKey="commuter_trains" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Commuter Trains"
              />
              <Line 
                type="monotone" 
                dataKey="on_time_percentage" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="On-Time %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 PERFORMANCE METRICS
          </h3>
          
          <div className="space-y-4">
            {/* Performance by Category */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Performance by Category</h4>
              <div className="space-y-2">
                {performanceMetrics.map((category, index) => (
                  <div key={index} className="bg-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white">{category.category}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">{category.count} trains</span>
                        <span className={`text-xs font-bold ${
                          category.onTime >= 90 ? 'text-green-400' :
                          category.onTime >= 80 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {category.onTime.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mb-1">
                      <div 
                        className={`h-2 rounded-full ${
                          category.onTime >= 90 ? 'bg-green-400' :
                          category.onTime >= 80 ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}
                        style={{ width: `${category.onTime}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Avg delay: {category.avgDelay.toFixed(1)} minutes
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Metrics */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">System Metrics</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">System Capacity</div>
                  <div className="text-blue-400 font-bold">{railOperations.systemCapacity.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Crew Availability</div>
                  <div className="text-green-400 font-bold">{railOperations.crewAvailability.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Equipment Avail.</div>
                  <div className="text-yellow-400 font-bold">{railOperations.equipmentAvailability.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Fuel Efficiency</div>
                  <div className="text-purple-400 font-bold">{railOperations.fuelEfficiency.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Weather Delays</div>
                  <div className="text-orange-400 font-bold">{railOperations.weatherDelays}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Mech. Delays</div>
                  <div className="text-red-400 font-bold">{railOperations.mechanicalDelays}</div>
                </div>
              </div>
            </div>

            {/* Safety */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Safety & Incidents</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Safety Incidents</div>
                  <div className={`font-bold ${railOperations.safetyIncidents === 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {railOperations.safetyIncidents}
                  </div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Emergency Stops</div>
                  <div className="text-yellow-400 font-bold">{railOperations.emergencyStops}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailwayTrafficControl;