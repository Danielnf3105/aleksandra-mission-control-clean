import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Anchor, Ship, Compass, TrendingUp, AlertTriangle, Activity, Eye, Waves, Clock, MapPin, Settings, Navigation } from 'lucide-react';

const MaritimeOperationsCenter = () => {
  const [portMetrics, setPortMetrics] = useState({
    totalVessels: 247,
    vesselsInPort: 89,
    containerThroughput: 34567, // TEU per day
    cargoVolume: 127834.5, // tons
    averageDwellTime: 28.7, // hours
    portEfficiency: 94.2, // %
    weatherConditions: 'favorable',
    tidalRange: 2.4 // meters
  });

  const [vesselTraffic, setVesselTraffic] = useState([
    {
      id: 'VSL-001',
      name: 'MSC Gülsün',
      type: 'Container Ship',
      flag: 'Panama',
      length: 400, // meters
      beam: 61,
      draft: 16.5,
      status: 'berthed',
      berth: 'Terminal A-7',
      eta: null,
      etd: new Date('2026-03-07T14:30:00'),
      cargoOps: 'loading',
      pilot: 'Captain Chen',
      tugboats: 2
    },
    {
      id: 'VSL-002',
      name: 'Emma Maersk',
      type: 'Container Ship', 
      flag: 'Denmark',
      length: 397,
      beam: 56,
      draft: 15.5,
      status: 'anchored',
      berth: 'Anchorage B-3',
      eta: new Date('2026-03-07T09:45:00'),
      etd: null,
      cargoOps: 'waiting',
      pilot: 'Captain Rodriguez',
      tugboats: 0
    },
    {
      id: 'VSL-003',
      name: 'Nordic Aurora',
      type: 'Bulk Carrier',
      flag: 'Norway',
      length: 289,
      beam: 45,
      draft: 18.2,
      status: 'inbound',
      berth: null,
      eta: new Date('2026-03-07T16:20:00'),
      etd: null,
      cargoOps: 'pending',
      pilot: 'Captain Martinez',
      tugboats: 0
    },
    {
      id: 'VSL-004',
      name: 'Pacific Star',
      type: 'Tanker',
      flag: 'Liberia',
      length: 274,
      beam: 48,
      draft: 14.8,
      status: 'outbound',
      berth: 'Terminal C-12',
      eta: null,
      etd: new Date('2026-03-07T11:15:00'),
      cargoOps: 'completed',
      pilot: 'Captain Kim',
      tugboats: 3
    },
    {
      id: 'VSL-005',
      name: 'Seawise Giant',
      type: 'VLCC Tanker',
      flag: 'Singapore',
      length: 458,
      beam: 69,
      draft: 24.6,
      status: 'berthed',
      berth: 'Terminal D-1',
      eta: null,
      etd: new Date('2026-03-07T18:00:00'),
      cargoOps: 'discharging',
      pilot: 'Captain Thompson',
      tugboats: 4
    }
  ]);

  const [terminalOperations, setTerminalOperations] = useState([
    {
      terminal: 'Container Terminal A',
      status: 'operational',
      berths: 12,
      occupiedBerths: 9,
      cranes: 18,
      activeCranes: 14,
      throughput: 12847, // TEU/day
      efficiency: 96.7,
      waitingVessels: 3,
      avgTurnaroundTime: 18.4 // hours
    },
    {
      terminal: 'Container Terminal B',
      status: 'operational',
      berths: 8,
      occupiedBerths: 6,
      cranes: 12,
      activeCranes: 10,
      throughput: 8934,
      efficiency: 94.2,
      waitingVessels: 2,
      avgTurnaroundTime: 21.7
    },
    {
      terminal: 'Bulk Terminal C',
      status: 'operational',
      berths: 6,
      occupiedBerths: 4,
      cranes: 8,
      activeCranes: 6,
      throughput: 5678,
      efficiency: 89.3,
      waitingVessels: 1,
      avgTurnaroundTime: 36.2
    },
    {
      terminal: 'Oil Terminal D',
      status: 'operational',
      berths: 4,
      occupiedBerths: 3,
      cranes: 0,
      activeCranes: 0,
      throughput: 3456,
      efficiency: 92.8,
      waitingVessels: 1,
      avgTurnaroundTime: 48.6
    },
    {
      terminal: 'RoRo Terminal E',
      status: 'maintenance',
      berths: 3,
      occupiedBerths: 0,
      cranes: 6,
      activeCranes: 0,
      throughput: 0,
      efficiency: 0,
      waitingVessels: 0,
      avgTurnaroundTime: 0
    }
  ]);

  const [cargoOperations, setCargoOperations] = useState([
    {
      category: 'Containers',
      totalUnits: 45678,
      processed: 34567,
      pending: 11111,
      avgProcessingTime: 2.4, // hours
      efficiency: 95.7,
      revenue: 4567890.12
    },
    {
      category: 'Dry Bulk',
      totalUnits: 23456, // tons
      processed: 18934,
      pending: 4522,
      avgProcessingTime: 6.8,
      efficiency: 92.3,
      revenue: 2345678.90
    },
    {
      category: 'Liquid Bulk',
      totalUnits: 12345,
      processed: 9876,
      pending: 2469,
      avgProcessingTime: 12.7,
      efficiency: 89.6,
      revenue: 1234567.89
    },
    {
      category: 'General Cargo',
      totalUnits: 8765,
      processed: 7234,
      pending: 1531,
      avgProcessingTime: 4.2,
      efficiency: 87.9,
      revenue: 876543.21
    },
    {
      category: 'RoRo Vehicles',
      totalUnits: 5432,
      processed: 0,
      pending: 0,
      avgProcessingTime: 0,
      efficiency: 0,
      revenue: 0
    }
  ]);

  const [portAnalytics, setPortAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      vessels: 245,
      throughput: 33456,
      efficiency: 93.8,
      dwellTime: 29.1
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      vessels: 246,
      throughput: 33789,
      efficiency: 94.0,
      dwellTime: 28.9
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      vessels: 246,
      throughput: 34123,
      efficiency: 94.1,
      dwellTime: 28.8
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      vessels: 247,
      throughput: 34345,
      efficiency: 94.2,
      dwellTime: 28.7
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      vessels: 247,
      throughput: 34456,
      efficiency: 94.2,
      dwellTime: 28.7
    },
    {
      time: new Date().toLocaleTimeString(),
      vessels: 247,
      throughput: 34567,
      efficiency: 94.2,
      dwellTime: 28.7
    }
  ]);

  const [maritimeAlerts, setMaritimeAlerts] = useState([
    {
      id: 'MAR-001',
      severity: 'warning',
      type: 'Weather Advisory',
      message: 'Strong winds expected 15:00-18:00 UTC - small vessel operations may be affected',
      timestamp: new Date(),
      status: 'active',
      location: 'Port Area',
      impact: 'medium'
    },
    {
      id: 'MAR-002',
      severity: 'critical',
      type: 'Navigation Hazard',
      message: 'Submerged container detected in main shipping channel - marking with emergency buoys',
      timestamp: new Date(Date.now() - 180000),
      status: 'investigating',
      location: 'Main Channel',
      impact: 'high'
    },
    {
      id: 'MAR-003',
      severity: 'info',
      type: 'Terminal Update',
      message: 'RoRo Terminal E maintenance completed ahead of schedule - reopening at 06:00',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      location: 'Terminal E',
      impact: 'positive'
    }
  ]);

  const [pilotageServices, setPilotageServices] = useState([
    {
      pilot: 'Captain Chen',
      status: 'on_duty',
      currentVessel: 'MSC Gülsün',
      experience: 18, // years
      certifications: ['Deep Draft', 'LNG', 'Container'],
      totalTransits: 2847,
      safetyRecord: 99.8
    },
    {
      pilot: 'Captain Rodriguez', 
      status: 'on_duty',
      currentVessel: 'Emma Maersk',
      experience: 15,
      certifications: ['Container', 'Bulk', 'General'],
      totalTransits: 2134,
      safetyRecord: 99.6
    },
    {
      pilot: 'Captain Martinez',
      status: 'available',
      currentVessel: null,
      experience: 22,
      certifications: ['Deep Draft', 'Tanker', 'Bulk'],
      totalTransits: 3456,
      safetyRecord: 99.9
    },
    {
      pilot: 'Captain Kim',
      status: 'on_duty',
      currentVessel: 'Pacific Star',
      experience: 12,
      certifications: ['Tanker', 'Chemical', 'LPG'],
      totalTransits: 1567,
      safetyRecord: 99.4
    },
    {
      pilot: 'Captain Thompson',
      status: 'on_duty',
      currentVessel: 'Seawise Giant',
      experience: 25,
      certifications: ['VLCC', 'Deep Draft', 'All Types'],
      totalTransits: 4123,
      safetyRecord: 99.7
    }
  ]);

  const [environmentalData, setEnvironmentalData] = useState({
    windSpeed: 12.4, // knots
    windDirection: 'SW',
    waveHeight: 1.2, // meters
    visibility: 8.5, // nautical miles
    airTemperature: 18.7, // celsius
    waterTemperature: 16.2,
    barometricPressure: 1013.2, // hPa
    tidalState: 'rising'
  });

  const [systemMetrics, setSystemMetrics] = useState({
    vtsUptime: 99.97, // %
    radarSystems: 99.94,
    aisNetwork: 99.89,
    communicationSystems: 99.92,
    portManagementSystem: 99.85,
    cargoTrackingSystem: 98.7,
    avgResponseTime: 2.847, // seconds
    dataIntegrity: 99.6 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update port metrics
      setPortMetrics(prev => ({
        ...prev,
        totalVessels: Math.max(200, Math.min(300, prev.totalVessels + Math.floor((Math.random() - 0.5) * 3))),
        vesselsInPort: Math.max(70, Math.min(120, prev.vesselsInPort + Math.floor((Math.random() - 0.5) * 2))),
        containerThroughput: Math.max(30000, Math.min(40000, prev.containerThroughput + Math.floor((Math.random() - 0.5) * 100))),
        cargoVolume: prev.cargoVolume + (Math.random() - 0.5) * 1000,
        averageDwellTime: Math.max(20, Math.min(40, prev.averageDwellTime + (Math.random() - 0.5) * 0.5)),
        portEfficiency: Math.max(90, Math.min(98, prev.portEfficiency + (Math.random() - 0.5) * 0.2)),
        tidalRange: Math.max(1.5, Math.min(3.5, prev.tidalRange + (Math.random() - 0.5) * 0.1))
      }));

      // Update vessel traffic
      setVesselTraffic(prev => prev.map(vessel => {
        let newStatus = vessel.status;
        let newCargoOps = vessel.cargoOps;
        
        // Simulate status transitions
        if (vessel.status === 'inbound' && Math.random() > 0.95) {
          newStatus = 'anchored';
        } else if (vessel.status === 'anchored' && Math.random() > 0.9) {
          newStatus = 'berthed';
          newCargoOps = Math.random() > 0.5 ? 'loading' : 'discharging';
        } else if (vessel.status === 'berthed' && vessel.cargoOps === 'loading' && Math.random() > 0.98) {
          newCargoOps = 'completed';
        } else if (vessel.status === 'berthed' && vessel.cargoOps === 'discharging' && Math.random() > 0.98) {
          newCargoOps = 'completed';
        }
        
        return {
          ...vessel,
          status: newStatus,
          cargoOps: newCargoOps,
          draft: Math.max(vessel.draft * 0.95, Math.min(vessel.draft * 1.05, vessel.draft + (Math.random() - 0.5) * 0.2))
        };
      }));

      // Update terminal operations
      setTerminalOperations(prev => prev.map(terminal => ({
        ...terminal,
        occupiedBerths: Math.max(0, Math.min(terminal.berths, terminal.occupiedBerths + Math.floor((Math.random() - 0.5) * 2))),
        activeCranes: terminal.status === 'operational' ? 
          Math.max(Math.floor(terminal.cranes * 0.6), Math.min(terminal.cranes, terminal.activeCranes + Math.floor((Math.random() - 0.5) * 2))) : 0,
        throughput: terminal.status === 'operational' ? 
          Math.max(terminal.throughput * 0.9, Math.min(terminal.throughput * 1.1, terminal.throughput + Math.floor((Math.random() - 0.5) * 200))) : 0,
        efficiency: terminal.status === 'operational' ? 
          Math.max(85, Math.min(100, terminal.efficiency + (Math.random() - 0.5) * 1)) : 0,
        avgTurnaroundTime: terminal.status === 'operational' ? 
          Math.max(10, Math.min(60, terminal.avgTurnaroundTime + (Math.random() - 0.5) * 1)) : 0
      })));

      // Update cargo operations
      setCargoOperations(prev => prev.map(cargo => ({
        ...cargo,
        processed: Math.min(cargo.totalUnits, cargo.processed + Math.floor(Math.random() * 50)),
        pending: Math.max(0, cargo.pending - Math.floor(Math.random() * 30)),
        avgProcessingTime: Math.max(1, Math.min(20, cargo.avgProcessingTime + (Math.random() - 0.5) * 0.2)),
        efficiency: Math.max(80, Math.min(100, cargo.efficiency + (Math.random() - 0.5) * 0.5)),
        revenue: cargo.revenue + Math.random() * 1000
      })));

      // Update environmental data
      setEnvironmentalData(prev => ({
        ...prev,
        windSpeed: Math.max(0, Math.min(30, prev.windSpeed + (Math.random() - 0.5) * 1)),
        waveHeight: Math.max(0.2, Math.min(3.0, prev.waveHeight + (Math.random() - 0.5) * 0.1)),
        visibility: Math.max(1, Math.min(10, prev.visibility + (Math.random() - 0.5) * 0.5)),
        airTemperature: Math.max(10, Math.min(30, prev.airTemperature + (Math.random() - 0.5) * 0.5)),
        waterTemperature: Math.max(5, Math.min(25, prev.waterTemperature + (Math.random() - 0.5) * 0.3)),
        barometricPressure: Math.max(990, Math.min(1030, prev.barometricPressure + (Math.random() - 0.5) * 0.5))
      }));

      // Update port analytics
      const newPortData = {
        time: new Date().toLocaleTimeString(),
        vessels: portMetrics.totalVessels,
        throughput: portMetrics.containerThroughput,
        efficiency: portMetrics.portEfficiency,
        dwellTime: portMetrics.averageDwellTime
      };
      
      setPortAnalytics(prev => [...prev.slice(1), newPortData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        vtsUptime: Math.max(99.5, Math.min(100, prev.vtsUptime + (Math.random() - 0.3) * 0.01)),
        radarSystems: Math.max(99.5, Math.min(100, prev.radarSystems + (Math.random() - 0.3) * 0.01)),
        avgResponseTime: Math.max(1, Math.min(5, prev.avgResponseTime + (Math.random() - 0.5) * 0.1)),
        dataIntegrity: Math.max(98, Math.min(100, prev.dataIntegrity + (Math.random() - 0.5) * 0.1))
      }));

      // Occasionally add new maritime alerts
      if (Math.random() > 0.94) {
        const alertTypes = ['Weather Advisory', 'Navigation Hazard', 'Terminal Update', 'Vessel Emergency', 'Port Security'];
        const severities = ['info', 'warning', 'critical'];
        const locations = ['Port Area', 'Main Channel', 'Anchorage', 'Terminal A', 'Terminal B'];
        
        const newAlert = {
          id: `MAR-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time maritime operations alert generated',
          timestamp: new Date(),
          status: 'active',
          location: locations[Math.floor(Math.random() * locations.length)],
          impact: ['low', 'medium', 'high', 'positive'][Math.floor(Math.random() * 4)]
        };
        
        setMaritimeAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [portMetrics.totalVessels, portMetrics.containerThroughput, portMetrics.portEfficiency, portMetrics.averageDwellTime]);

  const getVesselStatusColor = (status) => {
    switch (status) {
      case 'berthed': return '#10B981';
      case 'anchored': return '#F59E0B';
      case 'inbound': return '#3B82F6';
      case 'outbound': return '#8B5CF6';
      case 'emergency': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getTerminalStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'busy': return '#F59E0B';
      case 'maintenance': return '#EF4444';
      case 'closed': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getPilotStatusColor = (status) => {
    switch (status) {
      case 'on_duty': return '#EF4444';
      case 'available': return '#10B981';
      case 'off_duty': return '#6B7280';
      case 'transit': return '#3B82F6';
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

  const cargoDistribution = [
    { name: 'Containers', value: 45.6, color: '#3B82F6' },
    { name: 'Dry Bulk', value: 28.3, color: '#8B5CF6' },
    { name: 'Liquid Bulk', value: 15.7, color: '#10B981' },
    { name: 'General Cargo', value: 7.8, color: '#F59E0B' },
    { name: 'RoRo', value: 2.6, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Anchor className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">MARITIME OPERATIONS CENTER</h1>
            <p className="text-gray-400">Smart port management, vessel traffic control, cargo logistics coordination, pilotage services & maritime safety monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {portMetrics.totalVessels}
            </div>
            <div className="text-xs text-gray-400">VESSELS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {(portMetrics.containerThroughput / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-gray-400">TEU/DAY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{portMetrics.portEfficiency.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">EFFICIENCY</div>
          </div>
        </div>
      </div>

      {/* Maritime KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Ship className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">IN PORT</span>
          </div>
          <div className="text-xl font-bold text-white">{portMetrics.vesselsInPort}</div>
          <div className="text-xs text-gray-400">Vessels</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Navigation className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">CARGO</span>
          </div>
          <div className="text-xl font-bold text-white">{(portMetrics.cargoVolume / 1000).toFixed(0)}K</div>
          <div className="text-xs text-gray-400">Tons</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">DWELL TIME</span>
          </div>
          <div className="text-xl font-bold text-white">{portMetrics.averageDwellTime.toFixed(1)}h</div>
          <div className="text-xs text-gray-400">Average</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Waves className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">WEATHER</span>
          </div>
          <div className="text-xl font-bold text-white">{environmentalData.windSpeed.toFixed(0)}kn</div>
          <div className="text-xs text-gray-400">Wind</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Compass className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">TIDE</span>
          </div>
          <div className="text-xl font-bold text-white">{portMetrics.tidalRange.toFixed(1)}m</div>
          <div className="text-xs text-gray-400">Range</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">VTS UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.vtsUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Vessel Traffic */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Ship className="w-5 h-5 mr-2 text-blue-400" />
            VESSEL TRAFFIC CONTROL
          </h3>
          <div className="space-y-3">
            {vesselTraffic.map(vessel => (
              <div key={vessel.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getVesselStatusColor(vessel.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{vessel.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getVesselStatusColor(vessel.status)}20`, 
                      color: getVesselStatusColor(vessel.status) 
                    }}>
                      {vessel.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Type: <span className="text-purple-400">{vessel.type}</span> • 
                  Flag: <span className="text-blue-400">{vessel.flag}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Length</span>
                    <span className="text-green-400">{vessel.length}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Draft</span>
                    <span className="text-blue-400">{vessel.draft.toFixed(1)}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pilot</span>
                    <span className="text-purple-400">{vessel.pilot.split(' ')[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tugboats</span>
                    <span className="text-white">{vessel.tugboats}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Cargo: {vessel.cargoOps.toUpperCase()}
                  </span>
                  <span className="text-gray-500">
                    {vessel.berth || 'Open Water'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Navigation className="w-5 h-5 mr-2 text-green-400" />
            TERMINAL OPERATIONS
          </h3>
          <div className="space-y-3">
            {terminalOperations.map((terminal, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getTerminalStatusColor(terminal.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{terminal.terminal}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getTerminalStatusColor(terminal.status)}20`, 
                    color: getTerminalStatusColor(terminal.status) 
                  }}>
                    {terminal.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Berths</span>
                    <span className="text-blue-400">{terminal.occupiedBerths}/{terminal.berths}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cranes</span>
                    <span className="text-purple-400">{terminal.activeCranes}/{terminal.cranes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Throughput</span>
                    <span className="text-green-400">{(terminal.throughput / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Efficiency</span>
                    <span className="text-white">{terminal.efficiency.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Waiting: {terminal.waitingVessels} vessels
                  </span>
                  <span className="text-gray-500">
                    TAT: {terminal.avgTurnaroundTime.toFixed(1)}h
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilotage & Environmental */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Compass className="w-5 h-5 mr-2 text-orange-400" />
            PILOTAGE & ENVIRONMENT
          </h3>
          <div className="space-y-3 mb-4">
            {pilotageServices.slice(0, 4).map((pilot, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{pilot.pilot}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getPilotStatusColor(pilot.status) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-blue-400">{pilot.experience}y</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transits</span>
                    <span className="text-purple-400">{(pilot.totalTransits / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Safety</span>
                    <span className="text-green-400">{pilot.safetyRecord.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Certs</span>
                    <span className="text-white">{pilot.certifications.length}</span>
                  </div>
                </div>
                
                <div className="text-xs text-yellow-400">
                  {pilot.currentVessel || 'Available for assignment'}
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Conditions */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Environmental Conditions</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Wind</span>
                  <span className="text-blue-400">{environmentalData.windSpeed.toFixed(1)}kn {environmentalData.windDirection}</span>
                </div>
                <div className="text-gray-500">Waves: {environmentalData.waveHeight.toFixed(1)}m</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Visibility</span>
                  <span className="text-green-400">{environmentalData.visibility.toFixed(1)}nm</span>
                </div>
                <div className="text-gray-500">Temp: {environmentalData.airTemperature.toFixed(1)}°C</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Pressure</span>
                  <span className="text-purple-400">{environmentalData.barometricPressure.toFixed(1)} hPa</span>
                </div>
                <div className="text-gray-500">Tide: {environmentalData.tidalState}</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Water</span>
                  <span className="text-cyan-400">{environmentalData.waterTemperature.toFixed(1)}°C</span>
                </div>
                <div className="text-gray-500">Range: {portMetrics.tidalRange.toFixed(1)}m</div>
              </div>
            </div>
          </div>

          {/* Maritime Alerts */}
          <div className="border-t border-gray-700 pt-3 mt-3">
            <div className="text-sm text-white font-semibold mb-2">Maritime Alerts</div>
            <div className="space-y-2">
              {maritimeAlerts.slice(0, 2).map(alert => (
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

      {/* Maritime Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Port Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME PORT ANALYTICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portAnalytics}>
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
                dataKey="vessels" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Vessels in Port"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="throughput" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Throughput (TEU/day)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="efficiency" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Port Efficiency %"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="dwellTime" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Dwell Time (hrs)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cargo Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">CARGO DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={cargoDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {cargoDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Cargo Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {cargoDistribution.map((cargo, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: cargo.color }}
                    />
                    <span className="text-gray-400 text-sm">{cargo.name}</span>
                  </div>
                  <span className="text-white font-semibold">{cargo.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">VTS System</span>
                    <span className="text-green-400">{systemMetrics.vtsUptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AIS Network</span>
                    <span className="text-blue-400">{systemMetrics.aisNetwork.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-purple-400">{systemMetrics.avgResponseTime.toFixed(2)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Data Integrity</span>
                    <span className="text-green-400">{systemMetrics.dataIntegrity.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cargo Operations Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Active Cargo Operations</span>
              <span className="text-xs text-blue-400">{(portMetrics.cargoVolume / 1000).toFixed(0)}K tons processed</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {cargoOperations.slice(0, 4).map((cargo, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{cargo.category}</span>
                    <span className="text-xs text-green-400">{cargo.efficiency.toFixed(1)}%</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    {Math.round((cargo.processed / cargo.totalUnits) * 100)}% complete • {cargo.avgProcessingTime.toFixed(1)}h avg
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Maritime Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Maritime Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Ship className="w-3 h-3 inline mr-1" />
                  VTS Control
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Navigation className="w-3 h-3 inline mr-1" />
                  Port Ops
                </button>
                <button className="px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded text-xs transition-colors">
                  <Compass className="w-3 h-3 inline mr-1" />
                  Pilotage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeOperationsCenter;