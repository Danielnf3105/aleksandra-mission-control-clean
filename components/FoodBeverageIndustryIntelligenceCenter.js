// Food & Beverage Industry Intelligence Center - Restaurant Operations, Food Supply Chain, Safety Monitoring & Culinary Analytics
import { useState, useEffect } from 'react';
import { ChefHat, Utensils, Coffee, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Leaf } from 'lucide-react';

export default function FoodBeverageIndustryIntelligenceCenter() {
  const [foodData, setFoodData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalMarketValue: 4567890123456, // EUR
      dailyMealsServed: 567890123,
      totalRestaurants: 23456789,
      foodServiceRevenue: 1234567890123,
      beverageMarketSize: 987654321098,
      organicFoodGrowth: 23.4, // percentage
      plantBasedMarket: 345678901,
      foodWasteReduction: 18.7,
      sustainabilityIndex: 67.8,
      employeeCount: 234567890,
      averageMealPrice: 23.45,
      foodSafetyScore: 94.2
    },
    majorFoodBrands: [
      {
        brand: 'McDonald\'s',
        category: 'Quick Service Restaurant',
        revenue: 23456789012, // EUR annual
        locations: 39198,
        countries: 118,
        dailyCustomers: 69000000,
        menuItems: 145,
        sustainabilityScore: 7.8,
        digitalOrdersPercentage: 67.8,
        averageOrderValue: 8.90,
        employeeCount: 200000,
        marketShare: 12.4
      },
      {
        brand: 'Nestlé',
        category: 'Food Manufacturing',
        revenue: 84567890123,
        locations: 2000,
        countries: 186,
        dailyCustomers: 1000000000,
        menuItems: 2000,
        sustainabilityScore: 8.9,
        digitalOrdersPercentage: 34.6,
        averageOrderValue: 45.67,
        employeeCount: 273000,
        marketShare: 8.9
      },
      {
        brand: 'Starbucks',
        category: 'Coffee Chain',
        revenue: 29876543210,
        locations: 33833,
        countries: 80,
        dailyCustomers: 100000000,
        menuItems: 87,
        sustainabilityScore: 8.7,
        digitalOrdersPercentage: 78.9,
        averageOrderValue: 6.75,
        employeeCount: 383000,
        marketShare: 6.7
      },
      {
        brand: 'PepsiCo',
        category: 'Beverage Manufacturing',
        revenue: 79012345678,
        locations: 755,
        countries: 200,
        dailyCustomers: 900000000,
        menuItems: 500,
        sustainabilityScore: 7.9,
        digitalOrdersPercentage: 23.4,
        averageOrderValue: 2.34,
        employeeCount: 291000,
        marketShare: 7.8
      }
    ],
    restaurantOperations: {
      chainRestaurants: [
        {
          chain: 'McDonald\'s',
          avgWaitTime: 3.2, // minutes
          orderAccuracy: 94.7, // percentage
          customerSatisfaction: 8.1,
          turnoverRate: 156.8, // percentage annually
          foodCost: 32.4, // percentage of revenue
          laborCost: 28.9,
          digitalOrders: 67.8,
          deliveryOrders: 34.6
        },
        {
          chain: 'KFC',
          avgWaitTime: 4.1,
          orderAccuracy: 91.3,
          customerSatisfaction: 7.9,
          turnoverRate: 142.7,
          foodCost: 35.1,
          laborCost: 31.2,
          digitalOrders: 52.3,
          deliveryOrders: 29.8
        },
        {
          chain: 'Subway',
          avgWaitTime: 2.8,
          orderAccuracy: 96.2,
          customerSatisfaction: 8.3,
          turnoverRate: 134.5,
          foodCost: 29.7,
          laborCost: 26.8,
          digitalOrders: 41.2,
          deliveryOrders: 18.9
        }
      ],
      performanceMetrics: {
        avgRevenuePer: 1234567, // EUR per restaurant
        profitMargin: 15.7, // percentage
        inventoryTurnover: 24.6, // times per year
        wastePercentage: 8.9,
        energyEfficiency: 78.3,
        waterUsage: 234567, // liters per day avg
        carbonFootprint: 12.4 // kg CO2 per meal
      }
    },
    foodSafety: {
      inspectionScores: {
        excellent: 67.8, // percentage of restaurants
        good: 23.4,
        fair: 6.7,
        poor: 2.1
      },
      violations: {
        temperature: 23.4, // percentage of violations
        sanitation: 34.6,
        pest: 12.8,
        employee: 18.9,
        equipment: 10.3
      },
      recalls: {
        monthly: 12,
        value: 23456789, // EUR worth
        unitsAffected: 234567890,
        topCategories: ['Dairy', 'Meat', 'Vegetables', 'Packaged Foods']
      },
      traceability: {
        farmToTable: 78.9,
        blockchainAdoption: 23.4,
        realTimeTracking: 45.6,
        qualityAssurance: 89.7
      }
    },
    beverageAnalytics: {
      categories: [
        {
          category: 'Coffee',
          marketShare: 34.7,
          revenue: 234567890123,
          growth: 8.9,
          consumers: 2300000000,
          avgConsumption: 3.2, // cups per day
          premiumSegment: 45.6
        },
        {
          category: 'Soft Drinks',
          marketShare: 28.9,
          revenue: 198765432109,
          growth: 2.1,
          consumers: 3400000000,
          avgConsumption: 2.1,
          premiumSegment: 23.4
        },
        {
          category: 'Alcoholic Beverages',
          marketShare: 23.4,
          revenue: 167890123456,
          growth: 5.7,
          consumers: 1800000000,
          avgConsumption: 1.3,
          premiumSegment: 67.8
        },
        {
          category: 'Energy Drinks',
          marketShare: 8.9,
          revenue: 67890123456,
          growth: 23.4,
          consumers: 890000000,
          avgConsumption: 0.8,
          premiumSegment: 78.9
        },
        {
          category: 'Plant-based Beverages',
          marketShare: 4.1,
          revenue: 34567890123,
          growth: 67.8,
          consumers: 456000000,
          avgConsumption: 0.9,
          premiumSegment: 89.3
        }
      ],
      trends: {
        healthConscious: 78.9,
        sustainability: 67.8,
        functionalBeverages: 56.7,
        craftMovement: 45.6,
        lowAlcohol: 34.5,
        personalizedNutrition: 28.9
      }
    },
    culinaryTrends: {
      popularCuisines: [
        { cuisine: 'Italian', popularity: 89.7, growth: 5.6, avgPrice: 28.90 },
        { cuisine: 'Chinese', popularity: 87.3, growth: 8.2, avgPrice: 22.45 },
        { cuisine: 'Mexican', popularity: 78.9, growth: 12.4, avgPrice: 18.75 },
        { cuisine: 'Japanese', popularity: 67.8, growth: 15.7, avgPrice: 35.60 },
        { cuisine: 'Indian', popularity: 56.7, growth: 18.9, avgPrice: 21.30 },
        { cuisine: 'Mediterranean', popularity: 54.3, growth: 22.1, avgPrice: 32.40 }
      ],
      dietaryPreferences: {
        plantBased: 23.4,
        glutenFree: 18.9,
        keto: 12.7,
        vegan: 8.9,
        paleo: 6.7,
        lowCarb: 15.4,
        organic: 34.6,
        localSourced: 45.7
      },
      cookingMethods: {
        airFrying: 67.8,
        fermentation: 34.6,
        smokingBarbecue: 56.7,
        sousvide: 23.4,
        rawFood: 12.8,
        molecularGastronomy: 5.6
      }
    },
    supplyChain: {
      sourceRegions: {
        northAmerica: 34.7,
        europe: 28.9,
        asia: 23.4,
        southAmerica: 8.9,
        africa: 3.2,
        oceania: 0.9
      },
      logistics: {
        coldChainEfficiency: 89.7,
        spoilageRate: 8.9,
        deliveryTimelines: 2.3, // days average
        inventoryAccuracy: 94.2,
        transportationCosts: 12.4, // percentage of total cost
        sustainablePackaging: 45.6,
        localSourcing: 67.8
      },
      sustainability: {
        organicProduction: 23.4,
        fairTrade: 18.9,
        regenerativeAgriculture: 12.7,
        carbonNeutral: 8.9,
        waterConservation: 67.8,
        biodiversityProtection: 34.6,
        zeroWaste: 23.1
      }
    },
    nutritionalIntelligence: {
      healthMetrics: {
        calorieAwareness: 78.9,
        proteinContent: 67.8,
        vitaminEnrichment: 56.7,
        reducedSodium: 45.6,
        sugarReduction: 89.3,
        additiveFree: 34.2,
        superfoods: 28.9,
        functionalFoods: 23.4
      },
      demographicPreferences: {
        genZ: { healthFocus: 89.7, plantBased: 34.6, convenience: 78.9 },
        millennials: { sustainability: 67.8, experiences: 89.3, premium: 45.6 },
        genX: { familyMeals: 78.9, valueForMoney: 67.8, traditional: 56.7 },
        boomers: { healthSupplements: 56.7, simpleIngredients: 78.9, comfort: 67.8 }
      }
    },
    foodAlerts: [
      {
        type: 'CRITICAL',
        category: 'Food Safety Recall',
        message: 'Listeria contamination detected in dairy products - 2.3M units recalled across 12 countries',
        region: 'Europe',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:42',
        recommendations: ['Immediate recall', 'Customer notification', 'Supply chain audit', 'Health monitoring']
      },
      {
        type: 'WARNING',
        category: 'Supply Chain Disruption',
        message: 'Extreme weather affecting coffee bean harvests - 45% price increase expected',
        region: 'Central America',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:38',
        recommendations: ['Alternative sourcing', 'Inventory stockpiling', 'Price adjustments', 'Supplier diversification']
      },
      {
        type: 'SUCCESS',
        category: 'Sustainability Achievement',
        message: 'Plant-based menu items increase customer satisfaction by 34% and reduce carbon footprint',
        region: 'Global',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:35',
        recommendations: ['Menu expansion', 'Marketing campaign', 'Supplier partnerships', 'Nutrition labeling']
      },
      {
        type: 'INFO',
        category: 'Market Trend',
        message: 'Ghost kitchens and delivery-only concepts grow 156% - reshaping restaurant industry',
        region: 'North America',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:30',
        recommendations: ['Market analysis', 'Business model evaluation', 'Technology investment', 'Partnership opportunities']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFoodData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dailyMealsServed: Math.max(500000000, Math.min(600000000, prev.industryOverview.dailyMealsServed + Math.floor((Math.random() - 0.5) * 10000000)))
        },
        restaurantOperations: {
          ...prev.restaurantOperations,
          chainRestaurants: prev.restaurantOperations.chainRestaurants.map(chain => ({
            ...chain,
            avgWaitTime: Math.max(2.0, Math.min(5.0, chain.avgWaitTime + (Math.random() - 0.5) * 0.3))
          }))
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
      case 'Quick Service Restaurant': return 'text-orange-400 bg-orange-400/20';
      case 'Food Manufacturing': return 'text-blue-400 bg-blue-400/20';
      case 'Coffee Chain': return 'text-amber-400 bg-amber-400/20';
      case 'Beverage Manufacturing': return 'text-cyan-400 bg-cyan-400/20';
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
    <div className="h-full bg-gradient-to-br from-amber-900 via-slate-900 to-orange-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-amber-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Food & Beverage Industry Intelligence Center</h1>
              <p className="text-amber-300">Restaurant operations, food supply chain, safety monitoring & culinary analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-amber-400">{foodData.currentTime}</div>
            <div className="text-amber-300">Food Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-amber-400 mr-2" />
                Market Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{formatCurrency(foodData.industryOverview.globalMarketValue)}</div>
            <div className="text-amber-300 text-sm">Restaurants: {formatNumber(foodData.industryOverview.totalRestaurants)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Utensils className="w-5 h-5 text-green-400 mr-2" />
                Daily Meals
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(foodData.industryOverview.dailyMealsServed)}</div>
            <div className="text-green-300 text-sm">Avg Price: €{foodData.industryOverview.averageMealPrice}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Coffee className="w-5 h-5 text-blue-400 mr-2" />
                Beverage Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(foodData.industryOverview.beverageMarketSize)}</div>
            <div className="text-blue-300 text-sm">Plant-based: {formatCurrency(foodData.industryOverview.plantBasedMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Leaf className="w-5 h-5 text-emerald-400 mr-2" />
                Organic Growth
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">+{formatPercentage(foodData.industryOverview.organicFoodGrowth)}</div>
            <div className="text-emerald-300 text-sm">Waste Reduction: -{formatPercentage(foodData.industryOverview.foodWasteReduction)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Safety Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(foodData.industryOverview.foodSafetyScore)}</div>
            <div className="text-purple-300 text-sm">Sustainability: {formatPercentage(foodData.industryOverview.sustainabilityIndex)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-orange-400 mr-2" />
                Employment
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(foodData.industryOverview.employeeCount)}</div>
            <div className="text-orange-300 text-sm">Food Service: {formatCurrency(foodData.industryOverview.foodServiceRevenue)}</div>
          </div>
        </div>

        {/* Major Food Brands */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <ChefHat className="w-5 h-5 text-amber-400 mr-2" />
            Major Food & Beverage Brands Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Brand</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Locations</th>
                  <th className="text-center p-3 text-slate-300">Daily Customers</th>
                  <th className="text-center p-3 text-slate-300">Digital Orders</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {foodData.majorFoodBrands.map((brand, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{brand.brand}</div>
                      <div className="text-slate-400 text-xs">{brand.countries} countries • {formatNumber(brand.employeeCount)} employees • €{brand.averageOrderValue.toFixed(2)} AOV</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(brand.category)}`}>
                        {brand.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(brand.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(brand.locations)}</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(brand.dailyCustomers)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(brand.digitalOrdersPercentage, 50, 70)}`}>
                      {formatPercentage(brand.digitalOrdersPercentage)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(brand.sustainabilityScore * 10, 70, 80)}`}>
                      {brand.sustainabilityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Restaurant Operations & Beverage Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Utensils className="w-5 h-5 text-orange-400 mr-2" />
              Restaurant Operations Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatCurrency(foodData.restaurantOperations.performanceMetrics.avgRevenuePer)}</div>
                <div className="text-orange-300 text-sm">Avg Revenue</div>
                <div className="text-gray-400 text-xs mt-1">Per Restaurant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(foodData.restaurantOperations.performanceMetrics.profitMargin)}</div>
                <div className="text-green-300 text-sm">Profit Margin</div>
                <div className="text-gray-400 text-xs mt-1">Industry Average</div>
              </div>
            </div>
            <div className="space-y-4">
              {foodData.restaurantOperations.chainRestaurants.map((chain, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{chain.chain}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        ★{chain.customerSatisfaction.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{chain.avgWaitTime.toFixed(1)} min</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Accuracy: {formatPercentage(chain.orderAccuracy)}</div>
                      <div className="text-purple-400">Food Cost: {formatPercentage(chain.foodCost)}</div>
                      <div className="text-cyan-400">Digital Orders: {formatPercentage(chain.digitalOrders)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Labor Cost: {formatPercentage(chain.laborCost)}</div>
                      <div className="text-yellow-400">Turnover: {formatPercentage(chain.turnoverRate)}</div>
                      <div className="text-emerald-400">Delivery: {formatPercentage(chain.deliveryOrders)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Coffee className="w-5 h-5 text-blue-400 mr-2" />
              Beverage Industry Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatCurrency(foodData.beverageAnalytics.categories[0].revenue)}</div>
                <div className="text-blue-300 text-sm">Coffee Revenue</div>
                <div className="text-gray-400 text-xs mt-1">{formatPercentage(foodData.beverageAnalytics.categories[0].marketShare)} Market Share</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">+{formatPercentage(foodData.beverageAnalytics.categories[4].growth)}</div>
                <div className="text-green-300 text-sm">Plant-based Growth</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(foodData.beverageAnalytics.categories[4].consumers)} consumers</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Beverage Categories</h4>
              {foodData.beverageAnalytics.categories.slice(0, 4).map((category, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{category.category}</div>
                    <div className="text-slate-400 text-xs">{formatNumber(category.consumers)} consumers • {formatPercentage(category.premiumSegment)} premium</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatPercentage(category.marketShare)}</div>
                    <div className="text-blue-400">+{formatPercentage(category.growth)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Beverage Trends</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Health Conscious</span>
                  <span className="text-green-400">{formatPercentage(foodData.beverageAnalytics.trends.healthConscious)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainability</span>
                  <span className="text-blue-400">{formatPercentage(foodData.beverageAnalytics.trends.sustainability)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Functional</span>
                  <span className="text-purple-400">{formatPercentage(foodData.beverageAnalytics.trends.functionalBeverages)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Craft Movement</span>
                  <span className="text-orange-400">{formatPercentage(foodData.beverageAnalytics.trends.craftMovement)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food Safety & Culinary Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
              Food Safety Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(foodData.foodSafety.inspectionScores.excellent)}</div>
                <div className="text-red-300 text-sm">Excellent Scores</div>
                <div className="text-gray-400 text-xs mt-1">Restaurant Inspections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(foodData.foodSafety.traceability.farmToTable)}</div>
                <div className="text-green-300 text-sm">Farm-to-Table</div>
                <div className="text-gray-400 text-xs mt-1">Traceability Score</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Safety Violations</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sanitation</span>
                  <span className="text-red-400">{formatPercentage(foodData.foodSafety.violations.sanitation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Temperature</span>
                  <span className="text-orange-400">{formatPercentage(foodData.foodSafety.violations.temperature)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Employee</span>
                  <span className="text-yellow-400">{formatPercentage(foodData.foodSafety.violations.employee)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Pest Control</span>
                  <span className="text-blue-400">{formatPercentage(foodData.foodSafety.violations.pest)}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Monthly Recalls</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-red-400">Count: {foodData.foodSafety.recalls.monthly}</div>
                  <div className="text-orange-400">Value: {formatCurrency(foodData.foodSafety.recalls.value)}</div>
                </div>
                <div>
                  <div className="text-purple-400">Units: {formatNumber(foodData.foodSafety.recalls.unitsAffected)}</div>
                  <div className="text-slate-300">Categories: {foodData.foodSafety.recalls.topCategories.slice(0, 2).join(', ')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Culinary Trends Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{formatPercentage(foodData.culinaryTrends.popularCuisines[0].popularity)}</div>
                <div className="text-yellow-300 text-sm">Italian Cuisine</div>
                <div className="text-gray-400 text-xs mt-1">Most Popular</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(foodData.culinaryTrends.dietaryPreferences.organic)}</div>
                <div className="text-green-300 text-sm">Organic Preference</div>
                <div className="text-gray-400 text-xs mt-1">Consumer Demand</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Popular Cuisines</h4>
              {foodData.culinaryTrends.popularCuisines.slice(0, 4).map((cuisine, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{cuisine.cuisine}</div>
                    <div className="text-slate-400 text-xs">€{cuisine.avgPrice.toFixed(2)} avg price</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatPercentage(cuisine.popularity)}</div>
                    <div className="text-blue-400">+{formatPercentage(cuisine.growth)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Dietary Preferences</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Local Sourced</span>
                  <span className="text-green-400">{formatPercentage(foodData.culinaryTrends.dietaryPreferences.localSourced)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Plant Based</span>
                  <span className="text-blue-400">{formatPercentage(foodData.culinaryTrends.dietaryPreferences.plantBased)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Gluten Free</span>
                  <span className="text-purple-400">{formatPercentage(foodData.culinaryTrends.dietaryPreferences.glutenFree)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Low Carb</span>
                  <span className="text-orange-400">{formatPercentage(foodData.culinaryTrends.dietaryPreferences.lowCarb)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Food & Beverage Industry Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {foodData.foodAlerts.map((alert, index) => (
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

        {/* Supply Chain & Nutritional Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatPercentage(foodData.supplyChain.logistics.coldChainEfficiency)}</div>
                <div className="text-emerald-300 text-sm">Cold Chain</div>
                <div className="text-gray-400 text-xs mt-1">Efficiency Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(foodData.supplyChain.logistics.localSourcing)}</div>
                <div className="text-cyan-300 text-sm">Local Sourcing</div>
                <div className="text-gray-400 text-xs mt-1">Supply Chain</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Source Regions</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">North America</span>
                  <span className="text-blue-400">{formatPercentage(foodData.supplyChain.sourceRegions.northAmerica)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Europe</span>
                  <span className="text-green-400">{formatPercentage(foodData.supplyChain.sourceRegions.europe)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Asia</span>
                  <span className="text-purple-400">{formatPercentage(foodData.supplyChain.sourceRegions.asia)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">South America</span>
                  <span className="text-orange-400">{formatPercentage(foodData.supplyChain.sourceRegions.southAmerica)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Sustainability Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Water Conservation</span>
                  <span className="text-green-400">{formatPercentage(foodData.supplyChain.sustainability.waterConservation)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Organic Production</span>
                  <span className="text-blue-400">{formatPercentage(foodData.supplyChain.sustainability.organicProduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Fair Trade</span>
                  <span className="text-purple-400">{formatPercentage(foodData.supplyChain.sustainability.fairTrade)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Zero Waste</span>
                  <span className="text-orange-400">{formatPercentage(foodData.supplyChain.sustainability.zeroWaste)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Leaf className="w-5 h-5 text-green-400 mr-2" />
              Nutritional Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(foodData.nutritionalIntelligence.healthMetrics.sugarReduction)}</div>
                <div className="text-green-300 text-sm">Sugar Reduction</div>
                <div className="text-gray-400 text-xs mt-1">Consumer Demand</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(foodData.nutritionalIntelligence.healthMetrics.calorieAwareness)}</div>
                <div className="text-blue-300 text-sm">Calorie Awareness</div>
                <div className="text-gray-400 text-xs mt-1">Health Focus</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Demographic Preferences</h4>
              {Object.entries(foodData.nutritionalIntelligence.demographicPreferences).map(([demo, prefs], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="text-white text-sm font-medium mb-1">{demo.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {Object.entries(prefs).map(([key, value], prefIndex) => (
                      <div key={prefIndex} className="text-center">
                        <div className="text-slate-400">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                        <div className="text-green-400">{formatPercentage(value)}</div>
                      </div>
                    ))}
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