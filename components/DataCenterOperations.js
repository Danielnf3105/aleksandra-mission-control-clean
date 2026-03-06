// DataCenterOperations.js - Data Center Operations Center & Network Operations Center Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataCenterOperations = () => {
  const [dataCenterStatus, setDataCenterStatus] = useState({
    operationalStatus: 'OPTIMAL',
    totalRacks: 240,
    occupiedRacks: 198,
    totalServers: 2847,
    activeServers: 2734,
    downServers: 8,
    maintenanceServers: 105,
    powerConsumption: 2.4, // MW
    powerCapacity: 3.2, // MW
    coolingEfficiency: 1.42, // PUE
    averageTemperature: 22.4, // celsius
    humidity: 45.2, // percentage
    networkUtilization: 67.8, // percentage
    storageUtilization: 78.3, // percentage
    lastUpdate: Date.now()
  });

  const [rackStatus, setRackStatus] = useState([
    {
      id: 'rack_a01_001',
      location: 'Row A01 - Position 001',
      type: 'COMPUTE',
      status: 'OPERATIONAL',
      power_usage: 8.2, // kW
      power_capacity: 12.0, // kW
      temperature: 21.8, // celsius
      humidity: 44.5, // percentage
      u_slots_total: 42,
      u_slots_occupied: 38,
      u_slots_available: 4,
      servers: [
        {
          slot: 'U1-U2',
          hostname: 'compute-01.dc1',
          type: 'BLADE_SERVER',
          status: 'RUNNING',
          cpu_usage: 67.3,
          memory_usage: 82.1,
          temperature: 56.2
        },
        {
          slot: 'U3-U4',
          hostname: 'compute-02.dc1',
          type: 'BLADE_SERVER',
          status: 'RUNNING',
          cpu_usage: 45.8,
          memory_usage: 69.4,
          temperature: 52.7
        },
        {
          slot: 'U5-U6',
          hostname: 'compute-03.dc1',
          type: 'BLADE_SERVER',
          status: 'MAINTENANCE',
          reason: 'MEMORY_UPGRADE',
          eta_completion: Date.now() + 2 * 60 * 60 * 1000
        }
      ],
      network_ports_active: 48,
      network_ports_total: 52,
      last_maintenance: Date.now() - 30 * 24 * 60 * 60 * 1000,
      alerts: []
    },
    {
      id: 'rack_b05_012',
      location: 'Row B05 - Position 012',
      type: 'STORAGE',
      status: 'HIGH_LOAD',
      power_usage: 9.8,
      power_capacity: 12.0,
      temperature: 24.3,
      humidity: 47.2,
      u_slots_total: 42,
      u_slots_occupied: 42,
      u_slots_available: 0,
      storage_systems: [
        {
          slot: 'U1-U4',
          hostname: 'storage-pri-01.dc1',
          type: 'NAS_ARRAY',
          status: 'RUNNING',
          capacity_total: 500, // TB
          capacity_used: 387, // TB
          iops: 14567,
          latency: 2.4 // ms
        },
        {
          slot: 'U5-U8',
          hostname: 'storage-sec-01.dc1',
          type: 'SAN_ARRAY',
          status: 'WARNING',
          capacity_total: 1000, // TB
          capacity_used: 834, // TB
          iops: 8923,
          latency: 5.7,
          alerts: ['DISK_FAILURE_IMMINENT']
        }
      ],
      network_ports_active: 24,
      network_ports_total: 24,
      last_maintenance: Date.now() - 7 * 24 * 60 * 60 * 1000,
      alerts: ['HIGH_TEMPERATURE', 'STORAGE_WARNING']
    },
    {
      id: 'rack_c03_007',
      location: 'Row C03 - Position 007',
      type: 'NETWORK',
      status: 'OPERATIONAL',
      power_usage: 6.4,
      power_capacity: 8.0,
      temperature: 20.1,
      humidity: 42.8,
      u_slots_total: 42,
      u_slots_occupied: 18,
      u_slots_available: 24,
      network_devices: [
        {
          slot: 'U1-U2',
          hostname: 'core-sw-01.dc1',
          type: 'CORE_SWITCH',
          status: 'RUNNING',
          ports_total: 48,
          ports_active: 46,
          throughput: 89.2, // percentage
          packet_loss: 0.01 // percentage
        },
        {
          slot: 'U3-U4',
          hostname: 'dist-sw-01.dc1',
          type: 'DISTRIBUTION_SWITCH',
          status: 'RUNNING',
          ports_total: 24,
          ports_active: 22,
          throughput: 67.8,
          packet_loss: 0.03
        },
        {
          slot: 'U5-U6',
          hostname: 'firewall-01.dc1',
          type: 'FIREWALL',
          status: 'RUNNING',
          connections_active: 15647,
          connections_max: 50000,
          blocked_attempts: 234,
          cpu_usage: 34.2
        }
      ],
      network_ports_active: 98,
      network_ports_total: 120,
      last_maintenance: Date.now() - 14 * 24 * 60 * 60 * 1000,
      alerts: []
    }
  ]);

  const [environmentalSystems, setEnvironmentalSystems] = useState({
    hvac_systems: [
      {
        id: 'HVAC_UNIT_01',
        location: 'North Zone',
        status: 'OPERATIONAL',
        mode: 'COOLING',
        supply_temp: 18.2, // celsius
        return_temp: 25.7,
        fan_speed: 78.5, // percentage
        power_consumption: 245.8, // kW
        efficiency: 94.2, // percentage
        filter_status: 'GOOD',
        last_maintenance: Date.now() - 45 * 24 * 60 * 60 * 1000,
        next_maintenance: Date.now() + 15 * 24 * 60 * 60 * 1000
      },
      {
        id: 'HVAC_UNIT_02',
        location: 'South Zone',
        status: 'OPERATIONAL',
        mode: 'COOLING',
        supply_temp: 17.9,
        return_temp: 26.1,
        fan_speed: 82.3,
        power_consumption: 267.4,
        efficiency: 92.8,
        filter_status: 'NEEDS_REPLACEMENT',
        last_maintenance: Date.now() - 60 * 24 * 60 * 60 * 1000,
        next_maintenance: Date.now() + 7 * 24 * 60 * 60 * 1000
      },
      {
        id: 'HVAC_UNIT_03',
        location: 'East Zone',
        status: 'MAINTENANCE',
        mode: 'OFF',
        maintenance_type: 'COMPRESSOR_REPLACEMENT',
        eta_completion: Date.now() + 6 * 60 * 60 * 1000,
        technician: 'HVAC Team Alpha',
        backup_unit: 'HVAC_UNIT_BACKUP_01'
      }
    ],
    power_distribution: [
      {
        id: 'PDU_A_MAIN',
        location: 'Row A - Main Feed',
        status: 'OPERATIONAL',
        load_current: 78.4, // percentage
        voltage_in: 480, // volts
        voltage_out: 208,
        frequency: 60.0, // Hz
        power_factor: 0.95,
        total_power: 890.5, // kW
        max_power: 1200.0,
        temperature: 42.1,
        redundancy: 'N+1',
        bypass_status: 'AVAILABLE'
      },
      {
        id: 'PDU_B_SECONDARY',
        location: 'Row B - Secondary Feed',
        status: 'OPERATIONAL',
        load_current: 65.2,
        voltage_in: 480,
        voltage_out: 208,
        frequency: 60.0,
        power_factor: 0.93,
        total_power: 743.8,
        max_power: 1200.0,
        temperature: 39.7,
        redundancy: 'N+1',
        bypass_status: 'AVAILABLE'
      },
      {
        id: 'UPS_PRIMARY',
        location: 'UPS Room',
        status: 'ON_BATTERY',
        battery_capacity: 87.3, // percentage
        runtime_remaining: 45, // minutes
        load_percentage: 68.4,
        input_voltage: 480,
        output_voltage: 208,
        reason: 'UTILITY_POWER_FLUCTUATION',
        estimated_duration: '15 minutes'
      }
    ]
  });

  const [networkInfrastructure, setNetworkInfrastructure] = useState([
    {
      id: 'CORE_NET_01',
      hostname: 'core-router-01.dc1',
      type: 'CORE_ROUTER',
      status: 'OPERATIONAL',
      location: 'Network Core - Rack C01-001',
      cpu_usage: 23.4, // percentage
      memory_usage: 34.7,
      temperature: 38.2,
      uptime: 87.3, // days
      interfaces: [
        {
          name: 'GigE0/0/1',
          status: 'UP',
          speed: '10Gbps',
          utilization_in: 67.8,
          utilization_out: 45.2,
          errors: 0,
          drops: 0
        },
        {
          name: 'GigE0/0/2',
          status: 'UP',
          speed: '10Gbps',
          utilization_in: 34.1,
          utilization_out: 78.9,
          errors: 2,
          drops: 0
        }
      ],
      routing_table_entries: 15847,
      bgp_sessions: 12,
      ospf_neighbors: 8
    },
    {
      id: 'FIREWALL_01',
      hostname: 'fw-perimeter-01.dc1',
      type: 'PERIMETER_FIREWALL',
      status: 'OPERATIONAL',
      location: 'DMZ - Rack C02-003',
      cpu_usage: 45.7,
      memory_usage: 67.3,
      temperature: 41.8,
      uptime: 156.7,
      sessions_active: 25678,
      sessions_max: 100000,
      threats_blocked_today: 1247,
      bandwidth_usage: 2.4, // Gbps
      rules_processed: 8947234,
      ips_signatures: 45672,
      last_signature_update: Date.now() - 4 * 60 * 60 * 1000
    },
    {
      id: 'LOAD_BALANCER_01',
      hostname: 'lb-app-01.dc1',
      type: 'APPLICATION_LOAD_BALANCER',
      status: 'OPERATIONAL',
      location: 'App Tier - Rack B03-005',
      cpu_usage: 56.2,
      memory_usage: 71.8,
      temperature: 47.3,
      uptime: 234.1,
      virtual_servers: [
        {
          name: 'web-app-pool',
          status: 'UP',
          members_total: 8,
          members_active: 7,
          members_down: 1,
          requests_per_second: 1247,
          response_time: 234 // ms
        },
        {
          name: 'api-service-pool',
          status: 'UP',
          members_total: 6,
          members_active: 6,
          members_down: 0,
          requests_per_second: 567,
          response_time: 156
        }
      ]
    }
  ]);

  const [securitySystems, setSecuritySystems] = useState({
    access_control: {
      status: 'OPERATIONAL',
      active_badges: 234,
      failed_access_attempts: 8,
      doors_secured: 47,
      doors_total: 48,
      security_zones_breached: 0,
      cameras_active: 156,
      cameras_total: 160,
      motion_detectors_active: 89,
      last_security_incident: Date.now() - 15 * 24 * 60 * 60 * 1000
    },
    fire_suppression: {
      status: 'ARMED',
      zones_monitored: 12,
      smoke_detectors: 145,
      heat_detectors: 89,
      suppression_agent: 'CLEAN_AGENT',
      agent_level: 97.3, // percentage
      last_test: Date.now() - 30 * 24 * 60 * 60 * 1000,
      next_test: Date.now() + 60 * 24 * 60 * 60 * 1000
    },
    environmental_monitoring: {
      water_leak_sensors: 67,
      water_leak_status: 'DRY',
      vibration_sensors: 23,
      vibration_status: 'NORMAL',
      air_quality_sensors: 12,
      air_quality_status: 'GOOD',
      emergency_lighting: 'OPERATIONAL',
      backup_generators: 3,
      fuel_level: 78.4 // percentage
    }
  });

  const [performanceMetrics, setPerformanceMetrics] = useState([]);

  const generatePerformanceMetrics = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        power_consumption: 2.0 + Math.random() * 0.8,
        temperature: 20 + Math.random() * 6,
        network_utilization: 60 + Math.random() * 25,
        server_cpu: 40 + Math.random() * 40,
        storage_iops: 10000 + Math.random() * 8000,
        cooling_efficiency: 1.2 + Math.random() * 0.4
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceMetrics(generatePerformanceMetrics());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update data center status
      setDataCenterStatus(prev => ({
        ...prev,
        powerConsumption: Math.max(2.0, Math.min(3.0, prev.powerConsumption + (Math.random() - 0.5) * 0.1)),
        averageTemperature: Math.max(20.0, Math.min(26.0, prev.averageTemperature + (Math.random() - 0.5) * 0.5)),
        networkUtilization: Math.max(60.0, Math.min(85.0, prev.networkUtilization + (Math.random() - 0.5) * 5.0)),
        storageUtilization: Math.max(75.0, Math.min(85.0, prev.storageUtilization + (Math.random() - 0.5) * 2.0)),
        lastUpdate: Date.now()
      }));

      // Update environmental systems
      setEnvironmentalSystems(prev => ({
        ...prev,
        hvac_systems: prev.hvac_systems.map(hvac => ({
          ...hvac,
          supply_temp: Math.max(17.0, Math.min(20.0, hvac.supply_temp + (Math.random() - 0.5) * 0.3)),
          fan_speed: Math.max(70.0, Math.min(90.0, hvac.fan_speed + (Math.random() - 0.5) * 2.0))
        }))
      }));

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL':
      case 'OPERATIONAL':
      case 'RUNNING':
      case 'UP':
      case 'ARMED':
      case 'AVAILABLE':
      case 'GOOD':
      case 'DRY':
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'HIGH_LOAD':
      case 'ON_BATTERY':
      case 'NEEDS_REPLACEMENT': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'WARNING': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MAINTENANCE':
      case 'OFF': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'DOWN':
      case 'ERROR':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      return `${Math.floor(absDiff / 3600000)}h ago`;
    }
  };

  const formatUptime = (days) => {
    if (days < 1) return `${Math.floor(days * 24)}h`;
    return `${Math.floor(days)}d ${Math.floor((days % 1) * 24)}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏢 DATA CENTER OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(((dataCenterStatus.powerConsumption / dataCenterStatus.powerCapacity) * 100), 1)}% Power
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {dataCenterStatus.activeServers} Servers
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(dataCenterStatus.coolingEfficiency, 2)} PUE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            NOC & DCIM Systems
          </div>
        </div>
      </div>

      {/* Data Center Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">POWER CONSUMPTION</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(dataCenterStatus.powerConsumption, 1)}MW
              </div>
              <div className="text-xs text-blue-300">
                of {formatNumber(dataCenterStatus.powerCapacity, 1)}MW capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">ACTIVE SERVERS</div>
              <div className="text-2xl font-bold text-green-100">
                {dataCenterStatus.activeServers}
              </div>
              <div className="text-xs text-green-300">
                of {dataCenterStatus.totalServers} total
              </div>
            </div>
            <div className="text-3xl opacity-60">🖥️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">COOLING EFFICIENCY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(dataCenterStatus.coolingEfficiency, 2)}
              </div>
              <div className="text-xs text-purple-300">
                PUE Ratio
              </div>
            </div>
            <div className="text-3xl opacity-60">❄️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TEMPERATURE</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(dataCenterStatus.averageTemperature, 1)}°C
              </div>
              <div className="text-xs text-orange-300">
                {formatNumber(dataCenterStatus.humidity, 1)}% humidity
              </div>
            </div>
            <div className="text-3xl opacity-60">🌡️</div>
          </div>
        </div>
      </div>

      {/* Rack Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🗄️ RACK STATUS & INFRASTRUCTURE MONITORING
        </h3>
        <div className="space-y-3">
          {rackStatus.map((rack) => (
            <div key={rack.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{rack.location}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(rack.status)}`}>
                    {rack.status.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {rack.type}
                  </span>
                  {rack.alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-red-500 text-white animate-pulse">
                      {rack.alerts.length} ALERT{rack.alerts.length > 1 ? 'S' : ''}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">Power: </span>
                <span className="text-yellow-400">{formatNumber(rack.power_usage, 1)}kW</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{formatNumber(rack.power_capacity, 1)}kW</span>
                <span className="text-gray-400"> | Temp: </span>
                <span className={rack.temperature > 23 ? 'text-red-400' : 'text-green-400'}>
                  {formatNumber(rack.temperature, 1)}°C
                </span>
                <span className="text-gray-400"> | Humidity: </span>
                <span className="text-cyan-400">{formatNumber(rack.humidity, 1)}%</span>
              </div>

              <div className="text-xs mb-3">
                <span className="text-gray-400">U Slots: </span>
                <span className="text-orange-400">{rack.u_slots_occupied}</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{rack.u_slots_total} occupied</span>
                <span className="text-gray-400"> | Available: </span>
                <span className="text-green-400">{rack.u_slots_available}</span>
                <span className="text-gray-400"> | Network Ports: </span>
                <span className="text-purple-400">{rack.network_ports_active}</span>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">{rack.network_ports_total}</span>
              </div>

              {rack.servers && (
                <div className="text-xs mb-3">
                  <div className="text-gray-400 mb-1">Servers:</div>
                  {rack.servers.map((server, index) => (
                    <div key={index} className="ml-2 mb-1">
                      <span className="text-cyan-400">{server.hostname}</span>
                      <span className="text-gray-400"> ({server.slot}) - </span>
                      <span className={`${getStatusColor(server.status).split(' ')[0]}`}>
                        {server.status.replace(/_/g, ' ')}
                      </span>
                      {server.status === 'RUNNING' && (
                        <>
                          <span className="text-gray-400"> | CPU: </span>
                          <span className="text-green-400">{formatNumber(server.cpu_usage, 1)}%</span>
                          <span className="text-gray-400"> | RAM: </span>
                          <span className="text-blue-400">{formatNumber(server.memory_usage, 1)}%</span>
                        </>
                      )}
                      {server.reason && (
                        <>
                          <span className="text-gray-400"> | </span>
                          <span className="text-orange-400">{server.reason.replace(/_/g, ' ')}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {rack.storage_systems && (
                <div className="text-xs mb-3">
                  <div className="text-gray-400 mb-1">Storage Systems:</div>
                  {rack.storage_systems.map((storage, index) => (
                    <div key={index} className="ml-2 mb-1">
                      <span className="text-cyan-400">{storage.hostname}</span>
                      <span className="text-gray-400"> ({storage.slot}) - </span>
                      <span className={`${getStatusColor(storage.status).split(' ')[0]}`}>
                        {storage.status}
                      </span>
                      <span className="text-gray-400"> | Capacity: </span>
                      <span className="text-purple-400">{storage.capacity_used}TB</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-blue-400">{storage.capacity_total}TB</span>
                      <span className="text-gray-400"> | IOPS: </span>
                      <span className="text-green-400">{formatLargeNumber(storage.iops)}</span>
                      {storage.alerts && storage.alerts.length > 0 && (
                        <>
                          <span className="text-gray-400"> | </span>
                          <span className="text-red-400">{storage.alerts[0].replace(/_/g, ' ')}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {rack.network_devices && (
                <div className="text-xs mb-3">
                  <div className="text-gray-400 mb-1">Network Devices:</div>
                  {rack.network_devices.map((device, index) => (
                    <div key={index} className="ml-2 mb-1">
                      <span className="text-cyan-400">{device.hostname}</span>
                      <span className="text-gray-400"> ({device.slot}) - </span>
                      <span className={`${getStatusColor(device.status).split(' ')[0]}`}>
                        {device.status}
                      </span>
                      {device.ports_total && (
                        <>
                          <span className="text-gray-400"> | Ports: </span>
                          <span className="text-green-400">{device.ports_active}</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-blue-400">{device.ports_total}</span>
                        </>
                      )}
                      {device.connections_active && (
                        <>
                          <span className="text-gray-400"> | Connections: </span>
                          <span className="text-purple-400">{formatLargeNumber(device.connections_active)}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {rack.alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Alerts:</div>
                  {rack.alerts.map((alert, index) => (
                    <div key={index} className="text-red-400">🚨 {alert.replace(/_/g, ' ')}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Systems and Network Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Environmental Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌡️ ENVIRONMENTAL SYSTEMS & POWER MANAGEMENT
          </h3>
          
          {/* HVAC Systems */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">HVAC Systems</h4>
            <div className="space-y-2">
              {environmentalSystems.hvac_systems.map((hvac) => (
                <div key={hvac.id} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{hvac.id}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(hvac.status)}`}>
                      {hvac.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300">
                    {hvac.location} - {hvac.mode}
                  </div>
                  {hvac.status === 'OPERATIONAL' && (
                    <div className="text-xs mt-1">
                      <span className="text-gray-400">Supply: </span>
                      <span className="text-cyan-400">{formatNumber(hvac.supply_temp, 1)}°C</span>
                      <span className="text-gray-400"> | Fan: </span>
                      <span className="text-green-400">{formatNumber(hvac.fan_speed, 1)}%</span>
                      <span className="text-gray-400"> | Power: </span>
                      <span className="text-yellow-400">{formatNumber(hvac.power_consumption, 1)}kW</span>
                    </div>
                  )}
                  {hvac.maintenance_type && (
                    <div className="text-xs mt-1">
                      <span className="text-orange-400">{hvac.maintenance_type.replace(/_/g, ' ')}</span>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-yellow-400">{formatTime(hvac.eta_completion)}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Power Distribution */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Power Distribution</h4>
            <div className="space-y-2">
              {environmentalSystems.power_distribution.map((pdu) => (
                <div key={pdu.id} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{pdu.id}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(pdu.status)}`}>
                      {pdu.status}
                    </span>
                  </div>
                  {pdu.status === 'OPERATIONAL' && (
                    <div className="text-xs mt-1">
                      <span className="text-gray-400">Load: </span>
                      <span className={pdu.load_current > 80 ? 'text-red-400' : 'text-green-400'}>
                        {formatNumber(pdu.load_current, 1)}%
                      </span>
                      <span className="text-gray-400"> | Power: </span>
                      <span className="text-purple-400">{formatNumber(pdu.total_power, 1)}kW</span>
                      <span className="text-gray-400"> | PF: </span>
                      <span className="text-cyan-400">{formatNumber(pdu.power_factor, 2)}</span>
                    </div>
                  )}
                  {pdu.status === 'ON_BATTERY' && (
                    <div className="text-xs mt-1">
                      <span className="text-gray-400">Battery: </span>
                      <span className="text-orange-400">{formatNumber(pdu.battery_capacity, 1)}%</span>
                      <span className="text-gray-400"> | Runtime: </span>
                      <span className="text-red-400">{pdu.runtime_remaining}min</span>
                      <div className="text-yellow-400">{pdu.reason.replace(/_/g, ' ')}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Infrastructure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 NETWORK INFRASTRUCTURE & CONNECTIVITY
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {networkInfrastructure.map((device) => (
              <div key={device.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{device.hostname}</span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(device.status)}`}>
                      {device.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {device.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Location: </span>
                  <span className="text-cyan-400">{device.location}</span>
                  <span className="text-gray-400"> | Uptime: </span>
                  <span className="text-green-400">{formatUptime(device.uptime)}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">CPU: </span>
                  <span className={device.cpu_usage > 80 ? 'text-red-400' : 'text-green-400'}>
                    {formatNumber(device.cpu_usage, 1)}%
                  </span>
                  <span className="text-gray-400"> | Memory: </span>
                  <span className={device.memory_usage > 85 ? 'text-red-400' : 'text-blue-400'}>
                    {formatNumber(device.memory_usage, 1)}%
                  </span>
                  <span className="text-gray-400"> | Temp: </span>
                  <span className={device.temperature > 50 ? 'text-red-400' : 'text-orange-400'}>
                    {formatNumber(device.temperature, 1)}°C
                  </span>
                </div>

                {device.interfaces && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400 mb-1">Interfaces:</div>
                    {device.interfaces.map((intf, index) => (
                      <div key={index} className="ml-2 text-xs">
                        <span className="text-cyan-400">{intf.name}</span>
                        <span className="text-gray-400"> - </span>
                        <span className={getStatusColor(intf.status).split(' ')[0]}>{intf.status}</span>
                        <span className="text-gray-400"> | In: </span>
                        <span className="text-green-400">{formatNumber(intf.utilization_in, 1)}%</span>
                        <span className="text-gray-400"> | Out: </span>
                        <span className="text-purple-400">{formatNumber(intf.utilization_out, 1)}%</span>
                      </div>
                    ))}
                  </div>
                )}

                {device.sessions_active && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Active Sessions: </span>
                    <span className="text-purple-400">{formatLargeNumber(device.sessions_active)}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-400">{formatLargeNumber(device.sessions_max)}</span>
                    <span className="text-gray-400"> | Threats Blocked: </span>
                    <span className="text-red-400">{formatLargeNumber(device.threats_blocked_today)}</span>
                  </div>
                )}

                {device.virtual_servers && (
                  <div className="text-xs">
                    <div className="text-gray-400 mb-1">Virtual Servers:</div>
                    {device.virtual_servers.map((vs, index) => (
                      <div key={index} className="ml-2 text-xs">
                        <span className="text-cyan-400">{vs.name}</span>
                        <span className="text-gray-400"> - </span>
                        <span className={getStatusColor(vs.status).split(' ')[0]}>{vs.status}</span>
                        <span className="text-gray-400"> | Members: </span>
                        <span className="text-green-400">{vs.members_active}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-blue-400">{vs.members_total}</span>
                        <span className="text-gray-400"> | RPS: </span>
                        <span className="text-orange-400">{vs.requests_per_second}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Center Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 DATA CENTER PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
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
              dataKey="power_consumption" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Power Consumption (MW)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="temperature" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Avg Temperature (°C)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="network_utilization" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Network Utilization %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="server_cpu" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Avg Server CPU %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="storage_iops" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Storage IOPS (K)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="cooling_efficiency" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="PUE Ratio"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Security & Safety and Performance KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security & Safety */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SECURITY & SAFETY SYSTEMS
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Physical Security</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Access Control:</span>
                <span className="text-green-400">{securitySystems.access_control.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Badges:</span>
                <span className="text-blue-400">{securitySystems.access_control.active_badges}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Failed Attempts:</span>
                <span className="text-yellow-400">{securitySystems.access_control.failed_access_attempts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cameras Active:</span>
                <span className="text-cyan-400">{securitySystems.access_control.cameras_active}/{securitySystems.access_control.cameras_total}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Fire Suppression</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">System Status:</span>
                <span className="text-green-400">{securitySystems.fire_suppression.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Agent Level:</span>
                <span className="text-blue-400">{formatNumber(securitySystems.fire_suppression.agent_level, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Smoke Detectors:</span>
                <span className="text-green-400">{securitySystems.fire_suppression.smoke_detectors}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Environmental Safety</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Water Leak Status:</span>
                <span className="text-green-400">{securitySystems.environmental_monitoring.water_leak_status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vibration Status:</span>
                <span className="text-green-400">{securitySystems.environmental_monitoring.vibration_status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fuel Level:</span>
                <span className="text-orange-400">{formatNumber(securitySystems.environmental_monitoring.fuel_level, 1)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance KPIs */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 DATA CENTER PERFORMANCE KPIs
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Rack Utilization</div>
              <div className="text-white font-bold text-lg">
                {formatNumber((dataCenterStatus.occupiedRacks / dataCenterStatus.totalRacks) * 100, 1)}%
              </div>
              <div className="text-green-400 text-xs">{dataCenterStatus.occupiedRacks}/{dataCenterStatus.totalRacks} racks</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Server Uptime</div>
              <div className="text-white font-bold text-lg">
                {formatNumber((dataCenterStatus.activeServers / dataCenterStatus.totalServers) * 100, 1)}%
              </div>
              <div className="text-blue-400 text-xs">availability rate</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Power Usage</div>
              <div className="text-white font-bold text-lg">
                {formatNumber((dataCenterStatus.powerConsumption / dataCenterStatus.powerCapacity) * 100, 1)}%
              </div>
              <div className="text-purple-400 text-xs">of capacity</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Cooling Efficiency</div>
              <div className="text-white font-bold text-lg">
                {formatNumber(dataCenterStatus.coolingEfficiency, 2)}
              </div>
              <div className="text-orange-400 text-xs">PUE ratio</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Network Utilization</div>
              <div className="text-white font-bold text-lg">
                {formatNumber(dataCenterStatus.networkUtilization, 1)}%
              </div>
              <div className="text-cyan-400 text-xs">bandwidth usage</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400">Storage Utilization</div>
              <div className="text-white font-bold text-lg">
                {formatNumber(dataCenterStatus.storageUtilization, 1)}%
              </div>
              <div className="text-yellow-400 text-xs">capacity used</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterOperations;