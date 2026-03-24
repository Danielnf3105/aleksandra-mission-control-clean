// Maritime & Ocean Intelligence Center - Shipping Operations, Port Management & Marine Analytics
import { useState, useEffect } from 'react';
import { Ship, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, Anchor } from 'lucide-react';

export default function MaritimeOceanIntelligenceCenter() {
  const [maritimeData, setMaritimeData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalMaritimeMarket: 567890123456, // EUR annually
      shippingMarket: 234567890123,
      portServicesMarket: 123456789012,
      totalFleet: 98765, // vessels globally
      activePorts: 3456,
      maritimeWorkers: 1654321,
      globalTrade: 1234567890123, // EUR cargo value
      cargoVolume: 12345678901, // tonnes annually
      containerTEU: 789012345, // TEU moved annually
      fuelConsumption: 234567890, // tonnes annually
      emissions: 890123456, // tonnes CO2
      digitalAdoption: 67.8, // percentage
      automationLevel: 45.6
    },
    majorMaritimeCompanies: [
      {
        company: 'Maersk',
        category: 'Container Shipping',
        revenue: 61234567890, // EUR annual
        fleet: 736, // vessels
        capacity: 4200000, // TEU
        employees: 110000,
        countries: 130,
        services: ['Container shipping', 'Logistics', 'Terminals', 'Inland transport'],
        digitalMaturity: 89.4,
        sustainabilityScore: 8.7,
        operationalEfficiency: 91.2,
        innovationScore: 8.9,
        stockPerformance: '+18.3%'
      },
      {
        company: 'COSCO Shipping',
        category: 'Container Shipping',
        revenue: 23456789012,
        fleet: 1368,
        capacity: 3100000,
        employees: 167000,
        countries: 45,
        services: ['Container shipping', 'Bulk carriers', 'Tankers', 'Port operations'],
        digitalMaturity: 78.9,
        sustainabilityScore: 7.8,
        operationalEfficiency: 86.7,
        innovationScore: 7.9,
        stockPerformance: '+12.4%'
      },
      {
        company: 'CMA CGM',
        category: 'Container Shipping',
        revenue: 56789012345,
        fleet: 593,
        capacity: 2900000,
        employees: 155000,
        countries: 160,
        services: ['Container transport', 'Logistics', 'Air cargo', 'Media'],
        digitalMaturity: 84.2,
        sustainabilityScore: 8.1,
        operationalEfficiency: 89.6,
        innovationScore: 8.3,
        stockPerformance: '+22.1%'
      },
      {
        company: 'MSC',
        category: 'Container Shipping',
        revenue: 34567890123,
        fleet: 645,
        capacity: 4560000,
        employees: 77000,
        countries: 155,
        services: ['Container shipping', 'Cruise', 'Cargo', 'Terminals'],
        digitalMaturity: 82.6,
        sustainabilityScore: 8.4,
        operationalEfficiency: 90.3,
        innovationScore: 8.1,
        stockPerformance: '+16.7%'
      }
    ],
    vessselTypes: [
      {
        type: 'Container Ships',
        activeVessels: 23456,
        totalCapacity: 25678901, // TEU
        averageSize: 1095, // TEU per vessel
        utilizationRate: 87.4, // percentage
        routes: ['Asia-Europe', 'Transpacific', 'Asia-Americas'],
        fuelEfficiency: 78.9,
        emissions: 234567890, // tonnes CO2
        digitalAdoption: 89.7
      },
      {
        type: 'Bulk Carriers',
        activeVessels: 12345,
        totalCapacity: 890123456, // DWT
        averageSize: 72100, // DWT per vessel
        utilizationRate: 82.6,
        routes: ['Iron ore', 'Coal', 'Grain', 'Bauxite'],
        fuelEfficiency: 73.2,
        emissions: 345678901,
        digitalAdoption: 67.8
      },
      {
        type: 'Oil Tankers',
        activeVessels: 8901,
        totalCapacity: 567890123, // DWT
        averageSize: 63800, // DWT per vessel
        utilizationRate: 79.3,
        routes: ['Middle East-Asia', 'Americas-Europe', 'West Africa-Asia'],
        fuelEfficiency: 71.8,
        emissions: 456789012,
        digitalAdoption: 72.4
      },
      {
        type: 'Chemical Tankers',
        activeVessels: 3456,
        totalCapacity: 23456789, // DWT
        averageSize: 6789, // DWT per vessel
        utilizationRate: 85.7,
        routes: ['Specialized chemicals', 'Petrochemicals', 'Vegetable oils'],
        fuelEfficiency: 82.3,
        emissions: 123456789,
        digitalAdoption: 84.6
      }
    ],
    portOperations: {
      containerHandling: {
        throughput: 789012345, // TEU annually
        efficiency: 42.3, // moves per hour
        vesselWaitTime: 18.7, // hours average
        bertha: 89.4, // percentage utilization
        automationLevel: 67.8,
        digitalIntegration: 82.5
      },
      bulkCargo: {
        throughput: 8901234567, // tonnes annually
        efficiency: 1234.5, // tonnes per hour
        vesselWaitTime: 24.6,
        berthUtilization: 78.9,
        automationLevel: 52.3,
        digitalIntegration: 69.7
      },
      liquidCargo: {
        throughput: 2345678901, // tonnes annually
        efficiency: 890.1, // tonnes per hour
        vesselWaitTime: 12.3,
        berthUtilization: 91.7,
        automationLevel: 89.6,
        digitalIntegration: 94.2
      },
      generalCargo: {
        throughput: 567890123, // tonnes annually
        efficiency: 234.5, // tonnes per hour
        vesselWaitTime: 36.7,
        berthUtilization: 67.8,
        automationLevel: 34.2,
        digitalIntegration: 56.8
      }
    },
    oceanConditions: {
      waveHeight: 2.3, // meters average
      windSpeed: 18.7, // knots
      seaTemperature: 16.8, // celsius
      visibility: 12.4, // nautical miles
      currentSpeed: 1.8, // knots
      tideLevel: 0.7, // meters
      stormActivity: 23.4, // percentage of routes affected
      iceConditions: 8.9, // percentage of arctic routes
      weatherDelays: 12.6, // percentage of voyages affected
      safetyIndex: 89.7, // overall ocean safety rating
      environmentalCompliance: 94.3,
      marineProtectedAreas: 15.6 // percentage coverage
    },
    sustainabilityMetrics: {
      fuelEfficiency: 23.4, // percentage improvement
      greenFuelAdoption: 8.9, // percentage of fleet
      emissionReduction: 15.6, // percentage vs baseline
      ballastWaterTreatment: 89.7, // percentage compliance
      scrubberInstallation: 67.8, // percentage of eligible vessels
      wasteManagement: 94.3, // compliance percentage
      marineLifeProtection: 87.6,
      noiseReduction: 34.2, // percentage improvement
      recyclableComponents: 78.9, // percentage by weight
      carbonOffset: 234567890, // tonnes CO2 equivalent
      renewableEnergy: 12.4, // percentage port operations
      sustainabilityInvestment: 23456789012 // EUR annually
    },
    tradeRoutes: {
      asiaPacific: {
        cargoVolume: 4567890123, // tonnes annually
        containerTEU: 234567890,
        averageDistance: 8234, // nautical miles
        transitTime: 21.4, // days average
        reliability: 89.7, // on-time percentage
        congestionLevel: 34.6, // percentage delays
        fuelCost: 234.56, // EUR per tonne
        utilization: 87.9
      },
      transAtlantic: {
        cargoVolume: 2345678901,
        containerTEU: 123456789,
        averageDistance: 3456,
        transitTime: 12.7,
        reliability: 92.4,
        congestionLevel: 18.9,
        fuelCost: 198.73,
        utilization: 91.2
      },
      europeMediterranean: {
        cargoVolume: 1234567890,
        containerTEU: 89012345,
        averageDistance: 1234,
        transitTime: 6.8,
        reliability: 94.6,
        congestionLevel: 12.3,
        fuelCost: 156.42,
        utilization: 93.8
      },
      middleEastAsia: {
        cargoVolume: 3456789012,
        containerTEU: 167890123,
        averageDistance: 6789,
        transitTime: 18.9,
        reliability: 86.2,
        congestionLevel: 42.7,
        fuelCost: 267.89,
        utilization: 84.6
      }
    },
    innovationTrends: {
      autonomousVessels: 12.4, // adoption percentage
      aiNavigation: 67.8,
      blockchainLogistics: 34.6,
      iotSensors: 78.9,
      predictiveMainten: 56.8,
      digitalTwins: 29.3,
      droneInspections: 45.7,
      roboticLoadHandling: 38.2,
      greenTechnology: 67.4,
      smartPorts: 82.6,
      alternativeFuels: 23.8,
      carbonCapture: 8.9
    },
    maritimeAlerts: [
      {
        type: 'CRITICAL',
        category: 'Safety',
        message: 'Severe storm system approaching major shipping lane - vessels advised to reroute',
        location: 'North Atlantic Route',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '05:23',
        recommendations: ['Route deviation', 'Speed adjustment', 'Weather monitoring', 'Emergency protocols']
      },
      {
        type: 'WARNING',
        category: 'Port Operations',
        message: 'Container terminal congestion reaching critical levels - 48-hour delays expected',
        location: 'Port of Rotterdam',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '05:20',
        recommendations: ['Cargo redistribution', 'Alternative ports', 'Schedule adjustment', 'Customer notification']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'Autonomous vessel completes maiden voyage with 99.7% navigation accuracy',
        location: 'Yara Birkeland Project',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:17',
        recommendations: ['Technology scaling', 'Regulatory approval', 'Commercial deployment', 'Safety validation']
      },
      {
        type: 'INFO',
        category: 'Environment',
        message: 'New marine protected area designation affects 3 major shipping routes',
        location: 'Pacific Ocean Corridor',
        impact: 'MEDIUM',
        actionRequired: false,
        timestamp: '05:14',
        recommendations: ['Route planning', 'Environmental compliance', 'Speed restrictions', 'Monitoring protocols']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMaritimeData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        oceanConditions: {
          ...prev.oceanConditions,
          waveHeight: Math.max(1.5, Math.min(3.5, prev.oceanConditions.waveHeight + (Math.random() - 0.5) * 0.3)),
          windSpeed: Math.max(12, Math.min(25, prev.oceanConditions.windSpeed + (Math.random() - 0.5) * 2))
        },
        portOperations: {
          ...prev.portOperations,
          containerHandling: {
            ...prev.portOperations.containerHandling,
            efficiency: Math.max(38, Math.min(48, prev.portOperations.containerHandling.efficiency + (Math.random() - 0.5) * 2)),
            vesselWaitTime: Math.max(15, Math.min(25, prev.portOperations.containerHandling.vesselWaitTime + (Math.random() - 0.5) * 1))
          }
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
      case 'Container Shipping': return 'text-blue-400 bg-blue-400/20';
      case 'Bulk Shipping': return 'text-green-400 bg-green-400/20';
      case 'Tanker Operations': return 'text-orange-400 bg-orange-400/20';
      case 'Port Operations': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getUtilizationColor = (utilization) => {
    if (utilization > 90) return 'text-green-400';
    if (utilization > 80) return 'text-blue-400';
    if (utilization > 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRouteColor = (route) => {
    switch (route) {
      case 'asiaPacific': return 'text-red-400 bg-red-400/20';
      case 'transAtlantic': return 'text-blue-400 bg-blue-400/20';
      case 'europeMediterranean': return 'text-green-400 bg-green-400/20';
      case 'middleEastAsia': return 'text-purple-400 bg-purple-400/20';
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Anchor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Maritime & Ocean Intelligence Center</h1>
              <p className="text-cyan-300">Shipping operations, port management & marine analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{maritimeData.currentTime}</div>
            <div className="text-cyan-300">Maritime Command</div>
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
                Maritime Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(maritimeData.industryOverview.globalMaritimeMarket)}</div>
            <div className="text-cyan-300 text-sm">Shipping: {formatCurrency(maritimeData.industryOverview.shippingMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Ship className="w-5 h-5 text-blue-400 mr-2" />
                Global Fleet
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(maritimeData.industryOverview.totalFleet)}</div>
            <div className="text-blue-300 text-sm">Active Vessels</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Cargo Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(maritimeData.industryOverview.cargoVolume)}</div>
            <div className="text-green-300 text-sm">Tonnes Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
                Container TEU
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(maritimeData.industryOverview.containerTEU)}</div>
            <div className="text-purple-300 text-sm">Units Moved</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Digital Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(maritimeData.industryOverview.digitalAdoption)}</div>
            <div className="text-orange-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-yellow-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(maritimeData.industryOverview.maritimeWorkers)}</div>
            <div className="text-yellow-300 text-sm">Global Workforce</div>
          </div>
        </div>

        {/* Major Maritime Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Anchor className="w-5 h-5 text-cyan-400 mr-2" />
            Major Maritime Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Fleet</th>
                  <th className="text-center p-3 text-slate-300">Capacity</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {maritimeData.majorMaritimeCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-blue-400">{company.fleet}</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(company.capacity)} TEU</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.operationalEfficiency, 85, 90)}`}>
                      {formatPercentage(company.operationalEfficiency)}
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

        {/* Vessel Types & Port Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Ship className="w-5 h-5 text-blue-400 mr-2" />
              Vessel Types Intelligence
            </h3>
            <div className="space-y-4">
              {maritimeData.vessselTypes.map((vessel, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{vessel.type}</span>
                      <span className={`text-sm ${getUtilizationColor(vessel.utilizationRate)}`}>
                        {formatPercentage(vessel.utilizationRate)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(vessel.activeVessels)} vessels</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Capacity: {formatNumber(vessel.totalCapacity)} {vessel.type.includes('Container') ? 'TEU' : 'DWT'}</div>
                      <div className="text-cyan-400">Avg Size: {formatNumber(vessel.averageSize)} {vessel.type.includes('Container') ? 'TEU' : 'DWT'}</div>
                      <div className="text-blue-400">Fuel Eff: {formatPercentage(vessel.fuelEfficiency)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Emissions: {formatNumber(vessel.emissions)} t CO₂</div>
                      <div className="text-green-400">Digital: {formatPercentage(vessel.digitalAdoption)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {vessel.routes.map((route, rIndex) => (
                      <span key={rIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {route}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-purple-400 mr-2" />
              Port Operations Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(maritimeData.portOperations).map(([operation, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{operation.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency, 200, 1000)}`}>
                      {data.efficiency.toFixed(1)} {operation.includes('container') ? 'moves/h' : 't/h'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-green-400">Throughput: {formatNumber(data.throughput)} {operation.includes('container') ? 'TEU' : 't'}</div>
                      <div className="text-orange-400">Wait Time: {data.vesselWaitTime.toFixed(1)}h</div>
                      <div className="text-blue-400">Berth Use: {formatPercentage(data.berthUtilization)}</div>
                    </div>
                    <div>
                      <div className="text-purple-400">Automation: {formatPercentage(data.automationLevel)}</div>
                      <div className="text-cyan-400">Digital: {formatPercentage(data.digitalIntegration)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ocean Conditions & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              Ocean Conditions Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{maritimeData.oceanConditions.waveHeight.toFixed(1)}m</div>
                <div className="text-blue-300 text-sm">Wave Height</div>
                <div className="text-gray-400 text-xs mt-1">{maritimeData.oceanConditions.windSpeed.toFixed(1)} knots wind</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(maritimeData.oceanConditions.safetyIndex)}</div>
                <div className="text-cyan-300 text-sm">Safety Index</div>
                <div className="text-gray-400 text-xs mt-1">{maritimeData.oceanConditions.visibility.toFixed(1)} nm visibility</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Conditions</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sea Temperature</span>
                  <span className="text-green-400">{maritimeData.oceanConditions.seaTemperature.toFixed(1)}°C</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Current Speed</span>
                  <span className="text-blue-400">{maritimeData.oceanConditions.currentSpeed.toFixed(1)} kn</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Storm Activity</span>
                  <span className="text-red-400">{formatPercentage(maritimeData.oceanConditions.stormActivity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Weather Delays</span>
                  <span className="text-orange-400">{formatPercentage(maritimeData.oceanConditions.weatherDelays)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(maritimeData.oceanConditions.environmentalCompliance)}</div>
                <div className="text-slate-300">Environmental Compliance</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatPercentage(maritimeData.oceanConditions.marineProtectedAreas)}</div>
                <div className="text-slate-300">Protected Areas</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(maritimeData.sustainabilityMetrics.fuelEfficiency)}</div>
                <div className="text-green-300 text-sm">Fuel Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">improvement rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(maritimeData.sustainabilityMetrics.emissionReduction)}</div>
                <div className="text-blue-300 text-sm">Emission Reduction</div>
                <div className="text-gray-400 text-xs mt-1">vs baseline</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green Fuel Adoption</span>
                  <span className="text-green-400">{formatPercentage(maritimeData.sustainabilityMetrics.greenFuelAdoption)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Ballast Treatment</span>
                  <span className="text-blue-400">{formatPercentage(maritimeData.sustainabilityMetrics.ballastWaterTreatment)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Marine Life Protection</span>
                  <span className="text-purple-400">{formatPercentage(maritimeData.sustainabilityMetrics.marineLifeProtection)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Management</span>
                  <span className="text-cyan-400">{formatPercentage(maritimeData.sustainabilityMetrics.wasteManagement)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatNumber(maritimeData.sustainabilityMetrics.carbonOffset)}</div>
                <div className="text-slate-300">Carbon Offset (t CO₂)</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatCurrency(maritimeData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Sustainability Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Routes & Innovation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Trade Routes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(maritimeData.tradeRoutes).map(([route, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-sm ${getRouteColor(route)}`}>
                        {route.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <span className={`text-sm ${getUtilizationColor(data.utilization)}`}>
                        {formatPercentage(data.utilization)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">€{data.fuelCost.toFixed(0)}/t</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Cargo: {formatNumber(data.cargoVolume)} t</div>
                      <div className="text-purple-400">TEU: {formatNumber(data.containerTEU)}</div>
                      <div className="text-cyan-400">Distance: {formatNumber(data.averageDistance)} nm</div>
                    </div>
                    <div>
                      <div className="text-green-400">Transit: {data.transitTime.toFixed(1)} days</div>
                      <div className="text-orange-400">Reliability: {formatPercentage(data.reliability)}</div>
                      <div className="text-red-400">Congestion: {formatPercentage(data.congestionLevel)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Ports</span>
                  <span className="text-green-400">{formatPercentage(maritimeData.innovationTrends.smartPorts)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">IoT Sensors</span>
                  <span className="text-blue-400">{formatPercentage(maritimeData.innovationTrends.iotSensors)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green Technology</span>
                  <span className="text-emerald-400">{formatPercentage(maritimeData.innovationTrends.greenTechnology)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Navigation</span>
                  <span className="text-purple-400">{formatPercentage(maritimeData.innovationTrends.aiNavigation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Predictive Maintenance</span>
                  <span className="text-cyan-400">{formatPercentage(maritimeData.innovationTrends.predictiveMainten)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Drone Inspections</span>
                  <span className="text-pink-400">{formatPercentage(maritimeData.innovationTrends.droneInspections)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Robotic Handling</span>
                  <span className="text-orange-400">{formatPercentage(maritimeData.innovationTrends.roboticLoadHandling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Autonomous Vessels</span>
                  <span className="text-indigo-400">{formatPercentage(maritimeData.innovationTrends.autonomousVessels)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maritime Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Maritime Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {maritimeData.maritimeAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Location: {alert.location}</div>
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