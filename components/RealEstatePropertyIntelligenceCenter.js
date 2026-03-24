// Real Estate & Property Intelligence Center - Property Management, Real Estate Analytics, Construction Monitoring & Facility Operations
import { useState, useEffect } from 'react';
import { Building, Home, TrendingUp, TrendingDown, Users, Wrench, AlertTriangle, CheckCircle, Target, BarChart3, MapPin } from 'lucide-react';

export default function RealEstatePropertyIntelligenceCenter() {
  const [propertyData, setPropertyData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    portfolioOverview: {
      totalProperties: 12456,
      totalValue: 2345678900, // EUR
      occupancyRate: 92.4,
      monthlyRental: 23456789,
      averageRent: 1234, // EUR per m²
      maintenanceRequests: 234,
      propertyTypes: {
        residential: 67.8,
        commercial: 23.4,
        industrial: 5.6,
        retail: 3.2
      },
      totalArea: 1234567, // m²
      energyEfficiency: 78.9,
      smartBuildingFeatures: 45.6,
      sustainabilityRating: 8.3
    },
    propertyPortfolio: [
      {
        property: 'Avenidas Novas Office Tower',
        type: 'Commercial',
        location: 'Lisbon',
        floors: 25,
        area: 45678, // m²
        value: 87654321,
        occupancy: 96.7,
        monthlyRent: 456789,
        energyRating: 'A',
        tenants: 23,
        maintenanceScore: 9.2,
        smartFeatures: ['IoT Sensors', 'Smart HVAC', 'Access Control'],
        issues: 2
      },
      {
        property: 'Porto Business Park',
        type: 'Commercial',
        location: 'Porto',
        floors: 8,
        area: 34567,
        value: 65432109,
        occupancy: 89.3,
        monthlyRent: 345678,
        energyRating: 'B+',
        tenants: 18,
        maintenanceScore: 8.7,
        smartFeatures: ['Smart Lighting', 'Security Systems'],
        issues: 5
      },
      {
        property: 'Residential Complex Cascais',
        type: 'Residential',
        location: 'Cascais',
        floors: 6,
        area: 23456,
        value: 54321098,
        occupancy: 94.8,
        monthlyRent: 234567,
        energyRating: 'A+',
        tenants: 89,
        maintenanceScore: 9.5,
        smartFeatures: ['Smart Meters', 'App Integration', 'Automated Systems'],
        issues: 1
      },
      {
        property: 'Industrial Warehouse Aveiro',
        type: 'Industrial',
        location: 'Aveiro',
        floors: 2,
        area: 67890,
        value: 43210987,
        occupancy: 87.6,
        monthlyRent: 123456,
        energyRating: 'B',
        tenants: 4,
        maintenanceScore: 8.1,
        smartFeatures: ['Automated Loading', 'Climate Control'],
        issues: 8
      }
    ],
    marketAnalytics: {
      marketTrends: {
        averagePrice: 2345, // EUR per m²
        priceGrowth: 12.4, // percentage YoY
        transactionVolume: 234567890, // EUR monthly
        demandIndex: 78.9,
        supplyIndex: 67.3,
        investmentYield: 6.8,
        marketSentiment: 'BULLISH'
      },
      regionalData: [
        {
          region: 'Lisbon Metro',
          avgPrice: 3456,
          priceGrowth: 15.7,
          volume: 123456789,
          inventory: 2345,
          daysOnMarket: 45,
          demandScore: 92.4
        },
        {
          region: 'Porto Metro',
          avgPrice: 2456,
          priceGrowth: 11.2,
          volume: 87654321,
          inventory: 1876,
          daysOnMarket: 52,
          demandScore: 84.7
        },
        {
          region: 'Algarve',
          avgPrice: 2890,
          priceGrowth: 8.9,
          volume: 56789012,
          inventory: 1234,
          daysOnMarket: 38,
          demandScore: 76.8
        },
        {
          region: 'Central Portugal',
          avgPrice: 1567,
          priceGrowth: 9.4,
          volume: 34567890,
          inventory: 987,
          daysOnMarket: 67,
          demandScore: 65.3
        }
      ]
    },
    facilityManagement: {
      maintenanceOperations: {
        totalRequests: 1234,
        completed: 987,
        inProgress: 156,
        pending: 91,
        averageResolution: 3.4, // days
        urgentIssues: 23,
        preventiveMaintenance: 789,
        correctiveMaintenance: 445
      },
      maintenanceCategories: [
        { category: 'HVAC', requests: 234, avgCost: 456, priority: 'HIGH' },
        { category: 'Plumbing', requests: 189, avgCost: 234, priority: 'MEDIUM' },
        { category: 'Electrical', requests: 167, avgCost: 345, priority: 'HIGH' },
        { category: 'Security', requests: 123, avgCost: 567, priority: 'HIGH' },
        { category: 'Cleaning', requests: 298, avgCost: 123, priority: 'LOW' },
        { category: 'Landscaping', requests: 87, avgCost: 189, priority: 'LOW' }
      ],
      serviceProviders: [
        { provider: 'TechMaint PT', rating: 9.2, responseTime: 2.1, costRating: 8.5, contracts: 45 },
        { provider: 'PropCare Solutions', rating: 8.7, responseTime: 3.2, costRating: 7.9, contracts: 34 },
        { provider: 'FacilityPro', rating: 8.9, responseTime: 2.8, costRating: 8.1, contracts: 28 },
        { provider: 'CleanTech Services', rating: 8.4, responseTime: 4.1, costRating: 9.2, contracts: 67 }
      ]
    },
    constructionProjects: [
      {
        project: 'Luxury Residential Tower - Cascais',
        phase: 'Construction',
        completion: 67.8,
        budget: 45678901,
        spent: 30987654,
        timeline: '18 months',
        contractor: 'BuildTech Portugal',
        units: 89,
        expectedRevenue: 123456789,
        permits: 'APPROVED',
        sustainability: 'BREEAM Excellent'
      },
      {
        project: 'Office Complex Renovation - Porto',
        phase: 'Planning',
        completion: 23.4,
        budget: 23456789,
        spent: 5432109,
        timeline: '12 months',
        contractor: 'RenovaPro',
        units: 34,
        expectedRevenue: 56789012,
        permits: 'PENDING',
        sustainability: 'LEED Gold'
      },
      {
        project: 'Shopping Center Expansion - Lisbon',
        phase: 'Pre-Construction',
        completion: 12.1,
        budget: 87654321,
        spent: 10987654,
        timeline: '24 months',
        contractor: 'MegaBuild SA',
        units: 156,
        expectedRevenue: 234567890,
        permits: 'APPROVED',
        sustainability: 'Green Building'
      }
    ],
    smartBuilding: {
      iotDevices: {
        total: 23456,
        online: 22189,
        sensors: 12345,
        actuators: 6789,
        controllers: 3456,
        gateways: 866,
        dataPoints: 2345678,
        batteryLow: 45
      },
      energyManagement: {
        totalConsumption: 234567, // kWh/month
        renewableGeneration: 89012, // kWh/month
        costSavings: 45678, // EUR/month
        carbonReduction: 123456, // kg CO2/month
        peakDemandReduction: 23.4, // percentage
        energyEfficiencyImprovement: 18.7,
        smartMeters: 1234,
        solarPanels: 456
      },
      buildingAutomation: [
        { system: 'HVAC Control', buildings: 45, efficiency: 87.9, savings: 23456 },
        { system: 'Lighting Management', buildings: 67, efficiency: 92.3, savings: 12345 },
        { system: 'Security Access', buildings: 78, efficiency: 98.7, savings: 5678 },
        { system: 'Water Management', buildings: 34, efficiency: 85.4, savings: 9876 },
        { system: 'Elevator Control', buildings: 23, efficiency: 94.1, savings: 3456 },
        { system: 'Fire Safety', buildings: 89, efficiency: 99.2, savings: 1234 }
      ]
    },
    tenantExperience: {
      satisfaction: {
        overall: 8.4, // out of 10
        facilities: 8.7,
        maintenance: 7.9,
        security: 9.1,
        amenities: 8.2,
        responsiveness: 8.6,
        valueForMoney: 7.8
      },
      serviceRequests: {
        total: 2345,
        resolved: 2156,
        avgResolution: 2.8, // days
        satisfactionRating: 8.3,
        repeatRequests: 12.4, // percentage
        digitalRequests: 78.9 // percentage via app
      },
      amenities: [
        { amenity: 'Fitness Center', usage: 67.8, satisfaction: 8.9, capacity: 45 },
        { amenity: 'Conference Rooms', usage: 89.3, satisfaction: 9.2, capacity: 234 },
        { amenity: 'Parking', usage: 92.1, satisfaction: 8.1, capacity: 567 },
        { amenity: 'Food Court', usage: 54.7, satisfaction: 7.8, capacity: 123 },
        { amenity: 'Coworking Space', usage: 73.4, satisfaction: 8.7, capacity: 89 },
        { amenity: 'Rooftop Garden', usage: 34.6, satisfaction: 9.4, capacity: 67 }
      ],
      digitalServices: {
        mobileAppUsers: 7890,
        appRating: 4.3, // out of 5
        digitalPayments: 89.7, // percentage
        serviceBookings: 2345,
        notifications: 12345,
        feedbackSubmissions: 456
      }
    },
    financialPerformance: {
      revenue: {
        totalRental: 234567890, // EUR/year
        parkingRevenue: 12345678,
        amenityRevenue: 5678901,
        utilityRecovery: 8765432,
        otherIncome: 3456789,
        totalRevenue: 264814690,
        revenueGrowth: 8.7 // percentage YoY
      },
      expenses: {
        maintenance: 45678901,
        utilities: 23456789,
        security: 12345678,
        insurance: 8765432,
        propertyTax: 15678901,
        management: 9876543,
        marketing: 3456789,
        totalExpenses: 119259033,
        expenseRatio: 45.0 // percentage of revenue
      },
      profitability: {
        netOperatingIncome: 145555657,
        ebitda: 167890123,
        capEx: 23456789,
        netIncome: 122133368,
        roi: 12.4, // percentage
        capRate: 6.8, // percentage
        cashOnCashReturn: 9.7 // percentage
      }
    },
    riskManagement: {
      propertyRisks: [
        { risk: 'Market Volatility', probability: 34.6, impact: 'MEDIUM', mitigation: 'Diversification' },
        { risk: 'Interest Rate Changes', probability: 67.8, impact: 'HIGH', mitigation: 'Fixed-rate financing' },
        { risk: 'Tenant Default', probability: 12.4, impact: 'MEDIUM', mitigation: 'Credit screening' },
        { risk: 'Natural Disasters', probability: 5.7, impact: 'HIGH', mitigation: 'Insurance coverage' },
        { risk: 'Regulatory Changes', probability: 23.9, impact: 'MEDIUM', mitigation: 'Compliance monitoring' }
      ],
      insurance: {
        totalCoverage: 2345678901, // EUR
        premiumCost: 12345678, // EUR/year
        claims: 234567,
        claimsRatio: 1.9, // percentage
        deductible: 123456,
        coverageTypes: ['Property', 'Liability', 'Business Interruption', 'Cyber']
      },
      compliance: {
        buildingCodes: 98.7, // compliance percentage
        safetyInspections: 94.2,
        environmentalCompliance: 96.8,
        accessibilityCompliance: 91.5,
        fireCodeCompliance: 99.1,
        pendingViolations: 12
      }
    },
    propertyAlerts: [
      {
        type: 'CRITICAL',
        category: 'Maintenance Emergency',
        message: 'HVAC system failure in Avenidas Novas Office Tower - affecting 15 floors, 200+ tenants',
        property: 'Avenidas Novas Office Tower',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:05',
        recommendations: ['Emergency HVAC repair', 'Tenant notifications', 'Temporary cooling solutions']
      },
      {
        type: 'WARNING',
        category: 'Occupancy Drop',
        message: 'Porto Business Park occupancy declined to 89.3% - below target of 92%',
        property: 'Porto Business Park',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:08',
        recommendations: ['Review lease terms', 'Marketing campaign', 'Tenant retention programs']
      },
      {
        type: 'SUCCESS',
        category: 'Energy Efficiency',
        message: 'Cascais Residential Complex achieved 15% energy savings through smart building upgrades',
        property: 'Cascais Residential Complex',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:01',
        recommendations: ['Apply learnings to other properties', 'Document best practices', 'Consider expansion']
      },
      {
        type: 'INFO',
        category: 'Market Update',
        message: 'Lisbon commercial real estate prices increased 15.7% YoY - portfolio value appreciation',
        property: 'Multiple Properties',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '02:55',
        recommendations: ['Update property valuations', 'Consider refinancing opportunities', 'Portfolio optimization']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPropertyData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        portfolioOverview: {
          ...prev.portfolioOverview,
          occupancyRate: Math.max(85.0, Math.min(98.0, prev.portfolioOverview.occupancyRate + (Math.random() - 0.5) * 2)),
          maintenanceRequests: Math.max(150, Math.min(350, prev.portfolioOverview.maintenanceRequests + Math.floor((Math.random() - 0.5) * 20)))
        },
        smartBuilding: {
          ...prev.smartBuilding,
          iotDevices: {
            ...prev.smartBuilding.iotDevices,
            online: Math.max(21000, Math.min(23000, prev.smartBuilding.iotDevices.online + Math.floor((Math.random() - 0.5) * 100)))
          }
        }
      }));
    }, 18000);

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

  const getEnergyRatingColor = (rating) => {
    switch (rating) {
      case 'A+': return 'text-green-500 bg-green-500/20';
      case 'A': return 'text-green-400 bg-green-400/20';
      case 'B+': return 'text-blue-400 bg-blue-400/20';
      case 'B': return 'text-blue-300 bg-blue-300/20';
      case 'C': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
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
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Real Estate & Property Intelligence Center</h1>
              <p className="text-emerald-300">Property management, real estate analytics, construction monitoring & facility operations</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{propertyData.currentTime}</div>
            <div className="text-emerald-300">Property Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Building className="w-5 h-5 text-emerald-400 mr-2" />
                Total Properties
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatNumber(propertyData.portfolioOverview.totalProperties)}</div>
            <div className="text-emerald-300 text-sm">Value: {formatCurrency(propertyData.portfolioOverview.totalValue)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Occupancy Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(propertyData.portfolioOverview.occupancyRate)}</div>
            <div className="text-blue-300 text-sm">Area: {formatNumber(propertyData.portfolioOverview.totalArea)} m²</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Monthly Rental
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(propertyData.portfolioOverview.monthlyRental)}</div>
            <div className="text-green-300 text-sm">Avg: €{propertyData.portfolioOverview.averageRent}/m²</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wrench className="w-5 h-5 text-orange-400 mr-2" />
                Maintenance
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{propertyData.portfolioOverview.maintenanceRequests}</div>
            <div className="text-orange-300 text-sm">Active Requests</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Energy Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(propertyData.portfolioOverview.energyEfficiency)}</div>
            <div className="text-purple-300 text-sm">Sustainability: {propertyData.portfolioOverview.sustainabilityRating.toFixed(1)}/10</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Smart Features
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(propertyData.portfolioOverview.smartBuildingFeatures)}</div>
            <div className="text-cyan-300 text-sm">IoT Devices: {formatNumber(propertyData.smartBuilding.iotDevices.total)}</div>
          </div>
        </div>

        {/* Property Portfolio Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Home className="w-5 h-5 text-emerald-400 mr-2" />
            Property Portfolio Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Property</th>
                  <th className="text-center p-3 text-slate-300">Type</th>
                  <th className="text-center p-3 text-slate-300">Occupancy</th>
                  <th className="text-center p-3 text-slate-300">Monthly Rent</th>
                  <th className="text-center p-3 text-slate-300">Energy Rating</th>
                  <th className="text-center p-3 text-slate-300">Maintenance</th>
                  <th className="text-center p-3 text-slate-300">Issues</th>
                </tr>
              </thead>
              <tbody>
                {propertyData.propertyPortfolio.map((property, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{property.property}</div>
                      <div className="text-slate-400 text-xs">{property.location} • {property.floors} floors • {formatNumber(property.area)} m²</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {property.type}
                      </span>
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(property.occupancy, 85, 92)}`}>
                      {formatPercentage(property.occupancy)}
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(property.monthlyRent)}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getEnergyRatingColor(property.energyRating)}`}>
                        {property.energyRating}
                      </span>
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(property.maintenanceScore * 10, 80, 90)}`}>
                      {property.maintenanceScore.toFixed(1)}
                    </td>
                    <td className={`p-3 text-center font-medium ${property.issues === 0 ? 'text-green-400' : property.issues < 5 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {property.issues}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Analytics & Smart Building */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Real Estate Market Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">€{propertyData.marketAnalytics.marketTrends.averagePrice}</div>
                <div className="text-green-300 text-sm">Average Price/m²</div>
                <div className="text-gray-400 text-xs mt-1">Growth: +{formatPercentage(propertyData.marketAnalytics.marketTrends.priceGrowth)} YoY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(propertyData.marketAnalytics.marketTrends.investmentYield)}</div>
                <div className="text-blue-300 text-sm">Investment Yield</div>
                <div className="text-gray-400 text-xs mt-1">Sentiment: {propertyData.marketAnalytics.marketTrends.marketSentiment}</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Regional Performance</h4>
              {propertyData.marketAnalytics.regionalData.map((region, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{region.region}</div>
                    <div className="text-slate-400 text-xs">€{region.avgPrice}/m² • {region.daysOnMarket} days avg</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">+{formatPercentage(region.priceGrowth)}</div>
                    <div className="text-blue-400">Score: {region.demandScore.toFixed(1)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
              Smart Building Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(propertyData.smartBuilding.iotDevices.online)}</div>
                <div className="text-cyan-300 text-sm">Devices Online</div>
                <div className="text-gray-400 text-xs mt-1">Total: {formatNumber(propertyData.smartBuilding.iotDevices.total)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(propertyData.smartBuilding.energyManagement.costSavings)}</div>
                <div className="text-green-300 text-sm">Monthly Savings</div>
                <div className="text-gray-400 text-xs mt-1">Efficiency: +{formatPercentage(propertyData.smartBuilding.energyManagement.energyEfficiencyImprovement)}</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Building Automation</h4>
              {propertyData.smartBuilding.buildingAutomation.slice(0, 4).map((system, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white text-sm">{system.system}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{system.buildings} bldgs</span>
                    <span className="text-green-400">{formatPercentage(system.efficiency)}</span>
                    <span className="text-orange-400">{formatCurrency(system.savings)}/mo</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Energy Management</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-300">Consumption: {formatNumber(propertyData.smartBuilding.energyManagement.totalConsumption)} kWh/mo</div>
                  <div className="text-slate-300">Renewable Gen: {formatNumber(propertyData.smartBuilding.energyManagement.renewableGeneration)} kWh/mo</div>
                  <div className="text-slate-300">Smart Meters: {propertyData.smartBuilding.energyManagement.smartMeters}</div>
                </div>
                <div>
                  <div className="text-green-400">Peak Reduction: {formatPercentage(propertyData.smartBuilding.energyManagement.peakDemandReduction)}</div>
                  <div className="text-blue-400">Carbon Reduction: {formatNumber(propertyData.smartBuilding.energyManagement.carbonReduction)} kg CO2/mo</div>
                  <div className="text-purple-400">Solar Panels: {propertyData.smartBuilding.energyManagement.solarPanels}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Management & Construction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wrench className="w-5 h-5 text-orange-400 mr-2" />
              Facility Management Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{propertyData.facilityManagement.maintenanceOperations.totalRequests}</div>
                <div className="text-orange-300 text-sm">Total Requests</div>
                <div className="text-gray-400 text-xs mt-1">Resolution: {propertyData.facilityManagement.maintenanceOperations.averageResolution.toFixed(1)} days avg</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{propertyData.facilityManagement.maintenanceOperations.completed}</div>
                <div className="text-green-300 text-sm">Completed</div>
                <div className="text-gray-400 text-xs mt-1">Urgent: {propertyData.facilityManagement.maintenanceOperations.urgentIssues}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Maintenance Categories</h4>
              {propertyData.facilityManagement.maintenanceCategories.slice(0, 4).map((category, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white text-sm">{category.category}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{category.requests} req</span>
                    <span className="text-green-400">€{category.avgCost} avg</span>
                    <span className={`${category.priority === 'HIGH' ? 'text-red-400' : category.priority === 'MEDIUM' ? 'text-yellow-400' : 'text-green-400'}`}>
                      {category.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Service Providers</h4>
              {propertyData.facilityManagement.serviceProviders.slice(0, 3).map((provider, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white text-sm">{provider.provider}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-yellow-400">★{provider.rating.toFixed(1)}</span>
                    <span className="text-blue-400">{provider.responseTime.toFixed(1)}d</span>
                    <span className="text-green-400">{provider.contracts} contracts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Building className="w-5 h-5 text-purple-400 mr-2" />
              Construction Projects Intelligence
            </h3>
            <div className="space-y-4">
              {propertyData.constructionProjects.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{project.project}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {project.phase}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatPercentage(project.completion)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Budget: {formatCurrency(project.budget)}</div>
                      <div className="text-orange-400">Spent: {formatCurrency(project.spent)}</div>
                      <div className="text-purple-400">Timeline: {project.timeline}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Expected Revenue: {formatCurrency(project.expectedRevenue)}</div>
                      <div className="text-cyan-400">Units: {project.units}</div>
                      <div className="text-slate-400">Contractor: {project.contractor}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-1 rounded ${project.permits === 'APPROVED' ? 'text-green-400 bg-green-400/20' : 'text-yellow-400 bg-yellow-400/20'}`}>
                      Permits: {project.permits}
                    </span>
                    <span className="text-emerald-400">{project.sustainability}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Real Estate & Property Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {propertyData.propertyAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Property: {alert.property}</div>
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

        {/* Financial Performance & Tenant Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Financial Performance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(propertyData.financialPerformance.revenue.totalRevenue)}</div>
                <div className="text-green-300 text-sm">Total Revenue</div>
                <div className="text-gray-400 text-xs mt-1">Growth: +{formatPercentage(propertyData.financialPerformance.revenue.revenueGrowth)} YoY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(propertyData.financialPerformance.profitability.roi)}</div>
                <div className="text-blue-300 text-sm">ROI</div>
                <div className="text-gray-400 text-xs mt-1">Cap Rate: {formatPercentage(propertyData.financialPerformance.profitability.capRate)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Revenue Breakdown</h4>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                <span className="text-slate-300 text-sm">Rental Income</span>
                <span className="text-green-400 text-sm">{formatCurrency(propertyData.financialPerformance.revenue.totalRental)}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                <span className="text-slate-300 text-sm">Parking Revenue</span>
                <span className="text-blue-400 text-sm">{formatCurrency(propertyData.financialPerformance.revenue.parkingRevenue)}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                <span className="text-slate-300 text-sm">Utility Recovery</span>
                <span className="text-purple-400 text-sm">{formatCurrency(propertyData.financialPerformance.revenue.utilityRecovery)}</span>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Profitability</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-green-400">NOI: {formatCurrency(propertyData.financialPerformance.profitability.netOperatingIncome)}</div>
                  <div className="text-blue-400">EBITDA: {formatCurrency(propertyData.financialPerformance.profitability.ebitda)}</div>
                </div>
                <div>
                  <div className="text-purple-400">Net Income: {formatCurrency(propertyData.financialPerformance.profitability.netIncome)}</div>
                  <div className="text-orange-400">Expense Ratio: {formatPercentage(propertyData.financialPerformance.expenses.expenseRatio)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              Tenant Experience Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{propertyData.tenantExperience.satisfaction.overall.toFixed(1)}</div>
                <div className="text-blue-300 text-sm">Overall Satisfaction</div>
                <div className="text-gray-400 text-xs mt-1">Scale: 1-10</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(propertyData.tenantExperience.digitalServices.mobileAppUsers)}</div>
                <div className="text-green-300 text-sm">App Users</div>
                <div className="text-gray-400 text-xs mt-1">Rating: {propertyData.tenantExperience.digitalServices.appRating}/5</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Satisfaction Breakdown</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Facilities</span>
                  <span className="text-green-400">{propertyData.tenantExperience.satisfaction.facilities.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Security</span>
                  <span className="text-green-400">{propertyData.tenantExperience.satisfaction.security.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Maintenance</span>
                  <span className="text-yellow-400">{propertyData.tenantExperience.satisfaction.maintenance.toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Value</span>
                  <span className="text-yellow-400">{propertyData.tenantExperience.satisfaction.valueForMoney.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Amenity Usage</h4>
              {propertyData.tenantExperience.amenities.slice(0, 4).map((amenity, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white text-sm">{amenity.amenity}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatPercentage(amenity.usage)}</span>
                    <span className="text-yellow-400">★{amenity.satisfaction.toFixed(1)}</span>
                    <span className="text-slate-400">{amenity.capacity} cap</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}