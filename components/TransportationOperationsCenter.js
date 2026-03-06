import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Car, MapPin, Clock, TrendingUp, AlertTriangle, CheckCircle, Zap, Activity, Navigation, Eye, Settings, Users } from 'lucide-react';

const TransportationOperationsCenter = () => {
  const [transportationStatus, setTransportationStatus] = useState({
    totalVehicles: 487,
    vehiclesInService: 423,
    onTimePerformance: 94.2,
    averageSpeed: 28.5, // km/h
    fuelEfficiency: 87.3,
    trafficIncidents: 12,
    routeOptimization: 91.7,
    passengersSatisfaction: 96.1
  });

  const [fleetOperations, setFleetOperations] = useState([
    {
      id: 'BUS-001',
      type: 'City Bus',
      route: 'Route 45 - Downtown Express',
      driver: 'Michael Johnson',
      status: 'in-service',
      location: 'Main Street & 5th Ave',
      passengers: 32,
      capacity: 45,
      nextStop: 'Central Station',
      eta: '14:35',
      fuelLevel: 78,
      speed: 35, // km/h
      delay: 2, // minutes
      temperature: 22.1
    },
    {
      id: 'BUS-002',
      type: 'City Bus',
      route: 'Route 12 - University Line',
      driver: 'Sarah Williams',
      status: 'in-service',
      location: 'University Campus',
      passengers: 28,
      capacity: 40,
      nextStop: 'Library Stop',
      eta: '14:42',
      fuelLevel: 65,
      speed: 25,
      delay: 0,
      temperature: 21.8
    },
    {
      id: 'TRAM-001',
      type: 'Tram',
      route: 'Line 7 - City Circle',
      driver: 'Robert Chen',
      status: 'in-service',
      location: 'Commerce District',
      passengers: 89,
      capacity: 120,
      nextStop: 'City Hall',
      eta: '14:38',
      fuelLevel: 92, // Battery %
      speed: 22,
      delay: -1, // early
      temperature: 20.5
    },
    {
      id: 'BUS-003',
      type: 'Express Bus',
      route: 'Route 88 - Airport Express',
      driver: 'Amanda Rodriguez',
      status: 'maintenance',
      location: 'Central Depot',
      passengers: 0,
      capacity: 55,
      nextStop: 'N/A',
      eta: 'N/A',
      fuelLevel: 45,
      speed: 0,
      delay: 0,
      temperature: 18.2
    },
    {
      id: 'METRO-001',
      type: 'Metro Train',
      route: 'Blue Line - North-South',
      driver: 'David Thompson',
      status: 'in-service',
      location: 'Midtown Station',
      passengers: 156,
      capacity: 200,
      nextStop: 'Financial District',
      eta: '14:40',
      fuelLevel: 88,
      speed: 45,
      delay: 3,
      temperature: 24.0
    }
  ]);

  const [trafficManagement, setTrafficManagement] = useState([
    {
      id: 'INT-001',
      location: 'Main St & Broadway',
      type: 'Smart Intersection',
      status: 'optimal',
      trafficFlow: 89,
      waitTime: 32, // seconds
      greenRatio: 68,
      incidents: 0,
      peakHour: false,
      cameras: 4,
      sensors: 8
    },
    {
      id: 'INT-002',
      location: 'Highway 101 & Oak Ave',
      type: 'Highway Junction',
      status: 'congested',
      trafficFlow: 45,
      waitTime: 85,
      greenRatio: 45,
      incidents: 1,
      peakHour: true,
      cameras: 6,
      sensors: 12
    },
    {
      id: 'INT-003',
      location: 'University Dr & College St',
      type: 'Campus Intersection',
      status: 'optimal',
      trafficFlow: 92,
      waitTime: 28,
      greenRatio: 72,
      incidents: 0,
      peakHour: false,
      cameras: 3,
      sensors: 6
    },
    {
      id: 'INT-004',
      location: 'Airport Rd & Terminal Way',
      type: 'Airport Access',
      status: 'moderate',
      trafficFlow: 67,
      waitTime: 45,
      greenRatio: 58,
      incidents: 0,
      peakHour: false,
      cameras: 8,
      sensors: 16
    },
    {
      id: 'INT-005',
      location: 'Downtown Core & Central',
      type: 'City Center',
      status: 'congested',
      trafficFlow: 34,
      waitTime: 98,
      greenRatio: 42,
      incidents: 2,
      peakHour: true,
      cameras: 12,
      sensors: 20
    }
  ]);

  const [routePerformance, setRoutePerformance] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      onTime: 93.8,
      avgSpeed: 27.2,
      satisfaction: 95.4,
      efficiency: 86.9
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      onTime: 94.1,
      avgSpeed: 28.1,
      satisfaction: 95.7,
      efficiency: 87.2
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      onTime: 94.0,
      avgSpeed: 28.3,
      satisfaction: 95.9,
      efficiency: 87.1
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      onTime: 94.3,
      avgSpeed: 28.7,
      satisfaction: 96.0,
      efficiency: 87.5
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      onTime: 94.2,
      avgSpeed: 28.5,
      satisfaction: 96.1,
      efficiency: 87.3
    },
    {
      time: new Date().toLocaleTimeString(),
      onTime: 94.2,
      avgSpeed: 28.5,
      satisfaction: 96.1,
      efficiency: 87.3
    }
  ]);

  const [transportationAlerts, setTransportationAlerts] = useState([
    {
      id: 'TRA-001',
      severity: 'warning',
      type: 'Traffic Congestion',
      message: 'Heavy congestion detected on Highway 101 & Oak Ave - rerouting vehicles',
      timestamp: new Date(),
      status: 'active',
      location: 'Highway 101',
      impact: 'high'
    },
    {
      id: 'TRA-002',
      severity: 'caution',
      type: 'Vehicle Maintenance',
      message: 'Express Bus BUS-003 scheduled for maintenance - service suspended',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      location: 'Central Depot',
      impact: 'medium'
    },
    {
      id: 'TRA-003',
      severity: 'info',
      type: 'Route Optimization',
      message: 'AI route optimization system activated - efficiency increased 3.2%',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      location: 'System Wide',
      impact: 'positive'
    }
  ]);

  const [passengerData, setPassengerData] = useState([
    {
      route: 'Route 45',
      totalPassengers: 1847,
      avgOccupancy: 71,
      peakTime: '08:30',
      satisfaction: 96.2,
      onTimeRate: 94.8
    },
    {
      route: 'Route 12',
      totalPassengers: 1634,
      avgOccupancy: 70,
      peakTime: '08:45',
      satisfaction: 95.7,
      onTimeRate: 93.9
    },
    {
      route: 'Line 7',
      totalPassengers: 2156,
      avgOccupancy: 74,
      peakTime: '08:15',
      satisfaction: 97.1,
      onTimeRate: 95.6
    },
    {
      route: 'Route 88',
      totalPassengers: 892,
      avgOccupancy: 65,
      peakTime: '06:30',
      satisfaction: 94.8,
      onTimeRate: 92.3
    },
    {
      route: 'Blue Line',
      totalPassengers: 3247,
      avgOccupancy: 78,
      peakTime: '08:00',
      satisfaction: 96.8,
      onTimeRate: 96.1
    }
  ]);

  const [dispatchTeam, setDispatchTeam] = useState([
    {
      name: 'Control Manager Wilson',
      position: 'Transportation Operations Manager',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Central Control',
      experience: '14 years'
    },
    {
      name: 'Dispatcher Martinez',
      position: 'Fleet Dispatcher',
      shift: 'Day Shift',
      status: 'active',
      location: 'Dispatch Center',
      experience: '9 years'
    },
    {
      name: 'Traffic Controller Kim',
      position: 'Traffic Management Specialist',
      shift: 'Day Shift',
      status: 'monitoring',
      location: 'Traffic Control',
      experience: '7 years'
    },
    {
      name: 'Route Coordinator Chen',
      position: 'Route Optimization Specialist',
      shift: 'Day Shift',
      status: 'analyzing',
      location: 'Planning Office',
      experience: '11 years'
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    gpsAccuracy: 99.2, // percentage
    communicationUptime: 99.7,
    trafficSignalSync: 94.8,
    routeOptimizationAI: 91.5,
    predictiveAnalytics: 88.9,
    realTimeUpdates: 99.1,
    passengerInformation: 97.3,
    emergencyResponse: 98.6
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update transportation status
      setTransportationStatus(prev => ({
        ...prev,
        vehiclesInService: Math.max(400, Math.min(450, prev.vehiclesInService + Math.floor((Math.random() - 0.5) * 6))),
        onTimePerformance: Math.max(90, Math.min(97, prev.onTimePerformance + (Math.random() - 0.5) * 0.5)),
        averageSpeed: Math.max(25, Math.min(35, prev.averageSpeed + (Math.random() - 0.5) * 1)),
        fuelEfficiency: Math.max(82, Math.min(92, prev.fuelEfficiency + (Math.random() - 0.5) * 0.5)),
        trafficIncidents: Math.max(5, Math.min(25, prev.trafficIncidents + Math.floor((Math.random() - 0.7) * 2))),
        routeOptimization: Math.max(88, Math.min(95, prev.routeOptimization + (Math.random() - 0.5) * 0.5))
      }));

      // Update fleet operations
      setFleetOperations(prev => prev.map(vehicle => {
        if (vehicle.status === 'in-service') {
          return {
            ...vehicle,
            passengers: Math.max(5, Math.min(vehicle.capacity * 0.9, vehicle.passengers + Math.floor((Math.random() - 0.5) * 8))),
            fuelLevel: Math.max(20, vehicle.fuelLevel - Math.random() * 0.5),
            speed: Math.max(15, Math.min(50, vehicle.speed + (Math.random() - 0.5) * 5)),
            delay: Math.max(-2, Math.min(8, vehicle.delay + Math.floor((Math.random() - 0.6) * 2)))
          };
        }
        return vehicle;
      }));

      // Update traffic management
      setTrafficManagement(prev => prev.map(intersection => {
        return {
          ...intersection,
          trafficFlow: Math.max(30, Math.min(100, intersection.trafficFlow + Math.floor((Math.random() - 0.5) * 10))),
          waitTime: Math.max(20, Math.min(120, intersection.waitTime + Math.floor((Math.random() - 0.5) * 10))),
          greenRatio: Math.max(40, Math.min(80, intersection.greenRatio + Math.floor((Math.random() - 0.5) * 5)))
        };
      }));

      // Update route performance
      const newPerformanceData = {
        time: new Date().toLocaleTimeString(),
        onTime: transportationStatus.onTimePerformance,
        avgSpeed: transportationStatus.averageSpeed,
        satisfaction: transportationStatus.passengersSatisfaction,
        efficiency: transportationStatus.fuelEfficiency
      };
      
      setRoutePerformance(prev => [...prev.slice(1), newPerformanceData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        gpsAccuracy: Math.max(98, Math.min(100, prev.gpsAccuracy + (Math.random() - 0.5) * 0.1)),
        communicationUptime: Math.max(99, Math.min(100, prev.communicationUptime + (Math.random() - 0.5) * 0.05)),
        trafficSignalSync: Math.max(90, Math.min(98, prev.trafficSignalSync + (Math.random() - 0.5) * 0.5)),
        routeOptimizationAI: Math.max(85, Math.min(95, prev.routeOptimizationAI + (Math.random() - 0.5) * 0.5))
      }));

      // Occasionally add new transportation alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['Traffic Congestion', 'Vehicle Maintenance', 'Route Optimization', 'Signal Malfunction'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        const locations = ['Highway 101', 'Downtown Core', 'University District', 'Airport Area', 'Central Station'];
        
        const newAlert = {
          id: `TRA-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time transportation operations alert',
          timestamp: new Date(),
          status: 'active',
          location: locations[Math.floor(Math.random() * locations.length)],
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setTransportationAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [transportationStatus.onTimePerformance, transportationStatus.averageSpeed, transportationStatus.passengersSatisfaction, transportationStatus.fuelEfficiency]);

  const getVehicleStatusColor = (status) => {
    switch (status) {
      case 'in-service': return '#10B981';
      case 'maintenance': return '#8B5CF6';
      case 'delayed': return '#F59E0B';
      case 'out-of-service': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getTrafficStatusColor = (status) => {
    switch (status) {
      case 'optimal': return '#10B981';
      case 'moderate': return '#3B82F6';
      case 'congested': return '#F59E0B';
      case 'blocked': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'caution': return '#3B82F6';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getDelayColor = (delay) => {
    if (delay <= 0) return '#10B981'; // On time or early
    if (delay <= 3) return '#3B82F6'; // Minor delay
    if (delay <= 5) return '#F59E0B'; // Moderate delay
    return '#EF4444'; // Major delay
  };

  const vehicleTypeDistribution = [
    { name: 'City Bus', value: 45, color: '#3B82F6' },
    { name: 'Metro Train', value: 25, color: '#10B981' },
    { name: 'Tram', value: 20, color: '#8B5CF6' },
    { name: 'Express Bus', value: 10, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Car className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">TRANSPORTATION OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time traffic management, fleet dispatch, and intelligent transportation systems</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{transportationStatus.onTimePerformance.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">ON-TIME</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{transportationStatus.vehiclesInService}</div>
            <div className="text-xs text-gray-400">IN SERVICE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{transportationStatus.averageSpeed.toFixed(1)}</div>
            <div className="text-xs text-gray-400">AVG SPEED</div>
          </div>
        </div>
      </div>

      {/* Transportation KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Car className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">FLEET</span>
          </div>
          <div className="text-xl font-bold text-white">{transportationStatus.totalVehicles}</div>
          <div className="text-xs text-gray-400">Total Vehicles</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">ACTIVE</span>
          </div>
          <div className="text-xl font-bold text-white">{transportationStatus.vehiclesInService}</div>
          <div className="text-xs text-gray-400">In Service</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">INCIDENTS</span>
          </div>
          <div className="text-xl font-bold text-white">{transportationStatus.trafficIncidents}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">EFFICIENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{transportationStatus.fuelEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Fuel/Energy</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">OPTIMIZATION</span>
          </div>
          <div className="text-xl font-bold text-white">{transportationStatus.routeOptimization.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Route AI</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">SATISFACTION</span>
          </div>
          <div className="text-xl font-bold text-white">{transportationStatus.passengersSatisfaction.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Passengers</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Fleet Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2 text-blue-400" />
            FLEET OPERATIONS
          </h3>
          <div className="space-y-3">
            {fleetOperations.map(vehicle => (
              <div key={vehicle.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getVehicleStatusColor(vehicle.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{vehicle.id}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getVehicleStatusColor(vehicle.status)}20`, 
                      color: getVehicleStatusColor(vehicle.status) 
                    }}>
                      {vehicle.status.toUpperCase().replace('-', ' ')}
                    </span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getDelayColor(vehicle.delay)}20`, 
                      color: getDelayColor(vehicle.delay) 
                    }}>
                      {vehicle.delay > 0 ? `+${vehicle.delay}min` : vehicle.delay === 0 ? 'ON TIME' : `${vehicle.delay}min`}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  {vehicle.route}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Driver</span>
                    <span className="text-blue-400">{vehicle.driver.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Speed</span>
                    <span className="text-green-400">{vehicle.speed} km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Passengers</span>
                    <span className="text-purple-400">{vehicle.passengers}/{vehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fuel/Battery</span>
                    <span className="text-white">{vehicle.fuelLevel.toFixed(0)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Next: {vehicle.nextStop}</span>
                  <span className="text-gray-500">ETA: {vehicle.eta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Management */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Navigation className="w-5 h-5 mr-2 text-green-400" />
            TRAFFIC MANAGEMENT
          </h3>
          <div className="space-y-3">
            {trafficManagement.map(intersection => (
              <div key={intersection.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getTrafficStatusColor(intersection.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{intersection.id}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getTrafficStatusColor(intersection.status)}20`, 
                      color: getTrafficStatusColor(intersection.status) 
                    }}>
                      {intersection.status.toUpperCase()}
                    </span>
                    {intersection.incidents > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {intersection.incidents} Incident{intersection.incidents > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  {intersection.location}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Flow</span>
                    <span className="text-green-400">{intersection.trafficFlow}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wait Time</span>
                    <span className="text-blue-400">{intersection.waitTime}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Green Ratio</span>
                    <span className="text-purple-400">{intersection.greenRatio}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white">{intersection.type.split(' ')[0]}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Cameras: {intersection.cameras}</span>
                  <span className="text-gray-500">Sensors: {intersection.sensors}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Passenger Data & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            PASSENGER DATA & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {passengerData.slice(0, 4).map((route, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{route.route}</span>
                  <span className="text-xs text-gray-400">{route.avgOccupancy}% occupancy</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Passengers</span>
                    <span className="text-blue-400">{route.totalPassengers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Peak Time</span>
                    <span className="text-green-400">{route.peakTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">Satisfaction: {route.satisfaction.toFixed(1)}%</span>
                  <span className="text-gray-500">On-Time: {route.onTimeRate.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transportation Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">System Alerts</div>
            <div className="space-y-2">
              {transportationAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.location}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transportation Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Performance Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME PERFORMANCE METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={routePerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="onTime" 
                stroke="#10B981" 
                strokeWidth={3}
                name="On-Time Performance %"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="avgSpeed" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Average Speed (km/h)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Passenger Satisfaction %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Fleet Composition & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">FLEET COMPOSITION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={vehicleTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {vehicleTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Fleet Composition']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {vehicleTypeDistribution.map((vehicle, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: vehicle.color }}
                    />
                    <span className="text-gray-400 text-sm">{vehicle.name}</span>
                  </div>
                  <span className="text-white font-semibold">{vehicle.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">GPS Accuracy</span>
                    <span className="text-green-400">{systemMetrics.gpsAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Communication</span>
                    <span className="text-blue-400">{systemMetrics.communicationUptime.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Traffic Signals</span>
                    <span className="text-green-400">{systemMetrics.trafficSignalSync.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Route AI</span>
                    <span className="text-purple-400">{systemMetrics.routeOptimizationAI.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Transportation Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Transportation Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Navigation className="w-3 h-3 inline mr-1" />
                  Route Optimization
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Car className="w-3 h-3 inline mr-1" />
                  Fleet Dispatch
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Traffic Monitoring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationOperationsCenter;