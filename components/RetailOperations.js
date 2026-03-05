// RetailOperations.js - Retail Operations Control Center & Omnichannel Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const RetailOperations = () => {
  const [stores, setStores] = useState([
    {
      id: 'store_001',
      name: 'Downtown Flagship',
      location: 'New York, NY',
      type: 'FLAGSHIP',
      status: 'OPEN',
      manager: 'Sarah Kim',
      sqft: 12500,
      traffic: {
        current: 247,
        capacity: 350,
        hourlyAverage: 185,
        dailyTotal: 2847
      },
      sales: {
        today: 89450,
        target: 95000,
        yesterday: 87200,
        mtd: 1847350
      },
      inventory: {
        onHand: 45670,
        reserved: 1250,
        available: 44420,
        lowStock: 23,
        outOfStock: 7
      },
      staff: {
        scheduled: 28,
        present: 26,
        breaks: 3,
        registers: 8,
        activeRegisters: 7
      },
      channels: {
        pos: { orders: 127, revenue: 45820 },
        bopis: { orders: 34, revenue: 12890 }, // Buy Online Pick Up In Store
        ship: { orders: 18, revenue: 8940 }
      },
      performance: {
        conversionRate: 23.4, // percentage
        averageTicket: 87.25,
        itemsPerTransaction: 2.8,
        returnRate: 8.2
      },
      lastUpdate: Date.now() - 5 * 60 * 1000,
      alerts: ['Low stock alert: 23 items', 'Staff shortage: 2 positions']
    },
    {
      id: 'store_002',
      name: 'Mall Location',
      location: 'Los Angeles, CA',
      type: 'STANDARD',
      status: 'OPEN',
      manager: 'Michael Chen',
      sqft: 8200,
      traffic: {
        current: 156,
        capacity: 200,
        hourlyAverage: 124,
        dailyTotal: 1892
      },
      sales: {
        today: 67890,
        target: 72000,
        yesterday: 69300,
        mtd: 1245780
      },
      inventory: {
        onHand: 32480,
        reserved: 890,
        available: 31590,
        lowStock: 18,
        outOfStock: 4
      },
      staff: {
        scheduled: 20,
        present: 19,
        breaks: 2,
        registers: 6,
        activeRegisters: 5
      },
      channels: {
        pos: { orders: 98, revenue: 34560 },
        bopis: { orders: 28, revenue: 9870 },
        ship: { orders: 15, revenue: 7245 }
      },
      performance: {
        conversionRate: 28.7,
        averageTicket: 72.35,
        itemsPerTransaction: 2.4,
        returnRate: 6.8
      },
      lastUpdate: Date.now() - 3 * 60 * 1000,
      alerts: ['Peak traffic expected in 2 hours']
    },
    {
      id: 'store_003',
      name: 'Suburban Outlet',
      location: 'Chicago, IL',
      type: 'OUTLET',
      status: 'OPEN',
      manager: 'Jennifer Rodriguez',
      sqft: 15400,
      traffic: {
        current: 189,
        capacity: 280,
        hourlyAverage: 142,
        dailyTotal: 2156
      },
      sales: {
        today: 78540,
        target: 68000,
        yesterday: 72100,
        mtd: 1456890
      },
      inventory: {
        onHand: 58920,
        reserved: 1450,
        available: 57470,
        lowStock: 31,
        outOfStock: 12
      },
      staff: {
        scheduled: 24,
        present: 22,
        breaks: 4,
        registers: 7,
        activeRegisters: 6
      },
      channels: {
        pos: { orders: 142, revenue: 52890 },
        bopis: { orders: 41, revenue: 15670 },
        ship: { orders: 23, revenue: 9980 }
      },
      performance: {
        conversionRate: 31.2,
        averageTicket: 65.80,
        itemsPerTransaction: 3.2,
        returnRate: 7.4
      },
      lastUpdate: Date.now() - 8 * 60 * 1000,
      alerts: ['Exceeding sales target by 15%']
    },
    {
      id: 'store_004',
      name: 'Airport Terminal',
      location: 'Miami, FL',
      type: 'EXPRESS',
      status: 'OPEN',
      manager: 'David Park',
      sqft: 2800,
      traffic: {
        current: 67,
        capacity: 85,
        hourlyAverage: 98,
        dailyTotal: 1176
      },
      sales: {
        today: 34890,
        target: 32000,
        yesterday: 31200,
        mtd: 687450
      },
      inventory: {
        onHand: 8950,
        reserved: 234,
        available: 8716,
        lowStock: 8,
        outOfStock: 2
      },
      staff: {
        scheduled: 8,
        present: 8,
        breaks: 1,
        registers: 3,
        activeRegisters: 3
      },
      channels: {
        pos: { orders: 89, revenue: 28340 },
        bopis: { orders: 12, revenue: 4890 },
        ship: { orders: 6, revenue: 1660 }
      },
      performance: {
        conversionRate: 35.8,
        averageTicket: 94.60,
        itemsPerTransaction: 1.8,
        returnRate: 3.2
      },
      lastUpdate: Date.now() - 12 * 60 * 1000,
      alerts: ['High conversion rate - optimize inventory']
    },
    {
      id: 'store_005',
      name: 'Community Store',
      location: 'Austin, TX',
      type: 'COMMUNITY',
      status: 'OPEN',
      manager: 'Lisa Wang',
      sqft: 4500,
      traffic: {
        current: 89,
        capacity: 120,
        hourlyAverage: 76,
        dailyTotal: 912
      },
      sales: {
        today: 29750,
        target: 28000,
        yesterday: 27800,
        mtd: 578920
      },
      inventory: {
        onHand: 18760,
        reserved: 456,
        available: 18304,
        lowStock: 12,
        outOfStock: 3
      },
      staff: {
        scheduled: 12,
        present: 11,
        breaks: 2,
        registers: 4,
        activeRegisters: 3
      },
      channels: {
        pos: { orders: 67, revenue: 21890 },
        bopis: { orders: 18, revenue: 5670 },
        ship: { orders: 8, revenue: 2190 }
      },
      performance: {
        conversionRate: 26.9,
        averageTicket: 78.45,
        itemsPerTransaction: 2.6,
        returnRate: 5.1
      },
      lastUpdate: Date.now() - 15 * 60 * 1000,
      alerts: []
    }
  ]);

  const [onlineChannels, setOnlineChannels] = useState([
    {
      id: 'channel_001',
      name: 'Company Website',
      platform: 'E-COMMERCE',
      status: 'ACTIVE',
      traffic: {
        current: 2847,
        sessions: 18540,
        bounceRate: 45.2,
        pageViews: 67890
      },
      sales: {
        orders: 342,
        revenue: 78940,
        conversion: 1.85,
        averageOrderValue: 230.85
      },
      inventory: {
        available: 145670,
        reserved: 8940,
        backordered: 234
      },
      fulfillment: {
        processing: 89,
        shipped: 124,
        delivered: 198,
        returns: 23
      },
      geography: {
        domestic: 78.4,
        international: 21.6
      },
      deviceSplit: {
        mobile: 67.2,
        desktop: 28.9,
        tablet: 3.9
      },
      lastUpdate: Date.now() - 2 * 60 * 1000,
      alerts: ['Cart abandonment rate: 68.5%', 'Page load speed: 3.2s (optimize)']
    },
    {
      id: 'channel_002',
      name: 'Amazon Marketplace',
      platform: 'MARKETPLACE',
      status: 'ACTIVE',
      traffic: {
        current: 1247,
        sessions: 12340,
        bounceRate: 23.8,
        pageViews: 34520
      },
      sales: {
        orders: 198,
        revenue: 45670,
        conversion: 1.60,
        averageOrderValue: 230.65
      },
      inventory: {
        available: 89430,
        reserved: 5670,
        backordered: 156
      },
      fulfillment: {
        processing: 45,
        shipped: 89,
        delivered: 134,
        returns: 12
      },
      fees: {
        referral: 2890, // Amazon fees
        fulfillment: 1450,
        storage: 890
      },
      performance: {
        buyBox: 87.3, // percentage of time winning buy box
        rating: 4.7,
        reviews: 2847
      },
      lastUpdate: Date.now() - 4 * 60 * 1000,
      alerts: ['Buy box share decreased 3.2%']
    },
    {
      id: 'channel_003',
      name: 'eBay Store',
      platform: 'MARKETPLACE',
      status: 'ACTIVE',
      traffic: {
        current: 456,
        sessions: 3890,
        bounceRate: 31.5,
        pageViews: 8920
      },
      sales: {
        orders: 67,
        revenue: 15890,
        conversion: 1.72,
        averageOrderValue: 237.00
      },
      inventory: {
        available: 34570,
        reserved: 1890,
        backordered: 89
      },
      fulfillment: {
        processing: 18,
        shipped: 23,
        delivered: 45,
        returns: 4
      },
      fees: {
        final: 1234, // eBay final value fees
        listing: 45,
        promoted: 234
      },
      performance: {
        topRated: true,
        rating: 4.9,
        feedback: 98.7
      },
      lastUpdate: Date.now() - 7 * 60 * 1000,
      alerts: []
    },
    {
      id: 'channel_004',
      name: 'Social Commerce',
      platform: 'SOCIAL',
      status: 'ACTIVE',
      traffic: {
        current: 890,
        sessions: 5670,
        bounceRate: 52.1,
        pageViews: 12340
      },
      sales: {
        orders: 89,
        revenue: 18940,
        conversion: 1.57,
        averageOrderValue: 212.80
      },
      inventory: {
        available: 12890,
        reserved: 567,
        backordered: 23
      },
      fulfillment: {
        processing: 23,
        shipped: 34,
        delivered: 56,
        returns: 6
      },
      platforms: {
        instagram: { orders: 45, revenue: 9890 },
        facebook: { orders: 28, revenue: 6780 },
        tiktok: { orders: 16, revenue: 2270 }
      },
      engagement: {
        likes: 12890,
        shares: 1234,
        comments: 567
      },
      lastUpdate: Date.now() - 6 * 60 * 1000,
      alerts: ['TikTok shop performance up 45%']
    }
  ]);

  const [inventory, setInventory] = useState([
    {
      id: 'sku_001',
      sku: 'APP-SHR-001',
      name: 'Classic Cotton T-Shirt',
      category: 'Apparel',
      brand: 'House Brand',
      price: 24.99,
      cost: 8.50,
      margin: 66.0,
      totalStock: 8947,
      available: 8234,
      reserved: 456,
      backordered: 123,
      locations: {
        warehouse: 5670,
        stores: 2564,
        transit: 480,
        returns: 233
      },
      velocity: {
        daily: 127,
        weekly: 889,
        monthly: 3456
      },
      forecasting: {
        demand30: 3890,
        reorderPoint: 2000,
        reorderQuantity: 5000,
        leadTime: 14 // days
      },
      performance: {
        salesRank: 3,
        returnRate: 6.2,
        conversionRate: 12.4,
        reviews: 4.6
      },
      suppliers: ['Supplier A', 'Supplier B'],
      lastRestocked: Date.now() - 12 * 24 * 60 * 60 * 1000,
      nextRestock: Date.now() + 8 * 24 * 60 * 60 * 1000,
      alerts: ['Approaching reorder point'],
      lastUpdate: Date.now() - 8 * 60 * 1000
    },
    {
      id: 'sku_002',
      sku: 'ELC-PHN-015',
      name: 'Wireless Charging Pad',
      category: 'Electronics',
      brand: 'TechCorp',
      price: 49.99,
      cost: 22.00,
      margin: 56.0,
      totalStock: 2456,
      available: 2234,
      reserved: 189,
      backordered: 67,
      locations: {
        warehouse: 1890,
        stores: 344,
        transit: 156,
        returns: 66
      },
      velocity: {
        daily: 45,
        weekly: 315,
        monthly: 1350
      },
      forecasting: {
        demand30: 1400,
        reorderPoint: 500,
        reorderQuantity: 2000,
        leadTime: 21
      },
      performance: {
        salesRank: 12,
        returnRate: 3.8,
        conversionRate: 8.9,
        reviews: 4.4
      },
      suppliers: ['TechCorp Direct'],
      lastRestocked: Date.now() - 8 * 24 * 60 * 60 * 1000,
      nextRestock: Date.now() + 18 * 24 * 60 * 60 * 1000,
      alerts: [],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'sku_003',
      sku: 'HME-KTC-008',
      name: 'Stainless Steel Coffee Mug',
      category: 'Home & Kitchen',
      brand: 'EcoLiving',
      price: 19.99,
      cost: 6.75,
      margin: 66.2,
      totalStock: 5678,
      available: 5123,
      reserved: 234,
      backordered: 89,
      locations: {
        warehouse: 3890,
        stores: 1233,
        transit: 345,
        returns: 210
      },
      velocity: {
        daily: 89,
        weekly: 623,
        monthly: 2690
      },
      forecasting: {
        demand30: 2800,
        reorderPoint: 1500,
        reorderQuantity: 4000,
        leadTime: 10
      },
      performance: {
        salesRank: 7,
        returnRate: 4.1,
        conversionRate: 15.2,
        reviews: 4.8
      },
      suppliers: ['EcoLiving Inc'],
      lastRestocked: Date.now() - 5 * 24 * 60 * 60 * 1000,
      nextRestock: Date.now() + 12 * 24 * 60 * 60 * 1000,
      alerts: [],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'sku_004',
      sku: 'SPT-FTW-025',
      name: 'Running Shoes - Premium',
      category: 'Sports & Fitness',
      brand: 'ActiveWear',
      price: 129.99,
      cost: 55.00,
      margin: 57.7,
      totalStock: 1234,
      available: 998,
      reserved: 156,
      backordered: 234,
      locations: {
        warehouse: 567,
        stores: 431,
        transit: 89,
        returns: 147
      },
      velocity: {
        daily: 23,
        weekly: 161,
        monthly: 690
      },
      forecasting: {
        demand30: 720,
        reorderPoint: 300,
        reorderQuantity: 1000,
        leadTime: 28
      },
      performance: {
        salesRank: 18,
        returnRate: 11.9,
        conversionRate: 6.8,
        reviews: 4.2
      },
      suppliers: ['ActiveWear Factory'],
      lastRestocked: Date.now() - 18 * 24 * 60 * 60 * 1000,
      nextRestock: Date.now() + 23 * 24 * 60 * 60 * 1000,
      alerts: ['High return rate - investigate sizing'],
      lastUpdate: Date.now() - 11 * 60 * 1000
    },
    {
      id: 'sku_005',
      sku: 'BTY-SKN-012',
      name: 'Organic Face Moisturizer',
      category: 'Beauty & Personal Care',
      brand: 'NatureCare',
      price: 34.99,
      cost: 12.25,
      margin: 65.0,
      totalStock: 3456,
      available: 3123,
      reserved: 189,
      backordered: 45,
      locations: {
        warehouse: 2234,
        stores: 889,
        transit: 234,
        returns: 99
      },
      velocity: {
        daily: 67,
        weekly: 469,
        monthly: 2010
      },
      forecasting: {
        demand30: 2100,
        reorderPoint: 800,
        reorderQuantity: 2500,
        leadTime: 16
      },
      performance: {
        salesRank: 9,
        returnRate: 2.9,
        conversionRate: 18.7,
        reviews: 4.7
      },
      suppliers: ['NatureCare Labs'],
      lastRestocked: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextRestock: Date.now() + 15 * 24 * 60 * 60 * 1000,
      alerts: [],
      lastUpdate: Date.now() - 6 * 60 * 1000
    }
  ]);

  const [fulfillmentCenters, setFulfillmentCenters] = useState([
    {
      id: 'fc_001',
      name: 'East Coast Distribution Center',
      location: 'Newark, NJ',
      type: 'PRIMARY_DC',
      status: 'OPERATIONAL',
      capacity: {
        total: 2500000, // sq ft
        utilized: 1847500,
        utilization: 73.9
      },
      inventory: {
        skus: 12450,
        units: 2847680,
        value: 28476800
      },
      workforce: {
        scheduled: 285,
        present: 278,
        productivity: 94.2 // packages per hour
      },
      orders: {
        pending: 1247,
        processing: 89,
        packed: 456,
        shipped: 1892
      },
      shipping: {
        sameDay: { orders: 234, percentage: 12.4 },
        nextDay: { orders: 567, percentage: 30.1 },
        twoDay: { orders: 891, percentage: 47.2 },
        ground: { orders: 200, percentage: 10.3 }
      },
      performance: {
        accuracy: 99.7,
        onTimeShipment: 98.2,
        damageClaims: 0.3,
        costPerShipment: 8.45
      },
      equipment: {
        conveyors: { total: 24, operational: 23, maintenance: 1 },
        sorters: { total: 8, operational: 8, maintenance: 0 },
        robots: { total: 45, operational: 43, maintenance: 2 }
      },
      lastUpdate: Date.now() - 4 * 60 * 1000,
      alerts: ['Conveyor 12 scheduled maintenance tonight']
    },
    {
      id: 'fc_002',
      name: 'West Coast Fulfillment Hub',
      location: 'Los Angeles, CA',
      type: 'FULFILLMENT_HUB',
      status: 'OPERATIONAL',
      capacity: {
        total: 1800000,
        utilized: 1386000,
        utilization: 77.0
      },
      inventory: {
        skus: 9870,
        units: 1987650,
        value: 19876500
      },
      workforce: {
        scheduled: 198,
        present: 195,
        productivity: 91.8
      },
      orders: {
        pending: 892,
        processing: 67,
        packed: 234,
        shipped: 1156
      },
      shipping: {
        sameDay: { orders: 189, percentage: 16.3 },
        nextDay: { orders: 445, percentage: 38.5 },
        twoDay: { orders: 434, percentage: 37.6 },
        ground: { orders: 88, percentage: 7.6 }
      },
      performance: {
        accuracy: 99.5,
        onTimeShipment: 97.8,
        damageClaims: 0.4,
        costPerShipment: 9.12
      },
      equipment: {
        conveyors: { total: 18, operational: 18, maintenance: 0 },
        sorters: { total: 6, operational: 5, maintenance: 1 },
        robots: { total: 32, operational: 32, maintenance: 0 }
      },
      lastUpdate: Date.now() - 7 * 60 * 1000,
      alerts: ['Peak capacity projected for next week']
    },
    {
      id: 'fc_003',
      name: 'Midwest Regional Center',
      location: 'Chicago, IL',
      type: 'REGIONAL_CENTER',
      status: 'OPERATIONAL',
      capacity: {
        total: 1200000,
        utilized: 876000,
        utilization: 73.0
      },
      inventory: {
        skus: 7890,
        units: 1456780,
        value: 14567800
      },
      workforce: {
        scheduled: 145,
        present: 142,
        productivity: 89.7
      },
      orders: {
        pending: 567,
        processing: 45,
        packed: 189,
        shipped: 789
      },
      shipping: {
        sameDay: { orders: 67, percentage: 8.5 },
        nextDay: { orders: 234, percentage: 29.7 },
        twoDay: { orders: 356, percentage: 45.1 },
        ground: { orders: 132, percentage: 16.7 }
      },
      performance: {
        accuracy: 99.8,
        onTimeShipment: 98.9,
        damageClaims: 0.2,
        costPerShipment: 7.89
      },
      equipment: {
        conveyors: { total: 15, operational: 14, maintenance: 1 },
        sorters: { total: 4, operational: 4, maintenance: 0 },
        robots: { total: 28, operational: 26, maintenance: 2 }
      },
      lastUpdate: Date.now() - 9 * 60 * 1000,
      alerts: ['Robot maintenance completed ahead of schedule']
    }
  ]);

  const [customerMetrics, setCustomerMetrics] = useState({
    totalCustomers: 2847650,
    newCustomers: {
      today: 1247,
      week: 8940,
      month: 34560
    },
    segments: {
      vip: { count: 28476, percentage: 1.0, clv: 2890 },
      loyal: { count: 341580, percentage: 12.0, clv: 890 },
      regular: { count: 1139060, percentage: 40.0, clv: 345 },
      occasional: { count: 1338534, percentage: 47.0, clv: 125 }
    },
    satisfaction: {
      nps: 67.2, // Net Promoter Score
      csat: 4.3, // Customer Satisfaction (1-5)
      reviews: 4.6, // Average review rating
      complaints: 234 // This week
    },
    support: {
      tickets: {
        open: 567,
        inProgress: 234,
        resolved: 1892,
        escalated: 45
      },
      channels: {
        chat: { volume: 890, satisfaction: 4.2 },
        email: { volume: 456, satisfaction: 4.1 },
        phone: { volume: 234, satisfaction: 4.4 },
        social: { volume: 123, satisfaction: 3.9 }
      },
      responseTime: {
        chat: '2m 15s',
        email: '4h 32m',
        phone: '45s',
        social: '1h 18m'
      }
    },
    loyalty: {
      programMembers: 1247890,
      pointsRedeemed: 8947650,
      pointsEarned: 12456780,
      tierDistribution: {
        bronze: 65.4,
        silver: 28.9,
        gold: 4.8,
        platinum: 0.9
      }
    },
    lastUpdate: Date.now() - 12 * 60 * 1000
  });

  const [performanceTrends, setPerformanceTrends] = useState([]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        revenue: Math.floor(Math.random() * 50000) + 250000, // $250k-300k daily
        orders: Math.floor(Math.random() * 500) + 2000, // 2000-2500 orders
        conversion: Math.floor(Math.random() * 200) + 180, // 1.8-3.8% conversion
        traffic: Math.floor(Math.random() * 10000) + 80000, // 80k-90k visitors
        inventory: Math.floor(Math.random() * 1000000) + 4000000, // 4M-5M inventory value
        fulfillment: Math.floor(Math.random() * 500) + 9500, // 95-100% fulfillment rate
        satisfaction: Math.floor(Math.random() * 50) + 420 // 4.2-4.7 satisfaction
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update store traffic and sales
      setStores(prev => prev.map(store => {
        const trafficChange = Math.floor((Math.random() - 0.5) * 20);
        const newTraffic = Math.max(0, Math.min(store.traffic.capacity, store.traffic.current + trafficChange));
        
        return {
          ...store,
          traffic: {
            ...store.traffic,
            current: newTraffic,
            dailyTotal: store.traffic.dailyTotal + Math.floor(Math.random() * 5)
          },
          sales: {
            ...store.sales,
            today: store.sales.today + Math.floor(Math.random() * 500) + 100
          },
          lastUpdate: Date.now()
        };
      }));

      // Update online channels
      setOnlineChannels(prev => prev.map(channel => ({
        ...channel,
        traffic: {
          ...channel.traffic,
          current: Math.max(500, channel.traffic.current + Math.floor((Math.random() - 0.5) * 200))
        },
        sales: {
          ...channel.sales,
          orders: channel.sales.orders + Math.floor(Math.random() * 5),
          revenue: channel.sales.revenue + Math.floor(Math.random() * 1000) + 200
        },
        lastUpdate: Date.now()
      })));

      // Update inventory levels
      setInventory(prev => prev.map(item => ({
        ...item,
        available: Math.max(0, item.available - Math.floor(Math.random() * 10)),
        reserved: Math.max(0, item.reserved + Math.floor((Math.random() - 0.7) * 20)),
        lastUpdate: Date.now()
      })));

      // Update fulfillment centers
      setFulfillmentCenters(prev => prev.map(fc => ({
        ...fc,
        orders: {
          ...fc.orders,
          pending: Math.max(0, fc.orders.pending + Math.floor((Math.random() - 0.6) * 50)),
          processing: Math.max(0, fc.orders.processing + Math.floor((Math.random() - 0.5) * 20)),
          shipped: fc.orders.shipped + Math.floor(Math.random() * 20) + 10
        },
        workforce: {
          ...fc.workforce,
          productivity: Math.max(80, Math.min(100, fc.workforce.productivity + (Math.random() - 0.5) * 5))
        },
        lastUpdate: Date.now()
      })));

      // Update customer metrics
      setCustomerMetrics(prev => ({
        ...prev,
        newCustomers: {
          ...prev.newCustomers,
          today: prev.newCustomers.today + Math.floor(Math.random() * 10)
        },
        support: {
          ...prev.support,
          tickets: {
            ...prev.support.tickets,
            open: Math.max(0, prev.support.tickets.open + Math.floor((Math.random() - 0.6) * 10)),
            resolved: prev.support.tickets.resolved + Math.floor(Math.random() * 5)
          }
        },
        lastUpdate: Date.now()
      }));

    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPEN':
      case 'ACTIVE':
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BUSY':
      case 'PEAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'LIMITED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CLOSED':
      case 'OFFLINE':
      case 'DOWN': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPerformanceColor = (actual, target) => {
    const ratio = actual / target;
    if (ratio >= 1.1) return 'text-green-400';
    if (ratio >= 0.9) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toFixed(0)}`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏪 RETAIL OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {stores.filter(s => s.status === 'OPEN').length}/{stores.length} Stores Open
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {Math.floor(stores.reduce((sum, s) => sum + s.sales.today, 0) / 1000)}K Daily Revenue
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Omnichannel Command Center
          </div>
        </div>
      </div>

      {/* Retail Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">DAILY REVENUE</div>
              <div className="text-2xl font-bold text-green-100">
                {formatCurrency(stores.reduce((sum, s) => sum + s.sales.today, 0) + onlineChannels.reduce((sum, c) => sum + c.sales.revenue, 0))}
              </div>
              <div className="text-xs text-green-300">
                Stores: {formatCurrency(stores.reduce((sum, s) => sum + s.sales.today, 0))} | Online: {formatCurrency(onlineChannels.reduce((sum, c) => sum + c.sales.revenue, 0))}
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL ORDERS</div>
              <div className="text-2xl font-bold text-blue-100">
                {stores.reduce((sum, s) => sum + s.channels.pos.orders + s.channels.bopis.orders + s.channels.ship.orders, 0) + onlineChannels.reduce((sum, c) => sum + c.sales.orders, 0)}
              </div>
              <div className="text-xs text-blue-300">
                Conversion: {((stores.reduce((sum, s) => sum + s.performance.conversionRate, 0) / stores.length).toFixed(1))}%
              </div>
            </div>
            <div className="text-3xl opacity-60">📦</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">INVENTORY VALUE</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatCurrency(fulfillmentCenters.reduce((sum, fc) => sum + fc.inventory.value, 0))}
              </div>
              <div className="text-xs text-purple-300">
                {(fulfillmentCenters.reduce((sum, fc) => sum + fc.inventory.units, 0) / 1000).toFixed(0)}K units
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CUSTOMER SATISFACTION</div>
              <div className="text-2xl font-bold text-orange-100">
                {customerMetrics.satisfaction.csat.toFixed(1)}/5
              </div>
              <div className="text-xs text-orange-300">
                NPS: {customerMetrics.satisfaction.nps.toFixed(0)} | Reviews: {customerMetrics.satisfaction.reviews.toFixed(1)}
              </div>
            </div>
            <div className="text-3xl opacity-60">⭐</div>
          </div>
        </div>
      </div>

      {/* Store Operations and Online Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏪 STORE OPERATIONS & PHYSICAL RETAIL
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {stores.map((store) => (
              <div key={store.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(store.status)}`}>
                      {store.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {store.type}
                    </span>
                    {store.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        {store.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(store.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{store.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{store.location} | Manager: {store.manager}</div>
                <div className="text-xs text-purple-400 mb-3">{store.sqft.toLocaleString()} sq ft</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Traffic</div>
                    <div className={store.traffic.current > store.traffic.capacity * 0.8 ? 'text-red-400' : 'text-green-400'}>
                      {store.traffic.current}/{store.traffic.capacity}
                    </div>
                    <div className="text-gray-500">{Math.floor((store.traffic.current / store.traffic.capacity) * 100)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Sales Today</div>
                    <div className={getPerformanceColor(store.sales.today, store.sales.target)}>
                      {formatCurrency(store.sales.today)}
                    </div>
                    <div className="text-gray-500">vs {formatCurrency(store.sales.target)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Conversion</div>
                    <div className="text-blue-400">{store.performance.conversionRate.toFixed(1)}%</div>
                    <div className="text-gray-500">AOV: ${store.performance.averageTicket.toFixed(0)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Staff</div>
                    <div className={store.staff.present < store.staff.scheduled ? 'text-yellow-400' : 'text-green-400'}>
                      {store.staff.present}/{store.staff.scheduled}
                    </div>
                    <div className="text-gray-500">Breaks: {store.staff.breaks}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Registers</div>
                    <div className="text-purple-400">{store.staff.activeRegisters}/{store.staff.registers}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Inventory</div>
                    <div className={store.inventory.lowStock > 20 ? 'text-red-400' : store.inventory.lowStock > 10 ? 'text-yellow-400' : 'text-green-400'}>
                      {store.inventory.available.toLocaleString()}
                    </div>
                    <div className="text-gray-500">Low: {store.inventory.lowStock}</div>
                  </div>
                </div>

                {/* Channel Performance */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Channel Performance:</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-green-400">POS: {store.channels.pos.orders}</span>
                      <div className="text-gray-500">{formatCurrency(store.channels.pos.revenue)}</div>
                    </div>
                    <div>
                      <span className="text-blue-400">BOPIS: {store.channels.bopis.orders}</span>
                      <div className="text-gray-500">{formatCurrency(store.channels.bopis.revenue)}</div>
                    </div>
                    <div>
                      <span className="text-purple-400">Ship: {store.channels.ship.orders}</span>
                      <div className="text-gray-500">{formatCurrency(store.channels.ship.revenue)}</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Performance: </span>
                  <span className="text-orange-400">Return Rate: {store.performance.returnRate.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-cyan-400">Items/Transaction: {store.performance.itemsPerTransaction.toFixed(1)}</span>
                </div>

                {store.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {store.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">⚠️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Online Channels */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 ONLINE CHANNELS & E-COMMERCE
          </h3>
          <div className="space-y-3">
            {onlineChannels.map((channel) => (
              <div key={channel.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(channel.status)}`}>
                      {channel.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {channel.platform}
                    </span>
                    {channel.alerts && channel.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {channel.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(channel.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{channel.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{channel.platform.replace('_', ' ')} Platform</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Current Traffic</div>
                    <div className="text-blue-400">{channel.traffic.current.toLocaleString()}</div>
                    <div className="text-gray-500">Sessions: {channel.traffic.sessions.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Revenue</div>
                    <div className="text-green-400">{formatCurrency(channel.sales.revenue)}</div>
                    <div className="text-gray-500">Orders: {channel.sales.orders}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Conversion</div>
                    <div className="text-purple-400">{channel.sales.conversion.toFixed(2)}%</div>
                    <div className="text-gray-500">AOV: ${channel.sales.averageOrderValue.toFixed(0)}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Page Views</div>
                    <div className="text-cyan-400">{channel.traffic.pageViews.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Bounce Rate</div>
                    <div className={channel.traffic.bounceRate > 50 ? 'text-red-400' : channel.traffic.bounceRate > 40 ? 'text-yellow-400' : 'text-green-400'}>
                      {channel.traffic.bounceRate.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Inventory</div>
                    <div className="text-indigo-400">{channel.inventory.available.toLocaleString()}</div>
                  </div>
                </div>

                {/* Fulfillment Status */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Fulfillment Status:</div>
                  <div className="grid grid-cols-4 gap-1">
                    <div>
                      <span className="text-orange-400">Processing: {channel.fulfillment.processing}</span>
                    </div>
                    <div>
                      <span className="text-blue-400">Shipped: {channel.fulfillment.shipped}</span>
                    </div>
                    <div>
                      <span className="text-green-400">Delivered: {channel.fulfillment.delivered}</span>
                    </div>
                    <div>
                      <span className="text-red-400">Returns: {channel.fulfillment.returns}</span>
                    </div>
                  </div>
                </div>

                {/* Platform-specific metrics */}
                {channel.deviceSplit && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Device Split: </span>
                    <span className="text-blue-400">Mobile: {channel.deviceSplit.mobile.toFixed(1)}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-green-400">Desktop: {channel.deviceSplit.desktop.toFixed(1)}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-purple-400">Tablet: {channel.deviceSplit.tablet.toFixed(1)}%</span>
                  </div>
                )}

                {channel.performance && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Marketplace: </span>
                    <span className="text-yellow-400">Buy Box: {channel.performance.buyBox}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-green-400">Rating: {channel.performance.rating.toFixed(1)}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-cyan-400">Reviews: {channel.performance.reviews || channel.performance.feedback}</span>
                  </div>
                )}

                {channel.platforms && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Social Platforms:</div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="text-pink-400">IG: {channel.platforms.instagram.orders}</div>
                      <div className="text-blue-400">FB: {channel.platforms.facebook.orders}</div>
                      <div className="text-purple-400">TT: {channel.platforms.tiktok.orders}</div>
                    </div>
                  </div>
                )}

                {channel.alerts && channel.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {channel.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">⚠️ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory and Fulfillment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 INVENTORY MANAGEMENT & SKU PERFORMANCE
          </h3>
          <div className="space-y-3">
            {inventory.map((item) => (
              <div key={item.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {item.category}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                      Rank #{item.performance.salesRank}
                    </span>
                    {item.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                        ALERT
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(item.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                <div className="text-xs text-cyan-400 mb-2">SKU: {item.sku} | {item.brand}</div>
                <div className="text-xs text-green-400 mb-3">${item.price} | Margin: {item.margin.toFixed(1)}%</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Available</div>
                    <div className={item.available < item.forecasting.reorderPoint ? 'text-red-400' : 'text-green-400'}>
                      {item.available.toLocaleString()}
                    </div>
                    <div className="text-gray-500">Total: {item.totalStock.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Reserved</div>
                    <div className="text-yellow-400">{item.reserved.toLocaleString()}</div>
                    <div className="text-gray-500">BO: {item.backordered.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Velocity</div>
                    <div className="text-blue-400">{item.velocity.daily}/day</div>
                    <div className="text-gray-500">Weekly: {item.velocity.weekly}</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Warehouse</div>
                    <div className="text-purple-400">{item.locations.warehouse.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Stores</div>
                    <div className="text-indigo-400">{item.locations.stores.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Transit</div>
                    <div className="text-orange-400">{item.locations.transit.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Returns</div>
                    <div className="text-red-400">{item.locations.returns.toLocaleString()}</div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Forecasting: </span>
                  <span className="text-cyan-400">30d Demand: {item.forecasting.demand30.toLocaleString()}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-yellow-400">Reorder: {item.forecasting.reorderPoint.toLocaleString()}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">Lead Time: {item.forecasting.leadTime}d</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Performance: </span>
                  <span className="text-blue-400">Conversion: {item.performance.conversionRate.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Return Rate: {item.performance.returnRate.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Reviews: {item.performance.reviews.toFixed(1)}/5</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Next Restock: </span>
                  <span className="text-indigo-400">{Math.floor((item.nextRestock - Date.now()) / (24 * 60 * 60 * 1000))} days</span>
                  <span className="text-gray-400"> | Supplier: </span>
                  <span className="text-pink-400">{item.suppliers[0]}</span>
                </div>

                {item.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {item.alerts.map((alert, index) => (
                      <div key={index} className="text-yellow-400">📊 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Fulfillment Centers */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚚 FULFILLMENT CENTERS & DISTRIBUTION
          </h3>
          <div className="space-y-3">
            {fulfillmentCenters.map((fc) => (
              <div key={fc.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(fc.status)}`}>
                      {fc.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {fc.type.replace('_', ' ')}
                    </span>
                    {fc.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                        {fc.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(fc.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{fc.name}</div>
                <div className="text-xs text-cyan-400 mb-3">{fc.location}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className={fc.capacity.utilization > 85 ? 'text-red-400' : fc.capacity.utilization > 70 ? 'text-yellow-400' : 'text-green-400'}>
                      {fc.capacity.utilization.toFixed(1)}%
                    </div>
                    <div className="text-gray-500">{(fc.capacity.utilized / 1000).toFixed(0)}K / {(fc.capacity.total / 1000).toFixed(0)}K sq ft</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Inventory</div>
                    <div className="text-blue-400">{formatCurrency(fc.inventory.value)}</div>
                    <div className="text-gray-500">{fc.inventory.skus.toLocaleString()} SKUs</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Orders Pending</div>
                    <div className="text-orange-400">{fc.orders.pending.toLocaleString()}</div>
                    <div className="text-gray-500">Processing: {fc.orders.processing}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Workforce</div>
                    <div className={fc.workforce.present < fc.workforce.scheduled ? 'text-yellow-400' : 'text-green-400'}>
                      {fc.workforce.present}/{fc.workforce.scheduled}
                    </div>
                    <div className="text-gray-500">Productivity: {fc.workforce.productivity.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Shipped Today</div>
                    <div className="text-green-400">{fc.orders.shipped.toLocaleString()}</div>
                    <div className="text-gray-500">On-time: {fc.performance.onTimeShipment.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Accuracy</div>
                    <div className="text-purple-400">{fc.performance.accuracy.toFixed(1)}%</div>
                    <div className="text-gray-500">Damage: {fc.performance.damageClaims.toFixed(1)}%</div>
                  </div>
                </div>

                {/* Shipping Speed Distribution */}
                <div className="text-xs mb-3">
                  <div className="text-gray-400">Shipping Speed Distribution:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-red-400">Same Day: {fc.shipping.sameDay.percentage.toFixed(1)}%</span>
                      <div className="text-gray-500">({fc.shipping.sameDay.orders} orders)</div>
                    </div>
                    <div>
                      <span className="text-orange-400">Next Day: {fc.shipping.nextDay.percentage.toFixed(1)}%</span>
                      <div className="text-gray-500">({fc.shipping.nextDay.orders} orders)</div>
                    </div>
                    <div>
                      <span className="text-yellow-400">2-Day: {fc.shipping.twoDay.percentage.toFixed(1)}%</span>
                      <div className="text-gray-500">({fc.shipping.twoDay.orders} orders)</div>
                    </div>
                    <div>
                      <span className="text-green-400">Ground: {fc.shipping.ground.percentage.toFixed(1)}%</span>
                      <div className="text-gray-500">({fc.shipping.ground.orders} orders)</div>
                    </div>
                  </div>
                </div>

                {/* Equipment Status */}
                <div className="text-xs mb-2">
                  <div className="text-gray-400">Equipment Status:</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-blue-400">Conveyors: {fc.equipment.conveyors.operational}/{fc.equipment.conveyors.total}</span>
                    </div>
                    <div>
                      <span className="text-purple-400">Sorters: {fc.equipment.sorters.operational}/{fc.equipment.sorters.total}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">Robots: {fc.equipment.robots.operational}/{fc.equipment.robots.total}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Cost per Shipment: </span>
                  <span className="text-green-400">${fc.performance.costPerShipment.toFixed(2)}</span>
                </div>

                {fc.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {fc.alerts.map((alert, index) => (
                      <div key={index} className="text-blue-400">🔧 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Analytics and Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 CUSTOMER ANALYTICS & SUPPORT METRICS
          </h3>
          
          {/* Customer Overview */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Customer Overview</h4>
            <div className="grid grid-cols-2 gap-4 text-xs mb-3">
              <div>
                <div className="text-gray-400">Total Customers</div>
                <div className="text-white font-bold text-lg">{(customerMetrics.totalCustomers / 1000000).toFixed(2)}M</div>
              </div>
              <div>
                <div className="text-gray-400">New Today</div>
                <div className="text-green-400 font-bold text-lg">{customerMetrics.newCustomers.today.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="text-xs mb-3">
              <div className="text-gray-400">Customer Segments:</div>
              <div className="grid grid-cols-4 gap-1">
                <div className="text-center">
                  <div className="text-yellow-400">VIP</div>
                  <div className="text-white">{customerMetrics.segments.vip.percentage.toFixed(1)}%</div>
                  <div className="text-gray-500">CLV: ${customerMetrics.segments.vip.clv}</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400">Loyal</div>
                  <div className="text-white">{customerMetrics.segments.loyal.percentage.toFixed(1)}%</div>
                  <div className="text-gray-500">CLV: ${customerMetrics.segments.loyal.clv}</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400">Regular</div>
                  <div className="text-white">{customerMetrics.segments.regular.percentage.toFixed(1)}%</div>
                  <div className="text-gray-500">CLV: ${customerMetrics.segments.regular.clv}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400">Occasional</div>
                  <div className="text-white">{customerMetrics.segments.occasional.percentage.toFixed(1)}%</div>
                  <div className="text-gray-500">CLV: ${customerMetrics.segments.occasional.clv}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Satisfaction Metrics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Satisfaction & Reviews</h4>
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div className="text-center">
                <div className="text-gray-400">NPS Score</div>
                <div className="text-green-400 font-bold">{customerMetrics.satisfaction.nps.toFixed(0)}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">CSAT</div>
                <div className="text-blue-400 font-bold">{customerMetrics.satisfaction.csat.toFixed(1)}/5</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Reviews</div>
                <div className="text-purple-400 font-bold">{customerMetrics.satisfaction.reviews.toFixed(1)}/5</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">Complaints</div>
                <div className="text-orange-400 font-bold">{customerMetrics.satisfaction.complaints}</div>
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Support Operations</h4>
            <div className="grid grid-cols-4 gap-2 text-xs mb-3">
              <div className="text-center">
                <div className="text-orange-400">Open</div>
                <div className="text-white font-bold">{customerMetrics.support.tickets.open}</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400">In Progress</div>
                <div className="text-white font-bold">{customerMetrics.support.tickets.inProgress}</div>
              </div>
              <div className="text-center">
                <div className="text-green-400">Resolved</div>
                <div className="text-white font-bold">{customerMetrics.support.tickets.resolved}</div>
              </div>
              <div className="text-center">
                <div className="text-red-400">Escalated</div>
                <div className="text-white font-bold">{customerMetrics.support.tickets.escalated}</div>
              </div>
            </div>

            <div className="text-xs">
              <div className="text-gray-400">Response Times:</div>
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-green-400">Chat:</span> {customerMetrics.support.responseTime.chat}</div>
                <div><span className="text-blue-400">Email:</span> {customerMetrics.support.responseTime.email}</div>
                <div><span className="text-purple-400">Phone:</span> {customerMetrics.support.responseTime.phone}</div>
                <div><span className="text-orange-400">Social:</span> {customerMetrics.support.responseTime.social}</div>
              </div>
            </div>
          </div>

          {/* Loyalty Program */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Loyalty Program</h4>
            <div className="grid grid-cols-2 gap-4 text-xs mb-3">
              <div>
                <div className="text-gray-400">Members</div>
                <div className="text-cyan-400 font-bold">{(customerMetrics.loyalty.programMembers / 1000000).toFixed(1)}M</div>
              </div>
              <div>
                <div className="text-gray-400">Points Balance</div>
                <div className="text-yellow-400 font-bold">{(customerMetrics.loyalty.pointsEarned / 1000000).toFixed(1)}M</div>
              </div>
            </div>
            
            <div className="text-xs">
              <div className="text-gray-400">Tier Distribution:</div>
              <div className="grid grid-cols-4 gap-1">
                <div className="text-center">
                  <div className="text-yellow-600">Bronze</div>
                  <div className="text-white">{customerMetrics.loyalty.tierDistribution.bronze.toFixed(1)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400">Silver</div>
                  <div className="text-white">{customerMetrics.loyalty.tierDistribution.silver.toFixed(1)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400">Gold</div>
                  <div className="text-white">{customerMetrics.loyalty.tierDistribution.gold.toFixed(1)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400">Platinum</div>
                  <div className="text-white">{customerMetrics.loyalty.tierDistribution.platinum.toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 RETAIL PERFORMANCE TRENDS (30 DAYS)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
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
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Daily Revenue"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="orders" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Orders"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="conversion" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Conversion Rate"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="satisfaction" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Customer Satisfaction"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Retail KPIs Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 RETAIL OPERATIONS KPIs & OMNICHANNEL METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Total Revenue</div>
            <div className="text-white font-bold text-lg">
              {formatCurrency(stores.reduce((sum, s) => sum + s.sales.today, 0) + onlineChannels.reduce((sum, c) => sum + c.sales.revenue, 0))}
            </div>
            <div className="text-green-400 text-xs">daily total</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Conversion</div>
            <div className="text-white font-bold text-lg">
              {((stores.reduce((sum, s) => sum + s.performance.conversionRate, 0) + onlineChannels.reduce((sum, c) => sum + c.sales.conversion, 0)) / (stores.length + onlineChannels.length)).toFixed(1)}%
            </div>
            <div className="text-blue-400 text-xs">omnichannel</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Fulfillment Rate</div>
            <div className="text-white font-bold text-lg">
              {((fulfillmentCenters.reduce((sum, fc) => sum + fc.performance.onTimeShipment, 0)) / fulfillmentCenters.length).toFixed(1)}%
            </div>
            <div className="text-purple-400 text-xs">on-time shipping</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Inventory Turnover</div>
            <div className="text-white font-bold text-lg">
              {(inventory.reduce((sum, item) => sum + item.velocity.monthly, 0) / inventory.reduce((sum, item) => sum + item.totalStock, 0) * 12).toFixed(1)}x
            </div>
            <div className="text-cyan-400 text-xs">annual rate</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Customer LTV</div>
            <div className="text-white font-bold text-lg">
              ${((customerMetrics.segments.vip.clv + customerMetrics.segments.loyal.clv + customerMetrics.segments.regular.clv + customerMetrics.segments.occasional.clv) / 4).toFixed(0)}
            </div>
            <div className="text-orange-400 text-xs">avg across segments</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Return Rate</div>
            <div className="text-white font-bold text-lg">
              {(stores.reduce((sum, s) => sum + s.performance.returnRate, 0) / stores.length).toFixed(1)}%
            </div>
            <div className="text-yellow-400 text-xs">avg stores</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailOperations;