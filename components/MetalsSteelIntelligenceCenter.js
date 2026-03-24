// Metals & Steel Intelligence Center - Steel Production, Metal Processing, Metallurgy & Industrial Analytics
import { useState, useEffect } from 'react';
import { Zap, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Settings } from 'lucide-react';

export default function MetalsSteelIntelligenceCenter() {
  const [steelData, setSteelData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalSteelMarket: 789012345678, // EUR annually
      crudeSteel: 1876543210, // tonnes annually
      activePlants: 3456,
      steelWorkers: 6789012,
      globalTrade: 567890123456,
      rdInvestment: 45678901234,
      sustainabilityInvestment: 78901234567,
      capacityUtilization: 74.3, // percentage
      energyIntensity: 20.1, // GJ per tonne
      recyclingRate: 85.7,
      digitalization: 67.8,
      automationLevel: 58.9
    },
    majorSteelCompanies: [
      {
        company: 'ArcelorMittal',
        category: 'Integrated Steel',
        revenue: 79012345678, // EUR annual
        production: 78901234, // tonnes crude steel
        facilities: 267,
        employees: 191000,
        countries: 60,
        products: ['Flat steel', 'Long steel', 'Tubes'],
        digitalMaturity: 82.4,
        sustainabilityScore: 7.9,
        capacityUtilization: 76.8,
        innovationScore: 8.2,
        stockPerformance: '+11.7%'
      },
      {
        company: 'China Baowu Steel',
        category: 'State-Owned Steel',
        revenue: 123456789012,
        production: 115678901,
        facilities: 189,
        employees: 267000,
        countries: 8,
        products: ['Cold rolled', 'Hot rolled', 'Galvanized'],
        digitalMaturity: 78.9,
        sustainabilityScore: 7.3,
        capacityUtilization: 81.2,
        innovationScore: 7.6,
        stockPerformance: '+8.4%'
      },
      {
        company: 'Nippon Steel',
        category: 'Integrated Steel',
        revenue: 56789012345,
        production: 49123456,
        facilities: 98,
        employees: 108000,
        countries: 12,
        products: ['Automotive steel', 'Construction', 'Electrical steel'],
        digitalMaturity: 89.3,
        sustainabilityScore: 8.7,
        capacityUtilization: 78.6,
        innovationScore: 9.1,
        stockPerformance: '+14.2%'
      },
      {
        company: 'POSCO',
        category: 'Integrated Steel',
        revenue: 67890123456,
        production: 42345678,
        facilities: 67,
        employees: 29000,
        countries: 9,
        products: ['Automotive', 'Shipbuilding', 'Energy'],
        digitalMaturity: 91.7,
        sustainabilityScore: 8.4,
        capacityUtilization: 83.1,
        innovationScore: 8.9,
        stockPerformance: '+16.8%'
      }
    ],
    productionProcesses: {
      blastFurnace: {
        capacity: 234567890, // tonnes
        efficiency: 89.4,
        fuelConsumption: 502.3, // kg per tonne
        temperature: 1647, // celsius
        co2Emissions: 2.1, // tonnes per tonne steel
        automation: 78.9
      },
      basicOxygen: {
        capacity: 198765432,
        efficiency: 91.7,
        energyConsumption: 65.4, // kWh per tonne
        cycleTime: 42.3, // minutes
        yieldRate: 94.2,
        qualityControl: 96.8
      },
      electricArc: {
        capacity: 156789012,
        efficiency: 87.3,
        powerConsumption: 456.7, // kWh per tonne
        recycledContent: 89.6,
        operatingTime: 67.8,
        electrodeConsumption: 2.1
      },
      continuousCasting: {
        capacity: 189012345,
        efficiency: 93.2,
        yieldRate: 97.8,
        coolingRate: 23.4, // °C per minute
        surfaceQuality: 98.1,
        automationLevel: 84.7
      }
    },
    steelGrades: [
      {
        grade: 'Carbon Steel',
        production: 123456789, // tonnes
        marketShare: 67.8, // percentage
        applications: ['Construction', 'Automotive', 'Machinery'],
        priceRange: '456-789', // EUR per tonne
        qualityIndex: 89.4,
        demandGrowth: 3.2
      },
      {
        grade: 'Stainless Steel',
        production: 56789012,
        marketShare: 18.9,
        applications: ['Food processing', 'Chemical', 'Architecture'],
        priceRange: '1234-2345',
        qualityIndex: 94.7,
        demandGrowth: 5.8
      },
      {
        grade: 'Alloy Steel',
        production: 34567890,
        marketShare: 8.7,
        applications: ['Aerospace', 'Oil & gas', 'Power generation'],
        priceRange: '2345-4567',
        qualityIndex: 96.2,
        demandGrowth: 6.4
      },
      {
        grade: 'Tool Steel',
        production: 12345678,
        marketShare: 4.6,
        applications: ['Manufacturing tools', 'Dies', 'Cutting tools'],
        priceRange: '3456-6789',
        qualityIndex: 98.1,
        demandGrowth: 4.3
      }
    ],
    metallurgicalProcesses: {
      ironOreProcessing: {
        beneficiation: 87.6, // efficiency percentage
        sintering: 91.3,
        pelletizing: 89.7,
        directReduction: 74.2,
        qualityControl: 94.8,
        energyEfficiency: 78.9
      },
      steelmaking: {
        desulfurization: 96.7,
        deoxidation: 94.2,
        alloying: 92.8,
        temperatureControl: 98.3,
        processOptimization: 87.4,
        yieldImprovement: 91.6
      },
      rollingMills: {
        hotRolling: 89.3,
        coldRolling: 92.7,
        surfaceFinish: 95.1,
        dimensionalAccuracy: 96.8,
        throughput: 84.2,
        energyRecovery: 67.3
      },
      finishing: {
        galvanizing: 93.4,
        painting: 91.7,
        coating: 88.9,
        annealing: 94.6,
        qualityInspection: 97.2,
        packaging: 89.8
      }
    },
    sustainabilityMetrics: {
      co2Intensity: 2.03, // tonnes CO2 per tonne steel
      energyEfficiency: 72.6, // percentage improvement
      waterRecycling: 95.2,
      wasteRecovery: 87.9,
      scrapUtilization: 89.6,
      renewableEnergy: 23.7,
      hydrogenSteelmaking: 12.4,
      carbonCapture: 8.9,
      circularEconomy: 76.3,
      lifeAssessment: 84.1,
      greenCertification: 67.8,
      sustainableSourceing: 79.4
    },
    marketSegments: {
      construction: {
        demandShare: 34.7, // percentage
        growth: 2.8,
        priceVolatility: 'Medium',
        keyDrivers: ['Infrastructure', 'Housing', 'Commercial'],
        sustainability: 67.9
      },
      automotive: {
        demandShare: 23.4,
        growth: 4.2,
        priceVolatility: 'High',
        keyDrivers: ['EV transition', 'Lightweighting', 'Safety'],
        sustainability: 78.6
      },
      machinery: {
        demandShare: 18.9,
        growth: 3.6,
        priceVolatility: 'Low',
        keyDrivers: ['Industrial automation', 'Mining', 'Agriculture'],
        sustainability: 71.2
      },
      energy: {
        demandShare: 12.3,
        growth: 6.4,
        priceVolatility: 'Very High',
        keyDrivers: ['Renewables', 'Oil & gas', 'Power generation'],
        sustainability: 82.7
      },
      shipping: {
        demandShare: 6.8,
        growth: 1.9,
        priceVolatility: 'High',
        keyDrivers: ['Maritime trade', 'Offshore', 'Naval'],
        sustainability: 69.4
      },
      packaging: {
        demandShare: 3.9,
        growth: 5.1,
        priceVolatility: 'Medium',
        keyDrivers: ['Food & beverage', 'Consumer goods', 'E-commerce'],
        sustainability: 84.2
      }
    },
    supplyChainMetrics: {
      ironOreSuppliers: 156,
      coalSuppliers: 89,
      scrapSuppliers: 234,
      onTimeDelivery: 87.6, // percentage
      qualityCompliance: 92.4,
      leadTime: 21.7, // days
      inventoryTurnover: 6.8,
      logisticsEfficiency: 78.9,
      supplierDiversity: 34.7,
      riskManagement: 81.2,
      costOptimization: 85.6,
      digitalIntegration: 69.3,
      sustainabilityTracking: 73.8
    },
    productionInnovations: {
      hydrogenSteelmaking: 15.6, // adoption percentage
      electricArcFurnace: 67.9,
      directReduction: 23.4,
      smartManufacturing: 58.7,
      aiOptimization: 41.3,
      roboticAutomation: 72.1,
      predictiveMaintenance: 64.8,
      digitalTwins: 29.5,
      carbonNeutralSteel: 18.7,
      advancedAlloys: 35.2,
      threeDPrintingMetal: 12.9,
      quantumSteelDesign: 4.7
    },
    steelAlerts: [
      {
        type: 'CRITICAL',
        category: 'Production',
        message: 'Blast furnace #3 temperature anomaly detected - immediate intervention required',
        facility: 'ArcelorMittal Ghent',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '04:51',
        recommendations: ['Emergency cooling', 'Process adjustment', 'Safety protocols', 'Production rerouting']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'Hydrogen steel production pilot achieves 95% carbon reduction milestone',
        facility: 'SSAB Oxelösund',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:48',
        recommendations: ['Scale pilot program', 'Green steel certification', 'Market positioning', 'Investment planning']
      },
      {
        type: 'WARNING',
        category: 'Supply Chain',
        message: 'Iron ore prices surge 18% due to mine disruption in Australia',
        facility: 'Global Markets',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '04:45',
        recommendations: ['Alternative sourcing', 'Price hedging', 'Inventory adjustment', 'Contract renegotiation']
      },
      {
        type: 'INFO',
        category: 'Market Trend',
        message: 'EV steel demand projected to grow 34% - automotive grade expansion opportunity',
        facility: 'Market Intelligence',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:42',
        recommendations: ['Capacity planning', 'Product development', 'Customer engagement', 'Investment analysis']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSteelData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        productionProcesses: {
          ...prev.productionProcesses,
          blastFurnace: {
            ...prev.productionProcesses.blastFurnace,
            efficiency: Math.max(87, Math.min(92, prev.productionProcesses.blastFurnace.efficiency + (Math.random() - 0.5) * 1)),
            temperature: Math.max(1640, Math.min(1655, prev.productionProcesses.blastFurnace.temperature + (Math.random() - 0.5) * 5))
          }
        },
        sustainabilityMetrics: {
          ...prev.sustainabilityMetrics,
          energyEfficiency: Math.max(70, Math.min(75, prev.sustainabilityMetrics.energyEfficiency + (Math.random() - 0.5) * 1))
        }
      }));
    }, 25000);

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
      case 'HIGH': return 'text-red-400 bg-red-400/20';
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
      case 'Integrated Steel': return 'text-blue-400 bg-blue-400/20';
      case 'State-Owned Steel': return 'text-red-400 bg-red-400/20';
      case 'Electric Arc': return 'text-green-400 bg-green-400/20';
      case 'Specialty Steel': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 5) return 'text-green-400';
    if (growth > 2) return 'text-blue-400';
    if (growth > 0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getVolatilityColor = (volatility) => {
    switch (volatility) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High': return 'text-red-400';
      default: return 'text-gray-400';
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
    <div className="h-full bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-700/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-gray-600 to-zinc-600 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Metals & Steel Intelligence Center</h1>
              <p className="text-gray-300">Steel production, metal processing, metallurgy & industrial analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-gray-400">{steelData.currentTime}</div>
            <div className="text-gray-300">Steel Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-gray-400 mr-2" />
                Steel Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-gray-400">{formatCurrency(steelData.industryOverview.globalSteelMarket)}</div>
            <div className="text-gray-300 text-sm">Global Annual</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Crude Steel
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(steelData.industryOverview.crudeSteel)}</div>
            <div className="text-blue-300 text-sm">Tonnes Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-green-400 mr-2" />
                Active Plants
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(steelData.industryOverview.activePlants)}</div>
            <div className="text-green-300 text-sm">Production Facilities</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Recycling Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(steelData.industryOverview.recyclingRate)}</div>
            <div className="text-purple-300 text-sm">Steel Scrap</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Capacity Use
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(steelData.industryOverview.capacityUtilization)}</div>
            <div className="text-cyan-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-orange-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(steelData.industryOverview.steelWorkers)}</div>
            <div className="text-orange-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Steel Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 text-gray-400 mr-2" />
            Major Steel Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Facilities</th>
                  <th className="text-center p-3 text-slate-300">Capacity Use</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {steelData.majorSteelCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(company.employees)} employees • {company.countries} countries • {company.stockPerformance}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(company.production)} t</td>
                    <td className="p-3 text-center text-orange-400">{company.facilities}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.capacityUtilization, 75, 85)}`}>
                      {formatPercentage(company.capacityUtilization)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.sustainabilityScore, 7.5, 8.5)}`}>
                      {company.sustainabilityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Production Processes & Steel Grades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-cyan-400 mr-2" />
              Production Processes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(steelData.productionProcesses).map(([process, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{process.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency, 85, 92)}`}>
                      {formatPercentage(data.efficiency)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Capacity: {formatNumber(data.capacity)} t</div>
                      {data.temperature && (
                        <div className="text-red-400">Temp: {data.temperature}°C</div>
                      )}
                      {data.powerConsumption && (
                        <div className="text-yellow-400">Power: {data.powerConsumption} kWh/t</div>
                      )}
                    </div>
                    <div>
                      {data.recycledContent && (
                        <div className="text-green-400">Recycled: {formatPercentage(data.recycledContent)}</div>
                      )}
                      {data.yieldRate && (
                        <div className="text-purple-400">Yield: {formatPercentage(data.yieldRate)}</div>
                      )}
                      {data.automation && (
                        <div className="text-pink-400">Auto: {formatPercentage(data.automation)}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Steel Grades Intelligence
            </h3>
            <div className="space-y-4">
              {steelData.steelGrades.map((grade, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{grade.grade}</span>
                      <span className={`text-sm ${getGrowthColor(grade.demandGrowth)}`}>
                        +{formatPercentage(grade.demandGrowth)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">€{grade.priceRange}/t</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Production: {formatNumber(grade.production)} t</div>
                      <div className="text-purple-400">Market Share: {formatPercentage(grade.marketShare)}</div>
                      <div className="text-green-400">Quality: {formatPercentage(grade.qualityIndex)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {grade.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metallurgical Processes & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              Metallurgical Processes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(steelData.metallurgicalProcesses).map(([process, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium capitalize">{process.replace(/([A-Z])/g, ' $1')}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {Object.entries(data).map(([metric, value], mIndex) => (
                      <div key={mIndex} className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                        <span className="text-slate-300 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</span>
                        <span className={`${getPerformanceColor(value, 80, 90)}`}>{formatPercentage(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{steelData.sustainabilityMetrics.co2Intensity.toFixed(2)}</div>
                <div className="text-red-300 text-sm">CO₂ Intensity</div>
                <div className="text-gray-400 text-xs mt-1">tonnes CO₂/tonne steel</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(steelData.sustainabilityMetrics.energyEfficiency)}</div>
                <div className="text-green-300 text-sm">Energy Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">Improvement Rate</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Recycling</span>
                  <span className="text-cyan-400">{formatPercentage(steelData.sustainabilityMetrics.waterRecycling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Scrap Utilization</span>
                  <span className="text-green-400">{formatPercentage(steelData.sustainabilityMetrics.scrapUtilization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Hydrogen Steel</span>
                  <span className="text-blue-400">{formatPercentage(steelData.sustainabilityMetrics.hydrogenSteelmaking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-yellow-400">{formatPercentage(steelData.sustainabilityMetrics.renewableEnergy)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-400">{formatPercentage(steelData.sustainabilityMetrics.circularEconomy)}</div>
                <div className="text-slate-300">Circular Economy</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(steelData.sustainabilityMetrics.greenCertification)}</div>
                <div className="text-slate-300">Green Certification</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Segments & Production Innovations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Market Segments Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(steelData.marketSegments).map(([segment, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm capitalize">{segment}</span>
                      <span className={`text-sm ${getGrowthColor(data.growth)}`}>
                        +{formatPercentage(data.growth)}
                      </span>
                    </div>
                    <span className="text-blue-400 text-sm">{formatPercentage(data.demandShare)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Demand Share: {formatPercentage(data.demandShare)}</div>
                      <div className={`${getVolatilityColor(data.priceVolatility)}`}>Volatility: {data.priceVolatility}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Sustainability: {formatPercentage(data.sustainability)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {data.keyDrivers.map((driver, dIndex) => (
                      <span key={dIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {driver}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Production Innovations Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Electric Arc Furnace</span>
                  <span className="text-green-400">{formatPercentage(steelData.productionInnovations.electricArcFurnace)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Robotic Automation</span>
                  <span className="text-blue-400">{formatPercentage(steelData.productionInnovations.roboticAutomation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Predictive Maintenance</span>
                  <span className="text-purple-400">{formatPercentage(steelData.productionInnovations.predictiveMaintenance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Manufacturing</span>
                  <span className="text-cyan-400">{formatPercentage(steelData.productionInnovations.smartManufacturing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Optimization</span>
                  <span className="text-pink-400">{formatPercentage(steelData.productionInnovations.aiOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Advanced Alloys</span>
                  <span className="text-orange-400">{formatPercentage(steelData.productionInnovations.advancedAlloys)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Twins</span>
                  <span className="text-teal-400">{formatPercentage(steelData.productionInnovations.digitalTwins)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Carbon Neutral</span>
                  <span className="text-green-400">{formatPercentage(steelData.productionInnovations.carbonNeutralSteel)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steel Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Steel Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {steelData.steelAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Facility: {alert.facility}</div>
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
      </div>
    </div>
  );
}