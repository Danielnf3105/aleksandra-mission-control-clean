// Geological Technology Intelligence Center - Earth Sciences & Seismic Analytics
import { useState, useEffect } from 'react';
import { Mountain, Zap, Globe, Activity, Eye, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Layers, Compass } from 'lucide-react';

export default function GeologicalTechnologyIntelligenceCenter() {
  const [geologicalData, setGeologicalData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    geologicalOverview: {
      seismicStations: 23456,
      operationalStations: 22834,
      volcanicMonitors: 1567,
      geologicalSurveys: 345,
      activeEarthquakes: 89,
      volcanicActivity: 23,
      tsunamiWarningSystem: 'ACTIVE',
      globalCoverage: 87.6,
      dataReliability: 96.8,
      alertsActive: 12,
      researchProjects: 234,
      mineralExploration: 567,
      geophysicalSurveys: 123,
      environmentalMonitoring: 789,
      hazardMapping: 456,
      carbonSequestration: 78,
      geothermalProjects: 145
    },
    seismicActivity: [
      {
        eventId: 'EQ-2026-0318-001',
        magnitude: 7.2,
        depth: 15.4,
        location: 'Off Pacific Coast of Japan',
        coordinates: '38.2°N, 142.8°E',
        timestamp: '2026-03-18 11:47:23 UTC',
        status: 'MAJOR',
        tsunamiThreat: 'REGIONAL',
        intensity: 'VII - Very Strong',
        faultType: 'Thrust Fault',
        plateInteraction: 'Pacific/North American',
        aftershocks: 23,
        affectedPopulation: 2400000,
        damageAssessment: 'MODERATE',
        emergencyResponse: 'LEVEL 4',
        epicenterDistance: '78 km E of Sendai',
        wavePropagation: 'P-wave 6.8 km/s, S-wave 3.9 km/s',
        crustalDeformation: '34cm horizontal, 12cm vertical',
        infrastructureImpact: 'Railway suspensions, power outages',
        scientificSignificance: 'Foreshock sequence analysis'
      },
      {
        eventId: 'EQ-2026-0318-002',
        magnitude: 5.8,
        depth: 8.2,
        location: 'Central California',
        coordinates: '35.9°N, 120.5°W',
        timestamp: '2026-03-18 10:23:15 UTC',
        status: 'MODERATE',
        tsunamiThreat: 'NONE',
        intensity: 'VI - Strong',
        faultType: 'Strike-slip',
        plateInteraction: 'San Andreas System',
        aftershocks: 8,
        affectedPopulation: 850000,
        damageAssessment: 'MINOR',
        emergencyResponse: 'LEVEL 2',
        epicenterDistance: '45 km NE of San Luis Obispo',
        wavePropagation: 'P-wave 6.2 km/s, S-wave 3.6 km/s',
        crustalDeformation: '8cm horizontal displacement',
        infrastructureImpact: 'Minor building damage, utilities intact',
        scientificSignificance: 'San Andreas stress transfer'
      },
      {
        eventId: 'EQ-2026-0318-003',
        magnitude: 6.4,
        depth: 45.7,
        location: 'Turkey-Syria Border',
        coordinates: '36.1°N, 36.2°E',
        timestamp: '2026-03-18 09:56:41 UTC',
        status: 'STRONG',
        tsunamiThreat: 'NONE',
        intensity: 'VII - Very Strong',
        faultType: 'Strike-slip',
        plateInteraction: 'Arabian/Anatolian',
        aftershocks: 15,
        affectedPopulation: 3200000,
        damageAssessment: 'SIGNIFICANT',
        emergencyResponse: 'LEVEL 3',
        epicenterDistance: '23 km SW of Gaziantep',
        wavePropagation: 'P-wave 6.5 km/s, S-wave 3.7 km/s',
        crustalDeformation: '15cm horizontal, 4cm vertical',
        infrastructureImpact: 'Building collapses, road damage',
        scientificSignificance: 'East Anatolian Fault activity'
      }
    ],
    volcanicActivity: [
      {
        volcanoName: 'Mount Etna',
        volcanoId: 'VE-211060',
        location: 'Sicily, Italy',
        coordinates: '37.748°N, 14.999°E',
        alertLevel: 'ORANGE',
        activity: 'STROMBOLIAN ERUPTION',
        lastEruption: '2026-03-18 08:30:00 UTC',
        elevationPeak: 3329,
        craterTemperature: 1247,
        gasEmissions: 'HIGH SO2, MODERATE CO2',
        lavaFlow: 'ACTIVE - Southeast Crater',
        ashPlume: 'MODERATE - 4.2km altitude',
        seismicUnrest: 'ELEVATED - 45 events/day',
        groundDeformation: '2.3cm radial inflation',
        thermalAnomalies: '12 hotspots detected',
        aviationCode: 'ORANGE',
        exclusionZone: '2km radius',
        touristImpact: 'CABLE CAR SUSPENDED',
        scientificMonitoring: 'CONTINUOUS',
        riskAssessment: 'MODERATE',
        historicalContext: '2700 years active'
      },
      {
        volcanoName: 'Kilauea',
        volcanoId: 'HI-332010',
        location: 'Hawaii, USA',
        coordinates: '19.421°N, 155.287°W',
        alertLevel: 'YELLOW',
        activity: 'EFFUSIVE ERUPTION',
        lastEruption: '2026-03-18 06:15:00 UTC',
        elevationPeak: 1247,
        craterTemperature: 1156,
        gasEmissions: 'MODERATE SO2, LOW CO2',
        lavaFlow: 'CONTAINED - Halemaumau Crater',
        ashPlume: 'MINIMAL - 1.8km altitude',
        seismicUnrest: 'NORMAL - 12 events/day',
        groundDeformation: '0.8cm subsidence',
        thermalAnomalies: '5 hotspots detected',
        aviationCode: 'YELLOW',
        exclusionZone: '1km radius',
        touristImpact: 'VIEWING AREAS OPEN',
        scientificMonitoring: 'REGULAR',
        riskAssessment: 'LOW',
        historicalContext: 'Continuous activity since 1983'
      },
      {
        volcanoName: 'Sakurajima',
        volcanoId: 'JP-282080',
        location: 'Kyushu, Japan',
        coordinates: '31.585°N, 130.657°E',
        alertLevel: 'RED',
        activity: 'VULCANIAN ERUPTION',
        lastEruption: '2026-03-18 11:22:00 UTC',
        elevationPeak: 1117,
        craterTemperature: 1389,
        gasEmissions: 'VERY HIGH SO2, HIGH CO2',
        lavaFlow: 'NONE',
        ashPlume: 'MAJOR - 8.7km altitude',
        seismicUnrest: 'VERY HIGH - 156 events/day',
        groundDeformation: '5.7cm rapid inflation',
        thermalAnomalies: '23 hotspots detected',
        aviationCode: 'RED',
        exclusionZone: '3km radius',
        touristImpact: 'EVACUATION RECOMMENDED',
        scientificMonitoring: 'INTENSIVE',
        riskAssessment: 'HIGH',
        historicalContext: 'Most active volcano in Japan'
      }
    ],
    geologicalSurveys: [
      {
        surveyName: 'Pacific Ring of Fire Monitoring',
        surveyId: 'PROF-2026',
        institution: 'USGS/JMA/PHIVOLCS',
        funding: '$345M',
        duration: 'Ongoing',
        progress: 78.4,
        objective: 'Volcanic hazard assessment',
        coverageArea: '40,000 km coastline',
        seismographs: 2456,
        tiltmeters: 567,
        gasAnalyzers: 234,
        thermalCameras: 123,
        satelliteMonitoring: 'CONTINUOUS',
        dataStreams: 45678,
        alertsGenerated: 234,
        evacuationsSupported: 15,
        livesSaved: 'ESTIMATED 125,000',
        economicImpact: '$2.3B damage prevented',
        scientificPapers: 145,
        internationalCollaboration: '15 countries'
      },
      {
        surveyName: 'Global Carbon Sequestration',
        surveyId: 'GCS-2026',
        institution: 'DOE/NETL/IEAGHG',
        funding: '$567M',
        duration: '10 years',
        progress: 45.7,
        objective: 'CO2 geological storage',
        injectionSites: 67,
        monitoringWells: 234,
        captureCapacity: '12.5 Mt CO2/year',
        storageCapacity: '500 Mt CO2 total',
        leakageRate: '<0.01% annually',
        environmentalCompliance: '100%',
        seismicMonitoring: 'CONTINUOUS',
        geochemicalAnalysis: 'MONTHLY',
        riskAssessment: 'LOW',
        regulatoryApproval: 'GRANTED',
        commercialViability: 'DEMONSTRATED',
        climateBenefit: '45 Mt CO2 equivalent'
      },
      {
        surveyName: 'Deep Earth Mineral Exploration',
        surveyId: 'DEME-2026',
        institution: 'BGR/USGS/GSC',
        funding: '$234M',
        duration: '7 years',
        progress: 67.2,
        objective: 'Critical mineral mapping',
        surveyArea: '15,000 km²',
        drillingDepth: '3000m maximum',
        coresSampled: 1234,
        mineralDeposits: 23,
        rareEarthElements: 'SIGNIFICANT FINDS',
        lithiumReserves: '2.3 Mt estimated',
        cobaltDeposits: 'PROMISING',
        nickelQuantity: '4.5 Mt proven',
        environmentalImpact: 'MINIMIZED',
        indigenousConsultation: 'ONGOING',
        economicAssessment: '$45B potential value',
        extractionFeasibility: 'VIABLE'
      }
    ],
    hazardMonitoring: [
      {
        hazardType: 'Landslide Risk',
        hazardId: 'LS-CA-2026-03',
        location: 'Northern California',
        riskLevel: 'HIGH',
        probability: 78.4,
        timeframe: '7-14 days',
        triggerFactors: 'Heavy rainfall, soil saturation',
        slopeAngle: 35.7,
        soilStability: 'UNSTABLE',
        vegetationCover: 'SPARSE - recent fire',
        drainagePattern: 'POOR',
        populationAtRisk: 45000,
        infrastructureAtRisk: 'Highway 101, residential areas',
        monitoringSystems: 'Inclinometers, pore pressure',
        warningIssued: '2026-03-18 09:00:00 UTC',
        evacuationPlans: 'ACTIVATED',
        emergencyServices: 'ON STANDBY',
        mitigation: 'Drainage improvement, slope stabilization',
        historicalEvents: '1982, 1998, 2017 major slides'
      },
      {
        hazardType: 'Subsidence',
        hazardId: 'SB-TX-2026-01',
        location: 'Houston, Texas',
        riskLevel: 'MEDIUM',
        probability: 45.6,
        timeframe: 'Ongoing',
        triggerFactors: 'Groundwater extraction, clay compaction',
        subsidenceRate: '2.5 cm/year',
        affectedArea: '8,900 km²',
        infrastructureImpact: 'Building foundations, roads',
        floodingRisk: 'INCREASED',
        populationAffected: 6700000,
        economicImpact: '$1.2B annually',
        monitoringSystems: 'GPS, InSAR, extensometers',
        mitigation: 'Managed groundwater use',
        regulationCompliance: 'HARRIS-GALVESTON SUBSIDENCE DISTRICT',
        adaptation: 'Flood barriers, building codes',
        researchPrograms: 'ONGOING'
      }
    ],
    geologicalAlerts: [
      {
        type: 'CRITICAL',
        category: 'Major Earthquake',
        message: 'M7.2 earthquake off Japan - Regional tsunami threat declared, coastal evacuations underway',
        location: 'Off Pacific Coast of Japan',
        magnitude: 7.2,
        depth: '15.4 km',
        impact: '2.4M population affected, moderate damage expected, infrastructure disruptions',
        severity: 'MAJOR',
        timestamp: '11:47',
        detectedBy: 'Japan Meteorological Agency',
        recommendation: 'Immediate coastal evacuation within 500m of sea level, emergency shelters open',
        tsunamiWarning: 'REGIONAL THREAT',
        arrivalTime: 'First waves 15-45 minutes',
        waveHeight: '2-5 meters possible',
        affectedCoasts: 'Honshu, Pacific coast',
        emergencyResponse: 'LEVEL 4 ACTIVATION',
        infrastructureStatus: 'RAILWAYS SUSPENDED',
        powerOutages: '450,000 customers',
        casualties: 'ASSESSMENT ONGOING'
      },
      {
        type: 'HIGH',
        category: 'Volcanic Eruption',
        message: 'Sakurajima volcano major eruption - RED alert, 8.7km ash plume, evacuation recommended',
        volcano: 'Sakurajima, Kyushu, Japan',
        alertLevel: 'RED',
        ashPlume: '8.7km altitude',
        impact: 'Aviation disruption, respiratory health risk, agricultural ash fall',
        severity: 'HIGH',
        timestamp: '11:22',
        detectedBy: 'Japan Volcanological Society',
        recommendation: 'Evacuation within 3km radius, respiratory protection, flight diversions',
        exclusionZone: '3KM RADIUS',
        aviationImpact: 'AIRPORT CLOSURES POSSIBLE',
        ashfallArea: '150km downwind',
        healthWarning: 'RESPIRATORY MASKS ADVISED',
        agriculturalImpact: 'CROP DAMAGE EXPECTED',
        scientificResponse: 'INTENSIVE MONITORING',
        evacuationStatus: 'VOLUNTARY TO MANDATORY'
      },
      {
        type: 'MEDIUM',
        category: 'Landslide Warning',
        message: 'High landslide risk Northern California - Heavy rainfall, soil saturation critical',
        location: 'Northern California hillsides',
        riskLevel: 'HIGH',
        triggerFactors: 'Heavy rainfall, saturated soils',
        impact: '45,000 residents at risk, Highway 101 closure possible, infrastructure damage',
        severity: 'MEDIUM',
        timestamp: '09:00',
        detectedBy: 'USGS Landslide Hazards Program',
        recommendation: 'Avoid steep slopes, monitor drainage, emergency kits ready',
        probability: '78.4% within 7-14 days',
        populationAtRisk: '45,000 RESIDENTS',
        infrastructureAtRisk: 'HIGHWAY 101, UTILITIES',
        evacuationPlans: 'ACTIVATED',
        emergencyServices: 'ON STANDBY',
        monitoringSystems: 'REAL-TIME ACTIVE',
        mitigation: 'DRAINAGE IMPROVEMENTS'
      },
      {
        type: 'INFO',
        category: 'Geological Discovery',
        message: 'Significant lithium deposits discovered in Nevada - 2.3 Mt reserves, critical mineral security',
        location: 'Nevada Basin and Range',
        discovery: 'Major lithium carbonate deposits',
        reserves: '2.3 million metric tons',
        impact: 'Critical mineral supply chain security, EV battery production, economic development',
        significance: 'STRATEGIC RESOURCE',
        timestamp: '10:45',
        detectedBy: 'USGS Mineral Resources Program',
        economicValue: '$45B estimated potential',
        extractionFeasibility: 'COMMERCIALLY VIABLE',
        environmentalAssessment: 'IN PROGRESS',
        extractionTimeframe: '5-7 YEARS TO PRODUCTION',
        jobCreation: '5,000 DIRECT JOBS',
        strategicImportance: 'NATIONAL SECURITY',
        internationalImpact: 'REDUCED IMPORT DEPENDENCE'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        seismicStations: 22834,
        earthquakeDetections: 45,
        volcanicEvents: 12,
        dataPoints: 5678234,
        alertsGenerated: 4,
        processingLatency: 2.3,
        systemReliability: 99.7,
        coverageQuality: 96.8
      },
      {
        period: 'Last 24 Hours',
        seismicStations: 22789,
        earthquakeDetections: 456,
        volcanicEvents: 89,
        dataPoints: 124567890,
        alertsGenerated: 23,
        processingLatency: 2.1,
        systemReliability: 99.4,
        coverageQuality: 96.2
      },
      {
        period: 'Last 7 Days',
        seismicStations: 22645,
        earthquakeDetections: 2345,
        volcanicEvents: 567,
        dataPoints: 845678901,
        alertsGenerated: 145,
        processingLatency: 2.5,
        systemReliability: 99.1,
        coverageQuality: 95.8
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGeologicalData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        geologicalOverview: {
          ...prev.geologicalOverview,
          dataReliability: Math.max(94.0, Math.min(98.5, prev.geologicalOverview.dataReliability + (Math.random() - 0.5) * 1.0)),
          globalCoverage: Math.max(85.0, Math.min(90.0, prev.geologicalOverview.globalCoverage + (Math.random() - 0.5) * 0.8)),
          activeEarthquakes: Math.max(50, Math.min(150, prev.geologicalOverview.activeEarthquakes + Math.floor((Math.random() - 0.5) * 10)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'MAJOR': return 'text-red-400 bg-red-400/20';
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20';
      case 'STRONG': return 'text-orange-400 bg-orange-400/20';
      case 'MINOR': return 'text-green-400 bg-green-400/20';
      case 'ORANGE': return 'text-orange-400 bg-orange-400/20';
      case 'YELLOW': return 'text-yellow-400 bg-yellow-400/20';
      case 'RED': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
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

  const getIntensityColor = (intensity) => {
    if (intensity.includes('VII')) return 'text-red-400';
    if (intensity.includes('VI')) return 'text-orange-400';
    if (intensity.includes('V')) return 'text-yellow-400';
    if (intensity.includes('IV')) return 'text-green-400';
    return 'text-slate-400';
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500';
      case 'EXTREME': return 'text-red-500';
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
  const formatMagnitude = (magnitude) => `M${magnitude.toFixed(1)}`;
  const formatDepth = (depth) => `${depth.toFixed(1)} km`;
  const formatTemperature = (temp) => `${temp}°C`;
  const formatElevation = (elevation) => `${elevation.toLocaleString()} m`;

  return (
    <div className="h-full bg-gradient-to-br from-amber-900 via-slate-900 to-orange-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-amber-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Geological Technology Intelligence Center</h1>
              <p className="text-amber-300">Earth sciences & seismic analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-amber-400">{geologicalData.currentTime}</div>
            <div className="text-amber-300">Geological Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Geological Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-amber-400 mr-2" />
                Seismic
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{formatNumber(geologicalData.geologicalOverview.operationalStations)}</div>
            <div className="text-amber-300 text-sm">{formatNumber(geologicalData.geologicalOverview.seismicStations)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Mountain className="w-5 h-5 text-red-400 mr-2" />
                Volcanic
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{geologicalData.geologicalOverview.volcanicActivity}</div>
            <div className="text-red-300 text-sm">{geologicalData.geologicalOverview.volcanicMonitors} Monitors</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Earthquakes
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{geologicalData.geologicalOverview.activeEarthquakes}</div>
            <div className="text-yellow-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-green-400 mr-2" />
                Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(geologicalData.geologicalOverview.globalCoverage)}</div>
            <div className="text-green-300 text-sm">Global</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Reliability
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(geologicalData.geologicalOverview.dataReliability)}</div>
            <div className="text-blue-300 text-sm">Data Quality</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
                Alerts
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{geologicalData.geologicalOverview.alertsActive}</div>
            <div className="text-orange-300 text-sm">Active</div>
          </div>
        </div>

        {/* Seismic Activity & Volcanic Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-amber-400 mr-2" />
              Recent Seismic Activity
            </h3>
            <div className="space-y-4">
              {geologicalData.seismicActivity.map((earthquake, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{formatMagnitude(earthquake.magnitude)} - {earthquake.location}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(earthquake.status)}`}>
                        {earthquake.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-red-400">Depth: {formatDepth(earthquake.depth)}</div>
                    <div className="text-blue-400">Time: {earthquake.timestamp.split(' ')[1]}</div>
                    <div className="text-green-400">ID: {earthquake.eventId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className={getIntensityColor(earthquake.intensity)}>Intensity: {earthquake.intensity}</div>
                    <div className="text-purple-400">Fault: {earthquake.faultType}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Aftershocks: {earthquake.aftershocks}</div>
                    <div className="text-cyan-400">Population: {formatNumber(earthquake.affectedPopulation)}</div>
                  </div>
                  
                  {earthquake.tsunamiThreat !== 'NONE' && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-red-400">Tsunami: {earthquake.tsunamiThreat}</div>
                      <div className="text-orange-400">Response: {earthquake.emergencyResponse}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Epicenter: {earthquake.epicenterDistance}</div>
                    <div className="text-indigo-400">Deformation: {earthquake.crustalDeformation}</div>
                    <div className="text-pink-400">Impact: {earthquake.infrastructureImpact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Mountain className="w-5 h-5 text-red-400 mr-2" />
              Volcanic Activity Monitoring
            </h3>
            <div className="space-y-4">
              {geologicalData.volcanicActivity.map((volcano, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{volcano.volcanoName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(volcano.alertLevel)}`}>
                        {volcano.alertLevel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{volcano.location}</div>
                    <div className="text-blue-400">ID: {volcano.volcanoId}</div>
                    <div className="text-green-400">Elevation: {formatElevation(volcano.elevationPeak)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-red-400">Activity: {volcano.activity}</div>
                    <div className="text-orange-400">Temperature: {formatTemperature(volcano.craterTemperature)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Ash Plume: {volcano.ashPlume}</div>
                    <div className="text-yellow-400">Lava Flow: {volcano.lavaFlow}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Seismic: {volcano.seismicUnrest}</div>
                    <div className="text-pink-400">Deformation: {volcano.groundDeformation}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Aviation: {volcano.aviationCode}</div>
                    <div className={getRiskColor(volcano.riskAssessment)}>Risk: {volcano.riskAssessment}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Gas: {volcano.gasEmissions}</div>
                    <div className="text-orange-400">Exclusion: {volcano.exclusionZone}</div>
                    <div className="text-green-400">Tourism: {volcano.touristImpact}</div>
                    <div className="text-blue-400">Last Eruption: {volcano.lastEruption.split(' ')[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geological Surveys & Hazard Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Compass className="w-5 h-5 text-green-400 mr-2" />
              Active Geological Surveys
            </h3>
            <div className="space-y-4">
              {geologicalData.geologicalSurveys.map((survey, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{survey.surveyName}</span>
                    <div className="text-green-400 text-xs">{survey.funding}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{survey.institution}</div>
                    <div className="text-blue-400">Duration: {survey.duration}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(survey.progress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${survey.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {survey.seismographs && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Seismographs: {formatNumber(survey.seismographs)}</div>
                      <div className="text-purple-400">Alerts: {survey.alertsGenerated}</div>
                    </div>
                  )}
                  
                  {survey.injectionSites && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Sites: {survey.injectionSites}</div>
                      <div className="text-orange-400">Capacity: {survey.captureCapacity}</div>
                    </div>
                  )}
                  
                  {survey.mineralDeposits && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Deposits: {survey.mineralDeposits}</div>
                      <div className="text-blue-400">Value: {survey.economicAssessment}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Objective: {survey.objective}</div>
                    {survey.livesSaved && (
                      <div className="text-green-400">Lives Saved: {survey.livesSaved}</div>
                    )}
                    {survey.climateBenefit && (
                      <div className="text-blue-400">Climate: {survey.climateBenefit}</div>
                    )}
                    {survey.rareEarthElements && (
                      <div className="text-purple-400">Critical Minerals: {survey.rareEarthElements}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
              Geological Hazard Monitoring
            </h3>
            <div className="space-y-4">
              {geologicalData.hazardMonitoring.map((hazard, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{hazard.hazardType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(hazard.riskLevel)}`}>
                        {hazard.riskLevel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{hazard.location}</div>
                    <div className="text-blue-400">ID: {hazard.hazardId}</div>
                    <div className="text-green-400">Timeframe: {hazard.timeframe}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Probability</span>
                      <span>{formatPercentage(hazard.probability)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          hazard.probability > 70 ? 'bg-red-400' : 
                          hazard.probability > 40 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${hazard.probability}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {hazard.slopeAngle && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Slope: {hazard.slopeAngle}°</div>
                      <div className="text-purple-400">Stability: {hazard.soilStability}</div>
                    </div>
                  )}
                  
                  {hazard.subsidenceRate && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-orange-400">Rate: {hazard.subsidenceRate}</div>
                      <div className="text-indigo-400">Area: {hazard.affectedArea}</div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-red-400">Population: {formatNumber(hazard.populationAtRisk || hazard.populationAffected)}</div>
                    <div className="text-cyan-400">Economic: {hazard.economicImpact}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Triggers: {hazard.triggerFactors}</div>
                    <div className="text-pink-400">Infrastructure: {hazard.infrastructureAtRisk || hazard.infrastructureImpact}</div>
                    <div className="text-green-400">Monitoring: {hazard.monitoringSystems}</div>
                    <div className="text-blue-400">Mitigation: {hazard.mitigation}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-amber-400 mr-2" />
            Geological Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {geologicalData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Stations: {formatNumber(metrics.seismicStations)}</div>
                  <div className="text-green-400">Earthquakes: {metrics.earthquakeDetections}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-red-400">Volcanic: {metrics.volcanicEvents}</div>
                  <div className="text-purple-400">Data Points: {formatNumber(metrics.dataPoints)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-yellow-400">Alerts: {metrics.alertsGenerated}</div>
                  <div className="text-cyan-400">Latency: {metrics.processingLatency}s</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-orange-400">Reliability: {formatPercentage(metrics.systemReliability)}</div>
                  <div className="text-indigo-400">Coverage: {formatPercentage(metrics.coverageQuality)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geological Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Geological Technology System Alerts
          </h3>
          <div className="space-y-4">
            {geologicalData.geologicalAlerts.map((alert, index) => (
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
                  {alert.magnitude && <div className="text-red-400">Magnitude: {formatMagnitude(alert.magnitude)}</div>}
                  {alert.depth && <div className="text-blue-400">Depth: {formatDepth(alert.depth)}</div>}
                  {alert.volcano && <div className="text-orange-400">Volcano: {alert.volcano}</div>}
                  {alert.alertLevel && <div className="text-yellow-400">Alert Level: {alert.alertLevel}</div>}
                  {alert.ashPlume && <div className="text-purple-400">Ash Plume: {alert.ashPlume}</div>}
                  {alert.riskLevel && <div className={getRiskColor(alert.riskLevel)}>Risk: {alert.riskLevel}</div>}
                  {alert.discovery && <div className="text-green-400">Discovery: {alert.discovery}</div>}
                  {alert.reserves && <div className="text-cyan-400">Reserves: {alert.reserves}</div>}
                  {alert.tsunamiWarning && <div className="text-red-400">Tsunami: {alert.tsunamiWarning}</div>}
                  {alert.evacuationStatus && <div className="text-orange-400">Evacuation: {alert.evacuationStatus}</div>}
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