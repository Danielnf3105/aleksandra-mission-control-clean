// Textile & Apparel Manufacturing Intelligence Center - Fashion Production, Supply Chain, Sustainability & Market Analytics
import { useState, useEffect } from 'react';
import { Shirt, Zap, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity } from 'lucide-react';

export default function TextileApparelManufacturingIntelligenceCenter() {
  const [textileData, setTextileData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalTextileMarket: 1789012345678, // EUR annually
      apparelMarketSize: 2345678901234,
      totalProduction: 123456789, // tonnes annually
      activeFactories: 123456,
      textileEmployees: 67890123,
      globalExports: 456789012345,
      rdInvestment: 45678901234,
      sustainabilityInvestment: 23456789012,
      digitalTransformation: 68.4, // percentage
      automationLevel: 42.7,
      circularEconomy: 34.6,
      sustainableProduction: 56.8
    },
    majorTextileCompanies: [
      {
        company: 'Nike',
        category: 'Athletic Apparel',
        revenue: 56789012345, // EUR annual
        production: 890123456, // units
        factories: 567,
        employees: 83000,
        countries: 45,
        brands: ['Nike', 'Jordan', 'Converse'],
        digitalMaturity: 89.4,
        sustainabilityScore: 8.7,
        supplierCompliance: 94.2,
        innovationScore: 9.1,
        stockPerformance: '+18.6%'
      },
      {
        company: 'Adidas',
        category: 'Athletic & Lifestyle',
        revenue: 45678901234,
        production: 789012345,
        factories: 456,
        employees: 62000,
        countries: 40,
        brands: ['Adidas', 'Reebok', 'TaylorMade'],
        digitalMaturity: 86.7,
        sustainabilityScore: 8.9,
        supplierCompliance: 92.8,
        innovationScore: 8.8,
        stockPerformance: '+14.2%'
      },
      {
        company: 'H&M Group',
        category: 'Fast Fashion',
        revenue: 34567890123,
        production: 2345678901, // units
        factories: 1234,
        employees: 153000,
        countries: 75,
        brands: ['H&M', 'COS', 'Monki'],
        digitalMaturity: 78.3,
        sustainabilityScore: 7.6,
        supplierCompliance: 89.4,
        innovationScore: 7.9,
        stockPerformance: '+8.7%'
      },
      {
        company: 'Inditex',
        category: 'Fast Fashion',
        revenue: 67890123456,
        production: 1890123456,
        factories: 1567,
        employees: 174000,
        countries: 96,
        brands: ['Zara', 'Pull&Bear', 'Bershka'],
        digitalMaturity: 84.1,
        sustainabilityScore: 8.3,
        supplierCompliance: 91.7,
        innovationScore: 8.4,
        stockPerformance: '+12.3%'
      }
    ],
    productionCategories: [
      {
        category: 'Cotton Textiles',
        production: 23456789, // tonnes
        marketValue: 234567890123, // EUR
        growth: 2.4, // annual percentage
        factories: 34567,
        mainProducts: ['T-shirts', 'Jeans', 'Shirts'],
        sustainability: 67.8,
        automation: 45.6
      },
      {
        category: 'Synthetic Textiles',
        production: 34567890,
        marketValue: 345678901234,
        growth: 4.7,
        factories: 23456,
        mainProducts: ['Athletic wear', 'Outerwear', 'Underwear'],
        sustainability: 54.3,
        automation: 62.1
      },
      {
        category: 'Technical Textiles',
        production: 12345678,
        marketValue: 123456789012,
        growth: 8.9,
        factories: 6789,
        mainProducts: ['Medical textiles', 'Automotive', 'Geotextiles'],
        sustainability: 78.9,
        automation: 71.4
      },
      {
        category: 'Luxury Textiles',
        production: 5678901,
        marketValue: 89012345678,
        growth: 6.2,
        factories: 2345,
        mainProducts: ['Silk', 'Cashmere', 'Fine wool'],
        sustainability: 81.3,
        automation: 38.7
      }
    ],
    manufacturingProcesses: {
      spinning: {
        capacity: 23456789, // tonnes
        efficiency: 87.4,
        automation: 78.9,
        qualityScore: 94.2
      },
      weaving: {
        capacity: 19876543,
        efficiency: 83.7,
        automation: 65.4,
        qualityScore: 91.8
      },
      dyeing: {
        capacity: 21098765,
        efficiency: 79.3,
        automation: 52.6,
        qualityScore: 89.4
      },
      cutting: {
        capacity: 34567890, // units
        efficiency: 91.2,
        automation: 67.8,
        qualityScore: 96.1
      },
      sewing: {
        capacity: 32109876,
        efficiency: 85.6,
        automation: 34.2,
        qualityScore: 92.7
      },
      finishing: {
        capacity: 29876543,
        efficiency: 88.9,
        automation: 59.3,
        qualityScore: 94.5
      }
    },
    supplyChainMetrics: {
      suppliers: 234567,
      tierOneSuppliers: 12345,
      rawMaterialSources: 89012,
      leadTime: 67.8, // days average
      onTimeDelivery: 89.4, // percentage
      qualityCompliance: 93.7,
      sustainabilityCompliance: 76.8,
      costEfficiency: 82.4,
      riskScore: 2.8, // out of 10
      digitalTracking: 67.9,
      transparency: 54.3,
      ethicalSourcing: 78.6
    },
    sustainabilityMetrics: {
      waterUsage: 234567890123, // liters annually
      energyConsumption: 123456789012, // kWh
      carbonFootprint: 45678901, // tonnes CO2
      wasteGeneration: 12345678, // tonnes
      recycledMaterials: 34.6, // percentage
      organicMaterials: 23.4,
      renewableEnergy: 28.9,
      waterRecycling: 42.7,
      chemicalReduction: 56.8,
      circularDesign: 39.4,
      lifeAssessment: 67.2,
      sustainabilityInvestment: 23456789012 // EUR
    },
    innovationTrends: {
      smartTextiles: 45.6, // adoption percentage
      sustainableMaterials: 67.8,
      digitalPrinting: 52.4,
      threeDKnitting: 34.2,
      recycledFibers: 58.9,
      bioBasedMaterials: 28.7,
      nanotechnology: 23.4,
      wearableTech: 36.8,
      customization: 41.5,
      automation: 59.3,
      aiDesign: 33.7,
      blockchainTracking: 19.6
    },
    marketSegments: {
      menswear: 23.4, // percentage of market
      womenswear: 34.7,
      kidswear: 12.8,
      athletic: 18.9,
      luxury: 6.2,
      workwear: 4.0
    },
    textileAlerts: [
      {
        type: 'WARNING',
        category: 'Supply Chain',
        message: 'Cotton supply disruption due to weather conditions - 15% price increase expected',
        region: 'South Asia',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '04:35',
        recommendations: ['Alternative sourcing', 'Inventory increase', 'Price adjustment', 'Customer communication']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'New recycled polyester technology achieves 95% efficiency breakthrough',
        region: 'Europe',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:32',
        recommendations: ['Technology adoption', 'Scale-up planning', 'Market positioning', 'Sustainability certification']
      },
      {
        type: 'CRITICAL',
        category: 'Compliance',
        message: 'Factory fire safety audit fails - 890 workers affected, immediate closure required',
        region: 'Southeast Asia',
        impact: 'CRITICAL',
        actionRequired: true,
        timestamp: '04:29',
        recommendations: ['Worker safety', 'Facility upgrade', 'Alternative production', 'Compliance review']
      },
      {
        type: 'INFO',
        category: 'Market Trend',
        message: 'Sustainable fashion demand increases 34% - consumer preference shift accelerating',
        region: 'Global',
        impact: 'MEDIUM',
        actionRequired: false,
        timestamp: '04:26',
        recommendations: ['Product line expansion', 'Marketing strategy', 'Supply chain adjustment', 'Investment planning']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTextileData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        supplyChainMetrics: {
          ...prev.supplyChainMetrics,
          onTimeDelivery: Math.max(85, Math.min(95, prev.supplyChainMetrics.onTimeDelivery + (Math.random() - 0.5) * 2)),
          leadTime: Math.max(60, Math.min(75, prev.supplyChainMetrics.leadTime + (Math.random() - 0.5) * 2))
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
      case 'Athletic Apparel': return 'text-orange-400 bg-orange-400/20';
      case 'Athletic & Lifestyle': return 'text-blue-400 bg-blue-400/20';
      case 'Fast Fashion': return 'text-pink-400 bg-pink-400/20';
      case 'Luxury Fashion': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 6) return 'text-green-400';
    if (growth > 3) return 'text-blue-400';
    if (growth > 0) return 'text-yellow-400';
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
    <div className="h-full bg-gradient-to-br from-rose-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl">
              <Shirt className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Textile & Apparel Manufacturing Intelligence Center</h1>
              <p className="text-rose-300">Fashion production, supply chain, sustainability & market analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-rose-400">{textileData.currentTime}</div>
            <div className="text-rose-300">Fashion Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-rose-400 mr-2" />
                Textile Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-rose-400">{formatCurrency(textileData.industryOverview.globalTextileMarket)}</div>
            <div className="text-rose-300 text-sm">Apparel: {formatCurrency(textileData.industryOverview.apparelMarketSize)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-pink-400 mr-2" />
                Production
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatNumber(textileData.industryOverview.totalProduction)}</div>
            <div className="text-pink-300 text-sm">Tonnes Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Active Factories
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(textileData.industryOverview.activeFactories)}</div>
            <div className="text-purple-300 text-sm">Manufacturing Units</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(textileData.industryOverview.textileEmployees)}</div>
            <div className="text-blue-300 text-sm">Global Workforce</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Sustainability
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(textileData.industryOverview.sustainableProduction)}</div>
            <div className="text-green-300 text-sm">Sustainable Production</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                Digital Transform
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(textileData.industryOverview.digitalTransformation)}</div>
            <div className="text-cyan-300 text-sm">Industry Adoption</div>
          </div>
        </div>

        {/* Major Textile Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shirt className="w-5 h-5 text-rose-400 mr-2" />
            Major Textile & Apparel Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Factories</th>
                  <th className="text-center p-3 text-slate-300">Digital Maturity</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {textileData.majorTextileCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-blue-400">{formatNumber(company.production)} units</td>
                    <td className="p-3 text-center text-orange-400">{company.factories}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.digitalMaturity, 80, 85)}`}>
                      {formatPercentage(company.digitalMaturity)}
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

        {/* Production Categories & Manufacturing Processes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Production Categories Intelligence
            </h3>
            <div className="space-y-4">
              {textileData.productionCategories.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{category.category}</span>
                      <span className={`text-sm ${getGrowthColor(category.growth)}`}>+{formatPercentage(category.growth)}</span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(category.marketValue)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Production: {formatNumber(category.production)} t</div>
                      <div className="text-purple-400">Factories: {formatNumber(category.factories)}</div>
                      <div className="text-orange-400">Automation: {formatPercentage(category.automation)}</div>
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

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Manufacturing Processes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(textileData.manufacturingProcesses).map(([process, data], index) => (
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
                      <div className="text-blue-400">
                        Capacity: {process === 'cutting' || process === 'sewing' || process === 'finishing' 
                          ? formatNumber(data.capacity) + ' units' 
                          : formatNumber(data.capacity) + ' t'}
                      </div>
                      <div className="text-purple-400">Automation: {formatPercentage(data.automation)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Quality: {formatPercentage(data.qualityScore)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supply Chain Metrics & Sustainability Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(textileData.supplyChainMetrics.suppliers)}</div>
                <div className="text-orange-300 text-sm">Total Suppliers</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(textileData.supplyChainMetrics.tierOneSuppliers)} Tier 1</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(textileData.supplyChainMetrics.onTimeDelivery)}</div>
                <div className="text-blue-300 text-sm">On-Time Delivery</div>
                <div className="text-gray-400 text-xs mt-1">{textileData.supplyChainMetrics.leadTime.toFixed(1)} days avg</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Supply Chain Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quality Compliance</span>
                  <span className="text-green-400">{formatPercentage(textileData.supplyChainMetrics.qualityCompliance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainability</span>
                  <span className="text-emerald-400">{formatPercentage(textileData.supplyChainMetrics.sustainabilityCompliance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cost Efficiency</span>
                  <span className="text-blue-400">{formatPercentage(textileData.supplyChainMetrics.costEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Tracking</span>
                  <span className="text-purple-400">{formatPercentage(textileData.supplyChainMetrics.digitalTracking)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatPercentage(textileData.supplyChainMetrics.transparency)}</div>
                <div className="text-slate-300">Transparency</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(textileData.supplyChainMetrics.ethicalSourcing)}</div>
                <div className="text-slate-300">Ethical Sourcing</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 text-green-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatNumber(textileData.sustainabilityMetrics.carbonFootprint)}</div>
                <div className="text-red-300 text-sm">Carbon Footprint</div>
                <div className="text-gray-400 text-xs mt-1">Tonnes CO2</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(textileData.sustainabilityMetrics.recycledMaterials)}</div>
                <div className="text-green-300 text-sm">Recycled Materials</div>
                <div className="text-gray-400 text-xs mt-1">Material Usage</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Organic Materials</span>
                  <span className="text-emerald-400">{formatPercentage(textileData.sustainabilityMetrics.organicMaterials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-green-400">{formatPercentage(textileData.sustainabilityMetrics.renewableEnergy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Recycling</span>
                  <span className="text-cyan-400">{formatPercentage(textileData.sustainabilityMetrics.waterRecycling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Chemical Reduction</span>
                  <span className="text-blue-400">{formatPercentage(textileData.sustainabilityMetrics.chemicalReduction)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-400">{formatPercentage(textileData.sustainabilityMetrics.circularDesign)}</div>
                <div className="text-slate-300">Circular Design</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatCurrency(textileData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Trends & Market Segments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Materials</span>
                  <span className="text-green-400">{formatPercentage(textileData.innovationTrends.sustainableMaterials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Automation</span>
                  <span className="text-blue-400">{formatPercentage(textileData.innovationTrends.automation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Recycled Fibers</span>
                  <span className="text-emerald-400">{formatPercentage(textileData.innovationTrends.recycledFibers)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Printing</span>
                  <span className="text-purple-400">{formatPercentage(textileData.innovationTrends.digitalPrinting)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Textiles</span>
                  <span className="text-cyan-400">{formatPercentage(textileData.innovationTrends.smartTextiles)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Customization</span>
                  <span className="text-orange-400">{formatPercentage(textileData.innovationTrends.customization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wearable Tech</span>
                  <span className="text-pink-400">{formatPercentage(textileData.innovationTrends.wearableTech)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Design</span>
                  <span className="text-indigo-400">{formatPercentage(textileData.innovationTrends.aiDesign)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Market Segments Intelligence
            </h3>
            <div className="space-y-4">
              {Object.entries(textileData.marketSegments).map(([segment, percentage], index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div>
                    <span className="text-white text-sm font-medium capitalize">{segment.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">{formatPercentage(percentage)}</div>
                    <div className="text-slate-400 text-xs">Market Share</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Textile Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Textile & Apparel Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {textileData.textileAlerts.map((alert, index) => (
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