// Transportation Technology & Logistics Intelligence Center - Transportation & Logistics Analytics
import { useState, useEffect } from 'react';
import { Truck, Plane, Ship, Car, Navigation, BarChart3, Activity, TrendingUp, Shield, Target, Monitor, MapPin } from 'lucide-react';

export default function TransportationTechnologyLogisticsIntelligenceCenter() {
  const [transportationData, setTransportationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    transportationOverview: {
      connectedVehicles: 789012345,
      logisticsPlatforms: 234567,
      transportationModes: 12,
      autonomousVehicles: 45678901,
      deliveryFleets: 8901234,
      transitSystems: 567890,
      onTimePerformance: 87.6,
      fuelEfficiency: 92.3,
      safetyScore: 98.7,
      emissionsReduction: 34.8,
      routeOptimization: 89.4,
      predictiveMaintenance: 85.9,
      supplyChainVisibility: 91.2,
      customerSatisfaction: 88.5,
      costOptimization: 28.7,
      digitalTransformation: 76.4,
      sustainabilityIndex: 73.8,
      trafficFlow: 84.2,
      lastMileEfficiency: 79.6,
      intermodalIntegration: 82.1
    },
    transportationSystems: [
      {
        systemName: 'Tesla Full Self-Driving Beta',
        systemId: 'TESLA-FSD-BETA-001',
        location: 'United States & Canada',
        systemType: 'AUTONOMOUS DRIVING',
        status: 'OPERATIONAL',
        vehiclesEquipped: 400000,
        milesAutonomous: 750000000,
        safetyRating: 99.1,
        interventionRate: 0.8,
        softwareVersion: 'V11.4.7',
        neuralNetworkSize: '48 layers',
        dataCollection: '10 billion miles',
        processingPower: '144 TOPS',
        sensorFusion: 'Camera, Radar, Ultrasonic',
        realTimeUpdates: 'Yes',
        fleetLearning: 'Enabled',
        geofencing: 'City Streets',
        weatherCapability: 'Rain, Snow, Fog',
        trafficLights: '99.7% detection',
        stopSigns: '99.9% detection',
        pedestrians: '99.8% detection',
        cyclists: '99.5% detection',
        updateFrequency: 'Every 2 weeks',
        regulatoryApproval: 'NHTSA Pending'
      },
      {
        systemName: 'Amazon Delivery Service Partner',
        systemId: 'AMAZON-DSP-002',
        location: 'Global Operations',
        systemType: 'LAST MILE DELIVERY',
        status: 'OPERATIONAL',
        deliveryVans: 75000,
        dailyPackages: 13500000,
        servicePartners: 3000,
        deliveryStations: 1500,
        routeOptimization: 94.8,
        onTimeDelivery: 89.7,
        fuelEfficiency: 87.3,
        driverSafety: 96.2,
        sustainabilityScore: 78.9,
        electricVehicles: 12000,
        deliveryDrones: 5000,
        aiRoutePlanning: 'Advanced ML',
        predictiveAnalytics: 'Package Volume',
        weatherAdaptation: 'Real-time',
        trafficIntegration: 'Google Maps API',
        customerTracking: 'Real-time GPS',
        carbonFootprint: 'Carbon Neutral 2030',
        employeeCount: 275000,
        avgDeliveryTime: '1.2 days'
      },
      {
        systemName: 'FedEx SenseAware ID',
        systemId: 'FEDEX-SENSEAWARE-003',
        location: 'Global Network',
        systemType: 'PACKAGE TRACKING',
        status: 'OPERATIONAL',
        trackingDevices: 8500000,
        packagesMonitored: 125000000,
        sensorTypes: 'GPS, Temperature, Humidity',
        batteryLife: '7 days',
        updateInterval: '15 minutes',
        geofenceAlerts: 'Enabled',
        temperatureRange: '-40°C to +85°C',
        shockDetection: '10G threshold',
        lightExposure: 'UV sensitive',
        doorOpenEvents: 'Logged',
        chainOfCustody: 'Blockchain',
        apiIntegrations: 'Customer Systems',
        dataRetention: '2 years',
        complianceStandards: 'FDA, IATA',
        insuranceCoverage: 'Automatic',
        customAlerts: 'SMS, Email',
        analyticsEngine: 'Machine Learning',
        networkCoverage: '99.2% global'
      },
      {
        systemName: 'Uber Movement Platform',
        systemId: 'UBER-MOVEMENT-004',
        location: 'Urban Areas Worldwide',
        systemType: 'MOBILITY ANALYTICS',
        status: 'OPERATIONAL',
        citiesCovered: 650,
        tripsAnalyzed: 25000000000,
        dataPoints: 5000000000,
        trafficInsights: 'Real-time',
        speedAnalysis: 'Street Level',
        travelTimeVariability: 'Statistical',
        publicDatasharing: 'City Partnerships',
        privacyProtection: 'Differential Privacy',
        updateFrequency: 'Quarterly',
        historicalData: '2009-Present',
        transportationModes: 'Car, Bike, Transit',
        urbanPlanning: 'Support Tools',
        emergencyResponse: 'Route Optimization',
        eventImpact: 'Traffic Analysis',
        airQualityCorrelation: 'Environmental',
        socioeconomicInsights: 'Mobility Equity',
        academicPartnerships: '200+ Universities',
        apiAccess: 'Researchers'
      }
    ],
    logisticsPlatforms: [
      {
        platformName: 'Maersk Integrated Logistics',
        platformId: 'MAERSK-LOGISTICS-001',
        provider: 'A.P. Moller-Maersk',
        category: 'GLOBAL SHIPPING',
        status: 'OPERATIONAL',
        globalPresence: 'WORLDWIDE',
        containersManaged: 4200000,
        portsServed: 343,
        vesselFleet: 710,
        truckingCapacity: 'Global Network',
        warehouseSpace: 9500000,
        digitalPlatform: 'Maersk.com',
        trackingCapability: 'End-to-End',
        sustainabilityTarget: 'Net Zero 2050',
        carbonEmissions: '-42% by 2030',
        greenFuelInvestment: '$7B',
        digitalBookings: '85%',
        customerPortals: '180,000 users',
        apiConnections: '15,000',
        predictiveAnalytics: 'ETA Optimization',
        supplyChainVisibility: '98.5%',
        onTimePerformance: '91.7%',
        costOptimization: '15-25%',
        customerSatisfaction: '87%'
      },
      {
        platformName: 'DHL Supply Chain',
        platformId: 'DHL-SUPPLY-CHAIN-002',
        provider: 'Deutsche Post DHL Group',
        category: 'CONTRACT LOGISTICS',
        status: 'OPERATIONAL',
        globalPresence: '220 COUNTRIES',
        warehouses: 7000,
        automatedFacilities: 420,
        roboticSystems: 12000,
        employeeCount: 380000,
        annualShipments: '1.8B',
        lastMileDelivery: 'Urban Focus',
        sustainabilityProgram: 'GoGreen Plus',
        electricVehicles: 18000,
        bicycleDelivery: '12,000 bikes',
        droneTrials: '8 countries',
        aiOptimization: 'Route Planning',
        iotSensors: '2.5M devices',
        blockchainTracking: 'Pharma Supply',
        temperatureControl: 'Cold Chain',
        securityStandards: 'TAPA Class A',
        qualityCertification: 'ISO 9001',
        dataAnalytics: 'Predictive Insights'
      },
      {
        platformName: 'UPS ORION',
        platformId: 'UPS-ORION-003',
        provider: 'United Parcel Service',
        category: 'ROUTE OPTIMIZATION',
        status: 'OPERATIONAL',
        globalPresence: 'NORTH AMERICA',
        driversOptimized: 55000,
        deliveryRoutes: 95000,
        algorithmsUsed: 'Machine Learning',
        dataProcessing: '1000 calculations/second',
        milesSaved: '400M annually',
        fuelSavings: '40M gallons',
        co2Reduction: '400,000 tons',
        deliveryStops: '20M daily',
        packageVolume: '5.2B annually',
        realTimeAdjustments: 'Traffic, Weather',
        driverInput: 'Mobile Integration',
        customerPreferences: 'Delivery Windows',
        emergencyRerouting: 'Dynamic',
        performanceMetrics: 'KPI Dashboard',
        trainingProgram: 'Driver Education',
        continuousImprovement: 'Algorithm Updates',
        costSavings: '$400M annually',
        environmentalImpact: 'Sustainability Goals'
      }
    ],
    autonomousVehicles: [
      {
        vehicleType: 'Passenger Cars',
        typeId: 'AUTONOMOUS-CARS-001',
        deploymentLevel: 'Level 2-3',
        globalFleet: 45678901,
        manufacturerLeaders: 'Tesla, Mercedes, BMW',
        keyTechnologies: 'LiDAR, Camera, Radar',
        safetyFeatures: 'Emergency Braking, Lane Keep',
        regulatoryStatus: 'Approved Markets',
        marketPenetration: 12.8,
        consumerAcceptance: 67.4,
        insuranceCoverage: 'Specialized Policies',
        dataCollection: 'Fleet Learning',
        cybersecurityMeasures: 'OTA Security',
        environmentalImpact: 'Reduced Emissions',
        economicImpact: '$87B Market',
        employmentEffects: 'Driver Transition',
        urbanPlanning: 'Smart Cities',
        futureProjections: 'Level 4 by 2030',
        challenges: 'Weather, Construction',
        opportunities: 'Mobility as Service',
        ethicalConsiderations: 'Decision Algorithms'
      },
      {
        vehicleType: 'Commercial Trucks',
        typeId: 'AUTONOMOUS-TRUCKS-002',
        deploymentLevel: 'Level 3-4',
        globalFleet: 2350000,
        manufacturerLeaders: 'Waymo, TuSimple, Embark',
        keyTechnologies: 'AI, Computer Vision',
        safetyFeatures: 'Fatigue Monitoring',
        regulatoryStatus: 'Highway Approved',
        marketPenetration: 3.7,
        fuelEfficiency: '+15% improvement',
        operationalBenefits: '24/7 Operation',
        freightCapacity: 'Increased Utilization',
        driverShortage: 'Solution Provider',
        maintenanceReduction: 'Predictive Systems',
        routeOptimization: 'AI Planning',
        platooning: 'Convoy Technology',
        emissionsReduction: '20% CO2 savings',
        costSavings: '30-40% operational',
        safetImprovement: '90% accident reduction',
        infrastructureRequirements: 'V2I Communication',
        timelineDeployment: 'Full scale 2028'
      },
      {
        vehicleType: 'Public Transit',
        typeId: 'AUTONOMOUS-TRANSIT-003',
        deploymentLevel: 'Level 4',
        globalFleet: 125000,
        deploymentCities: 'Singapore, Helsinki, Vegas',
        serviceTypes: 'Shuttles, Buses, Trains',
        passengerCapacity: '8-80 passengers',
        operatingEnvironments: 'Dedicated Routes',
        accessibilityFeatures: 'ADA Compliant',
        scheduleOptimization: 'Dynamic Routing',
        ridesharing: 'On-demand Service',
        paymentIntegration: 'Contactless',
        passengerSafety: 'Emergency Systems',
        weatherCapability: 'All Weather',
        energyEfficiency: '100% Electric',
        operationalSavings: '60% cost reduction',
        serviceReliability: '99.8% uptime',
        publicAcceptance: '78% approval',
        accessibilityImpact: 'Enhanced Mobility',
        urbanCongestion: 'Traffic Reduction',
        futurePlans: 'City-wide Networks'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        vehiclesTracked: 789012345,
        deliveriesCompleted: 2850000,
        autonomousMiles: 12500000,
        onTimeRate: 87.6,
        fuelEfficiency: 92.3,
        safetyIncidents: 23,
        alerts: 1456,
        systemErrors: 12
      },
      {
        period: 'Last 24 Hours',
        vehiclesTracked: 788234567,
        deliveriesCompleted: 67800000,
        autonomousMiles: 298000000,
        onTimeRate: 87.1,
        fuelEfficiency: 91.9,
        safetyIncidents: 567,
        alerts: 34890,
        systemErrors: 289
      },
      {
        period: 'Last 7 Days',
        vehiclesTracked: 785123456,
        deliveriesCompleted: 472000000,
        autonomousMiles: 2075000000,
        onTimeRate: 86.8,
        fuelEfficiency: 91.4,
        safetyIncidents: 3890,
        alerts: 243670,
        systemErrors: 2034
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTransportationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        transportationOverview: {
          ...prev.transportationOverview,
          onTimePerformance: Math.max(80.0, Math.min(95.0, prev.transportationOverview.onTimePerformance + (Math.random() - 0.5) * 1.0)),
          safetyScore: Math.max(95.0, Math.min(99.9, prev.transportationOverview.safetyScore + (Math.random() - 0.5) * 0.2))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'TESTING': return 'text-yellow-400 bg-yellow-400/20';
      case 'MAINTENANCE': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
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
  const formatMiles = (miles) => `${formatNumber(miles)} mi`;
  const formatDeliveries = (deliveries) => formatNumber(deliveries);

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Transportation Technology & Logistics Intelligence Center</h1>
              <p className="text-slate-300">Transportation & logistics analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{transportationData.currentTime}</div>
            <div className="text-slate-300">Transportation Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Transportation Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Car className="w-5 h-5 text-cyan-400 mr-2" />
                Vehicles
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(transportationData.transportationOverview.connectedVehicles)}</div>
            <div className="text-cyan-300 text-sm">{formatNumber(transportationData.transportationOverview.autonomousVehicles)} Autonomous</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Truck className="w-5 h-5 text-blue-400 mr-2" />
                Logistics
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(transportationData.transportationOverview.logisticsPlatforms)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(transportationData.transportationOverview.deliveryFleets)} Fleets</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                On-Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(transportationData.transportationOverview.onTimePerformance)}</div>
            <div className="text-green-300 text-sm">Performance</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-yellow-400 mr-2" />
                Safety
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(transportationData.transportationOverview.safetyScore)}</div>
            <div className="text-yellow-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(transportationData.transportationOverview.fuelEfficiency)}</div>
            <div className="text-purple-300 text-sm">Fuel</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Navigation className="w-5 h-5 text-orange-400 mr-2" />
                Route Opt
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(transportationData.transportationOverview.routeOptimization)}</div>
            <div className="text-orange-300 text-sm">Optimization</div>
          </div>
        </div>

        {/* Transportation Systems & Logistics Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Car className="w-5 h-5 text-cyan-400 mr-2" />
              Transportation Systems
            </h3>
            <div className="space-y-4">
              {transportationData.transportationSystems.map((system, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{system.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(system.status)}`}>
                        {system.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{system.location}</div>
                    <div className="text-blue-400">{system.systemType}</div>
                    <div className="text-green-400">{system.systemId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {system.vehiclesEquipped && `Vehicles: ${formatNumber(system.vehiclesEquipped)}`}
                      {system.deliveryVans && `Vans: ${formatNumber(system.deliveryVans)}`}
                      {system.trackingDevices && `Devices: ${formatNumber(system.trackingDevices)}`}
                      {system.citiesCovered && `Cities: ${system.citiesCovered}`}
                    </div>
                    <div className="text-purple-400">
                      {system.milesAutonomous && `Miles: ${formatNumber(system.milesAutonomous)}`}
                      {system.dailyPackages && `Packages: ${formatNumber(system.dailyPackages)}/day`}
                      {system.packagesMonitored && `Monitored: ${formatNumber(system.packagesMonitored)}`}
                      {system.tripsAnalyzed && `Trips: ${formatNumber(system.tripsAnalyzed)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Performance</span>
                      <span>
                        {system.safetyRating && formatPercentage(system.safetyRating)}
                        {system.routeOptimization && formatPercentage(system.routeOptimization)}
                        {system.onTimeDelivery && formatPercentage(system.onTimeDelivery)}
                        {system.networkCoverage && system.networkCoverage}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${
                            system.safetyRating || 
                            system.routeOptimization || 
                            system.onTimeDelivery || 
                            95
                          }%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {system.softwareVersion && `Version: ${system.softwareVersion}`}
                      {system.servicePartners && `Partners: ${formatNumber(system.servicePartners)}`}
                      {system.sensorTypes && `Sensors: ${system.sensorTypes}`}
                      {system.transportationModes && `Modes: ${system.transportationModes}`}
                    </div>
                    <div className="text-indigo-400">
                      {system.fleetLearning && `Learning: ${system.fleetLearning}`}
                      {system.aiRoutePlanning && `AI: ${system.aiRoutePlanning}`}
                      {system.geofenceAlerts && `Geofence: ${system.geofenceAlerts}`}
                      {system.publicDatasharing && `Data: ${system.publicDatasharing}`}
                    </div>
                    <div className="text-cyan-400">
                      {system.interventionRate && `Intervention: ${formatPercentage(system.interventionRate)}`}
                      {system.electricVehicles && `EVs: ${formatNumber(system.electricVehicles)}`}
                      {system.batteryLife && `Battery: ${system.batteryLife}`}
                      {system.privacyProtection && `Privacy: ${system.privacyProtection}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Ship className="w-5 h-5 text-blue-400 mr-2" />
              Logistics Platforms
            </h3>
            <div className="space-y-4">
              {transportationData.logisticsPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.provider}</div>
                    <div className="text-blue-400">{platform.category}</div>
                    <div className="text-green-400">{platform.globalPresence}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.containersManaged && `Containers: ${formatNumber(platform.containersManaged)}`}
                      {platform.warehouses && `Warehouses: ${formatNumber(platform.warehouses)}`}
                      {platform.driversOptimized && `Drivers: ${formatNumber(platform.driversOptimized)}`}
                    </div>
                    <div className="text-purple-400">
                      {platform.vesselFleet && `Vessels: ${platform.vesselFleet}`}
                      {platform.roboticSystems && `Robots: ${formatNumber(platform.roboticSystems)}`}
                      {platform.deliveryRoutes && `Routes: ${formatNumber(platform.deliveryRoutes)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Performance</span>
                      <span>
                        {platform.onTimePerformance && platform.onTimePerformance}
                        {platform.customerSatisfaction && platform.customerSatisfaction}
                        {platform.supplyChainVisibility && platform.supplyChainVisibility}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${
                            parseFloat(platform.onTimePerformance) || 
                            parseFloat(platform.customerSatisfaction) ||
                            parseFloat(platform.supplyChainVisibility) ||
                            90
                          }%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {platform.digitalBookings && `Digital: ${platform.digitalBookings}`}
                      {platform.employeeCount && `Employees: ${formatNumber(platform.employeeCount)}`}
                      {platform.packageVolume && `Volume: ${platform.packageVolume}`}
                    </div>
                    <div className="text-indigo-400">
                      {platform.trackingCapability && `Tracking: ${platform.trackingCapability}`}
                      {platform.aiOptimization && `AI: ${platform.aiOptimization}`}
                      {platform.algorithmsUsed && `Algorithms: ${platform.algorithmsUsed}`}
                    </div>
                    <div className="text-cyan-400">
                      {platform.sustainabilityTarget && `Target: ${platform.sustainabilityTarget}`}
                      {platform.electricVehicles && `EVs: ${formatNumber(platform.electricVehicles)}`}
                      {platform.milesSaved && `Saved: ${platform.milesSaved}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Autonomous Vehicles */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 text-purple-400 mr-2" />
            Autonomous Vehicle Technologies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {transportationData.autonomousVehicles.map((vehicle, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{vehicle.vehicleType}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Fleet: {formatNumber(vehicle.globalFleet)}</div>
                  <div className="text-blue-400">Level: {vehicle.deploymentLevel}</div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Market Penetration</span>
                    <span>
                      {vehicle.marketPenetration && formatPercentage(vehicle.marketPenetration)}
                      {vehicle.serviceReliability && vehicle.serviceReliability}
                      {vehicle.publicAcceptance && vehicle.publicAcceptance}
                    </span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${
                          vehicle.marketPenetration || 
                          parseFloat(vehicle.serviceReliability) ||
                          parseFloat(vehicle.publicAcceptance) ||
                          50
                        }%` 
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">Leaders: {vehicle.manufacturerLeaders || vehicle.deploymentCities}</div>
                  <div className="text-indigo-400">Tech: {vehicle.keyTechnologies || vehicle.serviceTypes}</div>
                  <div className="text-cyan-400">Safety: {vehicle.safetyFeatures || vehicle.passengerSafety}</div>
                  <div className="text-green-400">Status: {vehicle.regulatoryStatus || vehicle.energyEfficiency}</div>
                  <div className="text-blue-400">Impact: {vehicle.economicImpact || vehicle.operationalSavings}</div>
                  <div className="text-orange-400">Future: {vehicle.futureProjections || vehicle.futurePlans}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            Transportation Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {transportationData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Tracked: {formatNumber(metrics.vehiclesTracked)}</div>
                  <div className="text-green-400">Delivered: {formatDeliveries(metrics.deliveriesCompleted)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Auto Miles: {formatMiles(metrics.autonomousMiles)}</div>
                  <div className="text-yellow-400">On-Time: {formatPercentage(metrics.onTimeRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Fuel Eff: {formatPercentage(metrics.fuelEfficiency)}</div>
                  <div className="text-orange-400">Incidents: {metrics.safetyIncidents}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Alerts: {metrics.alerts}</div>
                  <div className="text-pink-400">Errors: {metrics.systemErrors}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}