// MaritimeTrafficVTS.js - Maritime Vessel Traffic Service (VTS) Control Center Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const MaritimeTrafficVTS = () => {
  const [activeVessels, setActiveVessels] = useState([
    {
      id: 'vessel_001',
      name: 'EVER FORWARD',
      mmsi: '477123456',
      callSign: 'VRDB4',
      vesselType: 'CONTAINER_SHIP',
      status: 'UNDER_WAY_USING_ENGINE',
      imo: '9454123',
      flag: 'Marshall Islands',
      length: 400, // meters
      beam: 59,
      draft: 16.2,
      grossTonnage: 224000,
      destination: 'USNYC',
      eta: Date.now() + 4 * 60 * 60 * 1000,
      position: { lat: 40.6892, lon: -74.0445 },
      course: 45, // degrees
      speed: 12.4, // knots
      heading: 43,
      navStatus: 'UNDER_WAY_USING_ENGINE',
      lastUpdate: Date.now() - 2 * 60 * 1000,
      vhfChannel: '16',
      pilot: 'Embarked',
      cargo: 'Containers',
      crew: 24,
      passengers: 0,
      vtsArea: 'NY_HARBOR',
      authority: 'Port Authority NYC'
    },
    {
      id: 'vessel_002',
      name: 'SEASPAN COURAGE',
      mmsi: '316789012',
      callSign: 'CFMZ',
      vesselType: 'BULK_CARRIER',
      status: 'AT_ANCHOR',
      imo: '9678901',
      flag: 'Canada',
      length: 225,
      beam: 32,
      draft: 14.8,
      grossTonnage: 35000,
      destination: 'USBAL',
      eta: Date.now() + 6 * 60 * 60 * 1000,
      position: { lat: 40.6234, lon: -74.0892 },
      course: 0,
      speed: 0,
      heading: 180,
      navStatus: 'AT_ANCHOR',
      lastUpdate: Date.now() - 1 * 60 * 1000,
      vhfChannel: '12',
      pilot: 'Requested',
      cargo: 'Iron Ore',
      crew: 18,
      passengers: 0,
      vtsArea: 'APPROACH_WEST',
      authority: 'USCG VTS'
    },
    {
      id: 'vessel_003',
      name: 'CARNIVAL HORIZON',
      mmsi: '256234567',
      callSign: '9VDR2',
      vesselType: 'PASSENGER',
      status: 'MOORED',
      imo: '9234567',
      flag: 'Malta',
      length: 323,
      beam: 37,
      draft: 8.5,
      grossTonnage: 133500,
      destination: 'CARIBBEAN',
      eta: null,
      position: { lat: 40.6445, lon: -74.0234 },
      course: 0,
      speed: 0,
      heading: 270,
      navStatus: 'MOORED',
      lastUpdate: Date.now() - 30 * 1000,
      vhfChannel: '14',
      pilot: 'N/A',
      cargo: 'Passengers',
      crew: 1450,
      passengers: 3960,
      vtsArea: 'TERMINAL_PASSENGER',
      authority: 'Port Authority NYC'
    },
    {
      id: 'vessel_004',
      name: 'TUG ELIZABETH',
      mmsi: '367456789',
      callSign: 'WDL234',
      vesselType: 'TUG',
      status: 'UNDER_WAY_USING_ENGINE',
      imo: '8456789',
      flag: 'United States',
      length: 30,
      beam: 10,
      draft: 4.2,
      grossTonnage: 150,
      destination: 'LOCAL_ASSIST',
      eta: Date.now() + 45 * 60 * 1000,
      position: { lat: 40.6723, lon: -74.0567 },
      course: 225,
      speed: 8.2,
      heading: 220,
      navStatus: 'UNDER_WAY_USING_ENGINE',
      lastUpdate: Date.now() - 45 * 1000,
      vhfChannel: '13',
      pilot: 'N/A',
      cargo: 'Towage',
      crew: 4,
      passengers: 0,
      vtsArea: 'INNER_HARBOR',
      authority: 'Port Operations'
    },
    {
      id: 'vessel_005',
      name: 'NORDIC SPIRIT',
      mmsi: '219345678',
      callSign: 'OWIQ2',
      vesselType: 'TANKER',
      status: 'RESTRICTED_MANEUVERABILITY',
      imo: '9345678',
      flag: 'Denmark',
      length: 274,
      beam: 48,
      draft: 17.1,
      grossTonnage: 115000,
      destination: 'USBOS',
      eta: Date.now() + 8 * 60 * 60 * 1000,
      position: { lat: 40.5876, lon: -74.1234 },
      course: 15,
      speed: 3.2,
      heading: 18,
      navStatus: 'RESTRICTED_MANEUVERABILITY',
      lastUpdate: Date.now() - 90 * 1000,
      vhfChannel: '16',
      pilot: 'Embarked',
      cargo: 'Crude Oil',
      crew: 26,
      passengers: 0,
      vtsArea: 'APPROACH_SOUTH',
      authority: 'USCG VTS'
    }
  ]);

  const [vtsOperators, setVtsOperators] = useState([
    {
      id: 'op_001',
      name: 'Officer Martinez',
      position: 'VTS Watch Supervisor',
      sector: 'NY Harbor Main',
      status: 'ON_WATCH',
      vhfChannel: '16',
      radarSector: 'Sector 1-4',
      vesselsTracked: 23,
      shift: 'DAY_WATCH',
      certification: 'VTS Operator Level III',
      experience: '8 years',
      lastBreak: Date.now() - 2.5 * 60 * 60 * 1000,
      callsHandled: 47
    },
    {
      id: 'op_002',
      name: 'Specialist Chen',
      position: 'Traffic Coordinator',
      sector: 'Approach Control',
      status: 'ON_WATCH',
      vhfChannel: '12',
      radarSector: 'Sector 5-8',
      vesselsTracked: 15,
      shift: 'DAY_WATCH',
      certification: 'VTS Operator Level II',
      experience: '5 years',
      lastBreak: Date.now() - 1.8 * 60 * 60 * 1000,
      callsHandled: 34
    },
    {
      id: 'op_003',
      name: 'Controller Johnson',
      position: 'Port Control',
      sector: 'Inner Harbor',
      status: 'ON_WATCH',
      vhfChannel: '14',
      radarSector: 'Port Area',
      vesselsTracked: 8,
      shift: 'DAY_WATCH',
      certification: 'VTS Operator Level II',
      experience: '12 years',
      lastBreak: Date.now() - 3 * 60 * 60 * 1000,
      callsHandled: 28
    },
    {
      id: 'op_004',
      name: 'Senior Watch Davis',
      position: 'VTS Manager',
      sector: 'All Sectors',
      status: 'ON_DUTY',
      vhfChannel: 'All',
      radarSector: 'Supervisor',
      vesselsTracked: 0,
      shift: 'DAY_WATCH',
      certification: 'VTS Manager',
      experience: '15 years',
      lastBreak: Date.now() - 1 * 60 * 60 * 1000,
      callsHandled: 12
    }
  ]);

  const [maritimeConditions, setMaritimeConditions] = useState({
    visibility: '8 nautical miles',
    weather: 'Light Rain',
    windSpeed: 15, // knots
    windDirection: 225, // degrees
    waveHeight: 1.2, // meters
    currentSpeed: 2.1, // knots
    currentDirection: 180,
    tidalHeight: 3.4, // meters
    tidalStatus: 'High Tide',
    nextTide: Date.now() + 6 * 60 * 60 * 1000,
    barometricPressure: 1013.2, // mbar
    temperature: 18, // Celsius
    seaState: 'SLIGHT',
    iceConditions: 'ICE_FREE',
    marineSafety: 'GREEN',
    securityLevel: 'MARSEC_1'
  });

  const [vtsMetrics, setVtsMetrics] = useState({
    totalVessels: activeVessels.length,
    vesselsInbound: 12,
    vesselsOutbound: 8,
    vesselsAtAnchor: 6,
    vesselsMoored: 15,
    pilotRequests: 4,
    tugAssists: 3,
    emergencyAlerts: 0,
    trafficDensity: 'MODERATE',
    averageTransitTime: 87, // minutes
    portCapacity: 85.4, // percentage
    berthOccupancy: 78.2,
    anchorageUtilization: 45.6,
    searchRescueOperations: 0,
    pollutionIncidents: 0,
    securityIncidents: 0
  });

  const [navigationAids, setNavigationAids] = useState([
    {
      id: 'nav_001',
      name: 'Ambrose Light',
      type: 'LIGHTHOUSE',
      status: 'OPERATIONAL',
      position: { lat: 40.4608, lon: -73.8328 },
      range: '19 nautical miles',
      characteristic: 'Fl W 7.5s',
      height: '41 meters',
      lastMaintenance: Date.now() - 15 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 75 * 24 * 60 * 60 * 1000,
      powerStatus: 'NORMAL',
      backup: 'AVAILABLE'
    },
    {
      id: 'nav_002',
      name: 'Entrance Buoy NY-1',
      type: 'BUOY',
      status: 'OPERATIONAL',
      position: { lat: 40.5234, lon: -73.9876 },
      range: '8 nautical miles',
      characteristic: 'Fl R 4s',
      height: '6 meters',
      lastMaintenance: Date.now() - 30 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 60 * 24 * 60 * 60 * 1000,
      powerStatus: 'NORMAL',
      backup: 'SOLAR'
    },
    {
      id: 'nav_003',
      name: 'Harbor Radar Station 1',
      type: 'RADAR',
      status: 'OPERATIONAL',
      position: { lat: 40.6892, lon: -74.0445 },
      range: '24 nautical miles',
      characteristic: 'X-Band',
      height: '85 meters',
      lastMaintenance: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 83 * 24 * 60 * 60 * 1000,
      powerStatus: 'NORMAL',
      backup: 'GENERATOR'
    },
    {
      id: 'nav_004',
      name: 'VHF Repeater Site A',
      type: 'VHF_STATION',
      status: 'OPERATIONAL',
      position: { lat: 40.7234, lon: -74.0123 },
      range: '20 nautical miles',
      characteristic: 'Ch 16, 12, 14',
      height: '120 meters',
      lastMaintenance: Date.now() - 10 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 80 * 24 * 60 * 60 * 1000,
      powerStatus: 'NORMAL',
      backup: 'UPS + GENERATOR'
    }
  ]);

  const [marineIncidents, setMarineIncidents] = useState([
    {
      id: 'inc_001',
      timestamp: Date.now() - 25 * 60 * 1000,
      type: 'NAVIGATION_HAZARD',
      severity: 'MEDIUM',
      location: 'Anchorage Area B',
      description: 'Drifting cargo container reported',
      vesselInvolved: 'Multiple',
      status: 'INVESTIGATING',
      authority: 'USCG',
      broadcastIssued: true,
      actionTaken: 'Navigation warning broadcast on VHF Ch 16',
      reportedBy: 'M/V Atlantic Merchant'
    },
    {
      id: 'inc_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      type: 'MEDICAL_EMERGENCY',
      severity: 'HIGH',
      location: 'Position 40°38\'N 074°02\'W',
      description: 'Crew member injury on fishing vessel',
      vesselInvolved: 'F/V Sarah Lynn',
      status: 'RESOLVED',
      authority: 'USCG',
      broadcastIssued: true,
      actionTaken: 'USCG helicopter medevac completed',
      reportedBy: 'F/V Sarah Lynn'
    }
  ]);

  const [trafficTrends, setTrafficTrends] = useState([]);
  const [vesselTypes, setVesselTypes] = useState([]);

  const generateTrafficTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        total_vessels: Math.floor(Math.random() * 20) + 35,
        arrivals: Math.floor(Math.random() * 8) + 2,
        departures: Math.floor(Math.random() * 6) + 2,
        anchored: Math.floor(Math.random() * 10) + 5,
        transit_time: Math.random() * 40 + 60, // 60-100 minutes
        pilot_requests: Math.floor(Math.random() * 6) + 1
      });
    }
    return data;
  };

  const generateVesselTypes = () => {
    return [
      { type: 'Container Ship', count: 8, percentage: 32.0 },
      { type: 'Bulk Carrier', count: 5, percentage: 20.0 },
      { type: 'Tanker', count: 4, percentage: 16.0 },
      { type: 'Passenger', count: 3, percentage: 12.0 },
      { type: 'General Cargo', count: 3, percentage: 12.0 },
      { type: 'Tug/Workboat', count: 2, percentage: 8.0 }
    ];
  };

  useEffect(() => {
    setTrafficTrends(generateTrafficTrends());
    setVesselTypes(generateVesselTypes());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update vessel positions and status
      setActiveVessels(prev => prev.map(vessel => {
        let newPosition = { ...vessel.position };
        let newCourse = vessel.course;
        let newSpeed = vessel.speed;
        let newStatus = vessel.status;
        
        if (vessel.navStatus === 'UNDER_WAY_USING_ENGINE') {
          // Simulate movement based on course and speed
          const speedMs = vessel.speed * 0.000514444; // knots to meters per second
          const courseRad = (vessel.course * Math.PI) / 180;
          
          newPosition.lat += Math.cos(courseRad) * speedMs * 30 * (1/111320); // 30 seconds * lat conversion
          newPosition.lon += Math.sin(courseRad) * speedMs * 30 * (1/(111320 * Math.cos(vessel.position.lat * Math.PI / 180)));
          
          newSpeed = Math.max(0, Math.min(25, vessel.speed + (Math.random() - 0.5) * 2));
          newCourse = (vessel.course + (Math.random() - 0.5) * 10 + 360) % 360;
        }
        
        // Occasionally change status
        if (Math.random() > 0.98) {
          if (vessel.navStatus === 'UNDER_WAY_USING_ENGINE' && Math.random() > 0.5) {
            newStatus = 'AT_ANCHOR';
            newSpeed = 0;
          } else if (vessel.navStatus === 'AT_ANCHOR' && Math.random() > 0.7) {
            newStatus = 'UNDER_WAY_USING_ENGINE';
            newSpeed = 8 + Math.random() * 10;
          }
        }

        return {
          ...vessel,
          position: newPosition,
          course: newCourse,
          speed: newSpeed,
          navStatus: newStatus,
          lastUpdate: Date.now()
        };
      }));

      // Update VTS operators
      setVtsOperators(prev => prev.map(operator => ({
        ...operator,
        vesselsTracked: Math.max(0, operator.vesselsTracked + Math.floor((Math.random() - 0.5) * 4)),
        callsHandled: operator.callsHandled + Math.floor(Math.random() * 3)
      })));

      // Update maritime conditions
      setMaritimeConditions(prev => ({
        ...prev,
        windSpeed: Math.max(0, Math.min(40, prev.windSpeed + (Math.random() - 0.5) * 3)),
        windDirection: (prev.windDirection + (Math.random() - 0.5) * 15 + 360) % 360,
        waveHeight: Math.max(0, Math.min(5, prev.waveHeight + (Math.random() - 0.5) * 0.3)),
        tidalHeight: Math.max(0, Math.min(6, prev.tidalHeight + (Math.random() - 0.5) * 0.2))
      }));

      // Update VTS metrics
      setVtsMetrics(prev => ({
        ...prev,
        totalVessels: activeVessels.length,
        portCapacity: Math.max(60, Math.min(100, prev.portCapacity + (Math.random() - 0.5) * 3)),
        berthOccupancy: Math.max(40, Math.min(95, prev.berthOccupancy + (Math.random() - 0.5) * 2)),
        averageTransitTime: Math.max(45, Math.min(120, prev.averageTransitTime + (Math.random() - 0.5) * 5))
      }));

      // Occasionally add new incidents
      if (Math.random() > 0.985) {
        const incidentTypes = ['NAVIGATION_HAZARD', 'MECHANICAL_FAILURE', 'COLLISION_RISK', 'WEATHER_DELAY'];
        const severities = ['LOW', 'MEDIUM', 'HIGH'];
        
        const newIncident = {
          id: `inc_${Date.now()}`,
          timestamp: Date.now(),
          type: incidentTypes[Math.floor(Math.random() * incidentTypes.length)],
          severity: severities[Math.floor(Math.random() * severities.length)],
          location: 'Harbor Area',
          description: 'Automated VTS incident detection',
          vesselInvolved: activeVessels[Math.floor(Math.random() * activeVessels.length)].name,
          status: 'INVESTIGATING',
          authority: 'VTS',
          broadcastIssued: false,
          actionTaken: 'Monitoring situation',
          reportedBy: 'VTS Radar'
        };
        
        setMarineIncidents(prev => [newIncident, ...prev.slice(0, 9)]);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [activeVessels]);

  const getVesselStatusColor = (status) => {
    switch (status) {
      case 'UNDER_WAY_USING_ENGINE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'AT_ANCHOR': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'NOT_UNDER_COMMAND': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'RESTRICTED_MANEUVERABILITY': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MOORED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'AGROUND': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getOperatorStatusColor = (status) => {
    switch (status) {
      case 'ON_WATCH': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'ON_DUTY': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'BREAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFF_DUTY': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getIncidentSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getNavAidStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'FAULTY': return 'text-red-400 bg-red-400/20 border-red-400/30';
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
    if (diff < 60000) return 'Arrived';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    return `${Math.floor(diff / 3600000)}h ${Math.floor((diff % 3600000) / 60000)}m`;
  };

  const formatPosition = (lat, lon) => {
    const latDeg = Math.floor(Math.abs(lat));
    const latMin = ((Math.abs(lat) - latDeg) * 60).toFixed(1);
    const latDir = lat >= 0 ? 'N' : 'S';
    
    const lonDeg = Math.floor(Math.abs(lon));
    const lonMin = ((Math.abs(lon) - lonDeg) * 60).toFixed(1);
    const lonDir = lon >= 0 ? 'E' : 'W';
    
    return `${latDeg}°${latMin}'${latDir} ${lonDeg}°${lonMin}'${lonDir}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚢 VESSEL TRAFFIC SERVICE (VTS) CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${
            maritimeConditions.marineSafety === 'GREEN' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
            maritimeConditions.marineSafety === 'YELLOW' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            {maritimeConditions.marineSafety}
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {vtsMetrics.totalVessels} VESSELS
          </div>
          <div className="text-sm text-gray-400 font-mono">
            USCG Vessel Movement Reporting System
          </div>
        </div>
      </div>

      {/* VTS Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ACTIVE VESSELS</div>
              <div className="text-2xl font-bold text-blue-100">
                {vtsMetrics.totalVessels}
              </div>
              <div className="text-xs text-blue-300">
                {vtsMetrics.vesselsInbound} inbound / {vtsMetrics.vesselsOutbound} outbound
              </div>
            </div>
            <div className="text-3xl opacity-60">🚢</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">PORT CAPACITY</div>
              <div className="text-2xl font-bold text-green-100">
                {vtsMetrics.portCapacity.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                {vtsMetrics.berthOccupancy.toFixed(1)}% berths occupied
              </div>
            </div>
            <div className="text-3xl opacity-60">⚓</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG TRANSIT TIME</div>
              <div className="text-2xl font-bold text-purple-100">
                {vtsMetrics.averageTransitTime}m
              </div>
              <div className="text-xs text-purple-300">
                {vtsMetrics.pilotRequests} pilot requests
              </div>
            </div>
            <div className="text-3xl opacity-60">🕐</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CONDITIONS</div>
              <div className="text-2xl font-bold text-orange-100">
                {maritimeConditions.windSpeed}kts
              </div>
              <div className="text-xs text-orange-300">
                {maritimeConditions.weather} / {maritimeConditions.visibility}
              </div>
            </div>
            <div className="text-3xl opacity-60">🌊</div>
          </div>
        </div>
      </div>

      {/* Active Vessels and VTS Operators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Vessels */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚢 ACTIVE VESSELS (AIS)
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeVessels.map((vessel) => (
              <div key={vessel.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{vessel.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getVesselStatusColor(vessel.navStatus)}`}>
                      {vessel.navStatus.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {vessel.vesselType.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(vessel.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">
                  MMSI: {vessel.mmsi} | IMO: {vessel.imo} | {vessel.callSign}
                </div>
                <div className="text-xs text-cyan-400 mb-3">
                  {vessel.flag} | {vessel.length}m x {vessel.beam}m | {vessel.grossTonnage}t
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Position</div>
                    <div className="text-green-400">{formatPosition(vessel.position.lat, vessel.position.lon)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Course/Speed</div>
                    <div className="text-yellow-400">{vessel.course.toString().padStart(3, '0')}° / {vessel.speed.toFixed(1)}kts</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Heading</div>
                    <div className="text-orange-400">{vessel.heading.toString().padStart(3, '0')}°</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Draft</div>
                    <div className="text-blue-400">{vessel.draft.toFixed(1)}m</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Destination</div>
                    <div className="text-pink-400">{vessel.destination}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ETA</div>
                    <div className="text-indigo-400">{formatETA(vessel.eta)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">VHF Channel</div>
                    <div className="text-red-400">Ch {vessel.vhfChannel}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Pilot</div>
                    <div className="text-purple-400">{vessel.pilot}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">VTS Area</div>
                    <div className="text-cyan-400">{vessel.vtsArea}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Cargo</div>
                    <div className="text-yellow-400">{vessel.cargo}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Crew</div>
                    <div className="text-green-400">{vessel.crew}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Passengers</div>
                    <div className="text-blue-400">{vessel.passengers}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VTS Operators */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📻 VTS OPERATORS ON WATCH
          </h3>
          <div className="space-y-3">
            {vtsOperators.map((operator) => (
              <div key={operator.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{operator.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getOperatorStatusColor(operator.status)}`}>
                      {operator.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {operator.shift}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">{operator.position}</div>
                <div className="text-xs text-cyan-400 mb-3">{operator.certification}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Sector</div>
                    <div className="text-green-400">{operator.sector}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">VHF Channel</div>
                    <div className="text-yellow-400">Ch {operator.vhfChannel}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Experience</div>
                    <div className="text-orange-400">{operator.experience}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Vessels Tracked</div>
                    <div className="text-blue-400">{operator.vesselsTracked}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Calls Handled</div>
                    <div className="text-pink-400">{operator.callsHandled}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Last Break</div>
                    <div className="text-indigo-400">{formatTime(operator.lastBreak)}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="text-gray-400">Radar Sector: </div>
                  <div className="text-red-400">{operator.radarSector}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Aids and Traffic Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Navigation Aids */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏮 NAVIGATION AIDS STATUS
          </h3>
          <div className="space-y-3">
            {navigationAids.map((aid) => (
              <div key={aid.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{aid.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getNavAidStatusColor(aid.status)}`}>
                      {aid.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {aid.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Position</div>
                    <div className="text-cyan-400">{formatPosition(aid.position.lat, aid.position.lon)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Range</div>
                    <div className="text-green-400">{aid.range}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Height</div>
                    <div className="text-yellow-400">{aid.height}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Characteristic</div>
                    <div className="text-purple-400">{aid.characteristic}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Power Status</div>
                    <div className="text-blue-400">{aid.powerStatus}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="text-gray-400">Backup: </div>
                  <div className="text-orange-400">{aid.backup}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 VESSEL TRAFFIC TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficTrends}>
              <defs>
                <linearGradient id="vesselsGradient" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="total_vessels" 
                stroke="#3B82F6" 
                fill="url(#vesselsGradient)" 
                name="Total Vessels"
              />
              <Line 
                type="monotone" 
                dataKey="arrivals" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Arrivals"
              />
              <Line 
                type="monotone" 
                dataKey="departures" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Departures"
              />
              <Line 
                type="monotone" 
                dataKey="anchored" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Anchored"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Maritime Conditions and Marine Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Maritime Conditions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌊 MARITIME CONDITIONS
          </h3>
          
          <div className="space-y-4">
            {/* Weather */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Weather & Visibility</h4>
              <div className="bg-gray-700 rounded p-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Weather:</span>
                    <span className="text-blue-400">{maritimeConditions.weather}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Visibility:</span>
                    <span className="text-green-400">{maritimeConditions.visibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temperature:</span>
                    <span className="text-yellow-400">{maritimeConditions.temperature}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pressure:</span>
                    <span className="text-orange-400">{maritimeConditions.barometricPressure} mbar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wind & Sea */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Wind & Sea State</h4>
              <div className="bg-gray-700 rounded p-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wind:</span>
                    <span className="text-cyan-400">{maritimeConditions.windDirection}° @ {maritimeConditions.windSpeed}kts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wave Height:</span>
                    <span className="text-purple-400">{maritimeConditions.waveHeight.toFixed(1)}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sea State:</span>
                    <span className="text-pink-400">{maritimeConditions.seaState}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ice Conditions:</span>
                    <span className="text-indigo-400">{maritimeConditions.iceConditions}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tides & Current */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Tides & Current</h4>
              <div className="bg-gray-700 rounded p-3">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tidal Height:</span>
                    <span className="text-green-400">{maritimeConditions.tidalHeight.toFixed(1)}m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tidal Status:</span>
                    <span className="text-blue-400">{maritimeConditions.tidalStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current:</span>
                    <span className="text-yellow-400">{maritimeConditions.currentDirection}° @ {maritimeConditions.currentSpeed}kts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Security Level:</span>
                    <span className="text-red-400">{maritimeConditions.securityLevel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vessel Types */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Vessel Mix Today</h4>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={vesselTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={45}
                    fill="#8884d8"
                    dataKey="count"
                    label={({type, percentage}) => `${type}: ${percentage}%`}
                  >
                    {vesselTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={
                        ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][index % 6]
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
          </div>
        </div>

        {/* Marine Incidents */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 MARINE INCIDENTS & ALERTS
          </h3>
          
          {marineIncidents.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg mb-2">✅</div>
              <div className="text-green-400 font-bold">NO ACTIVE INCIDENTS</div>
              <div className="text-gray-400 text-sm mt-2">All vessels operating normally</div>
            </div>
          ) : (
            <div className="space-y-3">
              {marineIncidents.map((incident) => (
                <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getIncidentSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                        {incident.type.replace(/_/g, ' ')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        incident.status === 'RESOLVED' ? 'bg-green-500 text-white' :
                        incident.status === 'INVESTIGATING' ? 'bg-yellow-500 text-black' :
                        'bg-red-500 text-white'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(incident.timestamp)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white mb-2">{incident.description}</div>
                  <div className="text-xs text-cyan-400 mb-1">📍 {incident.location}</div>
                  <div className="text-xs text-purple-400 mb-1">🚢 {incident.vesselInvolved}</div>
                  <div className="text-xs text-orange-400 mb-1">👨‍💼 {incident.authority}</div>
                  
                  <div className="text-xs text-green-400 mb-1">
                    ⚡ {incident.actionTaken}
                  </div>
                  <div className="text-xs text-yellow-400">
                    📋 Reported by: {incident.reportedBy}
                  </div>
                  
                  {incident.broadcastIssued && (
                    <div className="text-xs text-red-400 mt-2">
                      📡 NAVIGATION WARNING BROADCAST
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* VTS Metrics Summary */}
          <div className="mt-6 pt-4 border-t border-gray-600">
            <h4 className="text-sm font-bold text-white mb-3">VTS Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Emergency Alerts</div>
                <div className="text-red-400 font-bold">{vtsMetrics.emergencyAlerts}</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">SAR Operations</div>
                <div className="text-orange-400 font-bold">{vtsMetrics.searchRescueOperations}</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Pollution Incidents</div>
                <div className="text-yellow-400 font-bold">{vtsMetrics.pollutionIncidents}</div>
              </div>
              <div className="bg-gray-700 rounded p-2">
                <div className="text-gray-400">Security Incidents</div>
                <div className="text-blue-400 font-bold">{vtsMetrics.securityIncidents}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeTrafficVTS;