// TelecomOperations.js - Telecommunications Network Operations Center (NOC) & 5G Infrastructure Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const TelecomOperations = () => {
  const [networkInfrastructure, setNetworkInfrastructure] = useState([
    {
      id: 'region_001',
      name: 'Northeast Corridor',
      type: '5G_ULTRA_WIDEBAND',
      operator: 'Global Telecom Corp',
      status: 'OPERATIONAL',
      location: 'Boston - NYC - Washington DC',
      coverage: {
        area: 12450, // square kilometers
        population: 15600000,
        penetration: 89.4 // percentage
      },
      network: {
        cellSites: 4567,
        activeSites: 4234,
        offline: 23,
        maintenance: 45,
        utilization: 76.8 // percentage
      },
      spectrum: {
        lowBand: { frequency: '600 MHz', bandwidth: 20, utilization: 78.9 },
        midBand: { frequency: '2.5 GHz', bandwidth: 100, utilization: 82.4 },
        mmWave: { frequency: '28 GHz', bandwidth: 800, utilization: 34.7 }
      },
      traffic: {
        dataVolume: 8.9, // petabytes per day
        voiceCalls: 2.4, // million per day
        sms: 4.8, // million per day
        videoStreaming: 67.2 // percentage of traffic
      },
      performance: {
        latency: 15.2, // milliseconds
        throughput: 1.8, // Gbps average
        packetLoss: 0.02, // percentage
        jitter: 2.1, // milliseconds
        availability: 99.97 // percentage
      },
      customerMetrics: {
        subscribers: 3.4, // million
        arpu: 67.50, // average revenue per user
        churnRate: 1.8, // percentage monthly
        netPromoterScore: 72.3
      },
      lastUpdate: Date.now() - 3 * 60 * 1000,
      alerts: ['23 cell sites offline', 'High traffic in Manhattan area']
    },
    {
      id: 'region_002',
      name: 'California Central Valley',
      type: '5G_NATIONWIDE',
      operator: 'Pacific Wireless',
      status: 'OPERATIONAL',
      location: 'San Francisco - Los Angeles',
      coverage: {
        area: 18900,
        population: 22400000,
        penetration: 91.7
      },
      network: {
        cellSites: 6234,
        activeSites: 5998,
        offline: 45,
        maintenance: 67,
        utilization: 83.2
      },
      spectrum: {
        lowBand: { frequency: '850 MHz', bandwidth: 15, utilization: 85.3 },
        midBand: { frequency: '3.7 GHz', bandwidth: 120, utilization: 79.8 },
        mmWave: { frequency: '39 GHz', bandwidth: 400, utilization: 28.9 }
      },
      traffic: {
        dataVolume: 12.7,
        voiceCalls: 3.8,
        sms: 7.2,
        videoStreaming: 71.8
      },
      performance: {
        latency: 18.9,
        throughput: 1.6,
        packetLoss: 0.03,
        jitter: 2.8,
        availability: 99.94
      },
      customerMetrics: {
        subscribers: 5.2,
        arpu: 72.85,
        churnRate: 1.6,
        netPromoterScore: 68.9
      },
      lastUpdate: Date.now() - 7 * 60 * 1000,
      alerts: ['Earthquake precautions active', 'Spectrum congestion in LA']
    },
    {
      id: 'region_003',
      name: 'Texas Triangle',
      type: '5G_ENHANCED',
      operator: 'Southwest Networks',
      status: 'OPERATIONAL',
      location: 'Dallas - Houston - San Antonio',
      coverage: {
        area: 15600,
        population: 18900000,
        penetration: 87.2
      },
      network: {
        cellSites: 5123,
        activeSites: 4876,
        offline: 18,
        maintenance: 34,
        utilization: 79.3
      },
      spectrum: {
        lowBand: { frequency: '700 MHz', bandwidth: 10, utilization: 82.1 },
        midBand: { frequency: '2.5 GHz', bandwidth: 80, utilization: 77.6 },
        mmWave: { frequency: '28 GHz', bandwidth: 600, utilization: 31.5 }
      },
      traffic: {
        dataVolume: 10.4,
        voiceCalls: 2.9,
        sms: 5.6,
        videoStreaming: 64.3
      },
      performance: {
        latency: 16.7,
        throughput: 1.7,
        packetLoss: 0.025,
        jitter: 2.4,
        availability: 99.95
      },
      customerMetrics: {
        subscribers: 4.1,
        arpu: 65.40,
        churnRate: 1.9,
        netPromoterScore: 70.1
      },
      lastUpdate: Date.now() - 5 * 60 * 1000,
      alerts: ['Weather monitoring active for severe storms']
    }
  ]);

  const [coreNetwork, setCoreNetwork] = useState([
    {
      id: 'core_001',
      name: 'East Coast 5G Core',
      type: '5G_STANDALONE',
      location: 'Ashburn Data Center Complex',
      vendor: 'Nokia',
      status: 'OPERATIONAL',
      architecture: 'CLOUD_NATIVE',
      functions: {
        amf: { instances: 12, load: 67.8, status: 'ACTIVE' }, // Access and Mobility Management Function
        smf: { instances: 8, load: 73.2, status: 'ACTIVE' }, // Session Management Function
        upf: { instances: 16, load: 89.4, status: 'ACTIVE' }, // User Plane Function
        nrf: { instances: 4, load: 45.6, status: 'ACTIVE' }, // NF Repository Function
        udm: { instances: 6, load: 52.3, status: 'ACTIVE' } // Unified Data Management
      },
      capacity: {
        subscribers: 25000000,
        currentLoad: 18700000,
        utilization: 74.8,
        sessions: 8900000,
        throughput: 450, // Gbps
        transactions: 125000 // per second
      },
      performance: {
        cpuUtilization: 68.9,
        memoryUtilization: 72.1,
        diskIo: 45.7,
        networkLatency: 2.1,
        availability: 99.99
      },
      slicing: {
        eMBB: { slices: 45, load: 78.9, priority: 'NORMAL' }, // Enhanced Mobile Broadband
        uRLLC: { slices: 12, load: 34.2, priority: 'CRITICAL' }, // Ultra-Reliable Low-Latency Communications
        mIoT: { slices: 67, load: 56.8, priority: 'LOW' } // Massive IoT
      },
      lastUpdate: Date.now() - 2 * 60 * 1000,
      alerts: ['UPF instances at 89% load - scaling triggered']
    },
    {
      id: 'core_002',
      name: 'West Coast 5G Core',
      type: '5G_NON_STANDALONE',
      location: 'Silicon Valley Data Center',
      vendor: 'Ericsson',
      status: 'OPERATIONAL',
      architecture: 'VIRTUALIZED',
      functions: {
        amf: { instances: 10, load: 72.4, status: 'ACTIVE' },
        smf: { instances: 7, load: 68.9, status: 'ACTIVE' },
        upf: { instances: 14, load: 82.6, status: 'ACTIVE' },
        nrf: { instances: 3, load: 41.2, status: 'ACTIVE' },
        udm: { instances: 5, load: 59.7, status: 'ACTIVE' }
      },
      capacity: {
        subscribers: 20000000,
        currentLoad: 15600000,
        utilization: 78.0,
        sessions: 7200000,
        throughput: 380,
        transactions: 98000
      },
      performance: {
        cpuUtilization: 71.2,
        memoryUtilization: 69.8,
        diskIo: 52.1,
        networkLatency: 2.8,
        availability: 99.96
      },
      slicing: {
        eMBB: { slices: 38, load: 81.2, priority: 'NORMAL' },
        uRLLC: { slices: 8, load: 29.6, priority: 'CRITICAL' },
        mIoT: { slices: 52, load: 62.4, priority: 'LOW' }
      },
      lastUpdate: Date.now() - 4 * 60 * 1000,
      alerts: ['Memory utilization approaching 70% threshold']
    },
    {
      id: 'core_003',
      name: 'Central Region 5G Core',
      type: '5G_HYBRID',
      location: 'Chicago Tier III Data Center',
      vendor: 'Samsung',
      status: 'MAINTENANCE',
      architecture: 'HYBRID_CLOUD',
      functions: {
        amf: { instances: 8, load: 45.1, status: 'MAINTENANCE' },
        smf: { instances: 6, load: 0, status: 'OFFLINE' },
        upf: { instances: 12, load: 67.9, status: 'ACTIVE' },
        nrf: { instances: 3, load: 38.4, status: 'ACTIVE' },
        udm: { instances: 4, load: 0, status: 'MAINTENANCE' }
      },
      capacity: {
        subscribers: 15000000,
        currentLoad: 8900000,
        utilization: 59.3,
        sessions: 3400000,
        throughput: 220,
        transactions: 45000
      },
      performance: {
        cpuUtilization: 34.5,
        memoryUtilization: 28.9,
        diskIo: 21.7,
        networkLatency: 4.2,
        availability: 98.7
      },
      slicing: {
        eMBB: { slices: 28, load: 45.8, priority: 'NORMAL' },
        uRLLC: { slices: 5, load: 12.3, priority: 'CRITICAL' },
        mIoT: { slices: 34, load: 23.9, priority: 'LOW' }
      },
      lastUpdate: Date.now() - 15 * 60 * 1000,
      alerts: ['Scheduled maintenance - SMF function offline', 'UDM function under maintenance', 'Reduced capacity mode']
    }
  ]);

  const [fiberNetwork, setFiberNetwork] = useState([
    {
      id: 'fiber_001',
      name: 'Transcontinental Fiber Route 1',
      type: 'LONG_HAUL_BACKBONE',
      route: 'New York → Chicago → Denver → Los Angeles',
      operator: 'National Fiber Corp',
      status: 'OPERATIONAL',
      specifications: {
        length: 2847, // kilometers
        fiberCount: 432,
        wavelengths: 80,
        capacity: 25.6, // Tbps
        technology: 'DWDM C-Band + L-Band'
      },
      utilization: {
        eastbound: 78.9, // percentage
        westbound: 82.4,
        averageFill: 80.7,
        peakUsage: 94.2,
        darkFiber: 23.4 // unused capacity percentage
      },
      performance: {
        opticalPower: -12.4, // dBm
        osnr: 28.7, // dB Optical Signal-to-Noise Ratio
        ber: 1.2e-12, // Bit Error Rate
        latency: 28.9, // milliseconds coast-to-coast
        jitter: 0.8,
        availability: 99.98
      },
      amplifiers: {
        total: 156,
        operational: 154,
        alarmed: 2,
        avgGain: 22.1, // dB
        noiseLevel: 4.2 // dB
      },
      protection: {
        scheme: '1+1 AUTOMATIC',
        switchingTime: 50, // milliseconds
        lastSwitch: Date.now() - 12 * 24 * 60 * 60 * 1000,
        protectionActive: false
      },
      customers: [
        { name: 'CloudTech Corp', bandwidth: 400, // Gbps
          sla: 99.95, // percentage uptime guarantee
          revenue: 1200000 // $ per month
        },
        { name: 'Global ISP', bandwidth: 800, sla: 99.99, revenue: 2400000 },
        { name: 'Enterprise Solutions', bandwidth: 200, sla: 99.9, revenue: 600000 }
      ],
      lastUpdate: Date.now() - 1 * 60 * 1000,
      alerts: ['2 optical amplifiers showing high noise', 'Wavelength 43 power drift detected']
    },
    {
      id: 'fiber_002',
      name: 'Regional Metro Network - Southeast',
      type: 'METRO_RING',
      route: 'Atlanta → Charlotte → Raleigh → Jacksonville → Atlanta',
      operator: 'Southeast Fiber LLC',
      status: 'OPERATIONAL',
      specifications: {
        length: 1234,
        fiberCount: 288,
        wavelengths: 40,
        capacity: 16.0,
        technology: 'CWDM Metro Ethernet'
      },
      utilization: {
        eastbound: 65.7,
        westbound: 71.2,
        averageFill: 68.5,
        peakUsage: 89.1,
        darkFiber: 31.5
      },
      performance: {
        opticalPower: -8.9,
        osnr: 32.1,
        ber: 2.8e-13,
        latency: 15.6,
        jitter: 1.2,
        availability: 99.94
      },
      amplifiers: {
        total: 45,
        operational: 44,
        alarmed: 1,
        avgGain: 18.7,
        noiseLevel: 3.1
      },
      protection: {
        scheme: 'RING_PROTECTION',
        switchingTime: 30,
        lastSwitch: Date.now() - 8 * 24 * 60 * 60 * 1000,
        protectionActive: false
      },
      customers: [
        { name: 'Regional Bank', bandwidth: 100, sla: 99.9, revenue: 180000 },
        { name: 'Healthcare System', bandwidth: 50, sla: 99.95, revenue: 90000 },
        { name: 'Government Agency', bandwidth: 200, sla: 99.99, revenue: 450000 }
      ],
      lastUpdate: Date.now() - 6 * 60 * 1000,
      alerts: ['Amplifier A23 alarm - scheduled replacement']
    },
    {
      id: 'fiber_003',
      name: 'Submarine Cable System - TransAtlantic',
      type: 'SUBMARINE_CABLE',
      route: 'Virginia Beach → Azores → Ireland → UK',
      operator: 'International Subsea Networks',
      status: 'OPERATIONAL',
      specifications: {
        length: 6890,
        fiberCount: 8,
        wavelengths: 160,
        capacity: 144, // Tbps
        technology: 'SDM Space Division Multiplexing'
      },
      utilization: {
        eastbound: 67.2,
        westbound: 74.8,
        averageFill: 71.0,
        peakUsage: 87.3,
        darkFiber: 29.0
      },
      performance: {
        opticalPower: -16.2,
        osnr: 26.4,
        ber: 3.4e-14,
        latency: 67.8,
        jitter: 0.3,
        availability: 99.92
      },
      amplifiers: {
        total: 234,
        operational: 234,
        alarmed: 0,
        avgGain: 19.8,
        noiseLevel: 3.8
      },
      protection: {
        scheme: 'CABLE_PROTECTION',
        switchingTime: 150,
        lastSwitch: Date.now() - 89 * 24 * 60 * 60 * 1000,
        protectionActive: false
      },
      customers: [
        { name: 'Global Cloud Provider', bandwidth: 40000, sla: 99.99, revenue: 12000000 },
        { name: 'International Telco', bandwidth: 25000, sla: 99.95, revenue: 8500000 },
        { name: 'Financial Services', bandwidth: 10000, sla: 99.99, revenue: 4200000 }
      ],
      lastUpdate: Date.now() - 8 * 60 * 1000,
      alerts: []
    }
  ]);

  const [satelliteNetwork, setSatelliteNetwork] = useState([
    {
      id: 'sat_001',
      constellation: 'LEO Constellation Alpha',
      type: 'LOW_EARTH_ORBIT',
      operator: 'StarLink Technologies',
      status: 'OPERATIONAL',
      satellites: {
        total: 2847,
        operational: 2734,
        deorbiting: 23,
        launching: 45,
        maintenance: 45
      },
      orbitalParameters: {
        altitude: 550, // kilometers
        inclination: 53.0, // degrees
        period: 95.4, // minutes
        planes: 72,
        satsPerPlane: 22
      },
      coverage: {
        globalCoverage: 89.4, // percentage
        polarRegions: 78.9,
        landMass: 95.2,
        oceanic: 87.6,
        activeBeams: 89456
      },
      performance: {
        latency: 24.7, // milliseconds
        throughput: 150, // Mbps per beam
        availability: 99.8,
        handoverSuccess: 98.9, // percentage
        downlinkFrequency: '10.7-12.7 GHz',
        uplinkFrequency: '14.0-14.5 GHz'
      },
      groundNetwork: {
        gateways: 234,
        activeGateways: 228,
        userTerminals: 1890000,
        activeTerminals: 1745000,
        dataVolume: 45.6 // petabytes per day
      },
      customers: {
        residential: 1200000,
        enterprise: 189000,
        maritime: 45000,
        aviation: 67000,
        government: 23000
      },
      revenue: {
        monthly: 890000000, // USD
        arpu: 89.50,
        growth: 12.4 // percentage
      },
      lastUpdate: Date.now() - 12 * 60 * 1000,
      alerts: ['23 satellites scheduled for deorbiting', '45 satellites launching next week']
    },
    {
      id: 'sat_002',
      constellation: 'GEO Satellite Fleet',
      type: 'GEOSTATIONARY',
      operator: 'Global Satellite Services',
      status: 'OPERATIONAL',
      satellites: {
        total: 23,
        operational: 21,
        deorbiting: 1,
        launching: 1,
        maintenance: 0
      },
      orbitalParameters: {
        altitude: 35786,
        inclination: 0.1,
        period: 1436, // minutes (24 hours)
        longitude: 'Various',
        footprint: 'Continental'
      },
      coverage: {
        globalCoverage: 67.8,
        polarRegions: 0,
        landMass: 89.4,
        oceanic: 78.2,
        activeBeams: 1234
      },
      performance: {
        latency: 578, // milliseconds
        throughput: 50, // Mbps per beam
        availability: 99.95,
        handoverSuccess: 100, // no handovers for GEO
        downlinkFrequency: '3.7-4.2 GHz',
        uplinkFrequency: '5.925-6.425 GHz'
      },
      groundNetwork: {
        gateways: 45,
        activeGateways: 43,
        userTerminals: 234000,
        activeTerminals: 198000,
        dataVolume: 8.9
      },
      customers: {
        residential: 78000,
        enterprise: 89000,
        maritime: 23000,
        aviation: 12000,
        government: 30000
      },
      revenue: {
        monthly: 145000000,
        arpu: 234.50,
        growth: 3.8
      },
      lastUpdate: Date.now() - 18 * 60 * 1000,
      alerts: ['GEO-12 fuel reserves at 70%', 'New satellite launch scheduled']
    }
  ]);

  const [serviceMetrics, setServiceMetrics] = useState({
    voiceServices: {
      totalCalls: 45.6, // million per day
      completedCalls: 44.8,
      failedCalls: 0.8,
      callCompletionRate: 98.2, // percentage
      postDialDelay: 2.3, // seconds
      callQuality: 4.2, // MOS (Mean Opinion Score) out of 5
      revenue: 23400000 // $ per month
    },
    dataServices: {
      totalTraffic: 234.8, // petabytes per day
      peakTraffic: 312.4,
      videoStreaming: 156.7, // petabytes
      webBrowsing: 45.2,
      socialMedia: 23.4,
      gaming: 9.5,
      averageSpeed: 89.4, // Mbps
      peakSpeed: 1.8 // Gbps
    },
    messagingServices: {
      smsVolume: 890, // million per day
      mmsVolume: 234,
      rcsMessages: 45.6, // Rich Communication Services
      deliveryRate: 99.7, // percentage
      deliveryTime: 1.2, // seconds average
      spam: 12.3 // percentage
    },
    iotServices: {
      connectedDevices: 45600000,
      activeDevices: 42300000,
      dataVolume: 23.4, // terabytes per day
      deviceTypes: {
        automotive: 12300000,
        industrial: 8900000,
        smartHome: 15600000,
        agriculture: 3400000,
        healthcare: 2800000,
        other: 2600000
      },
      revenue: 67800000
    },
    qualityMetrics: {
      networkAvailability: 99.94, // percentage
      customerSatisfaction: 4.1, // out of 5
      netPromoterScore: 45.6,
      complaintRate: 0.8, // per 1000 customers
      resolutionTime: 4.2, // hours average
      firstCallResolution: 78.9 // percentage
    },
    lastUpdate: Date.now() - 8 * 60 * 1000
  });

  const [performanceTrends, setPerformanceTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        dataTraffic: Math.floor(Math.random() * 50) + 200, // PB/day
        voiceCalls: Math.floor(Math.random() * 10) + 40, // million/day
        latency: Math.floor(Math.random() * 5) + 15, // ms
        availability: Math.floor(Math.random() * 200) + 9980, // basis points (99.8-99.99%)
        throughput: Math.floor(Math.random() * 500) + 1300, // Mbps
        customers: Math.floor(Math.random() * 100000) + 12400000, // total subscribers
        revenue: Math.floor(Math.random() * 10000000) + 120000000 // $ monthly
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update network infrastructure
      setNetworkInfrastructure(prev => prev.map(region => ({
        ...region,
        network: {
          ...region.network,
          utilization: Math.max(50, Math.min(95, region.network.utilization + (Math.random() - 0.5) * 3)),
          offline: Math.max(0, region.network.offline + Math.floor((Math.random() - 0.8) * 5))
        },
        traffic: {
          ...region.traffic,
          dataVolume: Math.max(5, region.traffic.dataVolume + (Math.random() - 0.5) * 1.0),
          voiceCalls: Math.max(1, region.traffic.voiceCalls + (Math.random() - 0.5) * 0.3)
        },
        performance: {
          ...region.performance,
          latency: Math.max(10, Math.min(30, region.performance.latency + (Math.random() - 0.5) * 2)),
          throughput: Math.max(1.0, Math.min(2.5, region.performance.throughput + (Math.random() - 0.5) * 0.2)),
          availability: Math.max(99.0, Math.min(99.99, region.performance.availability + (Math.random() - 0.5) * 0.02))
        },
        lastUpdate: Date.now()
      })));

      // Update core network
      setCoreNetwork(prev => prev.map(core => {
        if (core.status === 'MAINTENANCE') return { ...core, lastUpdate: Date.now() };
        
        return {
          ...core,
          capacity: {
            ...core.capacity,
            currentLoad: Math.max(10000000, Math.min(core.capacity.subscribers, core.capacity.currentLoad + (Math.random() - 0.5) * 500000)),
            sessions: Math.max(3000000, core.capacity.sessions + (Math.random() - 0.5) * 200000),
            transactions: Math.max(30000, core.capacity.transactions + (Math.random() - 0.5) * 10000)
          },
          performance: {
            ...core.performance,
            cpuUtilization: Math.max(30, Math.min(90, core.performance.cpuUtilization + (Math.random() - 0.5) * 5)),
            memoryUtilization: Math.max(40, Math.min(85, core.performance.memoryUtilization + (Math.random() - 0.5) * 4)),
            networkLatency: Math.max(1.0, Math.min(5.0, core.performance.networkLatency + (Math.random() - 0.5) * 0.5))
          },
          lastUpdate: Date.now()
        };
      }));

      // Update fiber network
      setFiberNetwork(prev => prev.map(fiber => ({
        ...fiber,
        utilization: {
          ...fiber.utilization,
          eastbound: Math.max(30, Math.min(95, fiber.utilization.eastbound + (Math.random() - 0.5) * 3)),
          westbound: Math.max(30, Math.min(95, fiber.utilization.westbound + (Math.random() - 0.5) * 3))
        },
        performance: {
          ...fiber.performance,
          opticalPower: Math.max(-20, Math.min(-5, fiber.performance.opticalPower + (Math.random() - 0.5) * 1)),
          osnr: Math.max(20, Math.min(35, fiber.performance.osnr + (Math.random() - 0.5) * 1)),
          latency: Math.max(fiber.performance.latency * 0.9, Math.min(fiber.performance.latency * 1.1, fiber.performance.latency + (Math.random() - 0.5) * 2))
        },
        lastUpdate: Date.now()
      })));

      // Update service metrics
      setServiceMetrics(prev => ({
        ...prev,
        voiceServices: {
          ...prev.voiceServices,
          totalCalls: Math.max(30, prev.voiceServices.totalCalls + (Math.random() - 0.5) * 2),
          callCompletionRate: Math.max(95, Math.min(99.5, prev.voiceServices.callCompletionRate + (Math.random() - 0.5) * 0.5))
        },
        dataServices: {
          ...prev.dataServices,
          totalTraffic: Math.max(200, prev.dataServices.totalTraffic + (Math.random() - 0.5) * 10),
          averageSpeed: Math.max(70, Math.min(120, prev.dataServices.averageSpeed + (Math.random() - 0.5) * 5))
        },
        qualityMetrics: {
          ...prev.qualityMetrics,
          networkAvailability: Math.max(99.8, Math.min(99.99, prev.qualityMetrics.networkAvailability + (Math.random() - 0.5) * 0.02)),
          customerSatisfaction: Math.max(3.5, Math.min(5.0, prev.qualityMetrics.customerSatisfaction + (Math.random() - 0.5) * 0.1))
        },
        lastUpdate: Date.now()
      }));

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MAINTENANCE':
      case 'OFFLINE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'DEGRADED':
      case 'ALARMED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'DOWN':
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getUtilizationColor = (utilization) => {
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 80) return 'text-orange-400';
    if (utilization >= 70) return 'text-yellow-400';
    if (utilization >= 50) return 'text-green-400';
    return 'text-blue-400';
  };

  const getLatencyColor = (latency, type = 'terrestrial') => {
    if (type === 'satellite' && latency > 500) return 'text-red-400';
    if (type === 'satellite' && latency > 400) return 'text-yellow-400';
    if (type === 'satellite') return 'text-green-400';
    
    if (latency > 50) return 'text-red-400';
    if (latency > 30) return 'text-orange-400';
    if (latency > 20) return 'text-yellow-400';
    return 'text-green-400';
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(decimals)}B`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(0)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          📡 TELECOMMUNICATIONS NETWORK OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {networkInfrastructure.filter(n => n.status === 'OPERATIONAL').length}/{networkInfrastructure.length} Regions Online
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {serviceMetrics.qualityMetrics.networkAvailability.toFixed(2)}% Availability
          </div>
          <div className="text-sm text-gray-400 font-mono">
            5G & Fiber NOC Command Center
          </div>
        </div>
      </div>

      {/* Telecom Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL SUBSCRIBERS</div>
              <div className="text-2xl font-bold text-green-100">
                {formatNumber(networkInfrastructure.reduce((sum, r) => sum + r.customerMetrics.subscribers, 0), 1)}
              </div>
              <div className="text-xs text-green-300">
                5G: {Math.floor(networkInfrastructure.reduce((sum, r) => sum + r.coverage.penetration, 0) / networkInfrastructure.length)}% penetration
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">DATA TRAFFIC</div>
              <div className="text-2xl font-bold text-blue-100">
                {serviceMetrics.dataServices.totalTraffic.toFixed(1)} PB
              </div>
              <div className="text-xs text-blue-300">
                per day | Peak: {serviceMetrics.dataServices.peakTraffic.toFixed(1)} PB
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">VOICE CALLS</div>
              <div className="text-2xl font-bold text-purple-100">
                {serviceMetrics.voiceServices.totalCalls.toFixed(1)}M
              </div>
              <div className="text-xs text-purple-300">
                per day | Quality: {serviceMetrics.voiceServices.callQuality.toFixed(1)} MOS
              </div>
            </div>
            <div className="text-3xl opacity-60">📞</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">IoT DEVICES</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(serviceMetrics.iotServices.connectedDevices, 1)}
              </div>
              <div className="text-xs text-orange-300">
                Active: {formatNumber(serviceMetrics.iotServices.activeDevices, 1)}
              </div>
            </div>
            <div className="text-3xl opacity-60">🌐</div>
          </div>
        </div>
      </div>

      {/* 5G Network and Core Network */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 5G Network Infrastructure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📶 5G NETWORK INFRASTRUCTURE & REGIONAL COVERAGE
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {networkInfrastructure.map((region) => (
              <div key={region.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(region.status)}`}>
                      {region.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {region.type.replace(/_/g, ' ')}
                    </span>
                    {region.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {region.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(region.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{region.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{region.location} | Operator: {region.operator}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Coverage</div>
                    <div className="text-green-400">{formatNumber(region.coverage.area)} km²</div>
                    <div className="text-gray-500">Pop: {formatNumber(region.coverage.population, 1)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Penetration</div>
                    <div className="text-blue-400">{region.coverage.penetration.toFixed(1)}%</div>
                    <div className="text-gray-500">Subscribers: {formatNumber(region.customerMetrics.subscribers, 1)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Cell Sites</div>
                    <div className="text-purple-400">{region.network.activeSites.toLocaleString()}/{region.network.cellSites.toLocaleString()}</div>
                    <div className="text-gray-500">Offline: {region.network.offline}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className={getUtilizationColor(region.network.utilization)}>
                      {region.network.utilization.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Latency</div>
                    <div className={getLatencyColor(region.performance.latency)}>
                      {region.performance.latency.toFixed(1)} ms
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className="text-green-400">{region.performance.throughput.toFixed(1)} Gbps</div>
                  </div>
                </div>

                {/* Spectrum Utilization */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Spectrum Utilization:</div>
                  <div className="grid grid-cols-3 gap-1">
                    <div>
                      <div className="text-orange-400">Low: {region.spectrum.lowBand.frequency}</div>
                      <div className={getUtilizationColor(region.spectrum.lowBand.utilization)}>
                        {region.spectrum.lowBand.utilization.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-400">Mid: {region.spectrum.midBand.frequency}</div>
                      <div className={getUtilizationColor(region.spectrum.midBand.utilization)}>
                        {region.spectrum.midBand.utilization.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-purple-400">mmWave: {region.spectrum.mmWave.frequency}</div>
                      <div className={getUtilizationColor(region.spectrum.mmWave.utilization)}>
                        {region.spectrum.mmWave.utilization.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Traffic: </span>
                  <span className="text-cyan-400">Data: {region.traffic.dataVolume.toFixed(1)} PB/day</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">Voice: {region.traffic.voiceCalls.toFixed(1)}M calls</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-yellow-400">SMS: {region.traffic.sms.toFixed(1)}M</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Performance: </span>
                  <span className="text-blue-400">Availability: {region.performance.availability.toFixed(2)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Packet Loss: {region.performance.packetLoss.toFixed(3)}%</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Business: </span>
                  <span className="text-green-400">ARPU: ${region.customerMetrics.arpu.toFixed(2)}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Churn: {region.customerMetrics.churnRate.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-indigo-400">NPS: {region.customerMetrics.netPromoterScore.toFixed(1)}</span>
                </div>

                {region.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {region.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">📶 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5G Core Network */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔧 5G CORE NETWORK & CLOUD NATIVE FUNCTIONS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {coreNetwork.map((core) => (
              <div key={core.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(core.status)}`}>
                      {core.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {core.type.replace(/_/g, ' ')}
                    </span>
                    {core.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {core.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(core.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{core.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{core.location} | {core.vendor}</div>
                <div className="text-xs text-purple-400 mb-3">{core.architecture.replace(/_/g, ' ')}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Subscribers</div>
                    <div className="text-blue-400">{formatNumber(core.capacity.currentLoad, 1)}/{formatNumber(core.capacity.subscribers, 1)}</div>
                    <div className="text-gray-500">Util: {core.capacity.utilization.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Sessions</div>
                    <div className="text-green-400">{formatNumber(core.capacity.sessions, 1)}</div>
                    <div className="text-gray-500">TPS: {formatNumber(core.capacity.transactions)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className="text-purple-400">{core.capacity.throughput} Gbps</div>
                  </div>
                </div>

                {/* 5G Network Functions */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Network Functions:</div>
                  <div className="grid grid-cols-5 gap-1">
                    {Object.entries(core.functions).map(([nf, data]) => (
                      <div key={nf} className="text-center">
                        <div className="text-cyan-400">{nf.toUpperCase()}</div>
                        <div className={getStatusColor(data.status).split(' ')[0]}>
                          {data.status === 'ACTIVE' ? data.instances : data.status}
                        </div>
                        <div className={getUtilizationColor(data.load)}>
                          {data.load.toFixed(0)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Network Slicing */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Network Slicing:</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-green-400">eMBB</div>
                      <div className="text-white">{core.slicing.eMBB.slices} slices</div>
                      <div className={getUtilizationColor(core.slicing.eMBB.load)}>
                        {core.slicing.eMBB.load.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-red-400">uRLLC</div>
                      <div className="text-white">{core.slicing.uRLLC.slices} slices</div>
                      <div className={getUtilizationColor(core.slicing.uRLLC.load)}>
                        {core.slicing.uRLLC.load.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-400">mIoT</div>
                      <div className="text-white">{core.slicing.mIoT.slices} slices</div>
                      <div className={getUtilizationColor(core.slicing.mIoT.load)}>
                        {core.slicing.mIoT.load.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Infrastructure: </span>
                  <span className="text-orange-400">CPU: {core.performance.cpuUtilization.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Memory: {core.performance.memoryUtilization.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Latency: {core.performance.networkLatency.toFixed(1)} ms</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Availability: </span>
                  <span className="text-green-400">{core.performance.availability.toFixed(2)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-cyan-400">Disk I/O: {core.performance.diskIo.toFixed(1)}%</span>
                </div>

                {core.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {core.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">⚙️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fiber Network and Satellite Network */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fiber Network Infrastructure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 FIBER OPTIC NETWORK & BACKBONE INFRASTRUCTURE
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {fiberNetwork.map((fiber) => (
              <div key={fiber.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(fiber.status)}`}>
                      {fiber.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {fiber.type.replace(/_/g, ' ')}
                    </span>
                    {fiber.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {fiber.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(fiber.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{fiber.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{fiber.route}</div>
                <div className="text-xs text-purple-400 mb-3">Operator: {fiber.operator}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Length</div>
                    <div className="text-blue-400">{formatNumber(fiber.specifications.length)} km</div>
                    <div className="text-gray-500">Fibers: {fiber.specifications.fiberCount}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-green-400">{fiber.specifications.capacity.toFixed(1)} Tbps</div>
                    <div className="text-gray-500">λ: {fiber.specifications.wavelengths}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Technology</div>
                    <div className="text-purple-400">{fiber.specifications.technology}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Eastbound</div>
                    <div className={getUtilizationColor(fiber.utilization.eastbound)}>
                      {fiber.utilization.eastbound.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Westbound</div>
                    <div className={getUtilizationColor(fiber.utilization.westbound)}>
                      {fiber.utilization.westbound.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Peak Usage</div>
                    <div className={getUtilizationColor(fiber.utilization.peakUsage)}>
                      {fiber.utilization.peakUsage.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Optical Performance: </span>
                  <span className="text-cyan-400">Power: {fiber.performance.opticalPower.toFixed(1)} dBm</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">OSNR: {fiber.performance.osnr.toFixed(1)} dB</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-yellow-400">BER: {fiber.performance.ber.toExponential(1)}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Network Performance: </span>
                  <span className={getLatencyColor(fiber.performance.latency)}>
                    Latency: {fiber.performance.latency.toFixed(1)} ms
                  </span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Availability: {fiber.performance.availability.toFixed(2)}%</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Amplifiers: </span>
                  <span className="text-purple-400">{fiber.amplifiers.operational}/{fiber.amplifiers.total}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Gain: {fiber.amplifiers.avgGain.toFixed(1)} dB</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-red-400">Noise: {fiber.amplifiers.noiseLevel.toFixed(1)} dB</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Protection: </span>
                  <span className="text-indigo-400">{fiber.protection.scheme.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-cyan-400">Switch: {fiber.protection.switchingTime} ms</span>
                  <span className="text-gray-400"> | </span>
                  <span className={fiber.protection.protectionActive ? 'text-red-400' : 'text-green-400'}>
                    {fiber.protection.protectionActive ? 'ACTIVE' : 'STANDBY'}
                  </span>
                </div>

                {/* Customer Services */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Top Customers:</div>
                  {fiber.customers.slice(0, 2).map((customer, index) => (
                    <div key={index} className="grid grid-cols-4 gap-1">
                      <div className="text-white">{customer.name}</div>
                      <div className="text-cyan-400">{customer.bandwidth} Gbps</div>
                      <div className="text-green-400">{customer.sla}%</div>
                      <div className="text-yellow-400">{formatCurrency(customer.revenue)}/mo</div>
                    </div>
                  ))}
                </div>

                {fiber.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {fiber.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">🌐 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Satellite Network */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛰️ SATELLITE NETWORK & CONSTELLATION OPERATIONS
          </h3>
          <div className="space-y-3">
            {satelliteNetwork.map((satellite) => (
              <div key={satellite.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(satellite.status)}`}>
                      {satellite.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {satellite.type.replace(/_/g, ' ')}
                    </span>
                    {satellite.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                        {satellite.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(satellite.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{satellite.constellation}</div>
                <div className="text-xs text-cyan-400 mb-3">Operator: {satellite.operator}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Satellites</div>
                    <div className="text-green-400">{satellite.satellites.operational}/{satellite.satellites.total}</div>
                    <div className="text-gray-500">Launching: {satellite.satellites.launching}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Altitude</div>
                    <div className="text-blue-400">{formatNumber(satellite.orbitalParameters.altitude)} km</div>
                    <div className="text-gray-500">Period: {satellite.orbitalParameters.period.toFixed(0)} min</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Coverage</div>
                    <div className="text-purple-400">{satellite.coverage.globalCoverage.toFixed(1)}%</div>
                    <div className="text-gray-500">Beams: {formatNumber(satellite.coverage.activeBeams)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Latency</div>
                    <div className={getLatencyColor(satellite.performance.latency, 'satellite')}>
                      {satellite.performance.latency.toFixed(1)} ms
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className="text-orange-400">{satellite.performance.throughput} Mbps/beam</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Availability</div>
                    <div className="text-green-400">{satellite.performance.availability.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Ground Network: </span>
                  <span className="text-cyan-400">Gateways: {satellite.groundNetwork.activeGateways}/{satellite.groundNetwork.gateways}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">Terminals: {formatNumber(satellite.groundNetwork.activeTerminals, 1)}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Frequencies: </span>
                  <span className="text-blue-400">Down: {satellite.performance.downlinkFrequency}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Up: {satellite.performance.uplinkFrequency}</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Traffic: </span>
                  <span className="text-yellow-400">{satellite.groundNetwork.dataVolume.toFixed(1)} PB/day</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Handover: {satellite.performance.handoverSuccess.toFixed(1)}%</span>
                </div>

                {/* Customer Breakdown */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Customer Segments:</div>
                  <div className="grid grid-cols-5 gap-1">
                    <div>
                      <div className="text-blue-400">Residential</div>
                      <div className="text-white">{formatNumber(satellite.customers.residential)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Enterprise</div>
                      <div className="text-white">{formatNumber(satellite.customers.enterprise)}</div>
                    </div>
                    <div>
                      <div className="text-cyan-400">Maritime</div>
                      <div className="text-white">{formatNumber(satellite.customers.maritime)}</div>
                    </div>
                    <div>
                      <div className="text-purple-400">Aviation</div>
                      <div className="text-white">{formatNumber(satellite.customers.aviation)}</div>
                    </div>
                    <div>
                      <div className="text-red-400">Government</div>
                      <div className="text-white">{formatNumber(satellite.customers.government)}</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Revenue: </span>
                  <span className="text-green-400">{formatCurrency(satellite.revenue.monthly)}/month</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">ARPU: ${satellite.revenue.arpu.toFixed(2)}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Growth: {satellite.revenue.growth.toFixed(1)}%</span>
                </div>

                {satellite.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {satellite.alerts.map((alert, index) => (
                      <div key={index} className="text-blue-400">🛰️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Metrics and Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Performance Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 SERVICE PERFORMANCE METRICS & QUALITY INDICATORS
          </h3>
          
          {/* Voice Services */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Voice Services</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Daily Calls</div>
                <div className="text-green-400 font-bold">{serviceMetrics.voiceServices.totalCalls.toFixed(1)}M</div>
                <div className="text-gray-500">Completed: {serviceMetrics.voiceServices.completedCalls.toFixed(1)}M</div>
              </div>
              <div>
                <div className="text-gray-400">Completion Rate</div>
                <div className="text-blue-400 font-bold">{serviceMetrics.voiceServices.callCompletionRate.toFixed(1)}%</div>
                <div className="text-gray-500">Failed: {serviceMetrics.voiceServices.failedCalls.toFixed(1)}M</div>
              </div>
              <div>
                <div className="text-gray-400">Quality (MOS)</div>
                <div className="text-purple-400 font-bold">{serviceMetrics.voiceServices.callQuality.toFixed(1)}/5</div>
                <div className="text-gray-500">Delay: {serviceMetrics.voiceServices.postDialDelay.toFixed(1)}s</div>
              </div>
            </div>
          </div>

          {/* Data Services */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Data Services</h4>
            <div className="grid grid-cols-2 gap-3 text-xs mb-3">
              <div>
                <div className="text-gray-400">Total Traffic</div>
                <div className="text-cyan-400 font-bold">{serviceMetrics.dataServices.totalTraffic.toFixed(1)} PB/day</div>
                <div className="text-gray-500">Peak: {serviceMetrics.dataServices.peakTraffic.toFixed(1)} PB</div>
              </div>
              <div>
                <div className="text-gray-400">Average Speed</div>
                <div className="text-green-400 font-bold">{serviceMetrics.dataServices.averageSpeed.toFixed(1)} Mbps</div>
                <div className="text-gray-500">Peak: {serviceMetrics.dataServices.peakSpeed.toFixed(1)} Gbps</div>
              </div>
            </div>
            
            <div className="text-xs">
              <div className="text-gray-400">Traffic Breakdown:</div>
              <div className="grid grid-cols-4 gap-2">
                <div><span className="text-red-400">Video:</span> {serviceMetrics.dataServices.videoStreaming.toFixed(1)} PB</div>
                <div><span className="text-blue-400">Web:</span> {serviceMetrics.dataServices.webBrowsing.toFixed(1)} PB</div>
                <div><span className="text-purple-400">Social:</span> {serviceMetrics.dataServices.socialMedia.toFixed(1)} PB</div>
                <div><span className="text-green-400">Gaming:</span> {serviceMetrics.dataServices.gaming.toFixed(1)} PB</div>
              </div>
            </div>
          </div>

          {/* Messaging & IoT */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-700 rounded-lg p-3">
              <h4 className="text-xs font-bold text-white mb-2">Messaging</h4>
              <div className="text-xs">
                <div><span className="text-gray-400">SMS:</span> <span className="text-cyan-400">{serviceMetrics.messagingServices.smsVolume}M/day</span></div>
                <div><span className="text-gray-400">MMS:</span> <span className="text-blue-400">{serviceMetrics.messagingServices.mmsVolume}M/day</span></div>
                <div><span className="text-gray-400">RCS:</span> <span className="text-purple-400">{serviceMetrics.messagingServices.rcsMessages.toFixed(1)}M/day</span></div>
                <div><span className="text-gray-400">Delivery:</span> <span className="text-green-400">{serviceMetrics.messagingServices.deliveryRate.toFixed(1)}%</span></div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3">
              <h4 className="text-xs font-bold text-white mb-2">IoT Services</h4>
              <div className="text-xs">
                <div><span className="text-gray-400">Connected:</span> <span className="text-cyan-400">{formatNumber(serviceMetrics.iotServices.connectedDevices, 1)}</span></div>
                <div><span className="text-gray-400">Active:</span> <span className="text-green-400">{formatNumber(serviceMetrics.iotServices.activeDevices, 1)}</span></div>
                <div><span className="text-gray-400">Data:</span> <span className="text-blue-400">{serviceMetrics.iotServices.dataVolume.toFixed(1)} TB/day</span></div>
                <div><span className="text-gray-400">Revenue:</span> <span className="text-purple-400">{formatCurrency(serviceMetrics.iotServices.revenue)}/mo</span></div>
              </div>
            </div>
          </div>

          {/* Quality Metrics */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Quality & Customer Experience</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Availability</div>
                <div className="text-green-400 font-bold">{serviceMetrics.qualityMetrics.networkAvailability.toFixed(2)}%</div>
              </div>
              <div>
                <div className="text-gray-400">Satisfaction</div>
                <div className="text-blue-400 font-bold">{serviceMetrics.qualityMetrics.customerSatisfaction.toFixed(1)}/5</div>
              </div>
              <div>
                <div className="text-gray-400">NPS</div>
                <div className="text-purple-400 font-bold">{serviceMetrics.qualityMetrics.netPromoterScore.toFixed(1)}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs mt-2">
              <div>
                <div className="text-gray-400">Complaints</div>
                <div className="text-orange-400">{serviceMetrics.qualityMetrics.complaintRate.toFixed(1)}/1K</div>
              </div>
              <div>
                <div className="text-gray-400">Resolution</div>
                <div className="text-yellow-400">{serviceMetrics.qualityMetrics.resolutionTime.toFixed(1)}h</div>
              </div>
              <div>
                <div className="text-gray-400">FCR</div>
                <div className="text-indigo-400">{serviceMetrics.qualityMetrics.firstCallResolution.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 TELECOMMUNICATIONS PERFORMANCE TRENDS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
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
                dataKey="dataTraffic"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.1}
                strokeWidth={2}
                name="Data Traffic (PB/day)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="voiceCalls" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Voice Calls (M/day)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="latency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Average Latency (ms)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="availability" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Availability (basis points)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Telecommunications KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📡 TELECOMMUNICATIONS KPIs & NETWORK PERFORMANCE INDICATORS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Network Availability</div>
            <div className="text-white font-bold text-lg">
              {serviceMetrics.qualityMetrics.networkAvailability.toFixed(2)}%
            </div>
            <div className="text-green-400 text-xs">5-nines target</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">5G Coverage</div>
            <div className="text-white font-bold text-lg">
              {Math.floor(networkInfrastructure.reduce((sum, r) => sum + r.coverage.penetration, 0) / networkInfrastructure.length)}%
            </div>
            <div className="text-blue-400 text-xs">population coverage</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Average Latency</div>
            <div className="text-white font-bold text-lg">
              {(networkInfrastructure.reduce((sum, r) => sum + r.performance.latency, 0) / networkInfrastructure.length).toFixed(1)}
            </div>
            <div className="text-purple-400 text-xs">milliseconds</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Fiber Utilization</div>
            <div className="text-white font-bold text-lg">
              {Math.floor(fiberNetwork.reduce((sum, f) => sum + f.utilization.averageFill, 0) / fiberNetwork.length)}%
            </div>
            <div className="text-cyan-400 text-xs">backbone capacity</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Active Cell Sites</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(networkInfrastructure.reduce((sum, r) => sum + r.network.activeSites, 0))}
            </div>
            <div className="text-orange-400 text-xs">nationwide</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Customer Satisfaction</div>
            <div className="text-white font-bold text-lg">
              {serviceMetrics.qualityMetrics.customerSatisfaction.toFixed(1)}/5
            </div>
            <div className="text-yellow-400 text-xs">experience score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomOperations;