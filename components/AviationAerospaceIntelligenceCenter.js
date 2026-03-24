// Aviation & Aerospace Intelligence Center - Flight Operations, Airport Management & Aircraft Analytics
import { useState, useEffect } from 'react';
import { Plane, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Brain, Activity, MapPin } from 'lucide-react';

export default function AviationAerospaceIntelligenceCenter() {
  const [aviationData, setAviationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalAviationMarket: 801234567890, // EUR annually
      airlineMarket: 567890123456,
      airportServicesMarket: 234567890123,
      aerospaceManufacturing: 345678901234,
      totalAircraft: 26745, // commercial aircraft globally
      activeAirports: 17678,
      aviationWorkers: 2567890,
      globalPassengers: 4567890123, // passengers annually
      cargoVolume: 67890123, // tonnes annually
      flightOperations: 39876543, // flights annually
      fuelConsumption: 345678901, // tonnes annually
      emissions: 1023456789, // tonnes CO2
      digitalAdoption: 78.9, // percentage
      automationLevel: 67.8
    },
    majorAviationCompanies: [
      {
        company: 'Boeing',
        category: 'Aircraft Manufacturing',
        revenue: 66608000000, // EUR annual
        aircraft: 5850, // delivered annually
        backlog: 4500, // orders pending
        employees: 156000,
        countries: 65,
        services: ['Commercial aircraft', 'Defense', 'Space', 'Services'],
        digitalMaturity: 91.4,
        sustainabilityScore: 8.4,
        operationalEfficiency: 89.7,
        innovationScore: 9.2,
        stockPerformance: '+24.7%'
      },
      {
        company: 'Airbus',
        category: 'Aircraft Manufacturing',
        revenue: 54345678901,
        aircraft: 6120,
        backlog: 7400,
        employees: 134000,
        countries: 35,
        services: ['Commercial aircraft', 'Helicopters', 'Defence', 'Space'],
        digitalMaturity: 89.6,
        sustainabilityScore: 8.9,
        operationalEfficiency: 92.4,
        innovationScore: 9.1,
        stockPerformance: '+19.3%'
      },
      {
        company: 'American Airlines',
        category: 'Airline Operations',
        revenue: 45678901234,
        aircraft: 956,
        backlog: 0,
        employees: 129000,
        countries: 55,
        services: ['Passenger transport', 'Cargo', 'Maintenance', 'Loyalty'],
        digitalMaturity: 84.2,
        sustainabilityScore: 7.6,
        operationalEfficiency: 87.3,
        innovationScore: 8.1,
        stockPerformance: '+12.8%'
      },
      {
        company: 'Delta Air Lines',
        category: 'Airline Operations',
        revenue: 50123456789,
        aircraft: 870,
        backlog: 0,
        employees: 95000,
        countries: 52,
        services: ['Passenger transport', 'Cargo', 'Technical ops', 'SkyMiles'],
        digitalMaturity: 88.7,
        sustainabilityScore: 8.2,
        operationalEfficiency: 91.6,
        innovationScore: 8.6,
        stockPerformance: '+18.4%'
      }
    ],
    aircraftTypes: [
      {
        type: 'Narrow-body',
        activeAircraft: 16789,
        totalCapacity: 2345678, // seats
        averageSize: 140, // seats per aircraft
        utilizationRate: 89.7, // percentage
        routes: ['Domestic', 'Short-haul', 'Regional'],
        fuelEfficiency: 84.3,
        emissions: 234567890, // tonnes CO2
        digitalAdoption: 91.2
      },
      {
        type: 'Wide-body',
        activeAircraft: 6234,
        totalCapacity: 1876543, // seats
        averageSize: 301, // seats per aircraft
        utilizationRate: 82.4,
        routes: ['Long-haul', 'International', 'Transcontinental'],
        fuelEfficiency: 76.8,
        emissions: 456789012,
        digitalAdoption: 87.6
      },
      {
        type: 'Regional Jets',
        activeAircraft: 2890,
        totalCapacity: 231678, // seats
        averageSize: 80, // seats per aircraft
        utilizationRate: 76.9,
        routes: ['Regional', 'Feeder', 'Short-haul'],
        fuelEfficiency: 78.2,
        emissions: 123456789,
        digitalAdoption: 82.4
      },
      {
        type: 'Cargo Aircraft',
        activeAircraft: 832,
        totalCapacity: 67890123, // cargo tonnes capacity
        averageSize: 81600, // kg per aircraft
        utilizationRate: 92.6,
        routes: ['Freight', 'Express', 'International cargo'],
        fuelEfficiency: 72.8,
        emissions: 345678901,
        digitalAdoption: 89.3
      }
    ],
    airportOperations: {
      passengerHandling: {
        throughput: 4567890123, // passengers annually
        efficiency: 238.7, // passengers per hour per gate
        averageWaitTime: 14.6, // minutes check-in
        gateUtilization: 87.9, // percentage
        automationLevel: 72.8,
        digitalIntegration: 89.4
      },
      cargoHandling: {
        throughput: 67890123, // tonnes annually
        efficiency: 145.2, // tonnes per hour
        averageWaitTime: 8.4, // hours for cargo processing
        facilityUtilization: 84.7,
        automationLevel: 68.9,
        digitalIntegration: 82.6
      },
      airTrafficControl: {
        flightOperations: 39876543, // flights annually
        efficiency: 42.8, // operations per hour
        averageDelay: 12.7, // minutes
        runwayUtilization: 78.9,
        automationLevel: 94.3,
        digitalIntegration: 96.7
      },
      maintenance: {
        aircraftServiced: 234567, // aircraft annually
        efficiency: 0.89, // maintenance completion rate
        averageTurnaround: 6.4, // hours
        facilityUtilization: 91.2,
        automationLevel: 76.4,
        digitalIntegration: 88.9
      }
    },
    flightConditions: {
      globalWeather: 89.7, // percentage favorable conditions
      windSpeed: 12.4, // knots average
      visibility: 18.6, // kilometers
      temperature: 16.3, // celsius
      pressure: 1013.2, // hPa
      cloudCover: 34.5, // percentage
      turbulenceLevel: 23.4, // percentage of routes affected
      stormActivity: 12.8, // percentage of routes
      weatherDelays: 8.9, // percentage of flights affected
      safetyIndex: 96.4, // overall flight safety rating
      environmentalCompliance: 91.7,
      noiseReduction: 23.6 // percentage improvement
    },
    sustainabilityMetrics: {
      fuelEfficiency: 34.6, // percentage improvement
      sustainableFuels: 12.4, // percentage of fuel usage
      emissionReduction: 28.7, // percentage vs baseline
      noiseReduction: 45.8, // percentage improvement
      wasteReduction: 67.9, // percentage improvement
      waterConservation: 78.3, // percentage improvement
      carbonNeutralAirports: 23.4, // percentage of major airports
      electricGroundSupport: 45.7, // percentage
      renewableEnergy: 34.2, // percentage airport operations
      carbonOffset: 567890123, // tonnes CO2 equivalent
      sustainableDesign: 89.4, // percentage new aircraft
      sustainabilityInvestment: 56789012345 // EUR annually
    },
    flightRoutes: {
      domesticRoutes: {
        flightOperations: 23456789, // flights annually
        passengerLoad: 78.9, // percentage
        averageDistance: 890, // kilometers
        flightTime: 1.8, // hours average
        onTimePerformance: 84.7, // percentage
        delayRate: 15.3, // percentage
        fuelCost: 456.78, // EUR per flight hour
        utilization: 89.6
      },
      internationalRoutes: {
        flightOperations: 16419754,
        passengerLoad: 82.4,
        averageDistance: 4567,
        flightTime: 8.4,
        onTimePerformance: 79.8,
        delayRate: 20.2,
        fuelCost: 1234.56,
        utilization: 86.3
      },
      cargoRoutes: {
        flightOperations: 2345678,
        cargoLoad: 91.2,
        averageDistance: 3456,
        flightTime: 6.7,
        onTimePerformance: 88.9,
        delayRate: 11.1,
        fuelCost: 987.65,
        utilization: 94.7
      },
      regionalRoutes: {
        flightOperations: 8901234,
        passengerLoad: 72.6,
        averageDistance: 456,
        flightTime: 1.2,
        onTimePerformance: 81.4,
        delayRate: 18.6,
        fuelCost: 234.56,
        utilization: 76.8
      }
    },
    innovationTrends: {
      electricAircraft: 8.9, // adoption percentage
      autonomousFlying: 23.4,
      aiOptimization: 78.9,
      predictiveMaintenance: 67.8,
      biometricSecurity: 56.7,
      smartBaggage: 45.6,
      sustainableFuels: 34.5,
      digitalTowers: 29.3,
      droneIntegration: 23.4,
      spaceplaneDevelopment: 12.3,
      urbanAirMobility: 18.7,
      quantumComputing: 6.8
    },
    aviationAlerts: [
      {
        type: 'CRITICAL',
        category: 'Weather',
        message: 'Severe thunderstorms approaching major hub airports - ground stops initiated',
        location: 'US East Coast Airports',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '05:40',
        recommendations: ['Ground stops', 'Flight rerouting', 'Passenger accommodation', 'Crew scheduling']
      },
      {
        type: 'WARNING',
        category: 'Air Traffic',
        message: 'Air traffic control system experiencing minor delays due to high volume',
        location: 'European Airspace',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '05:37',
        recommendations: ['Flow management', 'Alternative routing', 'Delay absorption', 'Capacity optimization']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'First commercial electric aircraft completes successful 200km passenger flight',
        location: 'Eviation Alice Test Program',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:34',
        recommendations: ['Technology scaling', 'Certification process', 'Commercial planning', 'Infrastructure development']
      },
      {
        type: 'INFO',
        category: 'Sustainability',
        message: 'Major airport achieves carbon neutral status ahead of 2030 target',
        location: 'Amsterdam Schiphol',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '05:31',
        recommendations: ['Best practice sharing', 'Sustainability expansion', 'Industry collaboration', 'Technology transfer']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAviationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        flightConditions: {
          ...prev.flightConditions,
          windSpeed: Math.max(8, Math.min(18, prev.flightConditions.windSpeed + (Math.random() - 0.5) * 2)),
          visibility: Math.max(12, Math.min(25, prev.flightConditions.visibility + (Math.random() - 0.5) * 1))
        },
        airportOperations: {
          ...prev.airportOperations,
          passengerHandling: {
            ...prev.airportOperations.passengerHandling,
            efficiency: Math.max(220, Math.min(250, prev.airportOperations.passengerHandling.efficiency + (Math.random() - 0.5) * 5)),
            averageWaitTime: Math.max(10, Math.min(20, prev.airportOperations.passengerHandling.averageWaitTime + (Math.random() - 0.5) * 1))
          }
        }
      }));
    }, 20000);

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
      case 'Aircraft Manufacturing': return 'text-blue-400 bg-blue-400/20';
      case 'Airline Operations': return 'text-green-400 bg-green-400/20';
      case 'Airport Services': return 'text-purple-400 bg-purple-400/20';
      case 'Aerospace Systems': return 'text-orange-400 bg-orange-400/20';
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
      case 'domesticRoutes': return 'text-blue-400 bg-blue-400/20';
      case 'internationalRoutes': return 'text-green-400 bg-green-400/20';
      case 'cargoRoutes': return 'text-orange-400 bg-orange-400/20';
      case 'regionalRoutes': return 'text-purple-400 bg-purple-400/20';
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
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Aviation & Aerospace Intelligence Center</h1>
              <p className="text-indigo-300">Flight operations, airport management & aircraft analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{aviationData.currentTime}</div>
            <div className="text-indigo-300">Flight Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-indigo-400 mr-2" />
                Aviation Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatCurrency(aviationData.industryOverview.globalAviationMarket)}</div>
            <div className="text-indigo-300 text-sm">Airlines: {formatCurrency(aviationData.industryOverview.airlineMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Plane className="w-5 h-5 text-blue-400 mr-2" />
                Global Fleet
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(aviationData.industryOverview.totalAircraft)}</div>
            <div className="text-blue-300 text-sm">Commercial Aircraft</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-2" />
                Passengers
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(aviationData.industryOverview.globalPassengers)}</div>
            <div className="text-green-300 text-sm">Annually</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Flight Operations
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(aviationData.industryOverview.flightOperations)}</div>
            <div className="text-purple-300 text-sm">Flights Per Year</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Digital Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(aviationData.industryOverview.digitalAdoption)}</div>
            <div className="text-orange-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                Active Airports
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(aviationData.industryOverview.activeAirports)}</div>
            <div className="text-yellow-300 text-sm">Worldwide</div>
          </div>
        </div>

        {/* Major Aviation Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Plane className="w-5 h-5 text-indigo-400 mr-2" />
            Major Aviation Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Aircraft/Fleet</th>
                  <th className="text-center p-3 text-slate-300">Backlog</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">Innovation</th>
                </tr>
              </thead>
              <tbody>
                {aviationData.majorAviationCompanies.map((company, index) => (
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
                    <td className="p-3 text-center text-blue-400">{company.aircraft}</td>
                    <td className="p-3 text-center text-purple-400">{company.backlog > 0 ? formatNumber(company.backlog) : 'Active Fleet'}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.operationalEfficiency, 85, 90)}`}>
                      {formatPercentage(company.operationalEfficiency)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.innovationScore, 7.5, 8.5)}`}>
                      {company.innovationScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Aircraft Types & Airport Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Plane className="w-5 h-5 text-blue-400 mr-2" />
              Aircraft Types Intelligence
            </h3>
            <div className="space-y-4">
              {aviationData.aircraftTypes.map((aircraft, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{aircraft.type}</span>
                      <span className={`text-sm ${getUtilizationColor(aircraft.utilizationRate)}`}>
                        {formatPercentage(aircraft.utilizationRate)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(aircraft.activeAircraft)} aircraft</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Capacity: {formatNumber(aircraft.totalCapacity)} {aircraft.type.includes('Cargo') ? 'kg' : 'seats'}</div>
                      <div className="text-cyan-400">Avg Size: {formatNumber(aircraft.averageSize)} {aircraft.type.includes('Cargo') ? 'kg' : 'seats'}</div>
                      <div className="text-blue-400">Fuel Eff: {formatPercentage(aircraft.fuelEfficiency)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Emissions: {formatNumber(aircraft.emissions)} t CO₂</div>
                      <div className="text-green-400">Digital: {formatPercentage(aircraft.digitalAdoption)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {aircraft.routes.map((route, rIndex) => (
                      <span key={rIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {route}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-purple-400 mr-2" />
              Airport Operations Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(aviationData.airportOperations).map(([operation, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{operation.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className={`text-sm ${getPerformanceColor(data.efficiency, 100, 200)}`}>
                      {data.efficiency.toFixed(1)} 
                      {operation.includes('passenger') ? ' pax/h/gate' : 
                       operation.includes('cargo') ? ' t/h' : 
                       operation.includes('traffic') ? ' ops/h' : ' rate'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-green-400">
                        Throughput: {formatNumber(data.throughput)} 
                        {operation.includes('passenger') ? ' pax' : 
                         operation.includes('cargo') ? ' t' : 
                         operation.includes('traffic') ? ' flights' : 
                         operation.includes('maintenance') ? ' aircraft' : ' units'}
                      </div>
                      <div className="text-orange-400">
                        {operation.includes('traffic') ? 'Avg Delay: ' : 'Wait Time: '}
                        {data.averageWaitTime || data.averageDelay || data.averageTurnaround}
                        {operation.includes('passenger') ? 'min' : 'h'}
                      </div>
                      <div className="text-blue-400">
                        Utilization: {formatPercentage(data.gateUtilization || data.facilityUtilization || data.runwayUtilization)}
                      </div>
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

        {/* Flight Conditions & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              Flight Conditions Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{aviationData.flightConditions.windSpeed.toFixed(1)} kn</div>
                <div className="text-blue-300 text-sm">Wind Speed</div>
                <div className="text-gray-400 text-xs mt-1">{aviationData.flightConditions.visibility.toFixed(1)} km visibility</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(aviationData.flightConditions.safetyIndex)}</div>
                <div className="text-green-300 text-sm">Safety Index</div>
                <div className="text-gray-400 text-xs mt-1">{aviationData.flightConditions.temperature.toFixed(1)}°C temp</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Weather Conditions</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Global Weather</span>
                  <span className="text-green-400">{formatPercentage(aviationData.flightConditions.globalWeather)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Pressure</span>
                  <span className="text-blue-400">{aviationData.flightConditions.pressure.toFixed(1)} hPa</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cloud Cover</span>
                  <span className="text-gray-400">{formatPercentage(aviationData.flightConditions.cloudCover)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Turbulence</span>
                  <span className="text-yellow-400">{formatPercentage(aviationData.flightConditions.turbulenceLevel)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Storm Activity</span>
                  <span className="text-red-400">{formatPercentage(aviationData.flightConditions.stormActivity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Weather Delays</span>
                  <span className="text-orange-400">{formatPercentage(aviationData.flightConditions.weatherDelays)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(aviationData.flightConditions.environmentalCompliance)}</div>
                <div className="text-slate-300">Environmental Compliance</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatPercentage(aviationData.flightConditions.noiseReduction)}</div>
                <div className="text-slate-300">Noise Reduction</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Aviation Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(aviationData.sustainabilityMetrics.fuelEfficiency)}</div>
                <div className="text-green-300 text-sm">Fuel Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">improvement rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(aviationData.sustainabilityMetrics.emissionReduction)}</div>
                <div className="text-blue-300 text-sm">Emission Reduction</div>
                <div className="text-gray-400 text-xs mt-1">vs baseline</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Fuels</span>
                  <span className="text-green-400">{formatPercentage(aviationData.sustainabilityMetrics.sustainableFuels)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Noise Reduction</span>
                  <span className="text-blue-400">{formatPercentage(aviationData.sustainabilityMetrics.noiseReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Reduction</span>
                  <span className="text-purple-400">{formatPercentage(aviationData.sustainabilityMetrics.wasteReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Conservation</span>
                  <span className="text-cyan-400">{formatPercentage(aviationData.sustainabilityMetrics.waterConservation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Carbon Neutral Airports</span>
                  <span className="text-emerald-400">{formatPercentage(aviationData.sustainabilityMetrics.carbonNeutralAirports)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Electric Ground Support</span>
                  <span className="text-indigo-400">{formatPercentage(aviationData.sustainabilityMetrics.electricGroundSupport)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatNumber(aviationData.sustainabilityMetrics.carbonOffset)}</div>
                <div className="text-slate-300">Carbon Offset (t CO₂)</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatCurrency(aviationData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Sustainability Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Routes & Innovation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              Flight Routes Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(aviationData.flightRoutes).map(([route, data], index) => (
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
                    <span className="text-green-400 text-sm">€{data.fuelCost.toFixed(0)}/h</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Flights: {formatNumber(data.flightOperations)}</div>
                      <div className="text-purple-400">
                        Load: {formatPercentage(route.includes('cargo') ? data.cargoLoad : data.passengerLoad)}
                      </div>
                      <div className="text-cyan-400">Distance: {formatNumber(data.averageDistance)} km</div>
                    </div>
                    <div>
                      <div className="text-green-400">Flight Time: {data.flightTime.toFixed(1)}h</div>
                      <div className="text-orange-400">On-Time: {formatPercentage(data.onTimePerformance)}</div>
                      <div className="text-red-400">Delays: {formatPercentage(data.delayRate)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              Aviation Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Optimization</span>
                  <span className="text-green-400">{formatPercentage(aviationData.innovationTrends.aiOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Predictive Maintenance</span>
                  <span className="text-blue-400">{formatPercentage(aviationData.innovationTrends.predictiveMaintenance)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Biometric Security</span>
                  <span className="text-purple-400">{formatPercentage(aviationData.innovationTrends.biometricSecurity)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Baggage</span>
                  <span className="text-cyan-400">{formatPercentage(aviationData.innovationTrends.smartBaggage)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Fuels</span>
                  <span className="text-emerald-400">{formatPercentage(aviationData.innovationTrends.sustainableFuels)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Towers</span>
                  <span className="text-pink-400">{formatPercentage(aviationData.innovationTrends.digitalTowers)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Autonomous Flying</span>
                  <span className="text-orange-400">{formatPercentage(aviationData.innovationTrends.autonomousFlying)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Urban Air Mobility</span>
                  <span className="text-indigo-400">{formatPercentage(aviationData.innovationTrends.urbanAirMobility)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Electric Aircraft</span>
                  <span className="text-lime-400">{formatPercentage(aviationData.innovationTrends.electricAircraft)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Spaceplane Development</span>
                  <span className="text-violet-400">{formatPercentage(aviationData.innovationTrends.spaceplaneDevelopment)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aviation Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Aviation Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {aviationData.aviationAlerts.map((alert, index) => (
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