// Space Technology Intelligence Center - Spacecraft & Space Operations Analytics
import { useState, useEffect } from 'react';
import { Rocket, Satellite, Globe, Radar, Target, Activity, BarChart3, Settings, Lock, AlertTriangle, Zap, Eye } from 'lucide-react';

export default function SpaceTechnologyIntelligenceCenter() {
  const [spaceData, setSpaceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    spaceOverview: {
      activeMissions: 247,
      launchesThisYear: 89,
      satellitesInOrbit: 3456,
      operationalSatellites: 3234,
      spacecraftTracked: 12789,
      groundStations: 67,
      missionSuccess: 96.7,
      launchSuccess: 94.3,
      communicationUptime: 99.8,
      dataDownlinked: 2847,
      spaceDebrisTracked: 34567,
      crewInSpace: 23,
      iss: 'OPERATIONAL',
      lunarMissions: 8,
      marsMissions: 12,
      deepSpaceMissions: 34,
      commercialFlights: 156
    },
    spaceMissions: [
      {
        missionName: 'Artemis III Lunar Landing',
        missionId: 'ARTEMIS-03',
        agency: 'NASA',
        partner: 'SpaceX',
        status: 'ACTIVE',
        phase: 'Lunar Transit',
        launchDate: '2026-03-10 14:30:00',
        crew: 4,
        duration: '10 days',
        objective: 'First crewed lunar landing since Apollo',
        currentLocation: 'Lunar orbit',
        distanceFromEarth: 384400,
        missionProgress: 67.4,
        nextMilestone: 'Lunar descent initiation',
        communicationStatus: 'NOMINAL',
        systemsStatus: 'ALL GREEN',
        fuelRemaining: 78.6,
        oxygenLevel: 92.4,
        powerGeneration: 'OPTIMAL',
        crewHealth: 'EXCELLENT',
        scienceObjectives: 12,
        completedObjectives: 7,
        dataCollected: '2.3 TB',
        riskLevel: 'MEDIUM'
      },
      {
        missionName: 'Mars Sample Return',
        missionId: 'MSR-2026',
        agency: 'NASA/ESA',
        partner: 'JPL/ESA',
        status: 'CRUISE',
        phase: 'Interplanetary transit',
        launchDate: '2025-07-22 09:15:00',
        crew: 0,
        duration: '26 months',
        objective: 'Retrieve Perseverance samples',
        currentLocation: 'Mars trajectory',
        distanceFromEarth: 156780000,
        missionProgress: 34.7,
        nextMilestone: 'Mars orbital insertion',
        communicationStatus: 'DELAYED',
        systemsStatus: 'NOMINAL',
        fuelRemaining: 89.2,
        powerGeneration: 'STABLE',
        instrumentStatus: 'CALIBRATED',
        trajectory: 'ON COURSE',
        scienceObjectives: 8,
        completedObjectives: 2,
        dataCollected: '890 GB',
        riskLevel: 'LOW'
      },
      {
        missionName: 'James Webb Deep Field',
        missionId: 'JWST-DF-12',
        agency: 'NASA/ESA/CSA',
        partner: 'STScI',
        status: 'OBSERVING',
        phase: 'Science operations',
        launchDate: '2021-12-25 12:20:00',
        crew: 0,
        duration: 'Extended mission',
        objective: 'Deep space observations',
        currentLocation: 'L2 Lagrange Point',
        distanceFromEarth: 1500000,
        missionProgress: 89.3,
        nextMilestone: 'Galaxy cluster observation',
        communicationStatus: 'NOMINAL',
        systemsStatus: 'OPTIMAL',
        fuelRemaining: 67.8,
        instrumentStatus: 'CALIBRATED',
        powerGeneration: 'STABLE',
        thermalStatus: 'OPTIMAL',
        scienceObjectives: 45,
        completedObjectives: 40,
        dataCollected: '15.7 TB',
        riskLevel: 'LOW'
      },
      {
        missionName: 'Starship Commercial Flight',
        missionId: 'SX-COMM-078',
        agency: 'SpaceX',
        partner: 'Commercial',
        status: 'LAUNCHED',
        phase: 'Orbital insertion',
        launchDate: '2026-03-18 06:45:00',
        crew: 8,
        duration: '3 days',
        objective: 'Commercial crew transport',
        currentLocation: 'Low Earth Orbit',
        distanceFromEarth: 408,
        missionProgress: 23.1,
        nextMilestone: 'ISS docking',
        communicationStatus: 'EXCELLENT',
        systemsStatus: 'NOMINAL',
        fuelRemaining: 91.4,
        oxygenLevel: 98.7,
        powerGeneration: 'OPTIMAL',
        crewHealth: 'GOOD',
        scienceObjectives: 3,
        completedObjectives: 0,
        dataCollected: '45 GB',
        riskLevel: 'LOW'
      },
      {
        missionName: 'Europa Clipper Survey',
        missionId: 'EUROPA-CLIP',
        agency: 'NASA',
        partner: 'JPL',
        status: 'CRUISE',
        phase: 'Jupiter approach',
        launchDate: '2024-10-14 16:30:00',
        crew: 0,
        duration: '8 years',
        objective: 'Europa habitability study',
        currentLocation: 'Jupiter system',
        distanceFromEarth: 628300000,
        missionProgress: 78.4,
        nextMilestone: 'Europa flyby sequence',
        communicationStatus: 'WEAK SIGNAL',
        systemsStatus: 'NOMINAL',
        fuelRemaining: 45.7,
        instrumentStatus: 'OPERATIONAL',
        powerGeneration: 'REDUCED',
        radiationShielding: 'ACTIVE',
        scienceObjectives: 15,
        completedObjectives: 11,
        dataCollected: '4.2 TB',
        riskLevel: 'MEDIUM'
      }
    ],
    satelliteConstellations: [
      {
        constellation: 'Starlink Gen 2',
        operator: 'SpaceX',
        purpose: 'Global internet',
        totalSatellites: 5847,
        activeSatellites: 5623,
        orbitType: 'LEO',
        altitude: 550,
        coverage: 'Global',
        bandwidthCapacity: '100 Tbps',
        userTerminals: 2340000,
        latency: 25,
        uptime: 99.4,
        launchCadence: 'Weekly',
        replacementRate: 2.3,
        collisionAvoidance: 1247,
        deorbitPlanned: 234,
        regulatoryApproval: 'FCC/ITU',
        revenueStream: '$8.7B annually'
      },
      {
        constellation: 'Kuiper Network',
        operator: 'Amazon',
        purpose: 'Broadband service',
        totalSatellites: 3236,
        activeSatellites: 3001,
        orbitType: 'LEO',
        altitude: 630,
        coverage: '95% global',
        bandwidthCapacity: '75 Tbps',
        userTerminals: 890000,
        latency: 30,
        uptime: 97.8,
        launchCadence: 'Bi-weekly',
        replacementRate: 3.1,
        collisionAvoidance: 867,
        deorbitPlanned: 156,
        regulatoryApproval: 'FCC approved',
        revenueStream: '$4.2B projected'
      },
      {
        constellation: 'GPS III',
        operator: 'US Space Force',
        purpose: 'Global navigation',
        totalSatellites: 32,
        activeSatellites: 31,
        orbitType: 'MEO',
        altitude: 20200,
        coverage: 'Global',
        bandwidthCapacity: 'N/A',
        userTerminals: 'Billions',
        latency: 'N/A',
        uptime: 99.97,
        launchCadence: 'Annual',
        replacementRate: 0.5,
        collisionAvoidance: 45,
        deorbitPlanned: 1,
        regulatoryApproval: 'DOD',
        revenueStream: 'Defense budget'
      },
      {
        constellation: 'OneWeb Gen 1',
        operator: 'OneWeb',
        purpose: 'Rural connectivity',
        totalSatellites: 648,
        activeSatellites: 612,
        orbitType: 'LEO',
        altitude: 1200,
        coverage: '50°N-50°S',
        bandwidthCapacity: '12 Tbps',
        userTerminals: 145000,
        latency: 32,
        uptime: 96.7,
        launchCadence: 'Monthly',
        replacementRate: 2.8,
        collisionAvoidance: 234,
        deorbitPlanned: 36,
        regulatoryApproval: 'UK/ITU',
        revenueStream: '$1.8B target'
      }
    ],
    groundOperations: [
      {
        stationName: 'Deep Space Network Goldstone',
        location: 'California, USA',
        agency: 'NASA/JPL',
        antennaType: '70m parabolic',
        frequency: 'S/X/Ka-band',
        status: 'OPERATIONAL',
        currentMissions: ['Artemis III', 'MSR-2026', 'Europa Clipper'],
        utilizationRate: 89.7,
        signalStrength: 'EXCELLENT',
        dataRate: '2.3 Gbps',
        uptime: 99.2,
        maintenanceWindow: 'None scheduled',
        capabilities: ['Deep space tracking', 'Command uplink', 'Science data'],
        range: '25 billion km',
        tracking: 15,
        redundancy: 'Hot backup'
      },
      {
        stationName: 'ESA Kourou Ground Station',
        location: 'French Guiana',
        agency: 'ESA',
        antennaType: '15m S-band',
        frequency: 'S/X-band',
        status: 'ACTIVE',
        currentMissions: ['MSR-2026', 'JWST-DF-12'],
        utilizationRate: 67.4,
        signalStrength: 'GOOD',
        dataRate: '450 Mbps',
        uptime: 97.8,
        maintenanceWindow: '2026-03-25',
        capabilities: ['Launch support', 'Early orbit'],
        range: '2 million km',
        tracking: 8,
        redundancy: 'Manual backup'
      },
      {
        stationName: 'SpaceX Starlink Ground',
        location: 'Hawthorne, CA',
        agency: 'SpaceX',
        antennaType: 'Phased array',
        frequency: 'Ku/Ka-band',
        status: 'OPERATIONAL',
        currentMissions: ['Starlink constellation'],
        utilizationRate: 94.6,
        signalStrength: 'OPTIMAL',
        dataRate: '10 Gbps',
        uptime: 99.8,
        maintenanceWindow: 'None',
        capabilities: ['Constellation control', 'User data'],
        range: '2000 km',
        tracking: 5623,
        redundancy: 'Distributed'
      }
    ],
    spaceWeather: [
      {
        parameter: 'Solar Activity',
        currentLevel: 'MODERATE',
        solarFlareRisk: 'M-class possible',
        kpIndex: 4.2,
        solarWindSpeed: 450,
        protonFlux: 0.85,
        electronFlux: 2.34,
        geomagneticStorm: 'MINOR',
        impact: 'Satellite operations may be affected',
        forecast24h: 'Decreasing activity',
        lastUpdate: '2026-03-18 11:00:00',
        alertLevel: 'YELLOW',
        affectedMissions: ['JWST', 'Starlink'],
        mitigationActions: 'Safe mode protocols ready'
      },
      {
        parameter: 'Radiation Environment',
        currentLevel: 'ELEVATED',
        doseRate: '12.4 mGy/day',
        solarProtons: 'ENHANCED',
        galacticCosmicRays: 'NOMINAL',
        vanAllenBelts: 'ACTIVE',
        impact: 'Crew exposure monitoring',
        shieldingEffectiveness: 89.7,
        crewLimits: 'Within guidelines',
        forecast24h: 'Gradual improvement',
        lastUpdate: '2026-03-18 10:30:00',
        alertLevel: 'YELLOW',
        affectedMissions: ['Artemis III', 'ISS'],
        mitigationActions: 'Enhanced crew protection'
      }
    ],
    launchSchedule: [
      {
        missionName: 'Falcon Heavy Demo 2',
        vehicle: 'Falcon Heavy',
        operator: 'SpaceX',
        launchSite: 'Kennedy Space Center',
        scheduledTime: '2026-03-20 15:30:00',
        payload: 'Commercial satellites',
        payloadMass: '26.7 tons',
        orbit: 'GTO',
        status: 'GO',
        weather: '80% favorable',
        range: 'CLEAR',
        fueling: 'SCHEDULED',
        preflightChecks: 'IN PROGRESS',
        crewSafety: 'GREEN',
        abortSystems: 'ARMED',
        recovery: 'ASDS positioned',
        webcast: 'PLANNED',
        t0Window: '2 hours'
      },
      {
        missionName: 'Ariane 6 Maiden',
        vehicle: 'Ariane 6',
        operator: 'ESA/Arianespace',
        launchSite: 'Kourou ELA-4',
        scheduledTime: '2026-03-25 21:45:00',
        payload: 'Multi-satellite',
        payloadMass: '21.5 tons',
        orbit: 'SSO/GTO',
        status: 'NET',
        weather: '60% favorable',
        range: 'OPEN',
        fueling: 'NOT STARTED',
        preflightChecks: 'PENDING',
        systemChecks: 'ONGOING',
        rangeOps: 'COORDINATED',
        recovery: 'N/A',
        webcast: 'CONFIRMED',
        t0Window: '90 minutes'
      }
    ],
    spaceDebris: [
      {
        objectId: 'COSMOS-2251-FRAG',
        objectType: 'Debris fragment',
        source: '2009 collision',
        altitude: 790,
        inclination: 74.0,
        size: '5-10 cm',
        trackingStatus: 'ACTIVE',
        collisionRisk: 'MEDIUM',
        proximityAlerts: 3,
        avoidanceManeuvers: 1,
        decayForecast: '2032',
        lastObservation: '2026-03-18 08:15:00',
        radarSignature: 'STRONG',
        opticalMagnitude: 12.4,
        riskAssessment: 'Monitor closely'
      },
      {
        objectId: 'STARLINK-DECAY-4567',
        objectType: 'Defunct satellite',
        source: 'Natural decay',
        altitude: 180,
        inclination: 53.0,
        size: '1-2 m',
        trackingStatus: 'DECAYING',
        collisionRisk: 'LOW',
        proximityAlerts: 0,
        avoidanceManeuvers: 0,
        decayForecast: '2026-03-22',
        lastObservation: '2026-03-18 09:30:00',
        reentryPrediction: 'Pacific Ocean',
        riskToGround: 'MINIMAL',
        riskAssessment: 'Controlled decay'
      }
    ],
    spaceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Collision Warning',
        message: 'High-risk conjunction detected for Artemis III spacecraft - immediate avoidance maneuver required',
        mission: 'Artemis III Lunar Landing',
        threat: 'Space debris fragment COSMOS-2251-FRAG approaching within 500m',
        impact: 'Mission crew safety at risk, potential spacecraft damage, mission delay possible',
        severity: 'CRITICAL',
        timestamp: '11:52',
        detectedBy: 'Space Surveillance Network',
        recommendation: 'Execute emergency avoidance burn, increase tracking frequency, crew shelter protocol',
        timeToClosestApproach: '4 hours 23 minutes',
        avoidanceOptions: ['Delta-V burn: 2.3 m/s', 'Attitude adjustment', 'Shelter in place'],
        fuelImpact: '0.8% total mission budget',
        missionImpact: 'Lunar landing delay: 6 hours',
        escalation: 'FLIGHT_DIRECTOR',
        approvalRequired: 'NASA Administrator',
        crewNotification: 'SENT'
      },
      {
        type: 'HIGH',
        category: 'System Anomaly',
        message: 'Europa Clipper experiencing reduced power generation - solar array investigation needed',
        mission: 'Europa Clipper Survey',
        anomaly: 'Solar array power output decreased 15% over 48 hours, current: 85% nominal',
        impact: 'Science operations may be limited, trajectory correction capability reduced',
        severity: 'HIGH',
        timestamp: '11:38',
        detectedBy: 'Deep Space Network',
        recommendation: 'Diagnostic solar array scan, power management protocol, mission timeline review',
        powerBudget: 'Non-critical systems powered down',
        scienceImpact: '2 instruments in standby mode',
        trajectoryImpact: 'Maneuver capability: 70% of planned',
        troubleshooting: 'In progress',
        escalation: 'PROJECT_MANAGER',
        expectedResolution: '72 hours'
      },
      {
        type: 'MEDIUM',
        category: 'Communication Loss',
        message: 'Mars Sample Return experiencing extended communication blackout - solar conjunction',
        mission: 'Mars Sample Return (MSR-2026)',
        issue: 'Communication lost for 18 hours due to solar conjunction, expected duration: 2 weeks',
        impact: 'No command capability, autonomous operations mode, status unknown until reacquisition',
        severity: 'MEDIUM',
        timestamp: '11:20',
        detectedBy: 'Deep Space Network',
        recommendation: 'Monitor for signal reacquisition, prepare command sequence for post-conjunction',
        lastKnownStatus: 'All systems nominal',
        autonomousMode: 'ACTIVE',
        reacquisitionDate: '2026-04-02',
        contingencyPlans: 'Autonomous fault protection enabled',
        missionPhase: 'Cruise - no critical operations',
        escalation: 'ROUTINE_MONITORING'
      },
      {
        type: 'INFO',
        category: 'Achievement',
        message: 'James Webb Space Telescope completes 1000th successful observation - scientific milestone',
        mission: 'James Webb Deep Field',
        achievement: 'Reached 1000 successful deep space observations, revolutionizing astronomy',
        impact: 'Unprecedented scientific discoveries, public engagement surge, mission extension justified',
        significance: 'Most productive space telescope in history',
        timestamp: '11:15',
        detectedBy: 'Science Operations',
        dataVolume: '15.7 TB collected to date',
        scientificPapers: '342 published',
        discoveries: 'Earliest galaxies, exoplanet atmospheres, stellar formation',
        publicImpact: 'Global media coverage, educational programs',
        futureObservations: '500 more planned this year',
        legacyValue: 'Transformational for space science'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        missionsTracked: 247,
        communicationSessions: 156,
        dataDownlinked: '2.3 TB',
        commandsUplinked: 1247,
        trajectoryUpdates: 23,
        satelliteManeuvers: 8,
        launchOperations: 1,
        groundStationUtilization: 89.7,
        missionSuccess: 96.7
      },
      {
        period: 'Last 24 Hours',
        missionsTracked: 247,
        communicationSessions: 3456,
        dataDownlinked: '67.8 TB',
        commandsUplinked: 28567,
        trajectoryUpdates: 234,
        satelliteManeuvers: 67,
        launchOperations: 3,
        groundStationUtilization: 87.3,
        missionSuccess: 95.8
      },
      {
        period: 'Last 7 Days',
        missionsTracked: 251,
        communicationSessions: 23456,
        dataDownlinked: '456 TB',
        commandsUplinked: 189567,
        trajectoryUpdates: 1567,
        satelliteManeuvers: 234,
        launchOperations: 12,
        groundStationUtilization: 88.9,
        missionSuccess: 96.2
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSpaceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        spaceOverview: {
          ...prev.spaceOverview,
          missionSuccess: Math.max(93.0, Math.min(98.0, prev.spaceOverview.missionSuccess + (Math.random() - 0.5) * 0.5)),
          communicationUptime: Math.max(98.5, Math.min(99.9, prev.spaceOverview.communicationUptime + (Math.random() - 0.5) * 0.2)),
          dataDownlinked: Math.max(2500, Math.min(3200, prev.spaceOverview.dataDownlinked + Math.floor((Math.random() - 0.5) * 50))),
          activeMissions: Math.max(240, Math.min(260, prev.spaceOverview.activeMissions + Math.floor((Math.random() - 0.5) * 2)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'NOMINAL': return 'text-green-400 bg-green-400/20';
      case 'LAUNCHED': return 'text-cyan-400 bg-cyan-400/20';
      case 'CRUISE': return 'text-purple-400 bg-purple-400/20';
      case 'OBSERVING': return 'text-indigo-400 bg-indigo-400/20';
      case 'GO': return 'text-green-400 bg-green-400/20';
      case 'NET': return 'text-yellow-400 bg-yellow-400/20';
      case 'DELAYED': return 'text-orange-400 bg-orange-400/20';
      case 'DECAYING': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'Lunar Transit': return 'text-blue-400 bg-blue-400/20';
      case 'Interplanetary transit': return 'text-purple-400 bg-purple-400/20';
      case 'Science operations': return 'text-green-400 bg-green-400/20';
      case 'Orbital insertion': return 'text-cyan-400 bg-cyan-400/20';
      case 'Jupiter approach': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getOrbitColor = (orbit) => {
    switch (orbit) {
      case 'LEO': return 'text-green-400';
      case 'MEO': return 'text-yellow-400';
      case 'GEO': return 'text-orange-400';
      case 'GTO': return 'text-purple-400';
      case 'SSO': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatDistance = (km) => {
    if (km >= 1000000) {
      return `${(km / 1000000).toFixed(1)}M km`;
    }
    if (km >= 1000) {
      return `${(km / 1000).toFixed(0)}K km`;
    }
    return `${km} km`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Space Technology Intelligence Center</h1>
              <p className="text-indigo-300">Spacecraft & space operations analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{spaceData.currentTime}</div>
            <div className="text-indigo-300">Space Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Space Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
                Missions
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{spaceData.spaceOverview.activeMissions}</div>
            <div className="text-indigo-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Satellite className="w-5 h-5 text-green-400 mr-2" />
                Satellites
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(spaceData.spaceOverview.operationalSatellites)}</div>
            <div className="text-green-300 text-sm">{formatNumber(spaceData.spaceOverview.satellitesInOrbit)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Success Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(spaceData.spaceOverview.missionSuccess)}</div>
            <div className="text-cyan-300 text-sm">Missions</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radar className="w-5 h-5 text-yellow-400 mr-2" />
                Tracked Objects
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(spaceData.spaceOverview.spacecraftTracked)}</div>
            <div className="text-yellow-300 text-sm">Spacecraft</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                Ground Stations
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{spaceData.spaceOverview.groundStations}</div>
            <div className="text-blue-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Crew in Space
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{spaceData.spaceOverview.crewInSpace}</div>
            <div className="text-purple-300 text-sm">Astronauts</div>
          </div>
        </div>

        {/* Space Missions & Satellite Constellations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
              Active Space Missions
            </h3>
            <div className="space-y-4">
              {spaceData.spaceMissions.map((mission, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{mission.missionName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(mission.status)}`}>
                        {mission.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getPhaseColor(mission.phase)}`}>
                        {mission.phase}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">{mission.agency}</div>
                    <div className="text-cyan-400">{mission.currentLocation}</div>
                    <div className="text-green-400">Crew: {mission.crew}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Mission Progress</span>
                      <span>{formatPercentage(mission.missionProgress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${mission.missionProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Distance: {formatDistance(mission.distanceFromEarth)}</div>
                    <div className={`${getRiskColor(mission.riskLevel)}`}>Risk: {mission.riskLevel}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Objective: {mission.objective}</div>
                    <div className="text-purple-400">Next: {mission.nextMilestone}</div>
                    <div className="text-orange-400">Data: {mission.dataCollected}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Satellite className="w-5 h-5 text-green-400 mr-2" />
              Satellite Constellations
            </h3>
            <div className="space-y-4">
              {spaceData.satelliteConstellations.map((constellation, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{constellation.constellation}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs ${getOrbitColor(constellation.orbitType)}`}>
                        {constellation.orbitType}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">{constellation.operator}</div>
                    <div className="text-cyan-400">{constellation.purpose}</div>
                    <div className="text-blue-400">Alt: {constellation.altitude} km</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Sats: {formatNumber(constellation.activeSatellites)}</div>
                    <div className="text-yellow-400">Users: {formatNumber(constellation.userTerminals)}</div>
                    <div className="text-purple-400">Uptime: {formatPercentage(constellation.uptime)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Latency: {constellation.latency}ms</div>
                    <div className="text-pink-400">Bandwidth: {constellation.bandwidthCapacity}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Coverage: {constellation.coverage}</div>
                    <div className="text-green-400">Revenue: {constellation.revenueStream}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ground Operations & Launch Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-blue-400 mr-2" />
              Ground Operations
            </h3>
            <div className="space-y-4">
              {spaceData.groundOperations.map((station, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{station.stationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(station.status)}`}>
                        {station.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">{station.agency}</div>
                    <div className="text-cyan-400">{station.location}</div>
                    <div className="text-green-400">Range: {station.range}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Antenna: {station.antennaType}</div>
                    <div className="text-blue-400">Rate: {station.dataRate}</div>
                    <div className="text-purple-400">Uptime: {formatPercentage(station.uptime)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Tracking: {station.tracking}</div>
                    <div className="text-pink-400">Utilization: {formatPercentage(station.utilizationRate)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Missions: {station.currentMissions.join(', ')}</div>
                    <div className="text-indigo-400">Signal: {station.signalStrength}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Rocket className="w-5 h-5 text-orange-400 mr-2" />
              Upcoming Launch Schedule
            </h3>
            <div className="space-y-4">
              {spaceData.launchSchedule.map((launch, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{launch.missionName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(launch.status)}`}>
                        {launch.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">{launch.vehicle}</div>
                    <div className="text-cyan-400">{launch.operator}</div>
                    <div className="text-green-400">{launch.launchSite}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Mass: {launch.payloadMass}</div>
                    <div className="text-blue-400">Orbit: {launch.orbit}</div>
                    <div className="text-purple-400">Weather: {launch.weather}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">T-0: {launch.scheduledTime}</div>
                    <div className="text-pink-400">Window: {launch.t0Window}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Payload: {launch.payload}</div>
                    <div className="text-indigo-400">Checks: {launch.preflightChecks}</div>
                    {launch.recovery && <div className="text-green-400">Recovery: {launch.recovery}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Space Operations Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {spaceData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Missions: {metrics.missionsTracked}</div>
                  <div className="text-green-400">Success: {formatPercentage(metrics.missionSuccess)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Comm Sessions: {formatNumber(metrics.communicationSessions)}</div>
                  <div className="text-yellow-400">Data: {metrics.dataDownlinked}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Commands: {formatNumber(metrics.commandsUplinked)}</div>
                  <div className="text-orange-400">Maneuvers: {metrics.satelliteManeuvers}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Launches: {metrics.launchOperations}</div>
                  <div className="text-pink-400">Ground Use: {formatPercentage(metrics.groundStationUtilization)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Space Technology System Alerts
          </h3>
          <div className="space-y-4">
            {spaceData.spaceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.mission && <div className="text-slate-300">Mission: {alert.mission}</div>}
                  {alert.threat && <div className="text-red-400">Threat: {alert.threat}</div>}
                  {alert.anomaly && <div className="text-orange-400">Anomaly: {alert.anomaly}</div>}
                  {alert.issue && <div className="text-yellow-400">Issue: {alert.issue}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.timeToClosestApproach && <div className="text-red-400">Time to CPA: {alert.timeToClosestApproach}</div>}
                  {alert.powerBudget && <div className="text-purple-400">Power: {alert.powerBudget}</div>}
                  {alert.lastKnownStatus && <div className="text-blue-400">Status: {alert.lastKnownStatus}</div>}
                  {alert.dataVolume && <div className="text-cyan-400">Data: {alert.dataVolume}</div>}
                  {alert.discoveries && <div className="text-green-400">Discoveries: {alert.discoveries}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact}
                </div>
                
                <div className="text-slate-300 text-xs">
                  <strong>Action:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}