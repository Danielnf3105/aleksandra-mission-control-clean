// Mining & Natural Resources Intelligence Center - Resource Extraction, Mining Operations, Commodity Markets & Environmental Impact
import { useState, useEffect } from 'react';
import { Mountain, Zap, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity } from 'lucide-react';

export default function MiningNaturalResourcesIntelligenceCenter() {
  const [miningData, setMiningData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalMiningMarket: 2345678901234, // EUR annually
      mineralProduction: 234567890123, // tonnes annually
      activeMines: 456789,
      miningEmployees: 23456789,
      globalReserves: 345678901234, // EUR value
      exportRevenue: 456789012345,
      rdInvestment: 34567890123,
      digitalTransformation: 67.8, // percentage
      sustainabilityInvestment: 12345678901,
      safetyIncidents: 23456, // annually
      environmentalCompliance: 89.7,
      automationLevel: 45.6
    },
    majorMiningCompanies: [
      {
        company: 'BHP',
        category: 'Diversified Mining',
        revenue: 89012345678, // EUR annual
        production: 456789012, // tonnes
        reserves: 234567890123, // EUR value
        employees: 80000,
        countries: 25,
        mines: 45,
        commodities: ['Iron Ore', 'Copper', 'Coal'],
        digitalAdoption: 82.1,
        sustainabilityScore: 8.4,
        safetyScore: 9.2,
        stockPerformance: '+15.7%'
      },
      {
        company: 'Rio Tinto',
        category: 'Diversified Mining',
        revenue: 78901234567,
        production: 345678901,
        reserves: 198765432109,
        employees: 47000,
        countries: 35,
        mines: 38,
        commodities: ['Iron Ore', 'Aluminum', 'Copper'],
        digitalAdoption: 85.6,
        sustainabilityScore: 8.1,
        safetyScore: 8.9,
        stockPerformance: '+12.3%'
      },
      {
        company: 'Vale',
        category: 'Iron Ore & Base Metals',
        revenue: 67890123456,
        production: 298765432,
        reserves: 176543210987,
        employees: 68000,
        countries: 15,
        mines: 42,
        commodities: ['Iron Ore', 'Nickel', 'Manganese'],
        digitalAdoption: 71.4,
        sustainabilityScore: 7.8,
        safetyScore: 8.6,
        stockPerformance: '+9.8%'
      },
      {
        company: 'Glencore',
        category: 'Trading & Mining',
        revenue: 234567890123,
        production: 423456789,
        reserves: 145678901234,
        employees: 135000,
        countries: 40,
        mines: 55,
        commodities: ['Coal', 'Copper', 'Zinc'],
        digitalAdoption: 68.9,
        sustainabilityScore: 7.2,
        safetyScore: 8.1,
        stockPerformance: '+7.4%'
      }
    ],
    commodityMarkets: [
      {
        commodity: 'Iron Ore',
        price: 123.45, // EUR per tonne
        change: '+2.3%',
        volume: 2345678901, // tonnes traded
        production: 2890123456, // global tonnes
        reserves: 234567890123, // tonnes
        topProducers: ['Australia', 'Brazil', 'China'],
        demandGrowth: 3.4,
        supplyConstraints: 'Medium'
      },
      {
        commodity: 'Copper',
        price: 8456.78,
        change: '+1.8%',
        volume: 345678901,
        production: 23456789,
        reserves: 890123456789,
        topProducers: ['Chile', 'Peru', 'China'],
        demandGrowth: 5.7,
        supplyConstraints: 'High'
      },
      {
        commodity: 'Gold',
        price: 67890.12,
        change: '-0.4%',
        volume: 456789012,
        production: 3456789,
        reserves: 567890123456,
        topProducers: ['China', 'Australia', 'Russia'],
        demandGrowth: 1.9,
        supplyConstraints: 'Low'
      },
      {
        commodity: 'Lithium',
        price: 23456.78,
        change: '+12.7%',
        volume: 123456789,
        production: 567890,
        reserves: 234567890123,
        topProducers: ['Australia', 'Chile', 'China'],
        demandGrowth: 23.4,
        supplyConstraints: 'Critical'
      },
      {
        commodity: 'Coal',
        price: 234.56,
        change: '-3.2%',
        volume: 7890123456,
        production: 8901234567,
        reserves: 1234567890123,
        topProducers: ['China', 'India', 'Indonesia'],
        demandGrowth: -2.1,
        supplyConstraints: 'Low'
      }
    ],
    miningOperations: {
      surfaceMining: {
        percentage: 67.8,
        production: 1567890123, // tonnes
        efficiency: 89.4,
        automation: 56.7,
        environmentalImpact: 'HIGH'
      },
      undergroundMining: {
        percentage: 32.2,
        production: 723456789,
        efficiency: 74.3,
        automation: 34.6,
        environmentalImpact: 'MEDIUM'
      },
      explorationSpending: 23456789012, // EUR annually
      newDiscoveries: 234, // this year
      mineLife: {
        average: 23.4, // years
        extending: 67, // mines
        depleted: 45, // closed this year
        newOpenings: 78
      },
      equipment: {
        excavators: 123456,
        dumpTrucks: 67890,
        drills: 234567,
        conveyors: 89012,
        utilization: 78.9,
        maintenance: 89.7,
        digitalization: 45.6
      }
    },
    environmentalMetrics: {
      carbonEmissions: 234567890, // tonnes CO2 annually
      waterUsage: 123456789012, // liters annually
      landDisturbance: 234567, // hectares
      wasteGeneration: 345678901, // tonnes
      recyclingRate: 67.8, // percentage
      rehabilitatedLand: 56789, // hectares this year
      biodiversityOffset: 78.9, // percentage compliance
      renewableEnergy: 23.4, // percentage of operations
      environmentalViolations: 234, // annually
      sustainabilityInvestment: 12345678901, // EUR
      carbonNeutrality: 15.7, // percentage of companies
      esgCompliance: 78.9
    },
    safetyMetrics: {
      fatalityRate: 0.02, // per 100,000 hours
      injuryRate: 2.34, // per 100,000 hours
      lostTimeInjuries: 12345, // annually
      nearMisses: 234567,
      safetyTraining: 456789012, // hours annually
      complianceScore: 94.2,
      emergencyDrills: 23456,
      personalProtectiveEquipment: 98.7, // compliance percentage
      hazardousIncidents: 3456,
      safetyCertifications: 89.4,
        safetyInvestment: 3456789012, // EUR
        riskAssessments: 456789
    },
    digitalMining: {
      iotSensors: 2345678, // deployed
      autonomousVehicles: 12345,
      aiAnalytics: 67.8, // implementation percentage
      digitalTwins: 34.6,
      predictiveMaintenance: 78.9,
      remoteOperations: 45.7,
      realTimeMonitoring: 89.3,
      dataAnalytics: 91.2,
      cloudComputing: 56.8,
      machinelearning: 42.1,
      blockchain: 23.4,
      cybersecurity: 87.6,
      connectivity: 74.5,
        automation: {
        hauling: 45.6,
        drilling: 34.2,
        blasting: 23.8,
        processing: 67.9,
        sorting: 56.3
      }
    },
    exploration: {
      activeProjects: 23456,
      investmentAmount: 23456789012, // EUR
      successRate: 12.3, // percentage
        newDeposits: 234,
        advancedExploration: 1234,
        feasibilityStudies: 456,
        geologicalSurveys: 12345,
        geophysicalSurveys: 6789,
        geochemicalSamples: 234567,
        drillingMeters: 23456789, // annually
        resourceEstimates: 345678,
        technologies: {
        satelliteImaging: 78.9,
        dronesSurveys: 67.8,
        artificialIntelligence: 45.6,
        geostatistics: 89.3,
        threeDModeling: 72.1
      }
    },
    miningAlerts: [
      {
        type: 'CRITICAL',
        category: 'Safety Incident',
        message: 'Mine collapse reported at copper facility - 45 workers evacuated, rescue operations underway',
        region: 'South America',
        impact: 'CRITICAL',
        actionRequired: true,
        timestamp: '04:20',
        recommendations: ['Emergency response', 'Safety investigation', 'Operations halt', 'Worker support']
      },
      {
        type: 'WARNING',
        category: 'Environmental Alert',
        message: 'Water contamination detected near gold mining site - exceeding permissible levels',
        region: 'Africa',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '04:17',
        recommendations: ['Immediate containment', 'Environmental remediation', 'Regulatory notification', 'Community engagement']
      },
      {
        type: 'SUCCESS',
        category: 'Discovery',
        message: 'Major lithium deposit discovered in Australia - estimated 2.3M tonnes reserves',
        region: 'Australia',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:14',
        recommendations: ['Feasibility study', 'Environmental assessment', 'Stakeholder engagement', 'Development planning']
      },
      {
        type: 'INFO',
        category: 'Market Update',
        message: 'Copper prices surge 12.7% following supply chain disruptions in major producing regions',
        region: 'Global',
        impact: 'MEDIUM',
        actionRequired: false,
        timestamp: '04:11',
        recommendations: ['Production optimization', 'Contract negotiations', 'Inventory management', 'Market analysis']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMiningData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        commodityMarkets: prev.commodityMarkets.map(commodity => ({
          ...commodity,
          price: Math.max(commodity.price * 0.95, commodity.price * 1.05 * Math.random())
        })),
        miningOperations: {
          ...prev.miningOperations,
          equipment: {
            ...prev.miningOperations.equipment,
            utilization: Math.max(70, Math.min(85, prev.miningOperations.equipment.utilization + (Math.random() - 0.5) * 2))
          }
        }
      }));
    }, 40000);

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

  const getPerformanceColor = (value, good = 70, excellent = 80) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCommodityColor = (change) => {
    const numChange = parseFloat(change.replace('%', ''));
    if (numChange > 0) return 'text-green-400';
    if (numChange < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Diversified Mining': return 'text-blue-400 bg-blue-400/20';
      case 'Iron Ore & Base Metals': return 'text-orange-400 bg-orange-400/20';
      case 'Trading & Mining': return 'text-purple-400 bg-purple-400/20';
      case 'Precious Metals': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getConstraintColor = (constraint) => {
    switch (constraint) {
      case 'Critical': return 'text-red-400';
      case 'High': return 'text-orange-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getEnvironmentalColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
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
    <div className="h-full bg-gradient-to-br from-gray-900 via-slate-900 to-stone-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-stone-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-stone-600 to-amber-600 rounded-xl">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Mining & Natural Resources Intelligence Center</h1>
              <p className="text-stone-300">Resource extraction, mining operations, commodity markets & environmental impact</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-stone-400">{miningData.currentTime}</div>
            <div className="text-stone-300">Mining Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-stone-400 mr-2" />
                Global Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-stone-400">{formatCurrency(miningData.industryOverview.globalMiningMarket)}</div>
            <div className="text-stone-300 text-sm">Production: {formatNumber(miningData.industryOverview.mineralProduction)} tonnes</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Mountain className="w-5 h-5 text-amber-400 mr-2" />
                Active Mines
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{formatNumber(miningData.industryOverview.activeMines)}</div>
            <div className="text-amber-300 text-sm">Worldwide</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(miningData.industryOverview.miningEmployees)}</div>
            <div className="text-blue-300 text-sm">Global Workforce</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-green-400 mr-2" />
                Global Reserves
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(miningData.industryOverview.globalReserves)}</div>
            <div className="text-green-300 text-sm">Estimated Value</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                Digital Transform
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(miningData.industryOverview.digitalTransformation)}</div>
            <div className="text-purple-300 text-sm">Adoption Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Safety Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(miningData.safetyMetrics.complianceScore)}</div>
            <div className="text-emerald-300 text-sm">Compliance</div>
          </div>
        </div>

        {/* Major Mining Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Mountain className="w-5 h-5 text-stone-400 mr-2" />
            Major Mining Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Reserves</th>
                  <th className="text-center p-3 text-slate-300">Digital Adoption</th>
                  <th className="text-center p-3 text-slate-300">Safety Score</th>
                </tr>
              </thead>
              <tbody>
                {miningData.majorMiningCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(company.employees)} employees • {company.countries} countries • {company.mines} mines • {company.stockPerformance}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center text-amber-400">{formatNumber(company.production)} t</td>
                    <td className="p-3 text-center text-blue-400">{formatCurrency(company.reserves)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.digitalAdoption, 70, 80)}`}>
                      {formatPercentage(company.digitalAdoption)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.safetyScore, 8, 9)}`}>
                      {company.safetyScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commodity Markets & Mining Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-yellow-400 mr-2" />
              Commodity Markets Intelligence
            </h3>
            <div className="space-y-4">
              {miningData.commodityMarkets.map((commodity, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{commodity.commodity}</span>
                      <span className={`text-sm ${getCommodityColor(commodity.change)}`}>{commodity.change}</span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(commodity.price)}/t</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Production: {formatNumber(commodity.production)} t</div>
                      <div className="text-purple-400">Reserves: {formatNumber(commodity.reserves)} t</div>
                      <div className="text-orange-400">Growth: {formatPercentage(commodity.demandGrowth)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Volume: {formatNumber(commodity.volume)} t</div>
                      <div className={`${getConstraintColor(commodity.supplyConstraints)}`}>Supply: {commodity.supplyConstraints}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {commodity.topProducers.map((producer, pIndex) => (
                      <span key={pIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {producer}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Mining Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(miningData.miningOperations.surfaceMining.percentage)}</div>
                <div className="text-cyan-300 text-sm">Surface Mining</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(miningData.miningOperations.surfaceMining.production)} t</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(miningData.miningOperations.undergroundMining.percentage)}</div>
                <div className="text-purple-300 text-sm">Underground</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(miningData.miningOperations.undergroundMining.production)} t</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Mining Equipment</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Excavators</span>
                  <span className="text-blue-400">{formatNumber(miningData.miningOperations.equipment.excavators)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Dump Trucks</span>
                  <span className="text-green-400">{formatNumber(miningData.miningOperations.equipment.dumpTrucks)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Drills</span>
                  <span className="text-orange-400">{formatNumber(miningData.miningOperations.equipment.drills)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Conveyors</span>
                  <span className="text-purple-400">{formatNumber(miningData.miningOperations.equipment.conveyors)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Operational Metrics</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-700/30 rounded p-2 text-center">
                  <div className="text-lg font-bold text-emerald-400">{formatPercentage(miningData.miningOperations.equipment.utilization)}</div>
                  <div className="text-slate-300">Equipment Utilization</div>
                </div>
                <div className="bg-slate-700/30 rounded p-2 text-center">
                  <div className="text-lg font-bold text-blue-400">{formatPercentage(miningData.miningOperations.equipment.maintenance)}</div>
                  <div className="text-slate-300">Maintenance Score</div>
                </div>
                <div className="bg-slate-700/30 rounded p-2 text-center">
                  <div className="text-lg font-bold text-purple-400">{formatPercentage(miningData.miningOperations.equipment.digitalization)}</div>
                  <div className="text-slate-300">Digitalization</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Metrics & Safety Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 text-green-400 mr-2" />
              Environmental Impact Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatNumber(miningData.environmentalMetrics.carbonEmissions)}</div>
                <div className="text-red-300 text-sm">CO2 Emissions</div>
                <div className="text-gray-400 text-xs mt-1">Tonnes Annually</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(miningData.environmentalMetrics.recyclingRate)}</div>
                <div className="text-green-300 text-sm">Recycling Rate</div>
                <div className="text-gray-400 text-xs mt-1">Waste Management</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Usage</span>
                  <span className="text-blue-400">{formatNumber(miningData.environmentalMetrics.waterUsage)} L</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Land Disturbed</span>
                  <span className="text-orange-400">{formatNumber(miningData.environmentalMetrics.landDisturbance)} ha</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Rehabilitated</span>
                  <span className="text-green-400">{formatNumber(miningData.environmentalMetrics.rehabilitatedLand)} ha</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-purple-400">{formatPercentage(miningData.environmentalMetrics.renewableEnergy)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatPercentage(miningData.environmentalMetrics.esgCompliance)}</div>
                <div className="text-slate-300">ESG Compliance</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatCurrency(miningData.environmentalMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Sustainability Investment</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
              Safety Metrics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{miningData.safetyMetrics.fatalityRate}</div>
                <div className="text-emerald-300 text-sm">Fatality Rate</div>
                <div className="text-gray-400 text-xs mt-1">Per 100K Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{miningData.safetyMetrics.injuryRate}</div>
                <div className="text-blue-300 text-sm">Injury Rate</div>
                <div className="text-gray-400 text-xs mt-1">Per 100K Hours</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Safety Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Lost Time Injuries</span>
                  <span className="text-red-400">{formatNumber(miningData.safetyMetrics.lostTimeInjuries)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Near Misses</span>
                  <span className="text-yellow-400">{formatNumber(miningData.safetyMetrics.nearMisses)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Training Hours</span>
                  <span className="text-green-400">{formatNumber(miningData.safetyMetrics.safetyTraining)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">PPE Compliance</span>
                  <span className="text-blue-400">{formatPercentage(miningData.safetyMetrics.personalProtectiveEquipment)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(miningData.safetyMetrics.complianceScore)}</div>
                <div className="text-slate-300">Compliance Score</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-400">{formatCurrency(miningData.safetyMetrics.safetyInvestment)}</div>
                <div className="text-slate-300">Safety Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Mining & Exploration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              Digital Mining Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(miningData.digitalMining.iotSensors)}</div>
                <div className="text-purple-300 text-sm">IoT Sensors</div>
                <div className="text-gray-400 text-xs mt-1">Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(miningData.digitalMining.autonomousVehicles)}</div>
                <div className="text-cyan-300 text-sm">Autonomous Vehicles</div>
                <div className="text-gray-400 text-xs mt-1">Operating</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Analytics</span>
                  <span className="text-purple-400">{formatPercentage(miningData.digitalMining.aiAnalytics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Twins</span>
                  <span className="text-blue-400">{formatPercentage(miningData.digitalMining.digitalTwins)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Predictive Maint</span>
                  <span className="text-green-400">{formatPercentage(miningData.digitalMining.predictiveMaintenance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Remote Operations</span>
                  <span className="text-orange-400">{formatPercentage(miningData.digitalMining.remoteOperations)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Automation Levels</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Processing</span>
                  <span className="text-green-400">{formatPercentage(miningData.digitalMining.automation.processing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Hauling</span>
                  <span className="text-blue-400">{formatPercentage(miningData.digitalMining.automation.hauling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Drilling</span>
                  <span className="text-purple-400">{formatPercentage(miningData.digitalMining.automation.drilling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sorting</span>
                  <span className="text-cyan-400">{formatPercentage(miningData.digitalMining.automation.sorting)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-amber-400 mr-2" />
              Exploration Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{formatNumber(miningData.exploration.activeProjects)}</div>
                <div className="text-amber-300 text-sm">Active Projects</div>
                <div className="text-gray-400 text-xs mt-1">Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(miningData.exploration.investmentAmount)}</div>
                <div className="text-green-300 text-sm">Investment</div>
                <div className="text-gray-400 text-xs mt-1">Annually</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Exploration Activity</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">New Deposits</span>
                  <span className="text-green-400">{formatNumber(miningData.exploration.newDeposits)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Success Rate</span>
                  <span className="text-blue-400">{formatPercentage(miningData.exploration.successRate)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Drilling Meters</span>
                  <span className="text-purple-400">{formatNumber(miningData.exploration.drillingMeters)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Samples</span>
                  <span className="text-orange-400">{formatNumber(miningData.exploration.geochemicalSamples)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Exploration Technologies</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Geostatistics</span>
                  <span className="text-green-400">{formatPercentage(miningData.exploration.technologies.geostatistics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Satellite Imaging</span>
                  <span className="text-blue-400">{formatPercentage(miningData.exploration.technologies.satelliteImaging)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">3D Modeling</span>
                  <span className="text-purple-400">{formatPercentage(miningData.exploration.technologies.threeDModeling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Drone Surveys</span>
                  <span className="text-cyan-400">{formatPercentage(miningData.exploration.technologies.dronesSurveys)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mining Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-stone-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Mining & Natural Resources Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {miningData.miningAlerts.map((alert, index) => (
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