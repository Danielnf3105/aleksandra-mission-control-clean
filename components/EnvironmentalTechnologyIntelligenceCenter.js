// Environmental Technology Intelligence Center - Environmental Monitoring & Sustainability Analytics
import { useState, useEffect } from 'react';
import { Leaf, Globe, Droplet, Wind, Sun, TreePine, Activity, Eye, BarChart3, Settings, AlertTriangle, TrendingUp } from 'lucide-react';

export default function EnvironmentalTechnologyIntelligenceCenter() {
  const [environmentalData, setEnvironmentalData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    environmentalOverview: {
      monitoringStations: 45678,
      operationalSensors: 234567,
      airQualityStations: 12345,
      waterQualityStations: 8967,
      weatherStations: 15432,
      satelliteAssets: 234,
      globalCoverage: 94.7,
      dataAccuracy: 98.9,
      alertLevel: 'MODERATE',
      climateStatus: 'MONITORING',
      co2Levels: 421.3,
      globalTemperature: 1.23,
      oceanPH: 8.05,
      forestCoverage: 31.2,
      renewableEnergy: 28.7,
      wasteRecycling: 34.8,
      carbonFootprint: 36.8,
      biodiversityIndex: 0.68
    },
    airQualityMonitoring: [
      {
        stationName: 'Downtown Los Angeles',
        stationId: 'AQS-LA-001',
        location: 'California, USA',
        coordinates: '34.0522°N, 118.2437°W',
        status: 'OPERATIONAL',
        airQualityIndex: 67,
        aqiCategory: 'MODERATE',
        primaryPollutant: 'PM2.5',
        pm25: 18.5,
        pm10: 32.1,
        ozone: 0.078,
        no2: 45.2,
        so2: 12.3,
        co: 1.2,
        temperature: 24.5,
        humidity: 68,
        windSpeed: 12.5,
        windDirection: 'SW',
        visibility: 8.5,
        lastUpdate: '12:45',
        trendDirection: 'IMPROVING',
        healthAdvisory: 'SENSITIVE GROUPS',
        complianceStatus: 'COMPLIANT',
        dataQuality: 'VALIDATED',
        forecastTrend: 'STABLE'
      },
      {
        stationName: 'Beijing Environmental Center',
        stationId: 'AQS-BJ-001',
        location: 'Beijing, China',
        coordinates: '39.9042°N, 116.4074°E',
        status: 'OPERATIONAL',
        airQualityIndex: 156,
        aqiCategory: 'UNHEALTHY',
        primaryPollutant: 'PM2.5',
        pm25: 67.8,
        pm10: 98.4,
        ozone: 0.034,
        no2: 78.9,
        so2: 23.7,
        co: 2.1,
        temperature: 18.2,
        humidity: 72,
        windSpeed: 8.3,
        windDirection: 'NE',
        visibility: 3.2,
        lastUpdate: '12:45',
        trendDirection: 'WORSENING',
        healthAdvisory: 'EVERYONE',
        complianceStatus: 'EXCEEDANCE',
        dataQuality: 'VALIDATED',
        forecastTrend: 'DETERIORATING'
      },
      {
        stationName: 'London Air Quality Network',
        stationId: 'AQS-LN-001',
        location: 'London, UK',
        coordinates: '51.5074°N, 0.1278°W',
        status: 'OPERATIONAL',
        airQualityIndex: 42,
        aqiCategory: 'GOOD',
        primaryPollutant: 'NO2',
        pm25: 8.9,
        pm10: 16.3,
        ozone: 0.089,
        no2: 38.7,
        so2: 6.1,
        co: 0.8,
        temperature: 12.8,
        humidity: 81,
        windSpeed: 18.7,
        windDirection: 'W',
        visibility: 12.0,
        lastUpdate: '12:45',
        trendDirection: 'STABLE',
        healthAdvisory: 'NONE',
        complianceStatus: 'COMPLIANT',
        dataQuality: 'VALIDATED',
        forecastTrend: 'STABLE'
      }
    ],
    waterQualityMonitoring: [
      {
        monitoringPoint: 'Mississippi River - New Orleans',
        pointId: 'WQ-MS-001',
        location: 'Louisiana, USA',
        coordinates: '29.9511°N, 90.0715°W',
        waterBody: 'Mississippi River',
        status: 'OPERATIONAL',
        waterQualityIndex: 76,
        wqiCategory: 'GOOD',
        ph: 7.8,
        dissolvedOxygen: 6.2,
        turbidity: 12.3,
        conductivity: 485,
        temperature: 21.5,
        totalNitrogen: 1.24,
        totalPhosphorus: 0.087,
        eColiCount: 45,
        chemicalOxygenDemand: 18.7,
        biologicalOxygenDemand: 12.3,
        totalSuspendedSolids: 23.4,
        lastUpdate: '12:30',
        trendDirection: 'IMPROVING',
        complianceStatus: 'COMPLIANT',
        usageRestrictions: 'NONE',
        ecosystemHealth: 'STABLE',
        pollutionSources: 'AGRICULTURAL RUNOFF'
      },
      {
        monitoringPoint: 'Thames River - London Bridge',
        pointId: 'WQ-TH-001',
        location: 'London, UK',
        coordinates: '51.5081°N, 0.0877°W',
        waterBody: 'River Thames',
        status: 'OPERATIONAL',
        waterQualityIndex: 82,
        wqiCategory: 'EXCELLENT',
        ph: 7.6,
        dissolvedOxygen: 8.9,
        turbidity: 6.7,
        conductivity: 623,
        temperature: 14.2,
        totalNitrogen: 2.15,
        totalPhosphorus: 0.156,
        eColiCount: 12,
        chemicalOxygenDemand: 14.2,
        biologicalOxygenDemand: 8.7,
        totalSuspendedSolids: 11.8,
        lastUpdate: '12:30',
        trendDirection: 'STABLE',
        complianceStatus: 'COMPLIANT',
        usageRestrictions: 'NONE',
        ecosystemHealth: 'IMPROVING',
        pollutionSources: 'URBAN RUNOFF'
      },
      {
        monitoringPoint: 'Ganges River - Varanasi',
        pointId: 'WQ-GN-001',
        location: 'Uttar Pradesh, India',
        coordinates: '25.3176°N, 82.9739°E',
        waterBody: 'River Ganges',
        status: 'OPERATIONAL',
        waterQualityIndex: 34,
        wqiCategory: 'POOR',
        ph: 8.2,
        dissolvedOxygen: 3.1,
        turbidity: 45.6,
        conductivity: 890,
        temperature: 26.8,
        totalNitrogen: 4.87,
        totalPhosphorus: 0.345,
        eColiCount: 2340,
        chemicalOxygenDemand: 67.8,
        biologicalOxygenDemand: 45.6,
        totalSuspendedSolids: 78.9,
        lastUpdate: '12:30',
        trendDirection: 'CRITICAL',
        complianceStatus: 'NON-COMPLIANT',
        usageRestrictions: 'RECREATIONAL CONTACT',
        ecosystemHealth: 'STRESSED',
        pollutionSources: 'INDUSTRIAL DISCHARGE, SEWAGE'
      }
    ],
    climateMonitoring: [
      {
        stationName: 'Mauna Loa Observatory',
        stationId: 'CLM-MLO-001',
        location: 'Hawaii, USA',
        coordinates: '19.5362°N, 155.5763°W',
        monitoringType: 'Atmospheric CO2',
        status: 'OPERATIONAL',
        co2Concentration: 421.34,
        co2Trend: 'INCREASING',
        weeklyChange: 0.67,
        yearlyChange: 2.45,
        temperature: 12.8,
        pressure: 679.2,
        humidity: 67,
        windSpeed: 15.2,
        windDirection: 'ENE',
        dataQuality: 'EXCELLENT',
        recordingFrequency: 'HOURLY',
        lastCalibration: '2026-02-15',
        historicalContext: 'HIGHEST ON RECORD',
        globalImplication: 'CLIMATE CHANGE ACCELERATION',
        researchPrograms: 'GLOBAL CARBON CYCLE',
        internationalNetwork: 'NOAA GML'
      },
      {
        stationName: 'Antarctica Research Station',
        stationId: 'CLM-ANT-001',
        location: 'Antarctica',
        coordinates: '89.9999°S, 0.0000°W',
        monitoringType: 'Ice Sheet Monitoring',
        status: 'OPERATIONAL',
        iceThickness: 2156,
        iceVelocity: 245,
        surfaceTemperature: -45.6,
        snowAccumulation: 178,
        meltRate: 12.3,
        albedo: 0.84,
        seaIceExtent: 14.2,
        glacierRetreat: 23.4,
        dataQuality: 'EXCELLENT',
        recordingFrequency: 'CONTINUOUS',
        lastCalibration: '2026-01-20',
        historicalContext: 'ACCELERATING LOSS',
        globalImplication: 'SEA LEVEL RISE',
        researchPrograms: 'ICE SHEET DYNAMICS',
        internationalNetwork: 'ANTARCTIC TREATY'
      },
      {
        stationName: 'Amazon Rainforest Observatory',
        stationId: 'CLM-AMZ-001',
        location: 'Brazil',
        coordinates: '3.1190°S, 60.0217°W',
        monitoringType: 'Forest Carbon Flux',
        status: 'OPERATIONAL',
        carbonSequestration: 4.2,
        deforestationRate: 0.023,
        biomass: 456,
        leafAreaIndex: 6.8,
        soilRespiration: 2.1,
        canopyTemperature: 28.9,
        soilMoisture: 0.34,
        precipitationFlux: 2.1,
        dataQuality: 'EXCELLENT',
        recordingFrequency: 'CONTINUOUS',
        lastCalibration: '2026-03-01',
        historicalContext: 'CARBON SOURCE RISK',
        globalImplication: 'CLIMATE FEEDBACK',
        researchPrograms: 'TROPICAL ECOLOGY',
        internationalNetwork: 'AMAZON COOPERATION'
      }
    ],
    sustainabilityMetrics: [
      {
        region: 'European Union',
        regionCode: 'EU-27',
        sustainability: 'LEADING',
        renewableEnergy: 42.3,
        carbonIntensity: 285,
        carbonReduction: -32.5,
        circularEconomy: 67.8,
        wasteRecycling: 47.8,
        waterEfficiency: 78.9,
        biodiversityProtection: 72.1,
        sustainableTrans: 34.6,
        greenBuilding: 56.7,
        esgCompliance: 89.4,
        sustainabilityGoals: '2030 NET ZERO',
        keyInitiatives: 'GREEN DEAL, FIT FOR 55',
        performanceTrend: 'IMPROVING',
        globalRanking: 1,
        certificationLevel: 'GOLD',
        investmentLevel: '€1.8T',
        regulatoryFramework: 'EU TAXONOMY'
      },
      {
        region: 'Nordic Countries',
        regionCode: 'NORDIC',
        sustainability: 'EXCELLENT',
        renewableEnergy: 89.3,
        carbonIntensity: 78,
        carbonReduction: -67.8,
        circularEconomy: 84.5,
        wasteRecycling: 67.9,
        waterEfficiency: 92.1,
        biodiversityProtection: 88.7,
        sustainableTrans: 78.4,
        greenBuilding: 79.3,
        esgCompliance: 95.6,
        sustainabilityGoals: '2030 CARBON NEUTRAL',
        keyInitiatives: 'NORDIC COOPERATION',
        performanceTrend: 'LEADING',
        globalRanking: 1,
        certificationLevel: 'PLATINUM',
        investmentLevel: '€456B',
        regulatoryFramework: 'NORDIC MODEL'
      },
      {
        region: 'United States',
        regionCode: 'USA',
        sustainability: 'IMPROVING',
        renewableEnergy: 23.7,
        carbonIntensity: 489,
        carbonReduction: -16.8,
        circularEconomy: 35.4,
        wasteRecycling: 32.1,
        waterEfficiency: 56.7,
        biodiversityProtection: 45.8,
        sustainableTrans: 23.4,
        greenBuilding: 34.9,
        esgCompliance: 67.8,
        sustainabilityGoals: '2050 NET ZERO',
        keyInitiatives: 'IRA, CLEAN ENERGY',
        performanceTrend: 'ACCELERATING',
        globalRanking: 15,
        certificationLevel: 'SILVER',
        investmentLevel: '$1.2T',
        regulatoryFramework: 'STATE LEADERSHIP'
      }
    ],
    environmentalAlerts: [
      {
        type: 'CRITICAL',
        category: 'Air Quality Emergency',
        message: 'Hazardous air quality detected in Delhi - PM2.5 levels exceed 300 µg/m³',
        location: 'Delhi, India',
        coordinates: '28.7041°N, 77.1025°E',
        pollutant: 'PM2.5',
        concentration: 347.8,
        healthImpact: 'Emergency conditions - all outdoor activities discouraged',
        severity: 'HAZARDOUS',
        timestamp: '12:15',
        detectedBy: 'CPCB Air Quality Network',
        recommendation: 'Stay indoors, use air purifiers, avoid outdoor exercise',
        affectedPopulation: '32M RESIDENTS',
        emergencyResponse: 'POLLUTION CONTROL MEASURES',
        trafficRestrictions: 'ODD-EVEN SCHEME',
        schoolClosure: 'RECOMMENDED',
        industrialActions: 'SHUTDOWN NON-ESSENTIAL',
        forecastDuration: '3-5 DAYS',
        meteorologicalFactors: 'STAGNANT CONDITIONS',
        sourcesContribution: 'VEHICULAR 40%, INDUSTRIAL 35%'
      },
      {
        type: 'HIGH',
        category: 'Water Pollution',
        message: 'Oil spill detected in Gulf of Mexico - containment operations initiated',
        location: 'Gulf of Mexico',
        coordinates: '28.5°N, 89.5°W',
        pollutant: 'Crude Oil',
        spillVolume: 12500,
        affectedArea: '156 square km',
        severity: 'MAJOR',
        timestamp: '11:30',
        detectedBy: 'Satellite Monitoring System',
        recommendation: 'Marine traffic restriction, wildlife protection measures',
        affectedSpecies: 'SEA TURTLES, DOLPHINS, BIRDS',
        coastlineRisk: 'HIGH',
        containmentStatus: 'DEPLOYING BOOMS',
        recoveryOperations: 'SKIMMER VESSELS ACTIVE',
        dispersantUse: 'UNDER EVALUATION',
        weatherConditions: 'FAVORABLE FOR CONTAINMENT',
        estimatedCleanup: '45-60 DAYS',
        economicImpact: '$245M ESTIMATED'
      },
      {
        type: 'MEDIUM',
        category: 'Climate Anomaly',
        message: 'Unprecedented temperature spike in Arctic - 15°C above seasonal average',
        location: 'Arctic Ocean',
        coordinates: '85°N, 0°W',
        anomalyType: 'Temperature Extreme',
        temperatureDifference: 15.2,
        currentTemperature: -5.8,
        seasonalAverage: -21.0,
        severity: 'UNPRECEDENTED',
        timestamp: '10:45',
        detectedBy: 'Arctic Weather Stations',
        recommendation: 'Accelerated ice melt monitoring, ecosystem assessment',
        iceImpact: 'RAPID MELTING OBSERVED',
        wildlifeImpact: 'POLAR BEAR HABITAT LOSS',
        globalImplications: 'ACCELERATED SEA LEVEL RISE',
        researchResponse: 'EMERGENCY FIELD STUDIES',
        climateFeedback: 'ALBEDO REDUCTION',
        durationForecast: '7-14 DAYS',
        historicalComparison: 'HOTTEST ON RECORD',
        attributionAnalysis: 'CLIMATE CHANGE 95% LIKELY'
      },
      {
        type: 'INFO',
        category: 'Conservation Success',
        message: 'Great Barrier Reef shows signs of recovery - coral coverage increases 12%',
        location: 'Great Barrier Reef, Australia',
        coordinates: '18.2871°S, 147.6992°E',
        improvementType: 'Ecosystem Recovery',
        coverageIncrease: 12.4,
        currentCoverage: 34.7,
        recoveryRate: 'SIGNIFICANT',
        timestamp: '09:30',
        detectedBy: 'Marine Monitoring Network',
        conservationActions: 'Water quality improvement, fishing restrictions',
        speciesRecovery: 'HARD CORALS, FISH DIVERSITY',
        threatReduction: 'IMPROVED WATER QUALITY',
        protectionMeasures: 'MARINE PARK ZONING',
        researchPrograms: 'CORAL RESTORATION',
        touristicManagement: 'SUSTAINABLE PRACTICES',
        climateResilience: 'ADAPTATION STRATEGIES',
        economicValue: '$6.4B ANNUALLY',
        globalSignificance: 'WORLD HERITAGE SITE'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        stationsOperational: 234567,
        dataPointsCollected: 2345678,
        alertsGenerated: 15,
        qualityChecks: 45678,
        complianceRate: 94.7,
        airQualityAverage: 67,
        waterQualityAverage: 78,
        co2Trend: 'INCREASING'
      },
      {
        period: 'Last 24 Hours',
        stationsOperational: 234234,
        dataPointsCollected: 56234567,
        alertsGenerated: 234,
        qualityChecks: 987654,
        complianceRate: 94.2,
        airQualityAverage: 69,
        waterQualityAverage: 76,
        co2Trend: 'INCREASING'
      },
      {
        period: 'Last 7 Days',
        stationsOperational: 233987,
        dataPointsCollected: 378456789,
        alertsGenerated: 1567,
        qualityChecks: 6543210,
        complianceRate: 93.8,
        airQualityAverage: 72,
        waterQualityAverage: 74,
        co2Trend: 'INCREASING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnvironmentalData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        environmentalOverview: {
          ...prev.environmentalOverview,
          co2Levels: Math.max(420.0, Math.min(422.0, prev.environmentalOverview.co2Levels + (Math.random() - 0.5) * 0.1)),
          globalTemperature: Math.max(1.0, Math.min(1.5, prev.environmentalOverview.globalTemperature + (Math.random() - 0.5) * 0.05))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'OFFLINE': return 'text-red-400 bg-red-400/20';
      case 'GOOD': return 'text-green-400 bg-green-400/20';
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20';
      case 'UNHEALTHY': return 'text-orange-400 bg-orange-400/20';
      case 'HAZARDOUS': return 'text-red-400 bg-red-400/20';
      case 'EXCELLENT': return 'text-blue-400 bg-blue-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      case 'LEADING': return 'text-green-400 bg-green-400/20';
      case 'IMPROVING': return 'text-cyan-400 bg-cyan-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-green-500 bg-green-900/30 text-green-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'IMPROVING': return 'text-green-400';
      case 'STABLE': return 'text-yellow-400';
      case 'WORSENING': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      case 'INCREASING': return 'text-red-400';
      case 'DECREASING': return 'text-green-400';
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
  const formatCO2 = (co2) => `${co2.toFixed(1)} ppm`;
  const formatTemperature = (temp) => `${temp.toFixed(1)}°C`;

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Environmental Technology Intelligence Center</h1>
              <p className="text-green-300">Environmental monitoring & sustainability analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{environmentalData.currentTime}</div>
            <div className="text-green-300">Environmental Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Environmental Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Stations
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(environmentalData.environmentalOverview.operationalSensors)}</div>
            <div className="text-green-300 text-sm">{formatNumber(environmentalData.environmentalOverview.monitoringStations)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(environmentalData.environmentalOverview.globalCoverage)}</div>
            <div className="text-blue-300 text-sm">Global</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wind className="w-5 h-5 text-cyan-400 mr-2" />
                CO₂ Level
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCO2(environmentalData.environmentalOverview.co2Levels)}</div>
            <div className="text-cyan-300 text-sm">Atmospheric</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sun className="w-5 h-5 text-orange-400 mr-2" />
                Temperature
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">+{formatTemperature(environmentalData.environmentalOverview.globalTemperature)}</div>
            <div className="text-orange-300 text-sm">Anomaly</div>
          </div>
        </div>

        {/* Air Quality & Water Quality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wind className="w-5 h-5 text-cyan-400 mr-2" />
              Air Quality Monitoring
            </h3>
            <div className="space-y-4">
              {environmentalData.airQualityMonitoring.map((station, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{station.stationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(station.aqiCategory)}`}>
                        {station.aqiCategory}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{station.location}</div>
                    <div className="text-blue-400">AQI: {station.airQualityIndex}</div>
                    <div className="text-green-400">{station.stationId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">PM2.5: {station.pm25} µg/m³</div>
                    <div className="text-purple-400">PM10: {station.pm10} µg/m³</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">O₃: {station.ozone} ppm</div>
                    <div className="text-pink-400">NO₂: {station.no2} ppb</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Air Quality Index</span>
                      <span className={getTrendColor(station.trendDirection)}>{station.airQualityIndex}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          station.airQualityIndex <= 50 ? 'bg-green-400' :
                          station.airQualityIndex <= 100 ? 'bg-yellow-400' :
                          station.airQualityIndex <= 150 ? 'bg-orange-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${Math.min(station.airQualityIndex, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Primary: {station.primaryPollutant}</div>
                    <div className="text-indigo-400">Advisory: {station.healthAdvisory}</div>
                    <div className="text-cyan-400">Wind: {station.windSpeed} km/h {station.windDirection}</div>
                    <div className="text-green-400">Trend: <span className={getTrendColor(station.trendDirection)}>{station.trendDirection}</span></div>
                    <div className="text-blue-400">Compliance: {station.complianceStatus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Droplet className="w-5 h-5 text-blue-400 mr-2" />
              Water Quality Monitoring
            </h3>
            <div className="space-y-4">
              {environmentalData.waterQualityMonitoring.map((point, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{point.monitoringPoint}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(point.wqiCategory)}`}>
                        {point.wqiCategory}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{point.location}</div>
                    <div className="text-blue-400">WQI: {point.waterQualityIndex}</div>
                    <div className="text-green-400">{point.pointId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">pH: {point.ph}</div>
                    <div className="text-purple-400">DO: {point.dissolvedOxygen} mg/L</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Turbidity: {point.turbidity} NTU</div>
                    <div className="text-pink-400">Temp: {point.temperature}°C</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Water Quality Index</span>
                      <span className={getTrendColor(point.trendDirection)}>{point.waterQualityIndex}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          point.waterQualityIndex >= 80 ? 'bg-green-400' :
                          point.waterQualityIndex >= 60 ? 'bg-yellow-400' :
                          point.waterQualityIndex >= 40 ? 'bg-orange-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${point.waterQualityIndex}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Body: {point.waterBody}</div>
                    <div className="text-indigo-400">E.coli: {point.eColiCount} CFU/100ml</div>
                    <div className="text-cyan-400">Ecosystem: {point.ecosystemHealth}</div>
                    <div className="text-green-400">Trend: <span className={getTrendColor(point.trendDirection)}>{point.trendDirection}</span></div>
                    <div className="text-blue-400">Sources: {point.pollutionSources}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Climate Monitoring & Sustainability Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-blue-400 mr-2" />
              Climate Monitoring Networks
            </h3>
            <div className="space-y-4">
              {environmentalData.climateMonitoring.map((station, index) => (
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
                    <div className="text-cyan-400">{station.location}</div>
                    <div className="text-blue-400">{station.monitoringType}</div>
                    <div className="text-green-400">{station.stationId}</div>
                  </div>
                  
                  {station.co2Concentration && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">CO₂: {station.co2Concentration} ppm</div>
                      <div className="text-purple-400">Trend: <span className={getTrendColor(station.co2Trend)}>{station.co2Trend}</span></div>
                    </div>
                  )}
                  
                  {station.iceThickness && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Ice: {station.iceThickness} m</div>
                      <div className="text-orange-400">Melt: {station.meltRate} cm/year</div>
                    </div>
                  )}
                  
                  {station.carbonSequestration && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Carbon: {station.carbonSequestration} tC/ha/yr</div>
                      <div className="text-red-400">Deforest: {formatPercentage(station.deforestationRate)}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Quality: {station.dataQuality}</div>
                    <div className="text-indigo-400">Historical: {station.historicalContext}</div>
                    <div className="text-cyan-400">Implication: {station.globalImplication}</div>
                    <div className="text-green-400">Research: {station.researchPrograms}</div>
                    <div className="text-blue-400">Network: {station.internationalNetwork}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TreePine className="w-5 h-5 text-green-400 mr-2" />
              Sustainability Performance
            </h3>
            <div className="space-y-4">
              {environmentalData.sustainabilityMetrics.map((region, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{region.region}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(region.sustainability)}`}>
                        {region.sustainability}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{region.regionCode}</div>
                    <div className="text-blue-400">Rank: #{region.globalRanking}</div>
                    <div className="text-green-400">{region.certificationLevel}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Renewable: {formatPercentage(region.renewableEnergy)}</div>
                    <div className="text-purple-400">Recycling: {formatPercentage(region.wasteRecycling)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Carbon: {region.carbonReduction > 0 ? '+' : ''}{formatPercentage(region.carbonReduction)}</div>
                    <div className="text-pink-400">Circular: {formatPercentage(region.circularEconomy)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>ESG Compliance</span>
                      <span>{formatPercentage(region.esgCompliance)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${region.esgCompliance}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Goals: {region.sustainabilityGoals}</div>
                    <div className="text-indigo-400">Initiatives: {region.keyInitiatives}</div>
                    <div className="text-cyan-400">Investment: {region.investmentLevel}</div>
                    <div className="text-green-400">Trend: <span className={getTrendColor(region.performanceTrend)}>{region.performanceTrend}</span></div>
                    <div className="text-blue-400">Framework: {region.regulatoryFramework}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
            Environmental Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {environmentalData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Stations: {formatNumber(metrics.stationsOperational)}</div>
                  <div className="text-green-400">Data Points: {formatNumber(metrics.dataPointsCollected)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Alerts: {metrics.alertsGenerated}</div>
                  <div className="text-yellow-400">QC Checks: {formatNumber(metrics.qualityChecks)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Air Quality: {metrics.airQualityAverage}</div>
                  <div className="text-orange-400">Water Quality: {metrics.waterQualityAverage}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Compliance: {formatPercentage(metrics.complianceRate)}</div>
                  <div className={`${getTrendColor(metrics.co2Trend)}`}>CO₂: {metrics.co2Trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Environmental System Alerts
          </h3>
          <div className="space-y-4">
            {environmentalData.environmentalAlerts.map((alert, index) => (
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
                  {alert.pollutant && <div className="text-cyan-400">Pollutant: {alert.pollutant}</div>}
                  {alert.concentration && <div className="text-orange-400">Level: {alert.concentration} µg/m³</div>}
                  {alert.spillVolume && <div className="text-red-400">Volume: {alert.spillVolume} barrels</div>}
                  {alert.affectedArea && <div className="text-purple-400">Area: {alert.affectedArea}</div>}
                  {alert.temperatureDifference && <div className="text-yellow-400">Anomaly: +{alert.temperatureDifference}°C</div>}
                  {alert.coverageIncrease && <div className="text-green-400">Recovery: +{alert.coverageIncrease}%</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.healthImpact || alert.affectedSpecies || alert.iceImpact || alert.speciesRecovery}
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