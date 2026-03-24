// E-commerce Intelligence Center - Online Sales, Customer Analytics & Digital Commerce Monitoring
import { useState, useEffect } from 'react';
import { ShoppingCart, TrendingUp, TrendingDown, Users, CreditCard, Package, Eye, BarChart3, AlertTriangle, CheckCircle, Target, Zap } from 'lucide-react';

export default function EcommerceIntelligenceCenter() {
  const [ecommerceData, setEcommerceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    salesOverview: {
      totalRevenue: 2456789,
      dailyRevenue: 45678,
      monthlyRevenue: 1234567,
      yearlyRevenue: 15678901,
      totalOrders: 23456,
      dailyOrders: 567,
      averageOrderValue: 89.45,
      conversionRate: 3.2,
      customerLifetimeValue: 234.56,
      returnCustomerRate: 67.8,
      refundRate: 2.3,
      cartAbandonmentRate: 68.9,
      grossMargin: 45.6,
      netMargin: 12.8,
      orderFulfillmentRate: 98.7,
      customerAcquisitionCost: 23.45,
      returnOnAdSpend: 4.5,
      inventoryTurnover: 8.9
    },
    productMetrics: [
      {
        name: 'AI Marketing Course',
        category: 'Digital Products',
        sku: 'AIMC001',
        revenue: 234567,
        units: 1234,
        avgPrice: 189.99,
        conversionRate: 8.9,
        viewsToSales: 5.6,
        inventory: 'UNLIMITED',
        margin: 85.6,
        rating: 4.8,
        reviews: 234,
        refundRate: 1.2,
        popularityRank: 1,
        seasonalTrend: 'RISING',
        competitorPrice: 249.99,
        profitMargin: 162.59,
        customerSatisfaction: 94.5
      },
      {
        name: 'Social Media Automation Tool',
        category: 'Software',
        sku: 'SMAT002',
        revenue: 189123,
        units: 567,
        avgPrice: 333.33,
        conversionRate: 4.2,
        viewsToSales: 3.8,
        inventory: 'UNLIMITED',
        margin: 78.9,
        rating: 4.6,
        reviews: 156,
        refundRate: 2.8,
        popularityRank: 2,
        seasonalTrend: 'STABLE',
        competitorPrice: 399.99,
        profitMargin: 263.14,
        customerSatisfaction: 89.7
      },
      {
        name: 'Marketing Analytics Dashboard',
        category: 'SaaS',
        sku: 'MAD003',
        revenue: 145678,
        units: 234,
        avgPrice: 622.44,
        conversionRate: 2.8,
        viewsToSales: 2.1,
        inventory: 'UNLIMITED',
        margin: 89.4,
        rating: 4.9,
        reviews: 89,
        refundRate: 0.9,
        popularityRank: 3,
        seasonalTrend: 'RISING',
        competitorPrice: 799.99,
        profitMargin: 556.46,
        customerSatisfaction: 96.8
      },
      {
        name: 'Content Creation Toolkit',
        category: 'Digital Products',
        sku: 'CCT004',
        revenue: 98765,
        units: 345,
        avgPrice: 286.42,
        conversionRate: 6.7,
        viewsToSales: 4.3,
        inventory: 'UNLIMITED',
        margin: 76.3,
        rating: 4.5,
        reviews: 178,
        refundRate: 3.4,
        popularityRank: 4,
        seasonalTrend: 'DECLINING',
        competitorPrice: 329.99,
        profitMargin: 218.54,
        customerSatisfaction: 87.2
      },
      {
        name: 'Email Marketing Templates',
        category: 'Templates',
        sku: 'EMT005',
        revenue: 67890,
        units: 890,
        avgPrice: 76.28,
        conversionRate: 12.4,
        viewsToSales: 8.9,
        inventory: 'UNLIMITED',
        margin: 92.1,
        rating: 4.3,
        reviews: 234,
        refundRate: 1.8,
        popularityRank: 5,
        seasonalTrend: 'STABLE',
        competitorPrice: 99.99,
        profitMargin: 70.25,
        customerSatisfaction: 85.6
      },
      {
        name: 'Video Editing Presets',
        category: 'Digital Assets',
        sku: 'VEP006',
        revenue: 45123,
        units: 567,
        avgPrice: 79.58,
        conversionRate: 9.8,
        viewsToSales: 7.2,
        inventory: 'UNLIMITED',
        margin: 88.7,
        rating: 4.7,
        reviews: 123,
        refundRate: 2.1,
        popularityRank: 6,
        seasonalTrend: 'RISING',
        competitorPrice: 119.99,
        profitMargin: 70.62,
        customerSatisfaction: 91.3
      }
    ],
    customerAnalytics: {
      totalCustomers: 45678,
      newCustomers: 1234,
      returningCustomers: 3456,
      customerGrowth: 23.4,
      customerRetention: 67.8,
      churnRate: 32.2,
      customerSegments: {
        premium: { count: 5678, revenue: 789123, percentage: 12.4, avgSpend: 139.05 },
        regular: { count: 23456, revenue: 1234567, percentage: 51.4, avgSpend: 52.63 },
        occasional: { count: 16544, revenue: 432987, percentage: 36.2, avgSpend: 26.17 }
      },
      demographics: {
        age: {
          '18-24': { percentage: 18.7, avgSpend: 45.23, conversionRate: 4.2 },
          '25-34': { percentage: 34.5, avgSpend: 89.45, conversionRate: 5.8 },
          '35-44': { percentage: 28.9, avgSpend: 156.78, conversionRate: 3.9 },
          '45-54': { percentage: 12.4, avgSpend: 234.56, conversionRate: 2.8 },
          '55+': { percentage: 5.5, avgSpend: 189.12, conversionRate: 2.1 }
        },
        location: {
          'North America': { percentage: 45.6, revenue: 1123456, conversionRate: 4.8 },
          'Europe': { percentage: 32.1, revenue: 789012, conversionRate: 3.9 },
          'Asia Pacific': { percentage: 15.7, revenue: 456789, conversionRate: 5.2 },
          'Other': { percentage: 6.6, revenue: 87532, conversionRate: 2.8 }
        },
        deviceUsage: {
          mobile: { percentage: 67.8, conversionRate: 2.8, avgSessionDuration: 3.2 },
          desktop: { percentage: 28.4, conversionRate: 5.6, avgSessionDuration: 8.9 },
          tablet: { percentage: 3.8, conversionRate: 3.4, avgSessionDuration: 6.1 }
        }
      },
      behaviorMetrics: {
        avgSessionDuration: 5.6, // minutes
        pagesPerSession: 4.2,
        bounceRate: 45.6,
        timeToFirstPurchase: 12.3, // days
        purchaseFrequency: 3.4, // per year
        brandLoyalty: 78.9, // score
        referralRate: 23.4, // percentage
        socialSharingRate: 12.7, // percentage
        reviewParticipation: 34.5, // percentage
        supportTicketRate: 8.9 // percentage
      }
    },
    marketplaceAnalytics: [
      {
        platform: 'Own Website',
        revenue: 1234567,
        orders: 12345,
        commission: 0,
        conversionRate: 4.2,
        trafficShare: 45.6,
        customerSatisfaction: 94.5,
        fulfillmentSpeed: 2.1, // days
        returnRate: 2.3,
        profitMargin: 85.6,
        brandControl: 'FULL',
        marketingFlexibility: 'HIGH',
        dataOwnership: 'COMPLETE'
      },
      {
        platform: 'Amazon',
        revenue: 567890,
        orders: 5678,
        commission: 15.0,
        conversionRate: 8.9,
        trafficShare: 28.4,
        customerSatisfaction: 87.3,
        fulfillmentSpeed: 1.2,
        returnRate: 4.6,
        profitMargin: 56.7,
        brandControl: 'LIMITED',
        marketingFlexibility: 'LOW',
        dataOwnership: 'RESTRICTED'
      },
      {
        platform: 'Shopify Plus',
        revenue: 345678,
        orders: 3456,
        commission: 2.9,
        conversionRate: 3.8,
        trafficShare: 16.7,
        customerSatisfaction: 91.2,
        fulfillmentSpeed: 2.8,
        returnRate: 2.9,
        profitMargin: 78.4,
        brandControl: 'HIGH',
        marketingFlexibility: 'HIGH',
        dataOwnership: 'GOOD'
      },
      {
        platform: 'Etsy',
        revenue: 123456,
        orders: 1234,
        commission: 6.5,
        conversionRate: 5.4,
        trafficShare: 6.8,
        customerSatisfaction: 89.7,
        fulfillmentSpeed: 3.4,
        returnRate: 3.2,
        profitMargin: 67.8,
        brandControl: 'MEDIUM',
        marketingFlexibility: 'MEDIUM',
        dataOwnership: 'LIMITED'
      },
      {
        platform: 'Gumroad',
        revenue: 89012,
        orders: 890,
        commission: 8.5,
        conversionRate: 6.7,
        trafficShare: 2.5,
        customerSatisfaction: 86.4,
        fulfillmentSpeed: 0.1, // instant
        returnRate: 1.8,
        profitMargin: 73.2,
        brandControl: 'MEDIUM',
        marketingFlexibility: 'MEDIUM',
        dataOwnership: 'LIMITED'
      }
    ],
    paymentAnalytics: {
      paymentMethods: {
        creditCard: { percentage: 67.8, conversionRate: 4.2, avgTransactionValue: 89.45, failureRate: 2.1 },
        paypal: { percentage: 23.4, conversionRate: 3.8, avgTransactionValue: 76.23, failureRate: 1.8 },
        bankTransfer: { percentage: 5.6, conversionRate: 6.7, avgTransactionValue: 234.56, failureRate: 0.9 },
        cryptocurrency: { percentage: 2.1, conversionRate: 2.3, avgTransactionValue: 145.67, failureRate: 3.4 },
        applePay: { percentage: 0.8, conversionRate: 8.9, avgTransactionValue: 67.89, failureRate: 0.5 },
        googlePay: { percentage: 0.3, conversionRate: 7.8, avgTransactionValue: 56.78, failureRate: 0.7 }
      },
      transactionMetrics: {
        totalTransactions: 23456,
        successfulTransactions: 22890,
        failedTransactions: 566,
        chargebacks: 23,
        refunds: 456,
        avgProcessingTime: 2.3, // seconds
        peakTransactionHour: '20:00-21:00',
        currencyDistribution: {
          USD: 45.6,
          EUR: 32.1,
          GBP: 12.4,
          CAD: 5.6,
          AUD: 2.8,
          Other: 1.5
        },
        fraudDetection: {
          flaggedTransactions: 234,
          confirmedFraud: 12,
          falsePositives: 222,
          accuracy: 94.9,
          preventedLoss: 12345
        }
      }
    },
    inventoryIntelligence: {
      stockLevels: {
        inStock: 89.7, // percentage
        lowStock: 6.8,
        outOfStock: 3.5,
        overstock: 12.4
      },
      warehouseMetrics: {
        totalSKUs: 1234,
        activeSKUs: 1098,
        turnoverRate: 8.9,
        daysInInventory: 41,
        stockAccuracy: 98.7,
        pickingAccuracy: 99.2,
        packingEfficiency: 94.6,
        shippingSpeed: 1.8 // days
      },
      supplierPerformance: {
        onTimeDelivery: 92.3,
        qualityRating: 94.6,
        costEffectiveness: 87.9,
        communicationScore: 89.4,
        reliabilityIndex: 91.2,
        innovationScore: 78.5,
        sustainabilityRating: 83.7,
        riskAssessment: 'LOW'
      }
    },
    marketingAttribution: {
      channels: [
        {
          channel: 'Organic Search',
          revenue: 456789,
          orders: 4567,
          cost: 0,
          roi: 'INFINITE',
          conversionRate: 5.6,
          customerValue: 100.02,
          attribution: 'FIRST_CLICK',
          assistedConversions: 1234,
          timeToConversion: 8.9 // days
        },
        {
          channel: 'Paid Search',
          revenue: 345678,
          orders: 2345,
          cost: 45678,
          roi: 7.57,
          conversionRate: 3.2,
          customerValue: 147.37,
          attribution: 'LAST_CLICK',
          assistedConversions: 567,
          timeToConversion: 2.1
        },
        {
          channel: 'Social Media',
          revenue: 234567,
          orders: 1234,
          cost: 23456,
          roi: 10.00,
          conversionRate: 2.8,
          customerValue: 190.25,
          attribution: 'LINEAR',
          assistedConversions: 890,
          timeToConversion: 12.4
        },
        {
          channel: 'Email Marketing',
          revenue: 123456,
          orders: 678,
          cost: 5678,
          roi: 21.74,
          conversionRate: 8.9,
          customerValue: 182.06,
          attribution: 'TIME_DECAY',
          assistedConversions: 234,
          timeToConversion: 3.2
        },
        {
          channel: 'Influencer',
          revenue: 89012,
          orders: 345,
          cost: 12345,
          roi: 7.21,
          conversionRate: 4.6,
          customerValue: 258.01,
          attribution: 'POSITION_BASED',
          assistedConversions: 123,
          timeToConversion: 6.7
        },
        {
          channel: 'Affiliate',
          revenue: 67890,
          orders: 234,
          cost: 8901,
          roi: 7.63,
          conversionRate: 6.2,
          customerValue: 290.13,
          attribution: 'LAST_CLICK',
          assistedConversions: 45,
          timeToConversion: 15.6
        }
      ],
      customerJourney: {
        avgTouchpoints: 5.6,
        avgJourneyLength: 18.7, // days
        mostCommonPath: 'Organic Search → Social Media → Email → Purchase',
        dropoffPoints: ['Product Page', 'Checkout', 'Payment'],
        conversionAssists: {
          socialMedia: 34.5,
          email: 28.9,
          search: 23.4,
          display: 8.9,
          direct: 4.3
        }
      }
    },
    performanceAlerts: [
      {
        type: 'SUCCESS',
        category: 'Revenue',
        message: 'Daily revenue target exceeded by 34% - €61,218 vs €45,000 target',
        metric: 'Daily Revenue',
        value: '€61,218',
        change: '+34%',
        impact: 'MAJOR',
        timestamp: '06:55',
        recommendation: 'Scale successful campaigns, increase inventory for top performers',
        affectedProducts: ['AI Marketing Course', 'Marketing Analytics Dashboard'],
        estimatedImpact: 15678,
        urgency: 'HIGH'
      },
      {
        type: 'WARNING',
        category: 'Conversion',
        message: 'Cart abandonment rate increased to 73.2% from 68.9% average',
        metric: 'Cart Abandonment Rate',
        value: '73.2%',
        change: '+6%',
        impact: 'MODERATE',
        timestamp: '06:52',
        recommendation: 'Deploy abandoned cart email sequence, review checkout UX',
        affectedProducts: ['All Products'],
        estimatedImpact: -2345,
        urgency: 'MEDIUM'
      },
      {
        type: 'CRITICAL',
        category: 'Payment',
        message: 'Payment failure rate spike detected - 8.9% vs 2.1% normal',
        metric: 'Payment Failure Rate',
        value: '8.9%',
        change: '+324%',
        impact: 'HIGH',
        timestamp: '06:58',
        recommendation: 'Check payment gateway status, contact payment processor immediately',
        affectedProducts: ['All Products'],
        estimatedImpact: -8901,
        urgency: 'CRITICAL'
      },
      {
        type: 'INFO',
        category: 'Customer',
        message: 'New customer acquisition up 28% this week - strong social media performance',
        metric: 'New Customers',
        value: '+28%',
        change: '+28%',
        impact: 'POSITIVE',
        timestamp: '06:50',
        recommendation: 'Continue current social media strategy, prepare for increased support load',
        affectedProducts: ['Entry-level products'],
        estimatedImpact: 3456,
        urgency: 'LOW'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEcommerceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        salesOverview: {
          ...prev.salesOverview,
          dailyRevenue: Math.max(40000, Math.min(50000, prev.salesOverview.dailyRevenue + Math.floor((Math.random() - 0.5) * 1000))),
          conversionRate: Math.max(2.8, Math.min(3.6, prev.salesOverview.conversionRate + (Math.random() - 0.5) * 0.2)),
          cartAbandonmentRate: Math.max(65, Math.min(75, prev.salesOverview.cartAbandonmentRate + (Math.random() - 0.5) * 2))
        }
      }));
    }, 9000);

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

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Own Website': return 'text-green-400 bg-green-400/20';
      case 'Amazon': return 'text-orange-400 bg-orange-400/20';
      case 'Shopify Plus': return 'text-green-400 bg-green-400/20';
      case 'Etsy': return 'text-orange-400 bg-orange-400/20';
      case 'Gumroad': return 'text-pink-400 bg-pink-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 70, excellent = 85) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'RISING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECLINING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getControlColor = (control) => {
    switch (control) {
      case 'FULL': case 'COMPLETE': return 'text-green-400';
      case 'HIGH': case 'GOOD': return 'text-blue-400';
      case 'MEDIUM': case 'LIMITED': return 'text-yellow-400';
      case 'LOW': case 'RESTRICTED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">E-commerce Intelligence Center</h1>
              <p className="text-emerald-300">Online sales, customer analytics & digital commerce monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{ecommerceData.currentTime}</div>
            <div className="text-emerald-300">Commerce Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Sales Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CreditCard className="w-5 h-5 text-emerald-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(ecommerceData.salesOverview.dailyRevenue)}</div>
            <div className="text-emerald-300 text-sm">Daily • {formatCurrency(ecommerceData.salesOverview.monthlyRevenue)} MTD</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <ShoppingCart className="w-5 h-5 text-teal-400 mr-2" />
                Orders
              </h3>
            </div>
            <div className="text-3xl font-bold text-teal-400">{formatNumber(ecommerceData.salesOverview.dailyOrders)}</div>
            <div className="text-teal-300 text-sm">Daily • {formatCurrency(ecommerceData.salesOverview.averageOrderValue)} AOV</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Conversion
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(ecommerceData.salesOverview.conversionRate)}</div>
            <div className="text-blue-300 text-sm">Overall Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Customers
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(ecommerceData.customerAnalytics.totalCustomers)}</div>
            <div className="text-purple-300 text-sm">{formatPercentage(ecommerceData.customerAnalytics.customerRetention)} Retention</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-orange-400 mr-2" />
                Fulfillment
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(ecommerceData.salesOverview.orderFulfillmentRate)}</div>
            <div className="text-orange-300 text-sm">Success Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                ROAS
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{ecommerceData.salesOverview.returnOnAdSpend.toFixed(1)}x</div>
            <div className="text-cyan-300 text-sm">Ad Spend Return</div>
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
            Product Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Product</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Units</th>
                  <th className="text-center p-3 text-slate-300">Conv Rate</th>
                  <th className="text-center p-3 text-slate-300">Margin</th>
                  <th className="text-center p-3 text-slate-300">Rating</th>
                  <th className="text-center p-3 text-slate-300">Trend</th>
                </tr>
              </thead>
              <tbody>
                {ecommerceData.productMetrics.map((product, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{product.name}</div>
                      <div className="text-slate-400 text-xs">{product.category} • {product.sku} • Rank #{product.popularityRank}</div>
                    </td>
                    <td className="p-3 text-center text-emerald-400">{formatCurrency(product.revenue)}</td>
                    <td className="p-3 text-center text-teal-400">{formatNumber(product.units)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(product.conversionRate, 3.0, 6.0)}`}>
                      {formatPercentage(product.conversionRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(product.margin, 60, 80)}`}>
                      {formatPercentage(product.margin)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-yellow-400">⭐ {product.rating.toFixed(1)}</div>
                      <div className="text-slate-400 text-xs">({product.reviews} reviews)</div>
                    </td>
                    <td className={`p-3 text-center ${getTrendColor(product.seasonalTrend)}`}>
                      {product.seasonalTrend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Analytics & Marketplace Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Customer Analytics
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Customer Segments</h4>
                <div className="space-y-2">
                  {Object.entries(ecommerceData.customerAnalytics.customerSegments).map(([segment, data], index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium capitalize">{segment}</span>
                        <span className="text-emerald-400 text-sm">{formatCurrency(data.revenue)}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-purple-400">Count: {formatNumber(data.count)}</div>
                        <div className="text-blue-400">Share: {formatPercentage(data.percentage)}</div>
                        <div className="text-green-400">Avg: {formatCurrency(data.avgSpend)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Age Demographics</h4>
                <div className="space-y-2">
                  {Object.entries(ecommerceData.customerAnalytics.demographics.age).map(([age, data], index) => (
                    <div key={index} className="flex items-center justify-between bg-slate-600/30 rounded p-2 text-xs">
                      <span className="text-slate-300">{age}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-400">{formatPercentage(data.percentage)}</span>
                        <span className="text-green-400">{formatCurrency(data.avgSpend)}</span>
                        <span className="text-purple-400">{formatPercentage(data.conversionRate)} CR</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Behavior Metrics</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-blue-400">{ecommerceData.customerAnalytics.behaviorMetrics.avgSessionDuration.toFixed(1)}m</div>
                    <div className="text-slate-300">Session Duration</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-green-400">{ecommerceData.customerAnalytics.behaviorMetrics.pagesPerSession.toFixed(1)}</div>
                    <div className="text-slate-300">Pages/Session</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-orange-400">{formatPercentage(ecommerceData.customerAnalytics.behaviorMetrics.brandLoyalty)}</div>
                    <div className="text-slate-300">Brand Loyalty</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-purple-400">{formatPercentage(ecommerceData.customerAnalytics.behaviorMetrics.referralRate)}</div>
                    <div className="text-slate-300">Referral Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-orange-400 mr-2" />
              Marketplace Performance
            </h3>
            <div className="space-y-4">
              {ecommerceData.marketplaceAnalytics.map((marketplace, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(marketplace.platform)}`}>
                        {marketplace.platform}
                      </span>
                      <span className="text-slate-300 text-xs">
                        {marketplace.commission > 0 ? `${marketplace.commission.toFixed(1)}% fee` : 'No fees'}
                      </span>
                    </div>
                    <span className="text-emerald-400 text-sm">{formatCurrency(marketplace.revenue)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Orders: {formatNumber(marketplace.orders)}</div>
                    <div className="text-green-400">Conv: {formatPercentage(marketplace.conversionRate)}</div>
                    <div className="text-purple-400">Traffic: {formatPercentage(marketplace.trafficShare)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className={`${getControlColor(marketplace.brandControl)}`}>
                      Brand: {marketplace.brandControl}
                    </div>
                    <div className={`${getControlColor(marketplace.dataOwnership)}`}>
                      Data: {marketplace.dataOwnership}
                    </div>
                    <div className="text-orange-400">
                      Margin: {formatPercentage(marketplace.profitMargin)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment & Marketing Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CreditCard className="w-5 h-5 text-cyan-400 mr-2" />
              Payment Analytics
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Payment Methods</h4>
                <div className="space-y-2">
                  {Object.entries(ecommerceData.paymentAnalytics.paymentMethods).map(([method, data], index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium capitalize">{method.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-blue-400 text-sm">{formatPercentage(data.percentage)}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-green-400">Conv: {formatPercentage(data.conversionRate)}</div>
                        <div className="text-emerald-400">Avg: {formatCurrency(data.avgTransactionValue)}</div>
                        <div className="text-red-400">Fail: {formatPercentage(data.failureRate)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Transaction Security</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-green-400">{formatPercentage(ecommerceData.paymentAnalytics.transactionMetrics.fraudDetection.accuracy)}</div>
                    <div className="text-slate-300">Fraud Detection</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-blue-400">{formatNumber(ecommerceData.paymentAnalytics.transactionMetrics.fraudDetection.preventedLoss)}</div>
                    <div className="text-slate-300">Loss Prevented</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-indigo-400 mr-2" />
              Marketing Attribution
            </h3>
            <div className="space-y-4">
              {ecommerceData.marketingAttribution.channels.slice(0, 4).map((channel, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{channel.channel}</span>
                    <span className="text-emerald-400 text-sm">{formatCurrency(channel.revenue)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Orders: {formatNumber(channel.orders)}</div>
                    <div className="text-green-400">Conv: {formatPercentage(channel.conversionRate)}</div>
                    <div className="text-purple-400">
                      ROI: {typeof channel.roi === 'number' ? `${channel.roi.toFixed(1)}x` : channel.roi}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Cost: {formatCurrency(channel.cost)}</span>
                    <span className="text-slate-400">LTV: {formatCurrency(channel.customerValue)}</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Customer Journey</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-indigo-400">{ecommerceData.marketingAttribution.customerJourney.avgTouchpoints.toFixed(1)}</div>
                    <div className="text-slate-300">Avg Touchpoints</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-purple-400">{ecommerceData.marketingAttribution.customerJourney.avgJourneyLength.toFixed(1)}d</div>
                    <div className="text-slate-300">Journey Length</div>
                  </div>
                </div>
                <div className="mt-3 text-xs">
                  <div className="text-slate-300">Most Common Path:</div>
                  <div className="text-blue-400 text-xs">{ecommerceData.marketingAttribution.customerJourney.mostCommonPath}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            E-commerce Performance Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ecommerceData.performanceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      alert.urgency === 'CRITICAL' ? 'bg-red-400/20 text-red-400' :
                      alert.urgency === 'HIGH' ? 'bg-orange-400/20 text-orange-400' :
                      alert.urgency === 'MEDIUM' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-green-400/20 text-green-400'
                    }`}>
                      {alert.urgency}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <div className="text-slate-300">Metric: {alert.metric}</div>
                    <div className="text-slate-300">Value: {alert.value}</div>
                    <div className="text-slate-300">Change: {alert.change}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                    <div className="text-slate-300">
                      Est. Impact: {alert.estimatedImpact >= 0 ? '+' : ''}{formatCurrency(alert.estimatedImpact)}
                    </div>
                    <div className="text-slate-300">Products: {Array.isArray(alert.affectedProducts) ? alert.affectedProducts.join(', ') : alert.affectedProducts}</div>
                  </div>
                </div>
                <div className="text-slate-300 text-xs">
                  <strong>Recommendation:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}