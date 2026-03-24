// Agriculture Technology & Smart Farming Intelligence Center - Agricultural & Farming Analytics
import { useState, useEffect } from 'react';
import { Truck, Leaf, Sun, Droplets, BarChart3, Activity, TrendingUp, CloudRain, Thermometer, Zap, Target, Globe } from 'lucide-react';

export default function AgricultureTechnologySmartFarmingIntelligenceCenter() {
  const [agricultureData, setAgricultureData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    agricultureOverview: {
      smartFarms: 567890,
      agriculturalPlatforms: 123456,
      farmers: 234567890,
      cropFields: 789012345,
      livestockCount: 1234567890,
      harvestedAcres: 890123456,
      yieldOptimization: 23.4,
      waterEfficiency: 34.7,
      fertilizerReduction: 18.9,
      pesticidesReduction: 28.3,
      cropHealthScore: 87.6,
      weatherAccuracy: 94.2,
      soilAnalyticsAccuracy: 91.8,
      automationLevel: 45.6,
      sustainabilityScore: 78.9,
      profitabilityIncrease: 15.7,
      laborEfficiency: 67.4,
      equipmentUptime: 92.3,
      dataConnectivity: 89.1,
      climatePrediction: 86.5
    },
    smartFarms: [
      {
        farmName: 'Bowles Farming Company',
        farmId: 'BOWLES-FARM-001',
        location: 'Los Banos, California, USA',
        farmType: 'DIVERSIFIED CROPS',
        status: 'OPERATIONAL',
        totalAcres: 50000,
        cropsGrown: 'Almonds, Tomatoes, Cotton, Cantaloupe',
        technologyPlatform: 'John Deere Operations Center',
        irrigationSystem: 'PRECISION DRIP',
        equipmentFleet: 125,
        autonomousMachinery: 34,
        sensorDensity: '12 per acre',
        yieldImprovement: 28.5,
        waterSavings: 32.1,
        laborCostReduction: 23.7,
        pesticidesReduction: 35.6,
        fertilizerOptimization: 26.4,
        profitMarginIncrease: 18.9,
        sustainabilityRating: 'A',
        certifications: 'USDA Organic, Sustainable Agriculture',
        weatherStations: 45,
        soilSensors: 600,
        droneFlights: 'Weekly',
        satelliteImagery: 'Daily',
        aiModelsDeployed: 12
      },
      {
        farmName: 'Indigo Agriculture Network',
        farmId: 'INDIGO-NETWORK-002',
        location: 'Multiple Locations, USA',
        farmType: 'NETWORK FARMING',
        status: 'SCALING',
        totalAcres: 5500000,
        cropsGrown: 'Corn, Soybeans, Wheat, Cotton',
        technologyPlatform: 'Indigo Platform',
        irrigationSystem: 'VARIABLE RATE',
        equipmentFleet: 8900,
        autonomousMachinery: 567,
        sensorDensity: '8 per acre',
        yieldImprovement: 21.3,
        waterSavings: 24.7,
        laborCostReduction: 15.8,
        pesticidesReduction: 42.1,
        fertilizerOptimization: 31.9,
        profitMarginIncrease: 12.4,
        sustainabilityRating: 'A-',
        certifications: 'Carbon Credits, Regenerative Organic',
        weatherStations: 2300,
        soilSensors: 44000,
        droneFlights: 'Bi-weekly',
        satelliteImagery: 'Daily',
        aiModelsDeployed: 23
      },
      {
        farmName: 'Arable Labs Research Farm',
        farmId: 'ARABLE-RESEARCH-003',
        location: 'Princeton, New Jersey, USA',
        farmType: 'RESEARCH & DEVELOPMENT',
        status: 'EXPERIMENTAL',
        totalAcres: 1200,
        cropsGrown: 'Various Test Crops',
        technologyPlatform: 'Arable Mark Platform',
        irrigationSystem: 'SMART IRRIGATION',
        equipmentFleet: 23,
        autonomousMachinery: 12,
        sensorDensity: '45 per acre',
        yieldImprovement: 45.7,
        waterSavings: 48.3,
        laborCostReduction: 67.9,
        pesticidesReduction: 78.5,
        fertilizerOptimization: 56.8,
        profitMarginIncrease: 34.2,
        sustainabilityRating: 'A+',
        certifications: 'Experimental Permit, Research License',
        weatherStations: 54,
        soilSensors: 540,
        droneFlights: 'Daily',
        satelliteImagery: 'Hourly',
        aiModelsDeployed: 67
      },
      {
        farmName: 'Vertical Harvest Indoor Farm',
        farmId: 'VERTICAL-HARVEST-004',
        location: 'Jackson, Wyoming, USA',
        farmType: 'VERTICAL AGRICULTURE',
        status: 'OPERATIONAL',
        totalAcres: 13.5,
        cropsGrown: 'Leafy Greens, Herbs, Tomatoes',
        technologyPlatform: 'Custom IoT System',
        irrigationSystem: 'HYDROPONIC SYSTEM',
        equipmentFleet: 45,
        autonomousMachinery: 28,
        sensorDensity: '120 per floor',
        yieldImprovement: 390.0,
        waterSavings: 95.2,
        laborCostReduction: 45.6,
        pesticidesReduction: 99.8,
        fertilizerOptimization: 67.4,
        profitMarginIncrease: 78.3,
        sustainabilityRating: 'A++',
        certifications: 'USDA Organic, LEED Certified',
        weatherStations: 0,
        soilSensors: 0,
        droneFlights: 'Not applicable',
        satelliteImagery: 'Not applicable',
        aiModelsDeployed: 15
      }
    ],
    agriculturalPlatforms: [
      {
        platformName: 'Climate FieldView',
        platformId: 'CLIMATE-FIELDVIEW-001',
        provider: 'Bayer Crop Science',
        category: 'DIGITAL FARMING PLATFORM',
        status: 'OPERATIONAL',
        marketShare: 32.4,
        farmersUsing: 890000,
        acresManaged: 180000000,
        countries: 23,
        crops: 'Corn, Soybeans, Cotton, Canola',
        features: 'Field Mapping, Variable Rate Seeding, Yield Analysis',
        dataPoints: 'Planting, Weather, Soil, Satellite',
        aiCapabilities: 'Predictive Analytics, Prescriptive Insights',
        integrations: 'Equipment, Weather, Markets',
        mobileApp: 'iOS, Android',
        realTimeUpdates: 'Yes',
        subscriptionModel: 'Premium Features',
        customerSatisfaction: 87.9,
        yieldImprovements: '5-15%',
        roiRealization: '3:1 Average',
        supportRating: 'Excellent',
        dataPrivacy: 'Farmer Owned',
        globalExpansion: 'Rapid'
      },
      {
        platformName: 'John Deere Operations Center',
        platformId: 'JD-OPS-CENTER-002',
        provider: 'John Deere',
        category: 'PRECISION AGRICULTURE',
        status: 'OPERATIONAL',
        marketShare: 28.7,
        farmersUsing: 650000,
        acresManaged: 150000000,
        countries: 45,
        crops: 'All Major Field Crops',
        features: 'Fleet Management, Field Operations, Data Analysis',
        dataPoints: 'Machine, Field, Agronomic, Financial',
        aiCapabilities: 'Machine Learning, Optimization',
        integrations: 'Full Equipment Line, Third Party',
        mobileApp: 'Native Apps',
        realTimeUpdates: 'Yes',
        subscriptionModel: 'Tiered Pricing',
        customerSatisfaction: 91.3,
        yieldImprovements: '8-20%',
        roiRealization: '4:1 Average',
        supportRating: 'Industry Leading',
        dataPrivacy: 'Secure Platform',
        globalExpansion: 'Established'
      },
      {
        platformName: 'Trimble Ag Software',
        platformId: 'TRIMBLE-AG-003',
        provider: 'Trimble Agriculture',
        category: 'PRECISION GUIDANCE',
        status: 'OPERATIONAL',
        marketShare: 18.9,
        farmersUsing: 420000,
        acresManaged: 95000000,
        countries: 67,
        crops: 'Row Crops, Specialty Crops',
        features: 'GPS Guidance, Field Management, Crop Records',
        dataPoints: 'Guidance, Application, Harvest, Cost',
        aiCapabilities: 'Prescription Maps, Variable Rate',
        integrations: 'Multi-Brand Equipment',
        mobileApp: 'Cross Platform',
        realTimeUpdates: 'Yes',
        subscriptionModel: 'Software + Hardware',
        customerSatisfaction: 85.6,
        yieldImprovements: '6-18%',
        roiRealization: '2.5:1 Average',
        supportRating: 'Good',
        dataPrivacy: 'Protected',
        globalExpansion: 'Wide Coverage'
      }
    ],
    cropAnalytics: [
      {
        cropType: 'Corn (Maize)',
        analyticsId: 'CORN-ANALYTICS-001',
        totalAcreage: 93000000,
        averageYield: 172.0,
        yieldPotential: 195.4,
        gapAnalysis: '13.6% Below Potential',
        majorRegions: 'Corn Belt (Iowa, Illinois, Nebraska)',
        growingSeason: 'April - October',
        waterRequirements: '23 inches',
        nitrogenNeeds: '150-200 lbs/acre',
        commonDiseases: 'Corn Borer, Gray Leaf Spot',
        pestManagement: 'Integrated Pest Management',
        harvestTiming: 'September - November',
        marketPrice: 4.25,
        profitMargin: 23.8,
        sustainabilityScore: 67.4,
        climateAdaptation: 'Drought Tolerant Varieties',
        technologyAdoption: 78.9,
        precisionAgriculture: 'Variable Rate Application',
        geneticTraits: 'Herbicide Tolerance, Insect Resistance',
        storageRequirements: 'Grain Elevators, On-Farm Storage'
      },
      {
        cropType: 'Soybeans',
        analyticsId: 'SOYBEAN-ANALYTICS-002',
        totalAcreage: 83000000,
        averageYield: 51.4,
        yieldPotential: 58.7,
        gapAnalysis: '12.4% Below Potential',
        majorRegions: 'Midwest (Iowa, Minnesota, Illinois)',
        growingSeason: 'May - September',
        waterRequirements: '20 inches',
        nitrogenNeeds: 'Nitrogen Fixation + 20 lbs/acre',
        commonDiseases: 'Soybean Rust, White Mold',
        pestManagement: 'Crop Rotation, Resistant Varieties',
        harvestTiming: 'September - November',
        marketPrice: 12.85,
        profitMargin: 28.7,
        sustainabilityScore: 78.9,
        climateAdaptation: 'Heat Stress Tolerance',
        technologyAdoption: 73.2,
        precisionAgriculture: 'Prescription Seeding',
        geneticTraits: 'Herbicide Tolerance, High Protein',
        storageRequirements: 'Bins, Export Terminals'
      },
      {
        cropType: 'Wheat',
        analyticsId: 'WHEAT-ANALYTICS-003',
        totalAcreage: 45000000,
        averageYield: 49.7,
        yieldPotential: 67.2,
        gapAnalysis: '26.0% Below Potential',
        majorRegions: 'Great Plains (Kansas, North Dakota)',
        growingSeason: 'Fall Planted / Spring Harvest',
        waterRequirements: '15 inches',
        nitrogenNeeds: '80-120 lbs/acre',
        commonDiseases: 'Stripe Rust, Fusarium Head Blight',
        pestManagement: 'Fungicide Applications, Rotation',
        harvestTiming: 'June - August',
        marketPrice: 5.45,
        profitMargin: 15.6,
        sustainabilityScore: 65.8,
        climateAdaptation: 'Cold Hardiness',
        technologyAdoption: 65.4,
        precisionAgriculture: 'Yield Monitoring',
        geneticTraits: 'Disease Resistance, Quality Traits',
        storageRequirements: 'Country Elevators, Export Facilities'
      }
    ],
    weatherSystems: [
      {
        systemName: 'IBM Weather Operations Center',
        systemId: 'IBM-WEATHER-001',
        provider: 'IBM Watson Decision Platform',
        scope: 'GLOBAL AGRICULTURAL WEATHER',
        status: 'OPERATIONAL',
        accuracy: 94.2,
        forecastRange: '15 days',
        updateFrequency: 'Hourly',
        dataPoints: 45000000000,
        weatherStations: 125000,
        satellites: 23,
        radars: 2400,
        models: 'Global, Mesoscale, Ensemble',
        agriculturalMetrics: 'GDD, ETc, Disease Risk',
        climateNorms: '30-year Historical',
        extremeWeatherAlerts: 'Real-time',
        microclimateResolution: '2.5 km',
        irrigationScheduling: 'Automated',
        pestDiseaseForecasts: 'Integrated',
        seasonalOutlooks: '90-day',
        apiAccess: 'RESTful',
        mobileAlerts: 'Push Notifications',
        customerCount: 890000
      },
      {
        systemName: 'DTN Agricultural Weather',
        systemId: 'DTN-AG-WEATHER-002',
        provider: 'DTN Progressive Farmer',
        scope: 'AGRICULTURAL DECISION SUPPORT',
        status: 'OPERATIONAL',
        accuracy: 92.8,
        forecastRange: '10 days',
        updateFrequency: '15 minutes',
        dataPoints: 25000000000,
        weatherStations: 45000,
        agricultureFocus: 'Field Operations',
        farmSpecificForecasts: 'GPS-based',
        sprayConditions: 'Wind, Temperature, Humidity',
        harvestConditions: 'Soil Moisture, Precipitation',
        fieldWorkDays: 'Predictive Modeling',
        heatStressMonitoring: 'Livestock',
        irrigationAdvisories: 'ET-based',
        diseaseRiskModels: 'Pathogen Specific',
        commodityImpactAnalysis: 'Price Forecasting',
        growerNetworkSize: 650000,
        advisorToolkits: 'Custom Dashboards'
      },
      {
        systemName: 'NOAA Climate Prediction Center',
        systemId: 'NOAA-CPC-003',
        provider: 'National Weather Service',
        scope: 'CLIMATE OUTLOOKS',
        status: 'OPERATIONAL',
        accuracy: 89.7,
        forecastRange: '13 months',
        updateFrequency: 'Monthly',
        dataPoints: 67000000000,
        climateDivisions: 344,
        seasonalForecasts: 'Temperature, Precipitation',
        droughtMonitoring: 'US Drought Monitor',
        elNinoLaNina: 'ENSO Predictions',
        agriculturalDroughtIndex: 'SPEI, PDSI',
        cropYieldForecasts: 'USDA Collaboration',
        climateNormals: '1991-2020 Period',
        anomalyTracking: 'Real-time',
        agriculturalImpacts: 'Quantified',
        policySupport: 'USDA, Congress',
        publicAccess: 'Free Data',
        researchGrade: 'Peer Reviewed'
      }
    ],
    soilAnalytics: [
      {
        analyticsType: 'Soil Health Assessment',
        systemId: 'SOIL-HEALTH-001',
        provider: 'Soil Health Institute',
        scope: 'COMPREHENSIVE SOIL ANALYSIS',
        status: 'OPERATIONAL',
        parametersAnalyzed: 23,
        samplesPerYear: 2500000,
        accuracyLevel: 91.8,
        testingMethods: 'Chemical, Physical, Biological',
        keyMetrics: 'OM, pH, CEC, Infiltration Rate',
        nutrientAnalysis: 'N, P, K, S, Micronutrients',
        organicMatterTrends: 'Increasing 2.3%/year',
        carbonSequestration: 'Measured, Verified',
        erosionRisk: 'RUSLE2 Modeling',
        compactionAssessment: 'Penetrometer, Bulk Density',
        biologicalActivity: 'Respiration, Enzyme Activity',
        waterHoldingCapacity: 'Field Capacity Measurements',
        recommendationEngine: 'AI-powered',
        costPerSample: 45.00,
        turnaroundTime: '5-7 days',
        farmersServed: 450000
      },
      {
        analyticsType: 'Precision Soil Mapping',
        systemId: 'PRECISION-SOIL-002',
        provider: 'Veris Technologies',
        scope: 'SPATIAL SOIL VARIABILITY',
        status: 'OPERATIONAL',
        mappingResolution: '2.5 meters',
        acresMappedPerYear: 15000000,
        accuracyLevel: 94.3,
        sensingTechnology: 'Electrical Conductivity, pH',
        dataLayers: 'Multiple Depth Zones',
        variabilityMapping: 'Management Zones',
        yieldCorrelation: 'Strong Relationships',
        prescriptionMaps: 'Variable Rate Application',
        soilTypeDelineation: 'Automated',
        drainageAssessment: 'Wet Spots, Tile Lines',
        samplingOptimization: 'Grid Refinement',
        spatialInterpolation: 'Kriging, IDW',
        integrationCapability: 'Farm Management Software',
        costPerAcre: 12.50,
        processingTime: '2-3 days',
        adoptionRate: 34.7
      },
      {
        analyticsType: 'Real-time Soil Monitoring',
        systemId: 'REALTIME-SOIL-003',
        provider: 'CropX Soil Monitoring',
        scope: 'CONTINUOUS SOIL CONDITIONS',
        status: 'OPERATIONAL',
        sensorNetwork: 125000,
        parametersMonitored: 12,
        accuracyLevel: 88.9,
        measurementDepth: '6, 18, 30 inches',
        keyParameters: 'Moisture, Temperature, Salinity',
        dataFrequency: 'Every 15 minutes',
        alertSystem: 'Threshold-based',
        irrigationControl: 'Automated Triggers',
        fertilizerTiming: 'Nutrient Release Monitoring',
        plantingConditions: 'Seedbed Preparation',
        weatherIntegration: 'Forecast Combination',
        mobileNotifications: 'Critical Alerts',
        batteryLife: '5-7 years',
        installationDepth: 'Multi-level',
        costPerSensor: 245.00,
        subscriptionFee: '180/year'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        farmers: 234000000,
        fieldsMonitored: 8900000,
        dataPoints: 45000000,
        yieldOptimization: 23.4,
        waterSaved: 125000000,
        alerts: 45000,
        errors: 12,
        incidents: 0
      },
      {
        period: 'Last 24 Hours',
        farmers: 234567000,
        fieldsMonitored: 78900000,
        dataPoints: 890000000,
        yieldOptimization: 23.1,
        waterSaved: 2800000000,
        alerts: 890000,
        errors: 234,
        incidents: 3
      },
      {
        period: 'Last 7 Days',
        farmers: 234567890,
        fieldsMonitored: 456000000,
        dataPoints: 5670000000,
        yieldOptimization: 22.8,
        waterSaved: 18900000000,
        alerts: 5600000,
        errors: 1456,
        incidents: 12
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAgricultureData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        agricultureOverview: {
          ...prev.agricultureOverview,
          cropHealthScore: Math.max(80.0, Math.min(95.0, prev.agricultureOverview.cropHealthScore + (Math.random() - 0.5) * 1.0)),
          yieldOptimization: Math.max(20.0, Math.min(30.0, prev.agricultureOverview.yieldOptimization + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'EXPERIMENTAL': return 'text-purple-400 bg-purple-400/20';
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
  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
  const formatAcres = (acres) => `${formatNumber(acres)} acres`;
  const formatGallons = (gallons) => `${formatNumber(gallons)} gal`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-lime-600 rounded-xl">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Agriculture Technology & Smart Farming Intelligence Center</h1>
              <p className="text-slate-300">Agricultural & farming analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{agricultureData.currentTime}</div>
            <div className="text-slate-300">Agriculture Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Agriculture Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Truck className="w-5 h-5 text-green-400 mr-2" />
                Farms
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(agricultureData.agricultureOverview.smartFarms)}</div>
            <div className="text-green-300 text-sm">{formatNumber(agricultureData.agricultureOverview.agriculturalPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                Farmers
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(agricultureData.agricultureOverview.farmers)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(agricultureData.agricultureOverview.cropFields)} Fields</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Leaf className="w-5 h-5 text-lime-400 mr-2" />
                Yield
              </h3>
            </div>
            <div className="text-3xl font-bold text-lime-400">+{formatPercentage(agricultureData.agricultureOverview.yieldOptimization)}</div>
            <div className="text-lime-300 text-sm">Optimization</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Droplets className="w-5 h-5 text-cyan-400 mr-2" />
                Water
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">+{formatPercentage(agricultureData.agricultureOverview.waterEfficiency)}</div>
            <div className="text-cyan-300 text-sm">Efficiency</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-yellow-400 mr-2" />
                Health
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(agricultureData.agricultureOverview.cropHealthScore)}</div>
            <div className="text-yellow-300 text-sm">Crop Health</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Sustainability
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(agricultureData.agricultureOverview.sustainabilityScore)}</div>
            <div className="text-orange-300 text-sm">Score</div>
          </div>
        </div>

        {/* Smart Farms & Agricultural Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Truck className="w-5 h-5 text-green-400 mr-2" />
              Smart Farms
            </h3>
            <div className="space-y-4">
              {agricultureData.smartFarms.map((farm, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{farm.farmName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(farm.status)}`}>
                        {farm.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{farm.location}</div>
                    <div className="text-blue-400">{farm.farmType}</div>
                    <div className="text-green-400">{farm.sustainabilityRating}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Size: {formatAcres(farm.totalAcres)}</div>
                    <div className="text-purple-400">Fleet: {farm.equipmentFleet} units</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Yield Improvement</span>
                      <span>{formatPercentage(farm.yieldImprovement)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(farm.yieldImprovement, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Water Savings: {formatPercentage(farm.waterSavings)}</div>
                    <div className="text-indigo-400">Pesticide Reduction: {formatPercentage(farm.pesticidesReduction)}</div>
                    <div className="text-cyan-400">Platform: {farm.technologyPlatform}</div>
                    <div className="text-green-400">Profit Increase: {formatPercentage(farm.profitMarginIncrease)}</div>
                    <div className="text-blue-400">AI Models: {farm.aiModelsDeployed}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Agricultural Platforms
            </h3>
            <div className="space-y-4">
              {agricultureData.agriculturalPlatforms.map((platform, index) => (
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
                    <div className="text-green-400">Share: {formatPercentage(platform.marketShare)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Farmers: {formatNumber(platform.farmersUsing)}</div>
                    <div className="text-purple-400">Acres: {formatNumber(platform.acresManaged)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Customer Satisfaction</span>
                      <span>{formatPercentage(platform.customerSatisfaction)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${platform.customerSatisfaction}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Yield Impact: {platform.yieldImprovements}</div>
                    <div className="text-indigo-400">Countries: {platform.countries}</div>
                    <div className="text-cyan-400">AI: {platform.aiCapabilities}</div>
                    <div className="text-green-400">ROI: {platform.roiRealization}</div>
                    <div className="text-blue-400">Support: {platform.supportRating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crop Analytics & Weather Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Leaf className="w-5 h-5 text-lime-400 mr-2" />
              Crop Analytics
            </h3>
            <div className="space-y-4">
              {agricultureData.cropAnalytics.map((crop, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{crop.cropType}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Acreage: {formatNumber(crop.totalAcreage)}</div>
                    <div className="text-blue-400">Yield: {crop.averageYield} bu/ac</div>
                    <div className="text-green-400">Price: {formatCurrency(crop.marketPrice)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Potential: {crop.yieldPotential} bu/ac</div>
                    <div className="text-purple-400">Gap: {crop.gapAnalysis}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Profit Margin</span>
                      <span>{formatPercentage(crop.profitMargin)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-lime-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${crop.profitMargin}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Regions: {crop.majorRegions}</div>
                    <div className="text-indigo-400">Season: {crop.growingSeason}</div>
                    <div className="text-cyan-400">Water: {crop.waterRequirements}</div>
                    <div className="text-green-400">Sustainability: {formatPercentage(crop.sustainabilityScore)}</div>
                    <div className="text-blue-400">Tech Adoption: {formatPercentage(crop.technologyAdoption)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CloudRain className="w-5 h-5 text-cyan-400 mr-2" />
              Weather Systems
            </h3>
            <div className="space-y-4">
              {agricultureData.weatherSystems.map((weather, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{weather.systemName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(weather.status)}`}>
                        {weather.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{weather.provider}</div>
                    <div className="text-blue-400">{weather.scope}</div>
                    <div className="text-green-400">{weather.systemId}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span>{formatPercentage(weather.accuracy)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${weather.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Range: {weather.forecastRange}</div>
                    <div className="text-indigo-400">Updates: {weather.updateFrequency}</div>
                    <div className="text-cyan-400">
                      {weather.weatherStations && `Stations: ${formatNumber(weather.weatherStations)}`}
                      {weather.climateDivisions && `Divisions: ${weather.climateDivisions}`}
                    </div>
                    <div className="text-green-400">
                      {weather.agriculturalMetrics && `Metrics: ${weather.agriculturalMetrics}`}
                      {weather.seasonalForecasts && `Seasonal: ${weather.seasonalForecasts}`}
                    </div>
                    <div className="text-blue-400">
                      {weather.customerCount && `Customers: ${formatNumber(weather.customerCount)}`}
                      {weather.growerNetworkSize && `Growers: ${formatNumber(weather.growerNetworkSize)}`}
                      {weather.publicAccess && `Access: ${weather.publicAccess}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soil Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Sun className="w-5 h-5 text-orange-400 mr-2" />
            Soil Analytics Systems
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {agricultureData.soilAnalytics.map((soil, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{soil.analyticsType}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(soil.status)}`}>
                      {soil.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">{soil.provider}</div>
                  <div className="text-blue-400">{soil.scope}</div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Accuracy Level</span>
                    <span>{formatPercentage(soil.accuracyLevel)}</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-orange-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${soil.accuracyLevel}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    {soil.parametersAnalyzed && `Parameters: ${soil.parametersAnalyzed}`}
                    {soil.mappingResolution && `Resolution: ${soil.mappingResolution}`}
                    {soil.parametersMonitored && `Monitored: ${soil.parametersMonitored}`}
                  </div>
                  <div className="text-indigo-400">
                    {soil.samplesPerYear && `Samples: ${formatNumber(soil.samplesPerYear)}/year`}
                    {soil.acresMappedPerYear && `Mapped: ${formatNumber(soil.acresMappedPerYear)}/year`}
                    {soil.sensorNetwork && `Sensors: ${formatNumber(soil.sensorNetwork)}`}
                  </div>
                  <div className="text-cyan-400">
                    {soil.keyMetrics && `Metrics: ${soil.keyMetrics}`}
                    {soil.variabilityMapping && `Mapping: ${soil.variabilityMapping}`}
                    {soil.keyParameters && `Key: ${soil.keyParameters}`}
                  </div>
                  <div className="text-green-400">
                    {soil.costPerSample && `Cost: ${formatCurrency(soil.costPerSample)}/sample`}
                    {soil.costPerAcre && `Cost: ${formatCurrency(soil.costPerAcre)}/acre`}
                    {soil.costPerSensor && `Cost: ${formatCurrency(soil.costPerSensor)}/sensor`}
                  </div>
                  <div className="text-blue-400">
                    {soil.turnaroundTime && `Turnaround: ${soil.turnaroundTime}`}
                    {soil.processingTime && `Processing: ${soil.processingTime}`}
                    {soil.dataFrequency && `Frequency: ${soil.dataFrequency}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            Agriculture Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {agricultureData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Farmers: {formatNumber(metrics.farmers)}</div>
                  <div className="text-green-400">Fields: {formatNumber(metrics.fieldsMonitored)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Data Points: {formatNumber(metrics.dataPoints)}</div>
                  <div className="text-yellow-400">Yield Opt: {formatPercentage(metrics.yieldOptimization)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Water Saved: {formatGallons(metrics.waterSaved)}</div>
                  <div className="text-orange-400">Alerts: {formatNumber(metrics.alerts)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Errors: {metrics.errors}</div>
                  <div className="text-pink-400">Incidents: {metrics.incidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}