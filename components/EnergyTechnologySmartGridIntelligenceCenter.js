// Energy Technology & Smart Grid Intelligence Center - Energy & Grid Analytics
import { useState, useEffect } from 'react';
import { Zap, Battery, Sun, Wind, Activity, BarChart3, TrendingUp, Globe, Shield, Target, Monitor, Gauge } from 'lucide-react';

export default function EnergyTechnologySmartGridIntelligenceCenter() {
  const [energyData, setEnergyData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    energyOverview: {
      smartGrids: 234567,
      energyPlatforms: 89012,
      powerGeneration: 28456.7,
      renewableCapacity: 12345.6,
      energyStorage: 4567.8,
      electricVehicles: 45678901,
      gridReliability: 99.97,
      renewableShare: 42.8,
      energyEfficiency: 87.4,
      carbonReduction: 34.6,
      gridStability: 98.9,
      demandResponse: 78.5,
      energyCostSavings: 23.7,
      peakLoadReduction: 18.9,
      transmissionLosses: 6.2,
      powerQuality: 99.1,
      systemUptime: 99.95,
      smartMeterPenetration: 67.8,
      microgridsDeployed: 12456,
      energyAnalyticsAccuracy: 94.3
    },
    energyFacilities: [
      {
        facilityName: 'Tesla Gigafactory Nevada',
        facilityId: 'TESLA-GF-NEVADA-001',
        location: 'Sparks, Nevada, USA',
        facilityType: 'BATTERY MANUFACTURING',
        status: 'OPERATIONAL',
        capacity: 35.0,
        currentOutput: 32.5,
        efficiency: 92.9,
        renewableEnergy: 100.0,
        batteryProduction: 54000000,
        vehicleBatteryPacks: 450000,
        energyStorageSystems: 15000,
        solarCapacity: 70.0,
        energyConsumption: 178.5,
        carbonFootprint: 0.0,
        employeeCount: 7000,
        automationLevel: 89.5,
        qualityRating: 99.7,
        wasteReduction: 95.6,
        waterRecycling: 89.3,
        sustainabilityScore: 'A++',
        certifications: 'ISO 14001, LEED Certified',
        innovationProjects: 23,
        researchPartnerships: 12
      },
      {
        facilityName: 'Hornsea One Wind Farm',
        facilityId: 'HORNSEA-WIND-002',
        location: 'North Sea, UK',
        facilityType: 'OFFSHORE WIND',
        status: 'OPERATIONAL',
        capacity: 1218.0,
        currentOutput: 1095.3,
        efficiency: 89.9,
        turbineCount: 174,
        turbineCapacity: 7.0,
        windSpeed: 12.5,
        capacityFactor: 52.3,
        annualGeneration: 5500000,
        householdsSupplied: 1300000,
        carbonOffset: 2100000,
        operationalHours: 8760,
        maintenanceSchedule: 'QUARTERLY',
        gridConnection: 'HVAC TRANSMISSION',
        environmentalImpact: 'MINIMAL',
        wildlifeProtection: 'RADAR MONITORING',
        seabedImpact: 'MONITORED',
        fishingCoexistence: 'COOPERATIVE',
        economicImpact: '2400 JOBS CREATED'
      },
      {
        facilityName: 'Noor Ouarzazate Solar Complex',
        facilityId: 'NOOR-SOLAR-003',
        location: 'Ouarzazate, Morocco',
        facilityType: 'CONCENTRATED SOLAR POWER',
        status: 'OPERATIONAL',
        capacity: 580.0,
        currentOutput: 465.2,
        efficiency: 80.2,
        solarFieldArea: 3000,
        mirrorCount: 537000,
        thermalStorage: 7.5,
        moltenSaltStorage: 28800,
        annualGeneration: 1600000,
        householdsSupplied: 1300000,
        carbonOffset: 760000,
        waterConsumption: 'REDUCED 70%',
        desertification: 'PREVENTED',
        localEmployment: 3500,
        energyIndependence: '25% NATIONAL GRID',
        tourismBoost: 'SIGNIFICANT',
        technologyTransfer: 'LOCAL EXPERTISE',
        regionalDevelopment: 'ECONOMIC HUB'
      },
      {
        facilityName: 'Dinorwig Power Station',
        facilityId: 'DINORWIG-PUMPED-004',
        location: 'Snowdonia, Wales, UK',
        facilityType: 'PUMPED HYDRO STORAGE',
        status: 'OPERATIONAL',
        capacity: 1728.0,
        storageCapacity: 9100.0,
        efficiency: 76.0,
        responseTime: '12 seconds',
        turbineCount: 6,
        reservoirCapacity: 7000000,
        headHeight: 542,
        pumpingCapacity: 1800.0,
        generationHours: 5.5,
        gridStabilization: 'FREQUENCY RESPONSE',
        blackStartCapability: 'YES',
        peakDemandSupport: 'NATIONAL GRID',
        environmentalIntegration: 'MOUNTAIN LANDSCAPE',
        touristAttraction: 'UNDERGROUND TOURS',
        gridServices: 'ANCILLARY SERVICES',
        operationalFlexibility: 'IMMEDIATE'
      }
    ],
    smartGridSystems: [
      {
        systemName: 'GE Grid Solutions Predix',
        systemId: 'GE-PREDIX-GRID-001',
        provider: 'General Electric',
        category: 'INDUSTRIAL IOT PLATFORM',
        status: 'OPERATIONAL',
        coverage: 'GLOBAL',
        gridAssets: 125000000,
        dataPoints: 50000000000,
        utilities: 4500,
        countries: 89,
        realTimeAnalytics: 'YES',
        predictiveAnalytics: 'MACHINE LEARNING',
        outageReduction: 34.7,
        maintenanceCostSavings: 28.5,
        assetLifeExtension: 15.8,
        gridReliability: 99.97,
        cybersecurityLevel: 'MILITARY GRADE',
        edgeComputing: 'DISTRIBUTED',
        cloudIntegration: 'HYBRID',
        apiConnections: 15000,
        partnerEcosystem: 850,
        digitalTwins: 2500000,
        aiModels: 456,
        customerSatisfaction: 92.4
      },
      {
        systemName: 'Schneider EcoStruxure Grid',
        systemId: 'SCHNEIDER-ECOSTRUXURE-002',
        provider: 'Schneider Electric',
        category: 'SMART GRID MANAGEMENT',
        status: 'OPERATIONAL',
        coverage: 'WORLDWIDE',
        gridConnections: 45000000,
        distributionFeeders: 890000,
        substations: 125000,
        smartMeters: 234000000,
        demandResponsePrograms: 5600,
        energyOptimization: 23.4,
        loadBalancing: 'AUTOMATED',
        faultDetection: '< 30 SECONDS',
        selfHealing: 'ENABLED',
        renewableIntegration: 'SEAMLESS',
        microGridSupport: 'FULL',
        energyTrading: 'PEER-TO-PEER',
        carbonTracking: 'REAL-TIME',
        regulatoryCompliance: '100%',
        interoperability: 'OPEN STANDARDS',
        cybersecurityCertified: 'IEC 62443',
        deploymentTime: '6-12 MONTHS'
      },
      {
        systemName: 'Siemens Spectrum Power',
        systemId: 'SIEMENS-SPECTRUM-003',
        provider: 'Siemens Energy',
        category: 'ENERGY MANAGEMENT SYSTEM',
        status: 'OPERATIONAL',
        coverage: 'REGIONAL',
        transmissionLines: 250000,
        generationUnits: 45000,
        loadDispatch: 'AUTOMATED',
        marketOperations: 'INTEGRATED',
        renewableForecast: 'AI-POWERED',
        demandForecasting: 'STATISTICAL MODELS',
        contingencyAnalysis: 'REAL-TIME',
        stateEstimation: 'WEIGHTED LEAST SQUARES',
        economicDispatch: 'OPTIMIZED',
        ancillaryServices: 'COORDINATED',
        transmissionPlanning: 'LONG-TERM',
        shortTermPlanning: 'HOURLY',
        realTimeOperations: '24/7',
        emergencyProcedures: 'AUTOMATED',
        operatorTraining: 'SIMULATION BASED',
        systemReliability: 99.98
      }
    ],
    renewableEnergy: [
      {
        technologyType: 'Solar Photovoltaic',
        techId: 'SOLAR-PV-001',
        globalCapacity: 1177.0,
        annualAdditions: 191.0,
        costReduction: 85.7,
        efficiencyGains: 22.5,
        leadingCountries: 'China, USA, India, Japan',
        majorManufacturers: 'JinkoSolar, LONGi, Trina Solar',
        techInnovations: 'Perovskite Tandem, Bifacial',
        gridIntegration: 'UTILITY SCALE',
        distributedGeneration: 'ROOFTOP, COMMUNITY',
        energyStorage: 'BATTERY COUPLING',
        smartInverters: 'GRID SUPPORT',
        forecastAccuracy: 94.8,
        curtailmentRate: 3.2,
        capacityFactor: 24.5,
        lcoe: 0.048,
        jobsCreated: 4300000,
        carbonOffset: 1200000000,
        investmentFlow: 148.6,
        policySupport: 'FEED-IN TARIFFS, TAX CREDITS'
      },
      {
        technologyType: 'Wind Power',
        techId: 'WIND-POWER-002',
        globalCapacity: 906.0,
        annualAdditions: 77.0,
        costReduction: 69.0,
        efficiencyGains: 35.2,
        leadingCountries: 'China, USA, Germany, India',
        majorManufacturers: 'Vestas, GE, Siemens Gamesa',
        techInnovations: 'Larger Turbines, Offshore',
        gridIntegration: 'TRANSMISSION UPGRADES',
        offshoreExpansion: 'FLOATING PLATFORMS',
        energyStorage: 'PUMPED HYDRO',
        smartTurbines: 'LIDAR, PREDICTIVE',
        forecastAccuracy: 92.1,
        curtailmentRate: 4.8,
        capacityFactor: 35.4,
        lcoe: 0.033,
        jobsCreated: 1300000,
        carbonOffset: 1400000000,
        investmentFlow: 142.7,
        policySupport: 'RENEWABLE PORTFOLIO STANDARDS'
      },
      {
        technologyType: 'Energy Storage',
        techId: 'ENERGY-STORAGE-003',
        globalCapacity: 27.1,
        annualAdditions: 9.6,
        costReduction: 90.0,
        efficiencyGains: 95.0,
        leadingTechnologies: 'Lithium-ion, Pumped Hydro',
        majorManufacturers: 'CATL, Tesla, BYD, Panasonic',
        techInnovations: 'Solid State, Flow Batteries',
        gridServices: 'FREQUENCY REGULATION',
        peakShaving: 'DEMAND CHARGE REDUCTION',
        renewableIntegration: 'FIRMING POWER',
        electricVehicles: 'V2G CAPABILITIES',
        forecastAccuracy: 89.7,
        roundTripEfficiency: 90.5,
        degradationRate: 2.5,
        lcoe: 0.132,
        jobsCreated: 280000,
        gridStabilization: 'MILLISECOND RESPONSE',
        investmentFlow: 120.1,
        policySupport: 'STORAGE MANDATES'
      }
    ],
    energyAnalytics: [
      {
        analyticsCategory: 'Demand Forecasting',
        systemId: 'DEMAND-FORECAST-001',
        provider: 'Oracle Energy & Water',
        scope: 'UTILITY OPERATIONS',
        status: 'OPERATIONAL',
        forecastAccuracy: 97.8,
        forecastHorizon: '7 days ahead',
        updateFrequency: 'Hourly',
        dataInputs: 'Weather, Economic, Historical',
        machinelearning: 'Deep Neural Networks',
        weatherIntegration: 'NWS, NOAA',
        economicIndicators: 'GDP, Employment',
        seasonalAdjustment: 'AUTOMATED',
        peakLoadPrediction: 99.2,
        baseLoadAccuracy: 98.9,
        loadProfiles: 'CUSTOMER SEGMENTED',
        demandResponseOptimization: 'REAL-TIME',
        gridPlanningSupport: 'LONG-TERM',
        operationalPlanning: 'DAY-AHEAD',
        emergencyPreparedness: 'CONTINGENCY ANALYSIS',
        costSavings: 45.6
      },
      {
        analyticsCategory: 'Asset Performance',
        systemId: 'ASSET-PERFORMANCE-002',
        provider: 'GE Digital Energy',
        scope: 'GENERATION & TRANSMISSION',
        status: 'OPERATIONAL',
        assetsMonitored: 125000,
        performanceMetrics: 450,
        predictiveModels: 89,
        failurePrediction: 94.5,
        maintenanceOptimization: 'CONDITION-BASED',
        assetLifecycle: 'CRADLE TO GRAVE',
        reliabilityAnalysis: 'WEIBULL DISTRIBUTION',
        riskAssessment: 'MONTE CARLO',
        costBenefitAnalysis: 'ROI OPTIMIZATION',
        spareParts: 'INVENTORY OPTIMIZATION',
        workforceScheduling: 'AUTOMATED',
        regulatoryCompliance: 'NERC CIP',
        environmentalImpact: 'MONITORED',
        safetyMetrics: 'ZERO INCIDENTS',
        digitalTwinIntegration: 'REAL-TIME',
        investmentPlanning: 'CAPITAL ALLOCATION'
      },
      {
        analyticsCategory: 'Energy Trading',
        systemId: 'ENERGY-TRADING-003',
        provider: 'Trayport Energy Trading',
        scope: 'WHOLESALE MARKETS',
        status: 'OPERATIONAL',
        tradingVolume: 1250000,
        marketParticipants: 4500,
        commodities: 'Electricity, Gas, Coal, Carbon',
        tradingAlgorithms: 'HIGH FREQUENCY',
        riskManagement: 'VALUE AT RISK',
        portfolioOptimization: 'MEAN VARIANCE',
        priceForecasting: 'MACHINE LEARNING',
        arbitrageOpportunities: 'AUTOMATED DETECTION',
        hedgingStrategies: 'DYNAMIC',
        marketMaking: 'LIQUIDITY PROVISION',
        regulatoryReporting: 'AUTOMATED',
        settlementProcessing: 'STRAIGHT THROUGH',
        creditRiskManagement: 'REAL-TIME',
        marketSurveillance: 'COMPLIANCE',
        profitability: 'OPTIMIZED',
        executionLatency: '< 1 MILLISECOND'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        powerGeneration: 28456.7,
        renewableShare: 42.8,
        gridStability: 98.9,
        energyTraded: 125000,
        demandResponse: 78.5,
        storageCharged: 4567.8,
        alerts: 23,
        incidents: 0
      },
      {
        period: 'Last 24 Hours',
        powerGeneration: 683761.2,
        renewableShare: 41.9,
        gridStability: 98.7,
        energyTraded: 2890000,
        demandResponse: 77.8,
        storageCharged: 98765.4,
        alerts: 456,
        incidents: 2
      },
      {
        period: 'Last 7 Days',
        powerGeneration: 4786328.4,
        renewableShare: 41.2,
        gridStability: 98.4,
        energyTraded: 19850000,
        demandResponse: 76.9,
        storageCharged: 687654.3,
        alerts: 2890,
        incidents: 8
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        energyOverview: {
          ...prev.energyOverview,
          gridReliability: Math.max(99.0, Math.min(99.99, prev.energyOverview.gridReliability + (Math.random() - 0.5) * 0.01)),
          renewableShare: Math.max(35.0, Math.min(50.0, prev.energyOverview.renewableShare + (Math.random() - 0.5) * 1.0))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
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
  const formatGW = (gw) => `${gw.toFixed(1)} GW`;
  const formatGWh = (gwh) => `${gwh.toFixed(1)} GWh`;
  const formatMWh = (mwh) => `${formatNumber(mwh)} MWh`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Energy Technology & Smart Grid Intelligence Center</h1>
              <p className="text-slate-300">Energy & grid analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{energyData.currentTime}</div>
            <div className="text-slate-300">Energy Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Energy Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Grids
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(energyData.energyOverview.smartGrids)}</div>
            <div className="text-yellow-300 text-sm">{formatNumber(energyData.energyOverview.energyPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-orange-400 mr-2" />
                Generation
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatGW(energyData.energyOverview.powerGeneration)}</div>
            <div className="text-orange-300 text-sm">Total Power</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sun className="w-5 h-5 text-green-400 mr-2" />
                Renewable
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(energyData.energyOverview.renewableShare)}</div>
            <div className="text-green-300 text-sm">Share</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Battery className="w-5 h-5 text-blue-400 mr-2" />
                Storage
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatGW(energyData.energyOverview.energyStorage)}</div>
            <div className="text-blue-300 text-sm">Capacity</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-cyan-400 mr-2" />
                Reliability
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(energyData.energyOverview.gridReliability)}</div>
            <div className="text-cyan-300 text-sm">Grid Uptime</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(energyData.energyOverview.energyEfficiency)}</div>
            <div className="text-purple-300 text-sm">System</div>
          </div>
        </div>

        {/* Energy Facilities & Smart Grid Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Energy Facilities
            </h3>
            <div className="space-y-4">
              {energyData.energyFacilities.map((facility, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{facility.facilityName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(facility.status)}`}>
                        {facility.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{facility.location}</div>
                    <div className="text-blue-400">{facility.facilityType}</div>
                    <div className="text-green-400">
                      {facility.sustainabilityScore && `Rating: ${facility.sustainabilityScore}`}
                      {facility.environmentalImpact && `Impact: ${facility.environmentalImpact}`}
                      {facility.environmentalIntegration && `Integration: ${facility.environmentalIntegration}`}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      Capacity: {facility.capacity ? formatGW(facility.capacity) : 
                                facility.storageCapacity ? formatGWh(facility.storageCapacity) : 
                                'N/A'}
                    </div>
                    <div className="text-purple-400">
                      {facility.currentOutput && `Output: ${formatGW(facility.currentOutput)}`}
                      {facility.efficiency && `Efficiency: ${formatPercentage(facility.efficiency)}`}
                      {facility.responseTime && `Response: ${facility.responseTime}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Performance</span>
                      <span>
                        {facility.efficiency && formatPercentage(facility.efficiency)}
                        {facility.qualityRating && formatPercentage(facility.qualityRating)}
                        {facility.capacityFactor && formatPercentage(facility.capacityFactor)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${facility.efficiency || facility.qualityRating || facility.capacityFactor || 0}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {facility.renewableEnergy && `Renewable: ${formatPercentage(facility.renewableEnergy)}`}
                      {facility.turbineCount && `Turbines: ${facility.turbineCount}`}
                      {facility.batteryProduction && `Batteries: ${formatNumber(facility.batteryProduction)}/yr`}
                      {facility.annualGeneration && `Generation: ${formatNumber(facility.annualGeneration)} MWh`}
                    </div>
                    <div className="text-indigo-400">
                      {facility.employeeCount && `Employees: ${formatNumber(facility.employeeCount)}`}
                      {facility.householdsSupplied && `Households: ${formatNumber(facility.householdsSupplied)}`}
                      {facility.localEmployment && `Local Jobs: ${facility.localEmployment}`}
                      {facility.economicImpact && `Economy: ${facility.economicImpact}`}
                    </div>
                    <div className="text-cyan-400">
                      {facility.carbonFootprint !== undefined && `Carbon: ${facility.carbonFootprint} tons`}
                      {facility.carbonOffset && `CO2 Offset: ${formatNumber(facility.carbonOffset)} tons`}
                      {facility.energyIndependence && `Independence: ${facility.energyIndependence}`}
                    </div>
                    <div className="text-green-400">
                      {facility.automationLevel && `Automation: ${formatPercentage(facility.automationLevel)}`}
                      {facility.gridConnection && `Grid: ${facility.gridConnection}`}
                      {facility.gridStabilization && `Services: ${facility.gridStabilization}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-blue-400 mr-2" />
              Smart Grid Systems
            </h3>
            <div className="space-y-4">
              {energyData.smartGridSystems.map((system, index) => (
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
                    <div className="text-cyan-400">{system.provider}</div>
                    <div className="text-blue-400">{system.category}</div>
                    <div className="text-green-400">{system.coverage}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {system.utilities && `Utilities: ${formatNumber(system.utilities)}`}
                      {system.transmissionLines && `Lines: ${formatNumber(system.transmissionLines)}`}
                      {system.distributionFeeders && `Feeders: ${formatNumber(system.distributionFeeders)}`}
                    </div>
                    <div className="text-purple-400">
                      {system.countries && `Countries: ${system.countries}`}
                      {system.substations && `Substations: ${formatNumber(system.substations)}`}
                      {system.generationUnits && `Generation: ${formatNumber(system.generationUnits)}`}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>
                        {system.gridReliability && 'Reliability'}
                        {system.customerSatisfaction && 'Satisfaction'}
                        {system.systemReliability && 'System Reliability'}
                      </span>
                      <span>
                        {system.gridReliability && formatPercentage(system.gridReliability)}
                        {system.customerSatisfaction && formatPercentage(system.customerSatisfaction)}
                        {system.systemReliability && formatPercentage(system.systemReliability)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${system.gridReliability || system.customerSatisfaction || system.systemReliability || 0}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {system.gridAssets && `Assets: ${formatNumber(system.gridAssets)}`}
                      {system.gridConnections && `Connections: ${formatNumber(system.gridConnections)}`}
                      {system.smartMeters && `Smart Meters: ${formatNumber(system.smartMeters)}`}
                    </div>
                    <div className="text-indigo-400">
                      {system.realTimeAnalytics && `Real-time: ${system.realTimeAnalytics}`}
                      {system.loadBalancing && `Load Balancing: ${system.loadBalancing}`}
                      {system.loadDispatch && `Load Dispatch: ${system.loadDispatch}`}
                    </div>
                    <div className="text-cyan-400">
                      {system.outageReduction && `Outage Reduction: ${formatPercentage(system.outageReduction)}`}
                      {system.energyOptimization && `Energy Opt: ${formatPercentage(system.energyOptimization)}`}
                      {system.faultDetection && `Fault Detection: ${system.faultDetection}`}
                    </div>
                    <div className="text-green-400">
                      {system.cybersecurityLevel && `Security: ${system.cybersecurityLevel}`}
                      {system.cybersecurityCertified && `Certified: ${system.cybersecurityCertified}`}
                      {system.regulatoryCompliance && `Compliance: ${system.regulatoryCompliance}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Renewable Energy & Energy Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Sun className="w-5 h-5 text-green-400 mr-2" />
              Renewable Energy Technologies
            </h3>
            <div className="space-y-4">
              {energyData.renewableEnergy.map((renewable, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{renewable.technologyType}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Global: {formatGW(renewable.globalCapacity)}</div>
                    <div className="text-blue-400">Added: {formatGW(renewable.annualAdditions)}</div>
                    <div className="text-green-400">LCOE: ${renewable.lcoe}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Cost Reduction: {formatPercentage(renewable.costReduction)}</div>
                    <div className="text-purple-400">Efficiency: {formatPercentage(renewable.efficiencyGains)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Capacity Factor</span>
                      <span>{formatPercentage(renewable.capacityFactor)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${renewable.capacityFactor}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Leaders: {renewable.leadingCountries}</div>
                    <div className="text-indigo-400">Manufacturers: {renewable.majorManufacturers}</div>
                    <div className="text-cyan-400">Innovation: {renewable.techInnovations}</div>
                    <div className="text-green-400">Jobs: {formatNumber(renewable.jobsCreated)}</div>
                    <div className="text-blue-400">Investment: ${renewable.investmentFlow}B</div>
                    <div className="text-orange-400">CO2 Offset: {formatNumber(renewable.carbonOffset)} tons</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Energy Analytics Systems
            </h3>
            <div className="space-y-4">
              {energyData.energyAnalytics.map((analytics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{analytics.analyticsCategory}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(analytics.status)}`}>
                        {analytics.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{analytics.provider}</div>
                    <div className="text-blue-400">{analytics.scope}</div>
                    <div className="text-green-400">{analytics.systemId}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span>
                        {analytics.forecastAccuracy && formatPercentage(analytics.forecastAccuracy)}
                        {analytics.failurePrediction && formatPercentage(analytics.failurePrediction)}
                        {analytics.profitability && analytics.profitability}
                      </span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${analytics.forecastAccuracy || analytics.failurePrediction || 95}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {analytics.forecastHorizon && `Horizon: ${analytics.forecastHorizon}`}
                      {analytics.assetsMonitored && `Assets: ${formatNumber(analytics.assetsMonitored)}`}
                      {analytics.tradingVolume && `Volume: ${formatNumber(analytics.tradingVolume)}`}
                    </div>
                    <div className="text-indigo-400">
                      {analytics.updateFrequency && `Updates: ${analytics.updateFrequency}`}
                      {analytics.performanceMetrics && `Metrics: ${analytics.performanceMetrics}`}
                      {analytics.marketParticipants && `Participants: ${formatNumber(analytics.marketParticipants)}`}
                    </div>
                    <div className="text-cyan-400">
                      {analytics.machinelearning && `ML: ${analytics.machinelearning}`}
                      {analytics.predictiveModels && `Models: ${analytics.predictiveModels}`}
                      {analytics.tradingAlgorithms && `Algorithms: ${analytics.tradingAlgorithms}`}
                    </div>
                    <div className="text-green-400">
                      {analytics.costSavings && `Savings: $${analytics.costSavings}M`}
                      {analytics.maintenanceOptimization && `Maintenance: ${analytics.maintenanceOptimization}`}
                      {analytics.executionLatency && `Latency: ${analytics.executionLatency}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            Energy Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {energyData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Generation: {formatGW(metrics.powerGeneration)}</div>
                  <div className="text-green-400">Renewable: {formatPercentage(metrics.renewableShare)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Stability: {formatPercentage(metrics.gridStability)}</div>
                  <div className="text-yellow-400">Demand Response: {formatPercentage(metrics.demandResponse)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Traded: {formatMWh(metrics.energyTraded)}</div>
                  <div className="text-orange-400">Storage: {formatGWh(metrics.storageCharged)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Alerts: {metrics.alerts}</div>
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