// Ocean Technology Intelligence Center - Marine & Underwater Systems Analytics
import { useState, useEffect } from 'react';
import { Waves, Anchor, Compass, Radio, Target, Activity, BarChart3, Settings, Lock, AlertTriangle, Zap, Eye } from 'lucide-react';

export default function OceanTechnologyIntelligenceCenter() {
  const [oceanData, setOceanData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    oceanOverview: {
      activeVessels: 1247,
      autonomousVehicles: 456,
      submersibles: 89,
      surfaceVessels: 678,
      oceanSensors: 12567,
      operationalSensors: 11834,
      dataCollected: 2847,
      missionsActive: 178,
      explorationProjects: 67,
      researchStations: 34,
      oceanCoverage: 23.4,
      dataUplink: 99.2,
      systemsOperational: 96.7,
      environmentalMonitoring: 94.3,
      marineLifeTracked: 34567,
      deepSeaMapping: 78.9,
      climateStations: 234,
      tsunamiWarning: 'ACTIVE'
    },
    oceanVehicles: [
      {
        vehicleName: 'Alvin Deep Submersible',
        vehicleId: 'ALVIN-4682',
        operator: 'Woods Hole',
        vehicleType: 'Manned Submersible',
        status: 'DIVING',
        depth: 3847,
        maxDepth: 4500,
        location: 'Mid-Atlantic Ridge',
        mission: 'Hydrothermal Vent Study',
        crew: 3,
        missionDuration: '8 hours',
        currentObjective: 'Sample collection',
        depthProgress: 85.5,
        lifeSupportStatus: 'OPTIMAL',
        batteryLevel: 72.4,
        communicationStatus: 'INTERMITTENT',
        systemsStatus: 'ALL GREEN',
        sampleCollected: 12,
        targetSamples: 15,
        scientificData: '1.2 TB',
        emergencyStatus: 'STANDBY',
        supportVessel: 'R/V Atlantis',
        riskLevel: 'MEDIUM'
      },
      {
        vehicleName: 'Saildrone Explorer',
        vehicleId: 'SD-1047',
        operator: 'Saildrone Inc',
        vehicleType: 'Autonomous Surface Vehicle',
        status: 'TRANSITING',
        depth: 0,
        location: 'Pacific Ocean',
        mission: 'Hurricane Monitoring',
        missionDuration: '45 days',
        currentObjective: 'Weather data collection',
        progress: 67.3,
        batteryLevel: 89.7,
        solarCharging: 'ACTIVE',
        windSpeed: 15.7,
        waveHeight: 2.3,
        communicationStatus: 'EXCELLENT',
        systemsStatus: 'NOMINAL',
        dataTransmitted: '456 GB',
        weatherStations: 23,
        routeOptimization: 'AI ENABLED',
        fuelEfficiency: '100% renewable',
        emergencyStatus: 'GREEN'
      },
      {
        vehicleName: 'Nereid Under Ice',
        vehicleId: 'NUI-0023',
        operator: 'Woods Hole',
        vehicleType: 'Hybrid ROV',
        status: 'UNDER ICE',
        depth: 892,
        maxDepth: 1500,
        location: 'Arctic Ocean',
        mission: 'Ice Shelf Mapping',
        missionDuration: '12 hours',
        currentObjective: 'Ecosystem survey',
        depthProgress: 59.5,
        batteryLevel: 58.3,
        tetherStatus: 'CONNECTED',
        iceThickness: 4.2,
        waterTemperature: -1.8,
        communicationStatus: 'DELAYED',
        systemsStatus: 'MONITORING',
        sonarMapping: 'ACTIVE',
        biologicalSamples: 8,
        emergencyAscent: 'READY',
        supportVessel: 'USCGC Healy'
      },
      {
        vehicleName: 'Hugin AUV',
        vehicleId: 'HUGIN-1156',
        operator: 'Kongsberg Maritime',
        vehicleType: 'Autonomous Underwater Vehicle',
        status: 'SURVEYING',
        depth: 2340,
        maxDepth: 3000,
        location: 'North Sea',
        mission: 'Pipeline Inspection',
        missionDuration: '16 hours',
        currentObjective: 'Infrastructure mapping',
        progress: 78.4,
        batteryLevel: 45.8,
        navigationStatus: 'INS/DVL',
        sonarResolution: '5cm',
        pipelineLength: 47.8,
        anomaliesDetected: 3,
        communicationStatus: 'SCHEDULED',
        systemsStatus: 'OPERATIONAL',
        dataStorage: '78% full',
        recoveryTime: '4 hours',
        emergencyBallast: 'ARMED'
      },
      {
        vehicleName: 'Blue Ocean ROV',
        vehicleId: 'BO-ROV-789',
        operator: 'Ocean Infinity',
        vehicleType: 'Deep Sea ROV',
        status: 'SEARCHING',
        depth: 5670,
        maxDepth: 6000,
        location: 'Abyssal Plain',
        mission: 'Wreck Investigation',
        missionDuration: '20 hours',
        currentObjective: 'Debris field mapping',
        progress: 34.7,
        batteryLevel: 67.9,
        tetherLength: 6200,
        manipulatorStatus: 'OPERATIONAL',
        lightingSystem: 'HIGH INTENSITY',
        videoQuality: '4K 60fps',
        communicationStatus: 'STABLE',
        systemsStatus: 'GREEN',
        artifactsRecovered: 5,
        searchArea: '2.3 km²',
        targetIdentification: 'PROBABLE'
      }
    ],
    marineEnvironment: [
      {
        location: 'Great Pacific Garbage Patch',
        coordinates: '35.0°N, 135.0°W',
        environmentType: 'Pollution Monitoring',
        status: 'CRITICAL',
        plasticDensity: 45.7,
        microplastics: 834,
        marineLifeImpact: 'SEVERE',
        cleanupEfforts: 'ACTIVE',
        dataCollectionRate: '24/7',
        sensors: 67,
        lastUpdate: '2026-03-18 11:30:00',
        trend: 'IMPROVING',
        cleanupVessels: 3,
        plasticRemoved: '234 tons',
        estimatedTimeToCleanup: '15 years',
        fundingStatus: '$45M allocated',
        researchProjects: 12
      },
      {
        location: 'Mariana Trench',
        coordinates: '11.373°N, 142.591°E',
        environmentType: 'Deep Sea Exploration',
        status: 'ACTIVE',
        depth: 10994,
        pressure: 1086,
        temperature: 1.1,
        biodiversityIndex: 'HIGH',
        newSpeciesDiscovered: 23,
        geologicalActivity: 'MODERATE',
        sensors: 12,
        lastUpdate: '2026-03-18 09:45:00',
        trend: 'STABLE',
        researchVessels: 2,
        dataCollected: '15.7 TB',
        scientificPapers: 45,
        explorationTime: '127 days',
        majorDiscoveries: 'Xenophyophore colony'
      },
      {
        location: 'Great Barrier Reef',
        coordinates: '18.2871°S, 147.6992°E',
        environmentType: 'Coral Health Monitoring',
        status: 'DEGRADED',
        coralCoverage: 34.7,
        bleachingLevel: 'MODERATE',
        waterTemperature: 28.4,
        acidityLevel: 8.05,
        biodiversityIndex: 'DECLINING',
        threatLevel: 'HIGH',
        sensors: 234,
        lastUpdate: '2026-03-18 10:15:00',
        trend: 'DECLINING',
        protectionMeasures: 'ENHANCED',
        touristImpact: 'REGULATED',
        restorationProjects: 15,
        fundingAmount: '$180M',
        recoveryTimeframe: '20-30 years'
      },
      {
        location: 'Arctic Ocean',
        coordinates: '90.0°N, 0.0°W',
        environmentType: 'Ice Monitoring',
        status: 'CHANGING',
        iceExtent: 13.2,
        iceThickness: 1.8,
        meltRate: '15.3% annual',
        seaLevelImpact: '+2.4mm',
        polarBearPopulation: 'DECLINING',
        shippingRoutes: 'OPENING',
        sensors: 156,
        lastUpdate: '2026-03-18 08:00:00',
        trend: 'ACCELERATING',
        climateImpact: 'CRITICAL',
        researchStations: 8,
        icebreakers: 4,
        scientificStudies: 67,
        globalImplication: 'SEA LEVEL RISE'
      }
    ],
    oceanSensors: [
      {
        sensorId: 'ARGO-45672',
        sensorType: 'Temperature/Salinity',
        deployment: 'Autonomous Float',
        depth: 2000,
        location: 'South Pacific',
        status: 'OPERATIONAL',
        batteryLife: 67.8,
        dataQuality: 'EXCELLENT',
        lastContact: '2026-03-18 07:30:00',
        measurements: 15678,
        driftDistance: 234.5,
        profilesCompleted: 145,
        remainingProfiles: 855,
        nextSurfacing: '10 days',
        dataTransmission: 'IRIDIUM',
        scientificValue: 'HIGH',
        calibrationStatus: 'CURRENT'
      },
      {
        sensorId: 'BUOY-78923',
        sensorType: 'Wave/Weather',
        deployment: 'Anchored Buoy',
        depth: 0,
        location: 'Atlantic Storm Track',
        status: 'ACTIVE',
        batteryLife: 89.4,
        dataQuality: 'GOOD',
        lastContact: '2026-03-18 11:45:00',
        measurements: 45672,
        waveHeight: 4.7,
        windSpeed: 23.4,
        seaTemperature: 18.2,
        barometricPressure: 1013.2,
        dataTransmission: 'SATELLITE',
        warningIssued: 'SMALL CRAFT',
        stormPrediction: '72% chance'
      },
      {
        sensorId: 'HYDRO-23456',
        sensorType: 'Hydrophone Array',
        deployment: 'Seafloor Mounted',
        depth: 3400,
        location: 'Pacific Whale Corridor',
        status: 'LISTENING',
        batteryLife: 45.2,
        dataQuality: 'EXCELLENT',
        lastContact: '2026-03-18 06:00:00',
        measurements: 8934,
        whaleDetections: 234,
        shipNoiseLevel: 'MODERATE',
        seismicActivity: 'LOW',
        speciesIdentified: 8,
        recordingTime: '8760 hours',
        storageUsed: '67%',
        biologicalInsights: 'SIGNIFICANT'
      }
    ],
    marineResearch: [
      {
        projectName: 'DeepOcean Genome Project',
        projectId: 'DOGP-2026',
        institution: 'Woods Hole/MIT',
        funding: '$67.5M',
        duration: '5 years',
        progress: 78.4,
        objective: 'Deep sea organism genetics',
        samplesCollected: 4567,
        genomeSequenced: 234,
        newSpeciesIdentified: 45,
        scientificImpact: 'BREAKTHROUGH',
        commercialPotential: 'HIGH',
        publicationsExpected: 67,
        collaborations: 15,
        nextMilestone: 'Hydrothermal vent survey',
        riskLevel: 'LOW',
        ethicsApproval: 'GRANTED'
      },
      {
        projectName: 'Ocean Plastic Remediation',
        projectId: 'OPR-2026',
        institution: 'Ocean Cleanup Foundation',
        funding: '$180M',
        duration: '10 years',
        progress: 34.7,
        objective: 'Remove 90% ocean plastic',
        plasticRemoved: '2340 tons',
        systemsDeployed: 12,
        costPerTon: '$2340',
        efficiency: 'IMPROVING',
        scalabilityScore: 89.7,
        environmentalImpact: 'POSITIVE',
        marineLifeSaved: 'THOUSANDS',
        mediaAttention: 'GLOBAL',
        nextMilestone: 'System Gen 3 deployment',
        sustainabilityRating: 'A+'
      },
      {
        projectName: 'Coral Restoration AI',
        projectId: 'CRA-2026',
        institution: 'Great Barrier Reef Foundation',
        funding: '$45.8M',
        duration: '7 years',
        progress: 56.3,
        objective: 'AI-driven coral restoration',
        reefAreaRestored: '567 hectares',
        coralSurvivalRate: 78.4,
        aiAccuracy: 94.7,
        temperatureMonitoring: '24/7',
        bleachingPrediction: '89% accuracy',
        geneticDiversity: 'ENHANCED',
        touristImpact: 'IMPROVED',
        economicValue: '$2.3B protected',
        nextMilestone: 'Symbiodinium optimization'
      }
    ],
    oceanAlerts: [
      {
        type: 'CRITICAL',
        category: 'Tsunami Warning',
        message: 'Major undersea earthquake detected - tsunami waves possible in Pacific Basin',
        location: 'Pacific Ring of Fire',
        magnitude: '8.2 earthquake at 15km depth',
        impact: 'Coastal evacuation recommended, wave heights 5-10m possible, arrival time 3-8 hours',
        severity: 'CRITICAL',
        timestamp: '12:01',
        detectedBy: 'Pacific Tsunami Warning Center',
        recommendation: 'Immediate coastal evacuation, vessel recall to deep water, emergency protocols activated',
        affectedRegions: ['Hawaii', 'Japan', 'California', 'Chile'],
        waveHeight: '5-10 meters predicted',
        arrivalTime: '3-8 hours from now',
        populationAffected: '12 million coastal residents',
        emergencyResponse: 'LEVEL 4 ACTIVATION',
        evacuationStatus: 'IN PROGRESS',
        marineVessels: '234 recalled to safety'
      },
      {
        type: 'HIGH',
        category: 'Vehicle Emergency',
        message: 'Alvin submersible experiencing life support anomaly - emergency ascent initiated',
        vehicle: 'Alvin Deep Submersible (ALVIN-4682)',
        anomaly: 'CO2 scrubber efficiency dropped to 67%, oxygen consumption increased 15%',
        impact: 'Crew safety at risk, mission abort required, surface support mobilized',
        severity: 'HIGH',
        timestamp: '11:47',
        detectedBy: 'Life Support Monitor',
        recommendation: 'Emergency ascent to 1000m, full system diagnostic, medical evaluation',
        crewStatus: 'STABLE but monitoring required',
        ascentRate: '30m/min controlled',
        surfaceTime: '2.3 hours estimated',
        supportVessel: 'R/V Atlantis standing by',
        medicalTeam: 'ON STANDBY',
        backupSystems: 'ACTIVATED',
        communicationStatus: 'MAINTAINED'
      },
      {
        type: 'MEDIUM',
        category: 'Environmental Alert',
        message: 'Great Barrier Reef experiencing elevated water temperatures - bleaching event possible',
        location: 'Great Barrier Reef Marine Park',
        condition: 'Water temperature 2.1°C above seasonal average for 14 consecutive days',
        impact: 'Coral stress detected, bleaching event probability 78%, ecosystem at risk',
        severity: 'MEDIUM',
        timestamp: '11:25',
        detectedBy: 'Reef Temperature Network',
        recommendation: 'Enhanced monitoring, tourist activity restrictions, research vessel deployment',
        affectedArea: '2,300 km² reef system',
        coralStressLevel: 'MODERATE to HIGH',
        bleachingProbability: '78% within 30 days',
        economicImpact: '$1.2B tourism revenue at risk',
        restorationTeams: 'MOBILIZED',
        marineParks: 'PROTECTION ENHANCED',
        scientificResponse: 'EMERGENCY STUDY'
      },
      {
        type: 'INFO',
        category: 'Discovery',
        message: 'New hydrothermal vent field discovered with unique ecosystem - scientific breakthrough',
        location: 'Mariana Trench, 11.2°N 142.8°E',
        discovery: 'Active vent field with novel chemosynthetic organisms, potential new species',
        impact: 'Advances deep sea biology, potential biotechnology applications, ecosystem mapping',
        significance: 'Largest vent field discovered in 15 years',
        timestamp: '11:10',
        detectedBy: 'Nereid Under Ice Survey',
        ventTemperature: '387°C peak temperature',
        uniqueOrganisms: '23 potential new species identified',
        chemicalComposition: 'High sulfur, rare earth elements',
        scientificValue: 'EXCEPTIONAL',
        biotechPotential: 'SIGNIFICANT',
        researchPriority: 'HIGHEST',
        publicationImpact: 'Nature/Science caliber'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        vehiclesOperational: 456,
        sensorsActive: 11834,
        dataCollected: '34.7 GB',
        communicationSuccess: 96.7,
        missionObjectives: 178,
        systemAlerts: 4,
        environmentalReports: 23,
        researchBreakthroughs: 1
      },
      {
        period: 'Last 24 Hours',
        vehiclesOperational: 461,
        sensorsActive: 11756,
        dataCollected: '2.8 TB',
        communicationSuccess: 94.3,
        missionObjectives: 189,
        systemAlerts: 23,
        environmentalReports: 156,
        researchBreakthroughs: 3
      },
      {
        period: 'Last 7 Days',
        vehiclesOperational: 448,
        sensorsActive: 11234,
        dataCollected: '18.7 TB',
        communicationSuccess: 95.8,
        missionObjectives: 1234,
        systemAlerts: 89,
        environmentalReports: 876,
        researchBreakthroughs: 12
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOceanData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        oceanOverview: {
          ...prev.oceanOverview,
          dataUplink: Math.max(97.0, Math.min(99.9, prev.oceanOverview.dataUplink + (Math.random() - 0.5) * 1.0)),
          systemsOperational: Math.max(94.0, Math.min(98.5, prev.oceanOverview.systemsOperational + (Math.random() - 0.5) * 0.8)),
          environmentalMonitoring: Math.max(90.0, Math.min(97.0, prev.oceanOverview.environmentalMonitoring + (Math.random() - 0.5) * 1.2)),
          activeVessels: Math.max(1200, Math.min(1300, prev.oceanOverview.activeVessels + Math.floor((Math.random() - 0.5) * 10)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'DIVING': return 'text-cyan-400 bg-cyan-400/20';
      case 'TRANSITING': return 'text-purple-400 bg-purple-400/20';
      case 'UNDER ICE': return 'text-indigo-400 bg-indigo-400/20';
      case 'SURVEYING': return 'text-green-400 bg-green-400/20';
      case 'SEARCHING': return 'text-yellow-400 bg-yellow-400/20';
      case 'LISTENING': return 'text-pink-400 bg-pink-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'DEGRADED': return 'text-orange-400 bg-orange-400/20';
      case 'CHANGING': return 'text-yellow-400 bg-yellow-400/20';
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

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'IMPROVING': return 'text-green-400';
      case 'STABLE': return 'text-yellow-400';
      case 'DECLINING': return 'text-red-400';
      case 'ACCELERATING': return 'text-orange-400';
      default: return 'text-slate-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatDepth = (depth) => `${depth.toLocaleString()} m`;

  return (
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Ocean Technology Intelligence Center</h1>
              <p className="text-cyan-300">Marine & underwater systems analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{oceanData.currentTime}</div>
            <div className="text-cyan-300">Ocean Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Ocean Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Anchor className="w-5 h-5 text-cyan-400 mr-2" />
                Vessels
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(oceanData.oceanOverview.activeVessels)}</div>
            <div className="text-cyan-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-green-400 mr-2" />
                Sensors
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(oceanData.oceanOverview.operationalSensors)}</div>
            <div className="text-green-300 text-sm">{formatNumber(oceanData.oceanOverview.oceanSensors)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Systems
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(oceanData.oceanOverview.systemsOperational)}</div>
            <div className="text-blue-300 text-sm">Operational</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Compass className="w-5 h-5 text-yellow-400 mr-2" />
                Missions
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{oceanData.oceanOverview.missionsActive}</div>
            <div className="text-yellow-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(oceanData.oceanOverview.oceanCoverage)}</div>
            <div className="text-purple-300 text-sm">Ocean</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-pink-400 mr-2" />
                Data Link
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatPercentage(oceanData.oceanOverview.dataUplink)}</div>
            <div className="text-pink-300 text-sm">Uplink</div>
          </div>
        </div>

        {/* Ocean Vehicles & Marine Environment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Anchor className="w-5 h-5 text-cyan-400 mr-2" />
              Ocean Vehicles & Platforms
            </h3>
            <div className="space-y-4">
              {oceanData.oceanVehicles.map((vehicle, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{vehicle.vehicleName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(vehicle.status)}`}>
                        {vehicle.status}
                      </span>
                      {vehicle.riskLevel && (
                        <span className={`text-xs ${getRiskColor(vehicle.riskLevel)}`}>
                          {vehicle.riskLevel}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{vehicle.operator}</div>
                    <div className="text-blue-400">{vehicle.vehicleType}</div>
                    <div className="text-green-400">{vehicle.location}</div>
                  </div>
                  
                  {vehicle.depth > 0 && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-indigo-400">Depth: {formatDepth(vehicle.depth)}</div>
                      <div className="text-purple-400">Max: {formatDepth(vehicle.maxDepth)}</div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Battery: {formatPercentage(vehicle.batteryLevel)}</div>
                    <div className="text-orange-400">Mission: {vehicle.mission}</div>
                  </div>
                  
                  {(vehicle.depthProgress || vehicle.progress) && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Progress</span>
                        <span>{formatPercentage(vehicle.depthProgress || vehicle.progress)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${vehicle.depthProgress || vehicle.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Objective: {vehicle.currentObjective}</div>
                    <div className="text-pink-400">Status: {vehicle.communicationStatus}</div>
                    {vehicle.supportVessel && (
                      <div className="text-indigo-400">Support: {vehicle.supportVessel}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Waves className="w-5 h-5 text-blue-400 mr-2" />
              Marine Environment Monitoring
            </h3>
            <div className="space-y-4">
              {oceanData.marineEnvironment.map((env, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{env.location}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(env.status)}`}>
                        {env.status}
                      </span>
                      <span className={`text-xs ${getTrendColor(env.trend)}`}>
                        {env.trend}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{env.environmentType}</div>
                    <div className="text-blue-400">Sensors: {env.sensors}</div>
                  </div>
                  
                  {env.plasticDensity && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-red-400">Plastic: {env.plasticDensity} kg/km²</div>
                      <div className="text-orange-400">Removed: {env.plasticRemoved}</div>
                    </div>
                  )}
                  
                  {env.depth && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-indigo-400">Depth: {formatDepth(env.depth)}</div>
                      <div className="text-purple-400">Pressure: {env.pressure} MPa</div>
                    </div>
                  )}
                  
                  {env.coralCoverage && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Coral: {formatPercentage(env.coralCoverage)}</div>
                      <div className="text-yellow-400">Bleaching: {env.bleachingLevel}</div>
                    </div>
                  )}
                  
                  {env.iceExtent && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Ice: {env.iceExtent}M km²</div>
                      <div className="text-red-400">Melt: {env.meltRate}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Updated: {env.lastUpdate}</div>
                    {env.fundingStatus && (
                      <div className="text-green-400">Funding: {env.fundingStatus}</div>
                    )}
                    {env.majorDiscoveries && (
                      <div className="text-yellow-400">Discovery: {env.majorDiscoveries}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ocean Sensors & Marine Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Radio className="w-5 h-5 text-green-400 mr-2" />
              Ocean Sensor Network
            </h3>
            <div className="space-y-4">
              {oceanData.oceanSensors.map((sensor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{sensor.sensorId}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(sensor.status)}`}>
                        {sensor.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{sensor.sensorType}</div>
                    <div className="text-blue-400">{sensor.deployment}</div>
                    <div className="text-green-400">{sensor.location}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Battery: {formatPercentage(sensor.batteryLife)}</div>
                    <div className="text-purple-400">Quality: {sensor.dataQuality}</div>
                  </div>
                  
                  {sensor.depth > 0 && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-indigo-400">Depth: {formatDepth(sensor.depth)}</div>
                      <div className="text-orange-400">Measurements: {formatNumber(sensor.measurements)}</div>
                    </div>
                  )}
                  
                  {sensor.waveHeight && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Wave: {sensor.waveHeight}m</div>
                      <div className="text-blue-400">Wind: {sensor.windSpeed} kts</div>
                    </div>
                  )}
                  
                  {sensor.whaleDetections && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Whales: {sensor.whaleDetections}</div>
                      <div className="text-yellow-400">Species: {sensor.speciesIdentified}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Last Contact: {sensor.lastContact}</div>
                    <div className="text-pink-400">Transmission: {sensor.dataTransmission}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-purple-400 mr-2" />
              Marine Research Projects
            </h3>
            <div className="space-y-4">
              {oceanData.marineResearch.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{project.projectName}</span>
                    <div className="text-green-400 text-xs">{project.funding}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{project.institution}</div>
                    <div className="text-blue-400">Duration: {project.duration}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(project.progress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {project.samplesCollected && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Samples: {formatNumber(project.samplesCollected)}</div>
                      <div className="text-purple-400">Species: {project.newSpeciesIdentified || project.genomeSequenced}</div>
                    </div>
                  )}
                  
                  {project.plasticRemoved && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Removed: {project.plasticRemoved}</div>
                      <div className="text-orange-400">Cost: {project.costPerTon || 'N/A'}</div>
                    </div>
                  )}
                  
                  {project.reefAreaRestored && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Restored: {project.reefAreaRestored}</div>
                      <div className="text-blue-400">Survival: {formatPercentage(project.coralSurvivalRate)}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Objective: {project.objective}</div>
                    <div className="text-indigo-400">Next: {project.nextMilestone}</div>
                    {project.scientificImpact && (
                      <div className="text-green-400">Impact: {project.scientificImpact}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Ocean Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {oceanData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Vehicles: {metrics.vehiclesOperational}</div>
                  <div className="text-green-400">Sensors: {formatNumber(metrics.sensorsActive)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Data: {metrics.dataCollected}</div>
                  <div className="text-yellow-400">Comms: {formatPercentage(metrics.communicationSuccess)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Missions: {metrics.missionObjectives}</div>
                  <div className="text-red-400">Alerts: {metrics.systemAlerts}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-orange-400">Reports: {metrics.environmentalReports}</div>
                  <div className="text-indigo-400">Discoveries: {metrics.researchBreakthroughs}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ocean Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Ocean Technology System Alerts
          </h3>
          <div className="space-y-4">
            {oceanData.oceanAlerts.map((alert, index) => (
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
                  {alert.location && <div className="text-slate-300">Location: {alert.location}</div>}
                  {alert.vehicle && <div className="text-cyan-400">Vehicle: {alert.vehicle}</div>}
                  {alert.magnitude && <div className="text-red-400">Event: {alert.magnitude}</div>}
                  {alert.anomaly && <div className="text-orange-400">Anomaly: {alert.anomaly}</div>}
                  {alert.condition && <div className="text-yellow-400">Condition: {alert.condition}</div>}
                  {alert.discovery && <div className="text-green-400">Discovery: {alert.discovery}</div>}
                  {alert.affectedRegions && <div className="text-purple-400">Regions: {alert.affectedRegions.join(', ')}</div>}
                  {alert.crewStatus && <div className="text-blue-400">Crew: {alert.crewStatus}</div>}
                  {alert.populationAffected && <div className="text-red-400">Population: {alert.populationAffected}</div>}
                  {alert.scientificValue && <div className="text-green-400">Value: {alert.scientificValue}</div>}
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