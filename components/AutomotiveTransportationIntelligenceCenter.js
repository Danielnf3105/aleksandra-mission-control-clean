// Automotive & Transportation Manufacturing Intelligence Center - Vehicle Manufacturing, EV Market Intelligence, Supply Chain & Performance Analytics
import { useState, useEffect } from 'react';
import { Car, Truck, Zap, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Settings } from 'lucide-react';

export default function AutomotiveTransportationIntelligenceCenter() {
  const [automotiveData, setAutomotiveData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalMarketValue: 3456789012345, // EUR
      dailyProduction: 234567,
      totalManufacturers: 1234,
      vehiclesSold: 87654321, // annual
      evMarketShare: 18.7, // percentage
      autonomousVehicles: 234567,
      connectedVehicles: 123456789,
      aftermarketValue: 456789012,
      dealerships: 345678,
      servicePoints: 567890,
      employeeCount: 12345678,
      rndSpending: 234567890123
    },
    majorManufacturers: [
      {
        manufacturer: 'Tesla',
        category: 'Electric Vehicles',
        revenue: 89012345678, // EUR annual
        vehiclesProduced: 1234567,
        marketCap: 567890123456,
        evLeadership: 23.4,
        autonomyLevel: 4.2,
        batteryTechnology: 95.7,
        chargingNetwork: 45678,
        factoryCount: 6,
        employeeCount: 127855,
        stockPrice: 234.56
      },
      {
        manufacturer: 'Volkswagen Group',
        category: 'Traditional + EV',
        revenue: 234567890123,
        vehiclesProduced: 9876543,
        marketCap: 89012345678,
        evLeadership: 12.8,
        autonomyLevel: 3.1,
        batteryTechnology: 78.9,
        chargingNetwork: 23456,
        factoryCount: 124,
        employeeCount: 672083,
        stockPrice: 189.34
      },
      {
        manufacturer: 'BYD',
        category: 'Electric Vehicles',
        revenue: 67890123456,
        vehiclesProduced: 3456789,
        marketCap: 123456789012,
        evLeadership: 19.7,
        autonomyLevel: 2.8,
        batteryTechnology: 89.3,
        chargingNetwork: 34567,
        factoryCount: 28,
        employeeCount: 234567,
        stockPrice: 45.78
      },
      {
        manufacturer: 'General Motors',
        category: 'Traditional + EV',
        revenue: 156789012345,
        vehiclesProduced: 6543210,
        marketCap: 67890123456,
        evLeadership: 8.9,
        autonomyLevel: 3.7,
        batteryTechnology: 71.2,
        chargingNetwork: 18765,
        factoryCount: 89,
        employeeCount: 155000,
        stockPrice: 56.78
      }
    ],
    electricVehicles: {
      globalSales: 12345678, // annual units
      marketGrowth: 67.8, // percentage YoY
      batteryProduction: 234567890, // kWh
      chargingStations: 1234567,
      rangeImprovement: 23.4, // percentage YoY
      costReduction: 18.9,
      governmentIncentives: 23456789012, // EUR
      manufacturers: [
        {
          brand: 'Tesla',
          marketShare: 23.4,
          vehiclesSold: 1789234,
          avgRange: 456, // km
          avgPrice: 52340, // EUR
          chargingTime: 35, // minutes 0-80%
          autopilotMiles: 6789012345
        },
        {
          brand: 'BYD',
          marketShare: 19.7,
          vehiclesSold: 1567890,
          avgRange: 389,
          avgPrice: 34567,
          chargingTime: 42,
          autopilotMiles: 0 // No full autopilot
        },
        {
          brand: 'Volkswagen',
          marketShare: 12.8,
          vehiclesSold: 1023456,
          avgRange: 423,
          avgPrice: 45678,
          chargingTime: 38,
          autopilotMiles: 234567890
        },
        {
          brand: 'Stellantis',
          marketShare: 8.9,
          vehiclesSold: 678901,
          avgRange: 367,
          avgPrice: 38901,
          chargingTime: 45,
          autopilotMiles: 123456789
        }
      ]
    },
    manufacturingMetrics: {
      productionLines: {
        operational: 89.7, // percentage uptime
        efficiency: 78.9,
        qualityScore: 94.2,
        wasteReduction: 23.4,
        energyEfficiency: 67.8,
        automationLevel: 56.7,
        predictiveMaintenance: 78.9,
        safetyIncidents: 0.23 // per million hours
      },
      supplyChain: {
        semiconductorAvailability: 67.8, // percentage
        rawMaterialCosts: 234567890, // EUR weekly
        logisticsEfficiency: 89.3,
        supplierReliability: 91.7,
        inventoryTurnover: 12.4,
        leadTimeReduction: 18.9,
        sustainabilityScore: 74.6,
        riskMitigation: 82.3
      },
      facilities: [
        {
          facility: 'Tesla Gigafactory Texas',
          location: 'Austin, USA',
          capacity: 500000, // vehicles/year
          utilization: 78.9,
          efficiency: 89.7,
          evProduction: 100,
          batteryProduction: 45678901, // kWh
          employeeCount: 20000,
          sustainabilityRating: 'A+'
        },
        {
          facility: 'Volkswagen Wolfsburg',
          location: 'Germany',
          capacity: 650000,
          utilization: 82.3,
          efficiency: 76.8,
          evProduction: 45.6,
          batteryProduction: 12345678,
          employeeCount: 62000,
          sustainabilityRating: 'A'
        },
        {
          facility: 'BYD Shenzhen',
          location: 'China',
          capacity: 1200000,
          utilization: 91.4,
          efficiency: 87.2,
          evProduction: 89.7,
          batteryProduction: 67890123,
          employeeCount: 45000,
          sustainabilityRating: 'B+'
        }
      ]
    },
    autonomousVehicles: {
      developmentStage: {
        level0: 23.4, // no automation
        level1: 34.6, // driver assistance
        level2: 28.9, // partial automation
        level3: 11.2, // conditional automation
        level4: 1.7, // high automation
        level5: 0.2 // full automation
      },
      testMiles: 123456789012, // total autonomous miles
      safetyMetrics: {
        accidentRate: 0.1, // per million miles
        humanIntervention: 1.2, // per 1000 miles
        weatherPerformance: 78.9,
        cityDriving: 67.8,
        highwayDriving: 94.2,
        nightVision: 82.3
      },
      companies: [
        {
          company: 'Waymo',
          miles: 20000000000,
          cities: 12,
          vehicles: 700,
          safetyScore: 94.7,
          commercialService: true,
          partnerships: ['Chrysler', 'Jaguar', 'Volvo']
        },
        {
          company: 'Tesla',
          miles: 6000000000,
          cities: 'Global',
          vehicles: 3000000,
          safetyScore: 89.3,
          commercialService: false,
          partnerships: ['Full Self-Driving Beta']
        },
        {
          company: 'Cruise',
          miles: 4000000000,
          cities: 3,
          vehicles: 300,
          safetyScore: 87.6,
          commercialService: true,
          partnerships: ['GM', 'Honda']
        }
      ]
    },
    marketTrends: {
      sustainability: {
        carbonNeutralCommitments: 89.7, // percentage of manufacturers
        recycledMaterials: 34.6,
        renewableEnergy: 67.8,
        circularEconomy: 45.2,
        lifeCycleAssessment: 78.9,
        sustainableSupplyChain: 61.3
      },
      technology: {
        artificialIntelligence: 78.9,
        blockchain: 23.4,
        iot: 89.7,
        cloudComputing: 94.2,
        edgeComputing: 56.7,
        digitalTwins: 67.8,
        augmentedReality: 34.6,
        virtualReality: 28.9
      },
      consumerTrends: {
        evAdoption: 67.8, // willingness percentage
        subscriptionModels: 23.4,
        sharedMobility: 45.6,
        connectedServices: 78.9,
        personalizedExperience: 89.3,
        sustainablePurchasing: 72.1,
        brandLoyalty: 34.7
      }
    },
    aftermarketServices: {
      revenue: 456789012345, // EUR annually
      serviceTypes: [
        { service: 'Maintenance & Repair', revenue: 156789012, margin: 45.6, growth: 8.9 },
        { service: 'Parts & Accessories', revenue: 123456789, margin: 67.8, growth: 12.3 },
        { service: 'Extended Warranties', revenue: 89012345, margin: 78.9, growth: 15.4 },
        { service: 'Fleet Management', revenue: 67890123, margin: 34.2, growth: 23.7 },
        { service: 'Insurance Services', revenue: 54321098, margin: 23.4, growth: 18.9 }
      ],
      digitalTransformation: {
        onlineBooking: 67.8,
        mobileApps: 89.3,
        predictiveMaintenance: 45.6,
        remoteServices: 34.2,
        aiDiagnostics: 56.7,
        customerPortals: 78.9
      }
    },
    automotiveAlerts: [
      {
        type: 'CRITICAL',
        category: 'Supply Chain Disruption',
        message: 'Semiconductor shortage affecting 67% of production lines - estimated 3-week delay in vehicle deliveries',
        region: 'Global',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:35',
        recommendations: ['Alternative sourcing', 'Production reallocation', 'Customer communication', 'Inventory optimization']
      },
      {
        type: 'WARNING',
        category: 'Battery Technology',
        message: 'Lithium prices surge 45% - impact on EV manufacturing costs and pricing strategy',
        region: 'Global',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:32',
        recommendations: ['Cost analysis', 'Supplier diversification', 'Technology alternatives', 'Price adjustments']
      },
      {
        type: 'SUCCESS',
        category: 'Autonomous Vehicle Milestone',
        message: 'Level 4 autonomous vehicle achieves 1 million miles without safety intervention',
        region: 'North America',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:28',
        recommendations: ['Regulatory approval', 'Commercial deployment', 'Market expansion', 'Safety validation']
      },
      {
        type: 'INFO',
        category: 'Market Development',
        message: 'EV market share reaches 25% in European markets - accelerating transition timeline',
        region: 'Europe',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:25',
        recommendations: ['Capacity expansion', 'Infrastructure development', 'Product diversification', 'Market analysis']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAutomotiveData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dailyProduction: Math.max(200000, Math.min(300000, prev.industryOverview.dailyProduction + Math.floor((Math.random() - 0.5) * 10000)))
        },
        manufacturingMetrics: {
          ...prev.manufacturingMetrics,
          productionLines: {
            ...prev.manufacturingMetrics.productionLines,
            operational: Math.max(80, Math.min(95, prev.manufacturingMetrics.productionLines.operational + (Math.random() - 0.5) * 2))
          }
        }
      }));
    }, 30000);

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

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Electric Vehicles': return 'text-green-400 bg-green-400/20';
      case 'Traditional + EV': return 'text-blue-400 bg-blue-400/20';
      case 'Autonomous': return 'text-purple-400 bg-purple-400/20';
      case 'Luxury': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Automotive & Transportation Manufacturing Intelligence Center</h1>
              <p className="text-blue-300">Vehicle manufacturing, EV market intelligence, supply chain & performance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{automotiveData.currentTime}</div>
            <div className="text-blue-300">Automotive Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Market Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(automotiveData.industryOverview.globalMarketValue)}</div>
            <div className="text-blue-300 text-sm">Manufacturers: {formatNumber(automotiveData.industryOverview.totalManufacturers)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-green-400 mr-2" />
                Daily Production
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(automotiveData.industryOverview.dailyProduction)}</div>
            <div className="text-green-300 text-sm">Annual: {formatNumber(automotiveData.industryOverview.vehiclesSold)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                EV Market Share
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(automotiveData.industryOverview.evMarketShare)}</div>
            <div className="text-yellow-300 text-sm">Sales: {formatNumber(automotiveData.electricVehicles.globalSales)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Autonomous Vehicles
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(automotiveData.industryOverview.autonomousVehicles)}</div>
            <div className="text-purple-300 text-sm">Connected: {formatNumber(automotiveData.industryOverview.connectedVehicles)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Truck className="w-5 h-5 text-orange-400 mr-2" />
                Aftermarket
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatCurrency(automotiveData.industryOverview.aftermarketValue)}</div>
            <div className="text-orange-300 text-sm">Dealers: {formatNumber(automotiveData.industryOverview.dealerships)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-cyan-400 mr-2" />
                R&D Investment
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(automotiveData.industryOverview.rndSpending)}</div>
            <div className="text-cyan-300 text-sm">Employees: {formatNumber(automotiveData.industryOverview.employeeCount)}</div>
          </div>
        </div>

        {/* Major Manufacturers */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Car className="w-5 h-5 text-blue-400 mr-2" />
            Major Automotive Manufacturers Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Manufacturer</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Vehicles</th>
                  <th className="text-center p-3 text-slate-300">EV Leadership</th>
                  <th className="text-center p-3 text-slate-300">Autonomy</th>
                  <th className="text-center p-3 text-slate-300">Stock Price</th>
                </tr>
              </thead>
              <tbody>
                {automotiveData.majorManufacturers.map((manufacturer, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{manufacturer.manufacturer}</div>
                      <div className="text-slate-400 text-xs">{manufacturer.factoryCount} factories • {formatNumber(manufacturer.employeeCount)} employees • {formatNumber(manufacturer.chargingNetwork)} chargers</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(manufacturer.category)}`}>
                        {manufacturer.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(manufacturer.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(manufacturer.vehiclesProduced)}</td>
                    <td className="p-3 text-center text-yellow-400">{formatPercentage(manufacturer.evLeadership)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(manufacturer.autonomyLevel * 20, 60, 80)}`}>
                      L{manufacturer.autonomyLevel.toFixed(1)}
                    </td>
                    <td className="p-3 text-center text-purple-400">€{manufacturer.stockPrice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Electric Vehicles & Manufacturing Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Electric Vehicle Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{formatNumber(automotiveData.electricVehicles.globalSales)}</div>
                <div className="text-yellow-300 text-sm">Annual Sales</div>
                <div className="text-gray-400 text-xs mt-1">Growth: +{formatPercentage(automotiveData.electricVehicles.marketGrowth)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(automotiveData.electricVehicles.chargingStations)}</div>
                <div className="text-green-300 text-sm">Charging Stations</div>
                <div className="text-gray-400 text-xs mt-1">Range: +{formatPercentage(automotiveData.electricVehicles.rangeImprovement)}</div>
              </div>
            </div>
            <div className="space-y-4">
              {automotiveData.electricVehicles.manufacturers.map((brand, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{brand.brand}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {formatPercentage(brand.marketShare)} share
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(brand.vehiclesSold)} sold</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Price: {formatCurrency(brand.avgPrice)}</div>
                      <div className="text-purple-400">Range: {brand.avgRange} km</div>
                      <div className="text-orange-400">Charging: {brand.chargingTime} min</div>
                    </div>
                    <div>
                      <div className="text-cyan-400">Autopilot: {formatNumber(brand.autopilotMiles)} miles</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-indigo-400 mr-2" />
              Manufacturing Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">{formatPercentage(automotiveData.manufacturingMetrics.productionLines.operational)}</div>
                <div className="text-indigo-300 text-sm">Line Uptime</div>
                <div className="text-gray-400 text-xs mt-1">Efficiency: {formatPercentage(automotiveData.manufacturingMetrics.productionLines.efficiency)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(automotiveData.manufacturingMetrics.productionLines.qualityScore)}</div>
                <div className="text-green-300 text-sm">Quality Score</div>
                <div className="text-gray-400 text-xs mt-1">Automation: {formatPercentage(automotiveData.manufacturingMetrics.productionLines.automationLevel)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Top Manufacturing Facilities</h4>
              {automotiveData.manufacturingMetrics.facilities.map((facility, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{facility.facility}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {facility.sustainabilityRating}
                      </span>
                    </div>
                    <span className="text-blue-400 text-sm">{formatNumber(facility.capacity)} /year</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-green-400">Utilization: {formatPercentage(facility.utilization)}</div>
                      <div className="text-blue-400">Efficiency: {formatPercentage(facility.efficiency)}</div>
                      <div className="text-yellow-400">EV Production: {formatPercentage(facility.evProduction)}</div>
                    </div>
                    <div>
                      <div className="text-purple-400">Location: {facility.location}</div>
                      <div className="text-orange-400">Employees: {formatNumber(facility.employeeCount)}</div>
                      <div className="text-cyan-400">Battery: {formatNumber(facility.batteryProduction)} kWh</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Autonomous Vehicles & Market Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              Autonomous Vehicle Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(automotiveData.autonomousVehicles.testMiles)}</div>
                <div className="text-purple-300 text-sm">Test Miles</div>
                <div className="text-gray-400 text-xs mt-1">Total Autonomous</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{automotiveData.autonomousVehicles.safetyMetrics.accidentRate.toFixed(2)}</div>
                <div className="text-green-300 text-sm">Accident Rate</div>
                <div className="text-gray-400 text-xs mt-1">Per Million Miles</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Automation Levels</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Level 0-1</span>
                  <span className="text-red-400">{formatPercentage(automotiveData.autonomousVehicles.developmentStage.level0 + automotiveData.autonomousVehicles.developmentStage.level1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Level 2-3</span>
                  <span className="text-yellow-400">{formatPercentage(automotiveData.autonomousVehicles.developmentStage.level2 + automotiveData.autonomousVehicles.developmentStage.level3)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Level 4-5</span>
                  <span className="text-green-400">{formatPercentage(automotiveData.autonomousVehicles.developmentStage.level4 + automotiveData.autonomousVehicles.developmentStage.level5)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Leading Companies</h4>
              {automotiveData.autonomousVehicles.companies.map((company, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{company.company}</div>
                    <div className="text-slate-400 text-xs">{formatNumber(company.miles)} miles • {typeof company.cities === 'number' ? `${company.cities} cities` : company.cities}</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatPercentage(company.safetyScore)}</div>
                    <div className="text-slate-300">{formatNumber(company.vehicles)} vehicles</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
              Market Trends Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(automotiveData.marketTrends.sustainability.carbonNeutralCommitments)}</div>
                <div className="text-emerald-300 text-sm">Carbon Neutral</div>
                <div className="text-gray-400 text-xs mt-1">Commitments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(automotiveData.marketTrends.technology.artificialIntelligence)}</div>
                <div className="text-cyan-300 text-sm">AI Adoption</div>
                <div className="text-gray-400 text-xs mt-1">Technology Integration</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Sustainability Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-green-400">{formatPercentage(automotiveData.marketTrends.sustainability.renewableEnergy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Recycled Materials</span>
                  <span className="text-blue-400">{formatPercentage(automotiveData.marketTrends.sustainability.recycledMaterials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Circular Economy</span>
                  <span className="text-purple-400">{formatPercentage(automotiveData.marketTrends.sustainability.circularEconomy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Supply Chain</span>
                  <span className="text-orange-400">{formatPercentage(automotiveData.marketTrends.sustainability.sustainableSupplyChain)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Consumer Trends</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">EV Adoption</span>
                  <span className="text-green-400">{formatPercentage(automotiveData.marketTrends.consumerTrends.evAdoption)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Connected Services</span>
                  <span className="text-blue-400">{formatPercentage(automotiveData.marketTrends.consumerTrends.connectedServices)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Shared Mobility</span>
                  <span className="text-purple-400">{formatPercentage(automotiveData.marketTrends.consumerTrends.sharedMobility)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainability</span>
                  <span className="text-emerald-400">{formatPercentage(automotiveData.marketTrends.consumerTrends.sustainablePurchasing)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automotive Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Automotive Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {automotiveData.automotiveAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Region: {alert.region}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
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

        {/* Aftermarket Services */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
            Aftermarket Services Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{formatCurrency(automotiveData.aftermarketServices.revenue)}</div>
                  <div className="text-orange-300 text-sm">Annual Revenue</div>
                  <div className="text-gray-400 text-xs mt-1">Aftermarket Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.onlineBooking)}</div>
                  <div className="text-green-300 text-sm">Online Booking</div>
                  <div className="text-gray-400 text-xs mt-1">Digital Adoption</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Service Categories</h4>
                {automotiveData.aftermarketServices.serviceTypes.map((service, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                    <div>
                      <div className="text-white text-sm font-medium">{service.service}</div>
                      <div className="text-slate-400 text-xs">Margin: {formatPercentage(service.margin)}</div>
                    </div>
                    <div className="text-right text-xs">
                      <div className="text-green-400">{formatCurrency(service.revenue)}</div>
                      <div className="text-blue-400">+{formatPercentage(service.growth)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h4 className="text-white text-sm font-medium">Digital Transformation</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Mobile Apps</span>
                    <span className="text-green-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.mobileApps)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Customer Portals</span>
                    <span className="text-blue-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.customerPortals)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">AI Diagnostics</span>
                    <span className="text-purple-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.aiDiagnostics)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Predictive Maintenance</span>
                    <span className="text-cyan-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.predictiveMaintenance)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Remote Services</span>
                    <span className="text-orange-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.remoteServices)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300">Online Booking</span>
                    <span className="text-yellow-400">{formatPercentage(automotiveData.aftermarketServices.digitalTransformation.onlineBooking)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}