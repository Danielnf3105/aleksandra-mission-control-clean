import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Trophy, Users, Calendar, TrendingUp, AlertTriangle, Activity, Eye, Shield, Clock, MapPin, Settings, Zap } from 'lucide-react';

const SportsVenueOperationsCenter = () => {
  const [venueMetrics, setVenueMetrics] = useState({
    totalCapacity: 68500,
    currentAttendance: 64789,
    eventsToday: 2,
    ticketsSold: 127834,
    revenueToday: 12847523.89,
    securityIncidents: 4,
    avgConcessionWait: 3.7, // minutes
    guestSatisfaction: 4.2 // /5.0
  });

  const [eventOperations, setEventOperations] = useState([
    {
      id: 'EVT-001',
      name: 'Lakers vs Warriors',
      type: 'NBA Basketball',
      startTime: new Date('2026-03-06T20:00:00'),
      status: 'in_progress',
      attendance: 19847,
      capacity: 20000,
      ticketsSold: 19983,
      revenue: 4678923.45,
      vendorStatus: 'operational',
      securityLevel: 'normal'
    },
    {
      id: 'EVT-002',
      name: 'Taylor Swift Concert',
      type: 'Music Concert',
      startTime: new Date('2026-03-07T19:30:00'),
      status: 'setup',
      attendance: 0,
      capacity: 48500,
      ticketsSold: 48456,
      revenue: 8169000.78,
      vendorStatus: 'setup_phase',
      securityLevel: 'enhanced'
    },
    {
      id: 'EVT-003',
      name: 'Corporate Conference',
      type: 'Corporate Event',
      startTime: new Date('2026-03-08T09:00:00'),
      status: 'scheduled',
      attendance: 0,
      capacity: 5000,
      ticketsSold: 4234,
      revenue: 423400.00,
      vendorStatus: 'pending',
      securityLevel: 'standard'
    }
  ]);

  const [venueOperations, setVenueOperations] = useState([
    {
      area: 'Main Arena',
      status: 'active',
      capacity: 20000,
      currentOccupancy: 19847,
      temperature: 72.4, // F
      airQuality: 96.7,
      lighting: 'event_mode',
      soundSystem: 'operational'
    },
    {
      area: 'East Concourse',
      status: 'busy',
      capacity: 8500,
      currentOccupancy: 7892,
      temperature: 74.2,
      airQuality: 94.3,
      lighting: 'full',
      soundSystem: 'operational'
    },
    {
      area: 'West Concourse',
      status: 'busy',
      capacity: 8500,
      currentOccupancy: 8234,
      temperature: 73.8,
      airQuality: 95.1,
      lighting: 'full',
      soundSystem: 'operational'
    },
    {
      area: 'VIP Suites',
      status: 'active',
      capacity: 2400,
      currentOccupancy: 2187,
      temperature: 71.2,
      airQuality: 97.8,
      lighting: 'ambient',
      soundSystem: 'operational'
    },
    {
      area: 'Parking Garage',
      status: 'busy',
      capacity: 15000,
      currentOccupancy: 12847,
      temperature: 68.9,
      airQuality: 89.4,
      lighting: 'full',
      soundSystem: 'basic'
    }
  ]);

  const [securityOperations, setSecurityOperations] = useState([
    {
      zone: 'Main Entrance',
      staffCount: 12,
      alertLevel: 'normal',
      incidentsToday: 1,
      avgWaitTime: 2.3, // minutes
      metalDetectors: 8,
      bagChecks: 245,
      status: 'operational'
    },
    {
      zone: 'VIP Entrance',
      staffCount: 6,
      alertLevel: 'normal',
      incidentsToday: 0,
      avgWaitTime: 1.1,
      metalDetectors: 4,
      bagChecks: 89,
      status: 'operational'
    },
    {
      zone: 'Arena Floor',
      staffCount: 18,
      alertLevel: 'elevated',
      incidentsToday: 2,
      avgWaitTime: 0,
      metalDetectors: 0,
      bagChecks: 0,
      status: 'monitoring'
    },
    {
      zone: 'Concourse Level',
      staffCount: 24,
      alertLevel: 'normal',
      incidentsToday: 1,
      avgWaitTime: 0,
      metalDetectors: 0,
      bagChecks: 0,
      status: 'operational'
    }
  ]);

  const [concessionOperations, setConcessionOperations] = useState([
    {
      id: 'CONC-001',
      name: 'Pizza & Wings Station',
      location: 'Section 107',
      status: 'operational',
      dailyRevenue: 28475.67,
      transactionsToday: 847,
      avgWaitTime: 4.2,
      staffCount: 8,
      inventoryLevel: 87.3
    },
    {
      id: 'CONC-002',
      name: 'Craft Beer Bar',
      location: 'Section 204',
      status: 'operational',
      dailyRevenue: 34567.89,
      transactionsToday: 1234,
      avgWaitTime: 3.8,
      staffCount: 6,
      inventoryLevel: 92.1
    },
    {
      id: 'CONC-003',
      name: 'Team Store',
      location: 'Main Concourse',
      status: 'busy',
      dailyRevenue: 45678.12,
      transactionsToday: 567,
      avgWaitTime: 5.7,
      staffCount: 12,
      inventoryLevel: 78.6
    },
    {
      id: 'CONC-004',
      name: 'Premium Dining',
      location: 'Club Level',
      status: 'operational',
      dailyRevenue: 67890.23,
      transactionsToday: 234,
      avgWaitTime: 2.1,
      staffCount: 15,
      inventoryLevel: 94.8
    }
  ]);

  const [attendanceAnalytics, setAttendanceAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      attendance: 62456,
      parkingOccupancy: 11234,
      concessionSales: 234567,
      securityAlerts: 3
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      attendance: 63123,
      parkingOccupancy: 11789,
      concessionSales: 256789,
      securityAlerts: 4
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      attendance: 63789,
      parkingOccupancy: 12234,
      concessionSales: 278901,
      securityAlerts: 3
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      attendance: 64234,
      parkingOccupancy: 12567,
      concessionSales: 289012,
      securityAlerts: 4
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      attendance: 64567,
      parkingOccupancy: 12789,
      concessionSales: 298123,
      securityAlerts: 4
    },
    {
      time: new Date().toLocaleTimeString(),
      attendance: 64789,
      parkingOccupancy: 12847,
      concessionSales: 304567,
      securityAlerts: 4
    }
  ]);

  const [venueAlerts, setVenueAlerts] = useState([
    {
      id: 'VEN-001',
      severity: 'warning',
      type: 'Crowd Density',
      message: 'High crowd density detected in West Concourse - deploying additional staff',
      timestamp: new Date(),
      status: 'active',
      location: 'West Concourse',
      impact: 'medium'
    },
    {
      id: 'VEN-002',
      severity: 'info',
      type: 'Weather Alert',
      message: 'Light rain expected during halftime - roof closure procedures initiated',
      timestamp: new Date(Date.now() - 120000),
      status: 'monitoring',
      location: 'Stadium Roof',
      impact: 'low'
    },
    {
      id: 'VEN-003',
      severity: 'critical',
      type: 'Medical Emergency',
      message: 'Medical emergency Section 315 - EMS dispatched, security cordoning area',
      timestamp: new Date(Date.now() - 180000),
      status: 'resolved',
      location: 'Section 315',
      impact: 'high'
    }
  ]);

  const [staffOperations, setStaffOperations] = useState([
    {
      department: 'Security',
      totalStaff: 120,
      onDuty: 60,
      efficiency: 94.2,
      responseTime: 1.8, // minutes
      incidentsHandled: 4
    },
    {
      department: 'Concessions',
      totalStaff: 180,
      onDuty: 85,
      efficiency: 87.6,
      responseTime: 0,
      incidentsHandled: 0
    },
    {
      department: 'Guest Services',
      totalStaff: 45,
      onDuty: 32,
      efficiency: 91.8,
      responseTime: 2.3,
      incidentsHandled: 12
    },
    {
      department: 'Maintenance',
      totalStaff: 35,
      onDuty: 24,
      efficiency: 89.4,
      responseTime: 5.7,
      incidentsHandled: 8
    },
    {
      department: 'Medical',
      totalStaff: 15,
      onDuty: 12,
      efficiency: 96.7,
      responseTime: 1.2,
      incidentsHandled: 3
    }
  ]);

  const [ticketingOperations, setTicketingOperations] = useState({
    totalTicketsAvailable: 147892,
    ticketsSoldToday: 12847,
    currentSalesRate: 234, // per hour
    averageTicketPrice: 87.45,
    revenueProjection: 15674893.23,
    refundRequests: 23,
    digitalTickets: 96.8, // percentage
    mobileAppUsage: 89.4
  });

  const [systemMetrics, setSystemMetrics] = useState({
    ticketingSystem: 99.97, // uptime %
    pointOfSale: 99.94,
    securityCameras: 98.9,
    wifiNetwork: 97.3,
    mobileApp: 99.2,
    avgResponseTime: 0.456, // seconds
    concurrentUsers: 34567,
    dataProcessing: 96.8 // %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update venue metrics
      setVenueMetrics(prev => ({
        ...prev,
        currentAttendance: Math.max(50000, Math.min(68000, prev.currentAttendance + Math.floor((Math.random() - 0.5) * 100))),
        ticketsSold: prev.ticketsSold + Math.floor(Math.random() * 50),
        revenueToday: prev.revenueToday + Math.random() * 5000,
        securityIncidents: Math.max(0, Math.min(15, prev.securityIncidents + Math.floor((Math.random() - 0.7) * 2))),
        avgConcessionWait: Math.max(2, Math.min(8, prev.avgConcessionWait + (Math.random() - 0.5) * 0.3)),
        guestSatisfaction: Math.max(3.5, Math.min(5.0, prev.guestSatisfaction + (Math.random() - 0.5) * 0.05))
      }));

      // Update event operations
      setEventOperations(prev => prev.map(event => {
        let newAttendance = event.attendance;
        if (event.status === 'in_progress') {
          newAttendance = Math.max(event.capacity * 0.8, Math.min(event.capacity, event.attendance + Math.floor((Math.random() - 0.8) * 50)));
        }
        
        return {
          ...event,
          attendance: newAttendance,
          revenue: event.revenue + (event.status === 'in_progress' ? Math.random() * 1000 : 0)
        };
      }));

      // Update venue operations
      setVenueOperations(prev => prev.map(area => ({
        ...area,
        currentOccupancy: Math.max(Math.floor(area.capacity * 0.6), Math.min(area.capacity, area.currentOccupancy + Math.floor((Math.random() - 0.5) * 50))),
        temperature: Math.max(68, Math.min(78, area.temperature + (Math.random() - 0.5) * 0.5)),
        airQuality: Math.max(85, Math.min(100, area.airQuality + (Math.random() - 0.5) * 1))
      })));

      // Update security operations
      setSecurityOperations(prev => prev.map(zone => ({
        ...zone,
        avgWaitTime: Math.max(0.5, Math.min(8, zone.avgWaitTime + (Math.random() - 0.5) * 0.3)),
        bagChecks: zone.bagChecks + Math.floor(Math.random() * 10),
        incidentsToday: Math.max(0, zone.incidentsToday + Math.floor((Math.random() - 0.9) * 2))
      })));

      // Update concession operations
      setConcessionOperations(prev => prev.map(concession => ({
        ...concession,
        dailyRevenue: concession.dailyRevenue + Math.random() * 200,
        transactionsToday: concession.transactionsToday + Math.floor(Math.random() * 5),
        avgWaitTime: Math.max(1, Math.min(10, concession.avgWaitTime + (Math.random() - 0.5) * 0.4)),
        inventoryLevel: Math.max(70, Math.min(100, concession.inventoryLevel + (Math.random() - 0.6) * 1))
      })));

      // Update attendance analytics
      const newAttendanceData = {
        time: new Date().toLocaleTimeString(),
        attendance: venueMetrics.currentAttendance,
        parkingOccupancy: Math.floor(venueMetrics.currentAttendance * 0.2),
        concessionSales: Math.floor(Math.random() * 50000) + 300000,
        securityAlerts: venueMetrics.securityIncidents
      };
      
      setAttendanceAnalytics(prev => [...prev.slice(1), newAttendanceData]);

      // Update ticketing operations
      setTicketingOperations(prev => ({
        ...prev,
        ticketsSoldToday: prev.ticketsSoldToday + Math.floor(Math.random() * 10),
        currentSalesRate: Math.max(50, Math.min(500, prev.currentSalesRate + Math.floor((Math.random() - 0.5) * 20))),
        refundRequests: Math.max(0, prev.refundRequests + Math.floor((Math.random() - 0.9) * 3)),
        mobileAppUsage: Math.max(80, Math.min(95, prev.mobileAppUsage + (Math.random() - 0.5) * 0.5))
      }));

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        ticketingSystem: Math.max(99.5, Math.min(100, prev.ticketingSystem + (Math.random() - 0.3) * 0.01)),
        pointOfSale: Math.max(99.5, Math.min(100, prev.pointOfSale + (Math.random() - 0.3) * 0.01)),
        avgResponseTime: Math.max(0.2, Math.min(2.0, prev.avgResponseTime + (Math.random() - 0.5) * 0.05)),
        concurrentUsers: Math.max(20000, Math.min(50000, prev.concurrentUsers + Math.floor((Math.random() - 0.5) * 1000))),
        wifiNetwork: Math.max(95, Math.min(100, prev.wifiNetwork + (Math.random() - 0.5) * 0.3))
      }));

      // Occasionally add new venue alerts
      if (Math.random() > 0.93) {
        const alertTypes = ['Crowd Density', 'Weather Alert', 'Medical Emergency', 'Security Alert', 'System Alert'];
        const severities = ['info', 'warning', 'critical'];
        const locations = ['Main Arena', 'East Concourse', 'West Concourse', 'VIP Suites', 'Parking Garage'];
        
        const newAlert = {
          id: `VEN-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time venue operations alert generated',
          timestamp: new Date(),
          status: 'active',
          location: locations[Math.floor(Math.random() * locations.length)],
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setVenueAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [venueMetrics.currentAttendance, venueMetrics.securityIncidents]);

  const getEventStatusColor = (status) => {
    switch (status) {
      case 'in_progress': return '#10B981';
      case 'setup': return '#F59E0B';
      case 'scheduled': return '#3B82F6';
      case 'completed': return '#6B7280';
      case 'cancelled': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAreaStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'busy': return '#F59E0B';
      case 'maintenance': return '#EF4444';
      case 'closed': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getSecurityAlertColor = (alertLevel) => {
    switch (alertLevel) {
      case 'normal': return '#10B981';
      case 'elevated': return '#F59E0B';
      case 'high': return '#EF4444';
      case 'critical': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const getConcessionStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'busy': return '#F59E0B';
      case 'maintenance': return '#EF4444';
      case 'closed': return '#6B7280';
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

  const eventTypeDistribution = [
    { name: 'Sports Events', value: 45.7, color: '#3B82F6' },
    { name: 'Concerts', value: 32.8, color: '#8B5CF6' },
    { name: 'Corporate Events', value: 12.4, color: '#10B981' },
    { name: 'Other Events', value: 9.1, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">SPORTS VENUE OPERATIONS CENTER</h1>
            <p className="text-gray-400">Stadium management, event coordination, crowd control, ticketing systems, security monitoring & guest services</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {venueMetrics.currentAttendance.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">ATTENDANCE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              ${(venueMetrics.revenueToday / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-gray-400">REVENUE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{venueMetrics.guestSatisfaction.toFixed(1)}/5.0</div>
            <div className="text-xs text-gray-400">SATISFACTION</div>
          </div>
        </div>
      </div>

      {/* Venue KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">CAPACITY</span>
          </div>
          <div className="text-xl font-bold text-white">
            {Math.round((venueMetrics.currentAttendance / venueMetrics.totalCapacity) * 100)}%
          </div>
          <div className="text-xs text-gray-400">Utilization</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">EVENTS</span>
          </div>
          <div className="text-xl font-bold text-white">{venueMetrics.eventsToday}</div>
          <div className="text-xs text-gray-400">Today</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">TICKETS</span>
          </div>
          <div className="text-xl font-bold text-white">{venueMetrics.ticketsSold.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Sold</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">SECURITY</span>
          </div>
          <div className="text-xl font-bold text-white">{venueMetrics.securityIncidents}</div>
          <div className="text-xs text-gray-400">Incidents</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">WAIT TIME</span>
          </div>
          <div className="text-xl font-bold text-white">{venueMetrics.avgConcessionWait.toFixed(1)}min</div>
          <div className="text-xs text-gray-400">Concessions</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">SYSTEMS</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.ticketingSystem.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Event Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-400" />
            EVENT OPERATIONS
          </h3>
          <div className="space-y-3">
            {eventOperations.map(event => (
              <div key={event.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getEventStatusColor(event.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{event.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getEventStatusColor(event.status)}20`, 
                      color: getEventStatusColor(event.status) 
                    }}>
                      {event.status.toUpperCase().replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Type: <span className="text-purple-400">{event.type}</span> • 
                  Start: <span className="text-blue-400">{event.startTime.toLocaleTimeString()}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Attendance</span>
                    <span className="text-green-400">{event.attendance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-blue-400">{event.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sold</span>
                    <span className="text-purple-400">{event.ticketsSold.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenue</span>
                    <span className="text-white">${(event.revenue / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Vendors: {event.vendorStatus.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="text-gray-500">
                    Security: {event.securityLevel.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-400" />
            VENUE OPERATIONS
          </h3>
          <div className="space-y-3">
            {venueOperations.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAreaStatusColor(area.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{area.area}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getAreaStatusColor(area.status)}20`, 
                    color: getAreaStatusColor(area.status) 
                  }}>
                    {area.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Occupancy</span>
                    <span className="text-blue-400">{Math.round((area.currentOccupancy/area.capacity)*100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-purple-400">{area.currentOccupancy}/{area.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp</span>
                    <span className="text-green-400">{area.temperature.toFixed(1)}°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Air Quality</span>
                    <span className="text-white">{area.airQuality.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Lighting: {area.lighting.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="text-gray-500">
                    Sound: {area.soundSystem.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Concessions */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-red-400" />
            SECURITY & CONCESSIONS
          </h3>
          <div className="space-y-3 mb-4">
            {securityOperations.slice(0, 3).map((zone, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{zone.zone}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getSecurityAlertColor(zone.alertLevel) }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Staff</span>
                    <span className="text-blue-400">{zone.staffCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Incidents</span>
                    <span className="text-red-400">{zone.incidentsToday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wait</span>
                    <span className="text-purple-400">{zone.avgWaitTime.toFixed(1)}min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Checks</span>
                    <span className="text-white">{zone.bagChecks}</span>
                  </div>
                </div>
                
                <div className="text-xs text-yellow-400">
                  Alert Level: {zone.alertLevel.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          {/* Concession Operations */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Concession Operations</div>
            <div className="space-y-2">
              {concessionOperations.slice(0, 3).map(concession => (
                <div key={concession.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getConcessionStatusColor(concession.status) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{concession.name}</span>
                    <span className="text-xs text-green-400">${(concession.dailyRevenue / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{concession.location}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{concession.transactionsToday} sales</span>
                    <span className="text-gray-500">{concession.avgWaitTime.toFixed(1)}min wait</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Venue Alerts */}
          <div className="border-t border-gray-700 pt-3 mt-4">
            <div className="text-sm text-white font-semibold mb-2">Venue Alerts</div>
            <div className="space-y-2">
              {venueAlerts.slice(0, 2).map(alert => (
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

      {/* Venue Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Attendance Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME ATTENDANCE ANALYTICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceAnalytics}>
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
                dataKey="attendance" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Attendance"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="parkingOccupancy" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Parking"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="concessionSales" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Concession Sales ($K)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="securityAlerts" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Security Alerts"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Event Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">EVENT DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={eventTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {eventTypeDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Event Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {eventTypeDistribution.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: event.color }}
                    />
                    <span className="text-gray-400 text-sm">{event.name}</span>
                  </div>
                  <span className="text-white font-semibold">{event.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ticketing</span>
                    <span className="text-green-400">{systemMetrics.ticketingSystem.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Point of Sale</span>
                    <span className="text-blue-400">{systemMetrics.pointOfSale.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">WiFi Network</span>
                    <span className="text-purple-400">{systemMetrics.wifiNetwork.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mobile App</span>
                    <span className="text-green-400">{systemMetrics.mobileApp.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ticketing Operations Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Ticketing Operations</span>
              <span className="text-xs text-blue-400">${ticketingOperations.averageTicketPrice.toFixed(2)} Avg Price</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-400">Sales Rate</span>
                  <span className="text-xs text-green-400">{ticketingOperations.currentSalesRate}/hr</span>
                </div>
                <div className="text-xs text-gray-300">{ticketingOperations.digitalTickets.toFixed(1)}% digital</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-purple-400">Mobile Usage</span>
                  <span className="text-xs text-green-400">{ticketingOperations.mobileAppUsage.toFixed(1)}%</span>
                </div>
                <div className="text-xs text-gray-300">{ticketingOperations.refundRequests} refunds</div>
              </div>
            </div>
          </div>
          
          {/* Venue Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Venue Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Trophy className="w-3 h-3 inline mr-1" />
                  Event Control
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Users className="w-3 h-3 inline mr-1" />
                  Crowd Monitor
                </button>
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Security Ops
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsVenueOperationsCenter;