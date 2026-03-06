// TelecommunicationsOperationsCenter.js - Telecommunications Operations Center & Network Operations Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TelecommunicationsOperationsCenter = () => {
  const [networkStatus, setNetworkStatus] = useState({
    operationalStatus: 'NORMAL_OPERATIONS',
    totalSubscribers: 15847234,
    activeConnections: 12456789,
    networkUtilization: 67.8, // percentage
    serviceAvailability: 99.97, // percentage
    qualityOfService: 94.7, // percentage
    totalThroughput: 2847.6, // Gbps
    packetLoss: 0.03, // percentage
    latency: 12.4, // milliseconds
    lastUpdate: Date.now()
  });

  const [networkInfrastructure, setNetworkInfrastructure] = useState([
    {
      technology: '5G_NR',
      name: '5G New Radio',
      base_stations: 8947,
      coverage_area: 87.3, // percentage
      active_users: 3456789,
      throughput: 1247.8, // Mbps
      latency: 8.2, // milliseconds
      availability: 99.8, // percentage
      status: 'OPTIMAL',
      spectrum_efficiency: 94.2, // percentage
      handover_success_rate: 99.1, // percentage
      energy_efficiency: 'ENHANCED'
    },
    {
      technology: 'LTE_ADVANCED',
      name: 'LTE Advanced Pro',
      base_stations: 45678,
      coverage_area: 96.7,
      active_users: 8567234,
      throughput: 845.6,
      latency: 15.7,
      availability: 99.9,
      status: 'OPTIMAL',
      spectrum_efficiency: 89.4,
      handover_success_rate: 98.7,
      aggregation_carriers: 5
    },
    {
      technology: 'FIBER_OPTIC',
      name: 'Fiber Infrastructure',
      total_length: 234567, // km
      active_connections: 2847934,
      bandwidth_capacity: 2400, // Gbps
      utilization: 65.3, // percentage
      availability: 99.95,
      status: 'OPTIMAL',
      fault_rate: 0.02, // faults per 100km
      repair_time: 2.3, // hours
      network_segments: 15647
    },
    {
      technology: 'MPLS_VPN',
      name: 'MPLS Enterprise',
      total_circuits: 15647,
      active_vpns: 2847,
      bandwidth_utilization: 72.4,
      sla_compliance: 99.2,
      availability: 99.8,
      status: 'OPTIMAL',
      qos_classes: 8,
      traffic_engineering: 'AUTOMATED',
      failover_time: 0.8 // seconds
    },
    {
      technology: 'SATELLITE',
      name: 'Satellite Network',
      active_satellites: 12,
      earth_stations: 89,
      coverage_zones: 45,
      throughput: 156.7,
      latency: 550,
      availability: 98.9,
      status: 'OPERATIONAL',
      signal_strength: 87.3, // dBm
      weather_impact: 'MINIMAL'
    }
  ]);

  const [serviceQuality, setServiceQuality] = useState({
    voice_services: {
      call_success_rate: 99.4, // percentage
      voice_quality_mos: 4.2, // Mean Opinion Score
      dropped_call_rate: 0.3, // percentage
      blocked_call_rate: 0.8, // percentage
      handover_failures: 67,
      echo_cancellation: 'ACTIVE',
      noise_reduction: 'ENHANCED'
    },
    data_services: {
      throughput_consistency: 94.7, // percentage
      packet_delivery_ratio: 99.8, // percentage
      jitter: 2.1, // milliseconds
      tcp_retransmission_rate: 0.15, // percentage
      dns_resolution_time: 8.3, // milliseconds
      http_response_time: 245, // milliseconds
      video_streaming_quality: 'EXCELLENT'
    },
    messaging_services: {
      sms_delivery_success: 99.9, // percentage
      sms_delivery_time: 1.2, // seconds
      mms_success_rate: 98.7, // percentage
      rich_messaging_availability: 97.8, // percentage
      spam_filtering_accuracy: 99.2, // percentage
      message_encryption: 'END_TO_END'
    }
  });

  const [networkSecurity, setNetworkSecurity] = useState({
    threat_detection: {
      threats_detected: 234,
      threats_blocked: 228,
      success_rate: 97.4, // percentage
      false_positive_rate: 1.2, // percentage
      avg_detection_time: 1.8, // seconds
      ai_threat_analysis: 'ENABLED'
    },
    ddos_protection: {
      attacks_mitigated: 45,
      peak_attack_volume: 156, // Gbps
      mitigation_time: 0.3, // seconds
      uptime_maintained: 99.99, // percentage
      scrubbing_capacity: 2400, // Gbps
      global_protection: 'ACTIVE'
    },
    access_control: {
      authenticated_sessions: 8967234,
      failed_authentication: 23456,
      two_factor_enabled: 87.3, // percentage
      privileged_access_monitoring: 'ACTIVE',
      zero_trust_adoption: 92.1, // percentage
      certificate_management: 'AUTOMATED'
    },
    compliance: {
      gdpr_compliance: 'CERTIFIED',
      iso27001_status: 'COMPLIANT',
      sox_audit_status: 'PASSED',
      pci_dss_level: 'LEVEL_1',
      hipaa_compliance: 'VERIFIED',
      data_encryption: '256_BIT_AES'
    }
  });

  const [operationalMetrics, setOperationalMetrics] = useState([
    {
      region: 'NORTH_AMERICA',
      population_coverage: 97.8, // percentage
      active_subscribers: 4567234,
      network_capacity: 856.7, // Gbps
      utilization: 68.2, // percentage
      incidents_today: 12,
      mean_time_to_repair: 1.8, // hours
      customer_satisfaction: 4.3, // score out of 5
      revenue_per_user: 45.67, // USD/month
      churn_rate: 2.1 // percentage/month
    },
    {
      region: 'EUROPE',
      population_coverage: 96.4,
      active_subscribers: 3456789,
      network_capacity: 724.3,
      utilization: 71.5,
      incidents_today: 8,
      mean_time_to_repair: 1.5,
      customer_satisfaction: 4.1,
      revenue_per_user: 42.34,
      churn_rate: 1.8
    },
    {
      region: 'ASIA_PACIFIC',
      population_coverage: 94.7,
      active_subscribers: 6789012,
      network_capacity: 1247.9,
      utilization: 78.9,
      incidents_today: 23,
      mean_time_to_repair: 2.3,
      customer_satisfaction: 4.2,
      revenue_per_user: 38.92,
      churn_rate: 2.4
    },
    {
      region: 'LATIN_AMERICA',
      population_coverage: 89.3,
      active_subscribers: 2345678,
      network_capacity: 445.2,
      utilization: 65.7,
      incidents_today: 15,
      mean_time_to_repair: 3.1,
      customer_satisfaction: 3.9,
      revenue_per_user: 28.45,
      churn_rate: 3.2
    }
  ]);

  const [incidentManagement, setIncidentManagement] = useState({
    active_incidents: [
      {
        incident_id: 'INC_2026_030501',
        severity: 'HIGH',
        type: 'FIBER_CUT',
        location: 'Metro Area 7 - Fiber Route A',
        affected_services: ['INTERNET', 'VOICE', 'ENTERPRISE'],
        affected_users: 15647,
        start_time: Date.now() - 2.5 * 60 * 60 * 1000,
        status: 'IN_PROGRESS',
        assigned_team: 'Field Operations Team 3',
        estimated_resolution: Date.now() + 1.5 * 60 * 60 * 1000,
        workaround_deployed: true,
        impact_level: 'SERVICE_DEGRADATION'
      },
      {
        incident_id: 'INC_2026_030502',
        severity: 'MEDIUM',
        type: 'BASE_STATION_FAULT',
        location: 'Sector 45B - 5G Tower',
        affected_services: ['5G_DATA', '5G_VOICE'],
        affected_users: 3456,
        start_time: Date.now() - 45 * 60 * 1000,
        status: 'INVESTIGATING',
        assigned_team: 'Radio Network Team 1',
        estimated_resolution: Date.now() + 2 * 60 * 60 * 1000,
        workaround_deployed: false,
        impact_level: 'LOCALIZED_OUTAGE'
      },
      {
        incident_id: 'INC_2026_030503',
        severity: 'LOW',
        type: 'CAPACITY_THRESHOLD',
        location: 'Core Network - Region 2',
        affected_services: ['DATA_THROUGHPUT'],
        affected_users: 0,
        start_time: Date.now() - 15 * 60 * 1000,
        status: 'MONITORING',
        assigned_team: 'Capacity Planning Team',
        estimated_resolution: Date.now() + 4 * 60 * 60 * 1000,
        workaround_deployed: false,
        impact_level: 'PERFORMANCE_DEGRADATION'
      }
    ],
    sla_compliance: {
      uptime_target: 99.95, // percentage
      current_uptime: 99.97,
      mttr_target: 4, // hours
      current_mttr: 2.1,
      incidents_resolved_on_time: 94.7, // percentage
      customer_satisfaction_target: 4.2,
      current_satisfaction: 4.1
    }
  });

  const [networkHistory, setNetworkHistory] = useState([]);

  const generateNetworkHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic telecom patterns
      const hour = time.getHours();
      let trafficMultiplier = 0.4; // Base traffic (night)
      
      if (hour >= 6 && hour <= 9) trafficMultiplier = 0.8; // Morning traffic
      if (hour >= 10 && hour <= 16) trafficMultiplier = 0.7; // Business hours
      if (hour >= 17 && hour <= 22) trafficMultiplier = 1.0; // Peak evening
      if (hour >= 23 || hour <= 5) trafficMultiplier = 0.3; // Low night traffic
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        network_utilization: 40 + trafficMultiplier * 40 + Math.random() * 10,
        active_connections: Math.floor((8000000 + trafficMultiplier * 6000000) + Math.random() * 1000000),
        throughput: Math.floor((1200 + trafficMultiplier * 1600) + Math.random() * 200),
        packet_loss: Math.max(0, 0.02 + (1 - trafficMultiplier) * 0.08 + Math.random() * 0.03),
        latency: 8 + (1 - trafficMultiplier) * 8 + Math.random() * 4,
        service_availability: 99.8 + Math.random() * 0.19,
        incidents: Math.floor((1 - trafficMultiplier + 0.1) * 5 + Math.random() * 3)
      });
    }
    return data;
  };

  useEffect(() => {
    setNetworkHistory(generateNetworkHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update network status
      setNetworkStatus(prev => ({
        ...prev,
        networkUtilization: Math.max(50.0, Math.min(85.0, prev.networkUtilization + (Math.random() - 0.5) * 3.0)),
        qualityOfService: Math.max(90.0, Math.min(98.0, prev.qualityOfService + (Math.random() - 0.5) * 1.5)),
        packetLoss: Math.max(0.01, Math.min(0.15, prev.packetLoss + (Math.random() - 0.5) * 0.02)),
        latency: Math.max(8.0, Math.min(25.0, prev.latency + (Math.random() - 0.5) * 2.0)),
        lastUpdate: Date.now()
      }));

      // Update network infrastructure
      setNetworkInfrastructure(prev => prev.map(tech => ({
        ...tech,
        throughput: Math.max(tech.throughput * 0.8, Math.min(tech.throughput * 1.2, tech.throughput + (Math.random() - 0.5) * tech.throughput * 0.1)),
        latency: Math.max(tech.latency * 0.7, Math.min(tech.latency * 1.3, tech.latency + (Math.random() - 0.5) * tech.latency * 0.1)),
        availability: Math.max(98.0, Math.min(99.99, tech.availability + (Math.random() - 0.5) * 0.3))
      })));

      // Update service quality
      setServiceQuality(prev => ({
        ...prev,
        voice_services: {
          ...prev.voice_services,
          call_success_rate: Math.max(98.0, Math.min(99.8, prev.voice_services.call_success_rate + (Math.random() - 0.5) * 0.5)),
          voice_quality_mos: Math.max(3.5, Math.min(4.5, prev.voice_services.voice_quality_mos + (Math.random() - 0.5) * 0.2))
        },
        data_services: {
          ...prev.data_services,
          packet_delivery_ratio: Math.max(99.0, Math.min(99.95, prev.data_services.packet_delivery_ratio + (Math.random() - 0.5) * 0.2)),
          http_response_time: Math.max(200, Math.min(400, prev.data_services.http_response_time + (Math.random() - 0.5) * 30))
        }
      }));

    }, 18000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'NORMAL_OPERATIONS':
      case 'OPTIMAL':
      case 'OPERATIONAL':
      case 'EXCELLENT':
      case 'ACTIVE':
      case 'ENABLED':
      case 'CERTIFIED':
      case 'COMPLIANT':
      case 'PASSED':
      case 'VERIFIED':
      case 'ENHANCED':
      case 'AUTOMATED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'IN_PROGRESS':
      case 'INVESTIGATING':
      case 'MONITORING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'HIGH':
      case 'MEDIUM':
      case 'SERVICE_DEGRADATION':
      case 'LOCALIZED_OUTAGE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL':
      case 'LOW':
      case 'PERFORMANCE_DEGRADATION':
      case 'FAULT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
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

  const formatDuration = (hours) => {
    if (hours < 1) return `${Math.floor(hours * 60)}min`;
    return `${formatNumber(hours, 1)}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          📡 TELECOMMUNICATIONS OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(networkStatus.serviceAvailability, 2)}% Uptime
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatLargeNumber(networkStatus.activeConnections)} Active
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(networkStatus.qualityOfService, 1)}% QoS
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Network Operations & NOC Monitoring
          </div>
        </div>
      </div>

      {/* Network Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL SUBSCRIBERS</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(networkStatus.totalSubscribers)}
              </div>
              <div className="text-xs text-blue-300">
                {formatLargeNumber(networkStatus.activeConnections)} active connections
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SERVICE AVAILABILITY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(networkStatus.serviceAvailability, 2)}%
              </div>
              <div className="text-xs text-green-300">
                Carrier-grade uptime
              </div>
            </div>
            <div className="text-3xl opacity-60">📶</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">NETWORK UTILIZATION</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(networkStatus.networkUtilization, 1)}%
              </div>
              <div className="text-xs text-purple-300">
                {formatNumber(networkStatus.totalThroughput, 1)} Gbps throughput
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">QUALITY OF SERVICE</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(networkStatus.qualityOfService, 1)}%
              </div>
              <div className="text-xs text-orange-300">
                {formatNumber(networkStatus.latency, 1)}ms latency
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>
      </div>

      {/* Network Infrastructure Technologies */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌐 NETWORK INFRASTRUCTURE & TECHNOLOGY STACK
        </h3>
        <div className="space-y-3">
          {networkInfrastructure.map((tech) => (
            <div key={tech.technology} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{tech.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(tech.status)}`}>
                    {tech.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {tech.technology.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Availability: {formatNumber(tech.availability, 1)}%
                </div>
              </div>

              {tech.technology === '5G_NR' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Base Stations: </span>
                    <span className="text-cyan-400">{formatLargeNumber(tech.base_stations)}</span>
                    <span className="text-gray-400"> | Coverage: </span>
                    <span className="text-green-400">{formatNumber(tech.coverage_area, 1)}%</span>
                    <span className="text-gray-400"> | Active Users: </span>
                    <span className="text-blue-400">{formatLargeNumber(tech.active_users)}</span>
                  </div>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Throughput: </span>
                    <span className="text-purple-400">{formatNumber(tech.throughput, 1)} Mbps</span>
                    <span className="text-gray-400"> | Latency: </span>
                    <span className="text-orange-400">{formatNumber(tech.latency, 1)}ms</span>
                    <span className="text-gray-400"> | Spectrum Efficiency: </span>
                    <span className="text-pink-400">{formatNumber(tech.spectrum_efficiency, 1)}%</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Handover Success: </span>
                    <span className="text-green-400">{formatNumber(tech.handover_success_rate, 1)}%</span>
                    <span className="text-gray-400"> | Energy Efficiency: </span>
                    <span className="text-cyan-400">{tech.energy_efficiency}</span>
                  </div>
                </>
              )}

              {tech.technology === 'LTE_ADVANCED' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Base Stations: </span>
                    <span className="text-cyan-400">{formatLargeNumber(tech.base_stations)}</span>
                    <span className="text-gray-400"> | Coverage: </span>
                    <span className="text-green-400">{formatNumber(tech.coverage_area, 1)}%</span>
                    <span className="text-gray-400"> | Active Users: </span>
                    <span className="text-blue-400">{formatLargeNumber(tech.active_users)}</span>
                  </div>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Throughput: </span>
                    <span className="text-purple-400">{formatNumber(tech.throughput, 1)} Mbps</span>
                    <span className="text-gray-400"> | Latency: </span>
                    <span className="text-orange-400">{formatNumber(tech.latency, 1)}ms</span>
                    <span className="text-gray-400"> | Carriers: </span>
                    <span className="text-yellow-400">{tech.aggregation_carriers}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Spectrum Efficiency: </span>
                    <span className="text-pink-400">{formatNumber(tech.spectrum_efficiency, 1)}%</span>
                    <span className="text-gray-400"> | Handover Success: </span>
                    <span className="text-green-400">{formatNumber(tech.handover_success_rate, 1)}%</span>
                  </div>
                </>
              )}

              {tech.technology === 'FIBER_OPTIC' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Total Length: </span>
                    <span className="text-cyan-400">{formatLargeNumber(tech.total_length)} km</span>
                    <span className="text-gray-400"> | Active Connections: </span>
                    <span className="text-blue-400">{formatLargeNumber(tech.active_connections)}</span>
                    <span className="text-gray-400"> | Segments: </span>
                    <span className="text-yellow-400">{formatLargeNumber(tech.network_segments)}</span>
                  </div>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Capacity: </span>
                    <span className="text-purple-400">{formatLargeNumber(tech.bandwidth_capacity)} Gbps</span>
                    <span className="text-gray-400"> | Utilization: </span>
                    <span className="text-orange-400">{formatNumber(tech.utilization, 1)}%</span>
                    <span className="text-gray-400"> | Fault Rate: </span>
                    <span className="text-red-400">{formatNumber(tech.fault_rate, 2)}/100km</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Avg Repair Time: </span>
                    <span className="text-pink-400">{formatNumber(tech.repair_time, 1)}h</span>
                  </div>
                </>
              )}

              {tech.technology === 'MPLS_VPN' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Total Circuits: </span>
                    <span className="text-cyan-400">{formatLargeNumber(tech.total_circuits)}</span>
                    <span className="text-gray-400"> | Active VPNs: </span>
                    <span className="text-blue-400">{formatLargeNumber(tech.active_vpns)}</span>
                    <span className="text-gray-400"> | QoS Classes: </span>
                    <span className="text-yellow-400">{tech.qos_classes}</span>
                  </div>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Bandwidth Utilization: </span>
                    <span className="text-purple-400">{formatNumber(tech.bandwidth_utilization, 1)}%</span>
                    <span className="text-gray-400"> | SLA Compliance: </span>
                    <span className="text-green-400">{formatNumber(tech.sla_compliance, 1)}%</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Traffic Engineering: </span>
                    <span className="text-orange-400">{tech.traffic_engineering}</span>
                    <span className="text-gray-400"> | Failover: </span>
                    <span className="text-pink-400">{formatNumber(tech.failover_time, 1)}s</span>
                  </div>
                </>
              )}

              {tech.technology === 'SATELLITE' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Active Satellites: </span>
                    <span className="text-cyan-400">{tech.active_satellites}</span>
                    <span className="text-gray-400"> | Earth Stations: </span>
                    <span className="text-blue-400">{tech.earth_stations}</span>
                    <span className="text-gray-400"> | Coverage Zones: </span>
                    <span className="text-yellow-400">{tech.coverage_zones}</span>
                  </div>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Throughput: </span>
                    <span className="text-purple-400">{formatNumber(tech.throughput, 1)} Mbps</span>
                    <span className="text-gray-400"> | Latency: </span>
                    <span className="text-orange-400">{formatNumber(tech.latency, 0)}ms</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Signal Strength: </span>
                    <span className="text-pink-400">{formatNumber(tech.signal_strength, 1)} dBm</span>
                    <span className="text-gray-400"> | Weather Impact: </span>
                    <span className="text-green-400">{tech.weather_impact}</span>
                  </div>
                </>
              )}

              <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                <div 
                  className="h-2 rounded-full bg-green-400"
                  style={{ width: `${Math.min(tech.availability, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Quality Metrics */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📞 SERVICE QUALITY & PERFORMANCE METRICS
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Voice Services</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Call Success Rate:</span>
                <span className="text-green-400">{formatNumber(serviceQuality.voice_services.call_success_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Voice Quality (MOS):</span>
                <span className="text-blue-400">{formatNumber(serviceQuality.voice_services.voice_quality_mos, 1)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Dropped Call Rate:</span>
                <span className="text-yellow-400">{formatNumber(serviceQuality.voice_services.dropped_call_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Blocked Call Rate:</span>
                <span className="text-orange-400">{formatNumber(serviceQuality.voice_services.blocked_call_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Handover Failures:</span>
                <span className="text-red-400">{serviceQuality.voice_services.handover_failures}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Echo Cancellation:</span>
                <span className={`${getStatusColor(serviceQuality.voice_services.echo_cancellation).split(' ')[0]}`}>
                  {serviceQuality.voice_services.echo_cancellation}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Noise Reduction:</span>
                <span className={`${getStatusColor(serviceQuality.voice_services.noise_reduction).split(' ')[0]}`}>
                  {serviceQuality.voice_services.noise_reduction}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Data Services</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Throughput Consistency:</span>
                <span className="text-green-400">{formatNumber(serviceQuality.data_services.throughput_consistency, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Packet Delivery:</span>
                <span className="text-blue-400">{formatNumber(serviceQuality.data_services.packet_delivery_ratio, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Jitter:</span>
                <span className="text-yellow-400">{formatNumber(serviceQuality.data_services.jitter, 1)}ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">TCP Retransmission:</span>
                <span className="text-orange-400">{formatNumber(serviceQuality.data_services.tcp_retransmission_rate, 2)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">DNS Resolution:</span>
                <span className="text-cyan-400">{formatNumber(serviceQuality.data_services.dns_resolution_time, 1)}ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">HTTP Response:</span>
                <span className="text-purple-400">{serviceQuality.data_services.http_response_time}ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Video Streaming:</span>
                <span className={`${getStatusColor(serviceQuality.data_services.video_streaming_quality).split(' ')[0]}`}>
                  {serviceQuality.data_services.video_streaming_quality}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Messaging Services</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">SMS Delivery Success:</span>
                <span className="text-green-400">{formatNumber(serviceQuality.messaging_services.sms_delivery_success, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">SMS Delivery Time:</span>
                <span className="text-blue-400">{formatNumber(serviceQuality.messaging_services.sms_delivery_time, 1)}s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">MMS Success Rate:</span>
                <span className="text-yellow-400">{formatNumber(serviceQuality.messaging_services.mms_success_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Rich Messaging:</span>
                <span className="text-orange-400">{formatNumber(serviceQuality.messaging_services.rich_messaging_availability, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Spam Filtering:</span>
                <span className="text-cyan-400">{formatNumber(serviceQuality.messaging_services.spam_filtering_accuracy, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Message Encryption:</span>
                <span className="text-purple-400">{serviceQuality.messaging_services.message_encryption.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 NETWORK OPERATIONS TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={networkHistory}>
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
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="active_connections"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Active Connections (M)"
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
              yAxisId="left"
              type="monotone" 
              dataKey="throughput" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Throughput (Gbps)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="packet_loss" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Packet Loss %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="latency" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Latency (ms)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="service_availability" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Service Availability %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="incidents" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Incidents"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Regional Operations and Incident Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌍 REGIONAL OPERATIONS OVERVIEW
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {operationalMetrics.map((region, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{region.region.replace(/_/g, ' ')}</span>
                  <div className="text-xs text-gray-400">
                    CSAT: {formatNumber(region.customer_satisfaction, 1)}/5
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Coverage: </span>
                  <span className="text-green-400">{formatNumber(region.population_coverage, 1)}%</span>
                  <span className="text-gray-400"> | Subscribers: </span>
                  <span className="text-blue-400">{formatLargeNumber(region.active_subscribers)}</span>
                  <span className="text-gray-400"> | Capacity: </span>
                  <span className="text-purple-400">{formatNumber(region.network_capacity, 1)} Gbps</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Utilization: </span>
                  <span className="text-orange-400">{formatNumber(region.utilization, 1)}%</span>
                  <span className="text-gray-400"> | Incidents Today: </span>
                  <span className="text-red-400">{region.incidents_today}</span>
                  <span className="text-gray-400"> | MTTR: </span>
                  <span className="text-yellow-400">{formatDuration(region.mean_time_to_repair)}</span>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">ARPU: </span>
                  <span className="text-green-400">{formatCurrency(region.revenue_per_user)}/mo</span>
                  <span className="text-gray-400"> | Churn: </span>
                  <span className="text-pink-400">{formatNumber(region.churn_rate, 1)}%/mo</span>
                </div>

                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${region.utilization < 70 ? 'bg-green-400' : 
                                                     region.utilization < 85 ? 'bg-yellow-400' : 'bg-orange-400'}`}
                    style={{ width: `${Math.min(region.utilization, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Incident Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 INCIDENT MANAGEMENT & SLA MONITORING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">SLA Compliance</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Uptime Target/Current:</span>
                <span className="text-green-400">
                  {formatNumber(incidentManagement.sla_compliance.uptime_target, 2)}% / 
                  {formatNumber(incidentManagement.sla_compliance.current_uptime, 2)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MTTR Target/Current:</span>
                <span className="text-blue-400">
                  {incidentManagement.sla_compliance.mttr_target}h / 
                  {formatNumber(incidentManagement.sla_compliance.current_mttr, 1)}h
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">On-Time Resolution:</span>
                <span className="text-purple-400">{formatNumber(incidentManagement.sla_compliance.incidents_resolved_on_time, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CSAT Target/Current:</span>
                <span className="text-orange-400">
                  {formatNumber(incidentManagement.sla_compliance.customer_satisfaction_target, 1)} / 
                  {formatNumber(incidentManagement.sla_compliance.current_satisfaction, 1)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Active Incidents</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {incidentManagement.active_incidents.map((incident, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{incident.incident_id}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </div>
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Type: </span>
                    <span className="text-cyan-400">{incident.type.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Location: </span>
                    <span className="text-yellow-400">{incident.location}</span>
                  </div>
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Affected Users: </span>
                    <span className="text-red-400">{formatLargeNumber(incident.affected_users)}</span>
                    <span className="text-gray-400"> | Started: </span>
                    <span className="text-purple-400">{formatTime(incident.start_time)}</span>
                  </div>
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Status: </span>
                    <span className={`${getStatusColor(incident.status).split(' ')[0]}`}>
                      {incident.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-orange-400">{formatTime(incident.estimated_resolution)}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Team: </span>
                    <span className="text-blue-400">{incident.assigned_team}</span>
                    <span className="text-gray-400"> | Workaround: </span>
                    <span className={incident.workaround_deployed ? 'text-green-400' : 'text-red-400'}>
                      {incident.workaround_deployed ? 'DEPLOYED' : 'NONE'}
                    </span>
                  </div>
                  <div className="text-xs mt-1">
                    <span className="text-gray-400">Impact: </span>
                    <span className="text-pink-400">{incident.impact_level.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Services: </span>
                    <span className="text-cyan-400">{incident.affected_services.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Network Security */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔒 NETWORK SECURITY & COMPLIANCE MONITORING
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Threat Detection</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Threats Detected:</span>
                <span className="text-red-400">{networkSecurity.threat_detection.threats_detected}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Threats Blocked:</span>
                <span className="text-green-400">{networkSecurity.threat_detection.threats_blocked}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Success Rate:</span>
                <span className="text-blue-400">{formatNumber(networkSecurity.threat_detection.success_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">False Positive:</span>
                <span className="text-yellow-400">{formatNumber(networkSecurity.threat_detection.false_positive_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Detection Time:</span>
                <span className="text-orange-400">{formatNumber(networkSecurity.threat_detection.avg_detection_time, 1)}s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">AI Analysis:</span>
                <span className={`${getStatusColor(networkSecurity.threat_detection.ai_threat_analysis).split(' ')[0]}`}>
                  {networkSecurity.threat_detection.ai_threat_analysis}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">DDoS Protection</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Attacks Mitigated:</span>
                <span className="text-green-400">{networkSecurity.ddos_protection.attacks_mitigated}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Peak Attack Volume:</span>
                <span className="text-red-400">{networkSecurity.ddos_protection.peak_attack_volume} Gbps</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Mitigation Time:</span>
                <span className="text-blue-400">{formatNumber(networkSecurity.ddos_protection.mitigation_time, 1)}s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Uptime Maintained:</span>
                <span className="text-green-400">{formatNumber(networkSecurity.ddos_protection.uptime_maintained, 2)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Scrubbing Capacity:</span>
                <span className="text-purple-400">{formatLargeNumber(networkSecurity.ddos_protection.scrubbing_capacity)} Gbps</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Global Protection:</span>
                <span className={`${getStatusColor(networkSecurity.ddos_protection.global_protection).split(' ')[0]}`}>
                  {networkSecurity.ddos_protection.global_protection}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Access Control</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Auth Sessions:</span>
                <span className="text-green-400">{formatLargeNumber(networkSecurity.access_control.authenticated_sessions)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Failed Auth:</span>
                <span className="text-red-400">{formatLargeNumber(networkSecurity.access_control.failed_authentication)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Two-Factor:</span>
                <span className="text-blue-400">{formatNumber(networkSecurity.access_control.two_factor_enabled, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Privileged Access:</span>
                <span className={`${getStatusColor(networkSecurity.access_control.privileged_access_monitoring).split(' ')[0]}`}>
                  {networkSecurity.access_control.privileged_access_monitoring}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Zero Trust:</span>
                <span className="text-purple-400">{formatNumber(networkSecurity.access_control.zero_trust_adoption, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Cert Management:</span>
                <span className={`${getStatusColor(networkSecurity.access_control.certificate_management).split(' ')[0]}`}>
                  {networkSecurity.access_control.certificate_management}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Compliance</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">GDPR Compliance:</span>
                <span className={`${getStatusColor(networkSecurity.compliance.gdpr_compliance).split(' ')[0]}`}>
                  {networkSecurity.compliance.gdpr_compliance}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">ISO 27001:</span>
                <span className={`${getStatusColor(networkSecurity.compliance.iso27001_status).split(' ')[0]}`}>
                  {networkSecurity.compliance.iso27001_status}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">SOX Audit:</span>
                <span className={`${getStatusColor(networkSecurity.compliance.sox_audit_status).split(' ')[0]}`}>
                  {networkSecurity.compliance.sox_audit_status}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">PCI DSS:</span>
                <span className="text-green-400">{networkSecurity.compliance.pci_dss_level.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">HIPAA:</span>
                <span className={`${getStatusColor(networkSecurity.compliance.hipaa_compliance).split(' ')[0]}`}>
                  {networkSecurity.compliance.hipaa_compliance}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Data Encryption:</span>
                <span className="text-purple-400">{networkSecurity.compliance.data_encryption.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecommunicationsOperationsCenter;