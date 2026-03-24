// Environmental & Sustainability Intelligence Center - ESG, Carbon Footprint & Green Operations Analytics
import { useState, useEffect } from 'react';
import { Leaf, Globe, Recycle, Wind, Sun, Droplets, TrendingUp, TrendingDown, TreePine, Factory, BarChart3, PieChart } from 'lucide-react';

export default function EnvironmentalSustainabilityIntelligenceCenter() {
  const [envData, setEnvData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    sustainabilityOverview: {
      overallEsgScore: 87.4,
      carbonNeutrality: 67.8, // percentage progress
      renewableEnergyUsage: 42.3,
      wasteReductionTarget: 78.9,
      waterConservationTarget: 83.6,
      sustainabilityRating: 'A-',
      carbonFootprint: 15847, // tons CO2e annually
      carbonReduction: 23.7, // percentage reduction YoY
      greenCertifications: 12,
      sustainabilityInvestment: 2847000,
      esgCompliance: 94.2,
      sdgAlignment: 89.7 // UN Sustainable Development Goals
    },
    carbonFootprint: {
      totalEmissions: 15847, // tons CO2e
      scope1Emissions: 4567, // direct emissions
      scope2Emissions: 6789, // electricity indirect
      scope3Emissions: 4491, // other indirect
      emissionSources: [
        { source: 'Electricity', emissions: 6789, percentage: 42.8, trend: 'decreasing' },
        { source: 'Transportation', emissions: 3456, percentage: 21.8, trend: 'stable' },
        { source: 'Manufacturing', emissions: 2847, percentage: 18.0, trend: 'decreasing' },
        { source: 'Heating/Cooling', emissions: 1710, percentage: 10.8, trend: 'decreasing' },
        { source: 'Business Travel', emissions: 789, percentage: 5.0, trend: 'increasing' },
        { source: 'Waste', emissions: 256, percentage: 1.6, trend: 'decreasing' }
      ],
      offsetPrograms: {
        totalOffsets: 3456, // tons CO2e
        forestReforestation: 1890,
        renewableEnergyProjects: 1234,
        carbonCapture: 332,
        offsetCost: 156780,
        offsetEffectiveness: 92.4
      },
      targetReductions: {
        target2025: 25.0, // percentage reduction
        target2030: 50.0,
        target2050: 100.0, // net zero
        currentProgress: 23.7,
        onTrack: true
      }
    },
    energyManagement: {
      totalEnergyConsumption: 45678, // MWh annually
      renewableEnergy: 19345, // MWh
      fossilFuels: 26333, // MWh
      renewablePercentage: 42.3,
      energyEfficiencyGains: 15.7, // percentage improvement
      energySources: [
        { source: 'Solar', consumption: 8945, percentage: 19.6, cost: 89450, reliability: 94.7 },
        { source: 'Wind', consumption: 6789, percentage: 14.9, cost: 67890, reliability: 89.2 },
        { source: 'Hydro', consumption: 3611, percentage: 7.9, cost: 36110, reliability: 97.8 },
        { source: 'Natural Gas', consumption: 15678, percentage: 34.3, cost: 234567, reliability: 99.1 },
        { source: 'Coal', consumption: 8945, percentage: 19.6, cost: 134175, reliability: 96.4 },
        { source: 'Nuclear', consumption: 1710, percentage: 3.7, cost: 25650, reliability: 99.8 }
      ],
      energyEfficiencyProjects: [
        { project: 'LED Lighting Upgrade', savings: 1234, investment: 89000, payback: 2.1, status: 'Completed' },
        { project: 'HVAC Optimization', savings: 2456, investment: 156000, payback: 1.8, status: 'In Progress' },
        { project: 'Smart Building Systems', savings: 1890, investment: 234000, payback: 3.2, status: 'Planned' },
        { project: 'Equipment Modernization', savings: 3456, investment: 445000, payback: 2.9, status: 'In Progress' }
      ]
    },
    wasteManagement: {
      totalWaste: 8947, // tons annually
      wasteRecycled: 6234, // tons
      wasteReused: 1456, // tons
      wasteLandfill: 1257, // tons
      recyclingRate: 69.7,
      wasteReduction: 23.4, // percentage reduction YoY
      wasteStreams: [
        { type: 'Paper & Cardboard', amount: 2847, recycled: 2675, rate: 94.0, cost: 14235 },
        { type: 'Plastics', amount: 1890, recycled: 1134, rate: 60.0, cost: 18900 },
        { type: 'Metals', amount: 1456, recycled: 1397, rate: 95.9, cost: 7280 },
        { type: 'Electronics', amount: 789, recycled: 710, rate: 90.0, cost: 15780 },
        { type: 'Organic Waste', amount: 1567, recycled: 470, rate: 30.0, cost: 9402 },
        { type: 'Hazardous Materials', amount: 398, recycled: 358, rate: 90.0, cost: 11940 }
      ],
      circularEconomyInitiatives: {
        materialRecovery: 78.9,
        productLifeExtension: 67.4,
        wasteToEnergyPrograms: 45.8,
        supplierCircularityScore: 72.3
      }
    },
    waterManagement: {
      totalWaterUsage: 234567, // cubic meters annually
      waterConservation: 89456, // cubic meters saved
      waterRecycling: 45678, // cubic meters recycled
      waterEfficiency: 83.6, // percentage
      waterSources: [
        { source: 'Municipal Supply', usage: 156789, percentage: 66.8, cost: 156789, quality: 'High' },
        { source: 'Groundwater', usage: 45678, percentage: 19.5, cost: 22839, quality: 'Medium' },
        { source: 'Rainwater Harvesting', usage: 23456, percentage: 10.0, cost: 11728, quality: 'Good' },
        { source: 'Recycled Water', usage: 8644, percentage: 3.7, cost: 17288, quality: 'Treated' }
      ],
      waterConservationProjects: [
        { project: 'Rainwater Collection', savings: 23456, investment: 89000, status: 'Active' },
        { project: 'Water Recycling Plant', savings: 45678, investment: 234000, status: 'Planned' },
        { project: 'Leak Detection Systems', savings: 12345, investment: 45000, status: 'Completed' },
        { project: 'Low-Flow Fixtures', savings: 8234, investment: 23000, status: 'Completed' }
      ],
      waterQualityMonitoring: {
        testingFrequency: 'Daily',
        complianceRate: 99.8,
        qualityScore: 96.4,
        contaminantLevels: 'Within Standards'
      }
    },
    biodiversityConservation: {
      protectedArea: 567, // hectares
      nativeSpeciesSupported: 145,
      habitatRestorationProjects: 8,
      biodiversityIndex: 78.9,
      treesPlanted: 12847,
      carbonSequestered: 2456, // tons CO2e
      wildlifeCorridors: 4,
      pollinatorSupport: 89.7,
      conservationPartnerships: 12,
      conservationProjects: [
        { project: 'Forest Restoration', area: 234, species: 67, investment: 156000, status: 'Active' },
        { project: 'Wetland Protection', area: 123, species: 34, investment: 89000, status: 'Completed' },
        { project: 'Urban Green Spaces', area: 89, species: 23, investment: 45000, status: 'Planned' },
        { project: 'Pollinator Gardens', area: 121, species: 21, investment: 23000, status: 'Active' }
      ]
    },
    greenSupplyChain: {
      sustainableSuppliers: 78.9, // percentage
      supplierEsgScore: 82.4,
      localSourcing: 67.8, // percentage
      sustainableMaterials: 89.7, // percentage
      transportationEfficiency: 91.2,
      supplierAssessments: 234,
      supplierCertifications: 156,
      greenProcurementSpend: 4567890,
      supplierCategories: [
        { category: 'Raw Materials', suppliers: 89, esgScore: 85.6, localPercent: 45.7, certified: 67 },
        { category: 'Manufacturing', suppliers: 67, esgScore: 78.9, localPercent: 78.9, certified: 45 },
        { category: 'Logistics', suppliers: 34, esgScore: 82.4, localPercent: 91.2, certified: 23 },
        { category: 'Services', suppliers: 44, esgScore: 87.3, localPercent: 89.4, certified: 21 }
      ]
    },
    sustainabilityAlerts: [
      {
        type: 'WARNING',
        category: 'Carbon Emissions',
        message: 'Business travel emissions increased 15% this quarter - review travel policies',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Sustainability Team',
        timestamp: '01:35',
        recommendations: ['Implement virtual meeting policies', 'Carbon offset travel', 'Review essential travel only']
      },
      {
        type: 'SUCCESS',
        category: 'Renewable Energy',
        message: 'Solar panel installation achieved 19.6% of total energy consumption (+4.2% vs target)',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Energy Management Team',
        timestamp: '01:30',
        recommendations: ['Expand solar capacity', 'Monitor performance', 'Share success story']
      },
      {
        type: 'CRITICAL',
        category: 'Waste Management',
        message: 'Plastic recycling rate at 60.0% - below 70% target, impacting sustainability goals',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Waste Management Team',
        timestamp: '01:25',
        recommendations: ['Review plastic sourcing', 'Improve recycling infrastructure', 'Reduce plastic usage']
      },
      {
        type: 'INFO',
        category: 'Water Conservation',
        message: 'Rainwater harvesting system operational - 23,456 cubic meters collected this year',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Water Management Team',
        timestamp: '01:20',
        recommendations: ['Maintain system performance', 'Expand collection capacity', 'Monitor water quality']
      }
    ],
    esgReporting: {
      reportingStandards: ['GRI', 'SASB', 'TCFD', 'CDP'],
      reportingFrequency: 'Annual',
      dataQuality: 94.7,
      thirdPartyVerification: true,
      stakeholderEngagement: 87.9,
      materialityAssessment: 92.4,
      sustainabilityTargets: [
        { target: 'Carbon Neutral by 2030', progress: 67.8, status: 'On Track' },
        { target: '100% Renewable Energy by 2025', progress: 42.3, status: 'Behind' },
        { target: '75% Waste Diversion by 2024', progress: 69.7, status: 'On Track' },
        { target: '25% Water Reduction by 2025', progress: 83.6, status: 'Ahead' }
      ]
    },
    climateRiskAssessment: {
      physicalRisks: {
        floodRisk: 'Medium',
        droughtRisk: 'Low',
        extremeWeatherRisk: 'High',
        seaLevelRiseRisk: 'Low'
      },
      transitionRisks: {
        carbonPricingRisk: 'Medium',
        regulatoryRisk: 'High',
        technologyRisk: 'Medium',
        marketRisk: 'Medium'
      },
      riskMitigationStrategies: [
        { risk: 'Extreme Weather', mitigation: 'Infrastructure Hardening', investment: 234000, timeline: '2 years' },
        { risk: 'Carbon Pricing', mitigation: 'Carbon Reduction Program', investment: 567000, timeline: '3 years' },
        { risk: 'Regulatory Changes', mitigation: 'Compliance Program', investment: 123000, timeline: '1 year' },
        { risk: 'Technology Obsolescence', mitigation: 'R&D Investment', investment: 445000, timeline: '5 years' }
      ],
      adaptationMeasures: {
        infrastructureResilience: 78.9,
        businessContinuityPlanning: 92.4,
        stakeholderEngagement: 87.6,
        scenarioPlanning: 84.3
      }
    },
    greenInnovation: {
      sustainabilityR_D: 1234567, // investment
      greenPatents: 23,
      sustainableProductDevelopment: 89.7,
      circularDesignPrinciples: 82.4,
      lifecycleAssessments: 45,
      greenTechPartnerships: 12,
      innovationProjects: [
        { project: 'Carbon Capture Technology', investment: 445000, stage: 'Pilot', potential: 'High' },
        { project: 'Biodegradable Packaging', investment: 234000, stage: 'Development', potential: 'Medium' },
        { project: 'Renewable Energy Storage', investment: 567000, stage: 'Research', potential: 'High' },
        { project: 'Waste-to-Energy Systems', investment: 123000, stage: 'Testing', potential: 'Medium' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnvData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        sustainabilityOverview: {
          ...prev.sustainabilityOverview,
          overallEsgScore: Math.max(80, Math.min(95, prev.sustainabilityOverview.overallEsgScore + (Math.random() - 0.5) * 1)),
          renewableEnergyUsage: Math.max(35, Math.min(50, prev.sustainabilityOverview.renewableEnergyUsage + (Math.random() - 0.5) * 2)),
          carbonReduction: Math.max(20, Math.min(30, prev.sustainabilityOverview.carbonReduction + (Math.random() - 0.5) * 1))
        },
        wasteManagement: {
          ...prev.wasteManagement,
          recyclingRate: Math.max(65, Math.min(75, prev.wasteManagement.recyclingRate + (Math.random() - 0.5) * 1)),
          wasteReduction: Math.max(20, Math.min(30, prev.wasteManagement.wasteReduction + (Math.random() - 0.5) * 1))
        }
      }));
    }, 14000);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'text-green-400 bg-green-400/20';
      case 'Ahead': return 'text-blue-400 bg-blue-400/20';
      case 'Behind': return 'text-orange-400 bg-orange-400/20';
      case 'Active': return 'text-green-400 bg-green-400/20';
      case 'Completed': return 'text-blue-400 bg-blue-400/20';
      case 'Planned': return 'text-purple-400 bg-purple-400/20';
      case 'In Progress': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'High': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 75, excellent = 85) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
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
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
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

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-emerald-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Environmental & Sustainability Intelligence Center</h1>
              <p className="text-green-300">ESG metrics, carbon footprint, renewable energy, waste management & sustainability analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{envData.currentTime}</div>
            <div className="text-green-300">Sustainability Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Sustainability Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-green-400 mr-2" />
                ESG Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{envData.sustainabilityOverview.overallEsgScore.toFixed(1)}</div>
            <div className="text-green-300 text-sm">Rating: {envData.sustainabilityOverview.sustainabilityRating}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TreePine className="w-5 h-5 text-blue-400 mr-2" />
                Carbon Footprint
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(envData.sustainabilityOverview.carbonFootprint)}T</div>
            <div className="text-blue-300 text-sm">Reduction: -{formatPercentage(envData.sustainabilityOverview.carbonReduction)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Sun className="w-5 h-5 text-yellow-400 mr-2" />
                Renewable Energy
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(envData.sustainabilityOverview.renewableEnergyUsage)}</div>
            <div className="text-yellow-300 text-sm">Target: 100% by 2025</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Recycle className="w-5 h-5 text-purple-400 mr-2" />
                Waste Recycled
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(envData.wasteManagement.recyclingRate)}</div>
            <div className="text-purple-300 text-sm">Target: 75% by 2024</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Droplets className="w-5 h-5 text-cyan-400 mr-2" />
                Water Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(envData.waterManagement.waterEfficiency)}</div>
            <div className="text-cyan-300 text-sm">Saved: {formatNumber(envData.waterManagement.waterConservation)}m³</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wind className="w-5 h-5 text-emerald-400 mr-2" />
                Carbon Neutral
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(envData.sustainabilityOverview.carbonNeutrality)}</div>
            <div className="text-emerald-300 text-sm">Target: 2030</div>
          </div>
        </div>

        {/* Carbon Footprint Analysis */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TreePine className="w-5 h-5 text-blue-400 mr-2" />
            Carbon Footprint Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{formatNumber(envData.carbonFootprint.scope1Emissions)}T</div>
              <div className="text-red-300 text-sm">Scope 1 (Direct)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{formatNumber(envData.carbonFootprint.scope2Emissions)}T</div>
              <div className="text-orange-300 text-sm">Scope 2 (Electricity)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{formatNumber(envData.carbonFootprint.scope3Emissions)}T</div>
              <div className="text-yellow-300 text-sm">Scope 3 (Indirect)</div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Emission Sources</h4>
              <div className="space-y-2">
                {envData.carbonFootprint.emissionSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300 text-sm">{source.source}</span>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-blue-400">{formatNumber(source.emissions)}T</span>
                      <span className="text-purple-400">{formatPercentage(source.percentage)}</span>
                      {getTrendIcon(source.trend)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Carbon Offset Programs</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-green-400 font-medium">{formatNumber(envData.carbonFootprint.offsetPrograms.totalOffsets)}T</div>
                  <div className="text-slate-400 text-xs">Total Offsets</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-3">
                  <div className="text-cyan-400 font-medium">{formatPercentage(envData.carbonFootprint.offsetPrograms.offsetEffectiveness)}</div>
                  <div className="text-slate-400 text-xs">Effectiveness</div>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-300">Forest Reforestation:</span>
                  <span className="text-green-400">{formatNumber(envData.carbonFootprint.offsetPrograms.forestReforestation)}T</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Renewable Energy:</span>
                  <span className="text-blue-400">{formatNumber(envData.carbonFootprint.offsetPrograms.renewableEnergyProjects)}T</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Carbon Capture:</span>
                  <span className="text-purple-400">{formatNumber(envData.carbonFootprint.offsetPrograms.carbonCapture)}T</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Energy & Waste Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Sun className="w-5 h-5 text-yellow-400 mr-2" />
              Energy Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{formatPercentage(envData.energyManagement.renewablePercentage)}</div>
                <div className="text-yellow-300 text-sm">Renewable Energy</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(envData.energyManagement.renewableEnergy)} MWh</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(envData.energyManagement.energyEfficiencyGains)}</div>
                <div className="text-green-300 text-sm">Efficiency Gains</div>
                <div className="text-gray-400 text-xs mt-1">vs last year</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Energy Sources</h4>
              {envData.energyManagement.energySources.slice(0, 4).map((source, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{source.source}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatCurrency(source.cost)}</span>
                      <span className="text-purple-400 text-sm">{formatPercentage(source.percentage)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">{formatNumber(source.consumption)} MWh</span>
                    <span className={`${getPerformanceColor(source.reliability, 90, 95)}`}>
                      Reliability: {formatPercentage(source.reliability)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Recycle className="w-5 h-5 text-purple-400 mr-2" />
              Waste Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(envData.wasteManagement.recyclingRate)}</div>
                <div className="text-purple-300 text-sm">Recycling Rate</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(envData.wasteManagement.wasteRecycled)}T recycled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(envData.wasteManagement.wasteReduction)}</div>
                <div className="text-green-300 text-sm">Waste Reduction</div>
                <div className="text-gray-400 text-xs mt-1">vs last year</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Waste Streams</h4>
              {envData.wasteManagement.wasteStreams.slice(0, 4).map((stream, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{stream.type}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatNumber(stream.amount)}T</span>
                    <span className={`${getPerformanceColor(stream.rate, 70, 85)}`}>
                      {formatPercentage(stream.rate)}
                    </span>
                    <span className="text-orange-400">{formatCurrency(stream.cost)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatPercentage(envData.wasteManagement.circularEconomyInitiatives.materialRecovery)}</div>
                <div className="text-slate-400">Material Recovery</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{formatPercentage(envData.wasteManagement.circularEconomyInitiatives.supplierCircularityScore)}</div>
                <div className="text-slate-400">Supplier Circularity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 text-yellow-400 mr-2" />
            Sustainability Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {envData.sustainabilityAlerts.map((alert, index) => (
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

        {/* ESG Reporting & Climate Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              ESG Reporting & Targets
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{formatPercentage(envData.esgReporting.dataQuality)}</div>
                <div className="text-blue-300 text-sm">Data Quality</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(envData.esgReporting.stakeholderEngagement)}</div>
                <div className="text-green-300 text-sm">Stakeholder Engagement</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Sustainability Targets</h4>
              {envData.esgReporting.sustainabilityTargets.map((target, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{target.target}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(target.status)}`}>
                      {target.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Progress:</span>
                    <span className={`font-medium ${getPerformanceColor(target.progress, 50, 80)}`}>
                      {formatPercentage(target.progress)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Reporting Standards:</span>
                <span className="text-cyan-400">{envData.esgReporting.reportingStandards.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Third-party Verified:</span>
                <span className="text-green-400">{envData.esgReporting.thirdPartyVerification ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Factory className="w-5 h-5 text-orange-400 mr-2" />
              Climate Risk Assessment
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Physical Risks</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(envData.climateRiskAssessment.physicalRisks).map(([risk, level], index) => (
                    <div key={index} className="flex justify-between bg-slate-700/30 rounded p-2">
                      <span className="text-slate-300 capitalize">{risk.replace('Risk', '')}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(level)}`}>
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Transition Risks</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(envData.climateRiskAssessment.transitionRisks).map(([risk, level], index) => (
                    <div key={index} className="flex justify-between bg-slate-700/30 rounded p-2">
                      <span className="text-slate-300 capitalize">{risk.replace('Risk', '')}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(level)}`}>
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="text-center bg-slate-700/50 rounded p-2">
                  <div className="text-cyan-400 font-medium">{formatPercentage(envData.climateRiskAssessment.adaptationMeasures.infrastructureResilience)}</div>
                  <div className="text-slate-400">Infrastructure Resilience</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-2">
                  <div className="text-green-400 font-medium">{formatPercentage(envData.climateRiskAssessment.adaptationMeasures.businessContinuityPlanning)}</div>
                  <div className="text-slate-400">Business Continuity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}