// Agriculture & Food Security Intelligence Center - Farming Operations, Crop Management, Food Supply Chain & Agricultural Analytics
import { useState, useEffect } from 'react';
import { Sprout, Wheat, TrendingUp, TrendingDown, Droplets, Sun, Thermometer, AlertTriangle, CheckCircle, Package, BarChart3, PieChart } from 'lucide-react';

export default function AgricultureFoodSecurityIntelligenceCenter() {
  const [agriData, setAgriData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    agricultureOverview: {
      totalFarmland: 3456789, // hectares
      activeFarms: 23456,
      cropYieldIndex: 87.4,
      foodSecurityIndex: 82.7,
      agriculturalGdp: 45678900000, // EUR
      farmProductivity: 91.2,
      sustainabilityScore: 78.9,
      waterUsageEfficiency: 84.3,
      soilHealthIndex: 79.6,
      biodiversityIndex: 73.4,
      carbonSequestration: 234567, // tons CO2
      organicFarming: 23.7, // percentage of total
      technologyAdoption: 67.8,
      farmProfitability: 76.5
    },
    cropProduction: {
      totalProduction: 12456789, // tons annually
      cropDiversity: 234,
      yieldPerHectare: 8.9, // tons/hectare average
      cropFailureRate: 3.2,
      harvestEfficiency: 94.7,
      storageCapacity: 2345678, // tons
      postHarvestLoss: 8.9, // percentage
      crops: [
        { crop: 'Wheat', area: 567890, production: 3456789, yield: 6.1, price: 234.50, quality: 92.4 },
        { crop: 'Corn', area: 434567, production: 2789456, yield: 6.4, price: 189.75, quality: 89.7 },
        { crop: 'Soybeans', area: 289456, production: 1567890, yield: 5.4, price: 567.80, quality: 94.2 },
        { crop: 'Rice', area: 234567, production: 1234567, yield: 5.3, price: 456.90, quality: 91.8 },
        { crop: 'Barley', area: 189234, production: 987654, yield: 5.2, price: 298.45, quality: 88.9 },
        { crop: 'Oats', area: 134567, production: 678901, yield: 5.0, price: 267.30, quality: 90.6 },
        { crop: 'Potatoes', area: 89456, production: 1789456, yield: 20.0, price: 134.60, quality: 87.3 },
        { crop: 'Tomatoes', area: 45678, production: 1456789, yield: 31.9, price: 789.20, quality: 96.4 }
      ],
      seasonalProduction: {
        spring: 2345678, // tons
        summer: 4567890,
        autumn: 3456789,
        winter: 2086432
      },
      cropRotation: {
        rotationCompliance: 78.9,
        soilRegenerationRate: 82.4,
        pesticideReduction: 23.7,
        fertilizersOptimization: 67.8
      }
    },
    livestockFarming: {
      totalLivestock: 8765432,
      livestockTypes: [
        { type: 'Cattle', count: 2345678, production: 456789, unit: 'tons milk', health: 94.2, efficiency: 87.6 },
        { type: 'Pigs', count: 1789456, production: 234567, unit: 'tons meat', health: 91.8, efficiency: 89.4 },
        { type: 'Poultry', count: 3456789, production: 189456, unit: 'tons eggs', health: 96.7, efficiency: 92.3 },
        { type: 'Sheep', count: 987654, production: 45678, unit: 'tons wool', health: 89.7, efficiency: 78.9 },
        { type: 'Goats', count: 185849, production: 23456, unit: 'tons milk', health: 92.4, efficiency: 81.7 }
      ],
      animalWelfare: 89.7,
      feedQuality: 91.2,
      veterinaryCompliance: 94.8,
      biosecurityMeasures: 87.3,
      livestockProductivity: 85.9,
      diseasePrevalence: 2.1, // percentage
      vaccinationCoverage: 96.4,
      antibioticUsage: 12.3 // kg per ton of production
    },
    foodSupplyChain: {
      foodProcessingPlants: 567,
      storageCapacity: 3456789, // tons
      distributionCenters: 234,
      foodSafety: 96.8,
      traceabilityCompliance: 89.7,
      shelfLife: 87.4, // percentage meeting standards
      foodWaste: 12.7, // percentage of total production
      supplyChainEfficiency: 84.2,
      transportationCosts: 234567890,
      coldChainCompliance: 91.8,
      supplyChainStages: [
        { stage: 'Farm to Processor', efficiency: 89.7, loss: 3.2, time: 2.1, cost: 45.60 },
        { stage: 'Processing', efficiency: 94.2, loss: 2.8, time: 1.5, cost: 67.80 },
        { stage: 'Distribution', efficiency: 87.3, loss: 4.1, time: 3.7, cost: 89.20 },
        { stage: 'Retail', efficiency: 82.6, loss: 7.9, time: 5.2, cost: 123.45 },
        { stage: 'Consumer', efficiency: 78.9, loss: 15.3, time: 0.0, cost: 0.0 }
      ],
      foodSecurity: {
        foodAvailability: 94.7,
        foodAccess: 87.9,
        foodUtilization: 84.2,
        foodStability: 91.3,
        nutritionalDiversity: 78.6,
        priceVolatility: 15.7 // percentage
      }
    },
    weatherClimate: {
      currentWeather: 'Partly Cloudy',
      temperature: 18.5, // °C
      humidity: 67.8, // percentage
      windSpeed: 12.4, // km/h
      precipitation: 15.7, // mm today
      soilMoisture: 78.9, // percentage
      growingDegreeDays: 1234,
      frostRisk: 'Low',
      droughtIndex: 23.4,
      floodRisk: 'Medium',
      extremeWeatherEvents: 3, // this month
      climateImpact: {
        temperatureVariation: 2.3, // °C from historical average
        precipitationVariation: -12.7, // percentage from historical average
        seasonalShift: 4.7, // days earlier/later
        cropStressFactor: 23.4,
        adaptationMeasures: 67.8 // percentage implemented
      },
      weatherForecasts: [
        { period: 'Next 7 Days', precipitation: 23.5, temperature_min: 12.4, temperature_max: 24.7, risk_level: 'Low' },
        { period: 'Next 30 Days', precipitation: 67.8, temperature_min: 8.9, temperature_max: 26.3, risk_level: 'Medium' },
        { period: 'Growing Season', precipitation: 234.5, temperature_min: 5.2, temperature_max: 32.1, risk_level: 'Medium' }
      ]
    },
    soilWaterManagement: {
      soilHealthIndex: 79.6,
      soilTypes: [
        { type: 'Clay Loam', area: 1234567, health: 82.4, fertility: 89.7, erosion_risk: 'Low' },
        { type: 'Sandy Loam', area: 987654, health: 78.9, fertility: 84.2, erosion_risk: 'Medium' },
        { type: 'Silt Loam', area: 567890, health: 85.3, fertility: 91.8, erosion_risk: 'Low' },
        { type: 'Clay', area: 345678, health: 74.6, fertility: 78.9, erosion_risk: 'High' },
        { type: 'Sandy', area: 234567, health: 71.2, fertility: 67.8, erosion_risk: 'High' }
      ],
      irrigationSystems: {
        totalIrrigatedArea: 1456789, // hectares
        irrigationEfficiency: 84.3,
        waterUsage: 3456789000, // liters daily
        dripIrrigation: 45.7, // percentage of irrigated area
        sprinklerSystems: 32.4,
        floodIrrigation: 21.9,
        waterSources: [
          { source: 'Groundwater', usage: 1456789000, sustainability: 78.9, quality: 91.2 },
          { source: 'Surface Water', usage: 1234567000, sustainability: 82.4, quality: 87.6 },
          { source: 'Recycled Water', usage: 567890000, sustainability: 94.7, quality: 89.3 },
          { source: 'Rainwater Harvesting', usage: 197553000, sustainability: 96.8, quality: 92.4 }
        ]
      },
      soilConservation: {
        erosionPrevention: 78.9,
        coverCrops: 45.7, // percentage of area
        contourFarming: 32.4,
        terracing: 12.8,
        organicMatter: 3.4, // percentage
        compaction: 23.7 // percentage of area affected
      }
    },
    smartFarming: {
      technologyAdoption: 67.8,
      precisionAgriculture: 45.7,
      iotSensors: 12456,
      drones: 567,
      satelliteMonitoring: 89.7,
      gpsGuidedMachinery: 78.9,
      automatedIrrigation: 56.8,
      smartTechnologies: [
        { technology: 'Soil Sensors', adoption: 56.8, farms: 8934, roi: 234.5, efficiency: 89.7 },
        { technology: 'Weather Stations', adoption: 67.9, farms: 12456, roi: 187.3, efficiency: 94.2 },
        { technology: 'GPS Guidance', adoption: 78.9, farms: 15678, roi: 156.8, efficiency: 91.4 },
        { technology: 'Drones', adoption: 34.7, farms: 4567, roi: 289.6, efficiency: 87.3 },
        { technology: 'Variable Rate Technology', adoption: 45.6, farms: 7890, roi: 201.7, efficiency: 88.9 },
        { technology: 'Automated Harvesters', adoption: 23.8, farms: 3456, roi: 345.2, efficiency: 96.7 }
      ],
      dataAnalytics: {
        farmDataCollection: 78.9,
        predictiveAnalytics: 56.7,
        yieldPredictionAccuracy: 89.4,
        decisionSupport: 67.8,
        realTimeMonitoring: 72.3
      },
      digitalization: {
        farmManagementSoftware: 45.7,
        cloudDataStorage: 34.8,
        mobileApps: 67.9,
        connectivity: 78.9 // rural broadband coverage
      }
    },
    sustainabilityEnvironment: {
      sustainabilityScore: 78.9,
      organicFarming: 23.7, // percentage
      pesticideReduction: 34.7, // percentage reduction
      fertilizedOptimization: 67.8,
      carbonFootprint: 2.3, // tons CO2 per hectare
      carbonSequestration: 1.7, // tons CO2 per hectare
      biodiversityIndex: 73.4,
      pollinatorSupport: 89.7,
      wildlifeHabitat: 15.7, // percentage of farmland
      soilCarbonContent: 2.8, // percentage
      renewableEnergyUsage: 34.7,
      environmentalPractices: [
        { practice: 'Crop Rotation', adoption: 78.9, environmental_benefit: 84.2, cost_effectiveness: 91.7 },
        { practice: 'Cover Crops', adoption: 45.7, environmental_benefit: 89.6, cost_effectiveness: 78.3 },
        { practice: 'Integrated Pest Management', adoption: 67.8, environmental_benefit: 92.4, cost_effectiveness: 85.9 },
        { practice: 'Precision Fertilization', adoption: 56.4, environmental_benefit: 87.3, cost_effectiveness: 94.2 },
        { practice: 'Agroforestry', adoption: 23.5, environmental_benefit: 96.8, cost_effectiveness: 67.4 },
        { practice: 'Organic Farming', adoption: 23.7, environmental_benefit: 94.7, cost_effectiveness: 72.6 }
      ],
      climateAdaptation: {
        droughtResistantCrops: 34.7,
        waterConservation: 78.9,
        soilHealthImprovement: 67.8,
        diversification: 56.3,
        earlyWarningSystem: 89.7
      }
    },
    marketEconomics: {
      agriculturalGdp: 45678900000,
      farmIncomes: 67800, // EUR average per farm
      profitability: 76.5,
      productPrices: [
        { product: 'Wheat', price: 234.50, trend: 'stable', volatility: 12.4 },
        { product: 'Corn', price: 189.75, trend: 'increasing', volatility: 15.7 },
        { product: 'Soybeans', price: 567.80, trend: 'decreasing', volatility: 18.9 },
        { product: 'Milk', price: 0.45, trend: 'stable', volatility: 8.3 },
        { product: 'Beef', price: 4.67, trend: 'increasing', volatility: 14.2 },
        { product: 'Pork', price: 3.89, trend: 'stable', volatility: 11.8 }
      ],
      exports: 12345678000, // EUR
      imports: 6789456000, // EUR
      tradeBalance: 5556222000, // EUR
      foodSelfSufficiency: 134.7, // percentage
      priceSupport: 1234567000, // EUR subsidies
      insuranceClaims: 234567000, // EUR
      farmSubsidies: {
        totalSubsidies: 2345678000,
        directPayments: 1567890000,
        environmentalSupports: 456789000,
        youngFarmerSupport: 123456000,
        crisisSupport: 197543000
      }
    },
    agricultureAlerts: [
      {
        type: 'WARNING',
        category: 'Crop Health',
        message: 'Wheat crop showing signs of disease in northern regions - implement preventive measures',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Crop Protection Team',
        timestamp: '02:10',
        recommendations: ['Deploy fungicide treatments', 'Increase field monitoring', 'Isolate affected areas']
      },
      {
        type: 'CRITICAL',
        category: 'Water Management',
        message: 'Groundwater levels 15% below seasonal average - activate conservation protocols',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Water Management Authority',
        timestamp: '02:05',
        recommendations: ['Restrict irrigation hours', 'Promote drip irrigation', 'Monitor usage closely']
      },
      {
        type: 'SUCCESS',
        category: 'Technology Adoption',
        message: 'Smart farming adoption increased 12% this quarter - exceeding modernization targets',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Agricultural Innovation Team',
        timestamp: '02:00',
        recommendations: ['Share best practices', 'Expand training programs', 'Document success factors']
      },
      {
        type: 'INFO',
        category: 'Market Conditions',
        message: 'Corn prices trending upward 8% - favorable conditions for harvest sales',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Market Analysis Team',
        timestamp: '01:55',
        recommendations: ['Optimize harvest timing', 'Negotiate contracts', 'Monitor price movements']
      }
    ],
    foodSafety: {
      foodSafetyScore: 96.8,
      contaminationIncidents: 12,
      recallEvents: 3,
      inspectionCompliance: 94.7,
      haccp_Implementation: 89.7,
      tracabilitySystem: 91.2,
      qualityAssurance: 93.8,
      foodBorneIllness: 0.8, // cases per 100,000
      laboratoryTests: 23456,
      passedTests: 22867,
      testPassRate: 97.5,
      safetyStandards: [
        { standard: 'ISO 22000', compliance: 94.7, certified_facilities: 456 },
        { standard: 'BRC Global Standard', compliance: 91.8, certified_facilities: 234 },
        { standard: 'HACCP', compliance: 89.7, certified_facilities: 567 },
        { standard: 'Organic Certification', compliance: 96.2, certified_facilities: 189 },
        { standard: 'GlobalGAP', compliance: 87.9, certified_facilities: 345 }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAgriData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        agricultureOverview: {
          ...prev.agricultureOverview,
          cropYieldIndex: Math.max(80, Math.min(95, prev.agricultureOverview.cropYieldIndex + (Math.random() - 0.5) * 2)),
          foodSecurityIndex: Math.max(75, Math.min(90, prev.agricultureOverview.foodSecurityIndex + (Math.random() - 0.5) * 1.5)),
          farmProductivity: Math.max(85, Math.min(95, prev.agricultureOverview.farmProductivity + (Math.random() - 0.5) * 1))
        },
        weatherClimate: {
          ...prev.weatherClimate,
          temperature: Math.max(10, Math.min(30, prev.weatherClimate.temperature + (Math.random() - 0.5) * 2)),
          humidity: Math.max(40, Math.min(90, prev.weatherClimate.humidity + (Math.random() - 0.5) * 5)),
          soilMoisture: Math.max(60, Math.min(95, prev.weatherClimate.soilMoisture + (Math.random() - 0.5) * 3))
        }
      }));
    }, 20000);

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

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'increasing': return 'text-green-400';
      case 'decreasing': return 'text-red-400';
      case 'stable': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'High': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 70, excellent = 85, reverse = false) => {
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

  const formatArea = (hectares) => {
    if (hectares >= 1000000) {
      return `${(hectares / 1000000).toFixed(1)}M ha`;
    }
    if (hectares >= 1000) {
      return `${(hectares / 1000).toFixed(0)}K ha`;
    }
    return `${hectares.toLocaleString()} ha`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-yellow-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Agriculture & Food Security Intelligence Center</h1>
              <p className="text-green-300">Farming operations, crop management, livestock, food supply chain & agricultural analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{agriData.currentTime}</div>
            <div className="text-green-300">Agriculture Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Agriculture Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wheat className="w-5 h-5 text-green-400 mr-2" />
                Crop Yield Index
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(agriData.agricultureOverview.cropYieldIndex)}</div>
            <div className="text-green-300 text-sm">Productivity: {formatPercentage(agriData.agricultureOverview.farmProductivity)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-blue-400 mr-2" />
                Food Security
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(agriData.agricultureOverview.foodSecurityIndex)}</div>
            <div className="text-blue-300 text-sm">Availability: {formatPercentage(agriData.foodSupplyChain.foodSecurity.foodAvailability)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sprout className="w-5 h-5 text-purple-400 mr-2" />
                Sustainability
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(agriData.agricultureOverview.sustainabilityScore)}</div>
            <div className="text-purple-300 text-sm">Organic: {formatPercentage(agriData.agricultureOverview.organicFarming)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Droplets className="w-5 h-5 text-cyan-400 mr-2" />
                Water Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(agriData.agricultureOverview.waterUsageEfficiency)}</div>
            <div className="text-cyan-300 text-sm">Soil: {formatPercentage(agriData.weatherClimate.soilMoisture)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sun className="w-5 h-5 text-yellow-400 mr-2" />
                Smart Farming
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(agriData.smartFarming.technologyAdoption)}</div>
            <div className="text-yellow-300 text-sm">IoT Sensors: {formatNumber(agriData.smartFarming.iotSensors)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Thermometer className="w-5 h-5 text-orange-400 mr-2" />
                Farm Profitability
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(agriData.agricultureOverview.farmProfitability)}</div>
            <div className="text-orange-300 text-sm">GDP: {formatCurrency(agriData.agricultureOverview.agriculturalGdp)}</div>
          </div>
        </div>

        {/* Crop Production */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Wheat className="w-5 h-5 text-yellow-400 mr-2" />
            Crop Production Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{formatNumber(agriData.cropProduction.totalProduction)}T</div>
              <div className="text-yellow-300 text-sm">Total Production</div>
              <div className="text-gray-400 text-xs mt-1">Yield: {agriData.cropProduction.yieldPerHectare.toFixed(1)} T/ha</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{agriData.cropProduction.cropDiversity}</div>
              <div className="text-green-300 text-sm">Crop Varieties</div>
              <div className="text-gray-400 text-xs mt-1">Efficiency: {formatPercentage(agriData.cropProduction.harvestEfficiency)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{formatArea(agriData.agricultureOverview.totalFarmland)}</div>
              <div className="text-blue-300 text-sm">Total Farmland</div>
              <div className="text-gray-400 text-xs mt-1">Farms: {formatNumber(agriData.agricultureOverview.activeFarms)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{formatPercentage(agriData.cropProduction.postHarvestLoss)}</div>
              <div className="text-red-300 text-sm">Post-Harvest Loss</div>
              <div className="text-gray-400 text-xs mt-1">Failure Rate: {formatPercentage(agriData.cropProduction.cropFailureRate)}</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Crop</th>
                  <th className="text-center p-3 text-slate-300">Area</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Yield</th>
                  <th className="text-center p-3 text-slate-300">Price</th>
                  <th className="text-center p-3 text-slate-300">Quality</th>
                </tr>
              </thead>
              <tbody>
                {agriData.cropProduction.crops.map((crop, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{crop.crop}</td>
                    <td className="p-3 text-center text-blue-400">{formatArea(crop.area)}</td>
                    <td className="p-3 text-center text-green-400">{formatNumber(crop.production)}T</td>
                    <td className="p-3 text-center text-purple-400">{crop.yield.toFixed(1)} T/ha</td>
                    <td className="p-3 text-center text-orange-400">€{crop.price}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(crop.quality, 85, 92)}`}>
                      {formatPercentage(crop.quality)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Livestock & Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-pink-400 mr-2" />
              Livestock Farming Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{formatNumber(agriData.livestockFarming.totalLivestock)}</div>
                <div className="text-pink-300 text-sm">Total Livestock</div>
                <div className="text-gray-400 text-xs mt-1">Welfare: {formatPercentage(agriData.livestockFarming.animalWelfare)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(agriData.livestockFarming.livestockProductivity)}</div>
                <div className="text-green-300 text-sm">Productivity</div>
                <div className="text-gray-400 text-xs mt-1">Feed Quality: {formatPercentage(agriData.livestockFarming.feedQuality)}</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Livestock Types</h4>
              {agriData.livestockFarming.livestockTypes.map((livestock, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{livestock.type}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-sm">{formatNumber(livestock.count)}</span>
                      <span className="text-green-400 text-sm">{formatNumber(livestock.production)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">{livestock.unit}</span>
                    <span className={`${getPerformanceColor(livestock.health, 85, 92)}`}>
                      Health: {formatPercentage(livestock.health)}
                    </span>
                    <span className={`${getPerformanceColor(livestock.efficiency, 80, 90)}`}>
                      Efficiency: {formatPercentage(livestock.efficiency)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Sun className="w-5 h-5 text-yellow-400 mr-2" />
              Weather & Climate Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{agriData.weatherClimate.temperature.toFixed(1)}°C</div>
                <div className="text-yellow-300 text-sm">Temperature</div>
                <div className="text-gray-400 text-xs mt-1">{agriData.weatherClimate.currentWeather}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(agriData.weatherClimate.soilMoisture)}</div>
                <div className="text-cyan-300 text-sm">Soil Moisture</div>
                <div className="text-gray-400 text-xs mt-1">Humidity: {formatPercentage(agriData.weatherClimate.humidity)}</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Climate Impact</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Temp Variation: {agriData.weatherClimate.climateImpact.temperatureVariation.toFixed(1)}°C</div>
                    <div className="text-slate-300">Precipitation: {agriData.weatherClimate.climateImpact.precipitationVariation.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-orange-400">Crop Stress: {formatPercentage(agriData.weatherClimate.climateImpact.cropStressFactor)}</div>
                    <div className="text-green-400">Adaptation: {formatPercentage(agriData.weatherClimate.climateImpact.adaptationMeasures)}</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Risk Assessment</h4>
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(agriData.weatherClimate.frostRisk)}`}>
                      Frost: {agriData.weatherClimate.frostRisk}
                    </span>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(agriData.weatherClimate.floodRisk)}`}>
                      Flood: {agriData.weatherClimate.floodRisk}
                    </span>
                  </div>
                  <div className="text-yellow-400">
                    Drought: {agriData.weatherClimate.droughtIndex.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agriculture Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Agriculture & Food Security Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {agriData.agricultureAlerts.map((alert, index) => (
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

        {/* Smart Farming & Market Economics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
              Smart Farming Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(agriData.smartFarming.technologyAdoption)}</div>
                <div className="text-cyan-300 text-sm">Technology Adoption</div>
                <div className="text-gray-400 text-xs mt-1">Precision Ag: {formatPercentage(agriData.smartFarming.precisionAgriculture)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(agriData.smartFarming.iotSensors)}</div>
                <div className="text-purple-300 text-sm">IoT Sensors</div>
                <div className="text-gray-400 text-xs mt-1">Drones: {formatNumber(agriData.smartFarming.drones)}</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Smart Technologies</h4>
              {agriData.smartFarming.smartTechnologies.slice(0, 4).map((tech, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{tech.technology}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatPercentage(tech.adoption)}</span>
                    <span className="text-green-400">{formatNumber(tech.farms)}</span>
                    <span className="text-yellow-400">{tech.roi.toFixed(1)}% ROI</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
              Market & Economics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatCurrency(agriData.marketEconomics.agriculturalGdp)}</div>
                <div className="text-emerald-300 text-sm">Agricultural GDP</div>
                <div className="text-gray-400 text-xs mt-1">Farm Income: {formatCurrency(agriData.marketEconomics.farmIncomes)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(agriData.marketEconomics.foodSelfSufficiency)}</div>
                <div className="text-green-300 text-sm">Food Self-Sufficiency</div>
                <div className="text-gray-400 text-xs mt-1">Trade Balance: {formatCurrency(agriData.marketEconomics.tradeBalance)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Product Prices</h4>
              {agriData.marketEconomics.productPrices.slice(0, 4).map((product, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{product.product}</span>
                  <div className="text-xs space-x-2 flex items-center">
                    <span className="text-green-400">€{product.price}</span>
                    <span className={`${getTrendColor(product.trend)}`}>
                      {product.trend}
                    </span>
                    <span className="text-orange-400">{product.volatility.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatCurrency(agriData.marketEconomics.exports)}</div>
                <div className="text-slate-400">Exports</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{formatCurrency(agriData.marketEconomics.imports)}</div>
                <div className="text-slate-400">Imports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}