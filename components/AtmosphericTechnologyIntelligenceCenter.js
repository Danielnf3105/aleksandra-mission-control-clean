// Atmospheric Technology Intelligence Center - Weather & Aviation Systems Analytics
import { useState, useEffect } from 'react';
import { Cloud, Wind, Plane, Thermometer, Eye, Activity, BarChart3, Settings, Lock, AlertTriangle, Zap, CloudRain, CloudSnow, Sun } from 'lucide-react';

export default function AtmosphericTechnologyIntelligenceCenter() {
  const [atmosphericData, setAtmosphericData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    atmosphericOverview: {
      activeStations: 12847,
      weatherSensors: 45623,
      operationalSensors: 43189,
      atmosphericSatellites: 156,
      aviationFlights: 8934,
      activeFlights: 8456,
      weatherAlerts: 234,
      forecastAccuracy: 94.7,
      dataUplink: 98.9,
      systemsOperational: 96.8,
      atmosphericCoverage: 89.4,
      climateStations: 2456,
      airQualityMonitors: 1234,
      precipitationGauges: 3456,
      windProfiling: 567,
      lightningDetectors: 890,
      ozoneMeasurement: 234,
      carbonMonitoring: 345
    },
    weatherSystems: [
      {
        systemName: 'Hurricane Isabel',
        systemId: 'ATL-2026-14',
        classification: 'Category 3 Hurricane',
        status: 'ACTIVE',
        windSpeed: 185,
        pressure: 958,
        location: '32.4°N, 65.8°W',
        movement: 'NNW at 15 km/h',
        eyeWall: 'WELL DEFINED',
        rainBands: 'INTENSE',
        stormSurge: '3.5m predicted',
        landfall: 'Bermuda - 18 hours',
        affectedPopulation: 65000,
        evacuationZones: 'A, B, C',
        emergencyResponse: 'LEVEL 3',
        trackingAccuracy: 'HIGH',
        intensityTrend: 'WEAKENING',
        satelliteTracking: 'CONTINUOUS',
        aircraftReconnaissance: 'SCHEDULED',
        weatherBuoys: 12,
        coastalWarnings: 'ACTIVE'
      },
      {
        systemName: 'Arctic Vortex',
        systemId: 'ARC-2026-03',
        classification: 'Polar Vortex',
        status: 'EXPANDING',
        windSpeed: 78,
        pressure: 1045,
        location: '75.2°N, 105.0°W',
        movement: 'Southward expansion',
        coldCore: 'INTENSE',
        jetStreamDistortion: 'SEVERE',
        temperatureDrop: '-35°C anomaly',
        affectedArea: '2.3M km²',
        durationForecast: '7-10 days',
        energyDemandImpact: '+67% heating',
        agriculturalRisk: 'CRITICAL',
        transportDisruption: 'SEVERE',
        healthAdvisory: 'EXTREME COLD',
        stratosphericWarming: 'OBSERVED',
        ozoneDepletion: 'MONITORED',
        climatePattern: 'NAO NEGATIVE'
      },
      {
        systemName: 'Sahara Dust Cloud',
        systemId: 'SAL-2026-07',
        classification: 'Saharan Air Layer',
        status: 'TRANSITING',
        windSpeed: 45,
        dustConcentration: 234,
        location: '18.5°N, 42.3°W',
        movement: 'W at 25 km/h',
        dustThickness: '3.2km',
        visibility: '2.1km',
        airQualityIndex: 167,
        healthRisk: 'MODERATE',
        respiratoryWarning: 'ACTIVE',
        aviationImpact: 'VISIBILITY REDUCED',
        solarRadiation: '-23% reduction',
        hurricaneSuppression: 'ACTIVE',
        coralReefNutrients: 'BENEFICIAL',
        amazonRainforest: 'PHOSPHORUS DELIVERY',
        atmosphericCleaning: 'POLLUTANT SCAVENGING'
      },
      {
        systemName: 'European Heat Dome',
        systemId: 'EUR-2026-05',
        classification: 'High Pressure System',
        status: 'INTENSIFYING',
        windSpeed: 12,
        pressure: 1032,
        location: '45.0°N, 10.0°E',
        movement: 'STATIONARY',
        temperatureAnomaly: '+12°C above average',
        heatIndex: 48,
        duration: '8 days established',
        droughtRisk: 'SEVERE',
        wildfireRisk: 'EXTREME',
        airQuality: 'POOR',
        healthWarnings: 'HEAT EMERGENCY',
        energyDemand: '+89% cooling',
        agricultureStress: 'CRITICAL',
        waterShortage: 'DEVELOPING',
        urbanHeatIsland: '+6°C cities'
      },
      {
        systemName: 'Asian Monsoon',
        systemId: 'MON-2026-12',
        classification: 'Monsoon System',
        status: 'ACTIVE',
        windSpeed: 67,
        pressure: 996,
        location: '22.3°N, 88.4°E',
        movement: 'NE progression',
        precipitationRate: '89mm/day',
        floodRisk: 'HIGH',
        soilMoisture: 'SATURATED',
        riverLevels: 'RISING',
        reservoirCapacity: '87% full',
        agriculturalBenefit: 'OPTIMAL',
        cropYieldForecast: '+23%',
        mudslideRisk: 'ELEVATED',
        trafficDisruption: 'MODERATE',
        freshwaterRecharge: 'EXCELLENT',
        airPollution: 'WASHED CLEAN'
      }
    ],
    aviationTracking: [
      {
        flightId: 'BA0117',
        aircraft: 'Boeing 787-9',
        operator: 'British Airways',
        route: 'LHR → JFK',
        status: 'EN ROUTE',
        altitude: 11887,
        speed: 903,
        heading: 285,
        location: '52.4°N, 25.8°W',
        progress: 67.3,
        departureTime: '08:30 GMT',
        arrivalTime: '14:45 EST',
        passengers: 347,
        fuel: 78.4,
        weatherConditions: 'CLEAR',
        turbulenceLevel: 'LIGHT',
        windShear: 'NONE',
        icing: 'NONE',
        visibility: '>10km',
        altimeterSetting: '30.12',
        nextWaypoint: 'MALOT',
        eta: '09:23 GMT',
        flightLevel: 'FL390'
      },
      {
        flightId: 'DL0156',
        aircraft: 'Airbus A350-900',
        operator: 'Delta Air Lines',
        route: 'ATL → CDG',
        status: 'APPROACH',
        altitude: 2134,
        speed: 267,
        heading: 95,
        location: '49.1°N, 2.6°E',
        progress: 94.7,
        departureTime: '20:15 EST',
        arrivalTime: '10:30 CET',
        passengers: 298,
        fuel: 23.8,
        weatherConditions: 'OVERCAST',
        turbulenceLevel: 'MODERATE',
        windShear: 'REPORTED',
        icing: 'LIGHT',
        visibility: '4.8km',
        altimeterSetting: '29.92',
        nextWaypoint: 'ILS RWY 26R',
        eta: '10:28 CET',
        flightLevel: 'DESCENDING'
      },
      {
        flightId: 'QF0012',
        aircraft: 'Airbus A380-800',
        operator: 'Qantas Airways',
        route: 'SYD → LAX',
        status: 'CRUISE',
        altitude: 12192,
        speed: 945,
        heading: 58,
        location: '28.7°S, 165.4°W',
        progress: 34.2,
        departureTime: '21:50 AEDT',
        arrivalTime: '15:05 PST',
        passengers: 525,
        fuel: 89.6,
        weatherConditions: 'CLEAR',
        turbulenceLevel: 'NONE',
        windShear: 'NONE',
        icing: 'NONE',
        visibility: '>10km',
        altimeterSetting: '30.18',
        nextWaypoint: 'NZANC',
        eta: '14:23 GMT',
        flightLevel: 'FL400'
      },
      {
        flightId: 'LH0441',
        aircraft: 'Airbus A321neo',
        operator: 'Lufthansa',
        route: 'FRA → BCN',
        status: 'HOLDING',
        altitude: 7620,
        speed: 234,
        heading: 195,
        location: '41.3°N, 2.1°E',
        progress: 89.4,
        departureTime: '11:25 CET',
        arrivalTime: '13:40 CET',
        passengers: 186,
        fuel: 34.7,
        weatherConditions: 'THUNDERSTORMS',
        turbulenceLevel: 'SEVERE',
        windShear: 'ACTIVE',
        icing: 'MODERATE',
        visibility: '1.2km',
        altimeterSetting: '29.85',
        nextWaypoint: 'HOLDING PATTERN',
        eta: 'DELAYED +45min',
        flightLevel: 'FL250'
      },
      {
        flightId: 'SQ0317',
        aircraft: 'Boeing 777-300ER',
        operator: 'Singapore Airlines',
        route: 'SIN → LHR',
        status: 'DIVERTED',
        altitude: 8534,
        speed: 425,
        heading: 315,
        location: '32.8°N, 51.4°E',
        progress: 45.8,
        departureTime: '02:35 SGT',
        arrivalTime: 'TBD',
        passengers: 312,
        fuel: 67.3,
        weatherConditions: 'SANDSTORM',
        turbulenceLevel: 'EXTREME',
        windShear: 'SEVERE',
        icing: 'NONE',
        visibility: '0.3km',
        altimeterSetting: '29.76',
        nextWaypoint: 'IKA TEHRAN',
        eta: 'EMERGENCY LANDING',
        flightLevel: 'EMERGENCY DESCENT'
      }
    ],
    weatherStations: [
      {
        stationId: 'EGLL',
        stationName: 'London Heathrow',
        stationType: 'Airport Weather Station',
        location: '51.4775°N, 0.4614°W',
        status: 'OPERATIONAL',
        temperature: 12.4,
        humidity: 67.8,
        pressure: 1013.2,
        windSpeed: 15.7,
        windDirection: 270,
        visibility: 8.2,
        cloudCover: 'SCT 2500ft',
        precipitation: 0.0,
        dewPoint: 6.1,
        altimeter: 29.92,
        densityAltitude: 76,
        observations: 8764,
        dataQuality: 'EXCELLENT',
        lastUpdate: '12:00 GMT',
        automatedReports: 'METAR/TAF'
      },
      {
        stationId: 'KJFK',
        stationName: 'New York JFK',
        stationType: 'International Airport',
        location: '40.6398°N, 73.7789°W',
        status: 'OPERATIONAL',
        temperature: 18.9,
        humidity: 45.2,
        pressure: 1018.7,
        windSpeed: 23.4,
        windDirection: 240,
        visibility: 15.0,
        cloudCover: 'CLR',
        precipitation: 0.0,
        dewPoint: 7.2,
        altimeter: 30.08,
        densityAltitude: 124,
        observations: 8760,
        dataQuality: 'EXCELLENT',
        lastUpdate: '11:51 UTC',
        automatedReports: 'ASOS/AWOS'
      },
      {
        stationId: 'RJAA',
        stationName: 'Tokyo Narita',
        stationType: 'International Hub',
        location: '35.7647°N, 140.3864°E',
        status: 'OPERATIONAL',
        temperature: 24.7,
        humidity: 78.4,
        pressure: 1009.3,
        windSpeed: 12.6,
        windDirection: 185,
        visibility: 6.4,
        cloudCover: 'BKN 1800ft',
        precipitation: 2.3,
        dewPoint: 20.8,
        altimeter: 29.80,
        densityAltitude: 67,
        observations: 8745,
        dataQuality: 'GOOD',
        lastUpdate: '12:00 JST',
        automatedReports: 'JMA SYNOP'
      },
      {
        stationId: 'YSSY',
        stationName: 'Sydney Kingsford Smith',
        stationType: 'Coastal Airport',
        location: '33.9461°S, 151.1772°E',
        status: 'OPERATIONAL',
        temperature: 21.3,
        humidity: 56.7,
        pressure: 1016.8,
        windSpeed: 18.9,
        windDirection: 135,
        visibility: 12.8,
        cloudCover: 'SCT 3000ft',
        precipitation: 0.0,
        dewPoint: 12.4,
        altimeter: 30.02,
        densityAltitude: -23,
        observations: 8751,
        dataQuality: 'EXCELLENT',
        lastUpdate: '12:30 AEDT',
        automatedReports: 'BoM AUTO'
      }
    ],
    atmosphericResearch: [
      {
        projectName: 'Global Climate Monitoring',
        projectId: 'GCM-2026',
        institution: 'NOAA/NASA',
        funding: '$234M',
        duration: 'Ongoing',
        progress: 67.8,
        objective: 'Climate change tracking',
        satelliteNetwork: 23,
        groundStations: 456,
        dataStreams: 12456,
        modelAccuracy: 94.7,
        forecastRange: '15 days',
        climateModels: 'ECMWF/GFS/NAM',
        carbonTracking: 'PPM MONITORING',
        temperatureAnomaly: '+1.23°C global',
        seaLevelRise: '3.4mm/year',
        arcticIceLoss: '13% annual',
        ozoneRecovery: 'IMPROVING',
        extremeEvents: '+23% frequency'
      },
      {
        projectName: 'Aviation Weather Safety',
        projectId: 'AWS-2026',
        institution: 'ICAO/WMO',
        funding: '$89M',
        duration: '5 years',
        progress: 78.4,
        objective: 'Flight safety enhancement',
        weatherStations: 1234,
        aircraftReports: 45678,
        turbulencePrediction: '89% accuracy',
        windShearDetection: 'AUTOMATED',
        icingForecasts: 'REAL-TIME',
        convectiveOutlooks: '6 hour lead',
        NOTAMs: 'AUTOMATED',
        meteorologicalImpact: '-34% delays',
        safetyImprovement: '+67%',
        fuelEfficiency: '+12%',
        routeOptimization: 'AI-ENHANCED'
      },
      {
        projectName: 'Atmospheric Chemistry',
        projectId: 'ACH-2026',
        institution: 'ESA/CNES',
        funding: '$156M',
        duration: '8 years',
        progress: 45.3,
        objective: 'Air quality monitoring',
        satelliteSensors: 67,
        groundNetworks: 234,
        pollutantTracking: '24/7',
        ozoneMapping: 'GLOBAL',
        aerosolAnalysis: 'REAL-TIME',
        greenhouseGases: 'PPB PRECISION',
        airQualityIndex: 'URBAN FOCUS',
        healthCorrelation: 'EPIDEMIOLOGY',
        policySupport: 'REGULATORY',
        emissionSources: 'ATTRIBUTION',
        treatmentEfficiency: '+45%'
      }
    ],
    atmosphericAlerts: [
      {
        type: 'CRITICAL',
        category: 'Severe Weather',
        message: 'Hurricane Isabel approaching Bermuda - Category 3 with 185 km/h winds, landfall in 18 hours',
        location: 'North Atlantic, Bermuda approach',
        severity: 'EXTREME',
        windSpeed: '185 km/h sustained, 220 km/h gusts',
        impact: '65,000 residents at risk, 3.5m storm surge predicted, power outages expected',
        timestamp: '12:15',
        detectedBy: 'National Hurricane Center',
        recommendation: 'Complete evacuation of zones A, B, C. Secure all aircraft. Emergency shelters open.',
        evacuationStatus: 'MANDATORY',
        emergencyResponse: 'LEVEL 3 ACTIVATION',
        coastalWarnings: 'HURRICANE WARNING',
        marineConditions: 'SEAS 8-12 METERS',
        aviationImpact: 'AIRPORT CLOSURE 14:00 GMT',
        powerGrid: 'UTILITY CREWS STAGED'
      },
      {
        type: 'HIGH',
        category: 'Aviation Emergency',
        message: 'Singapore Airlines SQ317 emergency diversion due to severe sandstorm - visibility 300m',
        aircraft: 'SQ317 Boeing 777-300ER',
        diversion: 'Tehran IKA emergency landing authorized',
        impact: '312 passengers affected, extreme turbulence reported, visibility near zero',
        severity: 'HIGH',
        timestamp: '12:08',
        detectedBy: 'Tehran ATC',
        recommendation: 'Priority landing clearance, emergency services on standby, passenger welfare',
        weatherCondition: 'SANDSTORM VISIBILITY 300m',
        turbulence: 'EXTREME REPORTED',
        fuelState: '67% remaining sufficient',
        emergencyServices: 'FULL ACTIVATION',
        passengerStatus: 'NO INJURIES REPORTED',
        alternateAirports: 'IKA PRIMARY, OIII BACKUP'
      },
      {
        type: 'MEDIUM',
        category: 'Air Quality',
        message: 'Sahara dust cloud over Caribbean - AQI 167, respiratory warning for sensitive groups',
        location: 'Caribbean Basin, Lesser Antilles',
        airQualityIndex: '167 UNHEALTHY',
        impact: 'Reduced visibility 2.1km, respiratory health risk, solar radiation -23%',
        severity: 'MEDIUM',
        timestamp: '12:05',
        detectedBy: 'Caribbean Weather Center',
        recommendation: 'Indoor activities for sensitive groups, mask wearing advised, flight delays possible',
        visibility: 'REDUCED TO 2.1KM',
        healthAdvisory: 'RESPIRATORY WARNING',
        dustConcentration: '234 μg/m³',
        affectedIslands: 'BARBADOS, TRINIDAD, JAMAICA',
        duration: '3-5 DAYS EXPECTED',
        aviationImpact: 'VISIBILITY RESTRICTIONS'
      },
      {
        type: 'INFO',
        category: 'Climate Update',
        message: 'European heat dome intensifying - temperature anomaly +12°C, extreme fire weather',
        location: 'Central and Southern Europe',
        temperatureAnomaly: '+12°C above seasonal average',
        impact: 'Energy demand +89%, wildfire risk extreme, agricultural stress critical',
        heatIndex: '48°C DANGEROUS',
        timestamp: '12:00',
        detectedBy: 'ECMWF Climate Service',
        duration: 'ESTABLISHED 8 DAYS, CONTINUING',
        healthWarning: 'HEAT EMERGENCY PROTOCOLS',
        wildfireRisk: 'EXTREME - RED FLAG CONDITIONS',
        energyGrid: 'PEAK DEMAND +89% COOLING',
        waterResources: 'SHORTAGE DEVELOPING',
        agriculture: 'CROP STRESS CRITICAL',
        airQuality: 'POOR - OZONE BUILDUP'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        stationsReporting: 43189,
        observationsReceived: 156734,
        forecastsIssued: 2345,
        alertsGenerated: 45,
        flightsTracked: 8456,
        weatherUpdates: 567,
        dataAccuracy: 94.7,
        systemUptime: 99.8
      },
      {
        period: 'Last 24 Hours',
        stationsReporting: 42876,
        observationsReceived: 3456789,
        forecastsIssued: 23456,
        alertsGenerated: 234,
        flightsTracked: 87654,
        weatherUpdates: 5678,
        dataAccuracy: 93.9,
        systemUptime: 99.3
      },
      {
        period: 'Last 7 Days',
        stationsReporting: 42123,
        observationsReceived: 23456789,
        forecastsIssued: 156789,
        alertsGenerated: 1234,
        flightsTracked: 567890,
        weatherUpdates: 34567,
        dataAccuracy: 94.2,
        systemUptime: 98.9
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAtmosphericData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        atmosphericOverview: {
          ...prev.atmosphericOverview,
          dataUplink: Math.max(97.0, Math.min(99.9, prev.atmosphericOverview.dataUplink + (Math.random() - 0.5) * 1.0)),
          systemsOperational: Math.max(94.0, Math.min(98.5, prev.atmosphericOverview.systemsOperational + (Math.random() - 0.5) * 0.8)),
          forecastAccuracy: Math.max(90.0, Math.min(97.0, prev.atmosphericOverview.forecastAccuracy + (Math.random() - 0.5) * 1.2)),
          activeFlights: Math.max(8000, Math.min(9000, prev.atmosphericOverview.activeFlights + Math.floor((Math.random() - 0.5) * 50)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'EN ROUTE': return 'text-cyan-400 bg-cyan-400/20';
      case 'APPROACH': return 'text-purple-400 bg-purple-400/20';
      case 'CRUISE': return 'text-indigo-400 bg-indigo-400/20';
      case 'HOLDING': return 'text-yellow-400 bg-yellow-400/20';
      case 'DIVERTED': return 'text-red-400 bg-red-400/20';
      case 'EXPANDING': return 'text-orange-400 bg-orange-400/20';
      case 'TRANSITING': return 'text-green-400 bg-green-400/20';
      case 'INTENSIFYING': return 'text-red-400 bg-red-400/20';
      case 'WEAKENING': return 'text-yellow-400 bg-yellow-400/20';
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
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'EXTREME': return 'text-red-500';
      case 'CRITICAL': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'NONE': return 'text-green-400';
      case 'LIGHT': return 'text-yellow-400';
      case 'MODERATE': return 'text-orange-400';
      case 'SEVERE': return 'text-red-400';
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
  const formatAltitude = (altitude) => `${altitude.toLocaleString()} m`;
  const formatSpeed = (speed) => `${speed} km/h`;
  const formatTemperature = (temp) => `${temp.toFixed(1)}°C`;
  const formatPressure = (pressure) => `${pressure.toFixed(1)} hPa`;

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Atmospheric Technology Intelligence Center</h1>
              <p className="text-blue-300">Weather & aviation systems analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{atmosphericData.currentTime}</div>
            <div className="text-blue-300">Atmospheric Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Atmospheric Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                Stations
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(atmosphericData.atmosphericOverview.activeStations)}</div>
            <div className="text-blue-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Thermometer className="w-5 h-5 text-green-400 mr-2" />
                Sensors
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(atmosphericData.atmosphericOverview.operationalSensors)}</div>
            <div className="text-green-300 text-sm">{formatNumber(atmosphericData.atmosphericOverview.weatherSensors)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Plane className="w-5 h-5 text-cyan-400 mr-2" />
                Aviation
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(atmosphericData.atmosphericOverview.activeFlights)}</div>
            <div className="text-cyan-300 text-sm">Active Flights</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-yellow-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(atmosphericData.atmosphericOverview.forecastAccuracy)}</div>
            <div className="text-yellow-300 text-sm">Forecast</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(atmosphericData.atmosphericOverview.atmosphericCoverage)}</div>
            <div className="text-purple-300 text-sm">Atmospheric</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-pink-400 mr-2" />
                Systems
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatPercentage(atmosphericData.atmosphericOverview.systemsOperational)}</div>
            <div className="text-pink-300 text-sm">Operational</div>
          </div>
        </div>

        {/* Weather Systems & Aviation Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CloudRain className="w-5 h-5 text-blue-400 mr-2" />
              Active Weather Systems
            </h3>
            <div className="space-y-4">
              {atmosphericData.weatherSystems.map((system, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{system.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(system.status)}`}>
                        {system.status}
                      </span>
                      {system.intensityTrend && (
                        <span className={`text-xs ${getSeverityColor(system.intensityTrend)}`}>
                          {system.intensityTrend}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{system.classification}</div>
                    <div className="text-blue-400">ID: {system.systemId}</div>
                    <div className="text-green-400">{system.location}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Wind: {formatSpeed(system.windSpeed)}</div>
                    <div className="text-purple-400">Pressure: {formatPressure(system.pressure)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Movement: {system.movement}</div>
                    {system.landfall && (
                      <div className="text-red-400">Landfall: {system.landfall}</div>
                    )}
                    {system.temperatureAnomaly && (
                      <div className="text-red-400">Temp: {system.temperatureAnomaly}</div>
                    )}
                    {system.dustConcentration && (
                      <div className="text-yellow-400">Dust: {system.dustConcentration} μg/m³</div>
                    )}
                    {system.precipitationRate && (
                      <div className="text-blue-400">Rain: {system.precipitationRate}</div>
                    )}
                  </div>
                  
                  <div className="text-xs space-y-1">
                    {system.affectedPopulation && (
                      <div className="text-red-400">Population: {formatNumber(system.affectedPopulation)} affected</div>
                    )}
                    {system.emergencyResponse && (
                      <div className="text-orange-400">Response: {system.emergencyResponse}</div>
                    )}
                    {system.healthRisk && (
                      <div className={`${getRiskColor(system.healthRisk)}`}>Health: {system.healthRisk}</div>
                    )}
                    {system.agriculturalBenefit && (
                      <div className="text-green-400">Agriculture: {system.agriculturalBenefit}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Plane className="w-5 h-5 text-cyan-400 mr-2" />
              Aviation Flight Tracking
            </h3>
            <div className="space-y-4">
              {atmosphericData.aviationTracking.map((flight, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{flight.flightId}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(flight.status)}`}>
                        {flight.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{flight.aircraft}</div>
                    <div className="text-blue-400">{flight.operator}</div>
                    <div className="text-green-400">{flight.route}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Alt: {formatAltitude(flight.altitude)}</div>
                    <div className="text-yellow-400">Speed: {formatSpeed(flight.speed)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Heading: {flight.heading}°</div>
                    <div className="text-orange-400">Fuel: {formatPercentage(flight.fuel)}</div>
                  </div>
                  
                  {flight.progress && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Progress</span>
                        <span>{formatPercentage(flight.progress)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${flight.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Conditions: {flight.weatherConditions}</div>
                    <div className={`${getSeverityColor(flight.turbulenceLevel)}`}>Turbulence: {flight.turbulenceLevel}</div>
                    <div className="text-pink-400">Visibility: {flight.visibility}</div>
                    <div className="text-indigo-400">ETA: {flight.eta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weather Stations & Atmospheric Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wind className="w-5 h-5 text-green-400 mr-2" />
              Weather Station Network
            </h3>
            <div className="space-y-4">
              {atmosphericData.weatherStations.map((station, index) => (
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
                    <div className="text-cyan-400">{station.stationId}</div>
                    <div className="text-blue-400">{station.stationType}</div>
                    <div className="text-green-400">{station.dataQuality}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Temp: {formatTemperature(station.temperature)}</div>
                    <div className="text-purple-400">Humidity: {formatPercentage(station.humidity)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Pressure: {formatPressure(station.pressure)}</div>
                    <div className="text-orange-400">Wind: {formatSpeed(station.windSpeed)} @ {station.windDirection}°</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Visibility: {station.visibility} km</div>
                    <div className="text-pink-400">Clouds: {station.cloudCover}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Observations: {formatNumber(station.observations)}</div>
                    <div className="text-blue-400">Reports: {station.automatedReports}</div>
                    <div className="text-green-400">Updated: {station.lastUpdate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-purple-400 mr-2" />
              Atmospheric Research Projects
            </h3>
            <div className="space-y-4">
              {atmosphericData.atmosphericResearch.map((project, index) => (
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
                  
                  {project.satelliteNetwork && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Satellites: {project.satelliteNetwork}</div>
                      <div className="text-purple-400">Stations: {formatNumber(project.groundStations)}</div>
                    </div>
                  )}
                  
                  {project.weatherStations && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Stations: {formatNumber(project.weatherStations)}</div>
                      <div className="text-orange-400">Reports: {formatNumber(project.aircraftReports)}</div>
                    </div>
                  )}
                  
                  {project.satelliteSensors && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Sensors: {project.satelliteSensors}</div>
                      <div className="text-blue-400">Networks: {project.groundNetworks}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Objective: {project.objective}</div>
                    {project.modelAccuracy && (
                      <div className="text-indigo-400">Accuracy: {formatPercentage(project.modelAccuracy)}</div>
                    )}
                    {project.temperatureAnomaly && (
                      <div className="text-red-400">Temperature: {project.temperatureAnomaly}</div>
                    )}
                    {project.safetyImprovement && (
                      <div className="text-green-400">Safety: {project.safetyImprovement}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            Atmospheric Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {atmosphericData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Stations: {formatNumber(metrics.stationsReporting)}</div>
                  <div className="text-green-400">Observations: {formatNumber(metrics.observationsReceived)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Forecasts: {formatNumber(metrics.forecastsIssued)}</div>
                  <div className="text-yellow-400">Alerts: {metrics.alertsGenerated}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Flights: {formatNumber(metrics.flightsTracked)}</div>
                  <div className="text-orange-400">Updates: {formatNumber(metrics.weatherUpdates)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Accuracy: {formatPercentage(metrics.dataAccuracy)}</div>
                  <div className="text-pink-400">Uptime: {formatPercentage(metrics.systemUptime)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atmospheric Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Atmospheric Technology System Alerts
          </h3>
          <div className="space-y-4">
            {atmosphericData.atmosphericAlerts.map((alert, index) => (
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
                  {alert.aircraft && <div className="text-cyan-400">Aircraft: {alert.aircraft}</div>}
                  {alert.windSpeed && <div className="text-yellow-400">Wind: {alert.windSpeed}</div>}
                  {alert.diversion && <div className="text-orange-400">Diversion: {alert.diversion}</div>}
                  {alert.airQualityIndex && <div className="text-purple-400">AQI: {alert.airQualityIndex}</div>}
                  {alert.temperatureAnomaly && <div className="text-red-400">Temperature: {alert.temperatureAnomaly}</div>}
                  {alert.evacuationStatus && <div className="text-red-400">Evacuation: {alert.evacuationStatus}</div>}
                  {alert.emergencyServices && <div className="text-green-400">Emergency: {alert.emergencyServices}</div>}
                  {alert.healthAdvisory && <div className="text-yellow-400">Health: {alert.healthAdvisory}</div>}
                  {alert.wildfireRisk && <div className="text-red-400">Fire Risk: {alert.wildfireRisk}</div>}
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