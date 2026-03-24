// Chemical & Petrochemical Intelligence Center - Chemical Manufacturing, Process Optimization, Safety Management & Supply Chain
import { useState, useEffect } from 'react';
import { TestTube, Zap, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Thermometer } from 'lucide-react';

export default function ChemicalPetrochemicalIntelligenceCenter() {
  const [chemicalData, setChemicalData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalChemicalMarket: 5678901234567, // EUR annually
      totalProduction: 2345678901, // tonnes annually
      activePlants: 234567,
      chemicalEmployees: 12345678,
      rdInvestment: 123456789012,
      exportValue: 345678901234,
      sustainabilityInvestment: 67890123456,
      digitalTransformation: 72.4, // percentage
      processEfficiency: 84.6,
      safetyCompliance: 94.7,
      environmentalCompliance: 89.3,
      innovationIndex: 78.9
    },
    majorChemicalCompanies: [
      {
        company: 'BASF',
        category: 'Diversified Chemicals',
        revenue: 89012345678, // EUR annual
        production: 123456789, // tonnes
        plants: 345,
        employees: 117000,
        countries: 90,
        specialties: ['Chemicals', 'Materials', 'Agriculture'],
        digitalMaturity: 85.7,
        sustainabilityScore: 8.6,
        safetyScore: 9.1,
        innovationScore: 8.9,
        stockPerformance: '+11.4%'
      },
      {
        company: 'Dow Chemical',
        category: 'Materials Science',
        revenue: 78901234567,
        production: 98765432,
        plants: 267,
        employees: 37000,
        countries: 31,
        specialties: ['Plastics', 'Chemicals', 'Agriculture'],
        digitalMaturity: 81.3,
        sustainabilityScore: 8.2,
        safetyScore: 8.8,
        innovationScore: 8.7,
        stockPerformance: '+9.7%'
      },
      {
        company: 'DuPont',
        category: 'Specialty Chemicals',
        revenue: 67890123456,
        production: 76543210,
        plants: 189,
        employees: 24000,
        countries: 70,
        specialties: ['Electronics', 'Water', 'Safety'],
        digitalMaturity: 88.9,
        sustainabilityScore: 8.9,
        safetyScore: 9.3,
        innovationScore: 9.2,
        stockPerformance: '+13.8%'
      },
      {
        company: 'SABIC',
        category: 'Petrochemicals',
        revenue: 56789012345,
        production: 87654321,
        plants: 156,
        employees: 33000,
        countries: 50,
        specialties: ['Petrochemicals', 'Polymers', 'Agri-nutrients'],
        digitalMaturity: 76.4,
        sustainabilityScore: 7.9,
        safetyScore: 8.7,
        innovationScore: 8.1,
        stockPerformance: '+6.3%'
      }
    ],
    productionCategories: [
      {
        category: 'Basic Chemicals',
        production: 567890123, // tonnes
        marketValue: 234567890123, // EUR
        growth: 3.4, // annual percentage
        plants: 12345,
        mainProducts: ['Ethylene', 'Propylene', 'Ammonia'],
        processEfficiency: 87.2,
        sustainability: 72.8
      },
      {
        category: 'Specialty Chemicals',
        production: 234567890,
        marketValue: 345678901234,
        growth: 5.8,
        plants: 8901,
        mainProducts: ['Catalysts', 'Additives', 'Electronic chemicals'],
        processEfficiency: 91.4,
        sustainability: 78.9
      },
      {
        category: 'Petrochemicals',
        production: 345678901,
        marketValue: 456789012345,
        growth: 4.2,
        plants: 6789,
        mainProducts: ['Plastics', 'Synthetic rubber', 'Fibers'],
        processEfficiency: 85.6,
        sustainability: 68.3
      },
      {
        category: 'Pharmaceuticals',
        production: 123456789,
        marketValue: 567890123456,
        growth: 7.9,
        plants: 4567,
        mainProducts: ['APIs', 'Intermediates', 'Fine chemicals'],
        processEfficiency: 94.7,
        sustainability: 84.2
      }
    ],
    processMonitoring: {
      activePlants: 234567,
      totalReactors: 456789,
      utilizationRate: 78.9, // percentage
      efficiency: 84.6,
      qualityScore: 93.2,
      automationLevel: 67.8,
      digitalTwins: 23456,
      iotSensors: 12345678,
      realTimeMonitoring: 89.7,
      predictiveMaintenance: 72.4,
      processOptimization: 81.3,
      energyEfficiency: 76.9,
      wasteReduction: 68.5,
      yieldOptimization: 87.1
    },
    safetyMetrics: {
      fatalityRate: 0.08, // per 100,000 hours
      injuryRate: 0.67, // per 100,000 hours
      lostTimeAccidents: 2345, // annually
      nearMisses: 23456,
      safetyTraining: 234567890, // hours annually
      emergencyDrills: 45678,
      complianceScore: 94.7,
      hazmatIncidents: 345,
      processUpsets: 1234,
      safetyInvestment: 23456789012, // EUR
      ppeCompliance: 97.8,
      riskAssessments: 67890
    },
    environmentalMetrics: {
      emissions: 123456789, // tonnes CO2 equivalent
      waterUsage: 234567890123, // liters annually
      wasteGeneration: 12345678, // tonnes
      recyclingRate: 73.4, // percentage
      energyConsumption: 234567890123, // kWh
      renewableEnergy: 28.7,
      pollutionPreventionInvestment: 12345678901,
      biodiversityProjects: 234,
      carbonIntensity: 2.34, // tonnes CO2/tonne product
      waterRecycling: 45.6,
      circularEconomy: 67.8,
      environmentalCompliance: 89.3
    },
    supplyChain: {
      rawMaterials: {
        suppliers: 234567,
        criticalMaterials: 123,
        inventoryValue: 45678901234, // EUR
        supplyReliability: 87.9,
        sustainabilityScore: 76.4
      },
      logistics: {
        transportationModes: {
          pipeline: 45.6, // percentage
          rail: 23.4,
          truck: 18.9,
          ship: 12.1
        },
        warehouseFacilities: 12345,
        distributionCenters: 2345,
        deliveryPerformance: 94.2,
        inventoryTurnover: 8.7
      },
      customerSegments: {
        automotive: 23.4, // percentage of sales
        construction: 18.7,
        electronics: 15.6,
        packaging: 14.2,
        agriculture: 12.8,
        other: 15.3
      }
    },
    innovation: {
      rdSpending: 123456789012, // EUR annually
      rdEmployees: 234567,
      patents: 12345, // annually
      newProductLaunches: 567,
      collaborations: 890,
      sustainableTechnologies: 67.8, // percentage of R&D
      digitalInnovation: 45.6,
      biotechnology: 34.2,
      nanotechnology: 28.9,
      greenChemistry: 56.7,
      processInnovation: 78.9,
      productInnovation: 73.2
    },
    chemicalAlerts: [
      {
        type: 'CRITICAL',
        category: 'Safety Incident',
        message: 'Chemical leak detected at petrochemical facility - evacuation zone 2km radius activated',
        region: 'North America',
        impact: 'CRITICAL',
        actionRequired: true,
        timestamp: '04:28',
        recommendations: ['Emergency response', 'Leak containment', 'Air quality monitoring', 'Public notification']
      },
      {
        type: 'WARNING',
        category: 'Process Upset',
        message: 'Reactor temperature spike at specialty chemicals plant - automated shutdown initiated',
        region: 'Europe',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '04:25',
        recommendations: ['System diagnosis', 'Temperature control', 'Process restart', 'Root cause analysis']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'New biodegradable polymer technology achieves 94% efficiency breakthrough',
        region: 'Asia',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:22',
        recommendations: ['Patent filing', 'Scale-up planning', 'Market analysis', 'Partnership opportunities']
      },
      {
        type: 'INFO',
        category: 'Market Update',
        message: 'Chemical commodity prices rise 8.3% due to supply chain constraints and energy costs',
        region: 'Global',
        impact: 'MEDIUM',
        actionRequired: false,
        timestamp: '04:19',
        recommendations: ['Cost optimization', 'Inventory strategy', 'Customer communication', 'Alternative sourcing']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChemicalData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        processMonitoring: {
          ...prev.processMonitoring,
          utilizationRate: Math.max(70, Math.min(85, prev.processMonitoring.utilizationRate + (Math.random() - 0.5) * 2)),
          efficiency: Math.max(80, Math.min(90, prev.processMonitoring.efficiency + (Math.random() - 0.5) * 1))
        }
      }));
    }, 35000);

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
      case 'Diversified Chemicals': return 'text-blue-400 bg-blue-400/20';
      case 'Materials Science': return 'text-green-400 bg-green-400/20';
      case 'Specialty Chemicals': return 'text-purple-400 bg-purple-400/20';
      case 'Petrochemicals': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 5) return 'text-green-400';
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
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <TestTube className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Chemical & Petrochemical Intelligence Center</h1>
              <p className="text-cyan-300">Chemical manufacturing, process optimization, safety management & supply chain</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{chemicalData.currentTime}</div>
            <div className="text-cyan-300">Chemical Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Global Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(chemicalData.industryOverview.globalChemicalMarket)}</div>
            <div className="text-cyan-300 text-sm">Production: {formatNumber(chemicalData.industryOverview.totalProduction)} tonnes</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TestTube className="w-5 h-5 text-blue-400 mr-2" />
                Active Plants
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(chemicalData.industryOverview.activePlants)}</div>
            <div className="text-blue-300 text-sm">Manufacturing Facilities</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                R&D Investment
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(chemicalData.industryOverview.rdInvestment)}</div>
            <div className="text-purple-300 text-sm">Innovation Focus</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Thermometer className="w-5 h-5 text-orange-400 mr-2" />
                Process Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(chemicalData.industryOverview.processEfficiency)}</div>
            <div className="text-orange-300 text-sm">Operational Excellence</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Safety Compliance
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(chemicalData.industryOverview.safetyCompliance)}</div>
            <div className="text-green-300 text-sm">Safety Standards</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-emerald-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatNumber(chemicalData.industryOverview.chemicalEmployees)}</div>
            <div className="text-emerald-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Chemical Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TestTube className="w-5 h-5 text-cyan-400 mr-2" />
            Major Chemical Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Plants</th>
                  <th className="text-center p-3 text-slate-300">Digital Maturity</th>
                  <th className="text-center p-3 text-slate-300">Safety Score</th>
                </tr>
              </thead>
              <tbody>
                {chemicalData.majorChemicalCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-orange-400">{company.plants}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.digitalMaturity, 80, 85)}`}>
                      {formatPercentage(company.digitalMaturity)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.safetyScore, 8.5, 9.0)}`}>
                      {company.safetyScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Production Categories & Process Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Production Categories Intelligence
            </h3>
            <div className="space-y-4">
              {chemicalData.productionCategories.map((category, index) => (
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
                      <div className="text-purple-400">Plants: {formatNumber(category.plants)}</div>
                      <div className="text-orange-400">Efficiency: {formatPercentage(category.processEfficiency)}</div>
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

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-emerald-400 mr-2" />
              Process Monitoring Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(chemicalData.processMonitoring.utilizationRate)}</div>
                <div className="text-emerald-300 text-sm">Utilization Rate</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(chemicalData.processMonitoring.activePlants)} plants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(chemicalData.processMonitoring.efficiency)}</div>
                <div className="text-blue-300 text-sm">Process Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(chemicalData.processMonitoring.totalReactors)} reactors</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Process Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Quality Score</span>
                  <span className="text-green-400">{formatPercentage(chemicalData.processMonitoring.qualityScore)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Automation</span>
                  <span className="text-blue-400">{formatPercentage(chemicalData.processMonitoring.automationLevel)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Twins</span>
                  <span className="text-purple-400">{formatNumber(chemicalData.processMonitoring.digitalTwins)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">IoT Sensors</span>
                  <span className="text-orange-400">{formatNumber(chemicalData.processMonitoring.iotSensors)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Optimization</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Energy Efficiency</span>
                  <span className="text-emerald-400">{formatPercentage(chemicalData.processMonitoring.energyEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Reduction</span>
                  <span className="text-green-400">{formatPercentage(chemicalData.processMonitoring.wasteReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Yield Optimization</span>
                  <span className="text-blue-400">{formatPercentage(chemicalData.processMonitoring.yieldOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Predictive Maintenance</span>
                  <span className="text-cyan-400">{formatPercentage(chemicalData.processMonitoring.predictiveMaintenance)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Metrics & Environmental Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Safety Metrics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{chemicalData.safetyMetrics.fatalityRate}</div>
                <div className="text-green-300 text-sm">Fatality Rate</div>
                <div className="text-gray-400 text-xs mt-1">Per 100K Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{chemicalData.safetyMetrics.injuryRate}</div>
                <div className="text-blue-300 text-sm">Injury Rate</div>
                <div className="text-gray-400 text-xs mt-1">Per 100K Hours</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Safety Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Lost Time Accidents</span>
                  <span className="text-red-400">{formatNumber(chemicalData.safetyMetrics.lostTimeAccidents)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Near Misses</span>
                  <span className="text-yellow-400">{formatNumber(chemicalData.safetyMetrics.nearMisses)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Training Hours</span>
                  <span className="text-green-400">{formatNumber(chemicalData.safetyMetrics.safetyTraining)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">PPE Compliance</span>
                  <span className="text-blue-400">{formatPercentage(chemicalData.safetyMetrics.ppeCompliance)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(chemicalData.safetyMetrics.complianceScore)}</div>
                <div className="text-slate-300">Compliance Score</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-400">{formatCurrency(chemicalData.safetyMetrics.safetyInvestment)}</div>
                <div className="text-slate-300">Safety Investment</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 text-emerald-400 mr-2" />
              Environmental Impact Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatNumber(chemicalData.environmentalMetrics.emissions)}</div>
                <div className="text-red-300 text-sm">CO2 Emissions</div>
                <div className="text-gray-400 text-xs mt-1">Tonnes CO2e</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(chemicalData.environmentalMetrics.recyclingRate)}</div>
                <div className="text-green-300 text-sm">Recycling Rate</div>
                <div className="text-gray-400 text-xs mt-1">Waste Management</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Usage</span>
                  <span className="text-blue-400">{formatNumber(chemicalData.environmentalMetrics.waterUsage)} L</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Recycling</span>
                  <span className="text-cyan-400">{formatPercentage(chemicalData.environmentalMetrics.waterRecycling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-green-400">{formatPercentage(chemicalData.environmentalMetrics.renewableEnergy)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Circular Economy</span>
                  <span className="text-purple-400">{formatPercentage(chemicalData.environmentalMetrics.circularEconomy)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(chemicalData.environmentalMetrics.environmentalCompliance)}</div>
                <div className="text-slate-300">Environmental Compliance</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatCurrency(chemicalData.environmentalMetrics.pollutionPreventionInvestment)}</div>
                <div className="text-slate-300">Pollution Prevention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Chain & Innovation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(chemicalData.supplyChain.rawMaterials.suppliers)}</div>
                <div className="text-orange-300 text-sm">Suppliers</div>
                <div className="text-gray-400 text-xs mt-1">Raw Materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(chemicalData.supplyChain.rawMaterials.supplyReliability)}</div>
                <div className="text-green-300 text-sm">Supply Reliability</div>
                <div className="text-gray-400 text-xs mt-1">Performance</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Transportation Modes</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Pipeline</span>
                  <span className="text-blue-400">{formatPercentage(chemicalData.supplyChain.logistics.transportationModes.pipeline)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Rail</span>
                  <span className="text-green-400">{formatPercentage(chemicalData.supplyChain.logistics.transportationModes.rail)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Truck</span>
                  <span className="text-orange-400">{formatPercentage(chemicalData.supplyChain.logistics.transportationModes.truck)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Ship</span>
                  <span className="text-cyan-400">{formatPercentage(chemicalData.supplyChain.logistics.transportationModes.ship)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Customer Segments</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Automotive</span>
                  <span className="text-purple-400">{formatPercentage(chemicalData.supplyChain.customerSegments.automotive)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Construction</span>
                  <span className="text-orange-400">{formatPercentage(chemicalData.supplyChain.customerSegments.construction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Electronics</span>
                  <span className="text-blue-400">{formatPercentage(chemicalData.supplyChain.customerSegments.electronics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Packaging</span>
                  <span className="text-green-400">{formatPercentage(chemicalData.supplyChain.customerSegments.packaging)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              Innovation Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatCurrency(chemicalData.innovation.rdSpending)}</div>
                <div className="text-purple-300 text-sm">R&D Spending</div>
                <div className="text-gray-400 text-xs mt-1">Annual Investment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(chemicalData.innovation.patents)}</div>
                <div className="text-cyan-300 text-sm">Patents Filed</div>
                <div className="text-gray-400 text-xs mt-1">Annually</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Innovation Focus</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Tech</span>
                  <span className="text-green-400">{formatPercentage(chemicalData.innovation.sustainableTechnologies)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green Chemistry</span>
                  <span className="text-emerald-400">{formatPercentage(chemicalData.innovation.greenChemistry)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Innovation</span>
                  <span className="text-purple-400">{formatPercentage(chemicalData.innovation.digitalInnovation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Biotechnology</span>
                  <span className="text-blue-400">{formatPercentage(chemicalData.innovation.biotechnology)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatPercentage(chemicalData.innovation.processInnovation)}</div>
                <div className="text-slate-300">Process Innovation</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatNumber(chemicalData.innovation.newProductLaunches)}</div>
                <div className="text-slate-300">New Products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chemical Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Chemical & Petrochemical Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {chemicalData.chemicalAlerts.map((alert, index) => (
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