// Space & Aerospace Intelligence Center - Satellite Operations, Mission Control, Spacecraft Tracking & Space Technology Analytics
import { useState, useEffect } from 'react';
import { Rocket, Satellite, Globe, TrendingUp, TrendingDown, Radio, Zap, AlertTriangle, CheckCircle, Target, BarChart3, PieChart } from 'lucide-react';

export default function SpaceAerospaceIntelligenceCenter() {
  const [spaceData, setSpaceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    missionOverview: {
      activeMissions: 47,
      totalSatellites: 1856,
      operationalSatellites: 1789,
      missionSuccessRate: 94.7,
      launchesThisYear: 23,
      plannedLaunches: 18,
      spaceStationOperational: true,
      astronautsInSpace: 12,
      groundStations: 34,
      missionControlCenters: 8,
      totalBudget: 12456789000, // EUR
      internationalCooperations: 67,
      emergencyProtocols: 'Active',
      communicationStatus: 'NOMINAL'
    },
    satelliteOperations: {
      totalSatellites: 1856,
      operationalSatellites: 1789,
      maintenanceRequired: 23,
      endOfLife: 44,
      satelliteTypes: [
        { type: 'Communication', count: 567, operational: 546, health: 96.3, coverage: 99.2, data_rate: 1234 },
        { type: 'Earth Observation', count: 432, operational: 421, health: 97.5, coverage: 94.7, data_rate: 2345 },
        { type: 'Navigation (GPS/Galileo)', count: 278, operational: 267, health: 96.0, coverage: 100.0, data_rate: 456 },
        { type: 'Weather Monitoring', count: 189, operational: 184, health: 97.4, coverage: 98.9, data_rate: 789 },
        { type: 'Scientific Research', count: 234, operational: 223, health: 95.3, coverage: 87.4, data_rate: 567 },
        { type: 'Defense & Security', count: 156, operational: 148, health: 94.9, coverage: 92.3, data_rate: 890 }
      ],
      orbitTypes: [
        { orbit: 'Low Earth Orbit (LEO)', satellites: 1234, altitude: '200-2000 km', period: '90-120 min', coverage: 'Regional' },
        { orbit: 'Geostationary (GEO)', satellites: 345, altitude: '35,786 km', period: '24 hours', coverage: 'Continental' },
        { orbit: 'Medium Earth Orbit (MEO)', satellites: 167, altitude: '2000-35,786 km', period: '2-24 hours', coverage: 'Global' },
        { orbit: 'Polar Orbit', satellites: 89, altitude: '600-800 km', period: '100-110 min', coverage: 'Polar Regions' },
        { orbit: 'Sun-Synchronous', satellites: 21, altitude: '600-800 km', period: '96-100 min', coverage: 'Earth Mapping' }
      ],
      satelliteHealth: {
        excellentHealth: 1456, // 81.4%
        goodHealth: 245, // 13.7%
        degradedHealth: 67, // 3.7%
        criticalHealth: 21, // 1.2%
        averageBatteryLife: 87.9, // percentage
        solarPanelEfficiency: 92.4,
        communicationSignalStrength: 94.7,
        attitudeControlAccuracy: 99.2
      }
    },
    activeMissions: [
      { 
        mission: 'Mars Reconnaissance 2026', 
        status: 'En Route', 
        progress: 67.4,
        daysRemaining: 234,
        crew: 0,
        type: 'Robotic Exploration',
        budget: 890000000,
        objectives: ['Surface mapping', 'Sample collection', 'Climate analysis'],
        riskLevel: 'Medium'
      },
      { 
        mission: 'Lunar Gateway Station', 
        status: 'Operational', 
        progress: 89.3,
        daysRemaining: 45,
        crew: 4,
        type: 'Crewed Station',
        budget: 2340000000,
        objectives: ['Deep space operations', 'Lunar surface prep', 'Technology testing'],
        riskLevel: 'Low'
      },
      { 
        mission: 'Europa Ocean Explorer', 
        status: 'Planning', 
        progress: 23.7,
        daysRemaining: 1456,
        crew: 0,
        type: 'Deep Space Probe',
        budget: 1560000000,
        objectives: ['Ocean detection', 'Life search', 'Subsurface analysis'],
        riskLevel: 'High'
      },
      { 
        mission: 'Solar Observatory Array', 
        status: 'Data Collection', 
        progress: 78.9,
        daysRemaining: 189,
        crew: 0,
        type: 'Space Telescope',
        budget: 456000000,
        objectives: ['Solar activity monitoring', 'Space weather prediction', 'Coronal analysis'],
        riskLevel: 'Low'
      },
      { 
        mission: 'Asteroid Mining Probe', 
        status: 'Approach', 
        progress: 45.6,
        daysRemaining: 567,
        crew: 0,
        type: 'Resource Extraction',
        budget: 678000000,
        objectives: ['Resource assessment', 'Mining feasibility', 'Sample return'],
        riskLevel: 'High'
      },
      { 
        mission: 'Earth Climate Sentinel', 
        status: 'Nominal Operations', 
        progress: 94.2,
        daysRemaining: 1890,
        crew: 0,
        type: 'Earth Monitoring',
        budget: 234000000,
        objectives: ['Climate monitoring', 'Carbon tracking', 'Environmental assessment'],
        riskLevel: 'Low'
      }
    ],
    launchOperations: {
      launchesThisYear: 23,
      successfulLaunches: 22,
      failedLaunches: 1,
      launchSuccessRate: 95.7,
      plannedLaunches: 18,
      nextLaunch: {
        mission: 'EuroSat Constellation 7',
        date: '2026-03-24',
        payload: 'Communications Satellites',
        launchVehicle: 'Ariane 6',
        launchSite: 'Kourou, French Guiana',
        payloadMass: 4567, // kg
        orbitTarget: 'Geostationary',
        riskAssessment: 'Low'
      },
      launchVehicles: [
        { vehicle: 'Ariane 6', launches: 8, success_rate: 100.0, payload_capacity: 11700, cost_per_kg: 4500 },
        { vehicle: 'Falcon 9 (SpaceX)', launches: 6, success_rate: 100.0, payload_capacity: 22800, cost_per_kg: 2720 },
        { vehicle: 'Vega C', launches: 4, success_rate: 75.0, payload_capacity: 2200, cost_per_kg: 11000 },
        { vehicle: 'Atlas V', launches: 3, success_rate: 100.0, payload_capacity: 18850, cost_per_kg: 13400 },
        { vehicle: 'Delta IV Heavy', launches: 2, success_rate: 100.0, payload_capacity: 28790, cost_per_kg: 14000 }
      ],
      launchSites: [
        { site: 'Kourou, French Guiana', launches: 12, latitude: 5.2, advantages: ['Low latitude', 'Ocean downrange'] },
        { site: 'Cape Canaveral, USA', launches: 7, latitude: 28.6, advantages: ['Established infrastructure', 'Multiple pads'] },
        { site: 'Baikonur, Kazakhstan', launches: 2, latitude: 45.9, advantages: ['Large payload capability', 'Proven reliability'] },
        { site: 'Vandenberg, USA', launches: 2, latitude: 34.8, advantages: ['Polar orbits', 'Military access'] }
      ]
    },
    groundOperations: {
      groundStations: 34,
      operationalStations: 32,
      maintenanceStations: 2,
      dataProcessingCenters: 12,
      missionControlCenters: 8,
      communicationUptime: 99.7,
      dataDownlinkRate: 1.2, // TB/hour
      commandUplinkSuccess: 99.9,
      stations: [
        { station: 'ESA Deep Space Network', location: 'Cebreros, Spain', status: 'Operational', antenna_size: 35, frequency: 'X/Ka-band' },
        { station: 'NASA Goldstone Complex', location: 'California, USA', status: 'Operational', antenna_size: 70, frequency: 'X/Ka-band' },
        { station: 'ESTRACK Malindi', location: 'Kenya', status: 'Operational', antenna_size: 15, frequency: 'S/X-band' },
        { station: 'Redu Ground Station', location: 'Belgium', status: 'Operational', antenna_size: 13.5, frequency: 'C/Ku-band' },
        { station: 'Svalbard Satellite Station', location: 'Norway', status: 'Operational', antenna_size: 13, frequency: 'X/S-band' },
        { station: 'Perth Ground Station', location: 'Australia', status: 'Maintenance', antenna_size: 11, frequency: 'S-band' }
      ],
      missionControlCenters: [
        { center: 'European Space Operations Centre (ESOC)', location: 'Darmstadt, Germany', missions: 23, status: 'Active' },
        { center: 'Johnson Space Center', location: 'Houston, USA', missions: 8, status: 'Active' },
        { center: 'Goddard Space Flight Center', location: 'Maryland, USA', missions: 6, status: 'Active' },
        { center: 'JPL Mission Control', location: 'California, USA', missions: 4, status: 'Active' },
        { center: 'CNES Mission Control', location: 'Toulouse, France', missions: 3, status: 'Active' },
        { center: 'DLR Mission Control', location: 'Munich, Germany', missions: 3, status: 'Active' }
      ]
    },
    spaceWeatherMonitoring: {
      spaceWeatherStatus: 'NOMINAL',
      solarActivity: 'Moderate',
      geomagneticCondition: 'Quiet',
      radiationLevels: 'Normal',
      solarFlareRisk: 'Low',
      cmeAlert: false,
      spaceWeatherMetrics: {
        solarWindSpeed: 456, // km/s
        solarWindDensity: 7.8, // particles/cm³
        magneticFieldStrength: 12.4, // nT
        kpIndex: 2.1,
        apIndex: 8,
        f107SolarFlux: 134.5,
        electronFlux: 234,
        protonFlux: 0.8
      },
      impactAssessment: {
        satelliteCommunications: 'No Impact',
        gpsAccuracy: 'Normal',
        powerGrids: 'No Impact',
        aviationRoutes: 'Normal',
        astronautRadiation: 'Low Risk',
        missionOperations: 'No Restrictions'
      },
      forecast: [
        { period: 'Next 24h', solar_activity: 'Low', geomagnetic: 'Quiet', risk_level: 'Low' },
        { period: 'Next 72h', solar_activity: 'Moderate', geomagnetic: 'Unsettled', risk_level: 'Medium' },
        { period: 'Next Week', solar_activity: 'Moderate', geomagnetic: 'Active', risk_level: 'Medium' }
      ]
    },
    spaceDebrisTracking: {
      trackedObjects: 34567,
      catalogedDebris: 23456,
      activeSatellites: 1789,
      rocketBodies: 4567,
      fragmentedDebris: 5755,
      riskLevel: 'ELEVATED',
      collisionWarnings: 3,
      avoidanceManeuvers: 2,
      debrisSize: {
        large: 1234, // >10 cm
        medium: 12345, // 1-10 cm  
        small: 890000 // 0.1-1 cm (estimated)
      },
      reentryPredictions: [
        { object: 'Defunct Weather Satellite', reentry_date: '2026-03-25', location: 'Pacific Ocean', risk: 'Low' },
        { object: 'Upper Stage Booster', reentry_date: '2026-04-12', location: 'Indian Ocean', risk: 'Medium' },
        { object: 'Fragmented Debris Cluster', reentry_date: '2026-05-03', location: 'Atlantic Ocean', risk: 'Low' }
      ],
      mitigationMeasures: {
        activeDebrisRemoval: 2, // missions planned
        satelliteShielding: 89.7, // percentage equipped
        collisionAvoidance: 94.2, // system effectiveness
        endOfLifeDisposal: 78.9 // compliance rate
      }
    },
    technologyDevelopment: {
      rndBudget: 2345678900, // EUR
      activeProjects: 67,
      technologiesInTesting: 23,
      technologyReadinessLevel: 6.8, // average TRL
      breakthroughTechnologies: [
        { technology: 'Ion Propulsion Systems', trl: 8, applications: ['Deep space missions', 'Station keeping'], progress: 89.7 },
        { technology: 'Quantum Communications', trl: 5, applications: ['Secure satellite links', 'Ground networks'], progress: 67.4 },
        { technology: 'Advanced Solar Arrays', trl: 7, applications: ['Power generation', 'Efficiency improvement'], progress: 78.9 },
        { technology: 'Autonomous Navigation', trl: 6, applications: ['Deep space missions', 'Asteroid mining'], progress: 72.3 },
        { technology: 'In-Orbit Manufacturing', trl: 4, applications: ['Construction', 'Repair systems'], progress: 45.6 },
        { technology: 'Nuclear Propulsion', trl: 5, applications: ['Mars missions', 'Outer planet exploration'], progress: 56.8 }
      ],
      internationalPartnerships: [
        { partner: 'NASA (USA)', projects: 12, budget_share: 345000000, cooperation_level: 94.7 },
        { partner: 'JAXA (Japan)', projects: 8, budget_share: 123000000, cooperation_level: 89.3 },
        { partner: 'Roscosmos (Russia)', projects: 4, budget_share: 67000000, cooperation_level: 76.8 },
        { partner: 'CNSA (China)', projects: 3, budget_share: 45000000, cooperation_level: 67.4 },
        { partner: 'ISRO (India)', projects: 6, budget_share: 89000000, cooperation_level: 82.1 },
        { partner: 'CSA (Canada)', projects: 5, budget_share: 56000000, cooperation_level: 91.8 }
      ]
    },
    spaceEconomics: {
      totalMarketValue: 567890000000, // EUR
      commercialRevenue: 234567000000, // EUR
      governmentSpending: 123456000000, // EUR
      privateInvestment: 89012000000, // EUR
      jobsCreated: 1234567,
      economiс_sectors: [
        { sector: 'Satellite Services', revenue: 156789000000, growth: 12.4, market_share: 67.3 },
        { sector: 'Launch Services', revenue: 34567000000, growth: 8.9, market_share: 14.8 },
        { sector: 'Satellite Manufacturing', revenue: 23456000000, growth: 15.7, market_share: 10.1 },
        { sector: 'Ground Equipment', revenue: 12345000000, growth: 6.7, market_share: 5.3 },
        { sector: 'Space Tourism', revenue: 5678000000, growth: 234.5, market_share: 2.5 }
      ],
      commercialSpaceCompanies: [
        { company: 'SpaceX', valuation: 180000000000, services: ['Launch', 'Satellite Internet'], market_position: 'Leader' },
        { company: 'Arianespace', valuation: 12000000000, services: ['Launch Services'], market_position: 'Established' },
        { company: 'OneWeb', valuation: 8500000000, services: ['Satellite Internet'], market_position: 'Competitor' },
        { company: 'Blue Origin', valuation: 7200000000, services: ['Launch', 'Space Tourism'], market_position: 'Emerging' },
        { company: 'Virgin Galactic', valuation: 3100000000, services: ['Space Tourism', 'Launch'], market_position: 'Niche' }
      ]
    },
    spaceAlerts: [
      {
        type: 'WARNING',
        category: 'Space Debris',
        message: 'Collision probability increased for communication satellite constellation - implementing avoidance maneuver',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Orbital Safety Division',
        timestamp: '02:20',
        recommendations: ['Execute avoidance burn', 'Monitor trajectory', 'Coordinate with international partners']
      },
      {
        type: 'CRITICAL',
        category: 'Space Weather',
        message: 'Solar flare activity detected - potential communication disruption in next 6-8 hours',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Space Weather Center',
        timestamp: '02:15',
        recommendations: ['Alert mission operators', 'Switch to backup systems', 'Monitor radiation levels']
      },
      {
        type: 'SUCCESS',
        category: 'Mission Operations',
        message: 'Mars Reconnaissance mission achieving 98.4% data collection target ahead of schedule',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Deep Space Operations',
        timestamp: '02:10',
        recommendations: ['Continue nominal operations', 'Plan extended mission phase', 'Share success metrics']
      },
      {
        type: 'INFO',
        category: 'Technology Development',
        message: 'Quantum communication test successful - 99.7% fidelity achieved over 1000km link',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Advanced Technology Team',
        timestamp: '02:05',
        recommendations: ['Document results', 'Plan next test phase', 'Prepare technology transfer']
      }
    ],
    humanSpaceflight: {
      astronautsInSpace: 12,
      activeCrew: [
        { name: 'Commander Sarah Chen', mission: 'Lunar Gateway Station', days_in_space: 89, role: 'Mission Commander' },
        { name: 'Dr. Marco Rodriguez', mission: 'Lunar Gateway Station', days_in_space: 89, role: 'Science Officer' },
        { name: 'Elena Petrov', mission: 'Lunar Gateway Station', days_in_space: 67, role: 'Flight Engineer' },
        { name: 'James Thompson', mission: 'Lunar Gateway Station', days_in_space: 67, role: 'Systems Specialist' }
      ],
      crewedMissions: 3,
      evaHours: 234, // this year
      safetyRecord: 99.98, // percentage mission success
      medicalMonitoring: {
        crewHealth: 'Excellent',
        psychologicalStatus: 'Stable',
        radiationExposure: 'Within Limits',
        exerciseCompliance: 97.4,
        nutritionalStatus: 'Adequate',
        sleepQuality: 82.7
      },
      lifeSupport: {
        oxygenGeneration: 99.8, // percentage efficiency
        waterReclamation: 94.7,
        carbonDioxideRemoval: 99.6,
        wasteManagement: 92.3,
        atmosphericPressure: 'Nominal',
        temperature: 'Optimal'
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSpaceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        missionOverview: {
          ...prev.missionOverview,
          operationalSatellites: Math.max(1750, Math.min(1800, prev.missionOverview.operationalSatellites + Math.floor((Math.random() - 0.5) * 10))),
          astronautsInSpace: Math.max(10, Math.min(15, prev.missionOverview.astronautsInSpace + Math.floor((Math.random() - 0.5) * 2)))
        },
        groundOperations: {
          ...prev.groundOperations,
          communicationUptime: Math.max(99.0, Math.min(100.0, prev.groundOperations.communicationUptime + (Math.random() - 0.5) * 0.2)),
          dataDownlinkRate: Math.max(1.0, Math.min(1.5, prev.groundOperations.dataDownlinkRate + (Math.random() - 0.5) * 0.1))
        }
      }));
    }, 21000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getMissionStatusColor = (status) => {
    switch (status) {
      case 'Operational': return 'text-green-400 bg-green-400/20';
      case 'Nominal Operations': return 'text-green-400 bg-green-400/20';
      case 'Data Collection': return 'text-blue-400 bg-blue-400/20';
      case 'En Route': return 'text-yellow-400 bg-yellow-400/20';
      case 'Approach': return 'text-orange-400 bg-orange-400/20';
      case 'Planning': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'High': return 'text-red-400 bg-red-400/20';
      case 'ELEVATED': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrlColor = (trl) => {
    if (trl >= 8) return 'text-green-400';
    if (trl >= 6) return 'text-blue-400';
    if (trl >= 4) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceColor = (value, good = 80, excellent = 90, reverse = false) => {
    if (reverse) {
      if (value <= excellent / 3) return 'text-green-400';
      if (value <= good / 2) return 'text-blue-400';
      if (value <= good) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Space & Aerospace Intelligence Center</h1>
              <p className="text-blue-300">Satellite operations, mission control, spacecraft tracking, space technology & aerospace analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{spaceData.currentTime}</div>
            <div className="text-blue-300">Mission Control Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Mission Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Active Missions
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{spaceData.missionOverview.activeMissions}</div>
            <div className="text-green-300 text-sm">Success Rate: {formatPercentage(spaceData.missionOverview.missionSuccessRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Satellite className="w-5 h-5 text-blue-400 mr-2" />
                Satellites
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(spaceData.missionOverview.operationalSatellites)}</div>
            <div className="text-blue-300 text-sm">Total: {formatNumber(spaceData.missionOverview.totalSatellites)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Rocket className="w-5 h-5 text-purple-400 mr-2" />
                Launches 2026
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{spaceData.missionOverview.launchesThisYear}</div>
            <div className="text-purple-300 text-sm">Planned: {spaceData.missionOverview.plannedLaunches}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                Astronauts
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{spaceData.missionOverview.astronautsInSpace}</div>
            <div className="text-cyan-300 text-sm">In Space Currently</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-orange-400 mr-2" />
                Ground Stations
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{spaceData.missionOverview.groundStations}</div>
            <div className="text-orange-300 text-sm">Mission Centers: {spaceData.missionOverview.missionControlCenters}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
                Mission Budget
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(spaceData.missionOverview.totalBudget)}</div>
            <div className="text-emerald-300 text-sm">R&D: {formatCurrency(spaceData.technologyDevelopment.rndBudget)}</div>
          </div>
        </div>

        {/* Satellite Operations */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Satellite className="w-5 h-5 text-blue-400 mr-2" />
            Satellite Operations Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{formatNumber(spaceData.satelliteOperations.operationalSatellites)}</div>
              <div className="text-blue-300 text-sm">Operational Satellites</div>
              <div className="text-gray-400 text-xs mt-1">Health: Excellent {formatNumber(spaceData.satelliteOperations.satelliteHealth.excellentHealth)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{formatPercentage(spaceData.satelliteOperations.satelliteHealth.averageBatteryLife)}</div>
              <div className="text-green-300 text-sm">Average Battery Life</div>
              <div className="text-gray-400 text-xs mt-1">Solar Efficiency: {formatPercentage(spaceData.satelliteOperations.satelliteHealth.solarPanelEfficiency)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{formatPercentage(spaceData.satelliteOperations.satelliteHealth.communicationSignalStrength)}</div>
              <div className="text-purple-300 text-sm">Signal Strength</div>
              <div className="text-gray-400 text-xs mt-1">Attitude Control: {formatPercentage(spaceData.satelliteOperations.satelliteHealth.attitudeControlAccuracy)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{spaceData.satelliteOperations.maintenanceRequired}</div>
              <div className="text-yellow-300 text-sm">Maintenance Required</div>
              <div className="text-gray-400 text-xs mt-1">End of Life: {spaceData.satelliteOperations.endOfLife}</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Satellite Type</th>
                  <th className="text-center p-3 text-slate-300">Count</th>
                  <th className="text-center p-3 text-slate-300">Operational</th>
                  <th className="text-center p-3 text-slate-300">Health</th>
                  <th className="text-center p-3 text-slate-300">Coverage</th>
                  <th className="text-center p-3 text-slate-300">Data Rate</th>
                </tr>
              </thead>
              <tbody>
                {spaceData.satelliteOperations.satelliteTypes.map((satellite, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{satellite.type}</td>
                    <td className="p-3 text-center text-blue-400">{satellite.count}</td>
                    <td className="p-3 text-center text-green-400">{satellite.operational}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(satellite.health, 90, 95)}`}>
                      {formatPercentage(satellite.health)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(satellite.coverage, 85, 95)}`}>
                      {formatPercentage(satellite.coverage)}
                    </td>
                    <td className="p-3 text-center text-purple-400">{satellite.data_rate} Mbps</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Missions & Launch Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-green-400 mr-2" />
              Active Mission Intelligence
            </h3>
            <div className="space-y-3">
              {spaceData.activeMissions.slice(0, 4).map((mission, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{mission.mission}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getMissionStatusColor(mission.status)}`}>
                      {mission.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                    <div>
                      <div className="text-slate-300">Progress: {formatPercentage(mission.progress)}</div>
                      <div className="text-slate-300">Days Remaining: {mission.daysRemaining}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Type: {mission.type}</div>
                      <div className="text-slate-300">Crew: {mission.crew}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-green-400">{formatCurrency(mission.budget)}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getRiskColor(mission.riskLevel)}`}>
                      {mission.riskLevel} Risk
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-purple-400 mr-2" />
              Launch Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{spaceData.launchOperations.launchesThisYear}</div>
                <div className="text-purple-300 text-sm">Launches This Year</div>
                <div className="text-gray-400 text-xs mt-1">Success Rate: {formatPercentage(spaceData.launchOperations.launchSuccessRate)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{spaceData.launchOperations.plannedLaunches}</div>
                <div className="text-blue-300 text-sm">Planned Launches</div>
                <div className="text-gray-400 text-xs mt-1">Success: {spaceData.launchOperations.successfulLaunches}</div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 mb-4">
              <h4 className="text-white text-sm font-medium mb-2">Next Launch</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-slate-300">Mission: {spaceData.launchOperations.nextLaunch.mission}</div>
                  <div className="text-slate-300">Date: {spaceData.launchOperations.nextLaunch.date}</div>
                  <div className="text-slate-300">Vehicle: {spaceData.launchOperations.nextLaunch.launchVehicle}</div>
                </div>
                <div>
                  <div className="text-slate-300">Payload: {spaceData.launchOperations.nextLaunch.payload}</div>
                  <div className="text-slate-300">Mass: {formatNumber(spaceData.launchOperations.nextLaunch.payloadMass)} kg</div>
                  <div className="text-slate-300">Site: {spaceData.launchOperations.nextLaunch.launchSite.split(',')[0]}</div>
                </div>
              </div>
              <div className="mt-2">
                <span className={`px-2 py-1 rounded text-xs ${getRiskColor(spaceData.launchOperations.nextLaunch.riskAssessment)}`}>
                  Risk: {spaceData.launchOperations.nextLaunch.riskAssessment}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Launch Vehicles</h4>
              {spaceData.launchOperations.launchVehicles.slice(0, 3).map((vehicle, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2 text-xs">
                  <span className="text-slate-300">{vehicle.vehicle}</span>
                  <div className="space-x-2">
                    <span className="text-blue-400">{vehicle.launches} launches</span>
                    <span className={`${getPerformanceColor(vehicle.success_rate, 90, 98)}`}>
                      {formatPercentage(vehicle.success_rate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Space Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Space & Aerospace Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {spaceData.spaceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Development & Space Economics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Technology Development Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatCurrency(spaceData.technologyDevelopment.rndBudget)}</div>
                <div className="text-cyan-300 text-sm">R&D Budget</div>
                <div className="text-gray-400 text-xs mt-1">Projects: {spaceData.technologyDevelopment.activeProjects}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{spaceData.technologyDevelopment.technologyReadinessLevel.toFixed(1)}</div>
                <div className="text-purple-300 text-sm">Average TRL</div>
                <div className="text-gray-400 text-xs mt-1">Testing: {spaceData.technologyDevelopment.technologiesInTesting}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Breakthrough Technologies</h4>
              {spaceData.technologyDevelopment.breakthroughTechnologies.slice(0, 4).map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{tech.technology}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getTrlColor(tech.trl)}`}>TRL {tech.trl}</span>
                      <span className="text-green-400 text-sm">{formatPercentage(tech.progress)}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Applications: {tech.applications.join(', ')}
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-slate-600/50 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1.5 rounded-full"
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-emerald-400 mr-2" />
              Space Economics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatCurrency(spaceData.spaceEconomics.totalMarketValue)}</div>
                <div className="text-emerald-300 text-sm">Total Market Value</div>
                <div className="text-gray-400 text-xs mt-1">Commercial: {formatCurrency(spaceData.spaceEconomics.commercialRevenue)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(spaceData.spaceEconomics.jobsCreated)}</div>
                <div className="text-blue-300 text-sm">Jobs Created</div>
                <div className="text-gray-400 text-xs mt-1">Investment: {formatCurrency(spaceData.spaceEconomics.privateInvestment)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Economic Sectors</h4>
              {spaceData.spaceEconomics.economiс_sectors.slice(0, 4).map((sector, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{sector.sector}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-green-400">{formatCurrency(sector.revenue)}</span>
                    <span className="text-blue-400">+{sector.growth.toFixed(1)}%</span>
                    <span className="text-purple-400">{formatPercentage(sector.market_share)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Leading Companies</h4>
              {spaceData.spaceEconomics.commercialSpaceCompanies.slice(0, 3).map((company, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2 text-xs">
                  <span className="text-slate-300">{company.company}</span>
                  <div className="space-x-2">
                    <span className="text-green-400">{formatCurrency(company.valuation)}</span>
                    <span className="text-blue-400">{company.market_position}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}