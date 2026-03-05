// DataCenterOperations.js - Data Center Operations Control (NOC/DCIM) & Infrastructure Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const DataCenterOperations = () => {
  const [servers, setServers] = useState([
    {
      id: 'srv_001',
      hostname: 'web-prod-01.dc1.company.com',
      role: 'Web Server',
      rack: 'R42-A-15',
      location: 'DC1-Floor2-Row4',
      status: 'ONLINE',
      uptime: 1247567, // seconds
      cpuUsage: 67.8,
      memoryUsage: 78.3,
      diskUsage: 45.2,
      networkThroughput: 1250, // Mbps
      temperature: 42.5, // Celsius
      powerUsage: 285, // Watts
      alerts: 0,
      os: 'Ubuntu 22.04 LTS',
      ipAddress: '192.168.1.15',
      manufacturer: 'Dell',
      model: 'PowerEdge R750',
      serialNumber: 'DLL7X5G3',
      warranty: '2026-12-15',
      lastUpdate: Date.now() - 15 * 1000,
      applications: ['nginx', 'node.js', 'redis'],
      monitoring: true,
      backup: 'COMPLETED',
      maintenanceWindow: null
    },
    {
      id: 'srv_002',
      hostname: 'db-primary-01.dc1.company.com',
      role: 'Database Server',
      rack: 'R42-A-20',
      location: 'DC1-Floor2-Row4',
      status: 'ONLINE',
      uptime: 2345234,
      cpuUsage: 89.2,
      memoryUsage: 92.1,
      diskUsage: 71.8,
      networkThroughput: 2100,
      temperature: 48.7,
      powerUsage: 420,
      alerts: 2,
      os: 'CentOS 8',
      ipAddress: '192.168.1.20',
      manufacturer: 'HPE',
      model: 'ProLiant DL380 Gen10',
      serialNumber: 'HP2Z9F8K',
      warranty: '2027-06-20',
      lastUpdate: Date.now() - 8 * 1000,
      applications: ['postgresql', 'redis-cluster', 'prometheus'],
      monitoring: true,
      backup: 'IN_PROGRESS',
      maintenanceWindow: null
    },
    {
      id: 'srv_003',
      hostname: 'cache-cluster-01.dc2.company.com',
      role: 'Cache Server',
      rack: 'R35-B-08',
      location: 'DC2-Floor1-Row3',
      status: 'WARNING',
      uptime: 567234,
      cpuUsage: 34.5,
      memoryUsage: 95.7,
      diskUsage: 23.1,
      networkThroughput: 850,
      temperature: 51.2,
      powerUsage: 195,
      alerts: 3,
      os: 'Redis Enterprise',
      ipAddress: '10.0.2.8',
      manufacturer: 'Supermicro',
      model: 'SuperServer 2029P',
      serialNumber: 'SM5L1M9A',
      warranty: '2025-11-30',
      lastUpdate: Date.now() - 30 * 1000,
      applications: ['redis-enterprise', 'sentinel', 'consul'],
      monitoring: true,
      backup: 'FAILED',
      maintenanceWindow: 'SCHEDULED'
    },
    {
      id: 'srv_004',
      hostname: 'app-worker-05.dc1.company.com',
      role: 'Application Server',
      rack: 'R42-C-12',
      location: 'DC1-Floor2-Row4',
      status: 'MAINTENANCE',
      uptime: 0,
      cpuUsage: 0,
      memoryUsage: 0,
      diskUsage: 62.4,
      networkThroughput: 0,
      temperature: 25.8,
      powerUsage: 0,
      alerts: 0,
      os: 'Windows Server 2022',
      ipAddress: '192.168.1.45',
      manufacturer: 'Lenovo',
      model: 'ThinkSystem SR650 V2',
      serialNumber: 'LN8K4P2X',
      warranty: '2028-03-10',
      lastUpdate: Date.now() - 2 * 60 * 60 * 1000,
      applications: ['.NET Core', 'IIS', 'SQL Server'],
      monitoring: false,
      backup: 'COMPLETED',
      maintenanceWindow: 'ACTIVE'
    },
    {
      id: 'srv_005',
      hostname: 'storage-nas-01.dc1.company.com',
      role: 'Storage Server',
      rack: 'R42-D-25',
      location: 'DC1-Floor2-Row4',
      status: 'CRITICAL',
      uptime: 1834567,
      cpuUsage: 45.2,
      memoryUsage: 67.8,
      diskUsage: 96.8,
      networkThroughput: 4200,
      temperature: 55.3,
      powerUsage: 680,
      alerts: 5,
      os: 'TrueNAS SCALE',
      ipAddress: '192.168.1.100',
      manufacturer: 'QNAP',
      model: 'TS-2888X',
      serialNumber: 'QN7R5K9M',
      warranty: '2026-08-15',
      lastUpdate: Date.now() - 5 * 1000,
      applications: ['truenas', 'zfs', 'smb'],
      monitoring: true,
      backup: 'DISABLED',
      maintenanceWindow: null
    }
  ]);

  const [networkDevices, setNetworkDevices] = useState([
    {
      id: 'net_001',
      hostname: 'core-switch-01.dc1',
      type: 'Core Switch',
      location: 'DC1-Network-Rack',
      status: 'ONLINE',
      uptime: 5234567,
      portUtilization: 67.5,
      packetLoss: 0.02,
      latency: 1.2, // ms
      bandwidth: 10000, // Mbps total capacity
      throughput: 6750, // Current Mbps
      temperature: 38.5,
      fanSpeed: 3200, // RPM
      powerUsage: 150,
      manufacturer: 'Cisco',
      model: 'Catalyst 9500-48Y4C',
      firmware: '17.09.04a',
      ipAddress: '192.168.1.254',
      managementVlan: 100,
      ports: 48,
      portsActive: 32,
      lastUpdate: Date.now() - 20 * 1000
    },
    {
      id: 'net_002',
      hostname: 'access-switch-02.dc1',
      type: 'Access Switch',
      location: 'DC1-Floor2-Row4',
      status: 'ONLINE',
      uptime: 2134567,
      portUtilization: 45.8,
      packetLoss: 0.01,
      latency: 0.8,
      bandwidth: 1000,
      throughput: 458,
      temperature: 41.2,
      fanSpeed: 2800,
      powerUsage: 85,
      manufacturer: 'Arista',
      model: '7050SX3-48YC8',
      firmware: '4.28.3M',
      ipAddress: '192.168.1.252',
      managementVlan: 100,
      ports: 48,
      portsActive: 22,
      lastUpdate: Date.now() - 12 * 1000
    },
    {
      id: 'net_003',
      hostname: 'firewall-01.dc1',
      type: 'Firewall',
      location: 'DC1-Security-Zone',
      status: 'ONLINE',
      uptime: 7834567,
      portUtilization: 23.4,
      packetLoss: 0.00,
      latency: 0.5,
      bandwidth: 10000,
      throughput: 2340,
      temperature: 44.7,
      fanSpeed: 3500,
      powerUsage: 225,
      manufacturer: 'Palo Alto',
      model: 'PA-5220',
      firmware: 'PAN-OS 11.0.3',
      ipAddress: '10.0.0.1',
      managementVlan: 200,
      ports: 16,
      portsActive: 8,
      lastUpdate: Date.now() - 25 * 1000
    },
    {
      id: 'net_004',
      hostname: 'load-balancer-01.dc2',
      type: 'Load Balancer',
      location: 'DC2-Edge-Rack',
      status: 'WARNING',
      uptime: 1234567,
      portUtilization: 78.9,
      packetLoss: 0.05,
      latency: 2.8,
      bandwidth: 20000,
      throughput: 15780,
      temperature: 52.1,
      fanSpeed: 4200,
      powerUsage: 380,
      manufacturer: 'F5',
      model: 'BIG-IP i4800',
      firmware: 'TMOS 17.1.0',
      ipAddress: '10.0.1.10',
      managementVlan: 300,
      ports: 8,
      portsActive: 6,
      lastUpdate: Date.now() - 45 * 1000
    }
  ]);

  const [environmentalSensors, setEnvironmentalSensors] = useState([
    {
      id: 'env_001',
      location: 'DC1-Floor2-Cold-Aisle-A',
      type: 'Temperature/Humidity',
      temperature: 20.5,
      humidity: 42.3,
      status: 'NORMAL',
      thresholds: { tempMin: 18, tempMax: 25, humidityMin: 40, humidityMax: 60 },
      lastUpdate: Date.now() - 10 * 1000
    },
    {
      id: 'env_002',
      location: 'DC1-Floor2-Hot-Aisle-A',
      type: 'Temperature/Humidity',
      temperature: 28.7,
      humidity: 38.9,
      status: 'NORMAL',
      thresholds: { tempMin: 25, tempMax: 35, humidityMin: 35, humidityMax: 65 },
      lastUpdate: Date.now() - 15 * 1000
    },
    {
      id: 'env_003',
      location: 'DC2-Floor1-CRAC-Unit-01',
      type: 'HVAC Monitor',
      temperature: 22.1,
      humidity: 45.2,
      status: 'WARNING',
      thresholds: { tempMin: 18, tempMax: 24, humidityMin: 40, humidityMax: 50 },
      lastUpdate: Date.now() - 5 * 1000
    },
    {
      id: 'env_004',
      location: 'DC1-Entrance-Smoke-Detector',
      type: 'Smoke Detection',
      temperature: 24.3,
      humidity: 35.7,
      status: 'NORMAL',
      smokeLevel: 0.02, // ppm
      thresholds: { smokeMax: 0.1 },
      lastUpdate: Date.now() - 8 * 1000
    }
  ]);

  const [powerSystems, setPowerSystems] = useState([
    {
      id: 'pwr_001',
      name: 'UPS-01-Main',
      location: 'DC1-Power-Room',
      type: 'UPS System',
      status: 'ONLINE',
      load: 67.8, // percentage
      batteryLevel: 100,
      runtime: 15.5, // minutes at current load
      inputVoltage: 230.5,
      outputVoltage: 230.2,
      frequency: 50.0,
      powerKW: 45.2,
      capacity: 100, // kW
      efficiency: 94.2,
      temperature: 32.8,
      lastMaintenance: '2026-01-15',
      nextMaintenance: '2026-07-15',
      alerts: 0
    },
    {
      id: 'pwr_002',
      name: 'PDU-R42-A',
      location: 'DC1-Floor2-Rack42',
      type: 'Power Distribution Unit',
      status: 'ONLINE',
      load: 78.9,
      batteryLevel: null,
      runtime: null,
      inputVoltage: 230.2,
      outputVoltage: 230.0,
      frequency: 50.0,
      powerKW: 15.8,
      capacity: 20,
      efficiency: 98.5,
      temperature: 28.5,
      lastMaintenance: '2025-12-10',
      nextMaintenance: '2026-06-10',
      alerts: 1
    },
    {
      id: 'pwr_003',
      name: 'Generator-Diesel-01',
      location: 'DC1-External-Yard',
      type: 'Backup Generator',
      status: 'STANDBY',
      load: 0,
      batteryLevel: null,
      runtime: 480, // minutes at full load
      inputVoltage: null,
      outputVoltage: 400.0,
      frequency: 50.0,
      powerKW: 0,
      capacity: 500,
      efficiency: null,
      temperature: 18.7,
      fuelLevel: 85.3, // percentage
      lastTest: '2026-02-28',
      nextTest: '2026-03-28',
      alerts: 0
    }
  ]);

  const [incidents, setIncidents] = useState([
    {
      id: 'inc_001',
      timestamp: Date.now() - 15 * 60 * 1000,
      severity: 'HIGH',
      type: 'DISK_SPACE_CRITICAL',
      device: 'storage-nas-01.dc1.company.com',
      description: 'Storage server disk usage exceeded 95% threshold',
      status: 'ACKNOWLEDGED',
      assignedTo: 'NOC Team',
      impact: 'Service degradation possible',
      resolution: 'Cleanup old backups and logs',
      estimatedResolution: '30 minutes',
      affected: ['File sharing', 'Backup services']
    },
    {
      id: 'inc_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      severity: 'MEDIUM',
      type: 'TEMPERATURE_WARNING',
      device: 'DC2-Floor1-CRAC-Unit-01',
      description: 'HVAC unit temperature trending above normal range',
      status: 'IN_PROGRESS',
      assignedTo: 'Facilities Team',
      impact: 'Potential equipment overheating',
      resolution: 'HVAC maintenance scheduled',
      estimatedResolution: '2 hours',
      affected: ['DC2 cooling system']
    },
    {
      id: 'inc_003',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'LOW',
      type: 'PACKET_LOSS_DETECTED',
      device: 'load-balancer-01.dc2',
      description: 'Minor packet loss detected on load balancer',
      status: 'MONITORING',
      assignedTo: 'Network Team',
      impact: 'Slight performance degradation',
      resolution: 'Monitoring traffic patterns',
      estimatedResolution: '1 hour',
      affected: ['Load balancing efficiency']
    },
    {
      id: 'inc_004',
      timestamp: Date.now() - 6 * 60 * 60 * 1000,
      severity: 'HIGH',
      type: 'BACKUP_FAILURE',
      device: 'cache-cluster-01.dc2.company.com',
      description: 'Automated backup process failed multiple times',
      status: 'RESOLVED',
      assignedTo: 'Database Team',
      impact: 'Data recovery risk',
      resolution: 'Backup configuration corrected',
      estimatedResolution: 'Completed',
      affected: ['Data backup integrity']
    }
  ]);

  const [performanceTrends, setPerformanceTrends] = useState([]);
  const [capacityTrends, setCapacityTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        cpuAvg: Math.floor(Math.random() * 40) + 40, // 40-80%
        memoryAvg: Math.floor(Math.random() * 30) + 50, // 50-80%
        networkThroughput: Math.floor(Math.random() * 2000) + 1000, // 1000-3000 Mbps
        diskIO: Math.floor(Math.random() * 500) + 200, // 200-700 IOPS
        powerConsumption: Math.floor(Math.random() * 20) + 80, // 80-100 kW
        temperature: Math.floor(Math.random() * 10) + 40 // 40-50°C
      });
    }
    return data;
  };

  const generateCapacityTrends = () => {
    return [
      { category: 'Compute', used: 68.5, total: 100, available: 31.5 },
      { category: 'Storage', used: 82.3, total: 100, available: 17.7 },
      { category: 'Network', used: 45.7, total: 100, available: 54.3 },
      { category: 'Power', used: 67.8, total: 100, available: 32.2 },
      { category: 'Cooling', used: 71.2, total: 100, available: 28.8 }
    ];
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
    setCapacityTrends(generateCapacityTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update servers
      setServers(prev => prev.map(server => {
        if (server.status === 'MAINTENANCE') return server;
        
        return {
          ...server,
          cpuUsage: Math.max(10, Math.min(95, server.cpuUsage + (Math.random() - 0.5) * 10)),
          memoryUsage: Math.max(20, Math.min(98, server.memoryUsage + (Math.random() - 0.5) * 8)),
          diskUsage: Math.max(10, Math.min(99, server.diskUsage + (Math.random() - 0.5) * 2)),
          networkThroughput: Math.max(0, server.networkThroughput + (Math.random() - 0.5) * 200),
          temperature: Math.max(20, Math.min(60, server.temperature + (Math.random() - 0.5) * 5)),
          powerUsage: Math.max(50, Math.min(700, server.powerUsage + (Math.random() - 0.5) * 50)),
          uptime: server.status === 'ONLINE' ? server.uptime + 5 : server.uptime,
          lastUpdate: Date.now(),
          alerts: server.status === 'CRITICAL' ? Math.max(3, server.alerts) : 
                 server.status === 'WARNING' ? Math.max(1, server.alerts) : 
                 Math.max(0, Math.min(2, server.alerts + Math.floor((Math.random() - 0.8) * 2)))
        };
      }));

      // Update network devices
      setNetworkDevices(prev => prev.map(device => ({
        ...device,
        portUtilization: Math.max(10, Math.min(90, device.portUtilization + (Math.random() - 0.5) * 10)),
        packetLoss: Math.max(0, Math.min(1, device.packetLoss + (Math.random() - 0.5) * 0.02)),
        latency: Math.max(0.1, Math.min(10, device.latency + (Math.random() - 0.5) * 0.5)),
        throughput: Math.max(100, Math.min(device.bandwidth * 0.9, device.throughput + (Math.random() - 0.5) * 500)),
        temperature: Math.max(25, Math.min(60, device.temperature + (Math.random() - 0.5) * 3)),
        powerUsage: Math.max(50, Math.min(500, device.powerUsage + (Math.random() - 0.5) * 20)),
        lastUpdate: Date.now()
      })));

      // Update environmental sensors
      setEnvironmentalSensors(prev => prev.map(sensor => {
        const newTemp = Math.max(15, Math.min(40, sensor.temperature + (Math.random() - 0.5) * 2));
        const newHumidity = Math.max(30, Math.min(70, sensor.humidity + (Math.random() - 0.5) * 3));
        
        let status = 'NORMAL';
        if (sensor.thresholds) {
          if (newTemp < sensor.thresholds.tempMin || newTemp > sensor.thresholds.tempMax ||
              newHumidity < sensor.thresholds.humidityMin || newHumidity > sensor.thresholds.humidityMax) {
            status = 'WARNING';
          }
        }

        return {
          ...sensor,
          temperature: newTemp,
          humidity: newHumidity,
          status: status,
          smokeLevel: sensor.smokeLevel ? Math.max(0, Math.min(0.2, sensor.smokeLevel + (Math.random() - 0.5) * 0.01)) : undefined,
          lastUpdate: Date.now()
        };
      }));

      // Update power systems
      setPowerSystems(prev => prev.map(power => ({
        ...power,
        load: power.status === 'STANDBY' ? 0 : Math.max(20, Math.min(95, power.load + (Math.random() - 0.5) * 5)),
        batteryLevel: power.batteryLevel !== null ? Math.max(80, Math.min(100, power.batteryLevel + (Math.random() - 0.5) * 2)) : null,
        inputVoltage: power.inputVoltage ? Math.max(220, Math.min(240, power.inputVoltage + (Math.random() - 0.5) * 2)) : null,
        outputVoltage: Math.max(220, Math.min(240, power.outputVoltage + (Math.random() - 0.5) * 1)),
        powerKW: power.status === 'STANDBY' ? 0 : Math.max(5, Math.min(power.capacity, power.powerKW + (Math.random() - 0.5) * 5)),
        temperature: Math.max(15, Math.min(45, power.temperature + (Math.random() - 0.5) * 3)),
        fuelLevel: power.fuelLevel ? Math.max(75, Math.min(100, power.fuelLevel + (Math.random() - 0.5) * 1)) : undefined
      })));

      // Occasionally generate new incidents
      if (Math.random() > 0.99) {
        const incidentTypes = ['DISK_SPACE_WARNING', 'NETWORK_LATENCY', 'HIGH_CPU_USAGE', 'MEMORY_LEAK'];
        const severities = ['LOW', 'MEDIUM', 'HIGH'];
        const devices = servers.map(s => s.hostname).concat(networkDevices.map(n => n.hostname));
        
        const newIncident = {
          id: `inc_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: incidentTypes[Math.floor(Math.random() * incidentTypes.length)],
          device: devices[Math.floor(Math.random() * devices.length)],
          description: 'Automated monitoring alert generated',
          status: 'NEW',
          assignedTo: 'NOC Team',
          impact: 'Performance monitoring required',
          resolution: 'Investigating root cause',
          estimatedResolution: '1 hour',
          affected: ['System performance']
        };
        
        setIncidents(prev => [newIncident, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getServerStatusColor = (status) => {
    switch (status) {
      case 'ONLINE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'OFFLINE': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
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

  const getUsageColor = (percentage) => {
    if (percentage >= 90) return 'text-red-400';
    if (percentage >= 75) return 'text-yellow-400';
    if (percentage >= 50) return 'text-orange-400';
    return 'text-green-400';
  };

  const formatUptime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h ${Math.floor((seconds % 3600) / 60)}m`;
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
          🏢 DATA CENTER OPERATIONS CONTROL (NOC/DCIM)
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {servers.filter(s => s.status === 'ONLINE').length}/{servers.length} Online
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {incidents.filter(i => i.status === 'NEW' || i.status === 'ACKNOWLEDGED').length} Active Incidents
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Siemens Datacenter Clarity LC
          </div>
        </div>
      </div>

      {/* Infrastructure Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SERVERS ONLINE</div>
              <div className="text-2xl font-bold text-green-100">
                {servers.filter(s => s.status === 'ONLINE').length}/{servers.length}
              </div>
              <div className="text-xs text-green-300">
                {((servers.filter(s => s.status === 'ONLINE').length / servers.length) * 100).toFixed(1)}% uptime
              </div>
            </div>
            <div className="text-3xl opacity-60">🖥️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">NETWORK THROUGHPUT</div>
              <div className="text-2xl font-bold text-blue-100">
                {Math.floor(networkDevices.reduce((sum, dev) => sum + dev.throughput, 0))} Mbps
              </div>
              <div className="text-xs text-blue-300">
                {networkDevices.filter(n => n.status === 'ONLINE').length}/{networkDevices.length} devices
              </div>
            </div>
            <div className="text-3xl opacity-60">🌐</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">POWER CONSUMPTION</div>
              <div className="text-2xl font-bold text-purple-100">
                {Math.floor(powerSystems.reduce((sum, pwr) => sum + pwr.powerKW, 0))} kW
              </div>
              <div className="text-xs text-purple-300">
                {powerSystems.filter(p => p.status === 'ONLINE').length}/{powerSystems.length} systems
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">AVG TEMPERATURE</div>
              <div className="text-2xl font-bold text-orange-100">
                {(environmentalSensors.reduce((sum, env) => sum + env.temperature, 0) / environmentalSensors.length).toFixed(1)}°C
              </div>
              <div className="text-xs text-orange-300">
                {environmentalSensors.filter(e => e.status === 'NORMAL').length}/{environmentalSensors.length} normal
              </div>
            </div>
            <div className="text-3xl opacity-60">🌡️</div>
          </div>
        </div>
      </div>

      {/* Servers and Network Devices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Server Infrastructure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🖥️ SERVER INFRASTRUCTURE
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {servers.map((server) => (
              <div key={server.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getServerStatusColor(server.status)}`}>
                      {server.status}
                    </span>
                    {server.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        {server.alerts} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(server.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{server.hostname}</div>
                <div className="text-xs text-purple-400 mb-2">{server.role} | {server.location}</div>
                <div className="text-xs text-cyan-400 mb-3">
                  {server.manufacturer} {server.model} | {server.os}
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">CPU Usage</div>
                    <div className={getUsageColor(server.cpuUsage)}>{server.cpuUsage.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Memory</div>
                    <div className={getUsageColor(server.memoryUsage)}>{server.memoryUsage.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Disk Usage</div>
                    <div className={getUsageColor(server.diskUsage)}>{server.diskUsage.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Network</div>
                    <div className="text-blue-400">{server.networkThroughput.toFixed(0)} Mbps</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-orange-400">{server.temperature.toFixed(1)}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Power</div>
                    <div className="text-yellow-400">{server.powerUsage}W</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className="text-green-400">{formatUptime(server.uptime)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">IP Address</div>
                    <div className="text-indigo-400">{server.ipAddress}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Apps: </span>
                  <span className="text-pink-400">{server.applications.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Infrastructure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 NETWORK INFRASTRUCTURE
          </h3>
          <div className="space-y-3">
            {networkDevices.map((device) => (
              <div key={device.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getServerStatusColor(device.status)}`}>
                      {device.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {device.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(device.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{device.hostname}</div>
                <div className="text-xs text-cyan-400 mb-3">{device.location}</div>
                <div className="text-xs text-purple-400 mb-3">
                  {device.manufacturer} {device.model} | {device.firmware}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Port Utilization</div>
                    <div className={getUsageColor(device.portUtilization)}>{device.portUtilization.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className="text-blue-400">{device.throughput.toFixed(0)} Mbps</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Latency</div>
                    <div className="text-green-400">{device.latency.toFixed(1)}ms</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Packet Loss</div>
                    <div className="text-orange-400">{device.packetLoss.toFixed(2)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-red-400">{device.temperature.toFixed(1)}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Power</div>
                    <div className="text-yellow-400">{device.powerUsage}W</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Active Ports</div>
                    <div className="text-indigo-400">{device.portsActive}/{device.ports}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">IP Address</div>
                    <div className="text-pink-400">{device.ipAddress}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className="text-green-400">{formatUptime(device.uptime)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental and Power Systems */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Environmental Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌡️ ENVIRONMENTAL MONITORING
          </h3>
          <div className="space-y-3">
            {environmentalSensors.map((sensor) => (
              <div key={sensor.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getServerStatusColor(sensor.status)}`}>
                      {sensor.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {sensor.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(sensor.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{sensor.location}</div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-orange-400">{sensor.temperature.toFixed(1)}°C</div>
                    {sensor.thresholds && (
                      <div className="text-gray-500 text-xs">
                        ({sensor.thresholds.tempMin}-{sensor.thresholds.tempMax}°C)
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-gray-400">Humidity</div>
                    <div className="text-blue-400">{sensor.humidity.toFixed(1)}%</div>
                    {sensor.thresholds && (
                      <div className="text-gray-500 text-xs">
                        ({sensor.thresholds.humidityMin}-{sensor.thresholds.humidityMax}%)
                      </div>
                    )}
                  </div>
                </div>

                {sensor.smokeLevel !== undefined && (
                  <div className="text-xs">
                    <div className="text-gray-400">Smoke Level</div>
                    <div className="text-red-400">{sensor.smokeLevel.toFixed(3)} ppm</div>
                    <div className="text-gray-500 text-xs">
                      (max {sensor.thresholds?.smokeMax} ppm)
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Power Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚡ POWER SYSTEMS
          </h3>
          <div className="space-y-3">
            {powerSystems.map((power) => (
              <div key={power.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getServerStatusColor(power.status)}`}>
                      {power.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {power.type}
                    </span>
                    {power.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        {power.alerts} alerts
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{power.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{power.location}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Load</div>
                    <div className={getUsageColor(power.load)}>{power.load.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Power</div>
                    <div className="text-yellow-400">{power.powerKW.toFixed(1)} kW</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-green-400">{power.capacity} kW</div>
                  </div>
                </div>

                {power.batteryLevel !== null && (
                  <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Battery</div>
                      <div className="text-blue-400">{power.batteryLevel.toFixed(0)}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Runtime</div>
                      <div className="text-purple-400">{power.runtime.toFixed(1)} min</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Efficiency</div>
                      <div className="text-orange-400">{power.efficiency?.toFixed(1)}%</div>
                    </div>
                  </div>
                )}

                {power.fuelLevel && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Fuel Level</div>
                    <div className="text-indigo-400">{power.fuelLevel.toFixed(1)}%</div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Input/Output Voltage</div>
                    <div className="text-pink-400">
                      {power.inputVoltage ? power.inputVoltage.toFixed(1) : 'N/A'} / {power.outputVoltage.toFixed(1)}V
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-red-400">{power.temperature.toFixed(1)}°C</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Trends and Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 INFRASTRUCTURE PERFORMANCE (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrends}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="cpuAvg" 
                stroke="#3B82F6" 
                fill="url(#cpuGradient)" 
                name="CPU Avg %"
              />
              <Area 
                type="monotone" 
                dataKey="memoryAvg" 
                stroke="#10B981" 
                fill="url(#memoryGradient)" 
                name="Memory Avg %"
              />
              <Line 
                type="monotone" 
                dataKey="temperature" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Temperature °C"
              />
              <Bar 
                dataKey="powerConsumption" 
                fill="#8B5CF6" 
                name="Power kW"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Active Incidents */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 ACTIVE INCIDENTS & ALERTS
          </h3>
          
          {incidents.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg mb-2">✅</div>
              <div className="text-green-400 font-bold">NO ACTIVE INCIDENTS</div>
              <div className="text-gray-400 text-sm mt-2">All systems operational</div>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getIncidentSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        incident.status === 'NEW' ? 'bg-red-500 text-white' :
                        incident.status === 'ACKNOWLEDGED' ? 'bg-yellow-500 text-black' :
                        incident.status === 'IN_PROGRESS' ? 'bg-blue-500 text-white' :
                        incident.status === 'RESOLVED' ? 'bg-green-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {incident.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {formatTime(incident.timestamp)}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white mb-2">{incident.description}</div>
                  <div className="text-xs text-cyan-400 mb-1">🖥️ {incident.device}</div>
                  <div className="text-xs text-purple-400 mb-1">📊 Type: {incident.type.replace(/_/g, ' ')}</div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Impact</div>
                      <div className="text-orange-400">{incident.impact}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">ETA Resolution</div>
                      <div className="text-green-400">{incident.estimatedResolution}</div>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400">Assigned to: </span>
                    <span className="text-yellow-400">{incident.assignedTo}</span>
                  </div>
                  
                  {incident.affected && incident.affected.length > 0 && (
                    <div className="text-xs mt-1">
                      <span className="text-gray-400">Affected: </span>
                      <span className="text-red-400">{incident.affected.join(', ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Capacity Planning */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 CAPACITY PLANNING & RESOURCE UTILIZATION
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Capacity Overview */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">Resource Capacity Overview</h4>
            <div className="space-y-3">
              {capacityTrends.map((capacity, index) => (
                <div key={index} className="bg-gray-700 rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white">{capacity.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{capacity.used.toFixed(1)}% used</span>
                      <span className="text-xs font-bold text-green-400">
                        {capacity.available.toFixed(1)}% available
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3 mb-1">
                    <div 
                      className={`h-3 rounded-full ${
                        capacity.used >= 90 ? 'bg-red-400' :
                        capacity.used >= 75 ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}
                      style={{ width: `${capacity.used}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Utilization: {capacity.used.toFixed(1)}% | Available: {capacity.available.toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Center Statistics */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">Data Center Statistics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Total Racks</div>
                <div className="text-white font-bold text-lg">42</div>
                <div className="text-green-400">38 occupied</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Floor Space</div>
                <div className="text-white font-bold text-lg">2,400 ft²</div>
                <div className="text-blue-400">2 floors</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Cooling Efficiency</div>
                <div className="text-white font-bold text-lg">1.45 PUE</div>
                <div className="text-orange-400">Very efficient</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Redundancy</div>
                <div className="text-white font-bold text-lg">N+1</div>
                <div className="text-purple-400">Full backup</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Avg Availability</div>
                <div className="text-white font-bold text-lg">99.98%</div>
                <div className="text-green-400">Tier III</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Carbon Footprint</div>
                <div className="text-white font-bold text-lg">0.42 kg CO2/kWh</div>
                <div className="text-green-400">Carbon neutral</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterOperations;