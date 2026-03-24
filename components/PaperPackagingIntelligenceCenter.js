// Paper & Packaging Intelligence Center - Paper Production, Packaging Manufacturing, Sustainability & Supply Chain Analytics
import { useState, useEffect } from 'react';
import { Package, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Recycle } from 'lucide-react';

export default function PaperPackagingIntelligenceCenter() {
  const [paperData, setPaperData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalPaperMarket: 456789012345, // EUR annually
      packagingMarketSize: 678901234567,
      totalProduction: 456789012, // tonnes annually
      activeMills: 12345,
      paperEmployees: 3456789,
      globalExports: 234567890123,
      rdInvestment: 23456789012,
      sustainabilityInvestment: 45678901234,
      digitalTransformation: 61.7, // percentage
      recyclingRate: 73.2,
      renewableEnergy: 32.4,
      circularEconomy: 58.9
    },
    majorPaperCompanies: [
      {
        company: 'International Paper',
        category: 'Integrated Paper',
        revenue: 23456789012, // EUR annual
        production: 12345678, // tonnes
        mills: 145,
        employees: 48000,
        countries: 24,
        products: ['Corrugated', 'Pulp', 'Paper'],
        digitalMaturity: 78.4,
        sustainabilityScore: 8.1,
        recyclingCapacity: 89.3,
        innovationScore: 7.9,
        stockPerformance: '+9.4%'
      },
      {
        company: 'WestRock',
        category: 'Packaging Solutions',
        revenue: 18901234567,
        production: 9876543,
        mills: 267,
        employees: 51000,
        countries: 30,
        products: ['Corrugated', 'Folding cartons', 'Display'],
        digitalMaturity: 81.2,
        sustainabilityScore: 8.4,
        recyclingCapacity: 92.1,
        innovationScore: 8.2,
        stockPerformance: '+12.7%'
      },
      {
        company: 'Mondi Group',
        category: 'Paper & Packaging',
        revenue: 8765432109,
        production: 6789012,
        mills: 178,
        employees: 26000,
        countries: 30,
        products: ['Industrial bags', 'Consumer goods', 'Corrugated'],
        digitalMaturity: 85.6,
        sustainabilityScore: 8.8,
        recyclingCapacity: 87.6,
        innovationScore: 8.7,
        stockPerformance: '+15.3%'
      },
      {
        company: 'Smurfit Kappa',
        category: 'Corrugated Packaging',
        revenue: 10987654321,
        production: 8012345,
        mills: 198,
        employees: 48000,
        countries: 23,
        products: ['Corrugated boxes', 'Display packaging', 'Bag-in-box'],
        digitalMaturity: 79.8,
        sustainabilityScore: 8.6,
        recyclingCapacity: 94.7,
        innovationScore: 8.1,
        stockPerformance: '+8.9%'
      }
    ],
    productionCategories: [
      {
        category: 'Corrugated Packaging',
        production: 67890123, // tonnes
        marketValue: 123456789012, // EUR
        growth: 4.2, // annual percentage
        mills: 2345,
        mainProducts: ['Shipping boxes', 'Display boxes', 'E-commerce packaging'],
        recyclingRate: 89.7,
        sustainability: 78.4
      },
      {
        category: 'Newsprint',
        production: 23456789,
        marketValue: 34567890123,
        growth: -2.1,
        mills: 567,
        mainProducts: ['Newspapers', 'Advertising inserts', 'Printing paper'],
        recyclingRate: 67.8,
        sustainability: 71.2
      },
      {
        category: 'Tissue Paper',
        production: 45678901,
        marketValue: 89012345678,
        growth: 3.8,
        mills: 891,
        mainProducts: ['Toilet paper', 'Paper towels', 'Facial tissue'],
        recyclingRate: 34.2,
        sustainability: 82.6
      },
      {
        category: 'Containerboard',
        production: 56789012,
        marketValue: 98765432109,
        growth: 5.4,
        mills: 678,
        mainProducts: ['Linerboard', 'Medium', 'Recycled board'],
        recyclingRate: 94.3,
        sustainability: 85.1
      }
    ],
    productionProcesses: {
      pulping: {
        capacity: 234567890, // tonnes
        efficiency: 82.6,
        waterUsage: 15.4, // m3 per tonne
        energyUsage: 2.8, // GJ per tonne
        recycledContent: 67.8
      },
      papermaking: {
        capacity: 198765432,
        efficiency: 87.3,
        waterUsage: 18.7,
        energyUsage: 3.2,
        qualityScore: 94.1
      },
      converting: {
        capacity: 156789012,
        efficiency: 91.4,
        wasteRate: 4.2,
        speedOptimization: 89.6,
        automationLevel: 68.7
      },
      coating: {
        capacity: 89012345,
        efficiency: 85.9,
        qualityControl: 96.2,
        energyEfficiency: 78.3,
        wasteReduction: 73.4
      }
    },
    sustainabilityMetrics: {
      forestCertification: 87.6, // percentage of fiber
      recycledFiber: 73.2,
      waterRecycling: 89.4,
      renewableEnergy: 32.4,
      carbonFootprint: 0.89, // tonnes CO2 per tonne product
      wasteToLandfill: 3.2, // percentage
      energyEfficiency: 76.8,
      sustainableSourcing: 91.3,
      biodiversity: 78.9,
      circularEconomy: 58.9,
      ecoDesign: 67.4,
      lifeAssessment: 82.1
    },
    packagingTrends: {
      ecommerce: 78.9, // growth percentage
      sustainablePackaging: 67.3,
      smartPackaging: 34.2,
      biodegradableMaterials: 45.6,
      lightweighting: 72.1,
      digitalPrinting: 58.7,
      customization: 49.3,
      tamperEvident: 63.8,
      childResistant: 41.2,
      barrierPackaging: 56.9,
      activePackaging: 28.4,
      intelligent: 19.7
    },
    supplyChainMetrics: {
      fiberSuppliers: 23456,
      onTimeDelivery: 91.7, // percentage
      qualityCompliance: 95.2,
      leadTime: 12.4, // days
      inventoryTurnover: 8.9,
      transportationEfficiency: 84.3,
      supplierDiversity: 23.7,
      riskManagement: 78.9,
      transparency: 67.4,
      sustainability: 82.6,
      costOptimization: 89.1,
      digitalTracking: 74.8
    },
    recyclingOperations: {
      collectionRate: 73.2, // percentage
      sortingEfficiency: 87.6,
      deInking: 91.4,
      contaminantRemoval: 89.7,
      fiberRecovery: 85.3,
      processYield: 78.9,
      qualityMaintenance: 82.4,
      energyRecovery: 67.8,
      waterTreatment: 94.2,
      sludgeManagement: 76.3,
        circularityIndex: 68.4,
        innovationInvestment: 234567890 // EUR
    },
    paperAlerts: [
      {
        type: 'WARNING',
        category: 'Supply Chain',
        message: 'Fiber shortage due to forest fires - 12% production capacity affected across North America',
        region: 'North America',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '04:43',
        recommendations: ['Alternative sourcing', 'Recycled fiber increase', 'Production adjustment', 'Customer notification']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'Breakthrough biodegradable coating technology reduces plastic use by 85%',
        region: 'Europe',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:40',
        recommendations: ['Technology scaling', 'Patent protection', 'Market launch', 'Sustainability certification']
      },
      {
        type: 'CRITICAL',
        category: 'Environmental',
        message: 'Water treatment system failure at major pulp mill - immediate remediation required',
        region: 'Asia Pacific',
        impact: 'CRITICAL',
        actionRequired: true,
        timestamp: '04:37',
        recommendations: ['Emergency response', 'Environmental containment', 'Regulatory notification', 'System repair']
      },
      {
        type: 'INFO',
        category: 'Market Trend',
        message: 'E-commerce packaging demand surges 23% - corrugated box orders at record high',
        region: 'Global',
        impact: 'MEDIUM',
        actionRequired: false,
        timestamp: '04:34',
        recommendations: ['Capacity expansion', 'Supply optimization', 'Price adjustment', 'Investment planning']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPaperData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        productionProcesses: {
          ...prev.productionProcesses,
          papermaking: {
            ...prev.productionProcesses.papermaking,
            efficiency: Math.max(85, Math.min(90, prev.productionProcesses.papermaking.efficiency + (Math.random() - 0.5) * 1))
          }
        },
        supplyChainMetrics: {
          ...prev.supplyChainMetrics,
          onTimeDelivery: Math.max(89, Math.min(95, prev.supplyChainMetrics.onTimeDelivery + (Math.random() - 0.5) * 1))
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
      case 'Integrated Paper': return 'text-blue-400 bg-blue-400/20';
      case 'Packaging Solutions': return 'text-green-400 bg-green-400/20';
      case 'Paper & Packaging': return 'text-purple-400 bg-purple-400/20';
      case 'Corrugated Packaging': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 3) return 'text-green-400';
    if (growth > 0) return 'text-blue-400';
    if (growth > -3) return 'text-yellow-400';
    return 'text-red-400';
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
    <div className="h-full bg-gradient-to-br from-amber-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-green-600 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Paper & Packaging Intelligence Center</h1>
              <p className="text-amber-300">Paper production, packaging manufacturing, sustainability & supply chain analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-amber-400">{paperData.currentTime}</div>
            <div className="text-amber-300">Paper Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-amber-400 mr-2" />
                Paper Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{formatCurrency(paperData.industryOverview.globalPaperMarket)}</div>
            <div className="text-amber-300 text-sm">Packaging: {formatCurrency(paperData.industryOverview.packagingMarketSize)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Production
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(paperData.industryOverview.totalProduction)}</div>
            <div className="text-green-300 text-sm">Tonnes Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-blue-400 mr-2" />
                Active Mills
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(paperData.industryOverview.activeMills)}</div>
            <div className="text-blue-300 text-sm">Production Facilities</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Recycle className="w-5 h-5 text-emerald-400 mr-2" />
                Recycling Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(paperData.industryOverview.recyclingRate)}</div>
            <div className="text-emerald-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Circular Economy
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(paperData.industryOverview.circularEconomy)}</div>
            <div className="text-cyan-300 text-sm">Adoption Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(paperData.industryOverview.paperEmployees)}</div>
            <div className="text-purple-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Paper Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Package className="w-5 h-5 text-amber-400 mr-2" />
            Major Paper & Packaging Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Mills</th>
                  <th className="text-center p-3 text-slate-300">Recycling</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {paperData.majorPaperCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-orange-400">{company.mills}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.recyclingCapacity, 85, 90)}`}>
                      {formatPercentage(company.recyclingCapacity)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.sustainabilityScore, 8.0, 8.5)}`}>
                      {company.sustainabilityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Production Categories & Production Processes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Production Categories Intelligence
            </h3>
            <div className="space-y-4">
              {paperData.productionCategories.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{category.category}</span>
                      <span className={`text-sm ${getGrowthColor(category.growth)}`}>
                        {category.growth > 0 ? '+' : ''}{formatPercentage(category.growth)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(category.marketValue)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Production: {formatNumber(category.production)} t</div>
                      <div className="text-purple-400">Mills: {formatNumber(category.mills)}</div>
                      <div className="text-orange-400">Recycling: {formatPercentage(category.recyclingRate)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Sustainability: {formatPercentage(category.sustainability)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {category.mainProducts.map((product, pIndex) => (
                      <span key={pIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Production Processes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(paperData.productionProcesses).map(([process, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{process}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency, 80, 90)}`}>
                      {formatPercentage(data.efficiency)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Capacity: {formatNumber(data.capacity)} t</div>
                      {data.waterUsage && (
                        <div className="text-cyan-400">Water: {data.waterUsage.toFixed(1)} m³/t</div>
                      )}
                      {data.energyUsage && (
                        <div className="text-orange-400">Energy: {data.energyUsage.toFixed(1)} GJ/t</div>
                      )}
                    </div>
                    <div>
                      {data.recycledContent && (
                        <div className="text-green-400">Recycled: {formatPercentage(data.recycledContent)}</div>
                      )}
                      {data.qualityScore && (
                        <div className="text-purple-400">Quality: {formatPercentage(data.qualityScore)}</div>
                      )}
                      {data.automationLevel && (
                        <div className="text-pink-400">Automation: {formatPercentage(data.automationLevel)}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability Metrics & Packaging Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Recycle className="w-5 h-5 text-emerald-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(paperData.sustainabilityMetrics.forestCertification)}</div>
                <div className="text-emerald-300 text-sm">Forest Certification</div>
                <div className="text-gray-400 text-xs mt-1">Certified Fiber</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(paperData.sustainabilityMetrics.recycledFiber)}</div>
                <div className="text-green-300 text-sm">Recycled Fiber</div>
                <div className="text-gray-400 text-xs mt-1">Content Average</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Recycling</span>
                  <span className="text-cyan-400">{formatPercentage(paperData.sustainabilityMetrics.waterRecycling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-green-400">{formatPercentage(paperData.sustainabilityMetrics.renewableEnergy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Energy Efficiency</span>
                  <span className="text-blue-400">{formatPercentage(paperData.sustainabilityMetrics.energyEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste to Landfill</span>
                  <span className="text-red-400">{formatPercentage(paperData.sustainabilityMetrics.wasteToLandfill)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-400">{paperData.sustainabilityMetrics.carbonFootprint.toFixed(2)}</div>
                <div className="text-slate-300">Carbon Footprint</div>
                <div className="text-gray-400 text-xs">t CO2/tonne</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(paperData.sustainabilityMetrics.sustainableSourcing)}</div>
                <div className="text-slate-300">Sustainable Sourcing</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
              Packaging Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Market Trends</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">E-commerce</span>
                  <span className="text-green-400">+{formatPercentage(paperData.packagingTrends.ecommerce)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Lightweighting</span>
                  <span className="text-blue-400">{formatPercentage(paperData.packagingTrends.lightweighting)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Packaging</span>
                  <span className="text-emerald-400">{formatPercentage(paperData.packagingTrends.sustainablePackaging)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Printing</span>
                  <span className="text-purple-400">{formatPercentage(paperData.packagingTrends.digitalPrinting)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Tamper Evident</span>
                  <span className="text-orange-400">{formatPercentage(paperData.packagingTrends.tamperEvident)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Barrier Packaging</span>
                  <span className="text-cyan-400">{formatPercentage(paperData.packagingTrends.barrierPackaging)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Customization</span>
                  <span className="text-pink-400">{formatPercentage(paperData.packagingTrends.customization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Biodegradable</span>
                  <span className="text-green-400">{formatPercentage(paperData.packagingTrends.biodegradableMaterials)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Chain & Recycling Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(paperData.supplyChainMetrics.fiberSuppliers)}</div>
                <div className="text-orange-300 text-sm">Fiber Suppliers</div>
                <div className="text-gray-400 text-xs mt-1">Global Network</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(paperData.supplyChainMetrics.onTimeDelivery)}</div>
                <div className="text-blue-300 text-sm">On-Time Delivery</div>
                <div className="text-gray-400 text-xs mt-1">{paperData.supplyChainMetrics.leadTime.toFixed(1)} days avg</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Supply Chain Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quality Compliance</span>
                  <span className="text-green-400">{formatPercentage(paperData.supplyChainMetrics.qualityCompliance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Transportation</span>
                  <span className="text-blue-400">{formatPercentage(paperData.supplyChainMetrics.transportationEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Inventory Turnover</span>
                  <span className="text-purple-400">{paperData.supplyChainMetrics.inventoryTurnover.toFixed(1)}x</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Tracking</span>
                  <span className="text-cyan-400">{formatPercentage(paperData.supplyChainMetrics.digitalTracking)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(paperData.supplyChainMetrics.sustainability)}</div>
                <div className="text-slate-300">Sustainability</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatPercentage(paperData.supplyChainMetrics.costOptimization)}</div>
                <div className="text-slate-300">Cost Optimization</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Recycle className="w-5 h-5 text-green-400 mr-2" />
              Recycling Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(paperData.recyclingOperations.collectionRate)}</div>
                <div className="text-green-300 text-sm">Collection Rate</div>
                <div className="text-gray-400 text-xs mt-1">Recovery System</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(paperData.recyclingOperations.fiberRecovery)}</div>
                <div className="text-blue-300 text-sm">Fiber Recovery</div>
                <div className="text-gray-400 text-xs mt-1">Process Efficiency</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Process Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sorting Efficiency</span>
                  <span className="text-green-400">{formatPercentage(paperData.recyclingOperations.sortingEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">De-inking</span>
                  <span className="text-blue-400">{formatPercentage(paperData.recyclingOperations.deInking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Contaminant Removal</span>
                  <span className="text-purple-400">{formatPercentage(paperData.recyclingOperations.contaminantRemoval)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Treatment</span>
                  <span className="text-cyan-400">{formatPercentage(paperData.recyclingOperations.waterTreatment)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(paperData.recyclingOperations.circularityIndex)}</div>
                <div className="text-slate-300">Circularity Index</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatCurrency(paperData.recyclingOperations.innovationInvestment)}</div>
                <div className="text-slate-300">Innovation Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Paper & Packaging Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Paper & Packaging Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {paperData.paperAlerts.map((alert, index) => (
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
      </div>
    </div>
  );
}