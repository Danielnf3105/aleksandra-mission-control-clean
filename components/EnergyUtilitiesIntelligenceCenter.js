// Energy & Utilities Intelligence Center - Power Generation, Grid Operations, Renewable Energy & Utility Management
import { useState, useEffect } from 'react';
import { Zap, Sun, Wind, Droplets, TrendingUp, TrendingDown, Activity, Battery, AlertTriangle, CheckCircle, BarChart3, PieChart } from 'lucide-react';

export default function EnergyUtilitiesIntelligenceCenter() {
  const [energyData, setEnergyData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    energyOverview: {
      totalGeneration: 2847.5, // MW current
      totalDemand: 2654.8, // MW current
      gridReliability: 99.7, // percentage
      renewablePercentage: 67.4,
      carbonIntensity: 89.2, // gCO2/kWh
      energyEfficiency: 91.8,
      gridStability: 94.6,
      powerQuality: 96.3,
      systemLoad: 93.2, // percentage of capacity
      peakDemand: 3245.7, // MW today's peak
      energyCosts: 0.087, // EUR/kWh average
      transmissionLosses: 3.4, // percentage
      gridFrequency: 50.02, // Hz
      systemReserves: 387.9 // MW available reserves
    },
    powerGeneration: {
      totalCapacity: 4567.8, // MW installed
      currentOutput: 2847.5, // MW current
      capacityFactor: 62.3, // percentage
      generationSources: [
        { source: 'Solar PV', capacity: 1234.5, output: 890.2, percentage: 31.3, efficiency: 72.1, availability: 94.7 },
        { source: 'Wind Onshore', capacity: 987.6, output: 756.4, percentage: 26.6, efficiency: 76.6, availability: 91.2 },
        { source: 'Hydroelectric', capacity: 678.9, output: 567.8, percentage: 19.9, efficiency: 83.7, availability: 97.8 },
        { source: 'Wind Offshore', capacity: 456.7, output: 289.3, percentage: 10.2, efficiency: 63.4, availability: 87.9 },
        { source: 'Natural Gas', capacity: 789.4, output: 234.6, percentage: 8.2, efficiency: 29.7, availability: 98.9 },
        { source: 'Biomass', capacity: 234.5, output: 78.9, percentage: 2.8, efficiency: 33.6, availability: 89.7 },
        { source: 'Geothermal', capacity: 123.4, output: 30.3, percentage: 1.1, efficiency: 24.5, availability: 92.4 },
        { source: 'Nuclear', capacity: 62.8, output: 0.0, percentage: 0.0, efficiency: 0.0, availability: 0.0 }
      ],
      forecastAccuracy: 94.2, // percentage
      weatherImpact: 'Moderate',
      maintenanceScheduled: 15, // units
      unplannedOutages: 3
    },
    gridOperations: {
      transmissionLines: 1247,
      operationalLines: 1189,
      distributionNetwork: 45678, // km
      substations: 234,
      transformers: 567,
      smartMeters: 1234567,
      gridAutomation: 87.9, // percentage
      loadBalancing: 96.4,
      voltageStability: 98.7,
      systemInertia: 4567.8, // MW·s
      gridTopology: 'Meshed',
      emergencyResponse: 'Ready',
      gridMetrics: {
        transmissionUtilization: 67.8, // percentage
        distributionLosses: 4.2, // percentage
        powerQualityEvents: 12, // today
        voltageDeviations: 0.8, // percentage
        frequencyDeviations: 0.02, // Hz
        harmonicDistortion: 2.1 // percentage
      },
      protectionSystems: {
        relayOperations: 3, // today
        circuitBreakerTrips: 2,
        faultDetectionTime: 15.7, // milliseconds
        isolationTime: 234.5, // milliseconds
        restorationTime: 12.4 // minutes average
      }
    },
    renewableEnergy: {
      totalRenewableCapacity: 2514.7, // MW
      currentRenewableOutput: 1512.4, // MW
      renewablePercentage: 67.4,
      solarGeneration: {
        installedCapacity: 1234.5, // MW
        currentOutput: 890.2, // MW
        dailyGeneration: 12456.7, // MWh
        efficiency: 19.8, // percentage
        irradiance: 756.4, // W/m²
        weatherConditions: 'Partly Cloudy',
        forecastAccuracy: 92.4,
        panelTemperature: 32.5 // °C
      },
      windGeneration: {
        onshoreCapacity: 987.6, // MW
        offshoreCapacity: 456.7, // MW
        totalWindOutput: 1045.7, // MW
        windSpeed: 12.4, // m/s average
        turbineAvailability: 89.6, // percentage
        forecastAccuracy: 89.7,
        windDirection: 'Southwest',
        gusts: 18.9 // m/s
      },
      hydroGeneration: {
        capacity: 678.9, // MW
        output: 567.8, // MW
        reservoirLevel: 78.9, // percentage
        waterFlow: 234.5, // m³/s
        efficiency: 91.2,
        runOfRiverPlants: 12,
        pumpedStoragePlants: 3
      },
      energyStorage: {
        totalStorageCapacity: 1234.5, // MWh
        currentStorageLevel: 789.3, // MWh
        storageUtilization: 63.9, // percentage
        chargingRate: 234.5, // MW
        dischargingRate: 189.7, // MW
        roundTripEfficiency: 89.4, // percentage
        cycleLife: 6789, // cycles remaining
        batterySystems: [
          { type: 'Lithium-ion', capacity: 567.8, level: 378.9, efficiency: 92.4, temperature: 25.7 },
          { type: 'Flow Battery', capacity: 234.5, level: 156.7, efficiency: 85.6, temperature: 22.3 },
          { type: 'Compressed Air', capacity: 345.6, level: 201.2, efficiency: 78.9, pressure: 67.8 },
          { type: 'Pumped Hydro', capacity: 86.6, level: 52.5, efficiency: 82.3, reservoir: 89.7 }
        ]
      }
    },
    demandManagement: {
      totalDemand: 2654.8, // MW current
      residentialDemand: 1127.3, // MW
      commercialDemand: 798.4, // MW
      industrialDemand: 729.1, // MW
      demandForecast: 2789.4, // MW next hour
      peakDemandToday: 3245.7, // MW
      demandResponse: {
        enrolledCustomers: 234567,
        availableReduction: 456.7, // MW
        activatedToday: 123.4, // MW
        responsiveness: 87.9, // percentage
        incentivePayments: 45678 // EUR today
      },
      loadProfiles: [
        { sector: 'Residential', demand: 1127.3, percentage: 42.5, growth: 2.3, efficiency: 76.8 },
        { sector: 'Commercial', demand: 798.4, percentage: 30.1, growth: 1.8, efficiency: 82.4 },
        { sector: 'Industrial', demand: 729.1, percentage: 27.5, growth: -0.7, efficiency: 89.7 },
        { sector: 'Transportation', demand: 0.0, percentage: 0.0, growth: 234.5, efficiency: 94.2 }
      ],
      smartGrid: {
        smartMeterPenetration: 89.7, // percentage
        advancedMeteringInfrastructure: 94.2,
        homeEnergyManagementSystems: 34.7,
        electricVehicleCharging: 12.4, // MW current
        distributedEnergyResources: 567.8, // MW capacity
        microgrids: 23 // active microgrids
      }
    },
    utilityOperations: {
      customerBase: 1234567,
      serviceReliability: 99.7, // percentage uptime
      averageOutageTime: 45.7, // minutes per year
      customerSatisfaction: 87.9,
      billAccuracy: 99.2,
      collectionRate: 97.8,
      connectionRequests: 234, // pending
      serviceConnections: 89, // completed today
      meterReads: 45678, // today
      utilityMetrics: {
        systemEfficiency: 91.8, // percentage
        networkLosses: 7.6, // percentage total
        operationalCosts: 0.045, // EUR/kWh
        maintenanceEfficiency: 89.7,
        workforceProductivity: 94.2,
        assetUtilization: 78.9
      },
      customerService: {
        callCenterVolume: 567, // calls today
        averageWaitTime: 2.3, // minutes
        firstCallResolution: 82.4, // percentage
        onlineServiceUsage: 67.8, // percentage of customers
        mobileAppUsers: 456789,
        digitalPayments: 78.9 // percentage of bills
      }
    },
    energyMarkets: {
      spotPrice: 87.45, // EUR/MWh
      dayAheadPrice: 89.67, // EUR/MWh
      capacityPrice: 45.67, // EUR/MW/day
      carbonPrice: 23.45, // EUR/tCO2
      renewableCertificates: 1.23, // EUR/MWh
      fuelPrices: {
        naturalGas: 34.56, // EUR/MWh
        coal: 23.45, // EUR/MWh
        oil: 67.89, // EUR/MWh
        uranium: 12.34 // EUR/MWh
      },
      marketParticipants: 156,
      tradingVolume: 23456.7, // MWh today
      marketClearing: 'Successful',
      priceVolatility: 12.4, // percentage
      crossBorderTrading: 234.5, // MW net export
      balancingMarket: {
        imbalanceVolume: 45.7, // MW
        imbalancePrice: 123.45, // EUR/MWh
        reserveActivation: 12.3, // MW
        regulatingPower: 89.7 // MW available
      }
    },
    environmentalImpact: {
      carbonEmissions: 12345.6, // tons CO2 today
      carbonIntensity: 89.2, // gCO2/kWh
      emissionReduction: 23.4, // percentage vs baseline
      airQualityIndex: 67.8,
      waterUsage: 234567, // m³ today
      wasteProduction: 123.4, // tons today
      recyclingRate: 78.9, // percentage
      environmentalCompliance: 97.8,
      sustainabilityScore: 82.4,
      biodiversityImpact: 'Low',
      noiseLevel: 45.6, // dB average
      landUse: 567.8, // hectares
      wildlifeProtection: 94.2, // percentage compliance
      environmentalMonitoring: [
        { parameter: 'CO2 Emissions', value: 89.2, unit: 'gCO2/kWh', target: 75.0, compliance: 84.0 },
        { parameter: 'NOx Emissions', value: 12.4, unit: 'mg/Nm³', target: 15.0, compliance: 100.0 },
        { parameter: 'SOx Emissions', value: 8.9, unit: 'mg/Nm³', target: 10.0, compliance: 100.0 },
        { parameter: 'Particulate Matter', value: 5.6, unit: 'mg/Nm³', target: 8.0, compliance: 100.0 },
        { parameter: 'Water Temperature', value: 23.4, unit: '°C', target: 25.0, compliance: 100.0 },
        { parameter: 'Water pH', value: 7.2, unit: 'pH', target: 7.5, compliance: 100.0 }
      ]
    },
    energyAlerts: [
      {
        type: 'WARNING',
        category: 'Grid Operations',
        message: 'Transmission line voltage deviation detected on Line 47 - monitoring for stability',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Grid Operations Team',
        timestamp: '02:00',
        recommendations: ['Monitor voltage levels', 'Prepare load shedding', 'Check transformer status']
      },
      {
        type: 'SUCCESS',
        category: 'Renewable Energy',
        message: 'Solar generation exceeding forecast by 12% - optimal weather conditions',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Renewables Team',
        timestamp: '01:55',
        recommendations: ['Optimize storage charging', 'Reduce conventional generation', 'Update forecasting models']
      },
      {
        type: 'INFO',
        category: 'Demand Management',
        message: 'Peak demand forecast revised up 3.2% for tomorrow due to weather conditions',
        impact: 'LOW',
        actionRequired: true,
        assignedTo: 'System Operations',
        timestamp: '01:50',
        recommendations: ['Activate demand response', 'Schedule additional generation', 'Monitor reserves']
      },
      {
        type: 'CRITICAL',
        category: 'Equipment Failure',
        message: 'Wind turbine #45 offline due to gearbox failure - 2.1 MW capacity unavailable',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Maintenance Team',
        timestamp: '01:45',
        recommendations: ['Deploy repair crew', 'Order replacement parts', 'Adjust generation schedule']
      }
    ],
    regulatoryCompliance: {
      complianceScore: 97.8,
      regulatoryFrameworks: [
        { framework: 'European Grid Code', compliance: 98.9, lastAudit: '3 months ago', findings: 1 },
        { framework: 'Renewable Energy Directive', compliance: 96.7, lastAudit: '6 months ago', findings: 2 },
        { framework: 'Emissions Trading System', compliance: 99.2, lastAudit: '4 months ago', findings: 0 },
        { framework: 'Electricity Market Regulation', compliance: 97.1, lastAudit: '2 months ago', findings: 3 }
      ],
      permits: 234,
      validPermits: 229,
      expiredPermits: 3,
      pendingApplications: 12,
      environmentalLicenses: 45,
      safetyCompliance: 98.7,
      reportingRequirements: 67,
      completedReports: 63,
      overdueReports: 4
    },
    futureProjections: {
      demandGrowth: 2.3, // percentage annual
      renewableTargets: 85.0, // percentage by 2030
      carbonNeutralTarget: 2050,
      investmentRequired: 2.3, // billion EUR
      gridModernization: 67.8, // percentage complete
      smartGridRollout: 89.7, // percentage complete
      electrificationRate: 34.7, // percentage transport sector
      energyIndependence: 78.9, // percentage
      resilienceScore: 82.4,
      sustainabilityRating: 'A-'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        energyOverview: {
          ...prev.energyOverview,
          totalGeneration: Math.max(2000, Math.min(3500, prev.energyOverview.totalGeneration + (Math.random() - 0.5) * 100)),
          totalDemand: Math.max(2000, Math.min(3200, prev.energyOverview.totalDemand + (Math.random() - 0.5) * 80)),
          renewablePercentage: Math.max(60, Math.min(75, prev.energyOverview.renewablePercentage + (Math.random() - 0.5) * 3)),
          gridFrequency: Math.max(49.95, Math.min(50.05, prev.energyOverview.gridFrequency + (Math.random() - 0.5) * 0.02))
        },
        powerGeneration: {
          ...prev.powerGeneration,
          currentOutput: Math.max(2000, Math.min(3500, prev.powerGeneration.currentOutput + (Math.random() - 0.5) * 100))
        }
      }));
    }, 18000);

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

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-3 h-3 text-red-400" />;
      case 'decreasing': return <TrendingDown className="w-3 h-3 text-green-400" />;
      default: return <span className="w-3 h-3 text-gray-400">→</span>;
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
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

  const formatEnergy = (mw) => {
    if (mw >= 1000) {
      return `${(mw / 1000).toFixed(1)} GW`;
    }
    return `${mw.toFixed(1)} MW`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-yellow-900 via-slate-900 to-emerald-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-yellow-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-yellow-600 to-emerald-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Energy & Utilities Intelligence Center</h1>
              <p className="text-yellow-300">Power generation, grid operations, renewable energy, utilities management & energy analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-yellow-400">{energyData.currentTime}</div>
            <div className="text-yellow-300">Energy Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Energy Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Generation
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatEnergy(energyData.energyOverview.totalGeneration)}</div>
            <div className="text-yellow-300 text-sm">Demand: {formatEnergy(energyData.energyOverview.totalDemand)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sun className="w-5 h-5 text-green-400 mr-2" />
                Renewable %
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(energyData.energyOverview.renewablePercentage)}</div>
            <div className="text-green-300 text-sm">Target: 85% by 2030</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                Grid Reliability
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(energyData.energyOverview.gridReliability)}</div>
            <div className="text-blue-300 text-sm">Frequency: {energyData.energyOverview.gridFrequency.toFixed(2)} Hz</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Carbon Intensity
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{energyData.energyOverview.carbonIntensity.toFixed(0)}</div>
            <div className="text-purple-300 text-sm">gCO2/kWh</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Battery className="w-5 h-5 text-cyan-400 mr-2" />
                Energy Price
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">€{energyData.energyMarkets.spotPrice.toFixed(0)}</div>
            <div className="text-cyan-300 text-sm">EUR/MWh</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Droplets className="w-5 h-5 text-emerald-400 mr-2" />
                System Load
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(energyData.energyOverview.systemLoad)}</div>
            <div className="text-emerald-300 text-sm">Reserves: {formatEnergy(energyData.energyOverview.systemReserves)}</div>
          </div>
        </div>

        {/* Power Generation Sources */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 text-green-400 mr-2" />
            Power Generation Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{formatEnergy(energyData.powerGeneration.totalCapacity)}</div>
              <div className="text-green-300 text-sm">Total Capacity</div>
              <div className="text-gray-400 text-xs mt-1">Current: {formatEnergy(energyData.powerGeneration.currentOutput)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{formatPercentage(energyData.powerGeneration.capacityFactor)}</div>
              <div className="text-blue-300 text-sm">Capacity Factor</div>
              <div className="text-gray-400 text-xs mt-1">Forecast: {formatPercentage(energyData.powerGeneration.forecastAccuracy)}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{energyData.powerGeneration.unplannedOutages}</div>
              <div className="text-orange-300 text-sm">Unplanned Outages</div>
              <div className="text-gray-400 text-xs mt-1">Maintenance: {energyData.powerGeneration.maintenanceScheduled}</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Source</th>
                  <th className="text-center p-3 text-slate-300">Capacity</th>
                  <th className="text-center p-3 text-slate-300">Output</th>
                  <th className="text-center p-3 text-slate-300">Share</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">Availability</th>
                </tr>
              </thead>
              <tbody>
                {energyData.powerGeneration.generationSources.map((source, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{source.source}</td>
                    <td className="p-3 text-center text-blue-400">{formatEnergy(source.capacity)}</td>
                    <td className="p-3 text-center text-green-400">{formatEnergy(source.output)}</td>
                    <td className="p-3 text-center text-purple-400">{formatPercentage(source.percentage)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(source.efficiency, 60, 80)}`}>
                      {formatPercentage(source.efficiency)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(source.availability, 85, 95)}`}>
                      {formatPercentage(source.availability)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Renewable Energy & Grid Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Sun className="w-5 h-5 text-yellow-400 mr-2" />
              Renewable Energy Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{formatEnergy(energyData.renewableEnergy.totalRenewableCapacity)}</div>
                <div className="text-yellow-300 text-sm">Renewable Capacity</div>
                <div className="text-gray-400 text-xs mt-1">Output: {formatEnergy(energyData.renewableEnergy.currentRenewableOutput)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(energyData.renewableEnergy.renewablePercentage)}</div>
                <div className="text-green-300 text-sm">Renewable Share</div>
                <div className="text-gray-400 text-xs mt-1">Target: 85% by 2030</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                  <Sun className="w-4 h-4 text-yellow-400 mr-1" />
                  Solar Generation
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Output: {formatEnergy(energyData.renewableEnergy.solarGeneration.currentOutput)}</div>
                    <div className="text-slate-300">Efficiency: {formatPercentage(energyData.renewableEnergy.solarGeneration.efficiency)}</div>
                    <div className="text-slate-300">Irradiance: {energyData.renewableEnergy.solarGeneration.irradiance.toFixed(0)} W/m²</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Daily: {formatNumber(energyData.renewableEnergy.solarGeneration.dailyGeneration)} MWh</div>
                    <div className="text-green-400">Forecast: {formatPercentage(energyData.renewableEnergy.solarGeneration.forecastAccuracy)}</div>
                    <div className="text-orange-400">Temp: {energyData.renewableEnergy.solarGeneration.panelTemperature}°C</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                  <Wind className="w-4 h-4 text-blue-400 mr-1" />
                  Wind Generation
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Output: {formatEnergy(energyData.renewableEnergy.windGeneration.totalWindOutput)}</div>
                    <div className="text-slate-300">Wind Speed: {energyData.renewableEnergy.windGeneration.windSpeed.toFixed(1)} m/s</div>
                    <div className="text-slate-300">Direction: {energyData.renewableEnergy.windGeneration.windDirection}</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Availability: {formatPercentage(energyData.renewableEnergy.windGeneration.turbineAvailability)}</div>
                    <div className="text-green-400">Forecast: {formatPercentage(energyData.renewableEnergy.windGeneration.forecastAccuracy)}</div>
                    <div className="text-orange-400">Gusts: {energyData.renewableEnergy.windGeneration.gusts.toFixed(1)} m/s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Grid Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{energyData.gridOperations.operationalLines}</div>
                <div className="text-cyan-300 text-sm">Operational Lines</div>
                <div className="text-gray-400 text-xs mt-1">Total: {energyData.gridOperations.transmissionLines}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(energyData.gridOperations.gridAutomation)}</div>
                <div className="text-blue-300 text-sm">Grid Automation</div>
                <div className="text-gray-400 text-xs mt-1">Smart Meters: {formatNumber(energyData.gridOperations.smartMeters)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Grid Metrics</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="text-blue-400 font-medium">{formatPercentage(energyData.gridOperations.loadBalancing)}</div>
                  <div className="text-slate-400">Load Balancing</div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="text-green-400 font-medium">{formatPercentage(energyData.gridOperations.voltageStability)}</div>
                  <div className="text-slate-400">Voltage Stability</div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="text-yellow-400 font-medium">{formatPercentage(energyData.gridOperations.gridMetrics.transmissionUtilization)}</div>
                  <div className="text-slate-400">Transmission Util</div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="text-purple-400 font-medium">{formatPercentage(energyData.gridOperations.gridMetrics.distributionLosses)}</div>
                  <div className="text-slate-400">Distribution Loss</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Protection Systems</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-300">Relay Operations: {energyData.gridOperations.protectionSystems.relayOperations}</div>
                  <div className="text-slate-300">Detection: {energyData.gridOperations.protectionSystems.faultDetectionTime.toFixed(1)} ms</div>
                </div>
                <div>
                  <div className="text-orange-400">Breaker Trips: {energyData.gridOperations.protectionSystems.circuitBreakerTrips}</div>
                  <div className="text-green-400">Restoration: {energyData.gridOperations.protectionSystems.restorationTime.toFixed(1)} min</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Energy & Utilities Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {energyData.energyAlerts.map((alert, index) => (
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

        {/* Energy Storage & Demand Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Battery className="w-5 h-5 text-purple-400 mr-2" />
              Energy Storage Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(energyData.renewableEnergy.energyStorage.currentStorageLevel)} MWh</div>
                <div className="text-purple-300 text-sm">Current Storage</div>
                <div className="text-gray-400 text-xs mt-1">Capacity: {formatNumber(energyData.renewableEnergy.energyStorage.totalStorageCapacity)} MWh</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(energyData.renewableEnergy.energyStorage.roundTripEfficiency)}</div>
                <div className="text-green-300 text-sm">Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">Utilization: {formatPercentage(energyData.renewableEnergy.energyStorage.storageUtilization)}</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Battery Systems</h4>
              {energyData.renewableEnergy.energyStorage.batterySystems.map((battery, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{battery.type}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatNumber(battery.capacity)} MWh</span>
                    <span className="text-green-400">{formatNumber(battery.level)} MWh</span>
                    <span className={`${getPerformanceColor(battery.efficiency, 75, 85)}`}>
                      {formatPercentage(battery.efficiency)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-yellow-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Demand Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatEnergy(energyData.demandManagement.totalDemand)}</div>
                <div className="text-orange-300 text-sm">Current Demand</div>
                <div className="text-gray-400 text-xs mt-1">Peak Today: {formatEnergy(energyData.demandManagement.peakDemandToday)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(energyData.demandManagement.demandResponse.enrolledCustomers)}</div>
                <div className="text-blue-300 text-sm">DR Customers</div>
                <div className="text-gray-400 text-xs mt-1">Available: {formatEnergy(energyData.demandManagement.demandResponse.availableReduction)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Load Profiles</h4>
              {energyData.demandManagement.loadProfiles.map((load, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{load.sector}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatEnergy(load.demand)}</span>
                    <span className="text-purple-400">{formatPercentage(load.percentage)}</span>
                    <span className={`${getPerformanceColor(load.efficiency, 70, 85)}`}>
                      {formatPercentage(load.efficiency)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatPercentage(energyData.demandManagement.smartGrid.smartMeterPenetration)}</div>
                <div className="text-slate-400">Smart Meters</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{energyData.demandManagement.smartGrid.microgrids}</div>
                <div className="text-slate-400">Microgrids</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}