// Renewable Energy Systems Intelligence Center - Clean Energy Production, Grid Integration & Sustainability Analytics
import { useState, useEffect } from 'react';
import { Zap, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Sun } from 'lucide-react';

export default function RenewableEnergySystemsIntelligenceCenter() {
  const [renewableData, setRenewableData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalRenewableMarket: 1234567890123, // EUR annually
      solarMarket: 234567890123,
      windMarket: 345678901234,
      totalCapacity: 3456789, // MW installed globally
      activeFacilities: 89012,
      renewableWorkers: 13456789,
      globalInvestment: 567890123456,
      carbonOffset: 23456789012, // tonnes CO2 annually
      energyGenerated: 8901234567, // MWh annually
      gridIntegration: 67.8, // percentage
      storageCapacity: 234567, // MWh
      efficiencyGains: 23.4, // percentage improvement
      costReduction: 78.9 // percentage since 2010
    },
    majorRenewableCompanies: [
      {
        company: 'NextEra Energy',
        category: 'Integrated Renewables',
        revenue: 20123456789, // EUR annual
        capacity: 30234, // MW
        facilities: 267,
        employees: 14900,
        countries: 12,
        technologies: ['Wind', 'Solar', 'Storage', 'Nuclear'],
        digitalMaturity: 89.7,
        sustainabilityScore: 9.4,
        gridReliability: 99.2,
        innovationScore: 8.8,
        stockPerformance: '+24.6%'
      },
      {
        company: 'Ørsted',
        category: 'Offshore Wind',
        revenue: 17890123456,
        capacity: 13456,
        facilities: 89,
        employees: 7800,
        countries: 15,
        technologies: ['Offshore wind', 'Onshore wind', 'Solar', 'Storage'],
        digitalMaturity: 94.2,
        sustainabilityScore: 9.8,
        gridReliability: 97.8,
        innovationScore: 9.3,
        stockPerformance: '+31.2%'
      },
      {
        company: 'Tesla Energy',
        category: 'Energy Storage',
        revenue: 6789012345,
        capacity: 8901, // MW storage
        facilities: 45,
        employees: 12000,
        countries: 8,
        technologies: ['Battery storage', 'Solar', 'Grid services', 'Virtual power plants'],
        digitalMaturity: 98.4,
        sustainabilityScore: 9.1,
        gridReliability: 96.7,
        innovationScore: 9.9,
        stockPerformance: '+67.8%'
      },
      {
        company: 'Vestas',
        category: 'Wind Technology',
        revenue: 15234567890,
        capacity: 145678, // MW manufactured annually
        facilities: 156,
        employees: 29000,
        countries: 80,
        technologies: ['Wind turbines', 'Service', 'Digital solutions', 'Hybrid systems'],
        digitalMaturity: 87.6,
        sustainabilityScore: 8.9,
        gridReliability: 98.1,
        innovationScore: 8.7,
        stockPerformance: '+19.4%'
      }
    ],
    renewableTechnologies: [
      {
        technology: 'Solar PV',
        globalCapacity: 1234567, // MW
        annualGeneration: 1890123456, // MWh
        growth: 15.7, // annual percentage
        facilities: 45678,
        efficiency: 22.4, // percentage
        costPerMWh: 45.67, // EUR
        carbonOffset: 890123456 // tonnes CO2
      },
      {
        technology: 'Onshore Wind',
        globalCapacity: 987654,
        annualGeneration: 2345678901,
        growth: 12.3,
        facilities: 23456,
        efficiency: 35.8,
        costPerMWh: 38.94,
        carbonOffset: 1234567890
      },
      {
        technology: 'Offshore Wind',
        globalCapacity: 345678,
        annualGeneration: 1234567890,
        growth: 28.9,
        facilities: 567,
        efficiency: 45.2,
        costPerMWh: 67.43,
        carbonOffset: 678901234
      },
      {
        technology: 'Energy Storage',
        globalCapacity: 234567,
        annualGeneration: 567890123,
        growth: 34.6,
        facilities: 12345,
        efficiency: 89.7,
        costPerMWh: 123.45,
        carbonOffset: 234567890
      }
    ],
    energyProduction: {
      solar: {
        currentOutput: 234567, // MW real-time
        dailyPeak: 456789,
        efficiency: 89.7, // percentage of capacity
        weatherImpact: 23.4, // percentage variation
        maintenanceUptime: 97.8,
        forecastAccuracy: 91.2
      },
      wind: {
        currentOutput: 345678,
        dailyPeak: 678901,
        efficiency: 76.9,
        weatherImpact: 34.7,
        maintenanceUptime: 95.6,
        forecastAccuracy: 87.3
      },
      storage: {
        currentCapacity: 123456, // MWh available
        chargeLevel: 78.9, // percentage
        efficiency: 92.4,
        responseTime: 1.2, // seconds
        cycleLife: 89.7, // percentage remaining
        gridServices: 94.3
      },
      hydro: {
        currentOutput: 89012,
        dailyPeak: 123456,
        efficiency: 94.2,
        waterLevels: 67.8, // percentage of optimal
        maintenanceUptime: 98.9,
        environmentalCompliance: 96.7
      }
    },
    gridIntegration: {
      renewablePenetration: 45.7, // percentage of grid
      gridStability: 98.2,
      frequencyRegulation: 99.1,
      voltageControl: 97.6,
      demandResponse: 78.9,
      smartGridIntegration: 83.4,
      energyTrading: 67.8,
      carbonIntensity: 234.56, // g CO2/kWh
      gridFlexibility: 89.7,
      interconnectorCapacity: 23456, // MW
      transmissionLosses: 3.2, // percentage
      distributionEfficiency: 94.8
    },
    sustainabilityMetrics: {
      carbonReduction: 78.9, // percentage vs fossil
      lifecycleEmissions: 12.4, // g CO2/kWh
      waterUsage: 0.67, // liters per MWh
      landUse: 23.4, // hectares per MW
      materialRecycling: 89.7, // percentage
      biodiversityImpact: 2.3, // impact score
      communityBenefits: 67.8, // percentage positive
      jobCreation: 234567, // annual new jobs
      localContent: 78.9, // percentage local supply
      circularEconomy: 82.6,
      esgCompliance: 94.3,
      sustainabilityInvestment: 234567890123 // EUR
    },
    marketMetrics: {
      electricityPricing: 45.67, // EUR per MWh average
      carbonCredits: 28.94, // EUR per tonne
      renewableCertificates: 12.34,
      energyTrading: 234567890123, // EUR annual volume
      investmentFlow: 567890123456,
      subsidyReduction: 23.4, // percentage decrease
      gridParity: 89.7, // percentage of markets
      auctionPrices: 34.56, // EUR per MWh
      financingCosts: 2.8, // percentage
      returnOnInvestment: 8.9,
      paybackPeriod: 6.7, // years
      marketVolatility: 12.4 // percentage
    },
    innovationTrends: {
      floatingSolar: 23.4, // adoption percentage
      perovskiteSolar: 8.9,
      offshoreWindPlatforms: 34.7,
      hydrogenProduction: 18.6,
      advancedBatteries: 67.8,
      aiOptimization: 78.9,
      digitalTwins: 45.6,
      blockchainTrading: 29.3,
      quantumForecasting: 6.7,
      verticalWindTurbines: 15.4,
      agrovoltaics: 21.8,
      waveTidal: 12.1
    },
    renewableAlerts: [
      {
        type: 'WARNING',
        category: 'Production',
        message: 'Wind farm cluster experiencing 15% below forecast due to unexpected calm weather patterns',
        facility: 'North Sea Wind Complex',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '05:16',
        recommendations: ['Activate backup storage', 'Adjust grid dispatch', 'Update forecasting models', 'Monitor weather patterns']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'New perovskite solar cells achieve record 31.2% efficiency in field testing',
        facility: 'Solar Research Lab',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:13',
        recommendations: ['Scale pilot deployment', 'Patent protection', 'Manufacturing partnerships', 'Commercial planning']
      },
      {
        type: 'CRITICAL',
        category: 'Grid',
        message: 'Grid frequency deviation detected - renewable output surge exceeding absorption capacity',
        facility: 'Grid Operations Center',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '05:10',
        recommendations: ['Emergency curtailment', 'Storage activation', 'Load balancing', 'Interconnector utilization']
      },
      {
        type: 'INFO',
        category: 'Market',
        message: 'Carbon credit prices surge 23% following new climate policy announcements',
        facility: 'Trading Platform',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:07',
        recommendations: ['Revenue optimization', 'Contract adjustments', 'Portfolio rebalancing', 'Strategic planning']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRenewableData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        energyProduction: {
          ...prev.energyProduction,
          solar: {
            ...prev.energyProduction.solar,
            currentOutput: Math.max(200000, Math.min(300000, prev.energyProduction.solar.currentOutput + (Math.random() - 0.5) * 10000)),
            efficiency: Math.max(85, Math.min(95, prev.energyProduction.solar.efficiency + (Math.random() - 0.5) * 2))
          },
          wind: {
            ...prev.energyProduction.wind,
            currentOutput: Math.max(300000, Math.min(400000, prev.energyProduction.wind.currentOutput + (Math.random() - 0.5) * 15000))
          }
        },
        gridIntegration: {
          ...prev.gridIntegration,
          gridStability: Math.max(96, Math.min(99, prev.gridIntegration.gridStability + (Math.random() - 0.5) * 1))
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
      case 'Integrated Renewables': return 'text-blue-400 bg-blue-400/20';
      case 'Offshore Wind': return 'text-cyan-400 bg-cyan-400/20';
      case 'Energy Storage': return 'text-green-400 bg-green-400/20';
      case 'Wind Technology': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 20) return 'text-green-400';
    if (growth > 10) return 'text-blue-400';
    if (growth > 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTechColor = (tech) => {
    switch (tech) {
      case 'Solar PV': return 'text-yellow-400 bg-yellow-400/20';
      case 'Onshore Wind': return 'text-blue-400 bg-blue-400/20';
      case 'Offshore Wind': return 'text-cyan-400 bg-cyan-400/20';
      case 'Energy Storage': return 'text-green-400 bg-green-400/20';
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
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Renewable Energy Systems Intelligence Center</h1>
              <p className="text-emerald-300">Clean energy production, grid integration & sustainability analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{renewableData.currentTime}</div>
            <div className="text-emerald-300">Renewable Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-emerald-400 mr-2" />
                Renewable Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(renewableData.industryOverview.globalRenewableMarket)}</div>
            <div className="text-emerald-300 text-sm">Solar: {formatCurrency(renewableData.industryOverview.solarMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Capacity
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(renewableData.industryOverview.totalCapacity)} MW</div>
            <div className="text-yellow-300 text-sm">Global Installed</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Generation
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(renewableData.industryOverview.energyGenerated)} MWh</div>
            <div className="text-blue-300 text-sm">Annual Production</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Carbon Offset
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(renewableData.industryOverview.carbonOffset)}</div>
            <div className="text-green-300 text-sm">Tonnes CO₂ Saved</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Grid Integration
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(renewableData.industryOverview.gridIntegration)}</div>
            <div className="text-cyan-300 text-sm">Penetration Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(renewableData.industryOverview.renewableWorkers)}</div>
            <div className="text-purple-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Renewable Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Sun className="w-5 h-5 text-emerald-400 mr-2" />
            Major Renewable Energy Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Capacity</th>
                  <th className="text-center p-3 text-slate-300">Facilities</th>
                  <th className="text-center p-3 text-slate-300">Grid Reliability</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {renewableData.majorRenewableCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-yellow-400">{formatNumber(company.capacity)} MW</td>
                    <td className="p-3 text-center text-blue-400">{company.facilities}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.gridReliability, 95, 98)}`}>
                      {formatPercentage(company.gridReliability)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.sustainabilityScore, 8.5, 9.0)}`}>
                      {company.sustainabilityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Renewable Technologies & Energy Production */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-yellow-400 mr-2" />
              Renewable Technologies Intelligence
            </h3>
            <div className="space-y-4">
              {renewableData.renewableTechnologies.map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-sm ${getTechColor(tech.technology)}`}>{tech.technology}</span>
                      <span className={`text-sm ${getGrowthColor(tech.growth)}`}>
                        +{formatPercentage(tech.growth)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">€{tech.costPerMWh.toFixed(0)}/MWh</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-yellow-400">Capacity: {formatNumber(tech.globalCapacity)} MW</div>
                      <div className="text-blue-400">Generation: {formatNumber(tech.annualGeneration)} MWh</div>
                      <div className="text-purple-400">Facilities: {formatNumber(tech.facilities)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Efficiency: {formatPercentage(tech.efficiency)}</div>
                      <div className="text-cyan-400">Carbon Offset: {formatNumber(tech.carbonOffset)} t CO₂</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Real-Time Energy Production Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(renewableData.energyProduction).map(([source, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{source}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency, 75, 90)}`}>
                      {formatPercentage(data.efficiency)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-yellow-400">Current: {formatNumber(data.currentOutput)} MW</div>
                      {data.dailyPeak && (
                        <div className="text-green-400">Peak: {formatNumber(data.dailyPeak)} MW</div>
                      )}
                      {data.chargeLevel && (
                        <div className="text-blue-400">Charge: {formatPercentage(data.chargeLevel)}</div>
                      )}
                    </div>
                    <div>
                      {data.maintenanceUptime && (
                        <div className="text-purple-400">Uptime: {formatPercentage(data.maintenanceUptime)}</div>
                      )}
                      {data.forecastAccuracy && (
                        <div className="text-cyan-400">Forecast: {formatPercentage(data.forecastAccuracy)}</div>
                      )}
                      {data.responseTime && (
                        <div className="text-pink-400">Response: {data.responseTime}s</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Integration & Sustainability Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              Grid Integration Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(renewableData.gridIntegration.renewablePenetration)}</div>
                <div className="text-blue-300 text-sm">Renewable Penetration</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(renewableData.gridIntegration.gridStability)} stability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(renewableData.gridIntegration.smartGridIntegration)}</div>
                <div className="text-green-300 text-sm">Smart Grid Integration</div>
                <div className="text-gray-400 text-xs mt-1">{renewableData.gridIntegration.carbonIntensity.toFixed(0)} g CO₂/kWh</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Grid Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Frequency Regulation</span>
                  <span className="text-green-400">{formatPercentage(renewableData.gridIntegration.frequencyRegulation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Voltage Control</span>
                  <span className="text-blue-400">{formatPercentage(renewableData.gridIntegration.voltageControl)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Demand Response</span>
                  <span className="text-purple-400">{formatPercentage(renewableData.gridIntegration.demandResponse)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Grid Flexibility</span>
                  <span className="text-cyan-400">{formatPercentage(renewableData.gridIntegration.gridFlexibility)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-orange-400">{formatPercentage(renewableData.gridIntegration.transmissionLosses)}</div>
                <div className="text-slate-300">Transmission Losses</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(renewableData.gridIntegration.distributionEfficiency)}</div>
                <div className="text-slate-300">Distribution Efficiency</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(renewableData.sustainabilityMetrics.carbonReduction)}</div>
                <div className="text-emerald-300 text-sm">Carbon Reduction</div>
                <div className="text-gray-400 text-xs mt-1">vs fossil fuels</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(renewableData.sustainabilityMetrics.materialRecycling)}</div>
                <div className="text-green-300 text-sm">Material Recycling</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(renewableData.sustainabilityMetrics.jobCreation)} jobs/year</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Impact</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Lifecycle Emissions</span>
                  <span className="text-green-400">{renewableData.sustainabilityMetrics.lifecycleEmissions.toFixed(1)} g/kWh</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Usage</span>
                  <span className="text-blue-400">{renewableData.sustainabilityMetrics.waterUsage.toFixed(1)} L/MWh</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Land Use</span>
                  <span className="text-purple-400">{renewableData.sustainabilityMetrics.landUse.toFixed(1)} ha/MW</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Local Content</span>
                  <span className="text-cyan-400">{formatPercentage(renewableData.sustainabilityMetrics.localContent)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(renewableData.sustainabilityMetrics.circularEconomy)}</div>
                <div className="text-slate-300">Circular Economy</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(renewableData.sustainabilityMetrics.esgCompliance)}</div>
                <div className="text-slate-300">ESG Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Metrics & Innovation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Market Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">€{renewableData.marketMetrics.electricityPricing.toFixed(0)}</div>
                <div className="text-orange-300 text-sm">Electricity Price</div>
                <div className="text-gray-400 text-xs mt-1">per MWh average</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">€{renewableData.marketMetrics.carbonCredits.toFixed(0)}</div>
                <div className="text-green-300 text-sm">Carbon Credits</div>
                <div className="text-gray-400 text-xs mt-1">per tonne CO₂</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Market Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Grid Parity</span>
                  <span className="text-green-400">{formatPercentage(renewableData.marketMetrics.gridParity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">ROI</span>
                  <span className="text-blue-400">{renewableData.marketMetrics.returnOnInvestment.toFixed(1)}%</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Payback Period</span>
                  <span className="text-purple-400">{renewableData.marketMetrics.paybackPeriod.toFixed(1)} years</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Financing Cost</span>
                  <span className="text-cyan-400">{renewableData.marketMetrics.financingCosts.toFixed(1)}%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatCurrency(renewableData.marketMetrics.energyTrading)}</div>
                <div className="text-slate-300">Trading Volume</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-yellow-400">{formatPercentage(renewableData.marketMetrics.marketVolatility)}</div>
                <div className="text-slate-300">Market Volatility</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Optimization</span>
                  <span className="text-green-400">{formatPercentage(renewableData.innovationTrends.aiOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Advanced Batteries</span>
                  <span className="text-blue-400">{formatPercentage(renewableData.innovationTrends.advancedBatteries)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Twins</span>
                  <span className="text-purple-400">{formatPercentage(renewableData.innovationTrends.digitalTwins)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Offshore Platforms</span>
                  <span className="text-cyan-400">{formatPercentage(renewableData.innovationTrends.offshoreWindPlatforms)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Blockchain Trading</span>
                  <span className="text-pink-400">{formatPercentage(renewableData.innovationTrends.blockchainTrading)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Floating Solar</span>
                  <span className="text-orange-400">{formatPercentage(renewableData.innovationTrends.floatingSolar)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Agrovoltaics</span>
                  <span className="text-teal-400">{formatPercentage(renewableData.innovationTrends.agrovoltaics)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Hydrogen Production</span>
                  <span className="text-indigo-400">{formatPercentage(renewableData.innovationTrends.hydrogenProduction)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Renewable Energy Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Renewable Energy Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renewableData.renewableAlerts.map((alert, index) => (
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