// Electronics Manufacturing Intelligence Center - Electronics Production, Semiconductor Manufacturing & Technology Analytics
import { useState, useEffect } from 'react';
import { Cpu, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Zap } from 'lucide-react';

export default function ElectronicsManufacturingIntelligenceCenter() {
  const [electronicsData, setElectronicsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalElectronicsMarket: 2345678901234, // EUR annually
      semiconductorMarket: 678901234567,
      pcbMarket: 89012345678,
      totalProduction: 234567890123, // units annually
      activeFabs: 1234,
      electronicsWorkers: 12345678,
      globalTrade: 1234567890123,
      rdInvestment: 123456789012,
      innovationInvestment: 234567890123,
      digitalization: 89.7, // percentage
      automation: 78.9,
      aiIntegration: 67.4,
      yieldRate: 91.2,
      qualityStandard: 99.7
    },
    majorElectronicsCompanies: [
      {
        company: 'Apple',
        category: 'Consumer Electronics',
        revenue: 394580000000, // EUR annual
        production: 234567890, // units
        facilities: 178,
        employees: 164000,
        countries: 25,
        products: ['iPhone', 'iPad', 'Mac', 'Watch'],
        digitalMaturity: 96.8,
        sustainabilityScore: 8.9,
        yieldRate: 94.7,
        innovationScore: 9.6,
        stockPerformance: '+18.4%'
      },
      {
        company: 'Samsung Electronics',
        category: 'Integrated Electronics',
        revenue: 234567890123,
        production: 345678901,
        facilities: 267,
        employees: 267000,
        countries: 74,
        products: ['Smartphones', 'Memory', 'Displays', 'Appliances'],
        digitalMaturity: 94.3,
        sustainabilityScore: 8.7,
        yieldRate: 92.4,
        innovationScore: 9.2,
        stockPerformance: '+14.7%'
      },
      {
        company: 'TSMC',
        category: 'Semiconductor Foundry',
        revenue: 67890123456,
        production: 123456789,
        facilities: 45,
        employees: 73000,
        countries: 9,
        products: ['Advanced nodes', '5nm', '3nm', 'Packaging'],
        digitalMaturity: 98.1,
        sustainabilityScore: 8.4,
        yieldRate: 96.8,
        innovationScore: 9.8,
        stockPerformance: '+22.3%'
      },
      {
        company: 'Intel',
        category: 'Semiconductors',
        revenue: 63012345678,
        production: 89012345,
        facilities: 89,
        employees: 121000,
        countries: 17,
        products: ['CPUs', 'GPUs', 'FPGAs', 'Memory'],
        digitalMaturity: 91.7,
        sustainabilityScore: 8.6,
        yieldRate: 89.3,
        innovationScore: 9.1,
        stockPerformance: '+11.8%'
      }
    ],
    productionCategories: [
      {
        category: 'Smartphones',
        production: 1234567890, // units
        marketValue: 456789012345, // EUR
        growth: 5.8, // annual percentage
        factories: 345,
        mainComponents: ['Processor', 'Display', 'Camera', 'Battery'],
        yieldRate: 92.4,
        qualityIndex: 94.7,
        innovationScore: 8.9
      },
      {
        category: 'Semiconductors',
        production: 567890123,
        marketValue: 678901234567,
        growth: 8.2,
        factories: 156,
        mainComponents: ['Wafers', 'Dies', 'Packaging', 'Testing'],
        yieldRate: 89.6,
        qualityIndex: 98.1,
        innovationScore: 9.4
      },
      {
        category: 'PCBs',
        production: 23456789012,
        marketValue: 89012345678,
        growth: 4.3,
        factories: 567,
        mainComponents: ['Substrate', 'Copper traces', 'Components', 'Solder'],
        yieldRate: 95.7,
        qualityIndex: 91.8,
        innovationScore: 7.6
      },
      {
        category: 'Displays',
        production: 345678901,
        marketValue: 123456789012,
        growth: 6.7,
        factories: 234,
        mainComponents: ['LCD', 'OLED', 'Backlight', 'Touch layer'],
        yieldRate: 87.2,
        qualityIndex: 93.4,
        innovationScore: 8.7
      }
    ],
    manufacturingProcesses: {
      waferFabrication: {
        capacity: 234567, // wafers per month
        efficiency: 94.2,
        yieldRate: 89.7,
        nodeSize: 5, // nanometers
        defectRate: 0.03, // defects per cm²
        automationLevel: 96.8
      },
      assembly: {
        capacity: 123456789, // units per month
        efficiency: 91.8,
        cycleTime: 45.6, // seconds
        defectRate: 156, // PPM
        automationLevel: 84.7,
        throughput: 87.9
      },
      testing: {
        capacity: 98765432,
        efficiency: 96.3,
        testCoverage: 99.8,
        escapeRate: 12, // PPM
        throughputTime: 23.4, // seconds
        accuracyRate: 99.9
      },
      packaging: {
        capacity: 87654321,
        efficiency: 93.7,
        defectRate: 89, // PPM
        packagingSpeed: 567, // units per minute
        qualityControl: 98.4,
        sustainability: 78.9
      }
    },
    technologyNodes: [
      {
        node: '3nm',
        production: 12345678, // wafers
        companies: ['TSMC', 'Samsung'],
        applications: ['Mobile SoCs', 'AI chips'],
        yieldRate: 78.4,
        powerEfficiency: 35.2, // % improvement
        performanceGain: 15.6,
        costPremium: 2.3
      },
      {
        node: '5nm',
        production: 23456789,
        companies: ['TSMC', 'Samsung'],
        applications: ['Smartphones', 'Laptops', 'Servers'],
        yieldRate: 89.7,
        powerEfficiency: 30.1,
        performanceGain: 20.4,
        costPremium: 1.8
      },
      {
        node: '7nm',
        production: 34567890,
        companies: ['TSMC', 'GlobalFoundries'],
        applications: ['CPUs', 'GPUs', 'Automotive'],
        yieldRate: 94.2,
        powerEfficiency: 25.3,
        performanceGain: 18.7,
        costPremium: 1.4
      },
      {
        node: '14nm',
        production: 45678901,
        companies: ['Intel', 'GlobalFoundries'],
        applications: ['Consumer electronics', 'IoT'],
        yieldRate: 96.8,
        powerEfficiency: 20.1,
        performanceGain: 12.9,
        costPremium: 1.0
      }
    ],
    qualityMetrics: {
      defectRate: 0.023, // percentage
      yieldRate: 91.7,
      firstPassYield: 94.3,
      escapeRate: 15.7, // PPM
      customerReturns: 0.047,
      qualityScore: 98.2,
      reliabilityIndex: 99.1,
      testCoverage: 99.7,
      processCapability: 1.67, // Cpk
      statisticalControl: 96.8,
      continuousImprovement: 87.4,
      qualityCertification: 99.2
    },
    supplyChainMetrics: {
      componentSuppliers: 2345,
      onTimeDelivery: 89.4, // percentage
      qualityCompliance: 94.7,
      leadTime: 45.3, // days
      inventoryTurnover: 12.8,
      supplierDiversity: 34.6,
      riskManagement: 86.2,
      costOptimization: 82.9,
      digitalIntegration: 91.7,
      sustainability: 76.4,
      traceability: 88.9,
      flexibilityIndex: 79.3
    },
    sustainabilityMetrics: {
      energyEfficiency: 78.6, // percentage improvement
      waterConservation: 67.8,
      wasteReduction: 89.3,
      recyclableContent: 73.2,
      carbonFootprint: 234567, // tonnes CO2
      renewableEnergy: 45.7,
      circularDesign: 56.9,
      batteryRecycling: 67.4,
      greenManufacturing: 82.1,
      sustainabilityScore: 7.8,
      environmentalCompliance: 98.6,
      lifeAssessment: 89.7
    },
    innovationTrends: {
      artificialIntelligence: 78.9, // adoption percentage
      quantumComputing: 12.4,
      neuromorphicChips: 8.7,
      flexibleElectronics: 23.6,
      biodegradableCircuits: 5.9,
      augmentedReality: 34.7,
      iotIntegration: 67.2,
      edgeComputing: 56.8,
      fivegTechnology: 89.4,
      autonomousVehicles: 45.3,
      wearableTech: 72.1,
      smartHomeDevices: 83.6
    },
    electronicsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Production',
        message: 'Fab contamination detected in clean room 7 - immediate shutdown protocol activated',
        facility: 'TSMC Taiwan',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '05:01',
        recommendations: ['Emergency decontamination', 'Process audit', 'Equipment inspection', 'Production rescheduling']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: '2nm process technology achieves 95% yield milestone in pilot production',
        facility: 'Samsung Austin',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:58',
        recommendations: ['Scale pilot program', 'Customer demonstrations', 'Production planning', 'Market positioning']
      },
      {
        type: 'WARNING',
        category: 'Supply Chain',
        message: 'Critical semiconductor shortage affects 23% of production lines globally',
        facility: 'Global Supply Chain',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '04:55',
        recommendations: ['Alternative sourcing', 'Inventory rebalancing', 'Customer communication', 'Production prioritization']
      },
      {
        type: 'INFO',
        category: 'Market Trend',
        message: 'AI chip demand surges 67% - specialized production capacity expansion needed',
        facility: 'Market Intelligence',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '04:52',
        recommendations: ['Capacity planning', 'Technology roadmap', 'Investment analysis', 'Partnership opportunities']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setElectronicsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        manufacturingProcesses: {
          ...prev.manufacturingProcesses,
          waferFabrication: {
            ...prev.manufacturingProcesses.waferFabrication,
            efficiency: Math.max(92, Math.min(96, prev.manufacturingProcesses.waferFabrication.efficiency + (Math.random() - 0.5) * 1)),
            yieldRate: Math.max(87, Math.min(92, prev.manufacturingProcesses.waferFabrication.yieldRate + (Math.random() - 0.5) * 0.5))
          }
        },
        qualityMetrics: {
          ...prev.qualityMetrics,
          yieldRate: Math.max(89, Math.min(94, prev.qualityMetrics.yieldRate + (Math.random() - 0.5) * 0.5))
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
      case 'Consumer Electronics': return 'text-blue-400 bg-blue-400/20';
      case 'Integrated Electronics': return 'text-purple-400 bg-purple-400/20';
      case 'Semiconductor Foundry': return 'text-green-400 bg-green-400/20';
      case 'Semiconductors': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getGrowthColor = (growth) => {
    if (growth > 6) return 'text-green-400';
    if (growth > 3) return 'text-blue-400';
    if (growth > 0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getNodeColor = (node) => {
    const nodeNum = parseInt(node.replace('nm', ''));
    if (nodeNum <= 3) return 'text-green-400 bg-green-400/20';
    if (nodeNum <= 7) return 'text-blue-400 bg-blue-400/20';
    if (nodeNum <= 14) return 'text-purple-400 bg-purple-400/20';
    return 'text-gray-400 bg-gray-400/20';
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Electronics Manufacturing Intelligence Center</h1>
              <p className="text-blue-300">Electronics production, semiconductor manufacturing & technology analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{electronicsData.currentTime}</div>
            <div className="text-blue-300">Electronics Command</div>
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
                Electronics Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(electronicsData.industryOverview.globalElectronicsMarket)}</div>
            <div className="text-blue-300 text-sm">Semiconductor: {formatCurrency(electronicsData.industryOverview.semiconductorMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Production
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(electronicsData.industryOverview.totalProduction)}</div>
            <div className="text-green-300 text-sm">Units Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-purple-400 mr-2" />
                Active Fabs
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(electronicsData.industryOverview.activeFabs)}</div>
            <div className="text-purple-300 text-sm">Manufacturing Facilities</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Yield Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(electronicsData.industryOverview.yieldRate)}</div>
            <div className="text-cyan-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-orange-400 mr-2" />
                AI Integration
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(electronicsData.industryOverview.aiIntegration)}</div>
            <div className="text-orange-300 text-sm">Adoption Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-yellow-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(electronicsData.industryOverview.electronicsWorkers)}</div>
            <div className="text-yellow-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Electronics Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Cpu className="w-5 h-5 text-blue-400 mr-2" />
            Major Electronics Companies Intelligence
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
                  <th className="text-center p-3 text-slate-300">Yield Rate</th>
                  <th className="text-center p-3 text-slate-300">Innovation</th>
                </tr>
              </thead>
              <tbody>
                {electronicsData.majorElectronicsCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-blue-400">{formatNumber(company.production)} u</td>
                    <td className="p-3 text-center text-orange-400">{company.facilities}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.yieldRate, 90, 95)}`}>
                      {formatPercentage(company.yieldRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.innovationScore, 8.5, 9.5)}`}>
                      {company.innovationScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Production Categories & Manufacturing Processes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Production Categories Intelligence
            </h3>
            <div className="space-y-4">
              {electronicsData.productionCategories.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{category.category}</span>
                      <span className={`text-sm ${getGrowthColor(category.growth)}`}>
                        +{formatPercentage(category.growth)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(category.marketValue)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Production: {formatNumber(category.production)} u</div>
                      <div className="text-purple-400">Factories: {formatNumber(category.factories)}</div>
                      <div className="text-orange-400">Yield: {formatPercentage(category.yieldRate)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Quality: {formatPercentage(category.qualityIndex)}</div>
                      <div className="text-cyan-400">Innovation: {category.innovationScore.toFixed(1)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {category.mainComponents.map((component, cIndex) => (
                      <span key={cIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Manufacturing Processes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(electronicsData.manufacturingProcesses).map(([process, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{process.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency, 90, 95)}`}>
                      {formatPercentage(data.efficiency)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      {data.capacity && (
                        <div className="text-blue-400">Capacity: {formatNumber(data.capacity)}</div>
                      )}
                      {data.yieldRate && (
                        <div className="text-green-400">Yield: {formatPercentage(data.yieldRate)}</div>
                      )}
                      {data.cycleTime && (
                        <div className="text-purple-400">Cycle: {data.cycleTime}s</div>
                      )}
                    </div>
                    <div>
                      {data.defectRate && (
                        <div className="text-red-400">Defects: {typeof data.defectRate === 'number' && data.defectRate < 1 ? data.defectRate.toFixed(3) + '/cm²' : formatNumber(data.defectRate) + 'PPM'}</div>
                      )}
                      {data.automationLevel && (
                        <div className="text-cyan-400">Auto: {formatPercentage(data.automationLevel)}</div>
                      )}
                      {data.throughput && (
                        <div className="text-orange-400">Throughput: {formatPercentage(data.throughput)}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Nodes & Quality Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-400 mr-2" />
              Technology Nodes Intelligence
            </h3>
            <div className="space-y-3">
              {electronicsData.technologyNodes.map((node, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-sm ${getNodeColor(node.node)}`}>{node.node}</span>
                      <span className="text-blue-400 text-sm">{formatNumber(node.production)} wafers</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(node.yieldRate, 80, 90)}`}>
                      {formatPercentage(node.yieldRate)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-green-400">Power: +{formatPercentage(node.powerEfficiency)}</div>
                      <div className="text-cyan-400">Performance: +{formatPercentage(node.performanceGain)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Cost: {node.costPremium.toFixed(1)}x</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {node.companies.map((company, cIndex) => (
                      <span key={cIndex} className="px-2 py-1 bg-blue-600/50 text-blue-300 rounded text-xs">
                        {company}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {node.applications.map((app, aIndex) => (
                      <span key={aIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Quality Metrics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(electronicsData.qualityMetrics.yieldRate)}</div>
                <div className="text-green-300 text-sm">Yield Rate</div>
                <div className="text-gray-400 text-xs mt-1">First Pass: {formatPercentage(electronicsData.qualityMetrics.firstPassYield)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(electronicsData.qualityMetrics.qualityScore)}</div>
                <div className="text-blue-300 text-sm">Quality Score</div>
                <div className="text-gray-400 text-xs mt-1">Reliability: {formatPercentage(electronicsData.qualityMetrics.reliabilityIndex)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Quality Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Test Coverage</span>
                  <span className="text-green-400">{formatPercentage(electronicsData.qualityMetrics.testCoverage)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Escape Rate</span>
                  <span className="text-red-400">{electronicsData.qualityMetrics.escapeRate.toFixed(1)} PPM</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Process Capability</span>
                  <span className="text-purple-400">Cpk {electronicsData.qualityMetrics.processCapability.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Statistical Control</span>
                  <span className="text-cyan-400">{formatPercentage(electronicsData.qualityMetrics.statisticalControl)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-red-400">{formatPercentage(electronicsData.qualityMetrics.defectRate)}</div>
                <div className="text-slate-300">Defect Rate</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(electronicsData.qualityMetrics.qualityCertification)}</div>
                <div className="text-slate-300">Quality Certification</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability & Innovation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(electronicsData.sustainabilityMetrics.energyEfficiency)}</div>
                <div className="text-emerald-300 text-sm">Energy Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">Improvement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(electronicsData.sustainabilityMetrics.renewableEnergy)}</div>
                <div className="text-green-300 text-sm">Renewable Energy</div>
                <div className="text-gray-400 text-xs mt-1">Carbon: {formatNumber(electronicsData.sustainabilityMetrics.carbonFootprint)} t CO₂</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Reduction</span>
                  <span className="text-green-400">{formatPercentage(electronicsData.sustainabilityMetrics.wasteReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Recyclable Content</span>
                  <span className="text-blue-400">{formatPercentage(electronicsData.sustainabilityMetrics.recyclableContent)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Battery Recycling</span>
                  <span className="text-purple-400">{formatPercentage(electronicsData.sustainabilityMetrics.batteryRecycling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green Manufacturing</span>
                  <span className="text-cyan-400">{formatPercentage(electronicsData.sustainabilityMetrics.greenManufacturing)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(electronicsData.sustainabilityMetrics.circularDesign)}</div>
                <div className="text-slate-300">Circular Design</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{electronicsData.sustainabilityMetrics.sustainabilityScore.toFixed(1)}</div>
                <div className="text-slate-300">Sustainability Score</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">5G Technology</span>
                  <span className="text-green-400">{formatPercentage(electronicsData.innovationTrends.fivegTechnology)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Home</span>
                  <span className="text-blue-400">{formatPercentage(electronicsData.innovationTrends.smartHomeDevices)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Artificial Intelligence</span>
                  <span className="text-purple-400">{formatPercentage(electronicsData.innovationTrends.artificialIntelligence)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Wearable Tech</span>
                  <span className="text-cyan-400">{formatPercentage(electronicsData.innovationTrends.wearableTech)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">IoT Integration</span>
                  <span className="text-pink-400">{formatPercentage(electronicsData.innovationTrends.iotIntegration)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Edge Computing</span>
                  <span className="text-orange-400">{formatPercentage(electronicsData.innovationTrends.edgeComputing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Autonomous Vehicles</span>
                  <span className="text-teal-400">{formatPercentage(electronicsData.innovationTrends.autonomousVehicles)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Augmented Reality</span>
                  <span className="text-indigo-400">{formatPercentage(electronicsData.innovationTrends.augmentedReality)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Electronics Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Electronics Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {electronicsData.electronicsAlerts.map((alert, index) => (
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