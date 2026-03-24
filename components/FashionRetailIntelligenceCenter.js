// Fashion & Retail Intelligence Center - E-commerce Analytics, Trend Analysis, Supply Chain Management & Customer Behavior Intelligence
import { useState, useEffect } from 'react';
import { ShoppingBag, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Package } from 'lucide-react';

export default function FashionRetailIntelligenceCenter() {
  const [fashionData, setFashionData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalMarketValue: 2345678901234, // EUR
      dailyTransactions: 45678901,
      totalRetailers: 234567,
      ecommerceGrowth: 18.7, // percentage YoY
      sustainabilityIndex: 67.8,
      digitalPenetration: 78.9,
      mobileCommerce: 56.7,
      socialCommerce: 34.6,
      averageOrderValue: 89.45, // EUR
      conversionRate: 3.8,
      returnRate: 24.6,
      customerLifetimeValue: 456.78,
      inventoryTurnover: 8.2
    },
    majorBrands: [
      {
        brand: 'Zara (Inditex)',
        category: 'Fast Fashion',
        revenue: 23456789012, // EUR annual
        stores: 2248,
        countries: 96,
        onlinePresence: 98.7,
        sustainabilityScore: 6.8,
        inventoryTurnover: 12.4,
        customerSatisfaction: 8.2,
        trendResponse: 14, // days
        marketShare: 12.4,
        socialFollowers: 45678901
      },
      {
        brand: 'H&M',
        category: 'Fast Fashion',
        revenue: 19876543210,
        stores: 4801,
        countries: 75,
        onlinePresence: 94.3,
        sustainabilityScore: 7.4,
        inventoryTurnover: 9.8,
        customerSatisfaction: 7.9,
        trendResponse: 21,
        marketShare: 9.8,
        socialFollowers: 38765432
      },
      {
        brand: 'LVMH',
        category: 'Luxury',
        revenue: 67890123456,
        stores: 4629,
        countries: 82,
        onlinePresence: 89.2,
        sustainabilityScore: 8.1,
        inventoryTurnover: 4.2,
        customerSatisfaction: 9.3,
        trendResponse: 90,
        marketShare: 8.7,
        socialFollowers: 23456789
      },
      {
        brand: 'Uniqlo',
        category: 'Casual Wear',
        revenue: 15432109876,
        stores: 2296,
        countries: 25,
        onlinePresence: 91.7,
        sustainabilityScore: 7.9,
        inventoryTurnover: 7.6,
        customerSatisfaction: 8.6,
        trendResponse: 35,
        marketShare: 6.3,
        socialFollowers: 19876543
      }
    ],
    ecommerceMetrics: {
      platforms: [
        {
          platform: 'Amazon Fashion',
          marketShare: 34.7,
          dailyOrders: 2345678,
          aov: 67.89,
          conversionRate: 4.2,
          returnRate: 18.9,
          customerSatisfaction: 8.1,
          mobileTraffic: 78.9,
          categories: ['Apparel', 'Shoes', 'Accessories', 'Jewelry']
        },
        {
          platform: 'Zalando',
          marketShare: 23.4,
          dailyOrders: 876543,
          aov: 89.34,
          conversionRate: 5.1,
          returnRate: 32.1,
          customerSatisfaction: 8.4,
          mobileTraffic: 67.8,
          categories: ['Fashion', 'Beauty', 'Sports', 'Lifestyle']
        },
        {
          platform: 'ASOS',
          marketShare: 18.9,
          dailyOrders: 654321,
          aov: 76.23,
          conversionRate: 3.9,
          returnRate: 28.7,
          customerSatisfaction: 7.8,
          mobileTraffic: 82.3,
          categories: ['Young Fashion', 'Beauty', 'Design']
        },
        {
          platform: 'Farfetch',
          marketShare: 12.6,
          dailyOrders: 234567,
          aov: 234.56,
          conversionRate: 2.1,
          returnRate: 15.4,
          customerSatisfaction: 8.9,
          mobileTraffic: 64.2,
          categories: ['Luxury', 'Designer', 'Premium']
        }
      ],
      channels: {
        directToConsumer: 45.7,
        marketplaces: 34.6,
        socialCommerce: 12.8,
        wholesale: 6.9
      }
    },
    trendAnalytics: {
      currentTrends: [
        {
          trend: 'Sustainable Fashion',
          growth: 67.8,
          influence: 'HIGH',
          demographics: ['Gen Z', 'Millennials'],
          channels: ['Social Media', 'Influencers'],
          peakSeason: 'Year-round',
          brandAdoption: 78.9,
          consumerDemand: 89.3
        },
        {
          trend: 'Oversized Blazers',
          growth: 234.6,
          influence: 'MEDIUM',
          demographics: ['Millennials', 'Gen X'],
          channels: ['Fashion Shows', 'Celebrities'],
          peakSeason: 'Fall/Winter',
          brandAdoption: 56.7,
          consumerDemand: 67.8
        },
        {
          trend: 'Cottagecore Aesthetic',
          growth: 156.8,
          influence: 'MEDIUM',
          demographics: ['Gen Z', 'Millennials'],
          channels: ['TikTok', 'Pinterest'],
          peakSeason: 'Spring/Summer',
          brandAdoption: 34.2,
          consumerDemand: 78.9
        },
        {
          trend: 'Gender-Neutral Clothing',
          growth: 189.4,
          influence: 'HIGH',
          demographics: ['Gen Z', 'Gen Alpha'],
          channels: ['Social Media', 'Activism'],
          peakSeason: 'Year-round',
          brandAdoption: 45.6,
          consumerDemand: 82.1
        }
      ],
      seasonalInsights: {
        spring: { colors: ['Sage Green', 'Coral Pink', 'Sky Blue'], styles: ['Flowy Dresses', 'Light Jackets'], demand: 89.7 },
        summer: { colors: ['Sunshine Yellow', 'Ocean Blue', 'Coral'], styles: ['Crop Tops', 'Linen Pants'], demand: 94.2 },
        fall: { colors: ['Burnt Orange', 'Deep Purple', 'Forest Green'], styles: ['Oversized Coats', 'Boots'], demand: 87.3 },
        winter: { colors: ['Rich Burgundy', 'Navy Blue', 'Charcoal'], styles: ['Heavy Coats', 'Knitwear'], demand: 91.8 }
      }
    },
    supplyChain: {
      globalProduction: {
        china: 34.7,
        bangladesh: 23.4,
        vietnam: 18.9,
        turkey: 12.6,
        india: 10.4
      },
      leadTimes: {
        fastFashion: 14, // days
        midMarket: 45,
        luxury: 120,
        customMade: 180
      },
      sustainabilityMetrics: {
        organicMaterials: 23.4, // percentage
        recycledContent: 18.7,
        waterUsageReduction: 34.6,
        carbonFootprintReduction: 28.9,
        ethicalLabor: 67.8,
        transparencyScore: 56.3
      },
      logistics: {
        averageShippingTime: 3.4, // days
        sameDay: 12.3, // percentage
        nextDay: 34.6,
        standard: 53.1,
        internationalShipping: 78.9,
        returnProcessing: 5.2, // days
        inventoryAccuracy: 94.7
      }
    },
    customerBehavior: {
      demographics: {
        genZ: { percentage: 34.6, spendingPower: 234567890, preferences: ['Sustainability', 'Trends', 'Social'] },
        millennials: { percentage: 28.9, spendingPower: 456789012, preferences: ['Quality', 'Convenience', 'Brand'] },
        genX: { percentage: 23.4, spendingPower: 345678901, preferences: ['Durability', 'Value', 'Classic'] },
        boomers: { percentage: 13.1, spendingPower: 189076543, preferences: ['Comfort', 'Quality', 'Service'] }
      },
      shoppingBehavior: {
        researchTime: 23.4, // minutes average
        touchpoints: 7.2, // average before purchase
        influencerImpact: 67.8, // percentage influenced
        socialMediaDiscovery: 56.7,
        reviewImportance: 89.3,
        sustainabilityConcern: 78.9,
        priceComparison: 91.2,
        brandLoyalty: 34.6
      },
      preferences: {
        personalization: 78.9,
        exclusivity: 45.6,
        sustainability: 67.8,
        fastDelivery: 89.3,
        easyReturns: 94.2,
        socialProof: 76.5,
        qualityOverPrice: 56.7,
        ethicalBrands: 64.3
      }
    },
    marketSegments: {
      luxury: { size: 23456789012, growth: 8.7, margin: 45.6, customerAge: 42.3 },
      premiumMass: { size: 45678901234, growth: 12.4, margin: 34.7, customerAge: 36.8 },
      massMarket: { size: 67890123456, growth: 6.9, margin: 23.4, customerAge: 31.2 },
      discount: { size: 34567890123, growth: 4.2, margin: 12.8, customerAge: 29.7 }
    },
    technology: {
      arVrAdoption: 34.6, // percentage
      aiPersonalization: 67.8,
      virtualFitting: 23.4,
      chatbotUsage: 56.7,
      voiceCommerce: 18.9,
      socialShopping: 45.3,
      livestreamShopping: 29.1,
      blockchainTraceability: 12.7,
      iotInventoryTracking: 78.9,
      predictiveAnalytics: 89.4
    },
    fashionAlerts: [
      {
        type: 'CRITICAL',
        category: 'Supply Chain Disruption',
        message: 'Major shipping delays from Bangladesh factories - 200+ brands affected, 30% inventory shortage expected',
        region: 'Asia-Pacific',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:20',
        recommendations: ['Alternative sourcing', 'Inventory reallocation', 'Customer communication', 'Price adjustments']
      },
      {
        type: 'WARNING',
        category: 'Trend Alert',
        message: 'Sustainable fashion demand surging 250% - brands without eco-lines losing market share',
        region: 'Europe',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '03:18',
        recommendations: ['Sustainable line development', 'Supply chain audit', 'Marketing pivot', 'Partnership opportunities']
      },
      {
        type: 'SUCCESS',
        category: 'Sales Performance',
        message: 'Black Friday weekend sets new record - €12.3B in fashion sales, 34% above 2025',
        region: 'Global',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '03:15',
        recommendations: ['Inventory replenishment', 'Customer retention', 'Data analysis', 'Q4 strategy optimization']
      },
      {
        type: 'INFO',
        category: 'Technology Adoption',
        message: 'Virtual try-on technology adoption increases 180% - Gen Z leading usage at 78%',
        region: 'North America',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:10',
        recommendations: ['Technology investment', 'User experience optimization', 'Marketing campaigns', 'Feature expansion']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFashionData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          dailyTransactions: Math.max(40000000, Math.min(50000000, prev.industryOverview.dailyTransactions + Math.floor((Math.random() - 0.5) * 500000))),
          conversionRate: Math.max(3.0, Math.min(5.0, prev.industryOverview.conversionRate + (Math.random() - 0.5) * 0.3))
        },
        ecommerceMetrics: {
          ...prev.ecommerceMetrics,
          platforms: prev.ecommerceMetrics.platforms.map(platform => ({
            ...platform,
            dailyOrders: Math.max(platform.dailyOrders * 0.8, Math.min(platform.dailyOrders * 1.2, platform.dailyOrders + Math.floor((Math.random() - 0.5) * platform.dailyOrders * 0.1)))
          }))
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
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getInfluenceColor = (influence) => {
    switch (influence) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
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
      case 'Fast Fashion': return 'text-red-400 bg-red-400/20';
      case 'Luxury': return 'text-purple-400 bg-purple-400/20';
      case 'Casual Wear': return 'text-blue-400 bg-blue-400/20';
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
    <div className="h-full bg-gradient-to-br from-pink-900 via-slate-900 to-rose-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-pink-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Fashion & Retail Intelligence Center</h1>
              <p className="text-pink-300">E-commerce analytics, trend analysis, supply chain management & customer behavior intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-pink-400">{fashionData.currentTime}</div>
            <div className="text-pink-300">Fashion Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-pink-400 mr-2" />
                Market Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatCurrency(fashionData.industryOverview.globalMarketValue)}</div>
            <div className="text-pink-300 text-sm">Retailers: {formatNumber(fashionData.industryOverview.totalRetailers)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <ShoppingBag className="w-5 h-5 text-green-400 mr-2" />
                Daily Transactions
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(fashionData.industryOverview.dailyTransactions)}</div>
            <div className="text-green-300 text-sm">AOV: €{fashionData.industryOverview.averageOrderValue}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                E-commerce Growth
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">+{formatPercentage(fashionData.industryOverview.ecommerceGrowth)}</div>
            <div className="text-blue-300 text-sm">Digital: {formatPercentage(fashionData.industryOverview.digitalPenetration)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Conversion Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(fashionData.industryOverview.conversionRate)}</div>
            <div className="text-purple-300 text-sm">Mobile: {formatPercentage(fashionData.industryOverview.mobileCommerce)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-orange-400 mr-2" />
                Return Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(fashionData.industryOverview.returnRate)}</div>
            <div className="text-orange-300 text-sm">CLV: €{fashionData.industryOverview.customerLifetimeValue}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Sustainability
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(fashionData.industryOverview.sustainabilityIndex)}</div>
            <div className="text-emerald-300 text-sm">Social Commerce: {formatPercentage(fashionData.industryOverview.socialCommerce)}</div>
          </div>
        </div>

        {/* Major Brands Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            Major Fashion Brands Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Brand</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                  <th className="text-center p-3 text-slate-300">Inventory Turn</th>
                  <th className="text-center p-3 text-slate-300">Satisfaction</th>
                  <th className="text-center p-3 text-slate-300">Sustainability</th>
                </tr>
              </thead>
              <tbody>
                {fashionData.majorBrands.map((brand, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{brand.brand}</div>
                      <div className="text-slate-400 text-xs">{brand.stores} stores • {brand.countries} countries • {formatNumber(brand.socialFollowers)} followers</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(brand.category)}`}>
                        {brand.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(brand.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatPercentage(brand.marketShare)}</td>
                    <td className="p-3 text-center text-purple-400">{brand.inventoryTurnover.toFixed(1)}x</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(brand.customerSatisfaction * 10, 75, 85)}`}>
                      {brand.customerSatisfaction.toFixed(1)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(brand.sustainabilityScore * 10, 60, 75)}`}>
                      {brand.sustainabilityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* E-commerce Platforms & Current Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              E-commerce Platform Intelligence
            </h3>
            <div className="space-y-4">
              {fashionData.ecommerceMetrics.platforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{platform.platform}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {formatPercentage(platform.marketShare)} share
                      </span>
                    </div>
                    <span className="text-yellow-400 text-sm">★{platform.customerSatisfaction.toFixed(1)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Daily Orders: {formatNumber(platform.dailyOrders)}</div>
                      <div className="text-green-400">AOV: €{platform.aov.toFixed(2)}</div>
                      <div className="text-purple-400">Conversion: {formatPercentage(platform.conversionRate)}</div>
                    </div>
                    <div>
                      <div className="text-orange-400">Return Rate: {formatPercentage(platform.returnRate)}</div>
                      <div className="text-cyan-400">Mobile Traffic: {formatPercentage(platform.mobileTraffic)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {platform.categories.map((category, catIndex) => (
                      <span key={catIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-red-400 mr-2" />
              Current Fashion Trends Intelligence
            </h3>
            <div className="space-y-4">
              {fashionData.trendAnalytics.currentTrends.map((trend, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{trend.trend}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getInfluenceColor(trend.influence)}`}>
                        {trend.influence}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">+{formatPercentage(trend.growth)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Brand Adoption: {formatPercentage(trend.brandAdoption)}</div>
                      <div className="text-purple-400">Consumer Demand: {formatPercentage(trend.consumerDemand)}</div>
                      <div className="text-orange-400">Peak Season: {trend.peakSeason}</div>
                    </div>
                    <div>
                      <div className="text-cyan-400">Demographics: {trend.demographics.join(', ')}</div>
                      <div className="text-slate-300">Channels: {trend.channels.join(', ')}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supply Chain & Customer Behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-indigo-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">{fashionData.supplyChain.leadTimes.fastFashion}</div>
                <div className="text-indigo-300 text-sm">Fast Fashion Days</div>
                <div className="text-gray-400 text-xs mt-1">Lead Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(fashionData.supplyChain.sustainabilityMetrics.ethicalLabor)}</div>
                <div className="text-green-300 text-sm">Ethical Labor</div>
                <div className="text-gray-400 text-xs mt-1">Sustainability Score</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Global Production</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">China</span>
                  <span className="text-blue-400">{formatPercentage(fashionData.supplyChain.globalProduction.china)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Bangladesh</span>
                  <span className="text-green-400">{formatPercentage(fashionData.supplyChain.globalProduction.bangladesh)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Vietnam</span>
                  <span className="text-purple-400">{formatPercentage(fashionData.supplyChain.globalProduction.vietnam)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Turkey</span>
                  <span className="text-orange-400">{formatPercentage(fashionData.supplyChain.globalProduction.turkey)}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Logistics Performance</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-300">Avg Shipping: {fashionData.supplyChain.logistics.averageShippingTime.toFixed(1)} days</div>
                  <div className="text-slate-300">Same Day: {formatPercentage(fashionData.supplyChain.logistics.sameDay)}</div>
                  <div className="text-slate-300">International: {formatPercentage(fashionData.supplyChain.logistics.internationalShipping)}</div>
                </div>
                <div>
                  <div className="text-green-400">Inventory Accuracy: {formatPercentage(fashionData.supplyChain.logistics.inventoryAccuracy)}</div>
                  <div className="text-blue-400">Return Processing: {fashionData.supplyChain.logistics.returnProcessing.toFixed(1)} days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-pink-400 mr-2" />
              Customer Behavior Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{fashionData.customerBehavior.shoppingBehavior.touchpoints.toFixed(1)}</div>
                <div className="text-pink-300 text-sm">Avg Touchpoints</div>
                <div className="text-gray-400 text-xs mt-1">Before Purchase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{fashionData.customerBehavior.shoppingBehavior.researchTime.toFixed(1)}</div>
                <div className="text-cyan-300 text-sm">Research Time</div>
                <div className="text-gray-400 text-xs mt-1">Minutes Average</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Demographics Spending</h4>
              {Object.entries(fashionData.customerBehavior.demographics).map(([gen, data], index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{gen.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                    <div className="text-slate-400 text-xs">{formatPercentage(data.percentage)} of market</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-green-400">{formatCurrency(data.spendingPower)}</div>
                    <div className="text-slate-300">{data.preferences.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Shopping Preferences</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Easy Returns</span>
                  <span className="text-green-400">{formatPercentage(fashionData.customerBehavior.preferences.easyReturns)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Fast Delivery</span>
                  <span className="text-blue-400">{formatPercentage(fashionData.customerBehavior.preferences.fastDelivery)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Personalization</span>
                  <span className="text-purple-400">{formatPercentage(fashionData.customerBehavior.preferences.personalization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainability</span>
                  <span className="text-emerald-400">{formatPercentage(fashionData.customerBehavior.preferences.sustainability)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fashion Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Fashion & Retail Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {fashionData.fashionAlerts.map((alert, index) => (
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

        {/* Market Segments & Technology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-indigo-400 mr-2" />
              Market Segments Intelligence
            </h3>
            <div className="space-y-4">
              {Object.entries(fashionData.marketSegments).map(([segment, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{segment.charAt(0).toUpperCase() + segment.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(data.size)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400">+{formatPercentage(data.growth)}</div>
                      <div className="text-slate-400">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400">{formatPercentage(data.margin)}</div>
                      <div className="text-slate-400">Margin</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400">{data.customerAge.toFixed(1)} yrs</div>
                      <div className="text-slate-400">Avg Age</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-pink-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
              Technology Adoption Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(fashionData.technology.predictiveAnalytics)}</div>
                <div className="text-cyan-300 text-sm">Predictive Analytics</div>
                <div className="text-gray-400 text-xs mt-1">Adoption Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(fashionData.technology.iotInventoryTracking)}</div>
                <div className="text-purple-300 text-sm">IoT Inventory</div>
                <div className="text-gray-400 text-xs mt-1">Tracking Systems</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Implementation</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Personalization</span>
                  <span className="text-green-400">{formatPercentage(fashionData.technology.aiPersonalization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Chatbot Usage</span>
                  <span className="text-blue-400">{formatPercentage(fashionData.technology.chatbotUsage)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Social Shopping</span>
                  <span className="text-purple-400">{formatPercentage(fashionData.technology.socialShopping)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AR/VR Adoption</span>
                  <span className="text-orange-400">{formatPercentage(fashionData.technology.arVrAdoption)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Virtual Fitting</span>
                  <span className="text-cyan-400">{formatPercentage(fashionData.technology.virtualFitting)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Livestream Shopping</span>
                  <span className="text-pink-400">{formatPercentage(fashionData.technology.livestreamShopping)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}