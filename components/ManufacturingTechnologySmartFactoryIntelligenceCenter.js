// Manufacturing Technology & Smart Factory Intelligence Center - Manufacturing & Factory Analytics
import { useState, useEffect } from 'react';
import { Factory, Settings, BarChart3, Activity, TrendingUp, Shield, Target, Monitor, Gauge, Cpu, Zap, Globe } from 'lucide-react';

export default function ManufacturingTechnologySmartFactoryIntelligenceCenter() {
  const [manufacturingData, setManufacturingData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    manufacturingOverview: {
      smartFactories: 456789,
      manufacturingPlatforms: 123456,
      productionLines: 2345678,
      automatedSystems: 8901234,
      iotSensors: 56789012,
      roboticUnits: 1234567,
      oeeAverage: 82.5,
      qualityScore: 95.7,
      automationLevel: 78.4,
      energyEfficiency: 87.3,
      safetyScore: 99.2,
      predictiveMaintenance: 91.8,
      supplyChainVisibility: 84.6,
      timeToMarket: 67.8,
      sustainabilityScore: 76.9,
      costOptimization: 23.4,
      laborProductivity: 89.5,
      defectRate: 0.8,
      uptimePercentage: 94.7,
      digitalizationIndex: 73.2
    },
    smartFactories: [
      {
        factoryName: 'BMW Group Plant Regensburg',
        factoryId: 'BMW-REGENSBURG-001',
        location: 'Regensburg, Germany',
        factoryType: 'AUTOMOTIVE MANUFACTURING',
        status: 'OPERATIONAL',
        dailyOutput: 1100,
        maxCapacity: 1200,
        oeeScore: 91.5,
        qualityRate: 99.7,
        automationLevel: 89.4,
        energyEfficiency: 94.2,
        safetyIncidents: 0,
        employeeCount: 9500,
        roboticDensity: 1.2,
        sustainabilityRating: 'A+',
        certifications: 'ISO 14001, EMAS',
        vehiclesProduced: 340000,
        modelsManufactured: 'BMW 1 Series, X1, X2',
        industry40Features: 'Digital Twin, AI Quality Control',
        predictiveMaintenance: 96.8,
        downtime: 2.3,
        wasteReduction: 87.6,
        waterRecycling: 92.1,
        renewableEnergy: 78.5,
        supplierNetwork: 850
      },
      {
        factoryName: 'Tesla Gigafactory Shanghai',
        factoryId: 'TESLA-SHANGHAI-002',
        location: 'Shanghai, China',
        factoryType: 'ELECTRIC VEHICLE PRODUCTION',
        status: 'OPERATIONAL',
        dailyOutput: 2100,
        maxCapacity: 2300,
        oeeScore: 88.7,
        qualityRate: 98.9,
        automationLevel: 95.2,
        energyEfficiency: 91.8,
        safetyIncidents: 1,
        employeeCount: 15000,
        roboticDensity: 2.1,
        sustainabilityRating: 'A',
        certifications: 'ISO 9001, TS 16949',
        vehiclesProduced: 710000,
        modelsManufactured: 'Model 3, Model Y',
        industry40Features: 'Autonomous Production, ML Optimization',
        predictiveMaintenance: 94.3,
        downtime: 3.7,
        wasteReduction: 91.4,
        waterRecycling: 88.9,
        renewableEnergy: 85.6,
        supplierNetwork: 320
      },
      {
        factoryName: 'Siemens Amberg Electronics Plant',
        factoryId: 'SIEMENS-AMBERG-003',
        location: 'Amberg, Germany',
        factoryType: 'ELECTRONICS MANUFACTURING',
        status: 'OPERATIONAL',
        dailyOutput: 15000,
        maxCapacity: 16000,
        oeeScore: 93.2,
        qualityRate: 99.9988,
        automationLevel: 75.8,
        energyEfficiency: 89.7,
        safetyIncidents: 0,
        employeeCount: 1100,
        roboticDensity: 0.8,
        sustainabilityRating: 'A++',
        certifications: 'ISO 14001, ISO 50001',
        productsManufactured: 1200,
        unitsProduced: 16000000,
        industry40Features: 'Digital Factory, Data Analytics',
        predictiveMaintenance: 98.1,
        downtime: 1.2,
        wasteReduction: 95.3,
        waterRecycling: 89.6,
        renewableEnergy: 92.4,
        supplierNetwork: 180
      },
      {
        factoryName: 'Foxconn Zhengzhou iPhone City',
        factoryId: 'FOXCONN-ZHENGZHOU-004',
        location: 'Zhengzhou, China',
        factoryType: 'CONSUMER ELECTRONICS',
        status: 'OPERATIONAL',
        dailyOutput: 500000,
        maxCapacity: 550000,
        oeeScore: 85.9,
        qualityRate: 97.8,
        automationLevel: 68.7,
        energyEfficiency: 83.4,
        safetyIncidents: 2,
        employeeCount: 350000,
        roboticDensity: 0.3,
        sustainabilityRating: 'B+',
        certifications: 'ISO 9001, RBA Standards',
        productsManufactured: 'iPhone, iPad',
        unitsProduced: 170000000,
        industry40Features: 'Smart Assembly, Quality Vision',
        predictiveMaintenance: 87.5,
        downtime: 5.8,
        wasteReduction: 76.2,
        waterRecycling: 71.8,
        renewableEnergy: 45.3,
        supplierNetwork: 1250
      }
    ],
    manufacturingPlatforms: [
      {
        platformName: 'Siemens MindSphere',
        platformId: 'SIEMENS-MINDSPHERE-001',
        provider: 'Siemens Digital Industries',
        category: 'INDUSTRIAL IOT PLATFORM',
        status: 'OPERATIONAL',
        globalPresence: 'WORLDWIDE',
        factoriesConnected: 125000,
        assetsMonitored: 45000000,
        dataPoints: 75000000000,
        applications: 450,
        customers: 8500,
        industries: 'Automotive, Aerospace, Energy',
        connectivity: 'Edge, Cloud, Hybrid',
        analytics: 'Machine Learning, AI',
        digitalTwins: 2800000,
        predictiveAnalytics: 'ADVANCED',
        edgeComputing: 'DISTRIBUTED',
        cybersecurity: 'ENTERPRISE GRADE',
        apiIntegrations: 12000,
        partnerEcosystem: 1200,
        deploymentTime: '4-8 weeks',
        roiRealization: '18-24 months',
        uptimeImprovement: 15.7,
        costReduction: 12.3
      },
      {
        platformName: 'GE Digital Predix',
        platformId: 'GE-PREDIX-PLATFORM-002',
        provider: 'General Electric',
        category: 'INDUSTRIAL DIGITAL PLATFORM',
        status: 'OPERATIONAL',
        globalPresence: 'GLOBAL',
        factoriesConnected: 89000,
        assetsMonitored: 78000000,
        dataPoints: 120000000000,
        applications: 850,
        customers: 6200,
        industries: 'Aviation, Power, Healthcare',
        connectivity: 'Multi-Protocol',
        analytics: 'Deep Learning, Statistics',
        digitalTwins: 1900000,
        predictiveAnalytics: 'AI-POWERED',
        edgeComputing: 'INTELLIGENT EDGE',
        cybersecurity: 'MILITARY STANDARD',
        apiIntegrations: 15000,
        partnerEcosystem: 950,
        deploymentTime: '6-12 weeks',
        roiRealization: '12-18 months',
        uptimeImprovement: 18.9,
        costReduction: 16.7
      },
      {
        platformName: 'Rockwell FactoryTalk',
        platformId: 'ROCKWELL-FACTORYTALK-003',
        provider: 'Rockwell Automation',
        category: 'MANUFACTURING OPERATIONS',
        status: 'OPERATIONAL',
        globalPresence: 'NORTH AMERICA',
        factoriesConnected: 45000,
        assetsMonitored: 25000000,
        dataPoints: 35000000000,
        applications: 320,
        customers: 23000,
        industries: 'Food & Beverage, Oil & Gas',
        connectivity: 'EtherNet/IP',
        analytics: 'Statistical Process Control',
        digitalTwins: 890000,
        predictiveAnalytics: 'STATISTICAL MODELS',
        edgeComputing: 'EDGE CONTROLLERS',
        cybersecurity: 'DEFENSE IN DEPTH',
        apiIntegrations: 8500,
        partnerEcosystem: 650,
        deploymentTime: '3-6 weeks',
        roiRealization: '6-12 months',
        uptimeImprovement: 12.4,
        costReduction: 9.8
      }
    ],
    industryAnalytics: [
      {
        industryType: 'Automotive Manufacturing',
        analyticsId: 'AUTO-MANUFACTURING-001',
        globalProduction: 95000000,
        marketValue: 2870.0,
        automationLevel: 84.7,
        roboticDensity: 1.33,
        oeeAverage: 79.5,
        qualityStandards: 'TS 16949',
        keyTrends: 'Electric Vehicles, Autonomous',
        leadingRegions: 'China, Europe, North America',
        majorPlayers: 'Toyota, Volkswagen, GM',
        technology: 'Industry 4.0, Digital Twin',
        challenges: 'Supply Chain, Chip Shortage',
        opportunities: 'EV Transition, Digitalization',
        sustainability: 'Carbon Neutral Goals',
        employmentImpact: 'Reskilling Required',
        investmentFocus: 'Battery Technology, AI',
        regulatoryTrends: 'Safety Standards, Emissions',
        futureTech: 'Autonomous Factories, 5G',
        skillRequirements: 'Digital, Programming',
        competitiveFactors: 'Speed, Quality, Cost'
      },
      {
        industryType: 'Electronics Manufacturing',
        analyticsId: 'ELECTRONICS-MFG-002',
        globalProduction: 4500000000,
        marketValue: 5250.0,
        automationLevel: 76.3,
        roboticDensity: 0.89,
        oeeAverage: 82.1,
        qualityStandards: 'IPC Standards',
        keyTrends: 'Miniaturization, IoT',
        leadingRegions: 'Asia-Pacific, China',
        majorPlayers: 'Foxconn, Flex, Jabil',
        technology: 'SMT Lines, Pick & Place',
        challenges: 'Component Shortage, Complexity',
        opportunities: '5G, Edge Computing',
        sustainability: 'Circular Economy, E-Waste',
        employmentImpact: 'Automation Displacement',
        investmentFocus: 'Flexible Automation, AI',
        regulatoryTrends: 'RoHS, WEEE Directive',
        futureTech: 'Quantum Devices, Neuromorphic',
        skillRequirements: 'Mechatronics, Software',
        competitiveFactors: 'Innovation, Time-to-Market'
      },
      {
        industryType: 'Pharmaceutical Manufacturing',
        analyticsId: 'PHARMA-MFG-003',
        globalProduction: 1450000000,
        marketValue: 1480.0,
        automationLevel: 68.9,
        roboticDensity: 0.52,
        oeeAverage: 75.6,
        qualityStandards: 'cGMP, FDA',
        keyTrends: 'Personalized Medicine, Biologics',
        leadingRegions: 'North America, Europe',
        majorPlayers: 'Pfizer, Roche, Novartis',
        technology: 'Continuous Manufacturing',
        challenges: 'Regulatory Compliance, Cost',
        opportunities: 'Digitalization, Analytics',
        sustainability: 'Green Chemistry, Waste',
        employmentImpact: 'High-Skill Jobs',
        investmentFocus: 'Digital Transformation',
        regulatoryTrends: 'Real-Time Release',
        futureTech: 'AI Drug Discovery, 3D Printing',
        skillRequirements: 'Biotech, Data Science',
        competitiveFactors: 'Quality, Compliance, Speed'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        factoriesOperating: 456789,
        productionLines: 2345678,
        unitsProduced: 12500000,
        oeeAverage: 82.5,
        qualityScore: 95.7,
        energyConsumption: 45600.0,
        alerts: 234,
        incidents: 5
      },
      {
        period: 'Last 24 Hours',
        factoriesOperating: 456234,
        productionLines: 2341000,
        unitsProduced: 298000000,
        oeeAverage: 81.8,
        qualityScore: 95.4,
        energyConsumption: 1089600.0,
        alerts: 5670,
        incidents: 123
      },
      {
        period: 'Last 7 Days',
        factoriesOperating: 455123,
        productionLines: 2332000,
        unitsProduced: 2075000000,
        oeeAverage: 81.1,
        qualityScore: 95.1,
        energyConsumption: 7612800.0,
        alerts: 39850,
        incidents: 876
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setManufacturingData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        manufacturingOverview: {
          ...prev.manufacturingOverview,
          oeeAverage: Math.max(75.0, Math.min(90.0, prev.manufacturingOverview.oeeAverage + (Math.random() - 0.5) * 1.0)),
          qualityScore: Math.max(90.0, Math.min(99.0, prev.manufacturingOverview.qualityScore + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'DOWNTIME': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `$${amount.toFixed(1)}B`;
  const formatUnits = (units) => formatNumber(units);
  const formatMWh = (mwh) => `${mwh.toFixed(0)} MWh`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Manufacturing Technology & Smart Factory Intelligence Center</h1>
              <p className="text-slate-300">Manufacturing & factory analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{manufacturingData.currentTime}</div>
            <div className="text-slate-300">Manufacturing Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Manufacturing Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Factory className="w-5 h-5 text-blue-400 mr-2" />
                Factories
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(manufacturingData.manufacturingOverview.smartFactories)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(manufacturingData.manufacturingOverview.manufacturingPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-purple-400 mr-2" />
                Production
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(manufacturingData.manufacturingOverview.productionLines)}</div>
            <div className="text-purple-300 text-sm">Lines Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Gauge className="w-5 h-5 text-green-400 mr-2" />
                OEE
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(manufacturingData.manufacturingOverview.oeeAverage)}</div>
            <div className="text-green-300 text-sm">Efficiency</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-yellow-400 mr-2" />
                Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(manufacturingData.manufacturingOverview.qualityScore)}</div>
            <div className="text-yellow-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-cyan-400 mr-2" />
                Automation
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(manufacturingData.manufacturingOverview.automationLevel)}</div>
            <div className="text-cyan-300 text-sm">Level</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-orange-400 mr-2" />
                Safety
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(manufacturingData.manufacturingOverview.safetyScore)}</div>
            <div className="text-orange-300 text-sm">Score</div>
          </div>
        </div>

        {/* Smart Factories & Manufacturing Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Factory className="w-5 h-5 text-blue-400 mr-2" />
              Smart Factories
            </h3>
            <div className="space-y-4">
              {manufacturingData.smartFactories.map((factory, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{factory.factoryName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(factory.status)}`}>
                        {factory.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{factory.location}</div>
                    <div className="text-blue-400">{factory.factoryType}</div>
                    <div className="text-green-400">{factory.sustainabilityRating}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Output: {formatNumber(factory.dailyOutput)}/day</div>
                    <div className="text-purple-400">Capacity: {formatNumber(factory.maxCapacity)}/day</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>OEE Score</span>
                      <span>{formatPercentage(factory.oeeScore)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${factory.oeeScore}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Quality: {formatPercentage(factory.qualityRate)}</div>
                    <div className="text-indigo-400">Automation: {formatPercentage(factory.automationLevel)}</div>
                    <div className="text-cyan-400">Energy Eff: {formatPercentage(factory.energyEfficiency)}</div>
                    <div className="text-green-400">Employees: {formatNumber(factory.employeeCount)}</div>
                    <div className="text-blue-400">
                      {factory.vehiclesProduced && `Vehicles: ${formatNumber(factory.vehiclesProduced)}/yr`}
                      {factory.unitsProduced && `Units: ${formatNumber(factory.unitsProduced)}/yr`}
                    </div>
                    <div className="text-orange-400">Features: {factory.industry40Features}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-purple-400 mr-2" />
              Manufacturing Platforms
            </h3>
            <div className="space-y-4">
              {manufacturingData.manufacturingPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.provider}</div>
                    <div className="text-blue-400">{platform.category}</div>
                    <div className="text-green-400">{platform.globalPresence}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Factories: {formatNumber(platform.factoriesConnected)}</div>
                    <div className="text-purple-400">Assets: {formatNumber(platform.assetsMonitored)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Uptime Improvement</span>
                      <span>{formatPercentage(platform.uptimeImprovement)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${platform.uptimeImprovement * 5}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Customers: {formatNumber(platform.customers)}</div>
                    <div className="text-indigo-400">Data Points: {formatNumber(platform.dataPoints)}</div>
                    <div className="text-cyan-400">Digital Twins: {formatNumber(platform.digitalTwins)}</div>
                    <div className="text-green-400">Analytics: {platform.analytics}</div>
                    <div className="text-blue-400">Deployment: {platform.deploymentTime}</div>
                    <div className="text-orange-400">Cost Reduction: {formatPercentage(platform.costReduction)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
            Industry Manufacturing Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {manufacturingData.industryAnalytics.map((industry, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{industry.industryType}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Production: {formatNumber(industry.globalProduction)} units</div>
                  <div className="text-blue-400">Market: {formatCurrency(industry.marketValue)}</div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Automation Level</span>
                    <span>{formatPercentage(industry.automationLevel)}</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-green-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${industry.automationLevel}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">OEE: {formatPercentage(industry.oeeAverage)}</div>
                  <div className="text-indigo-400">Robot Density: {industry.roboticDensity}</div>
                  <div className="text-cyan-400">Quality: {industry.qualityStandards}</div>
                  <div className="text-green-400">Leaders: {industry.leadingRegions}</div>
                  <div className="text-blue-400">Key Trends: {industry.keyTrends}</div>
                  <div className="text-orange-400">Technology: {industry.technology}</div>
                  <div className="text-purple-400">Future: {industry.futureTech}</div>
                  <div className="text-yellow-400">Skills: {industry.skillRequirements}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-slate-400 mr-2" />
            Manufacturing Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {manufacturingData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Factories: {formatNumber(metrics.factoriesOperating)}</div>
                  <div className="text-green-400">Lines: {formatNumber(metrics.productionLines)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Units: {formatNumber(metrics.unitsProduced)}</div>
                  <div className="text-yellow-400">OEE: {formatPercentage(metrics.oeeAverage)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Quality: {formatPercentage(metrics.qualityScore)}</div>
                  <div className="text-orange-400">Energy: {formatMWh(metrics.energyConsumption)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Alerts: {metrics.alerts}</div>
                  <div className="text-pink-400">Incidents: {metrics.incidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}