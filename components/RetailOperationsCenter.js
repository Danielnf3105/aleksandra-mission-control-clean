// RetailOperationsCenter.js - Retail Operations Center & Omnichannel Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RetailOperationsCenter = () => {
  const [retailStatus, setRetailStatus] = useState({
    operationalStatus: 'STORES_OPEN',
    totalStores: 347,
    storesOpen: 289,
    storesClosed: 58,
    maintenanceStores: 12,
    totalSalestoday: 15647234, // USD
    totalTransactions: 234567,
    avgTransactionValue: 67.85, // USD
    inventoryTurnover: 8.7, // times per year
    customerSatisfaction: 4.3, // out of 5
    lastUpdate: Date.now()
  });

  const [omniChannelMetrics, setOmniChannelMetrics] = useState({
    unified_experience: {
      channel_consistency: 94.7, // percentage
      cross_channel_customers: 67.8, // percentage
      mobile_engagement: 89.2, // percentage
      online_to_offline: 34.5, // percentage conversion
      offline_to_online: 28.9, // percentage conversion
      unified_inventory_accuracy: 97.3, // percentage
      omnichannel_satisfaction: 4.4 // score out of 5
    },
    sales_channels: [
      {
        channel: 'IN_STORE',
        daily_sales: 8967234, // USD
        transactions: 134567,
        avg_ticket: 66.67,
        conversion_rate: 78.9, // percentage
        customer_count: 170645,
        peak_hours: '14:00-17:00',
        mobile_assisted: 45.7 // percentage
      },
      {
        channel: 'ONLINE_WEB',
        daily_sales: 4567890,
        transactions: 67890,
        avg_ticket: 67.28,
        conversion_rate: 3.8,
        unique_visitors: 1789456,
        bounce_rate: 34.2, // percentage
        mobile_traffic: 72.4 // percentage
      },
      {
        channel: 'MOBILE_APP',
        daily_sales: 1567234,
        transactions: 23456,
        avg_ticket: 66.82,
        conversion_rate: 8.9,
        app_sessions: 263456,
        retention_rate: 67.8, // percentage
        push_engagement: 23.4 // percentage
      },
      {
        channel: 'SOCIAL_COMMERCE',
        daily_sales: 456789,
        transactions: 7890,
        avg_ticket: 57.86,
        conversion_rate: 4.2,
        social_reach: 2345678,
        engagement_rate: 5.7, // percentage
        influencer_sales: 12.3 // percentage
      },
      {
        channel: 'MARKETPLACE',
        daily_sales: 567123,
        transactions: 8934,
        avg_ticket: 63.46,
        conversion_rate: 2.1,
        listing_views: 4256789,
        seller_rating: 4.6, // out of 5
        fulfillment_rate: 97.8 // percentage
      }
    ],
    customer_journey: {
      awareness_touchpoints: 12.7, // avg touchpoints
      consideration_time: 7.3, // days
      purchase_decision_time: 2.1, // days
      post_purchase_engagement: 89.4, // percentage
      loyalty_program_adoption: 45.7, // percentage
      repeat_purchase_rate: 23.8 // percentage
    }
  });

  const [inventoryManagement, setInventoryManagement] = useState({
    real_time_tracking: {
      total_skus: 156789,
      in_stock_skus: 142456,
      out_of_stock: 14333,
      low_stock_alerts: 2347,
      overstock_items: 1567,
      accuracy_rate: 97.3, // percentage
      auto_replenishment: 89.4, // percentage automated
      demand_forecast_accuracy: 91.7 // percentage
    },
    allocation_system: {
      stores_receiving_allocation: 289,
      automatic_allocations: 8967,
      manual_overrides: 234,
      allocation_accuracy: 94.2, // percentage
      inventory_optimization: 'AI_ENHANCED',
      seasonality_adjustment: 'ACTIVE',
      trend_analysis: 'REAL_TIME',
      supplier_integration: 'AUTOMATED'
    },
    stock_levels: [
      {
        category: 'APPAREL',
        total_units: 456789,
        available: 423567,
        reserved: 23456,
        in_transit: 9766,
        turnover_rate: 12.3, // times/year
        margin: 56.7, // percentage
        stockout_risk: 'LOW'
      },
      {
        category: 'ELECTRONICS',
        total_units: 89456,
        available: 78234,
        reserved: 8934,
        in_transit: 2288,
        turnover_rate: 6.8,
        margin: 23.4,
        stockout_risk: 'MEDIUM'
      },
      {
        category: 'HOME_GOODS',
        total_units: 234567,
        available: 198456,
        reserved: 28934,
        in_transit: 7177,
        turnover_rate: 4.2,
        margin: 45.6,
        stockout_risk: 'LOW'
      },
      {
        category: 'BEAUTY_CARE',
        total_units: 123456,
        available: 115678,
        reserved: 6789,
        in_transit: 989,
        turnover_rate: 9.1,
        margin: 62.3,
        stockout_risk: 'HIGH'
      },
      {
        category: 'SPORTS_OUTDOOR',
        total_units: 67890,
        available: 45623,
        reserved: 15678,
        in_transit: 6589,
        turnover_rate: 7.4,
        margin: 38.9,
        stockout_risk: 'MEDIUM'
      }
    ]
  });

  const [storeOperations, setStoreOperations] = useState([
    {
      store_id: 'STORE_001_FLAGSHIP',
      location: 'Times Square NYC',
      store_type: 'FLAGSHIP',
      status: 'OPERATIONAL',
      manager: 'Sarah Johnson',
      daily_sales: 234567,
      transactions: 3456,
      customers: 4567,
      conversion_rate: 75.7, // percentage
      staff_count: 45,
      pos_systems: 12,
      mobile_pos_active: 8,
      inventory_accuracy: 98.9,
      customer_satisfaction: 4.6,
      loss_prevention_score: 97.3
    },
    {
      store_id: 'STORE_015_PREMIUM',
      location: 'Beverly Hills CA',
      store_type: 'PREMIUM',
      status: 'OPERATIONAL',
      manager: 'Michael Chen',
      daily_sales: 156789,
      transactions: 1789,
      customers: 2345,
      conversion_rate: 76.3,
      staff_count: 28,
      pos_systems: 8,
      mobile_pos_active: 6,
      inventory_accuracy: 97.8,
      customer_satisfaction: 4.8,
      loss_prevention_score: 98.9
    },
    {
      store_id: 'STORE_089_STANDARD',
      location: 'Denver CO',
      store_type: 'STANDARD',
      status: 'OPERATIONAL',
      manager: 'Lisa Rodriguez',
      daily_sales: 67890,
      transactions: 1234,
      customers: 1567,
      conversion_rate: 78.7,
      staff_count: 18,
      pos_systems: 6,
      mobile_pos_active: 4,
      inventory_accuracy: 96.7,
      customer_satisfaction: 4.2,
      loss_prevention_score: 95.6
    },
    {
      store_id: 'STORE_156_OUTLET',
      location: 'Orlando FL',
      store_type: 'OUTLET',
      status: 'OPERATIONAL',
      manager: 'David Kim',
      daily_sales: 45678,
      transactions: 987,
      customers: 1234,
      conversion_rate: 80.1,
      staff_count: 12,
      pos_systems: 4,
      mobile_pos_active: 3,
      inventory_accuracy: 94.5,
      customer_satisfaction: 4.1,
      loss_prevention_score: 93.2
    },
    {
      store_id: 'STORE_234_MALL',
      location: 'Mall of America MN',
      store_type: 'MALL',
      status: 'MAINTENANCE',
      maintenance_type: 'POS_SYSTEM_UPGRADE',
      maintenance_start: Date.now() - 3 * 60 * 60 * 1000,
      estimated_completion: Date.now() + 2 * 60 * 60 * 1000,
      impact: 'PARTIAL_OPERATIONS',
      backup_systems: 'MOBILE_POS_ONLY'
    }
  ]);

  const [posAnalytics, setPosAnalytics] = useState({
    transaction_processing: {
      total_transactions: 234567,
      avg_processing_time: 23.4, // seconds
      payment_methods: {
        'CREDIT_CARD': 67.8, // percentage
        'DEBIT_CARD': 18.9,
        'MOBILE_PAY': 8.7,
        'CASH': 3.4,
        'BUY_NOW_PAY_LATER': 1.2
      },
      transaction_success_rate: 99.2, // percentage
      mobile_pos_usage: 34.7, // percentage
      contactless_payments: 78.9 // percentage
    },
    sales_analytics: {
      hourly_peak: '15:00',
      peak_conversion: 82.3, // percentage
      basket_size_avg: 3.7, // items
      upsell_success: 23.4, // percentage
      cross_sell_success: 18.9, // percentage
      return_rate: 8.7, // percentage
      loyalty_redemptions: 15.6 // percentage
    },
    staff_performance: {
      avg_sales_per_associate: 2847, // USD
      customer_service_rating: 4.4, // out of 5
      product_knowledge_score: 87.3, // percentage
      upselling_rate: 28.9, // percentage
      training_completion: 94.7, // percentage
      schedule_adherence: 96.1 // percentage
    }
  });

  const [customerExperience, setCustomerExperience] = useState({
    satisfaction_metrics: {
      nps_score: 67, // Net Promoter Score
      csat_score: 4.3, // Customer Satisfaction Score
      ces_score: 2.1, // Customer Effort Score (lower is better)
      review_sentiment: 82.4, // percentage positive
      complaint_resolution_time: 24.7, // hours
      first_contact_resolution: 76.8 // percentage
    },
    digital_engagement: {
      wifi_usage: 67.8, // percentage of customers
      mobile_app_usage: 34.5, // percentage
      digital_receipt_adoption: 89.2, // percentage
      loyalty_app_engagement: 45.7, // percentage
      social_media_mentions: 2456,
      qr_code_interactions: 23.8 // percentage
    },
    personalization: {
      personalized_offers_sent: 156789,
      offer_redemption_rate: 18.7, // percentage
      recommendation_accuracy: 76.4, // percentage
      targeted_campaign_success: 23.8, // percentage
      customer_segmentation_active: 'AI_ENHANCED',
      behavioral_tracking: 'GDPR_COMPLIANT'
    },
    loss_prevention: {
      shrinkage_rate: 1.2, // percentage
      theft_incidents: 23,
      false_alarm_rate: 8.7, // percentage
      recovery_rate: 67.8, // percentage
      cctv_coverage: 98.9, // percentage
      eas_effectiveness: 94.2 // percentage
    }
  });

  const [retailHistory, setRetailHistory] = useState([]);

  const generateRetailHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(9, 0, 0, 0); // Stores open at 9 AM
    
    for (let i = 0; i <= 13; i++) { // 13 hours of operation (9 AM - 10 PM)
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic retail patterns
      const hour = time.getHours();
      let trafficMultiplier = 0.4; // Base traffic
      
      if (hour >= 10 && hour <= 12) trafficMultiplier = 0.7; // Morning shopping
      if (hour >= 13 && hour <= 15) trafficMultiplier = 0.6; // Afternoon lull
      if (hour >= 16 && hour <= 19) trafficMultiplier = 1.0; // Peak hours
      if (hour >= 20) trafficMultiplier = 0.5; // Evening wind down
      if ([12, 18].includes(hour)) trafficMultiplier = 0.8; // Lunch & dinner peaks
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        total_sales: Math.floor((800000 + trafficMultiplier * 1200000) + Math.random() * 300000),
        transactions: Math.floor((8000 + trafficMultiplier * 15000) + Math.random() * 3000),
        customer_count: Math.floor((10000 + trafficMultiplier * 20000) + Math.random() * 5000),
        conversion_rate: 70 + trafficMultiplier * 15 + Math.random() * 8,
        avg_ticket: 50 + trafficMultiplier * 30 + Math.random() * 15,
        inventory_accuracy: 95 + Math.random() * 4,
        pos_response_time: 15 + (1 - trafficMultiplier) * 15 + Math.random() * 10
      });
    }
    return data;
  };

  useEffect(() => {
    setRetailHistory(generateRetailHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update retail status
      setRetailStatus(prev => ({
        ...prev,
        totalSalestoday: prev.totalSalestoday + Math.floor(Math.random() * 50000),
        totalTransactions: prev.totalTransactions + Math.floor(Math.random() * 100),
        avgTransactionValue: Math.max(40.0, Math.min(100.0, prev.avgTransactionValue + (Math.random() - 0.5) * 3.0)),
        customerSatisfaction: Math.max(3.5, Math.min(5.0, prev.customerSatisfaction + (Math.random() - 0.5) * 0.1)),
        lastUpdate: Date.now()
      }));

      // Update omnichannel metrics
      setOmniChannelMetrics(prev => ({
        ...prev,
        unified_experience: {
          ...prev.unified_experience,
          channel_consistency: Math.max(90.0, Math.min(98.0, prev.unified_experience.channel_consistency + (Math.random() - 0.5) * 1.0)),
          mobile_engagement: Math.max(80.0, Math.min(95.0, prev.unified_experience.mobile_engagement + (Math.random() - 0.5) * 1.5))
        },
        sales_channels: prev.sales_channels.map(channel => ({
          ...channel,
          daily_sales: channel.daily_sales + Math.floor(Math.random() * 10000),
          transactions: channel.transactions + Math.floor(Math.random() * 50),
          conversion_rate: Math.max(2.0, Math.min(85.0, channel.conversion_rate + (Math.random() - 0.5) * 2.0))
        }))
      }));

      // Update store operations
      setStoreOperations(prev => prev.map(store => {
        if (store.status === 'OPERATIONAL') {
          return {
            ...store,
            daily_sales: store.daily_sales + Math.floor(Math.random() * 5000),
            transactions: store.transactions + Math.floor(Math.random() * 20),
            customers: store.customers + Math.floor(Math.random() * 30),
            conversion_rate: Math.max(60.0, Math.min(85.0, store.conversion_rate + (Math.random() - 0.5) * 2.0))
          };
        }
        return store;
      }));

    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'STORES_OPEN':
      case 'OPERATIONAL':
      case 'FLAGSHIP':
      case 'PREMIUM':
      case 'STANDARD':
      case 'ACTIVE':
      case 'AUTOMATED':
      case 'AI_ENHANCED':
      case 'REAL_TIME':
      case 'GDPR_COMPLIANT':
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MALL':
      case 'OUTLET':
      case 'MEDIUM':
      case 'PARTIAL_OPERATIONS':
      case 'MOBILE_POS_ONLY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'HIGH':
      case 'MAINTENANCE':
      case 'POS_SYSTEM_UPGRADE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL':
      case 'CLOSED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      return `${Math.floor(absDiff / 3600000)}h ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🛍️ RETAIL OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {retailStatus.storesOpen}/{retailStatus.totalStores} Open
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatCurrency(retailStatus.totalSalestoday)}
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            CSAT {formatNumber(retailStatus.customerSatisfaction, 1)}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Omnichannel Store Management
          </div>
        </div>
      </div>

      {/* Retail Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">DAILY SALES</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatCurrency(retailStatus.totalSalestoday)}
              </div>
              <div className="text-xs text-blue-300">
                {formatLargeNumber(retailStatus.totalTransactions)} transactions
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">STORES OPERATIONAL</div>
              <div className="text-2xl font-bold text-green-100">
                {retailStatus.storesOpen}
              </div>
              <div className="text-xs text-green-300">
                of {retailStatus.totalStores} total stores
              </div>
            </div>
            <div className="text-3xl opacity-60">🏪</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG TRANSACTION</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatCurrency(retailStatus.avgTransactionValue)}
              </div>
              <div className="text-xs text-purple-300">
                Inventory turn: {formatNumber(retailStatus.inventoryTurnover, 1)}x
              </div>
            </div>
            <div className="text-3xl opacity-60">🛒</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CUSTOMER SATISFACTION</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(retailStatus.customerSatisfaction, 1)}
              </div>
              <div className="text-xs text-orange-300">
                out of 5.0 rating
              </div>
            </div>
            <div className="text-3xl opacity-60">⭐</div>
          </div>
        </div>
      </div>

      {/* Omnichannel Performance */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌐 OMNICHANNEL PERFORMANCE & UNIFIED EXPERIENCE
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Unified Experience</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Channel Consistency:</span>
                <span className="text-green-400">{formatNumber(omniChannelMetrics.unified_experience.channel_consistency, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cross-Channel Customers:</span>
                <span className="text-blue-400">{formatNumber(omniChannelMetrics.unified_experience.cross_channel_customers, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mobile Engagement:</span>
                <span className="text-purple-400">{formatNumber(omniChannelMetrics.unified_experience.mobile_engagement, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Online to Offline:</span>
                <span className="text-orange-400">{formatNumber(omniChannelMetrics.unified_experience.online_to_offline, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Offline to Online:</span>
                <span className="text-yellow-400">{formatNumber(omniChannelMetrics.unified_experience.offline_to_online, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Inventory Accuracy:</span>
                <span className="text-cyan-400">{formatNumber(omniChannelMetrics.unified_experience.unified_inventory_accuracy, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Omni Satisfaction:</span>
                <span className="text-pink-400">{formatNumber(omniChannelMetrics.unified_experience.omnichannel_satisfaction, 1)}/5</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 col-span-2">
            <h4 className="text-sm font-bold text-white mb-3">Sales Channels Performance</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {omniChannelMetrics.sales_channels.map((channel, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{channel.channel.replace(/_/g, ' ')}</span>
                    <span className="text-xs text-gray-400">
                      Conv: {formatNumber(channel.conversion_rate, 1)}%
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Sales: </span>
                    <span className="text-green-400">{formatCurrency(channel.daily_sales)}</span>
                    <span className="text-gray-400"> | Txns: </span>
                    <span className="text-blue-400">{formatLargeNumber(channel.transactions)}</span>
                    <span className="text-gray-400"> | AOV: </span>
                    <span className="text-purple-400">{formatCurrency(channel.avg_ticket)}</span>
                  </div>
                  
                  {channel.channel === 'IN_STORE' && (
                    <div className="text-xs">
                      <span className="text-gray-400">Customers: </span>
                      <span className="text-orange-400">{formatLargeNumber(channel.customer_count)}</span>
                      <span className="text-gray-400"> | Peak: </span>
                      <span className="text-yellow-400">{channel.peak_hours}</span>
                      <span className="text-gray-400"> | Mobile Assist: </span>
                      <span className="text-cyan-400">{formatNumber(channel.mobile_assisted, 1)}%</span>
                    </div>
                  )}

                  {channel.channel === 'ONLINE_WEB' && (
                    <div className="text-xs">
                      <span className="text-gray-400">Visitors: </span>
                      <span className="text-orange-400">{formatLargeNumber(channel.unique_visitors)}</span>
                      <span className="text-gray-400"> | Bounce: </span>
                      <span className="text-red-400">{formatNumber(channel.bounce_rate, 1)}%</span>
                      <span className="text-gray-400"> | Mobile: </span>
                      <span className="text-cyan-400">{formatNumber(channel.mobile_traffic, 1)}%</span>
                    </div>
                  )}

                  {channel.channel === 'MOBILE_APP' && (
                    <div className="text-xs">
                      <span className="text-gray-400">Sessions: </span>
                      <span className="text-orange-400">{formatLargeNumber(channel.app_sessions)}</span>
                      <span className="text-gray-400"> | Retention: </span>
                      <span className="text-green-400">{formatNumber(channel.retention_rate, 1)}%</span>
                      <span className="text-gray-400"> | Push Engage: </span>
                      <span className="text-cyan-400">{formatNumber(channel.push_engagement, 1)}%</span>
                    </div>
                  )}

                  {channel.channel === 'SOCIAL_COMMERCE' && (
                    <div className="text-xs">
                      <span className="text-gray-400">Reach: </span>
                      <span className="text-orange-400">{formatLargeNumber(channel.social_reach)}</span>
                      <span className="text-gray-400"> | Engagement: </span>
                      <span className="text-blue-400">{formatNumber(channel.engagement_rate, 1)}%</span>
                      <span className="text-gray-400"> | Influencer: </span>
                      <span className="text-pink-400">{formatNumber(channel.influencer_sales, 1)}%</span>
                    </div>
                  )}

                  {channel.channel === 'MARKETPLACE' && (
                    <div className="text-xs">
                      <span className="text-gray-400">Views: </span>
                      <span className="text-orange-400">{formatLargeNumber(channel.listing_views)}</span>
                      <span className="text-gray-400"> | Rating: </span>
                      <span className="text-green-400">{formatNumber(channel.seller_rating, 1)}/5</span>
                      <span className="text-gray-400"> | Fulfillment: </span>
                      <span className="text-cyan-400">{formatNumber(channel.fulfillment_rate, 1)}%</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <h4 className="text-sm font-bold text-white mb-3">Customer Journey Analytics</h4>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Avg Touchpoints:</span>
              <span className="text-blue-400">{formatNumber(omniChannelMetrics.customer_journey.awareness_touchpoints, 1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Consideration Time:</span>
              <span className="text-purple-400">{formatNumber(omniChannelMetrics.customer_journey.consideration_time, 1)}d</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Decision Time:</span>
              <span className="text-orange-400">{formatNumber(omniChannelMetrics.customer_journey.purchase_decision_time, 1)}d</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Post-Purchase Engage:</span>
              <span className="text-green-400">{formatNumber(omniChannelMetrics.customer_journey.post_purchase_engagement, 1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Loyalty Adoption:</span>
              <span className="text-yellow-400">{formatNumber(omniChannelMetrics.customer_journey.loyalty_program_adoption, 1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Repeat Purchase:</span>
              <span className="text-cyan-400">{formatNumber(omniChannelMetrics.customer_journey.repeat_purchase_rate, 1)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Store Operations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏪 STORE OPERATIONS & MANAGEMENT
        </h3>
        <div className="space-y-3">
          {storeOperations.map((store) => (
            <div key={store.store_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{store.store_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(store.status)}`}>
                    {store.status}
                  </span>
                  {store.store_type && (
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(store.store_type)}`}>
                      {store.store_type}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {store.location}
                </div>
              </div>

              {store.status === 'OPERATIONAL' ? (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Sales: </span>
                    <span className="text-green-400">{formatCurrency(store.daily_sales)}</span>
                    <span className="text-gray-400"> | Transactions: </span>
                    <span className="text-blue-400">{formatLargeNumber(store.transactions)}</span>
                    <span className="text-gray-400"> | Customers: </span>
                    <span className="text-purple-400">{formatLargeNumber(store.customers)}</span>
                    <span className="text-gray-400"> | Conv: </span>
                    <span className="text-orange-400">{formatNumber(store.conversion_rate, 1)}%</span>
                  </div>

                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Manager: </span>
                    <span className="text-cyan-400">{store.manager}</span>
                    <span className="text-gray-400"> | Staff: </span>
                    <span className="text-yellow-400">{store.staff_count}</span>
                    <span className="text-gray-400"> | POS Systems: </span>
                    <span className="text-pink-400">{store.pos_systems}</span>
                    <span className="text-gray-400"> | Mobile POS: </span>
                    <span className="text-green-400">{store.mobile_pos_active}</span>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400">Inventory Accuracy: </span>
                    <span className="text-blue-400">{formatNumber(store.inventory_accuracy, 1)}%</span>
                    <span className="text-gray-400"> | CSAT: </span>
                    <span className="text-green-400">{formatNumber(store.customer_satisfaction, 1)}</span>
                    <span className="text-gray-400"> | Loss Prevention: </span>
                    <span className="text-purple-400">{formatNumber(store.loss_prevention_score, 1)}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{store.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Started: </span>
                    <span className="text-yellow-400">{formatTime(store.maintenance_start)}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-blue-400">{formatTime(store.estimated_completion)}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Impact: </span>
                    <span className="text-red-400">{store.impact?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Backup: </span>
                    <span className="text-green-400">{store.backup_systems?.replace(/_/g, ' ')}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Retail Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 RETAIL OPERATIONS TRENDS (STORE HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={retailHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="total_sales"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Total Sales ($k)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="transactions" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Transactions (k)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="customer_count" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Customer Count (k)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="conversion_rate" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Conversion Rate %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="avg_ticket" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Avg Ticket ($)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="inventory_accuracy" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Inventory Accuracy %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pos_response_time" 
              stroke="#F97316" 
              strokeWidth={2}
              name="POS Response (sec)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Inventory Management and POS Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 INVENTORY MANAGEMENT & ALLOCATION
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Real-Time Tracking</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total SKUs:</span>
                <span className="text-blue-400">{formatLargeNumber(inventoryManagement.real_time_tracking.total_skus)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">In Stock:</span>
                <span className="text-green-400">{formatLargeNumber(inventoryManagement.real_time_tracking.in_stock_skus)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Out of Stock:</span>
                <span className="text-red-400">{formatLargeNumber(inventoryManagement.real_time_tracking.out_of_stock)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Low Stock Alerts:</span>
                <span className="text-yellow-400">{formatLargeNumber(inventoryManagement.real_time_tracking.low_stock_alerts)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Overstock Items:</span>
                <span className="text-orange-400">{formatLargeNumber(inventoryManagement.real_time_tracking.overstock_items)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy Rate:</span>
                <span className="text-purple-400">{formatNumber(inventoryManagement.real_time_tracking.accuracy_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Auto Replenishment:</span>
                <span className="text-cyan-400">{formatNumber(inventoryManagement.real_time_tracking.auto_replenishment, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Stock Levels by Category</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {inventoryManagement.stock_levels.map((category, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{category.category.replace(/_/g, ' ')}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(category.stockout_risk)}`}>
                      {category.stockout_risk} RISK
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Available: </span>
                    <span className="text-green-400">{formatLargeNumber(category.available)}</span>
                    <span className="text-gray-400"> | Reserved: </span>
                    <span className="text-yellow-400">{formatLargeNumber(category.reserved)}</span>
                    <span className="text-gray-400"> | Transit: </span>
                    <span className="text-blue-400">{formatLargeNumber(category.in_transit)}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Turnover: </span>
                    <span className="text-purple-400">{formatNumber(category.turnover_rate, 1)}x/yr</span>
                    <span className="text-gray-400"> | Margin: </span>
                    <span className="text-orange-400">{formatNumber(category.margin, 1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* POS Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💳 POS ANALYTICS & PAYMENT PROCESSING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Transaction Processing</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Transactions:</span>
                <span className="text-blue-400">{formatLargeNumber(posAnalytics.transaction_processing.total_transactions)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Processing Time:</span>
                <span className="text-green-400">{formatNumber(posAnalytics.transaction_processing.avg_processing_time, 1)}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate:</span>
                <span className="text-purple-400">{formatNumber(posAnalytics.transaction_processing.transaction_success_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mobile POS Usage:</span>
                <span className="text-orange-400">{formatNumber(posAnalytics.transaction_processing.mobile_pos_usage, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contactless Payments:</span>
                <span className="text-cyan-400">{formatNumber(posAnalytics.transaction_processing.contactless_payments, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Payment Methods</h4>
            <div className="space-y-1 text-xs">
              {Object.entries(posAnalytics.transaction_processing.payment_methods).map(([method, percentage], index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-400">{method.replace(/_/g, ' ')}:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">{formatNumber(percentage, 1)}%</span>
                    <div className="w-16 bg-gray-600 rounded-full h-1">
                      <div 
                        className="h-1 rounded-full bg-blue-400"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Sales Analytics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Peak Hour:</span>
                <span className="text-yellow-400">{posAnalytics.sales_analytics.hourly_peak}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Peak Conversion:</span>
                <span className="text-green-400">{formatNumber(posAnalytics.sales_analytics.peak_conversion, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Basket Size:</span>
                <span className="text-blue-400">{formatNumber(posAnalytics.sales_analytics.basket_size_avg, 1)} items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Upsell Success:</span>
                <span className="text-purple-400">{formatNumber(posAnalytics.sales_analytics.upsell_success, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cross-sell Success:</span>
                <span className="text-orange-400">{formatNumber(posAnalytics.sales_analytics.cross_sell_success, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Return Rate:</span>
                <span className="text-red-400">{formatNumber(posAnalytics.sales_analytics.return_rate, 1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Experience */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          😊 CUSTOMER EXPERIENCE & ENGAGEMENT ANALYTICS
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Satisfaction Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">NPS Score:</span>
                <span className="text-green-400">{customerExperience.satisfaction_metrics.nps_score}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">CSAT Score:</span>
                <span className="text-blue-400">{formatNumber(customerExperience.satisfaction_metrics.csat_score, 1)}/5</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">CES Score:</span>
                <span className="text-purple-400">{formatNumber(customerExperience.satisfaction_metrics.ces_score, 1)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Review Sentiment:</span>
                <span className="text-orange-400">{formatNumber(customerExperience.satisfaction_metrics.review_sentiment, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Resolution Time:</span>
                <span className="text-yellow-400">{formatNumber(customerExperience.satisfaction_metrics.complaint_resolution_time, 1)}h</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">First Contact:</span>
                <span className="text-cyan-400">{formatNumber(customerExperience.satisfaction_metrics.first_contact_resolution, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Digital Engagement</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">WiFi Usage:</span>
                <span className="text-green-400">{formatNumber(customerExperience.digital_engagement.wifi_usage, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Mobile App Usage:</span>
                <span className="text-blue-400">{formatNumber(customerExperience.digital_engagement.mobile_app_usage, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Digital Receipts:</span>
                <span className="text-purple-400">{formatNumber(customerExperience.digital_engagement.digital_receipt_adoption, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Loyalty App:</span>
                <span className="text-orange-400">{formatNumber(customerExperience.digital_engagement.loyalty_app_engagement, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Social Mentions:</span>
                <span className="text-yellow-400">{formatLargeNumber(customerExperience.digital_engagement.social_media_mentions)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">QR Interactions:</span>
                <span className="text-cyan-400">{formatNumber(customerExperience.digital_engagement.qr_code_interactions, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Personalization</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Offers Sent:</span>
                <span className="text-green-400">{formatLargeNumber(customerExperience.personalization.personalized_offers_sent)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Redemption Rate:</span>
                <span className="text-blue-400">{formatNumber(customerExperience.personalization.offer_redemption_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Recommendation Acc:</span>
                <span className="text-purple-400">{formatNumber(customerExperience.personalization.recommendation_accuracy, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Campaign Success:</span>
                <span className="text-orange-400">{formatNumber(customerExperience.personalization.targeted_campaign_success, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Segmentation:</span>
                <span className={`${getStatusColor(customerExperience.personalization.customer_segmentation_active).split(' ')[0]}`}>
                  {customerExperience.personalization.customer_segmentation_active.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Tracking:</span>
                <span className={`${getStatusColor(customerExperience.personalization.behavioral_tracking).split(' ')[0]}`}>
                  {customerExperience.personalization.behavioral_tracking.replace(/_/g, ' ')}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Loss Prevention</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Shrinkage Rate:</span>
                <span className="text-red-400">{formatNumber(customerExperience.loss_prevention.shrinkage_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Theft Incidents:</span>
                <span className="text-orange-400">{customerExperience.loss_prevention.theft_incidents}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">False Alarm Rate:</span>
                <span className="text-yellow-400">{formatNumber(customerExperience.loss_prevention.false_alarm_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Recovery Rate:</span>
                <span className="text-green-400">{formatNumber(customerExperience.loss_prevention.recovery_rate, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">CCTV Coverage:</span>
                <span className="text-blue-400">{formatNumber(customerExperience.loss_prevention.cctv_coverage, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">EAS Effectiveness:</span>
                <span className="text-purple-400">{formatNumber(customerExperience.loss_prevention.eas_effectiveness, 1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailOperationsCenter;