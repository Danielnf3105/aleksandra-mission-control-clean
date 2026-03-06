import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { ShoppingCart, Package, TrendingUp, AlertTriangle, Activity, Eye, Users, CreditCard, MapPin, Settings, Clock, Truck } from 'lucide-react';

const RetailOperationsCenter = () => {
  const [retailMetrics, setRetailMetrics] = useState({
    totalRevenue: 24765892.47, // Daily revenue USD
    totalTransactions: 47832,
    averageOrderValue: 124.67,
    conversionRate: 3.42, // %
    inventoryValue: 8945673.12,
    stockoutItems: 247,
    fulfillmentRate: 97.8, // %
    customerSatisfaction: 4.6 // /5.0
  });

  const [storeOperations, setStoreOperations] = useState([
    {
      id: 'STORE-001',
      name: 'Manhattan Flagship',
      location: 'New York, NY',
      revenue: 4567890.23,
      transactions: 8942,
      aov: 156.78,
      conversion: 4.2,
      footTraffic: 23847,
      staffCount: 45,
      inventoryTurnover: 8.7,
      status: 'performing',
      alerts: 0
    },
    {
      id: 'STORE-002',
      name: 'Beverly Hills Premium',
      location: 'Los Angeles, CA',
      revenue: 3456789.12,
      transactions: 6234,
      aov: 189.45,
      conversion: 3.8,
      footTraffic: 18934,
      staffCount: 38,
      inventoryTurnover: 7.2,
      status: 'performing',
      alerts: 1
    },
    {
      id: 'STORE-003',
      name: 'Chicago Downtown',
      location: 'Chicago, IL',
      revenue: 2345678.91,
      transactions: 5623,
      aov: 134.56,
      conversion: 3.1,
      footTraffic: 16782,
      staffCount: 32,
      inventoryTurnover: 6.8,
      status: 'underperforming',
      alerts: 3
    },
    {
      id: 'STORE-004',
      name: 'Miami Beach Outlet',
      location: 'Miami, FL',
      revenue: 1876543.21,
      transactions: 7892,
      aov: 98.34,
      conversion: 4.7,
      footTraffic: 21456,
      staffCount: 28,
      inventoryTurnover: 9.1,
      status: 'performing',
      alerts: 0
    },
    {
      id: 'STORE-005',
      name: 'Seattle Tech Hub',
      location: 'Seattle, WA',
      revenue: 2987654.32,
      transactions: 4567,
      aov: 167.89,
      conversion: 2.8,
      footTraffic: 14523,
      staffCount: 25,
      inventoryTurnover: 5.4,
      status: 'attention_needed',
      alerts: 2
    }
  ]);

  const [inventoryManagement, setInventoryManagement] = useState([
    {
      id: 'CAT-ELECTRONICS',
      category: 'Electronics',
      totalItems: 2847,
      stockLevel: 87.3, // %
      reorderAlerts: 23,
      fastMoving: 456,
      slowMoving: 89,
      turnoverRate: 8.7,
      inventoryValue: 3245678.90,
      status: 'optimal'
    },
    {
      id: 'CAT-CLOTHING',
      category: 'Clothing',
      totalItems: 5623,
      stockLevel: 76.2,
      reorderAlerts: 167,
      fastMoving: 890,
      slowMoving: 234,
      turnoverRate: 12.4,
      inventoryValue: 2456789.12,
      status: 'attention'
    },
    {
      id: 'CAT-FOOTWEAR',
      category: 'Footwear',
      totalItems: 1894,
      stockLevel: 92.1,
      reorderAlerts: 12,
      fastMoving: 345,
      slowMoving: 45,
      turnoverRate: 9.8,
      inventoryValue: 1567890.23,
      status: 'optimal'
    },
    {
      id: 'CAT-ACCESSORIES',
      category: 'Accessories',
      totalItems: 3456,
      stockLevel: 68.4,
      reorderAlerts: 89,
      fastMoving: 567,
      slowMoving: 123,
      turnoverRate: 15.2,
      inventoryValue: 987654.32,
      status: 'critical'
    },
    {
      id: 'CAT-HOME',
      category: 'Home & Garden',
      totalItems: 2134,
      stockLevel: 81.7,
      reorderAlerts: 34,
      fastMoving: 289,
      slowMoving: 67,
      turnoverRate: 6.9,
      inventoryValue: 1234567.89,
      status: 'optimal'
    }
  ]);

  const [supplyChainMonitoring, setSupplyChainMonitoring] = useState([
    {
      id: 'SUPPLIER-001',
      name: 'Global Electronics Ltd',
      category: 'Electronics',
      onTimeDelivery: 96.7, // %
      qualityScore: 4.8,
      leadTime: 14, // days
      orderVolume: 2456789.12,
      activeOrders: 89,
      delayedOrders: 3,
      status: 'reliable',
      lastDelivery: '2026-03-05'
    },
    {
      id: 'SUPPLIER-002',
      name: 'Fashion Forward Inc',
      category: 'Clothing',
      onTimeDelivery: 87.3,
      qualityScore: 4.2,
      leadTime: 21,
      orderVolume: 1876543.21,
      activeOrders: 156,
      delayedOrders: 12,
      status: 'issues',
      lastDelivery: '2026-03-04'
    },
    {
      id: 'SUPPLIER-003',
      name: 'Premium Footwear Co',
      category: 'Footwear',
      onTimeDelivery: 94.5,
      qualityScore: 4.6,
      leadTime: 18,
      orderVolume: 987654.32,
      activeOrders: 67,
      delayedOrders: 2,
      status: 'reliable',
      lastDelivery: '2026-03-06'
    },
    {
      id: 'SUPPLIER-004',
      name: 'Accessory Artisans',
      category: 'Accessories',
      onTimeDelivery: 78.9,
      qualityScore: 3.9,
      leadTime: 28,
      orderVolume: 654321.09,
      activeOrders: 234,
      delayedOrders: 34,
      status: 'review_needed',
      lastDelivery: '2026-03-02'
    },
    {
      id: 'SUPPLIER-005',
      name: 'Home Essentials LLC',
      category: 'Home & Garden',
      onTimeDelivery: 91.2,
      qualityScore: 4.4,
      leadTime: 16,
      orderVolume: 1234567.89,
      activeOrders: 78,
      delayedOrders: 5,
      status: 'reliable',
      lastDelivery: '2026-03-05'
    }
  ]);

  const [posAnalytics, setPosAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      revenue: 24234567.89,
      transactions: 46234,
      aov: 123.45,
      conversion: 3.38
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      revenue: 24356789.12,
      transactions: 46789,
      aov: 124.12,
      conversion: 3.41
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      revenue: 24456789.23,
      transactions: 47123,
      aov: 124.34,
      conversion: 3.39
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      revenue: 24567890.34,
      transactions: 47456,
      aov: 124.56,
      conversion: 3.40
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      revenue: 24656789.45,
      transactions: 47678,
      aov: 124.78,
      conversion: 3.41
    },
    {
      time: new Date().toLocaleTimeString(),
      revenue: 24765892.47,
      transactions: 47832,
      aov: 124.67,
      conversion: 3.42
    }
  ]);

  const [retailAlerts, setRetailAlerts] = useState([
    {
      id: 'RETAIL-001',
      severity: 'critical',
      type: 'Inventory Stockout',
      message: 'iPhone 15 Pro Max out of stock across 3 stores - urgent restocking needed',
      timestamp: new Date(),
      status: 'active',
      store: 'Multiple Locations',
      impact: 'high'
    },
    {
      id: 'RETAIL-002',
      severity: 'warning',
      type: 'Supplier Delay',
      message: 'Fashion Forward Inc shipment delayed by 5 days - impact on spring collection',
      timestamp: new Date(Date.now() - 180000),
      status: 'investigating',
      store: 'Warehouse',
      impact: 'medium'
    },
    {
      id: 'RETAIL-003',
      severity: 'info',
      type: 'Sales Surge',
      message: 'Nike Air Max experiencing 300% sales increase - consider promotional boost',
      timestamp: new Date(Date.now() - 360000),
      status: 'monitoring',
      store: 'Seattle Tech Hub',
      impact: 'positive'
    }
  ]);

  const [customerAnalytics, setCustomerAnalytics] = useState([
    {
      demographic: '18-25',
      percentage: 23.4,
      avgSpend: 89.67,
      visits: 3.2,
      loyalty: 'moderate'
    },
    {
      demographic: '26-35',
      percentage: 31.8,
      avgSpend: 156.78,
      visits: 4.7,
      loyalty: 'high'
    },
    {
      demographic: '36-45',
      percentage: 28.9,
      avgSpend: 198.34,
      visits: 3.8,
      loyalty: 'high'
    },
    {
      demographic: '46-55',
      percentage: 12.7,
      avgSpend: 234.56,
      visits: 2.9,
      loyalty: 'very_high'
    },
    {
      demographic: '55+',
      percentage: 3.2,
      avgSpend: 167.89,
      visits: 2.1,
      loyalty: 'moderate'
    }
  ]);

  const [staffMetrics, setStaffMetrics] = useState([
    {
      position: 'Store Manager',
      count: 15,
      efficiency: 94.2,
      customerRating: 4.7,
      salesPerHour: 287.45
    },
    {
      position: 'Sales Associate',
      count: 89,
      efficiency: 87.6,
      customerRating: 4.3,
      salesPerHour: 156.78
    },
    {
      position: 'Cashier',
      count: 67,
      efficiency: 91.3,
      customerRating: 4.5,
      salesPerHour: 234.56
    },
    {
      position: 'Stock Associate',
      count: 45,
      efficiency: 88.9,
      customerRating: 4.1,
      salesPerHour: 98.34
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    posSystem: 99.97, // uptime %
    inventorySystem: 99.94,
    ecommerceSystem: 99.89,
    paymentProcessing: 99.99,
    averageTransactionTime: 2.34, // seconds
    systemResponseTime: 0.145, // seconds
    fraudDetection: 99.2, // accuracy %
    dataIntegration: 98.8 // success rate %
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update retail metrics
      setRetailMetrics(prev => ({
        ...prev,
        totalRevenue: prev.totalRevenue + (Math.random() * 10000),
        totalTransactions: prev.totalTransactions + Math.floor(Math.random() * 50),
        averageOrderValue: Math.max(100, Math.min(200, prev.averageOrderValue + (Math.random() - 0.5) * 5)),
        conversionRate: Math.max(2.5, Math.min(5.0, prev.conversionRate + (Math.random() - 0.5) * 0.1)),
        stockoutItems: Math.max(100, Math.min(400, prev.stockoutItems + Math.floor((Math.random() - 0.7) * 10))),
        fulfillmentRate: Math.max(95, Math.min(100, prev.fulfillmentRate + (Math.random() - 0.5) * 0.1)),
        customerSatisfaction: Math.max(4.0, Math.min(5.0, prev.customerSatisfaction + (Math.random() - 0.5) * 0.05))
      }));

      // Update store operations
      setStoreOperations(prev => prev.map(store => ({
        ...store,
        revenue: store.revenue + (Math.random() * 5000),
        transactions: store.transactions + Math.floor(Math.random() * 25),
        aov: Math.max(80, Math.min(250, store.aov + (Math.random() - 0.5) * 3)),
        conversion: Math.max(2.0, Math.min(6.0, store.conversion + (Math.random() - 0.5) * 0.1)),
        footTraffic: store.footTraffic + Math.floor((Math.random() - 0.3) * 50),
        inventoryTurnover: Math.max(4.0, Math.min(15.0, store.inventoryTurnover + (Math.random() - 0.5) * 0.1))
      })));

      // Update inventory management
      setInventoryManagement(prev => prev.map(category => ({
        ...category,
        stockLevel: Math.max(50, Math.min(100, category.stockLevel + (Math.random() - 0.6) * 2)),
        reorderAlerts: Math.max(0, category.reorderAlerts + Math.floor((Math.random() - 0.7) * 5)),
        fastMoving: category.fastMoving + Math.floor((Math.random() - 0.3) * 10),
        turnoverRate: Math.max(3.0, Math.min(20.0, category.turnoverRate + (Math.random() - 0.5) * 0.2))
      })));

      // Update supply chain monitoring
      setSupplyChainMonitoring(prev => prev.map(supplier => ({
        ...supplier,
        onTimeDelivery: Math.max(70, Math.min(100, supplier.onTimeDelivery + (Math.random() - 0.5) * 1)),
        qualityScore: Math.max(3.0, Math.min(5.0, supplier.qualityScore + (Math.random() - 0.5) * 0.05)),
        activeOrders: Math.max(20, supplier.activeOrders + Math.floor((Math.random() - 0.3) * 5)),
        delayedOrders: Math.max(0, supplier.delayedOrders + Math.floor((Math.random() - 0.8) * 3))
      })));

      // Update POS analytics
      const newPosData = {
        time: new Date().toLocaleTimeString(),
        revenue: retailMetrics.totalRevenue / 1000000, // Convert to millions for chart
        transactions: retailMetrics.totalTransactions,
        aov: retailMetrics.averageOrderValue,
        conversion: retailMetrics.conversionRate
      };
      
      setPosAnalytics(prev => [...prev.slice(1), newPosData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        posSystem: Math.max(99.5, Math.min(100, prev.posSystem + (Math.random() - 0.3) * 0.01)),
        inventorySystem: Math.max(99.5, Math.min(100, prev.inventorySystem + (Math.random() - 0.3) * 0.01)),
        averageTransactionTime: Math.max(1.5, Math.min(4.0, prev.averageTransactionTime + (Math.random() - 0.5) * 0.1)),
        systemResponseTime: Math.max(0.05, Math.min(0.5, prev.systemResponseTime + (Math.random() - 0.5) * 0.02)),
        fraudDetection: Math.max(98, Math.min(100, prev.fraudDetection + (Math.random() - 0.5) * 0.2))
      }));

      // Occasionally add new retail alerts
      if (Math.random() > 0.95) {
        const alertTypes = ['Inventory Stockout', 'Supplier Delay', 'Sales Surge', 'System Issue', 'Security Alert'];
        const severities = ['info', 'warning', 'critical'];
        const stores = storeOperations.map(s => s.name);
        
        const newAlert = {
          id: `RETAIL-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time retail operations alert generated',
          timestamp: new Date(),
          status: 'active',
          store: stores[Math.floor(Math.random() * stores.length)],
          impact: ['low', 'medium', 'high', 'positive'][Math.floor(Math.random() * 4)]
        };
        
        setRetailAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [retailMetrics.totalRevenue, retailMetrics.totalTransactions, retailMetrics.averageOrderValue, retailMetrics.conversionRate]);

  const getStoreStatusColor = (status) => {
    switch (status) {
      case 'performing': return '#10B981';
      case 'underperforming': return '#F59E0B';
      case 'attention_needed': return '#EF4444';
      case 'excellent': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getInventoryStatusColor = (status) => {
    switch (status) {
      case 'optimal': return '#10B981';
      case 'attention': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'overstocked': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getSupplierStatusColor = (status) => {
    switch (status) {
      case 'reliable': return '#10B981';
      case 'issues': return '#F59E0B';
      case 'review_needed': return '#EF4444';
      case 'excellent': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      case 'caution': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const salesByCategory = [
    { name: 'Electronics', value: 34.2, color: '#3B82F6' },
    { name: 'Clothing', value: 28.7, color: '#10B981' },
    { name: 'Footwear', value: 18.9, color: '#8B5CF6' },
    { name: 'Accessories', value: 11.4, color: '#F59E0B' },
    { name: 'Home & Garden', value: 6.8, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <ShoppingCart className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">RETAIL OPERATIONS CENTER</h1>
            <p className="text-gray-400">Real-time inventory, supply chain monitoring, POS analytics, customer insights & store operations</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              ${(retailMetrics.totalRevenue / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-gray-400">DAILY REVENUE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {retailMetrics.totalTransactions.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">TRANSACTIONS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">${retailMetrics.averageOrderValue.toFixed(2)}</div>
            <div className="text-xs text-gray-400">AVG ORDER</div>
          </div>
        </div>
      </div>

      {/* Retail KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">INVENTORY</span>
          </div>
          <div className="text-xl font-bold text-white">${(retailMetrics.inventoryValue / 1000000).toFixed(1)}M</div>
          <div className="text-xs text-gray-400">Total Value</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">STOCKOUTS</span>
          </div>
          <div className="text-xl font-bold text-white">{retailMetrics.stockoutItems}</div>
          <div className="text-xs text-gray-400">Items</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">CONVERSION</span>
          </div>
          <div className="text-xl font-bold text-white">{retailMetrics.conversionRate.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Rate</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Truck className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">FULFILLMENT</span>
          </div>
          <div className="text-xl font-bold text-white">{retailMetrics.fulfillmentRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Rate</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">SATISFACTION</span>
          </div>
          <div className="text-xl font-bold text-white">{retailMetrics.customerSatisfaction.toFixed(1)}/5.0</div>
          <div className="text-xs text-gray-400">Score</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CreditCard className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">POS UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.posSystem.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Store Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2 text-blue-400" />
            STORE OPERATIONS
          </h3>
          <div className="space-y-3">
            {storeOperations.map(store => (
              <div key={store.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getStoreStatusColor(store.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{store.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getStoreStatusColor(store.status)}20`, 
                      color: getStoreStatusColor(store.status) 
                    }}>
                      {store.status.toUpperCase().replace('_', ' ')}
                    </span>
                    {store.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {store.alerts} Alert{store.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {store.location} • {store.staffCount} Staff
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenue</span>
                    <span className="text-green-400">${(store.revenue / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transactions</span>
                    <span className="text-blue-400">{store.transactions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AOV</span>
                    <span className="text-purple-400">${store.aov.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Conversion</span>
                    <span className="text-white">{store.conversion.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Traffic: {store.footTraffic.toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    Turnover: {store.inventoryTurnover.toFixed(1)}x
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Management */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2 text-green-400" />
            INVENTORY MANAGEMENT
          </h3>
          <div className="space-y-3">
            {inventoryManagement.map(category => (
              <div key={category.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getInventoryStatusColor(category.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{category.category}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getInventoryStatusColor(category.status)}20`, 
                      color: getInventoryStatusColor(category.status) 
                    }}>
                      {category.status.toUpperCase()}
                    </span>
                    {category.reorderAlerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-900 text-orange-400">
                        {category.reorderAlerts} Reorders
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stock Level</span>
                    <span className="text-green-400">{category.stockLevel.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Items</span>
                    <span className="text-blue-400">{category.totalItems.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fast Moving</span>
                    <span className="text-purple-400">{category.fastMoving}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Turnover</span>
                    <span className="text-white">{category.turnoverRate.toFixed(1)}x</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Value: ${(category.inventoryValue / 1000000).toFixed(1)}M
                  </span>
                  <span className="text-gray-500">
                    Slow: {category.slowMoving} items
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Truck className="w-5 h-5 mr-2 text-yellow-400" />
            SUPPLY CHAIN & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {supplyChainMonitoring.slice(0, 3).map(supplier => (
              <div key={supplier.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{supplier.name}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getSupplierStatusColor(supplier.status) }}
                  />
                </div>
                
                <div className="text-xs text-gray-400 mb-2">{supplier.category}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">On-Time</span>
                    <span className="text-green-400">{supplier.onTimeDelivery.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quality</span>
                    <span className="text-blue-400">{supplier.qualityScore.toFixed(1)}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lead Time</span>
                    <span className="text-purple-400">{supplier.leadTime}d</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Orders</span>
                    <span className="text-white">{supplier.activeOrders}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Volume: ${(supplier.orderVolume / 1000000).toFixed(1)}M
                  </span>
                  {supplier.delayedOrders > 0 && (
                    <span className="text-red-400">
                      {supplier.delayedOrders} Delayed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Retail Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Operations Alerts</div>
            <div className="space-y-2">
              {retailAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.store}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time POS Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME POS ANALYTICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={posAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Revenue ($M)"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="transactions" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Transactions (K)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="aov" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="AOV ($)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="conversion" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Conversion %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">SALES DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={salesByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {salesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Sales Share']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {salesByCategory.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-gray-400 text-sm">{category.name}</span>
                  </div>
                  <span className="text-white font-semibold">{category.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">POS System</span>
                    <span className="text-green-400">{systemMetrics.posSystem.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Inventory System</span>
                    <span className="text-blue-400">{systemMetrics.inventorySystem.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transaction Time</span>
                    <span className="text-purple-400">{systemMetrics.averageTransactionTime.toFixed(2)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fraud Detection</span>
                    <span className="text-green-400">{systemMetrics.fraudDetection.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Retail Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Retail Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <ShoppingCart className="w-3 h-3 inline mr-1" />
                  Store Analytics
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Package className="w-3 h-3 inline mr-1" />
                  Inventory Control
                </button>
                <button className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-xs transition-colors">
                  <Truck className="w-3 h-3 inline mr-1" />
                  Supply Chain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailOperationsCenter;