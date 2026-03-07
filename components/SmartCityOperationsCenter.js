import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Building2, Car, Zap, TrendingUp, AlertTriangle, Activity, Eye, Shield, Clock, MapPin, Settings, Users } from 'lucide-react';

const SmartCityOperationsCenter = () => {
  const [cityMetrics, setCityMetrics] = useState({
    totalPopulation: 2847392,
    activeServices: 47,
    trafficFlow: 94.2, // efficiency %
    energyConsumption: 847.3, // MW
    publicSafety: 98.7, // %
    airQuality: 'good',
    waterQuality: 'excellent',
    wasteCollection: 92.4 // efficiency %
  });

  const [trafficManagement, setTrafficManagement] = useState([
    {
      id: 'TM-001',
      intersection: 'Main St & 5th Ave',
      status: 'optimal',
      vehicles: 847,
      avgWaitTime: 28.7, // seconds
      congestionLevel: 'low',
      signalTiming: 'adaptive',
      aiOptimized: true,
      accidents: 0,
      publicTransit: 'on_time'
    },
    {
      id: 'TM-002',
      intersection: 'Highway 101 & Central',
      status: 'congested',
      vehicles: 1234,
      avgWaitTime: 67.3,
      congestionLevel: 'high',
      signalTiming: 'adaptive',
      aiOptimized: true,
      accidents: 1,
      publicTransit: 'delayed'
    },
    {
      id: 'TM-003',
      intersection: 'Broadway & Park Ave',
      status: 'optimal',
      vehicles: 567,
      avgWaitTime: 23.4,
      congestionLevel: 'low',
      signalTiming: 'fixed',
      aiOptimized: false,
      accidents: 0,
      publicTransit: 'on_time'
    },
    {
      id: 'TM-004',
      intersection: 'State St & University',
      status: 'moderate',
      vehicles: 923,
      avgWaitTime: 45.6,
      congestionLevel: 'medium',
      signalTiming: 'adaptive',
      aiOptimized: true,
      accidents: 0,
      publicTransit: 'on_time'
    },
    {
      id: 'TM-005',
      intersection: 'Industrial Blvd & Port',
      status: 'optimal',
      vehicles: 234,
      avgWaitTime: 18.9,
      congestionLevel: 'low',
      signalTiming: 'adaptive',
      aiOptimized: true,
      accidents: 0,
      publicTransit: 'on_time'
    }
  ]);

  const [publicServices, setPublicServices] = useState([
    {
      service: 'Emergency Services',
      status: 'operational',
      responseTime: 4.2, // minutes
      activeCalls: 12,
      efficiency: 98.7,
      coverage: 'citywide',
      personnel: 247,
      resources: 'adequate'
    },
    {
      service: 'Public Transportation',
      status: 'operational',
      responseTime: 0, // N/A for transit
      activeCalls: 0,
      efficiency: 94.3,
      coverage: 'citywide',
      personnel: 156,
      resources: 'adequate'
    },
    {
      service: 'Water & Sewer',
      status: 'optimal',
      responseTime: 0,
      activeCalls: 3,
      efficiency: 96.8,
      coverage: 'citywide',
      personnel: 89,
      resources: 'excellent'
    },
    {
      service: 'Waste Management',
      status: 'operational',
      responseTime: 0,
      activeCalls: 7,
      efficiency: 92.4,
      coverage: 'citywide',
      personnel: 134,
      resources: 'adequate'
    },
    {
      service: 'Public Safety',
      status: 'high_alert',
      responseTime: 2.8,
      activeCalls: 8,
      efficiency: 97.2,
      coverage: 'citywide',
      personnel: 312,
      resources: 'excellent'
    }
  ]);

  const [iotSensors, setIotSensors] = useState([
    {
      sensorType: 'Air Quality',
      totalSensors: 347,
      activeSensors: 342,
      avgReading: 28.7, // AQI
      status: 'good',
      lastUpdate: new Date(),
      coverage: 96.8,
      alertLevel: 'normal'
    },
    {
      sensorType: 'Noise Level',
      totalSensors: 189,
      activeSensors: 185,
      avgReading: 45.3, // dB
      status: 'acceptable',
      lastUpdate: new Date(),
      coverage: 94.2,
      alertLevel: 'normal'
    },
    {
      sensorType: 'Traffic Flow',
      totalSensors: 567,
      activeSensors: 558,
      avgReading: 847, // vehicles/hour
      status: 'optimal',
      lastUpdate: new Date(),
      coverage: 98.4,
      alertLevel: 'normal'
    },
    {
      sensorType: 'Weather',
      totalSensors: 23,
      activeSensors: 23,
      avgReading: 18.7, // celsius
      status: 'clear',
      lastUpdate: new Date(),
      coverage: 100,
      alertLevel: 'normal'
    },
    {
      sensorType: 'Water Quality',
      totalSensors: 78,
      activeSensors: 76,
      avgReading: 7.2, // pH
      status: 'excellent',
      lastUpdate: new Date(),
      coverage: 97.4,
      alertLevel: 'normal'
    }
  ]);

  const [energyUtilities, setEnergyUtilities] = useState([
    {
      utility: 'Electrical Grid',
      consumption: 567.3, // MW
      generation: 634.7,
      efficiency: 94.8,
      renewable: 67.3, // %
      outages: 2,
      maintenance: 'scheduled',
      reliability: 99.87
    },
    {
      utility: 'Natural Gas',
      consumption: 234.6, // MMcf
      generation: 0,
      efficiency: 92.4,
      renewable: 0,
      outages: 0,
      maintenance: 'none',
      reliability: 99.94
    },
    {
      utility: 'Water System',
      consumption: 45.7, // million gallons
      generation: 52.3,
      efficiency: 89.7,
      renewable: 23.4,
      outages: 1,
      maintenance: 'routine',
      reliability: 99.76
    },
    {
      utility: 'Waste Management',
      consumption: 0,
      generation: 1247, // tons
      efficiency: 92.4,
      renewable: 34.6, // recycling %
      outages: 0,
      maintenance: 'none',
      reliability: 98.9
    }
  ]);

  const [cityAnalytics, setCityAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      traffic: 93.8,
      energy: 845.6,
      safety: 98.5,
      services: 95.2
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      traffic: 94.0,
      energy: 846.2,
      safety: 98.6,
      services: 95.1
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      traffic: 94.1,
      energy: 846.8,
      safety: 98.7,
      services: 95.0
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      traffic: 94.2,
      energy: 847.1,
      safety: 98.7,
      services: 94.9
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      traffic: 94.2,
      energy: 847.2,
      safety: 98.7,
      services: 94.8
    },
    {
      time: new Date().toLocaleTimeString(),
      traffic: 94.2,
      energy: 847.3,
      safety: 98.7,
      services: 94.7
    }
  ]);

  const [cityAlerts, setCityAlerts] = useState([
    {
      id: 'CITY-001',
      severity: 'warning',
      type: 'Traffic Incident',
      message: 'Minor vehicle accident on Highway 101 & Central - lane closure in effect',
      timestamp: new Date(),
      status: 'active',
      department: 'Traffic Management',
      impact: 'medium'
    },
    {
      id: 'CITY-002',
      severity: 'info',
      type: 'Public Service',
      message: 'Scheduled water main maintenance on Elm Street 02:00-06:00 - minimal impact expected',
      timestamp: new Date(Date.now() - 120000),
      status: 'scheduled',
      department: 'Water & Sewer',
      impact: 'low'
    },
    {
      id: 'CITY-003',
      severity: 'critical',
      type: 'Public Safety',
      message: 'Large public event at City Center - increased security deployment and traffic controls',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      department: 'Public Safety',
      impact: 'high'
    }
  ]);

  const [emergencyServices, setEmergencyServices] = useState([
    {
      service: 'Police',
      units: 45,
      available: 23,
      responding: 12,
      avgResponse: 4.2, // minutes
      activeCalls: 18,
      priority1: 2,
      efficiency: 98.7
    },
    {
      service: 'Fire Department',
      units: 18,
      available: 14,
      responding: 3,
      avgResponse: 3.8,
      activeCalls: 4,
      priority1: 1,
      efficiency: 97.9
    },
    {
      service: 'EMS/Ambulance',
      units: 24,
      available: 15,
      responding: 7,
      avgResponse: 5.1,
      activeCalls: 9,
      priority1: 3,
      efficiency: 96.4
    },
    {
      service: 'Public Works',
      units: 67,
      available: 56,
      responding: 8,
      avgResponse: 15.7,
      activeCalls: 11,
      priority1: 0,
      efficiency: 94.2
    }
  ]);

  const [environmentalData, setEnvironmentalData] = useState({
    airQuality: 28.7, // AQI
    temperature: 18.7, // celsius
    humidity: 67.3, // %
    windSpeed: 12.4, // km/h
    precipitation: 0.0, // mm
    uvIndex: 4.2,
    visibility: 15.8, // km
    pressure: 1013.2 // hPa
  });

  const [systemMetrics, setSystemMetrics] = useState({
    icccUptime: 99.97, // %
    sensorNetwork: 99.94,
    communicationSystems: 99.89,
    dataIntegration: 99.92,
    aiAnalytics: 99.85,
    emergencyResponse: 98.7,
    avgProcessingTime: 1.247, // seconds
    dataAccuracy: 99.8 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update city metrics
      setCityMetrics(prev => ({
        ...prev,
        trafficFlow: Math.max(85, Math.min(98, prev.trafficFlow + (Math.random() - 0.5) * 2)),
        energyConsumption: Math.max(700, Math.min(1000, prev.energyConsumption + (Math.random() - 0.5) * 20)),
        publicSafety: Math.max(95, Math.min(100, prev.publicSafety + (Math.random() - 0.5) * 0.5)),
        wasteCollection: Math.max(85, Math.min(98, prev.wasteCollection + (Math.random() - 0.5) * 1))
      }));

      // Update traffic management
      setTrafficManagement(prev => prev.map(traffic => {
        let newStatus = traffic.status;
        let newCongestionLevel = traffic.congestionLevel;
        let newWaitTime = traffic.avgWaitTime;
        
        // Dynamic traffic changes
        newWaitTime = Math.max(15, Math.min(120, traffic.avgWaitTime + (Math.random() - 0.5) * 10));
        
        if (newWaitTime < 30) {
          newStatus = 'optimal';
          newCongestionLevel = 'low';
        } else if (newWaitTime < 60) {
          newStatus = 'moderate';
          newCongestionLevel = 'medium';
        } else {
          newStatus = 'congested';
          newCongestionLevel = 'high';
        }
        
        return {
          ...traffic,
          status: newStatus,
          congestionLevel: newCongestionLevel,
          avgWaitTime: newWaitTime,
          vehicles: Math.max(100, Math.min(1500, traffic.vehicles + Math.floor((Math.random() - 0.5) * 50)))
        };
      }));

      // Update public services
      setPublicServices(prev => prev.map(service => ({
        ...service,
        activeCalls: Math.max(0, Math.min(30, service.activeCalls + Math.floor((Math.random() - 0.5) * 3))),
        efficiency: Math.max(85, Math.min(100, service.efficiency + (Math.random() - 0.5) * 1)),
        responseTime: service.responseTime > 0 ? 
          Math.max(1, Math.min(15, service.responseTime + (Math.random() - 0.5) * 0.5)) : 0
      })));

      // Update IoT sensors
      setIotSensors(prev => prev.map(sensor => ({
        ...sensor,
        activeSensors: Math.max(Math.floor(sensor.totalSensors * 0.9), Math.min(sensor.totalSensors, sensor.activeSensors + Math.floor((Math.random() - 0.5) * 2))),
        avgReading: sensor.sensorType === 'Air Quality' ? 
          Math.max(10, Math.min(150, sensor.avgReading + (Math.random() - 0.5) * 5)) :
          sensor.sensorType === 'Traffic Flow' ?
          Math.max(200, Math.min(1200, sensor.avgReading + (Math.random() - 0.5) * 50)) :
          Math.max(sensor.avgReading * 0.95, Math.min(sensor.avgReading * 1.05, sensor.avgReading + (Math.random() - 0.5) * 2)),
        coverage: Math.max(90, Math.min(100, sensor.coverage + (Math.random() - 0.5) * 0.2)),
        lastUpdate: new Date()
      })));

      // Update energy utilities
      setEnergyUtilities(prev => prev.map(utility => ({
        ...utility,
        consumption: Math.max(utility.consumption * 0.9, Math.min(utility.consumption * 1.1, utility.consumption + (Math.random() - 0.5) * 20)),
        efficiency: Math.max(85, Math.min(100, utility.efficiency + (Math.random() - 0.5) * 1)),
        reliability: Math.max(98, Math.min(100, utility.reliability + (Math.random() - 0.5) * 0.1))
      })));

      // Update environmental data
      setEnvironmentalData(prev => ({
        ...prev,
        airQuality: Math.max(10, Math.min(150, prev.airQuality + (Math.random() - 0.5) * 2)),
        temperature: Math.max(10, Math.min(35, prev.temperature + (Math.random() - 0.5) * 1)),
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 3)),
        windSpeed: Math.max(0, Math.min(50, prev.windSpeed + (Math.random() - 0.5) * 2)),
        pressure: Math.max(990, Math.min(1030, prev.pressure + (Math.random() - 0.5) * 1))
      }));

      // Update city analytics
      const newCityData = {
        time: new Date().toLocaleTimeString(),
        traffic: cityMetrics.trafficFlow,
        energy: cityMetrics.energyConsumption / 10, // Scale for chart
        safety: cityMetrics.publicSafety,
        services: cityMetrics.wasteCollection
      };
      
      setCityAnalytics(prev => [...prev.slice(1), newCityData]);

      // Update emergency services
      setEmergencyServices(prev => prev.map(service => ({
        ...service,
        available: Math.max(Math.floor(service.units * 0.5), Math.min(service.units, service.available + Math.floor((Math.random() - 0.5) * 3))),
        responding: Math.max(0, Math.min(Math.floor(service.units * 0.3), service.responding + Math.floor((Math.random() - 0.5) * 2))),
        activeCalls: Math.max(0, Math.min(50, service.activeCalls + Math.floor((Math.random() - 0.5) * 3))),
        avgResponse: Math.max(2, Math.min(20, service.avgResponse + (Math.random() - 0.5) * 0.5)),
        efficiency: Math.max(90, Math.min(100, service.efficiency + (Math.random() - 0.5) * 0.5))
      })));

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        icccUptime: Math.max(99.5, Math.min(100, prev.icccUptime + (Math.random() - 0.3) * 0.01)),
        sensorNetwork: Math.max(99.5, Math.min(100, prev.sensorNetwork + (Math.random() - 0.3) * 0.01)),
        avgProcessingTime: Math.max(0.5, Math.min(5, prev.avgProcessingTime + (Math.random() - 0.5) * 0.1)),
        dataAccuracy: Math.max(99, Math.min(100, prev.dataAccuracy + (Math.random() - 0.5) * 0.1))
      }));

      // Occasionally add new city alerts
      if (Math.random() > 0.94) {
        const alertTypes = ['Traffic Incident', 'Public Service', 'Public Safety', 'Environmental', 'Infrastructure'];
        const severities = ['info', 'warning', 'critical'];
        const departments = ['Traffic Management', 'Public Safety', 'Emergency Services', 'Environmental', 'Public Works'];
        
        const newAlert = {
          id: `CITY-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time smart city operations alert generated',
          timestamp: new Date(),
          status: 'active',
          department: departments[Math.floor(Math.random() * departments.length)],
          impact: ['low', 'medium', 'high', 'positive'][Math.floor(Math.random() * 4)]
        };
        
        setCityAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [cityMetrics.trafficFlow, cityMetrics.energyConsumption, cityMetrics.publicSafety, cityMetrics.wasteCollection]);

  const getTrafficStatusColor = (status) => {
    switch (status) {
      case 'optimal': return '#10B981';
      case 'moderate': return '#F59E0B';
      case 'congested': return '#EF4444';
      case 'blocked': return '#7C2D12';
      default: return '#6B7280';
    }
  };

  const getServiceStatusColor = (status) => {
    switch (status) {
      case 'optimal': return '#10B981';
      case 'operational': return '#3B82F6';
      case 'high_alert': return '#F59E0B';
      case 'maintenance': return '#8B5CF6';
      case 'offline': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getSensorStatusColor = (status) => {
    switch (status) {
      case 'excellent': return '#10B981';
      case 'good': return '#3B82F6';
      case 'acceptable': return '#F59E0B';
      case 'poor': return '#EF4444';
      case 'critical': return '#7C2D12';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const serviceDistribution = [
    { name: 'Emergency', value: 28.4, color: '#EF4444' },
    { name: 'Transportation', value: 24.7, color: '#3B82F6' },
    { name: 'Utilities', value: 22.3, color: '#10B981' },
    { name: 'Public Works', value: 15.8, color: '#8B5CF6' },
    { name: 'Environment', value: 8.8, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Building2 className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">SMART CITY OPERATIONS CENTER</h1>
            <p className="text-gray-400">Integrated command control, urban management, traffic optimization, utilities monitoring, public services coordination & IoT sensor networks</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {(cityMetrics.totalPopulation / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-gray-400">POPULATION</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {cityMetrics.activeServices}
            </div>
            <div className="text-xs text-gray-400">SERVICES</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{cityMetrics.publicSafety.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">SAFETY</div>
          </div>
        </div>
      </div>

      {/* Smart City KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Car className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">TRAFFIC</span>
          </div>
          <div className="text-xl font-bold text-white">{cityMetrics.trafficFlow.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Flow</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">ENERGY</span>
          </div>
          <div className="text-xl font-bold text-white">{cityMetrics.energyConsumption.toFixed(0)}MW</div>
          <div className="text-xs text-gray-400">Usage</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">SAFETY</span>
          </div>
          <div className="text-xl font-bold text-white">{cityMetrics.publicSafety.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Index</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">AIR QUALITY</span>
          </div>
          <div className="text-xl font-bold text-white">{environmentalData.airQuality.toFixed(0)}</div>
          <div className="text-xs text-gray-400">AQI</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">WASTE</span>
          </div>
          <div className="text-xl font-bold text-white">{cityMetrics.wasteCollection.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Collection</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Settings className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">ICCC UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.icccUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Traffic Management */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2 text-blue-400" />
            TRAFFIC MANAGEMENT SYSTEM
          </h3>
          <div className="space-y-3">
            {trafficManagement.map(traffic => (
              <div key={traffic.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getTrafficStatusColor(traffic.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{traffic.intersection}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getTrafficStatusColor(traffic.status)}20`, 
                      color: getTrafficStatusColor(traffic.status) 
                    }}>
                      {traffic.status.toUpperCase()}
                    </span>
                    {traffic.aiOptimized && (
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-900 text-purple-400">
                        AI
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vehicles</span>
                    <span className="text-green-400">{traffic.vehicles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wait Time</span>
                    <span className="text-blue-400">{traffic.avgWaitTime.toFixed(0)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Congestion</span>
                    <span className="text-purple-400">{traffic.congestionLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Timing</span>
                    <span className="text-white">{traffic.signalTiming}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Transit: {traffic.publicTransit.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="text-gray-500">
                    Accidents: {traffic.accidents}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Public Services */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-400" />
            PUBLIC SERVICES
          </h3>
          <div className="space-y-3">
            {publicServices.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getServiceStatusColor(service.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{service.service}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getServiceStatusColor(service.status)}20`, 
                    color: getServiceStatusColor(service.status) 
                  }}>
                    {service.status.toUpperCase().replace('_', ' ')}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Personnel</span>
                    <span className="text-blue-400">{service.personnel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Calls</span>
                    <span className="text-purple-400">{service.activeCalls}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Efficiency</span>
                    <span className="text-green-400">{service.efficiency.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Resources</span>
                    <span className="text-white">{service.resources}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Coverage: {service.coverage}
                  </span>
                  <span className="text-gray-500">
                    {service.responseTime > 0 ? `${service.responseTime.toFixed(1)}min response` : 'Continuous ops'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IoT Sensors & Emergency */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-purple-400" />
            IOT SENSORS & EMERGENCY SERVICES
          </h3>
          <div className="space-y-3 mb-4">
            {iotSensors.slice(0, 4).map((sensor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{sensor.sensorType}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getSensorStatusColor(sensor.status) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active</span>
                    <span className="text-green-400">{sensor.activeSensors}/{sensor.totalSensors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coverage</span>
                    <span className="text-blue-400">{sensor.coverage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reading</span>
                    <span className="text-purple-400">
                      {sensor.sensorType === 'Air Quality' ? `${sensor.avgReading.toFixed(0)} AQI` :
                       sensor.sensorType === 'Traffic Flow' ? `${sensor.avgReading.toFixed(0)} v/h` :
                       sensor.sensorType === 'Weather' ? `${sensor.avgReading.toFixed(1)}°C` :
                       `${sensor.avgReading.toFixed(1)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-white">{sensor.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Services */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Emergency Response</div>
            <div className="space-y-2">
              {emergencyServices.slice(0, 3).map((emergency, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{emergency.service}</span>
                    <span className="text-xs text-green-400">{emergency.efficiency.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-gray-300">
                      Available: {emergency.available}/{emergency.units}
                    </div>
                    <div className="text-gray-300">
                      Response: {emergency.avgResponse.toFixed(1)}min
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Panel */}
          <div className="border-t border-gray-700 pt-3 mt-3">
            <div className="text-sm text-white font-semibold mb-2">Environmental Monitor</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Air Quality</span>
                  <span className="text-green-400">{environmentalData.airQuality.toFixed(0)} AQI</span>
                </div>
                <div className="text-gray-500">Temp: {environmentalData.temperature.toFixed(1)}°C</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Wind</span>
                  <span className="text-blue-400">{environmentalData.windSpeed.toFixed(1)} km/h</span>
                </div>
                <div className="text-gray-500">Humidity: {environmentalData.humidity.toFixed(0)}%</div>
              </div>
            </div>
          </div>

          {/* City Alerts */}
          <div className="border-t border-gray-700 pt-3 mt-3">
            <div className="text-sm text-white font-semibold mb-2">Active Alerts</div>
            <div className="space-y-2">
              {cityAlerts.slice(0, 2).map(alert => (
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
                    <span className="text-blue-400">{alert.department}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smart City Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time City Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME CITY ANALYTICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cityAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
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
                yAxisId="left"
                type="monotone" 
                dataKey="traffic" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Traffic Flow %"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="safety" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Public Safety %"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="services" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Services Efficiency %"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="energy" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Energy Usage (x10 MW)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">SERVICE DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={serviceDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {serviceDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Service Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {serviceDistribution.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-gray-400 text-sm">{service.name}</span>
                  </div>
                  <span className="text-white font-semibold">{service.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">ICCC System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Command Center</span>
                    <span className="text-green-400">{systemMetrics.icccUptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sensor Network</span>
                    <span className="text-blue-400">{systemMetrics.sensorNetwork.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processing Time</span>
                    <span className="text-purple-400">{systemMetrics.avgProcessingTime.toFixed(2)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Data Accuracy</span>
                    <span className="text-green-400">{systemMetrics.dataAccuracy.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Energy Utilities Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Energy & Utilities</span>
              <span className="text-xs text-blue-400">{cityMetrics.energyConsumption.toFixed(0)}MW total load</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {energyUtilities.slice(0, 4).map((utility, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{utility.utility}</span>
                    <span className="text-xs text-green-400">{utility.reliability.toFixed(1)}%</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    {utility.efficiency.toFixed(1)}% eff • {utility.outages} outages
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Smart City Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Smart City Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Car className="w-3 h-3 inline mr-1" />
                  Traffic
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Users className="w-3 h-3 inline mr-1" />
                  Services
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Activity className="w-3 h-3 inline mr-1" />
                  IoT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCityOperationsCenter;